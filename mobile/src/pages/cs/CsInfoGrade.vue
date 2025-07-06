<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const memberGradeBenefitAPI = ref<MemberGradeBenefitAPI>();

	// api
	Api.getAll([
		{ key: `CS_GRADE_BENEFIT_INFO`, ref: memberGradeBenefitAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>회원 등급 및 혜택</b></h1>
		</template>

		<template #content>
			<div class="m_popup-cs-benefit">
				<div class="mm_grade">
					<h3><b>등급별 혜택 안내</b></h3>
					<p>최근 3개월간 실 결제금액을 기준으로 매월 1일<br>구매등급에 반영됩니다</p>
					<div class="mm_accordion">
						<ul>
							<li
								v-for="grade in memberGradeBenefitAPI?.grades.slice().reverse()"
								:key="grade.id"
							>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p class="text_grade">
											<strong>
												<LazyloadMUI
													class="mm_bg-contain image_grade"
													:_src="'/public/images/common/level5.png'"
												></LazyloadMUI>
												{{ grade.name }}
											</strong>
											<span>
												<b
													v-if="grade.name !== 'FAMILY'"
												>
													{{ grade.grade_up_sell_price_condition / 10000 }}만원 이상, {{ grade.grade_up_sell_amount_condition }}건 이상 구매
												</b>
												<b
													v-if="grade.name == 'FAMILY'"
												>
													신규 회원 및 미구매
												</b>
											</span>
										</p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<template v-if="grade.coupons != null && grade.coupons.length > 0">
												<dl
													v-for="(coupon, index) in grade.coupons"
													:key="coupon.id"
												>
													<dt>{{ index === 0 ? '등급별 쿠폰' : '' }}</dt>
													<dd>
														<p>{{ coupon.discount_amount }}원 할인</p>
														<div class="mm_coupon">
															<div class="mm_coupon-inner">
																<p class="text_percent">
																	<strong>{{ coupon.discount_amount }}</strong><sub>원</sub>
																</p>
																<p class="text_coupon">
																	등급할인 쿠폰
																</p>
															</div>
														</div>
														<span
															v-if="coupon.is_unlimited"
															class="text_amount"
														>
															x ∞
														</span>
														<span
															v-else
															class="text_amount"
														>
															{{ `x${coupon.download_limit}` }}<sub>장</sub>
														</span>
													</dd>
												</dl>
											</template>
											<dl v-else>
												<dt>등급별 쿠폰</dt>
												<dd>-</dd>
											</dl>
											<dl>
												<dt>등급 적립율</dt>
												<dd>{{ `${grade.purchase_benefit_rate}%` }}</dd>
											</dl>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
				<div class="mm_note">
					<ul class="mm_inner">
						<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
						<li>등급별 쿠폰은 매월 1일 다운로드 가능하며, 해당 월에 한하여 사용 가능합니다.</li>
						<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong> 페이지에서 확인 가능합니다.</li>
						<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타 쿠폰과 중복 사용 불가합니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>