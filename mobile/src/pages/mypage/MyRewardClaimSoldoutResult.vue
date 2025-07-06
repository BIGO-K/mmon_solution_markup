<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const claimSoldoutResultAPI = ref<ClaimSoldoutResultAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ClaimSoldoutResultAPI>(`MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTED_ORDER_ITEMS`, claimSoldoutResultAPI);
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
						<router-link :to="{ name: 'MyClaimSoldout' }">
							<b>품절취소 신고</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyClaimSoldoutResult' }"
							title="선택됨"
						>
							<b>품절취소 처리결과</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="m_myclaim">
				<h3
					v-if="claimSoldoutResultAPI"
					class="m_myclaim-title"
				>
					<b>신고 주문수</b><strong class="mm_text-variable">{{ claimSoldoutResultAPI.paginator.total }}개</strong>
				</h3>

				<p
					v-if="(claimSoldoutResultAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>처리중인 품절취소 주문이 없습니다
				</p>

				<template
					v-else
				>
					<!-- 신고 주문 목록 -->
					<article
						v-for="order in claimSoldoutResultAPI?.paginator.data"
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
												<div class="mm_product...footer-claim">
													<ul>
														<li><b class="mm_tag T=lg T=dark">신고접수<span>100</span></b><p>신고일: 2020.05.18</p></li>
														<li><b class="mm_tag T=lg T=variable">처리완료<span>2</span></b><p>처리일: 2020.05.18</p></li>
														<li><b class="mm_tag T=lg T=gray">처리불가<span>0</span></b></li>
													</ul>
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
					v-if="claimSoldoutResultAPI?.paginator != null"
					:total-page="Math.ceil(claimSoldoutResultAPI.paginator.total / claimSoldoutResultAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>

				<!-- 품절취소 신고 처리 순서 -->
				<section class="m_myclaim-info">
					<h6><b>품절취소 신고 처리 순서</b></h6>
					<ol>
						<li>
							<dl>
								<dt>STEP 1<b class="mm_tag T=lg T=dark">신고접수</b></dt>
								<dd>고객님께서 신고 완료한 상태</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt>STEP 2<b class="mm_tag T=lg T=variable">처리완료</b><b class="mm_tag T=lg T=gray">처리불가</b></dt>
								<dd>고객센터에서 확인 후 보상적립금 지급이 처리 불가하거나 처리 완료한 상태</dd>
							</dl>
						</li>
					</ol>
				</section>
			</div>
		</template>
	</LayoutSub>
</template>