<script setup lang="ts">

</script>

<template>
	<!-- 성별필터 -->
	<div class="mm_filter-gender">
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
			<!-- (D) 비회원/회원 상태일 경우와 MYFIT 등록/미등록에 따라 버튼 클릭 시 노출되는 페이지를 변경합니다. -->
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
	@use 'sass:math';
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	.mm_filter-gender {
		position: fixed;
		z-index: const.$zindex_floating;
		bottom: 0;
		width: 100%;
		height: 0;
		@include mixin.font('0', nowrap);

		transition: opacity const.$time_fast;

		&#{escape('.S=gender-bottom')} {
			position: absolute;
			bottom: -101px;
		}

		&-inner {
			display: inline-block;
			overflow: hidden;
			position: relative;
			bottom: calc(26px + var.$toolbar_height_base);
			left: 50%;
			height: 36px;
			border-radius: 36px;
			background-color: #fff;
			box-shadow: 0 1px 6px 0 rgba(#000, 0.3);
			transform: translate(-50%, -100%);

			button {
				padding: 1px 10px;
				width: 64px;
				height: 100%;
				@include mixin.font('1.3rem/3.4rem' center);

				&#{escape('.S=switch-on')} {
					background-color: var.$color_main;
					color: #fff;
				}

				&:last-child {
					b {
						margin-top: 1px;
						margin-left: -6px;
					}
				}
			}
		}

		+ .mm_inner > .mm_product-list,
		+ .mm_product-list {
			padding-bottom: 62px;

			+ .mm_foot {
				margin-top: -34px;
				padding-bottom: 34px;
			}
		}

		// 검색결과 페이지
		#{escape('.L=search')} & {
			bottom: 26px;

			&-inner {
				bottom: 0;
			}

			+ .m_popup-search-result {
				padding-bottom: 62px;
			}
		}
	}
</style>