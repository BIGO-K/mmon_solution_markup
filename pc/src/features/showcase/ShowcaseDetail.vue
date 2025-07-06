<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ProductItem from '@/components/ProductItem.vue';

	const detailAPI = ref<ShowcaseDetailAPI>();
	const viewMoreAPI = ref<ShowcaseMoreAPI>();

	// api
	Api.getAll([
		{ key: `SHOWCASE_DETAIL`, ref: detailAPI },
		{ key: `ANOTHER_SHOWCASE_LIST`, ref: viewMoreAPI },
	]);
</script>

<template>
	<div class="m_showcase-detail">
		<h3 class="mm_title">
			<b>쇼케이스</b>
		</h3>

		<!-- 상세 타이틀 -->
		<div class="mm_event-head">
			<div class="mm_inner">
				<h4><b>{{ detailAPI?.showcase_information.title }}</b></h4>
				<router-link
					class="btn_home"
					:to="{ name: 'Showcase' }"
				>
					<i class="ico_back"></i><b>쇼케이스 Main</b>
				</router-link>
				<p class="text_date">
					{{ detailAPI?.showcase_information.created_at }}
				</p>
			</div>
		</div>

		<div class="mm_inner">
			<!-- 쇼케이스 배너, 상세설명 -->
			<i class="image_banner">
				<LazyloadMUI
					:_tag="'img'"
					:_src="'/public/images/dummy/showcase_detail_1.png'"
					:alt="detailAPI?.showcase_information.pc_banner_alt"
				></LazyloadMUI>
			</i>
			<p class="text_detail">
				{{ detailAPI?.showcase_information.details }}
			</p>

			<!-- 동영상 -->
			<div
				v-if="detailAPI?.showcase_information.is_video"
				class="m_showcase-detail-media"
				v-html="detailAPI.showcase_information.video_url"
			>
			</div>

			<!-- 상품그룹 -->
			<div
				v-for="group in detailAPI?.showcase_information.groups"
				:key="group.id"
				class="m_showcase-detail-product"
			>
				<i class="image_banner">
					<LazyloadMUI
						:_tag="'img'"
						:_src="'/public/images/dummy/showcase_detail_3.png'"
						:alt="group.pc_image_alt"
					></LazyloadMUI>
				</i>
				<div class="mm_product-list">
					<div
						class="mm_slider T=list-full"
						data-slider="{ '_isLoop': false }"
					>
						<div class="mm_slider-inner">
							<ul class="mm_slider-list">
								<li
									v-for="item in group.goods_list"
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
			</div>

			<!-- 브랜드샵 -->
			<div class="m_showcase-detail-brand">
				<button
					type="button"
					class="btn_like"
					data-switch="{ 'onChange': 'toggleLikeBrand' }"
				>
					<i class="ico_like-brand"></i><b class="mm_ir-blind">찜한 브랜드에 추가하기</b>
				</button>
				<p class="text_brand">
					{{ detailAPI?.showcase_information.brand_name }}
				</p>
				<!-- XXX 잘못된 id 값이 들어왔을 때 404 or 메인이동 등 처리 필요 -->
				<router-link
					class="mm_btn T=sm T=light btn_shop"
					:to="{ name: 'Brandshop', params: { id: detailAPI?.showcase_information.brand_id ?? NaN } }"
				>
					<b>브랜드샵 가기</b><i class="ico_link T=xs"></i>
				</router-link>
			</div>

			<!-- View More -->
			<section class="m_showcase-detail-more">
				<h6><b>View More</b></h6>
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in viewMoreAPI?.list_by_sort"
								:key="item.id"
								class="mm_slider-item"
							>
								<router-link :to="{ name: 'ShowcaseDetail', params: { id: item.id } }">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_banner"
											:_src="'/public/images/dummy/event_banner3.png'"
										></LazyloadMUI>
										<figcaption>
											<p class="text_category">
												{{ item.sort_name }}
											</p>
											<p class="text_title">
												{{ item.title }}
											</p>
										</figcaption>
									</figure>
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
			</section>

			<!-- 하단 버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line T=dark"
						href="#"
					>
						<b>쇼케이스 메인으로 이동</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style src="./_showcase.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->