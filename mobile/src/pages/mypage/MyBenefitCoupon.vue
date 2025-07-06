<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const memberBenefitAPI = ref<MemberBenefitAPI>();
	const benefitCouponAPI = ref<BenefitCouponAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<MemberBenefitAPI>(`MEMBER_AGGREGATES_BENEFIT`, memberBenefitAPI);
	Api.get<BenefitCouponAPI>(`MEMBER_COUPON_REGIST_LIST`, benefitCouponAPI);
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
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyBenefitCoupon' }"
							title="선택됨"
						>
							<b>보유 쿠폰</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyBenefitPoint' }">
							<b>보유 적립금</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="m_mybenefit">
				<div class="m_mybenefit-head">
					<h3><b>사용 가능한 쿠폰</b><strong class="mm_text-variable">{{ memberBenefitAPI?.benefits.coupon_count }}<sub>장</sub></strong></h3>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<button
								type="button"
								class="mm_btn T=sm T=lighter"
							>
								<b>쿠폰 등록하기</b>
							</button>
						</div>
					</div>
				</div>
				<p
					v-if="(benefitCouponAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>보유 쿠폰이 없습니다
				</p>

				<!-- 쿠폰목록 -->
				<div
					v-else
					class="m_mybenefit-coupon"
				>
					<ul>
						<li
							v-for="coupon in benefitCouponAPI?.paginator.data"
							:key="coupon.id"
						>
							<p
								v-if="coupon.is_usable"
								class="text_status"
							>
								사용 가능
							</p>
							<p
								v-else
								class="text_status T=disabled"
							>
								사용 불가
							</p>
							<div class="mm_coupon T=2xl">
								<div class="mm_coupon-inner">
									<p :class="(coupon.coupon.discount_type === 'rate') ? 'text_percent' : 'text_price'">
										<strong>{{ coupon.coupon.discount_amount }}</strong>
										<sub v-if="coupon.coupon.discount_type === 'rate'">%</sub>
									</p>
									<p class="text_coupon">
										{{ coupon.coupon.type_label }}
									</p>
									<p class="text_condition">
										<template v-if="coupon.coupon.apply_range_type === 'all'">
											모든
										</template>
										<template v-else>
											특정
											<template v-if="coupon.coupon.apply_range_type === 'seller'">
												셀러
											</template>
											<template v-else-if="coupon.coupon.apply_range_type === 'category'">
												카테고리
											</template>
											<template v-else-if="coupon.coupon.apply_range_type === 'brand'">
												브랜드
											</template>
										</template>
										상품
										<template v-if="coupon.coupon.maximum_discount_amount > 0">
											{{ coupon.coupon.maximum_discount_amount }}원 이상
										</template>
									</p>
									<p class="text_quantity">
										<span v-if="coupon.coupon.is_unlimited">무제한 발급</span>
										<span v-else>1장</span>
									</p>
								</div>
							</div>
							<div class="m_mybenefit-coupon-using">
								<a href="#"><b>사용 조건</b><i class="ico_link"></i></a>
								<p class="text_period">
									23일 남음
								</p>
								<p class="text_date">
									발급일자: {{ coupon.use_start_at }}
								</p>
								<p class="text_date">
									취득일자: {{ coupon.registed_at }}
								</p>
							</div>
						</li>
					</ul>
				</div>

				<Pagination
					v-if="benefitCouponAPI != null"
					:total-page="Math.ceil(benefitCouponAPI.paginator.total / benefitCouponAPI.paginator.per_page)"
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
							<i class="ico_info"></i><b>쿠폰 유의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>쿠폰은 회원에 한해 적용되며, 한 품목당 한장의 쿠폰만 사용할 수 있습니다.</li>
									<li>쿠폰 사용 후 잔액은 환불이 불가하며, 자동 소멸됩니다.</li>
									<li>쿠폰에 따라 유효기간/최소 사용금액과 같은 사용 조건이 상이합니다.</li>
									<li>쿠폰에 따라 금액, 브랜드, 상품, 디바이스별로 사용이 제한될 수 있습니다.</li>
									<li>유효기간이 만료된 쿠폰은 사용할 수 없습니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>