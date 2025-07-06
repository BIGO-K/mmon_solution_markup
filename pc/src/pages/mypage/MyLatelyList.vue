<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const recentViewProductAPI = ref<RecentViewProductAPI>();
	const recentPromotionAPI = ref<RecentPromotionAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_RECENT_VIEW_GOODS`, ref: recentViewProductAPI },
		{ key: `MEMBER_RECENT_VIEW_PLANNINGS`, ref: recentPromotionAPI },
	]);
</script>

<template>
	<div class="m_my-review">
		<h5 class="mm_heading">
			<b>최근 본 상품/기획전</b>
		</h5>
		<div class="m_my-recent">
			<p class="text_update">
				2주 후 자동 삭제
			</p>

			<!-- 최근 본 상품 -->
			<section class="m_my-recent-prod">
				<h6 class="mm_strapline">
					<b>최근 본 상품</b>
				</h6>
				<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
				<None
					v-if="recentViewProductAPI != null && recentViewProductAPI.recent_view_goods.length < 1"
				>
					최근 본 상품이 없습니다
				</None>
				<ul
					v-else
				>
					<li
						v-for="item in recentViewProductAPI?.recent_view_goods"
						:key="item.id"
					>
						<div class="mm_product-item T=single T=sm">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.thumbnail_url"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">{{ item.brand_name }}</p>
										<p class="text_product">{{ item.name }}</p>
										<p
											v-if="item.sale_rate > 0"
											class="text_sale"
										>{{ item.sale_rate }}%</p>
										<p class="text_price"><strong>{{ item.base_discounted_price }}</strong></p>
									</figcaption>
								</figure>
							</a>
						</div>
					</li>
				</ul>
			</section>

			<!-- 최근 본 기획전 -->
			<section>
				<h6 class="mm_strapline">
					<b>최근 본 기획전</b>
				</h6>
				<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
				<None
					v-if="recentPromotionAPI != null && recentPromotionAPI.recent_view_plannings.length < 1"
				>
					최근 본 기획전이 없습니다
				</None>
				<div
					v-else
					class="mm_list"
				>
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
			</section>
		</div>
	</div>
</template>