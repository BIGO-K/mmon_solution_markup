<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useCategoryStore } from '@/store/category';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import ProductItem from '@/components/ProductItem.vue';

	const { categoryItems } = useCategoryStore();

	const productAPI = ref<BestProductAPI>();
	Api.getAll([
		{ key: `FETCH_MAIN_CATEGORY_BEST_GOODS`, ref: productAPI },
	]);

	const _selectCategory = ref('전체');
</script>

<template>
	<div class="mm_inner">
		<h3 class="mm_title">
			<b>베스트</b>
		</h3>

		<!-- 카테고리 -->
		<div class="m_best-category">
			<div
				class="mm_slider"
				data-slider="{ '_isLoop': false }"
			>
				<div class="mm_slider-inner">
					<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<ul class="mm_slider-list">
						<li class="mm_slider-item">
							<button
								type="button"
								:class="{ 'S=category-on': _selectCategory === '전체' }"
								:title="_selectCategory === '전체' ? '선택됨' : ''"
								@click="_selectCategory = '전체'"
							>
								<i class="ico_category-all"></i><b>전체</b>
							</button>
						</li>
						<li
							v-for="category in categoryItems"
							:key="category.code"
							class="mm_slider-item"
						>
							<button
								type="button"
								:class="{ 'S=category-on': _selectCategory === category.name }"
								:title="_selectCategory === category.name ? '선택됨' : ''"
								@click="_selectCategory = category.name"
							>
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="category.image_url"
								></LazyloadMUI><b>{{ category.name }}</b>
							</button>
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

		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			데이터가 없습니다
		</None>

		<!-- 베스트 상품 -->
		<div
			v-else-if="$route.query.type === 'skeleton'"
			class="mm_product-list T=skeleton m_best-list"
		>
			<ol>
				<li
					v-for="i in 10"
					:key="i"
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
			</ol>
		</div>

		<!-- 베스트 상품 -->
		<div
			v-else
			class="mm_product-list m_best-list"
		>
			<ol>
				<li
					v-for="item in productAPI?.best_goods"
					:key="item.id"
				>
					<ProductItem
						:product="item"
						:is-rank="true"
						:is-react="false"
						:is-badge="false"
					>
					</ProductItem>
				</li>
			</ol>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->