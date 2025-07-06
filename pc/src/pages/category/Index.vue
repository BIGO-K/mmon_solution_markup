<script setup lang="ts">
	import { ref, watch, computed } from 'vue';
	import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
	import Api from '@markup/api';
	import { useCategoryStore } from '@/store/category';
	import SelectMUI from '@mui/forms/SelectMUI.vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ProductFilter from '@/components/ProductFilter.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import ProductListHeadFilter from '@/components/ProductListHeadFilter.vue';
	import RecommendFilterGender from '@/features/recommend/components/RecommendFilterGender.vue';

	const { categoryItems } = useCategoryStore();

	const productAPI = ref<ProductListAPI>();
	const productTotalAPI = ref<ProductTotalCountAPI>();
	Api.getAll([
		{ key: `GOODS_CATEGORIES_COMMON`, ref: productAPI },
		{ key: `GOODS_CATEGORIES_COMMON_COUNT`, ref: productTotalAPI },
	]);

	const router = useRouter();
	const route = useRoute();

	const categoryTotal = 3;
	const categoryIndex = ref(route.params.id as string);
	const categoryCodes = ref<string[]>([]);
	const categories = computed<CategoryItem[]>(() => {

		const items: CategoryItem[] = [];

		(function callee(__lists: CategoryItem[] = []): CategoryItem | undefined {

			let returnItem = __lists.find(__item => __item.code === categoryIndex.value);
			// 현재 뎁스
			if (returnItem != null) items[returnItem.depth - 1] = returnItem;
			// 부모 뎁스
			else {
				for (const __item of __lists) {
					returnItem = callee(__item.children);
					if (returnItem != null) {
						items[__item.depth - 1] = __item;
						break;
					}
				}
			}

			return returnItem;

		})(categoryItems);

		return items;

	});

	// 히스토리 변경
	onBeforeRouteUpdate((__to/*, __from, __next*/) => {

		const _id = __to.params.id as string;
		if (_id !== categoryIndex.value) categoryIndex.value = _id;

	});

	watch(categoryIndex, () => {

		categoryCodes.value = categories.value.map(__value => __value.code);

		// route가 먼저 동작(히스토리)될 때 route.params.id 가 이전으로 적용되어 location으로 적용
		const _id = location.pathname.split('/').pop();
		if (categoryIndex.value !== _id) {
			router.push({ name: route.name as string, params: { id: categoryIndex.value } })
				.then(() => {

					// 카테고리가 변경될 때 스크롤 위치 초기화
					// TODO setPageContext(route.path, 0);

				});
		}

	}, {
		immediate: true
	});

	// 처음 페이지 진입 시 카테고리 코드 세팅
	const initWatchOff = watch(categories, () => {

		initWatchOff();

		categoryCodes.value = categories.value.map(__category => __category.code);

	});
</script>

<template>
	<div class="mm_inner">
		<h3 class="mm_title">
			<b v-if="categories.length > 0">{{ categories[0].name }}</b>
		</h3>

		<!-- 카테고리 브래드크럼 -->
		<div class="mm_breadcrumb">
			<ol>
				<li
					v-for="_i in categoryTotal"
					:key="_i"
				>
					<SelectMUI
						v-model="categoryCodes[_i - 1]"
						@update:model-value="__value => categoryIndex = (__value === '') ? categories[_i - 1].code : __value"
					>
						<option
							v-if="_i > 1"
							value=""
						>
							{{ '전체' }}
						</option>
						<option
							v-for="category in (_i === 1 ? categoryItems : categories[_i - 2]?.children)"
							:key="category.code"
							:value="category.code"
						>
							{{ category.name }}
						</option>
					</SelectMUI>
				</li>
			</ol>
		</div>

		<!-- 카테고리 배너 -->
		<div
			v-if="categories.length > 0 && categories[categories.length - 1].pc_top_image_url.length > 0"
			class="m_product-category-banner"
		>
			<i class="image_banner">
				<LazyloadMUI
					src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
					:_src="categories[categories.length - 1].pc_top_image_url"
					:_tag="'img'"
					:alt="categories[categories.length - 1].pc_top_alt ?? ''"
				></LazyloadMUI>
			</i>
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
			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None v-if="$route.query.type === 'none'">
				등록된 상품이 없습니다
			</None>

			<!-- 상품리스트 -->
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

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->