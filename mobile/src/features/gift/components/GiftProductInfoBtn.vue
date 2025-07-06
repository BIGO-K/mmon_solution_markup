<script setup lang="ts">

</script>

<template>
	<!-- 사은품 -->
	<router-link
		class="btn_gift"
		:to="{ name: 'ProductGiftInfo' }"
	>
		<span>GIFT</span><b>구매 고객을 위한 <strong>사은품을 확인해보세요</strong></b><i class="ico_link"></i>
	</router-link>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';

	.m_prodetail-head-info {
		.btn_gift {
			display: block;
			position: relative;
			margin-top: 3px;
			padding-left: 69px;
			height: 43px;
			border: 1px solid #4457a7;

			&:last-of-type {
				margin-bottom: 16px;
			}

			span {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				padding-left: 13px;
				width: 62px;
				background-color: #4457a7;
				@include mixin.font(rgba(#fff, 0.7) '1.2rem/4.2rem');

				&::after {
					position: absolute;
					right: 0;
					@include mixin.triangle(#fff, left, 41px, 19px);

					border-bottom: 0;
					content: '';
				}
			}

			b {
				@include mixin.font('1.3rem/4.2rem');

				strong {
					color: #4457a7;
				}
			}

			.ico_link {
				position: absolute;
				top: 50%;
				right: 13px;
				transform: translateY(-50%);

				&::before {
					width: 6px;
					height: 14px;
					background-color: #4457a7;
				}
			}

			+ .btn_seller {
				margin-top: 14px;
			}
		}
	}
</style>