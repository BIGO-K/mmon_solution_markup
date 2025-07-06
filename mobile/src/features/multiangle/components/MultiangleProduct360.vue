<script setup lang="ts">

</script>

<template>
	<!-- 360도 뷰 -->
	<router-link
		class="btn_multiangle-view"
		:to="{ name: 'ProductMultiangleView' }"
	>
		<i class="ico_multiangle"></i><b class="mm_ir-blind">360도 뷰</b>
	</router-link>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';

	/** 상품상세 */
	.m_prodetail {
		&-head-product {
			> .btn_multiangle-view {
				position: absolute;
				z-index: const.$zindex_floating;
				top: 0;
				right: 26px;
				margin-top: 78.45744%;
				width: 54px;
				height: 54px;
				border-radius: 54px;
				background-color: #101010;
				box-shadow: 0 3px 3px rgba(#000, 0.16);
				text-align: center;

				.ico_multiangle {
					margin-top: 9px;

					&::before {
						width: 35px;
						height: 35px;
						@include mixin.svg(#fff url('/public/images/content/ico_product_multiangle.svg'));
					}
				}
			}
		}
	}
</style>