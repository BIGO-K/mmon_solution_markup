<script setup lang="ts">
	defineProps<{
		noneClass?: string
	}>();
</script>

<template>
	<p
		class="mm_text-none"
		:class="noneClass"
	>
		<i class="ico_text-none"></i>
		<slot></slot>
	</p>
</template>