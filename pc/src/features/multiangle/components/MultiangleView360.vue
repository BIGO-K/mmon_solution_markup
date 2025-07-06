<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		multiangle: ProductDetail360[`degree_360_image_urls`];
	}>();
</script>

<template>
	<!-- 360도 뷰 -->
	<button
		type="button"
		class="btn_multiangle-view"
	>
		<i class="ico_multiangle"></i><b class="mm_ir-blind">360도 뷰</b>
	</button>
	<div class="m_prodetail-multiangle">
		<div class="m_prodetail-multiangle-note">
			<i class="ico_multiangle-drag"></i>
			<p>좌우로 움직여<br>더 자세히 보세요</p>
		</div>

		<!-- 360도 뷰 이미지 -->
		<div
			v-for="image in multiangle"
			:key="image"
			class="m_prodetail-multiangle-image"
		>
			<LazyloadMUI
				class="mm_bg-cover image_product"
				:_src="'/public/images/dummy/360_sample1.png'"
			></LazyloadMUI>
		</div>

		<button
			type="button"
			class="btn_close"
		>
			<i class="ico_close"></i><b class="mm_ir-blind">360도 뷰 닫기</b>
		</button>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function';
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';

	.m_prodetail {
		&-thumbnail {
			.btn_multiangle-view {
				position: absolute;
				z-index: 2;
				top: 564px;
				right: 20px;
				width: 70px;
				height: 70px;
				border-radius: 70px;
				background-color: #101010;
				box-shadow: 0 6px 6px rgba(#000, 0.16);
				text-align: center;

				.ico_multiangle {
					margin-left: 1px;

					&::before {
						width: 45px;
						height: 46px;
						@include mixin.svg(#fff url('/public/images/content/ico_product_multiangle.svg'));
					}
				}
			}
		}

		&-multiangle {
			position: absolute;
			z-index: 1;
			top: 0;
			right: 0;
			left: 0;
			padding-top: 100%;
			opacity: 0;
			transition: opacity const.$time_fast;
			pointer-events: none;

			&#{function.escape('.S=multiangle-on')} {
				opacity: 1;
				pointer-events: auto;

				&::after {
					position: absolute;
					inset: 0;
					border: 1px solid #101010;
					content: '';
				}
			}

			&-image {
				position: absolute;
				top: 0;
				width: 100%;
				background-color: #fff;

				.image_product {
					display: none;
					padding-top: 100%;
					width: 100%;

					&#{function.escape('.S=on')} {
						display: block;
					}
				}
			}

			&-note {
				position: absolute;
				z-index: 1;
				top: 50%;
				left: 50%;
				padding-top: 149px;
				width: 280px;
				height: 280px;
				border-radius: 280px;
				background-color: rgba(#101010, 0.78);
				opacity: 0;
				transform: translate(-50%, -50%);
				transition: opacity const.$time_base;
				pointer-events: none;
				@include mixin.font(#fff '2rem/2.8rem' center);

				&#{function.escape('.S=note-on')} {
					opacity: 1;
				}

				.ico_multiangle-drag {
					position: absolute;
					top: 64px;
					left: 50%;
					transform: translateX(-50%);

					&::before {
						width: 90px;
						height: 74px;
						@include mixin.background(url('/public/images/content/ico_multiangle_drag.svg') 'center center/cover' no-repeat);
					}
				}
			}

			.btn_close {
				position: absolute;
				z-index: 1;
				top: 0;
				right: 0;
				width: 44px;
				height: 44px;
				background-color: #101010;

				.ico_close::before {
					width: 17px;
					height: 17px;
					background-color: #fff;
				}
			}
		}
	}
</style>