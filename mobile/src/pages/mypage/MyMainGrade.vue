<script setup lang="ts">
	import { computed, ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const memberInfoAPI = ref<MemberInfoAPI>();
	const memberGradeConditionAPI = ref<MemberGradeConditionAPI>();
	const memberGradeBenefitAPI = ref<MemberGradeBenefitAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<MemberInfoAPI>(`AUTH_REFRESH_TOKEN`, memberInfoAPI);
	Api.get<MemberGradeConditionAPI>(`MEMBER_AGGREGATES_GRADEUP_CONDITION`, memberGradeConditionAPI);
	Api.get<MemberGradeBenefitAPI>(`CS_GRADE_BENEFIT_INFO`, memberGradeBenefitAPI);

	const upgradeConditionInfo = computed(() => {

		const amountPercent = ref(0);
		const countPercent = ref(0);
		const amountNecessity = ref(0);
		const countNecessity = ref(0);

		if (memberGradeConditionAPI.value?.grade_up_condition != null) {
			amountPercent.value = (memberGradeConditionAPI.value?.grade_up_condition.order_amount / memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_amount_condition * 100 >= 100)
				? 100
				: memberGradeConditionAPI.value?.grade_up_condition.order_amount / memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_amount_condition * 100;

			countPercent.value = (memberGradeConditionAPI.value?.grade_up_condition.order_count / memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_count_condition * 100 >= 100)
				? 100
				: memberGradeConditionAPI.value?.grade_up_condition.order_count / memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_count_condition * 100;

			amountNecessity.value = (memberGradeConditionAPI.value?.grade_up_condition.order_amount >= memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_amount_condition)
				? 0
				: (memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_amount_condition - memberGradeConditionAPI.value?.grade_up_condition.order_amount);

			countNecessity.value = (memberGradeConditionAPI.value?.grade_up_condition.order_count >= memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_count_condition)
				? 0
				: (memberGradeConditionAPI.value?.grade_up_condition.grade_up_order_count_condition - memberGradeConditionAPI.value?.grade_up_condition.order_count);
		}

		return {
			amountPercent,
			countPercent,
			amountNecessity,
			countNecessity,
		};

	});
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>등급 혜택 안내</b></h1>
		</template>

		<template #content>
			<!-- 회원등급정보 -->
			<!--
				(D) 'm_popup-mymember' 영역에 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
				등급 : level5, level4, level3, level2, level1
			-->
			<section
				class="m_popup-mymember"
				:class="`T=level${memberInfoAPI?.user.grade.id}`"
			>
				<h2>
					<i
						class="mm_bg-contain image_grade"
						:data-lazyload="`{ '_src': '${memberInfoAPI?.user.grade.image_url}' }`"
					></i>
					<b>{{ memberInfoAPI?.user.name }}님은 <strong>{{ memberInfoAPI?.user.grade.name }}</strong>입니다</b>
				</h2>
				<!-- 등급 구매정보 -->
				<div class="m_popup-mymember-amount">
					<!-- 구매금액 -->
					<div class="m...amount-progress">
						<dl class="mm_flex">
							<dt class="mm_flex-equal">
								구매금액<small>최근 12개월</small>
							</dt>
							<dd class="text_price">
								<strong>{{ memberGradeConditionAPI?.grade_up_condition.order_amount }}</strong>
							</dd>
						</dl>
						<!-- (D) 'm...amount-progress-bar > i'의 title, width 값에 목표 금액 대비 현재 구매액의 비율값을 추가합니다. -->
						<b class="m...amount-progress-bar">
							<i
								:style="`width: ${upgradeConditionInfo.amountPercent.value}%;`"
								:title="`${upgradeConditionInfo.amountPercent.value}%`"
							></i>
						</b>
						<p class="text_price">
							<strong class="text_min">0</strong>
							<strong class="text_max">{{ memberGradeConditionAPI?.grade_up_condition.grade_up_order_amount_condition }}</strong>
						</p>
					</div>

					<!-- 구매횟수 -->
					<div class="m...amount-progress">
						<dl class="mm_flex">
							<dt class="mm_flex-equal">
								구매횟수<small>최근 12개월</small>
							</dt>
							<dd><strong>5</strong><sub>건</sub></dd>
						</dl>
						<!-- (D) 'm...amount-progress-bar > i'의 title, width 값에 목표 금액 대비 현재 구매액의 비율값을 추가합니다. -->
						<b class="m...amount-progress-bar">
							<i
								:style="`width: ${upgradeConditionInfo.countPercent.value}%;`"
								:title="`${upgradeConditionInfo.countPercent.value}%`"
							></i>
						</b>
						<p>
							<strong class="text_min">0<sub>건</sub></strong>
							<strong class="text_max">{{ memberGradeConditionAPI?.grade_up_condition.grade_up_order_count_condition }}<sub>건</sub></strong>
						</p>
					</div>
					<p>
						<b>추가로 <strong>{{ upgradeConditionInfo.amountNecessity }}</strong>원 또는 <strong>{{ upgradeConditionInfo.countNecessity }}</strong>건 더 구매하시면</b>
						<span><strong>{{ memberGradeConditionAPI?.grade_up_condition.is_top_level ? memberInfoAPI?.user.grade.name : memberGradeConditionAPI?.grade_up_condition.next_grade_name }}</strong>{{ memberGradeConditionAPI?.grade_up_condition.is_top_level ? '등급을 유지할 수 있어요' : '혜택을 받으실 수 있어요' }}</span>
						<!-- (D) 버튼 클릭 시 노출 되어야 하는 등급별 혜택 안내 내용의 index 값을 moveToBenefit 이벤트 parameter 값으로 넣어줍니다 -->
						<button
							type="button"
							class="btn_benefit"
							onclick="moveToBenefit(0);"
						>
							<b>혜택보기</b><i class="ico_link-circle"></i>
						</button>
					</p>
				</div>

				<!-- 등급 쿠폰정보 -->
				<template
					v-for="grade in memberGradeBenefitAPI?.grades"
					:key="grade.id"
				>
					<div
						v-if="grade.name === memberInfoAPI?.user.grade.name"
						class="m_popup-mymember-coupon"
					>
						<ul>
							<li
								v-for="coupon in grade.coupons"
								:key="coupon.id"
							>
								<strong
									v-if="coupon.is_unlimited"
									class="T=unlimited"
								>
									무제한
								</strong>
								<strong v-else><span>x</span>{{ coupon.download_limit }}<sub>장</sub></strong>
								<div class="mm_coupon T=xl">
									<a
										class="mm_coupon-inner"
										href="#"
									>
										<p :class="(coupon.discount_type === 'rate') ? 'text_percent' : 'text_price'">
											<strong>{{ coupon.discount_amount }}</strong><sub v-if="coupon.discount_type === 'rate'">%</sub>
										</p>
										<p class="text_coupon">등급별 쿠폰</p>
										<p class="text_download">쿠폰받기<i class="ico_coupon-download T=circle"></i></p>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</template>

				<!-- 유의사항 -->
				<div class="mm_note">
					<div
						class="mm_dropdown S=on"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="접어놓기"
						>
							<i class="ico_info"></i><b>쿠폰 유의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
									<li>등급별 쿠폰은 매월 1일 자동 발급되며 해당월에 한하여 사용 가능합니다.</li>
									<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong>에서 확인할 수 있습니다.</li>
									<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타쿠폰과 중복 사용 불가합니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr class="mm_line">

			<div class="mm_grade">
				<h3><b>등급별 혜택 안내</b></h3>
				<p>최근 3개월간 실 결제금액을 기준으로 매월 1일<br>구매등급에 반영됩니다</p>
				<div class="mm_accordion">
					<ul>
						<li
							v-for="grade, index in memberGradeBenefitAPI?.grades.slice().reverse()"
							:key="grade.id"
						>
							<dl
								class="mm_dropdown"
								:class="{ 'S=on': grade.name === memberInfoAPI?.user.grade.name }"
								data-dropdown="{ '_group': 'dev_accrodion' }"
							>
								<dt
									class="btn_dropdown"
									tabindex="0"
									title="펼쳐보기"
								>
									<p class="text_grade">
										<strong>
											<i
												class="mm_bg-cover image_grade"
												:data-lazyload="`{ '_src': '${grade.image_url}' }`"
											></i>
											등급{{ index + 1 }}
										</strong>
										<span v-if="grade.grade_up_sell_price_condition != 0 && grade.grade_up_sell_amount_condition != 0">
											{{ grade.grade_up_sell_price_condition }} 이상, {{ grade.grade_up_sell_amount_condition }}건 이상 구매
										</span>
										<span v-else>신규 회원 및 미구매</span>
									</p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<dl>
											<dt>등급별 쿠폰</dt>
											<template v-if="grade.coupons != null">
												<dd
													v-for="coupon in grade.coupons"
													:key="coupon.id"
												>
													<p>
														{{ coupon.discount_amount }}
														<template v-if="coupon.discount_type === 'rate'">
															%
														</template>
														<template v-else-if="coupon.discount_type === 'KRW'">
															원
														</template> 할인
													</p>
													<div class="mm_coupon">
														<div class="mm_coupon-inner">
															<p :class="(coupon.discount_type === 'rate') ? 'text_percent' : 'text_price'">
																<strong>{{ coupon.discount_amount }}</strong><sub v-if="coupon.discount_type === 'rate'">%</sub>
															</p>
															<p class="text_coupon">
																등급할인 쿠폰
															</p>
														</div>
													</div>
													<span
														v-if="coupon.is_unlimited"
														class="text_amount T=unlimited"
													>
														<span>x</span> 무제한
													</span>
													<span
														v-else
														class="text_amount"
													>
														x {{ coupon.download_limit }}<sub>장</sub>
													</span>
												</dd>
											</template>
											<dd v-else>
												-
											</dd>
										</dl>
										<dl>
											<dt>등급 적립율</dt>
											<dd>{{ grade.purchase_benefit_rate }}%</dd>
										</dl>
									</div>
								</dd>
							</dl>
						</li>
					</ul>
				</div>
			</div>

			<!-- <script>
				function moveToBenefit(__targetIndex) {

				var $gradeList = mm.find('.mm_accordion li');

				if (__targetIndex < 0) __targetIndex = 0;

				var $target = $gradeList[__targetIndex].children[0];
				mm.scroll.to($target, { _margin: 45 });
				if (!$target.classList.contains('S=on')) mm.find('.btn_dropdown', $target)[0].click();

				}
			</script> -->
		</template>
	</LayoutPopup>
</template>