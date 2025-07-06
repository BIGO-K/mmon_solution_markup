<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutMain from '@/components/layout/LayoutMain.vue';
	import ProductItem from '@/components/ProductItem.vue';

	const categoryListAPI = ref<CategoryListAPI>();
	const productAPI = ref<BestProductAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DISPLAY_ALL_CATEGORIES`, ref: categoryListAPI },
		{ key: `FETCH_MAIN_CATEGORY_BEST_GOODS`, ref: productAPI },
	]);

	const _selectCategory = ref('전체');

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<!-- 베스트 -->
		<div class="m_best">
			<!-- 카테고리 -->
			<!-- (D) 카테고리 선택 시 새로고침 되지 않고 페이지 내에서 카테고리 아래로 내용만 변경됩니다 -->
			<div class="m_product-category m_best-category">
				<div class="m_product-category-list m_best-category-list">
					<div class="mm_scroller T=x">
						<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다 -->
						<ul>
							<li>
								<a
									:class="{ 'S=category-on': _selectCategory === '전체' }"
									:title="_selectCategory === '전체' ? '선택됨' : ''"
									@click.prevent="_selectCategory = '전체'"
								>
									<b>전체</b>
								</a>
							</li>
							<li
								v-for="category in categoryListAPI?.category_list"
								:key="category.code"
							>
								<a
									type="button"
									:class="{ 'S=category-on': _selectCategory === category.name }"
									:title="_selectCategory === category.name ? '선택됨' : ''"
									@click.prevent="_selectCategory = category.name"
								>
									<b>{{ category.name }}</b>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- 내용없음 -->
			<p
				v-if="productAPI && productAPI.best_goods.length < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>데이터가 없습니다
			</p>

			<div
				class="mm_product-list T=card"
				:class="{ 'T=skeleton': _isLoading }"
			>
				<!--
					(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
					data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
				-->

				<!-- 스켈레톤 -->
				<ol v-if="_isLoading">
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
				</ol>

				<ol v-else>
					<li
						v-for="item in productAPI?.best_goods"
						:key="item.id"
					>
						<ProductItem
							:product="item"
							:class="'T=pa'"
							:is-rank="true"
							:is-react="false"
							:is-badge="false"
						></ProductItem>
					</li>
				</ol>
			</div>
		</div>
	</LayoutMain>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 베스트 카테고리 sticky
	(function(__$category) {

		if (!__$category) return;

		var $gnb = mm.find('.mm_gnb-inner')[0];
		var _classOn = 'S=sticky-on';

		function categorySticky() {

			(mm.element.offset(__$category).top + __$category.offsetHeight < mm.element.offset($gnb).top + $gnb.offsetHeight) ? __$category.classList.add(_classOn) : __$category.classList.remove(_classOn);

		}

		mm.event.on(mm.scroll.el, 'scroll', categorySticky);

	})(mm.find('.m_best-category')[0]);
</script> -->