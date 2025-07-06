<script setup lang="ts">

</script>

<template>
	<label class="mm_form-check T=switch">
		<input
			type="checkbox"
			data-check
		>
		<b class="mm_block">
			<i class="ico_form-check"></i>
			<span class="text_label">생체인증 로그인</span>
		</b>
	</label>
</template>

<style lang="scss">
	@use 'sass:math';
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	/** 마이페이지 - 설정 */
	.m_myset-app {
		> .mm_form-check {
			margin-top: 25px;
			padding: 0 16px 0 14px;
			width: 100%;

			.mm_block {
				position: relative;
			}

			+ .mm_check-list {
				margin-top: 22px;
				border-top: 1px solid #e6e6e6;
			}
		}
	}
</style>