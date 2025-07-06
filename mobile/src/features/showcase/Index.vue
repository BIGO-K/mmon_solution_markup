<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';

	const route = useRoute();
	const _categoryIndex = computed(() => Number(route.query.category ?? 0));

	const categoriesAPI = ref<ShowcaseCategoriesAPI>();
	const listAPI = ref<ShowcaseListAPI>();

	// api
	Api.getAll([
		{ key: `SHOWCASE_SORT_LIST`, ref: categoriesAPI },
		{ key: `SHOWCASE_LIST`, ref: listAPI, query: `?category=${ _categoryIndex.value }&page=${route.query.page ?? 1}` },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<div class="m_showcase">
			<!-- 전체 내용없음 -->
			<p
				v-if="categoriesAPI && listAPI && categoriesAPI.sort_list.length < 1 && listAPI.paginator.total < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 쇼케이스가 없습니다
			</p>

			<!-- (D) 등록된 카테고리 메뉴가 있는 경우 아래 메뉴 구조로 노출됩니다. -->
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu T=scroll m_showcase-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<div class="mm_scroller T=x">
					<ul>
						<li>
							<router-link
								:class="{ 'S=tab-on': _categoryIndex === 0 }"
								:title="_categoryIndex === 0 ? '선택됨' : ''"
								:to="{ query: { category: 0, page: 1 } }"
								replace
							>
								<b>전체보기</b>
							</router-link>
						</li>
						<li
							v-for="category in categoriesAPI?.sort_list"
							:key="category.id"
						>
							<router-link
								:class="{ 'S=tab-on': _categoryIndex === category.id }"
								:title="_categoryIndex === category.id ? '선택됨' : ''"
								:to="{ query: { category: category.id, page: 1 } }"
								replace
							>
								<b>{{ category.name }}</b>
							</router-link>
						</li>
					</ul>
				</div>
			</div>

			<!-- (D) 등록된 카테고리 메뉴가 없는 경우 아래 타이틀 구조로 노출됩니다. -->
			<h3
				v-if="categoriesAPI && categoriesAPI.sort_list.length < 1"
				class="mm_heading"
			>
				<b>VIEW ALL</b>
			</h3>

			<!-- 내용없음 -->
			<p
				v-if="listAPI && listAPI.paginator.total < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 쇼케이스가 없습니다
			</p>

			<!-- 스켈레톤 -->
			<ul
				v-if="_isLoading"
				class="m_showcase-list T=skeleton"
			>
				<li
					v-for="item in 4"
					:key="item"
				>
					<i class="image_banner"></i>
					<p class="text_side"></p>
					<p class="text_title"></p>
					<p class="text_main"></p>
				</li>
			</ul>

			<!-- 쇼케이스 -->
			<ul
				v-else
				class="m_showcase-list"
			>
				<li
					v-for="(item, index) in listAPI?.paginator.data"
					:key="item.id"
					:class="{'T=showcase-left': (index + 1) % 4 === 3 || (index + 1) % 4 === 0}"
				>
					<router-link :to="{ name: 'ShowcaseDetail', params: { id: item.id } }">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_banner"
								:_src="item.thumbnail_url"
							></LazyloadMUI>
							<figcaption>
								<p class="text_side">
									{{ item.sort_name }}
								</p>
								<p class="text_title">
									{{ item.title }}
								</p>
								<p class="text_main1">
									{{ item.first_words }}
								</p>
								<p class="text_main2">
									{{ item.second_words }}
								</p>
								<b>자세히 보기<i class="ico_link T=sm"></i></b>
							</figcaption>
						</figure>
					</router-link>
				</li>
			</ul>

			<!-- 하단버튼 -->
			<div class="mm_inner">
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=line T=dark btn_more"
						>
							<b>더보기</b><i class="ico_more"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</LayoutMain>
</template>

<style src="./_showcase.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 쇼케이스 카테고리 sticky
	(function (__$showcase) {

		if (!__$showcase) return;

		var $gnb = mm.find('.mm_gnb-inner')[0];
		var _classOn = 'S=sticky-on';

		function showcaseSticky() {

			(mm.element.offset(__$showcase).top + __$showcase.offsetHeight < mm.element.offset($gnb).top + $gnb.offsetHeight) ? __$showcase.classList.add(_classOn) : __$showcase.classList.remove(_classOn);

		}

		mm.event.on(mm.scroll.el, 'scroll', showcaseSticky);

	})(mm.find('.m_showcase-tab')[0]);
</script> -->