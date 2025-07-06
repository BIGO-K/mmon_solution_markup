<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ProductFilter from '@/components/ProductFilter.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import ProductListHeadFilter from '@/components/ProductListHeadFilter.vue';
	import Showcase from '@/features/showcase/components/ShowcaseBrand.vue';
	import RecommendFilterGender from '@/features/recommend/components/RecommendFilterGender.vue';

	const { configFeature } = useConfigStore();
	const brandAPI = ref<BrandShopAPI>();
	const productAPI = ref<ProductListAPI>();
	const productTotalAPI = ref<ProductTotalCountAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_BRAND_SHOP_INFO_WITH_CURATION`, ref: brandAPI },
		{ key: `GOODS_BRAND_SHOP_FILTERED_GOODS`, ref: productAPI },
		{ key: `GOODS_BRAND_SHOP_COUNT`, ref: productTotalAPI },
	]);
</script>

<template>
	<!-- 브랜드샵 상단 영역 -->
	<div class="m_brand-head">
		<!-- (D) 이미지가 없으면 :_src 값을 null로 설정해주세요 -->
		<LazyloadMUI
			class="mm_bg-cover image_banner"
			:_src="brandAPI?.top_pc_image_url ?? null"
			:_is-error-image="false"
		></LazyloadMUI>
		<div class="m_brand-head-explan">
			<h2 class="text_brand">
				<b>{{ brandAPI?.brand_name }}</b>
			</h2>
			<p class="text_main">
				{{ brandAPI?.main_text }}
			</p>
			<p class="text_sub">
				{{ brandAPI?.sub_text }}
			</p>
		</div>
		<ul class="m_brand-head-private">
			<li>
				<button
					type="button"
					class="btn_like"
					data-switch
				>
					<i class="ico_like"></i><b class="mm_ir-blind">찜한 브랜드에 추가하기</b>
				</button>
			</li>
			<li>
				<button
					type="button"
					class="btn_sns-share"
				>
					<i class="ico _share"></i><b class="mm_ir-blind">클립보드 복사하기</b>
				</button>
			</li>
		</ul>
	</div>

	<div class="mm_inner">
		<div class="m_brand-prod">
			<Showcase
				v-if="brandAPI?.brand_contents != null && configFeature.showcase"
				:content="brandAPI.brand_contents"
			></Showcase>

			<!-- 큐레이션 -->
			<section
				v-if="brandAPI != null && brandAPI.curations.length > 0"
				class="m_brand-prod-curation"
			>
				<h3 class="mm_heading">
					<b>CURATION</b>
				</h3>
				<!-- (D) pro버전에서는 상품평, 가격, 할인율, 태그만 노출 됩니다. -->
				<div class="mm_product-list">
					<!--
						(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
						data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
						세일 상품이 아닐 경우 del 대신 빈 span 태그를 넣어주세요. (전체적으로 del이 안 들어갈 경우 del/span 모두 안 씀)
					-->
					<ul>
						<li
							v-for="item in brandAPI.curations"
							:key="item.id"
						>
							<ProductItem :product="item"></ProductItem>
						</li>
					</ul>
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
			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None v-if="$route.query.type === 'none'">
				등록된 상품이 없습니다
			</None>

			<!--  상품리스트 -->
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