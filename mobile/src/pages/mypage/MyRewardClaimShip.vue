<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const claimShipAPI = ref<ClaimShipAPI>();
	const shopInfoAPI = ref<ShopInfoAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ClaimShipAPI>(`MEMBER_CLAIM_DELIVERY_DELAY_REPORTABLE_ORDER_ITEMS`, claimShipAPI);
	Api.get<ShopInfoAPI>(`CONF_INITIAL_SETTINGS`, shopInfoAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>배송지연 신고</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyClaimShip' }"
							title="선택됨"
						>
							<b>배송지연 신고</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyClaimShipResult' }">
							<b>배송지연 처리결과</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="m_myclaim">
				<h3
					v-if="claimShipAPI"
					class="m_myclaim-title"
				>
					<b>신고가능 주문수</b><strong class="mm_text-variable">{{ claimShipAPI.paginator.total }}개</strong>
				</h3>
				<p
					v-if="(claimShipAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>배송지연 신고 가능 주문이 없습니다
				</p>

				<template
					v-else
				>
					<!-- 신고 가능 주문 목록 -->
					<article
						v-for="order in claimShipAPI?.paginator.data"
						:key="order.order_id"
						class="mm_order-item"
					>
						<h5>
							<b>{{ order.paid_at }}</b>
							<strong>주문번호: {{ order.order_id }}</strong>
						</h5>
						<div
							v-for="seller in order.packs[0].sellers"
							:key="seller.id"
							class="mm_order-item-seller"
						>
							<div class="mm_order...seller-head">
								<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li
										v-for="item in seller.order_items"
										:key="item.id"
									>
										<div class="mm_product-item">
											<a href="#">
												<figure>
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="item.goods.thumbnail_url"
													></LazyloadMUI>
													<figcaption>
														<p class="text_status">{{ item.order_status_label }}</p>
														<p class="text_brand">{{ item.goods.brand_name }}</p>
														<p class="text_product">{{ item.goods.name }}</p>
														<p class="text_price"><strong>{{ item.paid_price }}</strong></p>
														<p class="text_option">{{ item.goods.option_name }}</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<div class="mm_product...footer-indent">
													<p><span>결제방식 </span>{{ order.payment_method_label }}</p>
												</div>
												<div class="mm_btn_box">
													<div class="mm_flex T=equal">
														<button
															type="button"
															class="mm_btn T=sm T=line T=lighter"
														>
															<b>배송지연 신고하기</b>
														</button>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</article>
				</template>

				<Pagination
					v-if="claimShipAPI?.paginator != null"
					:total-page="Math.ceil(claimShipAPI.paginator.total / claimShipAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>

				<!-- 배송지연 보상정책 안내 -->
				<section class="m_myclaim-info">
					<h6><b>배송지연 보상정책 안내</b></h6>
					<p>
						결제완료일 다음날(1일째) 부터 3일 이내 배송출발이 되지 않았을 경우 상품금액의
						{{
							shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies.length === 1
								? `${shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}%`
								: `최저 ${shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}% ~ 최고 ${shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies[shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies?.length - 1].reward_rate || 0}%`
						}}를 {{ `${shopInfoAPI?.point.label_name!}로` }} 보상해드리는 제도입니다.
					</p>
					<table>
						<caption>결제 완료일로부터 배송 출발일 수 기준</caption>
						<tbody>
							<tr
								v-for="(reward, index) in shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies"
								:key="reward.day"
							>
								<th
									v-if="index + 1 === shopInfoAPI?.paid_features.reward_policies?.delivery_delay_reward_policies.length"
									scope="row"
								>
									<b>{{ reward.day }}일 이상 지연</b>
								</th>
								<th
									v-else
									scope="row"
								>
									<b>{{ reward.day }}일 지연</b>
								</th>
								<td>{{ reward.reward_rate }}% ({{ shopInfoAPI?.point.label_name! }} 보상)</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 배송지연 신고 안내 -->
				<div class="mm_inner">
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
								<i class="ico_info"></i><b>배송지연 신고 안내</b><i class="ico_dropdown T=box"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<ul>
										<li>결제일로부터 30일 이내에 신고하셔야 보상금 지급이 가능합니다.</li>
										<li>해외배송 상품 및 주문제작 상품은 보상제도에서 제외됩니다.</li>
										<li>보상 신청은 결제일로부터 최대 30일 이내에 하셔야 하고, 최대 보상 금액은 {{ shopInfoAPI?.paid_features.reward_policies?.maximum_reward_price }}만원 입니다.</li>
										<li>지연일은 영업일 기준으로 토,일,공휴일은 포함하지 않습니다.</li>
										<li>비회원, 해외직배송, 주문 제작, 주문 후 오프라인 매장을 통한 배송 상품, 해당 상품 취소 및 반품 시에는 본 기준에서 제외됩니다.</li>
										<li>무통장 결제의 경우 입금완료일을 기준으로 합니다.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>