<script setup lang="ts">

</script>

<template>
	<!-- 성별필터 -->
	<div
		class="mm_filter-gender"
		data-horizon
	>
		<div class="mm_filter-gender-inner">
			<button
				type="button"
				data-switch="{ 'onChange': 'switchGenderFilter' }"
			>
				<b>여성</b>
			</button>
			<button
				type="button"
				data-switch="{ 'onChange': 'switchGenderFilter' }"
			>
				<b>남성</b>
			</button>
			<!-- (D) 비회원/회원 상태일 경우와 MY FIT 등록/미등록에 따라 버튼 클릭 시 노출되는 페이지를 변경합니다. -->
			<button
				type="button"
				class="S=switch-on"
				title="선택됨"
				data-switch
			>
				<b>MY FIT</b>
			</button>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function';
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	.mm_filter-gender {
		position: fixed;
		z-index: const.$zindex_floating;
		bottom: 0;
		width: 100%;
		min-width: var.$min_width_extend;
		height: 0;
		font-size: 0;

		&#{function.escape('.S=filter-hold')} {
			position: absolute;
			left: 0 !important;
		}

		&-inner {
			display: inline-block;
			overflow: hidden;
			position: relative;
			bottom: 50px;
			left: 50%;
			height: 44px;
			border-radius: 44px;
			background-color: #fff;
			box-shadow: 0 1px 6px 0 rgba(#000, 0.3);
			transform: translate(-50%, -100%);
		}

		button {
			width: 94px;
			height: 100%;
			@include mixin.font('1.5rem/4.6rem');

			&#{function.escape('.S=switch-on')} {
				background-color: var.$color_main;
				color: #fff;
			}

			&:first-child {
				b {
					margin-right: -8px;
				}
			}

			&:last-child {
				b {
					margin-left: -6px;
				}
			}
		}
	}
</style>