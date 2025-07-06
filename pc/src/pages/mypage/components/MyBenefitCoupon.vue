<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<BenefitCouponAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_COUPON_REGIST_LIST`, ref: listAPI },
	]);
</script>

<template>
	<p class="text_quantity">
		사용 가능한 쿠폰<strong>100</strong><sub>장</sub>
	</p>
	<div class="m_my-benefit-coupon">
		<!-- 쿠폰등록 -->
		<div class="m...coupon-register">
			<div class="mm_form_mix-linked">
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="text"
							class="textfield"
							data-text
							maxlength="12"
						><i class="bg_text"></i>
						<span class="text_placeholder">쿠폰 인증 번호를 입력하세요(8자리 ~ 최대 12자리)</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=sm T=dark"
				>
					<b>쿠폰 등록하기</b>
				</button>
			</div>
		</div>

		<!-- 쿠폰 내역 -->
		<div class="m_my-table">
			<table>
				<colgroup>
					<col style="width: 468px;">
					<col style="width: 106px;">
					<col>
					<col>
					<col>
					<col>
				</colgroup>
				<thead>
					<tr>
						<th scope="col">
							<b>쿠폰명</b>
						</th>
						<th scope="col">
							<b>남은 기간</b>
						</th>
						<th scope="col">
							<b>사용가능 수량</b>
						</th>
						<th scope="col">
							<b>발급일자</b>
						</th>
						<th scope="col">
							<b>취득일자</b>
						</th>
						<th scope="col">
							<b>사용 여부</b>
						</th>
					</tr>
				</thead>
				<tbody
					v-if="listAPI != null && listAPI.paginator.data.length < 1"
				>
					<tr>
						<td colspan="6">
							<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
							<None>보유 쿠폰이 없습니다</None>
						</td>
					</tr>
				</tbody>
				<tbody
					v-else
				>
					<tr
						v-for="coupon in listAPI?.paginator.data"
						:key="coupon.id"
					>
						<td>
							<div class="m...coupon-name">
								<div class="mm_coupon T=xs">
									<div class="mm_coupon-inner">
										<p :class="(coupon.coupon.discount_type === 'rate') ? 'text_percent' : 'text_price'">
											<strong>{{ coupon.coupon.discount_amount }}</strong>
											<sub v-if="coupon.coupon.discount_type === 'rate'">%</sub>
										</p>
										<p class="text_coupon">
											{{ coupon.coupon.type_label }}
										</p>
									</div>
								</div>
								<dl>
									<dt>{{ coupon.coupon.title }}</dt>
									<dd>특정 브랜드 상품 30,000원 이상</dd>
								</dl>
							</div>
						</td>
						<td><b>7일</b></td>
						<td>
							<b v-if="coupon.coupon.is_unlimited">무제한 발급</b>
							<b v-else>1장</b>
						</td>
						<td><b>{{ coupon.use_start_at }}</b></td>
						<td><b>{{ coupon.registed_at }}</b></td>
						<td>
							<b
								v-if="coupon.is_usable"
								class="text_status T=status-use"
							>사용 가능</b>
							<b
								v-else
								class="text_status"
							>사용 불가</b>
							<div class="mm_btn_box">
								<a
									class="mm_btn T=xs T=line"
									href="#"
								>
									<b>사용 조건</b><i class="ico_link"></i>
								</a>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<Pagination
		v-if="$route.query.type != 'none' && listAPI?.paginator != null"
		:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>

	<!-- 유의사항 -->
	<section class="mm_note">
		<h6 class="text_title">
			<i class="ico_note"></i><b>쿠폰 유의사항</b>
		</h6>
		<ul>
			<li>쿠폰은 회원에 한해 적용되며, 한 품목당 한장의 쿠폰만 사용할 수 있습니다.</li>
			<li>쿠폰 사용 후 잔액은 환불이 불가하며, 자동 소멸됩니다.</li>
			<li>쿠폰에 따라 유효기간/최소 사용금액과 같은 사용 조건이 상이합니다.</li>
			<li>쿠폰에 따라 금액, 브랜드, 상품, 디바이스별로 사용이 제한될 수 있습니다.</li>
			<li>유효기간이 만료된 쿠폰은 사용할 수 없습니다.</li>
		</ul>
	</section>
</template>