<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ProductFilter from '@/components/ProductFilter.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import ProductListHeadFilter from '@/components/ProductListHeadFilter.vue';
	import RecommendFilterGender from '@/features/recommend/components/RecommendFilterGender.vue';

	const sellerAPI = ref<SellerAPI>();
	const curationAPI = ref<CurationAPI>();
	const productAPI = ref<ProductListAPI>();
	const productTotalAPI = ref<ProductTotalCountAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_SELLER_SHOP_INFO`, ref: sellerAPI },
		{ key: `GOODS_SELLER_SHOP_CURATION`, ref: curationAPI },
		{ key: `GOODS_SELLER_SHOP_FILTERED_GOODS`, ref: productAPI },
		{ key: `GOODS_SELLER_SHOP_GOODS_COUNT`, ref: productTotalAPI },
	]);
</script>

<template>
	<div class="mm_inner">
		<h3 class="mm_title">
			<b>{{ sellerAPI?.name }}</b>
		</h3>
		<div class="m_product-seller">
			<!-- BEST 아이템 -->
			<section v-if="curationAPI != null && curationAPI.best_goods.length > 0">
				<h4 class="mm_strapline">
					<strong>BEST</strong><b>아이템</b>
				</h4>
				<div class="mm_product-list">
					<div
						class="mm_slider T=list-full"
						data-slider="{ '_isLoop': false }"
					>
						<div class="mm_slider-inner">
							<ul class="mm_slider-list">
								<li
									v-for="item in curationAPI?.best_goods"
									:key="item.id"
									class="mm_slider-item"
								>
									<ProductItem :product="item"></ProductItem>
								</li>
							</ul>
						</div>
						<div class="mm_slider-control">
							<button
								type="button"
								class="btn_slider-prev"
							>
								<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
							</button>
							<button
								type="button"
								class="btn_slider-next"
							>
								<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
							</button>
						</div>
					</div>
				</div>
			</section>

			<!-- NEW 아이템 -->
			<section v-if="curationAPI != null && curationAPI.new_goods.length > 0">
				<h4 class="mm_strapline">
					<strong>NEW</strong><b>IN</b>
				</h4>
				<div class="mm_product-list">
					<div
						class="mm_slider T=list-full"
						data-slider="{ '_isLoop': false }"
					>
						<div class="mm_slider-inner">
							<ul class="mm_slider-list">
								<li
									v-for="item in curationAPI?.new_goods"
									:key="item.id"
									class="mm_slider-item"
								>
									<ProductItem :product="item"></ProductItem>
								</li>
							</ul>
						</div>
						<div class="mm_slider-control">
							<button
								type="button"
								class="btn_slider-prev"
							>
								<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
							</button>
							<button
								type="button"
								class="btn_slider-next"
							>
								<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
		<ProductFilter></ProductFilter>
		<div
			class="mm_product-list"
			:class="{ 'T=skeleton': $route.query.type === 'skeleton' }"
		>
			<ProductListHeadFilter
				v-if="productTotalAPI != null"
				:total="productTotalAPI.total_count"
			></ProductListHeadFilter>

			<!--
				(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
				data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
				세일 상품이 아닐 경우 del 대신 빈 span 태그를 넣어주세요. (전체적으로 del이 안 들어갈 경우 del/span 모두 안 씀)
			-->
			<None v-if="$route.query.type === 'none'">
				등록된 상품이 없습니다
			</None>
			<ul v-else-if="$route.query.type === 'skeleton'">
				<li
					v-for="i in 10"
					:key="i"
				>
					<div class="mm_product-item">
						<i class="image_product"></i>
						<div class="mm_product-item-info">
							<p class="text_brand"></p>
							<p class="text_price"></p>
							<p class="text_product"></p>
						</div>
					</div>
				</li>
			</ul>

			<!-- 상품리스트 -->
			<ul v-else>
				<li
					v-for="item in productAPI?.paginator.data"
					:key="item.id"
				>
					<ProductItem :product="item"></ProductItem>
				</li>
			</ul>
		</div>
		<Pagination
			v-if="!$route.query.type && productAPI?.paginator != null && productTotalAPI != null"
			:total-page="Math.ceil(productTotalAPI.total_count / productAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
	<RecommendFilterGender></RecommendFilterGender>
</template>