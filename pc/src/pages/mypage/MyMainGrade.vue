<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const memberGradeBenefitAPI = ref<MemberGradeBenefitAPI>();
	const memberInfoAPI = ref<MemberInfoAPI>();

	// api
	Api.getAll([
		{ key: `CS_GRADE_BENEFIT_INFO`, ref: memberGradeBenefitAPI },
		{ key: `AUTH_REFRESH_TOKEN`, ref: memberInfoAPI },
	]);
</script>

<template>
	<h5 class="mm_heading">
		<b>회원등급 및 혜택</b>
	</h5>

	<!-- 회원등급 및 혜택 -->
	<!-- (D) 현재 회원의 등급 tr태그에 T=grade-on 클래스를 추가해줍니다 -->
	<div class="mm_grade">
		<table>
			<colgroup>
				<col style="width: 240px;">
				<col style="width: 246px;">
				<col style="width: 128px;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>등급</b>
					</th>
					<th scope="col">
						<b>등급조건</b>
					</th>
					<th scope="col">
						<b>등급 적립율</b>
					</th>
					<th scope="col">
						<b>등급별 쿠폰</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="grade in memberGradeBenefitAPI?.grades.slice().reverse()"
					:key="grade.id"
					:class="[`T=level${grade.id}`, {'T=grade-on': grade.name === memberInfoAPI?.user.grade.name}]"
				>
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="grade.image_url"
							></LazyloadMUI>
							<strong>{{ grade.name }}</strong>
						</p>
					</th>
					<td v-if="grade.grade_up_sell_price_condition != 0 && grade.grade_up_sell_amount_condition != 0">
						<b>{{ grade.grade_up_sell_price_condition }} 이상, {{ grade.grade_up_sell_amount_condition }}건 이상 구매</b>
					</td>
					<td v-else>
						<b>신규 회원 및 미구매</b>
					</td>
					<td><b>{{ grade.purchase_benefit_rate }}%</b></td>
					<td v-if="grade.coupons != null">
						<ul>
							<li
								v-for="coupon in grade.coupons"
								:key="coupon.id"
							>
								<div class="mm_coupon">
									<a
										class="mm_coupon-inner"
										:href="grade.name === memberInfoAPI?.user.grade.name ? '#' : undefined"
									>
										<p class="text_download">쿠폰받기<i class="ico_coupon-download"></i></p>
										<p class="text_percent"><strong>{{ coupon.discount_amount }}</strong><sub v-if="coupon.discount_type === 'rate'">%</sub><sub v-else-if="coupon.discount_type === 'KRW'">원</sub></p>
										<p class="text_coupon">등급할인 쿠폰</p>
									</a>
								</div>
								<strong class="text_amount"><span>x</span> <template v-if="coupon.is_unlimited">무제한 발급</template><template v-else>{{ coupon.download_limit }}장</template></strong>
							</li>
						</ul>
					</td>
					<td v-else>
						<b>-</b>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- 유의사항 -->
	<div class="mm_note">
		<ul>
			<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
			<li>등급별 쿠폰은 매월 1일 다운로드 가능하며, 해당 월에 한하여 사용 가능합니다.</li>
			<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택 관리 &#62; 보유 쿠폰</strong> 페이지에서 확인 가능합니다.</li>
			<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타 쿠폰과 중복 사용 불가합니다.</li>
		</ul>
	</div>
</template>