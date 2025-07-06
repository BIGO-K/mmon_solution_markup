<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const recommendAPI = ref<ProductDetailRecommendAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_PACKAGES`, ref: recommendAPI },
	]);
</script>

<template>
	<!-- 추천 아이템 -->
	<section
		v-if="recommendAPI && recommendAPI.goods_packages.length > 0"
		class="m_prodetail-head-recommend"
	>
		<h3 class="m_prodetail-strapline">
			<b>이런 아이템은 어떠세요?</b>
		</h3>
		<div class="mm_scroller T=x">
			<div class="mm_product-list T=card">
				<ul>
					<li
						v-for="item in recommendAPI.goods_packages"
						:key="item.goods_id"
					>
						<div class="mm_product-item T=pa">
							<router-link :to="{ name:'ProductDetail', params: { id: item.goods_id } }">
								<figure>
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="item.thumbnail_url"
									></LazyloadMUI>
									<p
										v-if="item.is_soldout && item.stock < 1"
										class="text_product-status"
									>
										품절임박
									</p>
									<figcaption>
										<p class="text_brand">
											{{ item.brand_name }}
										</p>
										<p class="text_product">
											<!-- TODO json headline 파라미터 확인 -->
											<span class="text_foreword">[단독]</span>{{ item.name }}
										</p>
										<p class="text_sale">
											{{ `${item.sale_rate}원` }}
										</p>
										<p class="text_price">
											<strong>{{ item.base_discounted_price }}</strong>
										</p>
									</figcaption>
								</figure>
							</router-link>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>