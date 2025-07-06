<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import FootMoreBtn from '@/components/FootMoreBtn.vue';
	import SnsShare from '@/components/SnsShare.vue';
	import Showcase from '@/features/showcase/components/ShowcaseBrand.vue';
	import GenderFilter from '@/features/recommend/components/RecommendGenderFilter.vue';

	const brandAPI = ref<BrandshopAPI>();
	const productAPI = ref<ProductListAPI>();
	const totalCountAPI = ref<ProductTotalCountAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_BRAND_SHOP_INFO_WITH_CURATION`, ref: brandAPI },
		{ key: `GOODS_BRAND_SHOP_FILTERED_GOODS`, ref: productAPI },
		{ key: `GOODS_BRAND_SHOP_COUNT`, ref: totalCountAPI },
	]);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		showcase: {
			_is: true,
			// value
		}
	};

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>브랜드샵</b></h1>
		</template>

		<template #content>
			<!-- 브랜드샵 상단 영역 -->
			<div class="m_brand-head">
				<h3 class="text_brand">
					<!-- (D) 어드민에서 브랜드 상단 이미지를 등록하지 않았을 경우 data-lazyload의 _src 경로에 'null'을 넣어주세요. 예) data-lazyload="{ '_src': 'null' }" -->
					<LazyloadMUI
						class="mm_bg-cover image_banner"
						:_src="brandAPI?.top_mobile_image_url"
						:_is-error-image="false"
					></LazyloadMUI>
					<b>{{ brandAPI?.brand_name }}</b>
				</h3>
				<p class="text_main">
					{{ brandAPI?.main_text }}
				</p>
				<p class="text_sub">
					{{ brandAPI?.sub_text }}
				</p>
				<div class="m_brand-head-private">
					<ul>
						<li>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b>좋아요</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_sns-share"
							>
								<i class="ico_share"></i><b>공유하기</b>
							</button>
							<SnsShare></SnsShare>
						</li>
					</ul>
				</div>
			</div>

			<Showcase
				v-if="brandAPI?.brand_contents != null && feature.showcase._is"
				:content="brandAPI.brand_contents"
			></Showcase>

			<!-- 큐레이션 -->
			<section
				v-if="brandAPI != null && (brandAPI.curations.length ?? NaN) > 0"
				class="m_brand-curation"
			>
				<h4><b>CURATION</b></h4>
				<ProductItem
					:product="brandAPI.curations[0]"
					:class="'T=single'"
				></ProductItem>

				<div class="mm_product-list T=card">
					<!--
						(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
						data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
					-->
					<ul>
						<li
							v-for="item in brandAPI.curations.slice(1)"
							:key="item.id"
						>
							<ProductItem
								:product="item"
								:class="'T=pa'"
							></ProductItem>
						</li>
					</ul>
				</div>
				<div class="mm_btn_box">
					<div class="mm_inline">
						<button
							type="button"
							class="mm_btn T=sm T=line T=dark"
						>
							<b>새로운 상품 더보기</b><i class="ico_more-load"></i>
						</button>
					</div>
				</div>
			</section>

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
					<!--
						(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
						data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
					-->

					<!-- 내용없음 -->
					<p
						v-if="productAPI && productAPI.paginator.data.length < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>등록된 상품이 없습니다
					</p>

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