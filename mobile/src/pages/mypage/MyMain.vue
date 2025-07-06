<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import PersonalMySizeButton from '@/features/personal/components/PersonalMySizeButton.vue';
	import RaffleEntryButton from '@/features/raffle/components/RaffleEntryButton.vue';
	import EasypayPasswordButton from '@/features/easypay/components/EasypayPasswordButton.vue';

	const memberInfoAPI = ref<MemberInfoAPI>();
	const memberBenefitAPI = ref<MemberBenefitAPI>();
	const memberOngoingOrderAPI = ref<MemberOngoingOrderAPI>();
	const latelyViewProductAPI = ref<LatelyViewProductAPI>();
	const recentPromotionAPI = ref<RecentPromotionAPI>();

	Api.get<MemberInfoAPI>(`AUTH_REFRESH_TOKEN`, memberInfoAPI);
	Api.get<MemberBenefitAPI>(`MEMBER_AGGREGATES_BENEFIT`, memberBenefitAPI);
	Api.get<MemberOngoingOrderAPI>(`MEMBER_AGGREGATES_ORDER`, memberOngoingOrderAPI);
	Api.get<LatelyViewProductAPI>(`MEMBER_RECENT_VIEW_GOODS`, latelyViewProductAPI);
	Api.get<RecentPromotionAPI>(`MEMBER_RECENT_VIEW_PLANNINGS`, recentPromotionAPI);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		personal: {
			_is: true,
			// value
		},
		raffle: {
			_is: true,
			// value
		},
		easypay: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>마이페이지</b></h1>
		</template>

		<template #content>
			<!-- 회원정보 -->
			<!--
				(D) 'm_my-member' 영역에 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
				등급 : level5, level4, level3, level2, level1
			-->
			<section
				class="m_mymain-member"
				:class="`T=level${memberInfoAPI?.user.grade.id}`"
			>
				<h2>
					<i
						class="mm_bg-contain image_grade"
						:data-lazyload="`{ '_src': '${memberInfoAPI?.user.grade.image_url}' }`"
					></i>
					<b>{{ memberInfoAPI?.user.name }}님은 <strong>{{ memberInfoAPI?.user.grade.name }}</strong>입니다</b>
				</h2>
				<router-link
					class="btn_setup"
					:to="{ name: 'MySetting' }"
				>
					<i class="ico_setup"></i><b class="mm_ir-blind">설정</b>
				</router-link>
				<div class="m_mymain-member-info">
					<router-link :to="{ name: 'MyBenefitCoupon' }">
						<dl class="mm_flex">
							<dt class="mm_flex-equal">
								보유 쿠폰
							</dt>
							<dd><strong>{{ memberBenefitAPI?.benefits.coupon_count }}</strong><sub>장</sub></dd>
						</dl>
					</router-link>
					<router-link :to="{ name: 'MyBenefitPoint' }">
						<dl class="mm_flex">
							<dt class="mm_flex-equal">
								보유 적립금
							</dt>
							<dd><strong>{{ memberBenefitAPI?.benefits.point }}</strong><sub>원</sub></dd>
						</dl>
					</router-link>
					<div class="mm_flex T=auto">
						<router-link :to="{ name: 'MyMainGrade' }">
							<b>등급혜택</b>
						</router-link>
						<router-link :to="{ name: 'MyInfoModify' }">
							<b>정보관리</b>
						</router-link>
						<PersonalMySizeButton v-if="feature.personal._is"></PersonalMySizeButton>
					</div>
				</div>
			</section>

			<!-- 진행중인 주문 -->
			<section class="m_mymain-order">
				<h3 class="mm_heading">
					<b>진행중인 주문<small>최근 3주 기준</small></b>
				</h3>
				<ol class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.pay_ready.count && memberOngoingOrderAPI?.orders.pay_ready.count > 0 }">{{ memberOngoingOrderAPI?.orders.pay_ready.count }}</strong>
							<b>입금대기</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.paid.count && memberOngoingOrderAPI?.orders.paid.count > 0 }">{{ memberOngoingOrderAPI?.orders.paid.count }}</strong>
							<b>결제완료</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_ready.count && memberOngoingOrderAPI?.orders.delivery_ready.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_ready.count }}</strong>
							<b>배송준비</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_ing.count && memberOngoingOrderAPI?.orders.delivery_ing.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_ing.count }}</strong>
							<b>배송중</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_complete.count && memberOngoingOrderAPI?.orders.delivery_complete.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_complete.count }}</strong>
							<b>배송완료</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.purchase_confirmed.count && memberOngoingOrderAPI?.orders.purchase_confirmed.count > 0 }">{{ memberOngoingOrderAPI?.orders.purchase_confirmed.count }}</strong>
							<b>구매확정</b>
						</router-link>
					</li>
				</ol>
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 1 } }">
							<p>
								취소
								<strong v-if="memberOngoingOrderAPI?.orders.cancel_count && memberOngoingOrderAPI?.orders.cancel_count > 0">{{ memberOngoingOrderAPI?.orders.cancel_count }}</strong>
								<b v-else>0</b>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 2 } }">
							<p>
								반품
								<strong v-if="memberOngoingOrderAPI?.orders.return_count && memberOngoingOrderAPI?.orders.return_count > 0">{{ memberOngoingOrderAPI?.orders.return_count }}</strong>
								<b v-else>0</b>
							</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 3 } }">
							<p>
								교환
								<strong v-if="memberOngoingOrderAPI?.orders.exchange_count && memberOngoingOrderAPI?.orders.exchange_count > 0">{{ memberOngoingOrderAPI?.orders.exchange_count }}</strong>
								<b v-else>0</b>
							</p>
						</router-link>
					</li>
				</ul>
			</section>

			<!-- 마이페이지 메뉴 -->
			<div class="m_mymain-menu">
				<ul>
					<RaffleEntryButton v-if="feature.raffle._is"></RaffleEntryButton>
					<li>
						<router-link :to="{ name: 'MyOrder', params: { tab: 0 } }">
							<b>주문 관리</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyBenefitCoupon' }">
							<b>혜택 관리</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyLikeProd' }">
							<b>My 찜</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyReview' }">
							<b>리뷰 관리</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyInquiry' }">
							<b>문의 관리</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'CsInquiry' }">
							<b>1:1 문의하기</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyClaimShip' }">
							<b>배송지연 신고</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyClaimSoldout' }">
							<b>품절취소 신고</b><i class="ico_link"></i>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyInfoRefund' }">
							<b>환불 계좌 관리</b><i class="ico_link"></i>
						</router-link>
					</li>
					<EasypayPasswordButton v-if="feature.easypay._is"></EasypayPasswordButton>
				</ul>
			</div>

			<!-- 최근 본 상품 -->
			<section class="m_mymain-recent">
				<h3 class="mm_strapline">
					<b>최근 본 상품</b><strong>{{ latelyViewProductAPI?.recent_view_goods.length }}</strong>
				</h3>
				<div class="mm_scroller T=x">
					<ul>
						<li
							v-for="item in latelyViewProductAPI?.recent_view_goods"
							:key="item.id"
						>
							<router-link :to="{ name:'ProductDetail', params: { id: item.id } }">
								<figure>
									<i
										class="mm_bg-cover image_product"
										:data-lazyload="`{ '_src': '${item.thumbnail_url}' }`"
									></i>
									<p
										v-if="item.is_soldout"
										class="text_soldout"
									>
										<b>품절</b>
									</p>
									<figcaption class="mm_ir-blind">
										<p class="text_brand">
											{{ item.brand_name }}
										</p>
										<p class="text_product">
											{{ item.name }}
										</p>
									</figcaption>
								</figure>
							</router-link>
						</li>
					</ul>
				</div>
				<router-link
					class="btn_more"
					:to="{ name: 'MyRecentProd' }"
				>
					<b>더보기</b><i class="ico_link"></i>
				</router-link>
			</section>

			<!-- 최근 본 기획전 -->
			<section class="m_mymain-recent">
				<h3 class="mm_strapline">
					<b>최근 본 기획전</b><strong>{{ recentPromotionAPI?.recent_view_plannings.length }}</strong>
				</h3>
				<div class="mm_list">
					<ul>
						<li
							v-for="promotion in recentPromotionAPI?.recent_view_plannings"
							:key="promotion.id"
						>
							<router-link
								:to="{ name: 'Promotion', params: { id: '123' } }"
							>
								<b
									v-if="promotion.is_ended"
									class="text_status T=status-off"
								>종료</b>
								<b
									v-else
									class="text_status"
								>진행중</b>
								<b>{{ promotion.title }}</b>
							</router-link>
						</li>
					</ul>
				</div>
				<router-link
					class="btn_more"
					:to="{ name: 'MyRecentPromo' }"
				>
					<b>더보기</b><i class="ico_link"></i>
				</router-link>
			</section>
		</template>
	</LayoutSub>
</template>