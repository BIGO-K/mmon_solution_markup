<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const claimSoldoutAPI = ref<ClaimSoldoutAPI>();
	const shopInfoAPI = ref<ShopInfoAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ClaimSoldoutAPI>(`MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTABLE_ORDER_ITEMS`, claimSoldoutAPI);
	Api.get<ShopInfoAPI>(`CONF_INITIAL_SETTINGS`, shopInfoAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>품절취소 신고</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyClaimSoldout' }"
							title="선택됨"
						>
							<b>품절취소 신고</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyClaimSoldoutResult' }">
							<b>품절취소 처리결과</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="m_myclaim">
				<h3
					v-if="claimSoldoutAPI"
					class="m_myclaim-title"
				>
					<b>신고가능 주문수</b><strong class="mm_text-variable">{{ claimSoldoutAPI.paginator.total }}개</strong>
				</h3>

				<p
					v-if="(claimSoldoutAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>배송지연 신고 가능 주문이 없습니다
				</p>

				<template
					v-else
				>
					<!-- 신고 가능 주문 목록 -->
					<article
						v-for="order in claimSoldoutAPI?.paginator.data"
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
															<b>품절취소 신고하기</b>
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
					v-if="claimSoldoutAPI?.paginator != null"
					:total-page="Math.ceil(claimSoldoutAPI.paginator.total / claimSoldoutAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>

				<!-- 품절취소 보상정책 안내 -->
				<section class="m_myclaim-info">
					<h6><b>품절취소 보상정책 안내</b></h6>
					<p>
						재고 부족 등의 이유로 품절 사실을 안내 받으신 경우 상품 금액
						{{
							shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies.length === 1
								? `${shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}%`
								: `최저 ${shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}% ~ 최고 ${shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies[shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies?.length - 1].reward_rate || 0}%`
						}}를 {{ `${shopInfoAPI?.point.label_name!}로` }} 보상해드리는 제도입니다.
					</p>
					<table>
						<caption>결제 완료일로부터 품절 등록일 수 기준</caption>
						<tbody>
							<tr
								v-for="reward in shopInfoAPI?.paid_features.reward_policies?.soldout_cancel_reward_policies"
								:key="reward.day"
							>
								<th scope="row">
									<b>{{ reward.day }}일 후 안내</b>
								</th>
								<td>{{ reward.reward_rate }}% ({{ shopInfoAPI?.point.label_name! }} 보상)</td>
							</tr>
						</tbody>
					</table>
					<div class="mm_note">
						<ul>
							<li>단, 오전 10시 이후 주문은 2일째부터 적용</li>
						</ul>
					</div>
				</section>

				<!-- 품절취소 신고 안내 -->
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
								<i class="ico_info"></i><b>품절취소 신고 안내</b><i class="ico_dropdown T=box"></i>
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