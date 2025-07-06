<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import FootMoreBtn from '@/components/FootMoreBtn.vue';
	import GenderFilter from '@/features/recommend/components/RecommendGenderFilter.vue';

	const categoryListAPI = ref<CategoryListAPI>();
	const productAPI = ref<ProductListAPI>();
	const totalCountAPI = ref<ProductTotalCountAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DISPLAY_ALL_CATEGORIES`, ref: categoryListAPI },
		{ key: `GOODS_CATEGORIES_COMMON`, ref: productAPI },
		{ key: `GOODS_CATEGORIES_COMMON_COUNT`, ref: totalCountAPI },
	]);

	const _selectedCategoryCode1 = ref<string>();
	const _selectedCategoryCode2 = ref<string>();
	const _selectedCategoryCode3 = ref<string>();
	const _currentCategory1 = ref(0);
	const _currentCategory2 = ref(0);
	const _currentCategory3 = ref(0);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1>
				<button
					type="button"
					class="btn_category"
					data-switch="{ '_classOn': 'S=category-on', '_title': '접어보기', '_defaultTitle': '펼쳐보기', '_isParent': true, '_parentSelector': '.mm_header' }"
				>
					<b>남성</b><i class="ico_dropdown"></i>
				</button>
			</h1>
		</template>

		<template #headerCategoryMain>
			<!-- 대카테고리 -->
			<div class="mm_header-category">
				<div
					class="mm_header-category-dim"
					onclick="this.closest('.mm_header').classList.remove('S=category-on');"
				></div>
				<div class="mm_scroller">
					<ul>
						<li
							v-for="(category, index) in categoryListAPI?.category_list"
							:key="category.code"
						>
							<router-link
								v-if="category.code != null"
								:class="{ 'S=catemenu-on' : _selectedCategoryCode1 === category.code }"
								:to="{ name: 'CategorySub', params: { id: category.code } }"
								@click.prevent="_selectedCategoryCode1 = category.code; _currentCategory1 = index"
							>
								<b>{{ category.name }}</b>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</template>

		<template #content>
			<!-- (D) 카테고리 선택 시 새로고침 되지 않고 페이지 내에서 카테고리 아래로 내용만 변경됩니다 -->
			<!-- 카테고리 -->
			<div class="m_product-category">
				<!-- 중카테고리 -->
				<div class="m_product-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li>
								<a
									:class="{ 'S=category-on': _selectedCategoryCode2 === undefined }"
									href="#"
									:title="_selectedCategoryCode2 ? '선택됨' : ''"
									@click.prevent="_selectedCategoryCode2 = undefined"
								>
									<b>전체</b>
								</a>
							</li>
							<li
								v-for="(categoryDepth2, index) in categoryListAPI?.category_list[_currentCategory1].children"
								:key="categoryDepth2.code"
							>
								<router-link
									:class="{ 'S=category-on' : _selectedCategoryCode2 === categoryDepth2.code }"
									:to="{ name: 'CategorySub', params: { id: categoryDepth2.code } }"
									@click.prevent="() => {
										_selectedCategoryCode2 = categoryDepth2.code;
										_currentCategory2 = index;
										_selectedCategoryCode3 = undefined
									}"
								>
									<b>{{ categoryDepth2.name }}</b>
								</router-link>
							</li>
						</ul>
					</div>
				</div>

				<!-- 소카테고리 -->
				<div class="m_product-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li>
								<a
									:class="{ 'S=category-on': _selectedCategoryCode3 === undefined }"
									href="#"
									:title="_selectedCategoryCode3 ? '선택됨' : ''"
									@click.prevent="_selectedCategoryCode3 = undefined"
								>
									<b>전체</b>
								</a>
							</li>
							<li
								v-for="(categoryDepth3, index) in categoryListAPI?.category_list[_currentCategory1].children[_currentCategory2].children"
								:key="categoryDepth3.code"
							>
								<router-link
									:class="{ 'S=category-on' : _selectedCategoryCode3 === categoryDepth3.code }"
									:to="{ name: 'CategorySub', params: { id: categoryDepth3.code } }"
									@click.prevent="() => {
										_selectedCategoryCode3 = categoryDepth3.code;
										_currentCategory3 = index;
									}"
								>
									<b>{{ categoryDepth3.name }}</b>
								</router-link>
							</li>
						</ul>
					</div>
				</div>

				<!-- 소카테고리 드롭다운 -->
				<div
					class="mm_dropdown"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<i class="ico_category"></i><b class="mm_ir-blind">소 카테고리</b>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
							<div class="mm_scroller">
								<ul>
									<li>
										<a
											:class="{ 'S=category-on': _selectedCategoryCode3 === undefined }"
											href="#"
											:title="_selectedCategoryCode3 ? '선택됨' : ''"
											@click.prevent="_selectedCategoryCode3 = undefined"
										>
											<b>전체</b>
										</a>
									</li>
									<li
										v-for="(categoryDepth3, index) in categoryListAPI?.category_list[_currentCategory1].children[_currentCategory2].children"
										:key="categoryDepth3.code"
									>
										<router-link
											:class="{ 'S=category-on' : _selectedCategoryCode3 === categoryDepth3.code }"
											:to="{ name: 'CategorySub', params: { id: categoryDepth3.code } }"
											@click.prevent="() => {
												_selectedCategoryCode3 = categoryDepth3.code;
												_currentCategory3 = index;
											}"
										>
											<b>{{ categoryDepth3.name }}</b>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<GenderFilter></GenderFilter>

			<!-- 상품리스트 -->
			<div class="mm_inner">
				<!-- 카테고리 배너 -->
				<div class="m_product-category-banner">
					<i class="image_banner">
						<LazyloadMUI
							:_tag="'img'"
							:_src="'/public/images/_sample/category_banner_1.jpg'"
							:alt="'미니멀한 색상과 패턴 SEASON-OFF 단독 최대 60% 할인'"
						></LazyloadMUI>
					</i>
				</div>

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