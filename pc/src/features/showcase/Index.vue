<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const route = useRoute();
	const _categoryIndex = computed(() => Number(route.query.category ?? 0));

	const categoriesAPI = ref<ShowcaseCategoriesAPI>();
	const listAPI = ref<ShowcaseListAPI>();

	// api
	Api.getAll([
		{ key: `SHOWCASE_SORT_LIST`, ref: categoriesAPI },
	]);

	watch(_categoryIndex, () => {

		Api.get(`SHOWCASE_LIST`, listAPI, `?category=${ _categoryIndex.value }&page=${route.query.page ?? 1}`);

	}, {
		immediate: true,
	});
</script>

<template>
	<div class="mm_inner">
		<div class="m_showcase">
			<h3 class="mm_title">
				<b>쇼케이스</b>
			</h3>
			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None v-if="$route.query.type === 'none'">
				데이터가 없습니다
			</None>

			<template v-else>
				<!-- 카테고리 -->
				<div class="mm_tab_menu T=slider">
					<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<div
						class="mm_slider"
						data-slider="{ '_isLoop': false }"
					>
						<div class="mm_slider-inner">
							<ul class="mm_slider-list">
								<li class="mm_slider-item">
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
									v-for="showcaseCategory in categoriesAPI?.sort_list"
									:key="showcaseCategory.id"
									class="mm_slider-item"
								>
									<router-link
										:class="{ 'S=tab-on': _categoryIndex === showcaseCategory.id }"
										:title="_categoryIndex === showcaseCategory.id ? '선택됨' : ''"
										:to="{ query: { category: showcaseCategory.id, page: 1 } }"
										replace
									>
										<b>{{ showcaseCategory.name }}</b>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="mm_slider-control">
							<button
								type="button"
								class="btn_slider-prev"
							>
								<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
							</button>
							<button
								type="button"
								class="btn_slider-next"
							>
								<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
							</button>
						</div>
					</div>
				</div>

				<!-- 쇼케이스 리스트 -->
				<div
					v-if="$route.query.type === 'skeleton'"
					class="m_showcase-list T=skeleton"
				>
					<ul>
						<li
							v-for="i in 12"
							:key="i"
						>
							<i class="image_banner"></i>
							<div>
								<p class="text_category"></p>
								<p class="text_title"></p>
								<p class="text_main"></p>
							</div>
						</li>
					</ul>
				</div>
				<div
					v-else
					class="m_showcase-list"
				>
					<ul>
						<li
							v-for="item in listAPI?.paginator.data"
							:key="item.id"
						>
							<router-link :to="{ name: 'ShowcaseDetail', params: { id: item.id } }">
								<figure>
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/dummy/shocase1.png'"
									></LazyloadMUI>
									<figcaption>
										<p class="text_category">
											{{ item.sort_name }}
										</p>
										<p class="text_title">
											{{ item.title }}
										</p>
										<p class="text_main">
											{{ item.first_words }}
										</p>
										<p class="text_main">
											{{ item.second_words }}
										</p>
										<b>자세히 보기<i class="ico_link T=xs"></i></b>
									</figcaption>
								</figure>
							</router-link>
						</li>
					</ul>
				</div>
			</template>

			<Pagination
				v-if="$route.query.type != 'none' && listAPI?.paginator != null"
				:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</div>
	</div>
</template>

<style src="./_showcase.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->