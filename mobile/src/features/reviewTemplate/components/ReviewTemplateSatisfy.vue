<script setup lang="ts">
	defineProps<{
		templates: ProductReviewtemplate[];
	}>();
</script>

<template>
	<div class="mm_satisfy">
		<dl
			v-for="template in templates"
			:key="template.id"
		>
			<dt>{{ template.title }}</dt>
			<dd>{{ template.selected_label }}</dd>
		</dl>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';

	// 리뷰 만족도
	.mm_satisfy {
		dl {
			position: relative;
			padding-left: 75px;
			@include mixin.font(#3d3d3d '1.3rem/2rem');

			dt {
				position: absolute;
				top: 0;
				left: 0;
				width: 65px;
				height: 20px;
				border: 1px solid #d5d5d5;
				border-radius: 20px;
				background-color: #fafafa;
				@include mixin.font('1.2rem/1.8rem' center);
			}

			+ dl {
				margin-top: 4px;
			}
		}
	}

	/** 마이페이지 - 리뷰 관리 */
	.m_myreview-written {
		.mm_review {
			.mm_satisfy {
				margin-top: -1px;
				padding: 1px 0 12px 4px;
				border-bottom: 1px solid #e6e6e6;
				background-color: #fff;
			}

			.text_review[tabindex] {
				+ .text_date {
					+ .mm_satisfy {
						margin-top: -11px;
					}
				}
			}
		}
	}
</style>