<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import FootMoreBtn from '@/components/FootMoreBtn.vue';
	import GenderFilter from '@/features/recommend/components/RecommendGenderFilter.vue';

	const sellerAPI = ref<SellerAPI>();
	const curationAPI = ref<CurationAPI>();
	const productAPI = ref<ProductListAPI>();
	const totalCountAPI = ref<ProductTotalCountAPI>();
	// api
	Api.getAll([
		{ key: `GOODS_SELLER_SHOP_INFO`, ref: sellerAPI },
		{ key: `GOODS_SELLER_SHOP_CURATION`, ref: curationAPI },
		{ key: `GOODS_SELLER_SHOP_FILTERED_GOODS`, ref: productAPI },
		{ key: `GOODS_SELLER_SHOP_GOODS_COUNT`, ref: totalCountAPI },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>{{ sellerAPI?.name }}</b></h1>
		</template>

		<template #content>
			<div class="m_product-seller">
				<!-- BEST ITEM -->
				<section v-if="(curationAPI?.best_goods.length ?? NaN) > 0">
					<h3 class="mm_strapline">
						<b>BEST ITEM</b>
					</h3>
					<div class="mm_scroller T=x">
						<div class="mm_product-list T=card">
							<ul>
								<li
									v-for="item in curationAPI?.best_goods"
									:key="item.id"
									class="mm_slider-item"
								>
									<ProductItem :product="item"></ProductItem>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- NEW IN -->
				<section v-if="(curationAPI?.new_goods.length ?? NaN) > 0">
					<h3 class="mm_strapline">
						<b>NEW IN</b>
					</h3>
					<div class="mm_scroller T=x">
						<div class="mm_product-list T=card">
							<ul>
								<li
									v-for="item in curationAPI?.new_goods"
									:key="item.id"
									class="mm_slider-item"
								>
									<ProductItem :product="item"></ProductItem>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			<GenderFilter></GenderFilter>

			<!-- 상품리스트 -->
			<div class="mm_inner">
				<div class="mm_product-list T=card">
					<div class="mm_product-list-head">
						<p class="text_total">
							<strong>{{ totalCountAPI?.total_count }}</strong>개
						</p>
						<div class="mm_form-select">
							<label>
								<select data-select>
									<option>판매순</option>
									<option>신상품순</option>
									<option>낮은가격순</option>
									<option>높은가격순</option>
									<option>할인율 높은순</option>
									<option>리뷰 많은순</option>
								</select>
								<b class="text_selected"></b>
								<i class="ico_form-select T=sm"></i>
							</label>
						</div>
						<button
							type="button"
							class="btn_array"
							data-switch="{ '_classOn': 'T=card', '_isParent': true, '_parentSelector': '.mm_product-list', 'onChange': 'toggleStyleProduct' }"
						>
							<i class="ico_array T=wide"></i><b class="mm_ir-blind">상품 정렬 변경</b>
						</button>
						<!-- (D) 필터에 선택된 사항이 있을 경우 'btn_filter'에 'S=filter-on' 클래스를 추가합니다 -->
						<router-link
							class="btn_filter"
							:class="{ 'S=filter-on': '필터에 선택된 사항이 있을 경우' }"
							:to="{ name: 'ProductFilter' }"
						>
							<i class="ico_filter"></i><b>필터</b>
						</router-link>
					</div>

					<!-- 내용없음 -->
					<p
						v-if="productAPI && productAPI.paginator.data.length < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>등록된 상품이 없습니다
					</p>

					<!--
						(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
						data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
					-->

					<!-- 스켈레톤 -->
					<ul v-if="_isLoading">
						<li
							v-for="item in 4"
							:key="item"
						>
							<div class="mm_product-item">
								<i class="image_product"></i>
								<div class="mm_product-item-info">
									<p class="text_brand"></p>
									<p class="text_product"></p>
									<p class="text_price"></p>
								</div>
							</div>
						</li>
					</ul>

					<ul v-else>
						<li
							v-for="item in productAPI?.paginator.data"
							:key="item.id"
						>
							<ProductItem
								:product="item"
								:class="'T=pa'"
							></ProductItem>
						</li>
					</ul>
				</div>

				<FootMoreBtn></FootMoreBtn>
			</div>
		</template>
	</LayoutSub>
</template>