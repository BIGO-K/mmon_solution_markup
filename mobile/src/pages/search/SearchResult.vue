<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import FootMoreBtn from '@/components/FootMoreBtn.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import GenderFilter from '@/features/recommend/components/RecommendGenderFilter.vue';

	const searchAPI = ref<SearchAPI>();

	// api
	Api.getAll([
		{ key: `SEARCH_ENGINE_SEARCH`, ref: searchAPI },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<i class="ico_search"><b class="mm_ir-blind">검색</b></i>
		</template>

		<template #search>
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="search"
						class="textfield"
						data-text
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">검색어를 입력하세요</span>
				</label>
			</div>
			<div class="mm_rside">
				<button
					type="button"
					class="btn_popup-close"
				>
					<i class="ico_popup-close"></i><b class="mm_ir-blind">팝업 닫기</b>
				</button>
			</div>
		</template>

		<template #content>
			<GenderFilter></GenderFilter>

			<!-- 검색 결과 리스트 -->
			<div class="m_popup-search-result">
				<!-- 결과없음 -->
				<p
					v-if="searchAPI?.paginator.total === 0"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>검색 결과가 없습니다
				</p>

				<!-- 검색어 변환 -->
				<div
					v-if="searchAPI?.is_corrected"
					class="m...result-offer"
				>
					<p><strong>{{ searchAPI?.corrected_keyword }}</strong>(으)로 자동 변환된<br>검색 결과입니다</p>
					<a href="#"><strong class="mm_text-variable">'{{ searchAPI?.origin_keyword }}'</strong><b>검색 결과 보기</b><i class="ico_link"></i></a>
				</div>

				<!-- 연관 검색어 -->
				<div
					v-if="(searchAPI?.related_keywords.length ?? NaN) > 0"
					class="m...result-keyword"
				>
					<div class="mm_scroller T=x">
						<ul>
							<li
								v-for="keyword in searchAPI?.related_keywords"
								:key="keyword"
							>
								<button type="button">
									<b>{{ keyword }}</b>
								</button>
							</li>
						</ul>
					</div>
				</div>

				<!-- 브랜드샵 -->
				<!-- (D) 브랜드명 검색 시 노출되는 버튼입니다. -->
				<router-link
					v-if="searchAPI"
					class="btn_brandshop"
					:to="{ name: 'Brandshop', params: { id: searchAPI?.brand.id } }"
				>
					<strong>{{ searchAPI?.brand.name }}</strong><b>브랜드샵 가기<i class="ico_link"></i></b>
				</router-link>

				<div class="mm_inner">
					<div class="mm_product-list T=card">
						<div class="mm_product-list-head">
							<p class="text_total">
								<strong>8,960</strong>개
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
							v-if="(searchAPI?.paginator.data.length ?? NaN) < 0"
							class="mm_text-none"
						>
							<i class="ico_text-none"></i>등록된 상품이 없습니다
						</p>

						<!-- 스켈레톤 -->
						<ul v-if="_isLoading">
							<li
								v-for="item in 6"
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

						<!--
							(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
							data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
						-->
						<ul v-esle>
							<li
								v-for="item in searchAPI?.paginator.data"
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
			</div>
		</template>
	</LayoutPopup>
</template>