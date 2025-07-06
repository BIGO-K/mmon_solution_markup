<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const memberOngoingOrderAPI = ref<MemberOngoingOrderAPI>();
	const recentViewProductAPI = ref<RecentViewProductAPI>();
	const recentPromotionAPI = ref<RecentPromotionAPI>();
	const likeProductAPI = ref<LikeProductAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_AGGREGATES_ORDER`, ref: memberOngoingOrderAPI },
		{ key: `MEMBER_RECENT_VIEW_GOODS`, ref: recentViewProductAPI },
		{ key: `MEMBER_RECENT_VIEW_PLANNINGS`, ref: recentPromotionAPI },
		{ key: `MEMBER_WISH_GOODS`, ref: likeProductAPI },
	]);
</script>

<template>
	<div class="m_mymain">
		<!-- 진행중인 주문 -->
		<section class="m_mymain-order">
			<h5 class="mm_strapline">
				<b>진행중인 주문</b><small>최근 3주 기준</small>
			</h5>
			<!-- (D) 진행중인 주문건이 1건 이상인 경우 strong 태그에 mm_text-variable 클래스를 추가합니다. -->
			<div class="m_mymain-order-inner">
				<ol>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.pay_ready.count && memberOngoingOrderAPI?.orders.pay_ready.count > 0 }">{{ memberOngoingOrderAPI?.orders.pay_ready.count }}</strong>
							<b>입금대기</b>
						</a>
					</li>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.paid.count && memberOngoingOrderAPI?.orders.paid.count > 0 }">{{ memberOngoingOrderAPI?.orders.paid.count }}</strong>
							<b>결제완료</b>
						</a>
					</li>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_ready.count && memberOngoingOrderAPI?.orders.delivery_ready.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_ready.count }}</strong>
							<b>배송준비</b>
						</a>
					</li>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_ing.count && memberOngoingOrderAPI?.orders.delivery_ing.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_ing.count }}</strong>
							<b>배송중</b>
						</a>
					</li>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.delivery_complete.count && memberOngoingOrderAPI?.orders.delivery_complete.count > 0 }">{{ memberOngoingOrderAPI?.orders.delivery_complete.count }}</strong>
							<b>배송완료</b>
						</a>
					</li>
					<li>
						<a href="#">
							<strong :class="{ 'mm_text-variable': memberOngoingOrderAPI?.orders.purchase_confirmed.count && memberOngoingOrderAPI?.orders.purchase_confirmed.count > 0 }">{{ memberOngoingOrderAPI?.orders.purchase_confirmed.count }}</strong>
							<b>구매확정</b>
						</a>
					</li>
				</ol>
				<!-- (D) 취소, 반품, 교환이 1건 미만인 경우 <b> 태그, 1건 이상인 경우에는 <strong> 태그로 감싸줍니다. -->
				<ul>
					<li>
						<a href="#">
							<b>취소</b>
							<strong v-if="memberOngoingOrderAPI?.orders.cancel_count && memberOngoingOrderAPI?.orders.cancel_count > 0">{{ memberOngoingOrderAPI?.orders.cancel_count }}</strong>
							<b v-else>0</b>
						</a>
					</li>
					<li>
						<a href="#">
							<b>반품</b>
							<strong v-if="memberOngoingOrderAPI?.orders.return_count && memberOngoingOrderAPI?.orders.return_count > 0">{{ memberOngoingOrderAPI?.orders.return_count }}</strong>
							<b v-else>0</b>
						</a>
					</li>
					<li>
						<a href="#">
							<b>교환</b>
							<strong v-if="memberOngoingOrderAPI?.orders.exchange_count && memberOngoingOrderAPI?.orders.exchange_count > 0">{{ memberOngoingOrderAPI?.orders.exchange_count }}</strong>
							<b v-else>0</b>
						</a>
					</li>
				</ul>
			</div>
		</section>

		<!-- 최근 본 상품 -->
		<section class="m_mymain-list">
			<h5 class="mm_strapline">
				<b>최근 본 상품</b><strong class="mm_text-variable">10</strong>
			</h5>
			<div class="mm_product-list">
				<ul>
					<!-- (D) 마지막 li는 더보기 b태그를 추가하고, 최근 본 상품 페이지로 이동합니다. -->
					<li
						v-for="item in recentViewProductAPI?.recent_view_goods"
						:key="item.id"
					>
						<div class="mm_product-item">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.thumbnail_url"
										></LazyloadMUI>
									</div>
									<figcaption class="mm_ir-blind">
										<p class="text_brand">{{ item.brand_name }}</p>
										<p class="text_product">{{ item.name }}</p>
									</figcaption>
								</figure>
								<!-- <b>더보기</b> -->
							</a>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<!-- 최근 본 기획전 -->
		<section class="m_mymain-event">
			<h5 class="mm_strapline">
				<b>최근 본 기획전</b><strong class="mm_text-variable">{{ recentPromotionAPI?.recent_view_plannings?.length }}</strong>
			</h5>
			<div class="mm_list">
				<ul>
					<li
						v-for="promotion in recentPromotionAPI?.recent_view_plannings"
						:key="promotion.id"
					>
						<router-link
							:to="{ name: 'Promotion', params: { id: '123'} }"
						>
							<b
								v-if="promotion.is_ended"
								class="mm_tag T=round T=gray"
							>종료</b>
							<b
								v-else
								class="mm_tag T=round T=dark"
							>진행중</b>
							<b>{{ promotion.title }}</b>
						</router-link>
					</li>
				</ul>
			</div>
			<router-link
				class="btn_more"
				:to="{ name: 'MyLatelyList' }"
			>
				<b>더보기</b><i class="ico_more"></i>
			</router-link>
		</section>

		<!-- 찜한 아이템 -->
		<section class="m_mymain-list">
			<h5 class="mm_strapline">
				<b>찜한 아이템</b><strong class="mm_text-variable">10</strong>
			</h5>
			<div class="mm_product-list">
				<ul>
					<!-- (D) 마지막 li는 더보기 b태그를 추가하고, 찜한 아이템로 이동합니다. -->
					<li
						v-for="product in likeProductAPI?.paginator.data"
						:key="product.id"
					>
						<div class="mm_product-item">
							<router-link :to="{ name: 'ProductDetail', params: { id: '57436' } }">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="product.thumbnail_url"
										></LazyloadMUI>
									</div>
									<figcaption class="mm_ir-blind">
										<p class="text_brand">
											{{ product.brand_name }}
										</p>
										<p class="text_product">
											{{ product.name }}
										</p>
									</figcaption>
								</figure>
								<!-- <b v-if="product.id === 5">더보기</b> -->
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<!-- 찜한 브랜드 -->
		<section class="m_mymain-brand">
			<h5 class="mm_strapline">
				<b>찜한 브랜드</b><strong class="mm_text-variable">8</strong>
			</h5>
			<ul>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_5.jpg'"
							title="입생로랑"
						></LazyloadMUI>
					</a>
				</li>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_1.jpg'"
							title="내셔널지오그래픽"
						></LazyloadMUI>
					</a>
				</li>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_2.jpg'"
							title="나이키"
						></LazyloadMUI>
					</a>
				</li>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_3.jpg'"
							title="아디다스"
						></LazyloadMUI>
					</a>
				</li>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_4.jpg'"
							title="올리비아로렌"
						></LazyloadMUI>
					</a>
				</li>
				<li>
					<a href="#">
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_is-error-image="false"
							:_is-ratio="true"
							:_src="'/public/images/dummy/brand_logo_5'"
							title="입생로랑"
						></LazyloadMUI>
					</a>
				</li>
			</ul>
			<a
				class="btn_more"
				href="#"
			>
				<b>더보기</b><i class="ico_more"></i>
			</a>
		</section>
	</div>
</template>