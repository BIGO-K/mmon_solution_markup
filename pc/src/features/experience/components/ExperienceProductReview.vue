<script setup lang="ts">

</script>

<template>
	<!-- 체험단 리뷰 -->
	<b class="mm_tag T=bg T=dark"><i class="ico_experience"></i>체험단</b>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function';
	@use '../../../assets/scss/common/helper/mixin';

	.m_prodetail-tab-review {
		#{function.escape('.m...review-item')} {
			> .text_user {
				.mm_tag {
					margin: -2px 16px 0 0;
					height: 22px;
					@include mixin.font('1.3rem/2.2rem');

					.ico_experience {
						margin: 2px 4px 0 0;

						&::before {
							width: 13px;
							height: 15px;
							@include mixin.svg(#fff url('../../../../public/images/common/ico_experience.svg'));
						}
					}
				}
			}
		}
	}
</style>