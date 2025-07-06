<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
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
	<LayoutSub>
		<template #title>
			<h1><b>쇼케이스</b></h1>
		</template>

		<template #content>
			<!-- 쇼케이스 상단 -->
			<div class="m_showcase-detail-head">
				<i class="image_banner">
					<LazyloadMUI
						:_tag="'img'"
						:_src="detailAPI?.showcase_information.mobile_banner_url"
						:alt="detailAPI?.showcase_information.mobile_banner_alt"
					></LazyloadMUI>
				</i>
				<div class="mm_inner">
					<p class="text_title">
						<b>{{ detailAPI?.showcase_information.title }}</b>
					</p>
					<p class="text_date">
						{{ detailAPI?.showcase_information.created_at }}
					</p>
					<p class="text_detail">
						{{ detailAPI?.showcase_information.details }}
					</p>
				</div>
			</div>

			<!-- 동영상 -->
			<div
				v-if="detailAPI?.showcase_information.is_video"
				class="m_showcase-detail-media"
				v-html="detailAPI.showcase_information.video_url"
			></div>

			<!-- 상품그룹 -->
			<div
				v-for="group in detailAPI?.showcase_information.groups"
				:key="group.id"
				class="m_showcase-detail-product"
			>
				<i class="image_banner">
					<LazyloadMUI
						:_tag="'img'"
						:_src="group.mobile_image_url"
						:alt="group.mobile_image_alt"
					></LazyloadMUI>
				</i>
				<div class="mm_scroller T=x">
					<div class="mm_product-list T=card">
						<ul>
							<li
								v-for="item in group.goods_list"
								:key="item.id"
							>
								<ProductItem
									:product="item"
									:class="'T=pa'"
								></ProductItem>
							</li>
						</ul>
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
				<router-link
					class="mm_btn T=xs T=primary btn_shop"
					:to="{ name: 'Brandshop', params: { id: (detailAPI?.showcase_information.brand_id ?? NaN) } }"
				>
					<b>SHOP NOW</b><i class="ico_link T=sm"></i>
				</router-link>
			</div>

			<!-- View More -->
			<!-- TODO 캐러셀 작업 방향 확인 필요 -->
			<section class="mm_inner m_showcase-detail-more">
				<h5><b>View More</b></h5>
				<div
					class="mm_carousel"
					data-carousel
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li class="mm_carousel-item">
								<ul>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner1.png' }"
												></i>
												<figcaption>
													<p class="text_category">BRAND STORY</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner2.png' }"
												></i>
												<figcaption>
													<p class="text_category">2022.07.20</p>
													<p class="text_title">좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner3.png' }"
												></i>
												<figcaption>
													<p class="text_category">COOL</p>
													<p class="text_title">행복한 식탁을 꿈꾸는 아내들의 이야기 아내의 식탁</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner4.png' }"
												></i>
												<figcaption>
													<p class="text_category">2022.07.20</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
								</ul>
							</li>
							<li class="mm_carousel-item">
								<ul>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner3.png' }"
												></i>
												<figcaption>
													<p class="text_category">COOL</p>
													<p class="text_title">행복한 식탁을 꿈꾸는 아내들의 이야기 아내의 식탁</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner4.png' }"
												></i>
												<figcaption>
													<p class="text_category">2022.07.20</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner1.png' }"
												></i>
												<figcaption>
													<p class="text_category">BRAND STORY</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner2.png' }"
												></i>
												<figcaption>
													<p class="text_category">LIFE</p>
													<p class="text_title">좋은 작품이 주는 감동의 순간 다꼬르피스(DACCORD PIECE)</p>
												</figcaption>
											</figure>
										</a>
									</li>
								</ul>
							</li>
							<li class="mm_carousel-item">
								<ul>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner4.png' }"
												></i>
												<figcaption>
													<p class="text_category">2022.07.20</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a href="mainShowcaseDetail.html">
											<figure>
												<i
													class="mm_bg-cover image_banner"
													data-lazyload="{ '_src': '../image/_sample/showcase_banner1.png' }"
												></i>
												<figcaption>
													<p class="text_category">BRAND STORY</p>
													<p class="text_title">일상속의 감각적인 룩을 제안하는 브랜드 LENINA(르니나)</p>
												</figcaption>
											</figure>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="mm_carousel-pagination">
						<ol>
							<li>
								<button
									type="button"
									class="btn_carousel-page"
								>
									<b class="mm_ir-blind">1</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_carousel-page"
								>
									<b class="mm_ir-blind">2</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_carousel-page"
								>
									<b class="mm_ir-blind">3</b>
								</button>
							</li>
						</ol>
					</div>
				</div>
			</section>

			<!-- 하단 버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<router-link
						class="mm_btn T=line T=dark"
						:to="{ name: 'Showcase' }"
					>
						<b>쇼케이스 메인으로 이동</b><i class="ico_link"></i>
					</router-link>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>

<style src="./_showcase.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->