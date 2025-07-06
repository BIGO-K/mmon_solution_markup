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
