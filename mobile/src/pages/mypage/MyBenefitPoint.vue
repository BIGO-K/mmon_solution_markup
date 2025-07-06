<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const benefitPointAPI = ref<BenefitPointAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<BenefitPointAPI>(`MEMBER_POINT_HISTORY`, benefitPointAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>혜택관리</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyBenefitCoupon' }">
							<b>보유 쿠폰</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyBenefitPoint' }"
							title="선택됨"
						>
							<b>보유 적립금</b>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="m_mybenefit">
				<div class="m_mybenefit-head">
					<h3><b>내가 보유한 적립금</b><strong class="mm_text-variable">{{ benefitPointAPI?.total_point_balance }}<sub>원</sub></strong></h3>
				</div>

				<!-- 기간조회 -->
				<div class="m_mybenefit-period">
					<!-- (D) 현재 조회기간에 해당하는 mm_btn에 'T=lightest'클래스를 지우고, 'T=dark'클래스와 '선택됨' 타이틀을 추가합니다 -->
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=sm T=line T=dark"
								title="선택됨"
							>
								<b>1개월</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=lightest"
							>
								<b>3개월</b>
							</button>
							<button
								type="button"
								class="mm_btn T=sm T=line T=lightest"
							>
								<b>6개월</b>
							</button>
						</div>
					</div>
					<p>조회기간: 2022.05.19 ~ 2022.06.19</p>
				</div>

				<p
					v-if="(benefitPointAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>적립/사용 내역이 없습니다
				</p>

				<!-- 적립금내역 -->
				<!-- (D) 'text_point' 영역에 지급 적립금에는 'mm_text-variable' 클래스를 추가합니다. -->
				<div
					v-else
					class="m_mybenefit-point"
				>
					<ul>
						<li
							v-for="(point, index) in benefitPointAPI?.paginator.data"
							:key="index"
						>
							<!-- <router-link :to="{ name: (point.order_id ? 'MyOrderDetail' : undefined) }"> -->
							<!-- <router-link :to="true? { name: 'MyOrderDetail' } : ''"> -->
							<router-link
								:to="point.order_id? { name: 'MyOrderDetail' } : ''"
							>
								<h6 class="mm_strapline">
									<b>{{ point.description }}</b>
								</h6>
								<p
									v-if="point.order_id"
									class="text_order"
								>
									주문번호: {{ point.order_id }}
								</p>
								<p>
									적립금
									<template v-if="point.is_earned">
										지급일
									</template>
									<template v-else>
										차감일
									</template>
									: {{ point.created_at }}
								</p>
								<p v-if="point.expire_at">
									유효일자: {{ point.expire_at }}
								</p>
								<p
									v-if="point.is_earned"
									class="text_point mm_text-variable"
								>
									+ {{ point.point_amount }}
								</p>
								<p
									v-else
									class="text_point"
								>
									- {{ point.point_amount }}
								</p>
							</router-link>
						</li>
					</ul>
				</div>

				<Pagination
					v-if="benefitPointAPI?.paginator != null"
					:total-page="Math.ceil(benefitPointAPI.paginator.total / benefitPointAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>

				<!-- 유의사항 -->
				<div class="mm_note">
					<div
						class="mm_dropdown"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="펼쳐놓기"
						>
							<i class="ico_info"></i><b>적립금 유의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>적립금은 주문하실 때 현금처럼 이용 가능하며 다른 결제 수단과 함께 사용하실 수 있습니다.</li>
									<li>적립금은 현금으로 환불되지 않습니다.</li>
									<li>적립금은 <strong>1000원 이상 보유 시 가능</strong>합니다. 단, <strong>최종결제금액 대비 최대 5% 사용 가능</strong>합니다. (할인 적용 후 최종 구매가 기준)</li>
									<li>적립금은 구매한 상품의 주문 상태가 <strong>구매 확정 단계로 변경 시 지급</strong>되며, 취소 / 반품 시 재적립이 가능합니다.</li>
									<li>적립금은 지급일 기준으로 <strong>00개월 후 소멸</strong>됩니다.</li>
									<li>배송 완료 후 구매확정 상태로 자동 변경된 상품의 적립금은 익일 4시에 지급됩니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>