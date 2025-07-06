<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ProductFilter from '@/components/ProductFilter.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import ProductListHeadFilter from '@/components/ProductListHeadFilter.vue';
	import RecommendFilterGender from '@/features/recommend/components/RecommendFilterGender.vue';

	const searchAPI = ref<SearchAPI>();
	const hotSearchAPI = ref<HotSearchAPI>();

	// api
	Api.getAll([
		{ key: `SEARCH_ENGINE_SEARCH`, ref: searchAPI },
		{ key: `SEARCH_ENGINE_HOT_SEARCHES`, ref: hotSearchAPI },
	]);

	// TODO 유료기능 사용 검증 및 세팅
	const feature = {
		filterGender: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<div class="mm_inner">
		<!-- 검색결과 -->
		<div class="m_searched-head">
			<h3><strong>‘{{ searchAPI?.origin_keyword }}’</strong><b>검색완료</b><span>{{ searchAPI?.paginator.total }}</span></h3>
			<template v-if="searchAPI != null && searchAPI.paginator.total > 0">
				<!-- 검색어 제안 -->
				<div
					v-if="searchAPI.is_corrected"
					class="m_searched-head-offer"
				>
					<p><strong>{{ searchAPI.corrected_keyword }}</strong>(으)로 자동 변환된 검색 결과입니다</p>
					<a href="#"><strong class="mm_text-variable">‘{{ searchAPI?.origin_keyword }}’</strong><b>검색결과 보기</b><i class="ico_link T=sm"></i></a>
				</div>

				<!-- 브랜드샵 -->
				<router-link
					:to="{ name: 'Brandshop', params: { id: searchAPI.brand.id } }"
					class="mm_btn T=xs T=line T=dark btn_brandshop"
				>
					<i class="ico_shop"></i><b>{{ searchAPI.brand.name }} 브랜드샵 가기</b><i class="ico_link T=sm"></i>
				</router-link>

				<!-- 연관검색어 -->
				<section
					v-if="searchAPI != null && searchAPI.related_keywords.length > 0"
					class="m_searched-head-keyword"
				>
					<h4><b>연관검색어</b></h4>
					<ul>
						<li
							v-for="keyword in searchAPI.related_keywords"
							:key="keyword"
						>
							<a href="#">{{ keyword }}</a>
						</li>
					</ul>
				</section>
			</template>
		</div>

		<!-- 결과 없음 -->
		<div
			v-if="searchAPI?.paginator.total === 0"
			class="m_searched-none"
		>
			<!-- 인기 검색어 -->
			<section class="m_searched-none-interest">
				<h5><b>인기 검색어</b></h5>
				<ol>
					<li
						v-for="interestKeyword in hotSearchAPI?.hot_search_words"
						:key="interestKeyword.keyword"
					>
						<router-link :to="{ name: 'SearchResult', query: { keyword: interestKeyword.keyword } }">
							<b>{{ interestKeyword.keyword }}</b>
							<i
								v-if="interestKeyword.change_type === 'N'"
								class="ico_rank-new"
								title="신규"
							></i>
							<i
								v-else-if="interestKeyword.change_type === 'S'"
								class="ico_rank-unchanged"
								title="변동없음"
							></i>
							<i
								v-else-if="interestKeyword.change_type === 'U'"
								class="ico_rank-up"
								title="상승"
							></i>
							<i
								v-else-if="interestKeyword.change_type === 'D'"
								class="ico_rank-down"
								title="하락"
							></i>
							<b
								v-if="interestKeyword.change_type === 'U' || interestKeyword.change_type === 'D'"
								class="text_rank"
							>
								{{ interestKeyword.change_rank }}
							</b>
						</router-link>
					</li>
				</ol>
				<p class="text_update">
					<span>{{ hotSearchAPI?.indexed_at }}</span>기준
				</p>
			</section>
			<None>검색 결과가 없습니다</None>
			<div class="mm_note">
				<ul>
					<li>정확한 검색어를 입력하셨는지 확인해 주세요.</li>
					<li>다른 검색어를 입력해 주세요.</li>
					<li>노출이 제한된 상품일 수 있습니다.</li>
				</ul>
			</div>
		</div>
		<template v-if="searchAPI != null && searchAPI.paginator.total > 0">
			<ProductFilter></ProductFilter>
			<div
				class="mm_product-list"
				:class="{ 'T=skeleton': $route.query.type === 'skeleton' }"
			>
				<ProductListHeadFilter
					:total="searchAPI?.paginator.total"
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

				<template v-else-if="$route.query.type === 'skeleton'">
					<ul>
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
				</template>

				<!-- 상품리스트 -->
				<ul v-else>
					<li
						v-for="item in searchAPI?.paginator.data"
						:key="item.id"
					>
						<ProductItem :product="item"></ProductItem>
					</li>
				</ul>
			</div>
			<Pagination
				v-if="$route.query.type != 'none' && searchAPI?.paginator != null"
				:total-page="Math.ceil(searchAPI.paginator.total / searchAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</template>

		<!-- best 아이템 -->
		<section
			v-if="searchAPI?.paginator.total === 0"
			class="m_searched-best"
		>
			<h5><b>BEST 아이템</b></h5>
			<div class="mm_product-list">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in searchAPI?.best_goods"
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
			<a
				href="#"
				class="btn_more"
			>
				<b>더보기</b><i class="ico_more"></i>
			</a>
		</section>
	</div>
	<RecommendFilterGender v-if="feature.filterGender._is"></RecommendFilterGender>
</template>