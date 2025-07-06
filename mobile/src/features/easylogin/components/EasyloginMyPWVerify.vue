<script setup lang="ts">

</script>

<template>
	<li>
		<a
			class="btn_sns"
			href="#"
			target="_blank"
			title="새 창 열림"
		>
			<i class="ico_sns-payco"></i><b>페이코</b>
		</a>
	</li>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';

	.m_my-sns {
		[class*='ico_sns'] {
			&.ico_sns-payco {
				background-color: #e1292f;

				&::before {
					margin: 14px 0 0 4px;
					width: 16px;
					height: 20px;
					@include mixin.svg(#fff url('/public/images/common/ico_payco_sm.svg'));
				}
			}
		}
	}
</style>