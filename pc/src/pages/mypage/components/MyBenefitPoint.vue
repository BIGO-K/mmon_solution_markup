<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<BenefitPointAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_POINT_HISTORY`, ref: listAPI },
	]);
</script>

<template>
	<p class="text_quantity">
		내가 보유한 적립금<strong>{{ listAPI?.total_point_balance }}</strong><sub>원</sub>
	</p>
	<div class="m_my-benefit-point">
		<!-- 기간 설정 -->
		<!-- (D) 현재 조회기간에 해당하는 mm_btn의 'T=light' 클래스가 'T=primary'로 교체되며, '선택됨' 타이틀을 추가합니다 -->
		<div class="m...point-period">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=xs T=line T=primary"
					title="선택됨"
				>
					<b>1개월</b>
				</button>
				<button
					type="button"
					class="mm_btn T=xs T=line T=light"
				>
					<b>3개월</b>
				</button>
				<button
					type="button"
					class="mm_btn T=xs T=line T=light"
				>
					<b>6개월</b>
				</button>
			</div>
			<span class="text_period">조회기간: 2022.02.19 ~ 2022.03.19</span>
		</div>

		<!-- 적립금 내역 -->
		<!-- (D) 지급 적립금인 경우 적립금 b태그에 mm_text-secondary 클래스를 추가합니다 -->
		<div class="m_my-table">
			<table>
				<colgroup>
					<col style="width: 494px;">
					<col style="width: 224px;">
					<col>
					<col>
					<col>
				</colgroup>
				<thead>
					<tr>
						<th scope="col">
							<b>내역</b>
						</th>
						<th scope="col">
							<b>주문번호</b>
						</th>
						<th scope="col">
							<b>지급일/차감일</b>
						</th>
						<th scope="col">
							<b>유효일자</b>
						</th>
						<th scope="col">
							<b>적립금</b>
						</th>
					</tr>
				</thead>
				<tbody
					v-if="listAPI != null && listAPI.paginator.data.length < 1"
				>
					<tr>
						<td colspan="5">
							<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
							<None>적립/사용 내역이 없습니다</None>
						</td>
					</tr>
				</tbody>
				<tbody
					v-else
				>
					<tr
						v-for="(point, index) in listAPI?.paginator.data"
						:key="index"
					>
						<td><p>{{ point.description }}</p></td>
						<td>
							<a
								v-if="point.order_id"
								class="btn_order"
								href="#"
							>
								<b>{{ point.order_id }}</b><i class="ico_link T=sm"></i>
							</a>
							<b v-else>-</b>
						</td>
						<td><b>{{ point.created_at }}</b></td>
						<td>
							<b v-if="point.expire_at">{{ point.expire_at }}</b>
							<b v-else>-</b>
						</td>
						<td>
							<b
								v-if="point.is_earned"
								class="mm_text-variable"
							>+ {{ point.point_amount }}</b>
							<b v-else>- {{ point.point_amount }}</b>
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
			<i class="ico_note"></i><b>적립금 유의사항</b>
		</h6>
		<ul>
			<li>적립금은 주문하실 때 현금처럼 이용 가능하며 다른 결제 수단과 함께 사용하실 수 있습니다.</li>
			<li>적립금은 현금으로 환불되지 않습니다.</li>
			<li>적립금은 <strong>1,000원 이상 보유 시 가능</strong>합니다. 단, <strong>최종결제금액 대비 최대 5% 사용 가능</strong>합니다. (할인 적용 후 최종 구매가 기준)</li>
			<li>적립금은 구매한 상품의 주문 상태가 <strong>구매 확정 단계로 변경 시 지급</strong>되며, 취소 / 반품 시 재적립이 가능합니다.</li>
			<li>적립금은 지급일 기준으로 <strong>00개월 후 소멸</strong>됩니다.</li>
			<li>배송 완료 후 구매확정 상태로 자동 변경된 상품의 적립금은 익일 4시에 지급됩니다.</li>
		</ul>
	</section>
</template>