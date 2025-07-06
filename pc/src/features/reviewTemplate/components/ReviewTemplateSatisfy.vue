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
	@use '../../../assets/scss/common/setting/const';

	// 리뷰 만족도
	.mm_satisfy {
		font-size: 0;

		dl {
			display: inline-block;
			position: relative;
			padding-left: 70px;
			height: 22px;
			font-size: 1.3rem;

			dt {
				position: absolute;
				top: 0;
				left: 0;
				width: 62px;
				height: 100%;
				border: 1px solid #101010;
				border-radius: 22px;
				background-color: #fff;
				@include mixin.font(const.$color_text_base '/2.1rem' center);
			}

			dd {
				line-height: 2.4rem;
			}

			+ dl {
				margin-left: 24px;
			}
		}
	}
</style>