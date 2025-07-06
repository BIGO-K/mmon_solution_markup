<script setup lang="ts">

</script>

<template>
	<!-- 사은품 -->
	<a
		class="btn_gift"
		href="#"
	>
		<span>GIFT</span><b>구매 고객을 위한 <strong>사은품을 확인해 보세요</strong></b><small>확인하기<i class="ico_link T=xs"></i></small>
	</a>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';

	.m_prodetail-head-info {
		// 사은품
		.btn_gift {
			display: block;
			position: relative;
			margin: 20px 0 18px;
			padding-left: 242px;
			height: 43px;
			border: 1px solid #4457a7;
			font-size: 0;

			span {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				padding-left: 54px;
				width: 153px;
				background-color: #4457a7;
				@include mixin.font(rgba(#fff, 0.9) '1.5rem/4.3rem');

				&::after {
					position: absolute;
					right: 0;
					@include mixin.triangle(#fff, left, 41px, 25px);

					border-bottom: 0;
					content: '';
				}
			}

			b {
				@include mixin.font('1.5rem/4.3rem');

				strong {
					@include mixin.font(#4457a7 v_700);
				}
			}

			small {
				display: inline-block;
				margin: 11px 0 0 13px;
				padding: 0 5px;
				height: 19px;
				border: 1px solid #101010;
				border-radius: 3px;
				@include mixin.font('1.1rem/1.8rem');

				.ico_link {
					margin: 5px 0 0 4px;
				}
			}
		}
	}
</style>