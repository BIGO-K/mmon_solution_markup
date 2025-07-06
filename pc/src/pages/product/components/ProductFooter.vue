<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const productCategoryBestAPI = ref<ProductCategoryBestAPI>();
	const productBrandBestAPI = ref<ProductBrandBestAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_MAIN_CATEGORY_BEST_GOODS`, ref: productCategoryBestAPI },
		{ key: `GOODS_DETAIL_BRAND_BEST_GOODS`, ref: productBrandBestAPI },
	]);
</script>

<template>
	<!-- 상품상세 하단 -->
	<div class="m_prodetail-foot">
		<!-- 추천상품 -->
		<section>
			<h4><b>이 상품도 좋아하실 것 같아요</b></h4>
			<div class="mm_product-list">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in productCategoryBestAPI?.category_best_goods"
								:key="item.id"
								class="mm_slider-item"
							>
								<div class="mm_product-item">
									<router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x2_1.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">
													{{ item.brand_name }}
												</p>
												<p class="text_product">
													<!-- TODO  headline 유무 확인 필요 -->
													<!-- <span class="text_foreword">[단독]</span> -->
													{{ item.name }}
												</p>
												<p class="text_sale">
													{{ item.sale_rate }}%
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
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- 인기상품 -->
		<section>
			<h4><b>이 브랜드의 인기상품</b></h4>
			<div class="mm_product-list">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in productBrandBestAPI?.brand_best_goods"
								:key="item.id"
								class="mm_slider-item"
							>
								<div class="mm_product-item">
									<router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x2_1.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">
													{{ item.brand_name }}
												</p>
												<p class="text_product">
													<!-- TODO  headline 유무 확인 필요 -->
													<!-- <span class="text_foreword">[단독]</span> -->
													{{ item.name }}
												</p>
												<p class="text_sale">
													{{ item.sale_rate }}%
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
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>