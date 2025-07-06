<script setup lang="ts">

</script>

<template>
	<router-link
		class="btn_size"
		:to="{ name: 'MySize' }"
	>
		<i class="ico_size"></i><b>My 사이즈</b>
	</router-link>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/style/setting/var';

	.m_mymain-member-info {
		> .mm_flex {
			// MY 사이즈 버튼(유료기능: 개인화상품리뷰, 개인화추천기능, 사이즈필터)
			.btn_size {
				@include mixin.font(var.$color_text_base '/3.8rem');

				.ico_size {
					margin: 13px 4px 0 0;

					&::before {
						background-color: #000;
					}
				}

				b {
					position: relative;

					&::after {
						position: absolute;
						top: 10px;
						right: -6px;
						width: 4px;
						height: 4px;
						border-radius: 100%;
						background-color: var.$color_sub;
						content: '';
					}
				}
			}
		}
	}
</style>