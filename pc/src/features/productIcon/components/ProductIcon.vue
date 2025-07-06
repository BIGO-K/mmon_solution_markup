<script setup lang="ts">
	import { inject } from 'vue';

	const icon = inject<ProductItemIcon>('productIcon');
	// TODO: 삭제 필요 - Object.keys(icon).length > 0
</script>

<template>
	<!-- 상품아이콘 -->
	<p
		v-if="icon?.label != null"
		class="text_tag"
		:style="{
			backgroundColor: icon.background_color_code,
			color: icon.font_color_code
		}"
	>
		{{ icon.label }}
	</p>
</template>