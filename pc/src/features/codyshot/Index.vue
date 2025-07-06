<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const route = useRoute();
	const _categoryIndex = computed(() => Number(route.query.category ?? 0));

	const recentListAPI = ref<RecentCodyshotListAPI>();
	const categoryiesAPI = ref<CodyshotCategoryiesAPI>();
	const listAPI = ref<CodyshotListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_RECENT_CODY_SHOTS`, ref: recentListAPI },
		{ key: `CODY_SHOT_CATEGORIES`, ref: categoryiesAPI },
	]);

	watch(_categoryIndex, () => {

		Api.get(`MAIN_CODY_SHOTS`, listAPI, `?category=${ _categoryIndex.value }&page=${route.query.page ?? 1}`);

	}, {
		immediate: true,
	});
</script>

<template>
	<div class="mm_inner">
		<h3 class="mm_title">
			<b>코디샷</b>
		</h3>
		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			등록된 코디샷이 없습니다
		</None>

		<template v-else>
			<!-- 신규 코디샷 -->
			<section class="m_codyshot-new">
				<h4 class="mm_heading">
					<b>신규 코디샷</b>
				</h4>
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in recentListAPI?.recent_cody_shots"
								:key="item.id"
								class="mm_slider-item"
							>
								<div class="m_codyshot-item">
									<router-link :to="{ name: 'CodyshotDetail', params: { id: item.id } }">
										<figure>
											<LazyloadMUI
												class="mm_bg-cover image_banner"
												:_src="'/public/images/dummy/prod_x2_1.png'"
											></LazyloadMUI>
											<figcaption>
												<p class="text_brand">
													{{ item.brand_name }}
												</p>
												<p class="text_title">
													{{ item.title }}
												</p>
											</figcaption>
										</figure>
									</router-link>
								</div>
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
			</section>

			<!-- 탭메뉴 -->
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
								v-for="codyshotCategory in categoryiesAPI?.cody_shot_categories"
								:key="codyshotCategory.id"
								class="mm_slider-item"
							>
								<router-link
									:class="{ 'S=tab-on': _categoryIndex === codyshotCategory.id }"
									:title="_categoryIndex === codyshotCategory.id ? '선택됨' : ''"
									:to="{ query: { category: codyshotCategory.id, page: 1 } }"
									replace
								>
									<b>{{ codyshotCategory.name }}</b>
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

			<!-- 코디샷 목록 -->
			<div
				v-if="$route.query.type === 'skeleton'"
				class="m_codyshot-list T=skeleton"
			>
				<ul>
					<li
						v-for="i in 8"
						:key="i"
					>
						<i class="image_banner"></i>
						<p class="text_brand"></p>
						<p class="text_title"></p>
					</li>
				</ul>
			</div>

			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None v-else-if="$route.query.type === 'noneProd'">
				등록된 코디샷이 없습니다
			</None>

			<!-- 코디샷 목록 -->
			<div
				v-else
				class="m_codyshot-list"
			>
				<ul>
					<li
						v-for="item in listAPI?.paginator?.data"
						:key="item.id"
					>
						<div class="m_codyshot-item">
							<router-link :to="{ name: 'CodyshotDetail', params: { id: item.id } }">
								<figure>
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/dummy/prod_x2_1.png'"
									></LazyloadMUI>
									<figcaption>
										<p class="text_brand">
											{{ item.brand_name }}
										</p>
										<p class="text_title">
											{{ item.title }}
										</p>
									</figcaption>
								</figure>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</template>

		<Pagination
			v-if="!$route.query.type && listAPI?.paginator != null"
			:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>

<style src="./_codyshot.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->