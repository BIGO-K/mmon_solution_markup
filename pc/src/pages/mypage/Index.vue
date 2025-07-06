<script setup lang="ts">
	import { computed, ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import PersonalMySizeButton from '@/features/personal/components/PersonalMySizeButton.vue';

	const { configFeature } = useConfigStore();
	const memberInfoAPI = ref<MemberInfoAPI>();
	const memberBenefitAPI = ref<MemberBenefitAPI>();
	const memberGradeConditionAPI = ref<MemberGradeConditionAPI>();

	// api
	Api.getAll([
		{ key: `AUTH_REFRESH_TOKEN`, ref: memberInfoAPI },
		{ key: `MEMBER_AGGREGATES_BENEFIT`, ref: memberBenefitAPI },
		{ key: `MEMBER_AGGREGATES_GRADEUP_CONDITION`, ref: memberGradeConditionAPI },
	]);

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
	<div class="G:lnb">
		<!-- 서브상단 -->
		<div class="mm_page-content-head">
			<h3 class="mm_title">
				<b>마이페이지</b>
			</h3>

			<!-- 회원정보 -->
			<!--
				(D) 'm_my-member' 영역에 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
				등급 : level5, level4, level3, level2, level1
			-->
			<section
				class="m_my-member"
				:class="`T=level${memberInfoAPI?.user.grade.id}`"
			>
				<h4 class="m_my-member-title">
					<LazyloadMUI
						class="mm_bg-contain image_grade"
						:_src="memberInfoAPI?.user.grade.image_url"
					></LazyloadMUI>
					<b>{{ memberInfoAPI?.user.name }}님은 <strong>{{ memberInfoAPI?.user.grade.name }}</strong>입니다</b>
				</h4>
				<router-link
					:to="{ name: 'MyMainGrade' }"
					class="mm_btn T=xs T=line T=dark btn_detail"
				>
					<b>혜택 자세히 보기</b><i class="ico_link T=xs"></i>
				</router-link>
				<div class="mm_rside">
					<div class="m_my-member-info">
						<router-link :to="{ name: 'MyBenefit', params: { tab: 'coupon' } }">
							<dl class="mm_flex">
								<dt>보유 쿠폰<i class="ico_link T=xs"></i></dt>
								<dd class="mm_flex-equal">
									<strong>{{ memberBenefitAPI?.benefits.coupon_count }}</strong><sub>장</sub>
								</dd>
							</dl>
						</router-link>
						<router-link :to="{ name: 'MyBenefit', params: { tab: 'point' } }">
							<dl class="mm_flex">
								<dt>보유 적립금<i class="ico_link T=xs"></i></dt>
								<dd class="mm_flex-equal">
									<strong>{{ memberBenefitAPI?.benefits.point }}</strong><sub>원</sub>
								</dd>
							</dl>
						</router-link>
					</div>
					<PersonalMySizeButton v-if="configFeature.personalization"></PersonalMySizeButton>
					<router-link
						:to="{ name: 'MyInfoPWVerify' }"
						class="btn_setup"
					>
						<i class="ico_setup"></i><b>정보관리</b>
					</router-link>
				</div>

				<!-- 등급 조건 -->
				<div
					v-if="$route.name != null && 'MyMainGrade' === $route.name.toString()"
					class="m_my-member-amount"
				>
					<dl>
						<dt>구매금액<small>(최근 3개월)</small></dt>
						<dd class="text_price">
							<strong>{{ memberGradeConditionAPI?.grade_up_condition.order_amount }}</strong>
						</dd>
					</dl>
					<div class="m...amount-progress">
						<!-- (D) 'm...amount-progress-bar > i'의 width, title 값에 목표 금액 대비 현재 구매액의 비율값을 추가합니다. -->
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
					<dl>
						<dt>구매횟수<small>(최근 3개월)</small></dt>
						<dd><strong>{{ memberGradeConditionAPI?.grade_up_condition.order_count }}</strong><sub>건</sub></dd>
					</dl>
					<div class="m...amount-progress T=progress-buy">
						<!-- (D) 'm...amount-progress-bar > i'의 width, title 값에 목표 구매횟수 대비 현재 구매 횟수의 비율값을 추가합니다. -->
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
					<p><i class="ico_plus-circle"></i>추가로 <b class="text_price"><strong>{{ upgradeConditionInfo.amountNecessity }}</strong></b> 또는 <strong>{{ upgradeConditionInfo.countNecessity }}</strong>건 더 구매하시면 <strong>{{ memberGradeConditionAPI?.grade_up_condition.is_top_level ? memberInfoAPI?.user.grade.name : memberGradeConditionAPI?.grade_up_condition.next_grade_name }}</strong> {{ memberGradeConditionAPI?.grade_up_condition.is_top_level ? '등급을 유지할 수 있어요' : '혜택을 받으실 수 있어요' }}</p>
				</div>
			</section>
		</div>

		<!-- lnb -->
		<nav class="mm_lnb">
			<h2 class="mm_lnb-title">
				<b>마이페이지</b>
			</h2>
			<!-- (D) 현재페이지의 a요소에 S=lnb-on 클래스와 '선택됨' 타이틀을 넣어줍니다 -->
			<ul>
				<li>
					<router-link
						:class="{ 'S=lnb-on': $route.name === 'MyRaffleEntry' }"
						:to="{ name: 'MyRaffleEntry' }"
						:title="$route.name === 'MyRaffleEntry' ? '선택됨' : ''"
					>
						<h6><b>래플 응모 내역</b></h6>
					</router-link>
				</li>
				<li>
					<router-link
						:class="{ 'S=lnb-on': $route.name === 'MyOrder' }"
						:to="{ name: 'MyOrder', params: { tab: 'all' } }"
						:title="$route.name === 'MyOrder' && $route.params.tab === 'all' ? '선택됨' : ''"
						:replace="$route.name === 'MyOrder'"
					>
						<h6><b>주문 관리</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyOrder' && $route.params.tab === 'cancel' }"
								:to="{ name: 'MyOrder', params: { tab: 'cancel' } }"
								:title="$route.name === 'MyOrder' && $route.params.tab === 'cancel' ? '선택됨' : ''"
								:replace="$route.name === 'MyOrder'"
							>
								<b>주문 취소</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyOrder' && $route.params.tab === 'return' }"
								:to="{ name: 'MyOrder', params: { tab: 'return' } }"
								:title="$route.name === 'MyOrder' && $route.params.tab === 'return' ? '선택됨' : ''"
								:replace="$route.name === 'MyOrder'"
							>
								<b>주문 반품</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyOrder' && $route.params.tab === 'exchange' }"
								:to="{ name: 'MyOrder', params: { tab: 'exchange' } }"
								:title="$route.name === 'MyOrder' && $route.params.tab === 'exchange' ? '선택됨' : ''"
								:replace="$route.name === 'MyOrder'"
							>
								<b>주문 교환</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link
						:to="{ name: 'MyBenefit' }"
						:replace="$route.name === 'MyBenefit'"
					>
						<h6><b>혜택 관리</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyBenefit' && $route.params.tab === 'coupon' }"
								:to="{ name: 'MyBenefit', params: { tab: 'coupon' } }"
								:title="$route.name === 'MyBenefit' && $route.params.tab === 'coupon' ? '선택됨' : ''"
								:replace="$route.name === 'MyBenefit'"
							>
								<b>보유 쿠폰</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyBenefit' && $route.params.tab === 'point' }"
								:to="{ name: 'MyBenefit', params: { tab: 'point' } }"
								:title="$route.name === 'MyBenefit' && $route.params.tab === 'point' ? '선택됨' : ''"
								:replace="$route.name === 'MyBenefit'"
							>
								<b>보유 적립금</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link
						:to="{ name: 'MyInterest' }"
						:replace="$route.name === 'MyInterest'"
					>
						<h6><b>My 찜</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyInterest' && $route.params.tab === 'product' }"
								:to="{ name: 'MyInterest', params: { tab: 'product' } }"
								:title="$route.name === 'MyInterest' && $route.params.tab === 'product' ? '선택됨' : ''"
								:replace="$route.name === 'MyInterest'"
							>
								<b>찜한 아이템</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyInterest' && $route.params.tab === 'brand' }"
								:to="{ name: 'MyInterest', params: { tab: 'brand' } }"
								:title="$route.name === 'MyInterest' && $route.params.tab === 'brand' ? '선택됨' : ''"
								:replace="$route.name === 'MyInterest'"
							>
								<b>찜한 브랜드</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'MyLatelyList' }">
						<h6><b>최근 본 쇼핑정보</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyLatelyList' }"
								:to="{ name: 'MyLatelyList' }"
								:title="$route.name === 'MyLatelyList' ? '선택됨' : ''"
							>
								<b>최근 본 상품/기획전</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link
						:to="{ name: 'MyReview' }"
						:replace="$route.name === 'MyReview'"
					>
						<h6><b>리뷰 관리</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyReview' && $route.params.tab === 'pending' }"
								:to="{ name: 'MyReview', params: { tab: 'pending' } }"
								:title="$route.name === 'MyReview' && $route.params.tab === 'pending' ? '선택됨' : ''"
								:replace="$route.name === 'MyReview'"
							>
								<b>작성 가능한 리뷰</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyReview' && $route.params.tab === 'completed' }"
								:to="{ name: 'MyReview', params: { tab: 'completed' } }"
								:title="$route.name === 'MyReview' && $route.params.tab === 'completed' ? '선택됨' : ''"
								:replace="$route.name === 'MyReview'"
							>
								<b>작성한 리뷰</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'MyInquiryCounsel' }">
						<h6><b>1:1 문의</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyInquiryCounsel' }"
								:to="{ name: 'MyInquiryCounsel' }"
								:title="$route.name === 'MyInquiryCounsel' ? '선택됨' : ''"
							>
								<b>1:1 문의하기</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyInquiry' }"
								:to="{ name: 'MyInquiry' }"
								:title="$route.name === 'MyInquiry' ? '선택됨' : ''"
								:replace="$route.name === 'MyInquiry'"
							>
								<b>문의 관리</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'MyShipping' }">
						<h6><b>배송지연 신고</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyShipping' && $route.params.tab === 'report' }"
								:to="{ name: 'MyShipping', params: { tab: 'report' } }"
								:title="$route.name === 'MyShipping' && $route.params.tab === 'report' ? '선택됨' : ''"
								:replace="$route.name === 'MyShipping'"
							>
								<b>배송지연 신고</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyShipping' && $route.params.tab === 'result' }"
								:to="{ name: 'MyShipping', params: { tab: 'result' } }"
								:title="$route.name === 'MyShipping' && $route.params.tab === 'result' ? '선택됨' : ''"
								:replace="$route.name === 'MyShipping'"
							>
								<b>배송지연 처리결과</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'MySoldout' }">
						<h6><b>품절취소 신고</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MySoldout' && $route.params.tab === 'report' }"
								:to="{ name: 'MySoldout', params: { tab: 'report' } }"
								:title="$route.name === 'MySoldout' && $route.params.tab === 'report' ? '선택됨' : ''"
								:replace="$route.name === 'MySoldout'"
							>
								<b>품절취소 신고</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MySoldout' && $route.params.tab === 'result' }"
								:to="{ name: 'MySoldout', params: { tab: 'result' } }"
								:title="$route.name === 'MySoldout' && $route.params.tab === 'result' ? '선택됨' : ''"
								:replace="$route.name === 'MySoldout'"
							>
								<b>품절취소 처리결과</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name: 'MyInfoModify' }">
						<h6><b>회원정보 관리</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyInfoModify' }"
								:to="{ name: 'MyInfoModify' }"
								:title="$route.name === 'MyInfoModify' ? '선택됨' : ''"
							>
								<b>회원정보 수정</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{ 'S=lnb-on': $route.name === 'MyRefundAccount' }"
								:to="{ name: 'MyRefundAccount'}"
								:title="$route.name === 'MyRefundAccount' ? '선택됨' : ''"
							>
								<b>환불 계좌 관리</b>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>

		<!-- 본문 내용 -->
		<div class="mm_page-content-body">
			<router-view></router-view>
		</div>
	</div>
</template>