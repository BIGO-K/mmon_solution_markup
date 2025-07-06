<script setup lang="ts">
	import { inject } from 'vue';

	const headline = inject<ProductItemHeadline>('headline');
</script>

<template>
	<span
		v-if="headline != null"
		class="text_foreword"
	>
		{{ headline }}
	</span>
</template>

<style lang="scss">
	/** 상품 아이템 */
	.mm_product-item {
		.text_product {
			.text_foreword {
				margin-right: 3px;
			}
		}
	}

	/** 상품상세 */
	.m_prodetail-head-product {
		.text_product {
			.text_foreword {
				margin-right: 3px;
			}
		}
	}
</style>
