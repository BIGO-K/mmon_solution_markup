<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		content: BrandshopShowcaseAPI[];
	}>();
</script>

<template>
	<!-- 쇼케이스 -->
	<section class="m_brand-showcase">
		<h4><b>SHOWCASE</b></h4>
		<div
			class="mm_carousel"
			data-carousel="{ '_autoDelay': 4, '_isMoreSide': true, '_effect': 'cover', 'onUpdate': 'cardCarouselUpdate', 'onComplete': 'cardCarouselComplete' }"
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
									:_src="item.image_url"
									:alt="item.image_alt"
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
			<div class="mm_carousel-control">
				<button
					type="button"
					class="btn_carousel-prev"
				>
					<i class="ico_control-prev"></i><b class="mm_ir-blind">이전으로</b>
				</button>
				<button
					type="button"
					class="btn_carousel-next"
				>
					<i class="ico_control-next"></i><b class="mm_ir-blind">다음으로</b>
				</button>
			</div>
			<div class="mm_carousel-count">
				<strong class="text_carousel-index">01</strong>
				<i>/</i>
				<span class="text_carousel-total">03</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	@use 'sass:math';
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	.m_brand-showcase {
		padding: 0 14px;

		h4 {
			padding: 11px 0 12px 2px;
			@include mixin.font('1.7rem/1.4');
		}

		.mm_carousel {
			margin-right: -14px;

			&-inner {
				padding-right: 3.7234vw;
			}

			&-list {
				box-sizing: content-box;
				padding-top: 100%;
				height: 85px;
			}

			&-item {
				top: 0;
				background-color: transparent;

				&#{escape('.S=on')} {
					figcaption {
						opacity: 1;
					}
				}

				&#{escape('.S=prev')} {
					figcaption {
						opacity: 0;
					}
				}

				&#{escape('.S=next')} {
					figcaption {
						opacity: 1;
						transition-delay: const.$time_fast;
					}
				}

				.image_banner {
					position: relative;
					padding-top: 100%;
					width: 100%;
				}

				figcaption {
					padding: 16px 8px 0;
					@include mixin.font(#4a4a4a '1.3rem/1.9rem');

					opacity: 0;
					transition: opacity, const.$time_base;

					> * {
						@include mixin.text-ellipsis(1);
					}

					.text_title {
						@include mixin.font(var.$color_text_base '2rem/2.4rem');

						+ .text_main {
							margin-top: 7px;
						}
					}

					.text_main {
						padding-right: 50px;

						+ .text_main {
							margin-top: 1px;
						}
					}
				}
			}

			&-control {
				right: 0;
				left: 0;
				margin-top: -42px;
				transform: translateX(0);

				button {
					padding: 11px;
					opacity: 0.7;

					&.btn_carousel-next {
						right: 4.25532vw;
					}
				}
			}

			&-count {
				right: 24px;
				bottom: 0;
				padding: 0 12px 0 11px;
				width: auto;
				height: 22px;
				border: 1px solid #eee;
				border-radius: 11px;
				background-color: #f5f5f5;
				font-size: 0;

				> * {
					@include mixin.font(#888 v_400 '1.2rem/2.1rem');
				}

				.text_carousel-index {
					@include mixin.font(var.$color_text_base v_600);
				}

				> i {
					margin: 0 3px 0 2px;
				}
			}
		}

		+ .m_brand-curation {
			margin-top: 48px;
		}
	}
</style>