<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		content: BrandshopShowcaseAPI[];
	}>();
</script>

<template>
	<!-- 쇼케이스 -->
	<section class="m_brand-prod-showcase">
		<h3 class="mm_heading">
			<b>SHOWCASE</b>
		</h3>
		<div
			class="mm_carousel"
			data-carousel="{ '_autoDelay': 4 }"
		>
			<div class="mm_carousel-inner">
				<ul class="mm_carousel-list">
					<li
						v-for="item in content"
						:key="item.id"
						class="mm_carousel-item"
					>
						<a href="#">
							<figure>
								<LazyloadMUI
									class="mm_bg-cover image_banner"
									:_src="'/public/images/dummy/shocase1.png'"
								></LazyloadMUI>
								<figcaption>
									<p class="text_title">{{ item.title }}</p>
									<p class="text_main">{{ item.main_text_1 }}</p>
									<p class="text_main">{{ item.main_text_2 }}</p>
								</figcaption>
							</figure>
						</a>
					</li>
				</ul>
			</div>
			<div class="mm_carousel-count">
				<strong class="text_carousel-index"></strong>
				<span class="text_carousel-total"></span>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';

	/** 브랜드샵 - 큐레이션, 쇼케이스 */
	.m_brand-prod {
		margin-bottom: 70px;
		@include mixin.clearfix;

		&-showcase {
			float: right;
			margin-top: -9px;
			width: 650px;

			.mm_heading {
				padding: 0 2px 23px;
				border-bottom: 0;
			}

			.mm_carousel {
				&-list {
					height: 774px;
				}

				&-item {
					a {
						display: block;
					}

					figure {
						.image_banner {
							padding-top: 100%;
							width: 100%;
						}
					}

					figcaption {
						padding: 25px 19px 0;
						@include mixin.font(#4a4a4a '1.7rem/2.5rem');

						> * {
							@include mixin.text-ellipsis(1);
						}

						.text_title {
							@include mixin.font(const.$color_text_base '2.6rem/3.7rem');
						}

						.text_main {
							margin-top: 13px;
							padding-right: 70px;

							+ .text_main {
								margin-top: 1px;
							}
						}
					}
				}

				&-count {
					right: 21px;
					bottom: 0;
					padding: 0 11px;
					height: 26px;
					border: 1px solid #d5d5d5;
					border-radius: 26px;
					background-color: #f5f5f5;
					@include mixin.font(#999 v_400 '1.5rem/2.5rem');

					.text_carousel-index {
						@include mixin.font(const.$color_text_base v_600);
					}

					.text_carousel-total {
						opacity: 1;

						&::before {
							margin-right: 4px;
							content: '/';
						}
					}
				}
			}

			+ .m_brand-prod-curation {
				float: left;
				width: 670px;

				.mm_heading {
					padding-left: 0;
				}

				.mm_product-list {
					ul {
						grid-template-columns: repeat(3, 210px);
						grid-gap: 37px 20px;
					}
				}
			}
		}
	}
</style>