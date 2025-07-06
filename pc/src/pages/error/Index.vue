<script setup lang="ts">
	import { onMounted, onUnmounted, defineAsyncComponent } from 'vue';

	onMounted(() => {

		document.documentElement.classList.add('L=error');

	});

	onUnmounted(() => {

		document.documentElement.classList.remove('L=error');

	});

	defineProps<{
		error: string,
	}>();

	type ErrorKey = `error` | `error403` | `error404` | `error500` | `errorservice` | `errortraffic` | `errorrenewal`;
	type ErrorCompoenent = Record<ErrorKey, ReturnType<typeof defineAsyncComponent>>;

	const errorComponent: ErrorCompoenent = {
		error: defineAsyncComponent(() => import('@/pages/error/ErrorBase.vue')),
		error403: defineAsyncComponent(() => import('@/pages/error/ErrorUnAuthorized.vue')),
		error404: defineAsyncComponent(() => import('@/pages/error/ErrorNotFound.vue')),
		error500: defineAsyncComponent(() => import('@/pages/error/ErrorServer.vue')),
		errorservice: defineAsyncComponent(() => import('@/pages/error/ErrorService.vue')),
		errortraffic: defineAsyncComponent(() => import('@/pages/error/ErrorTraffic.vue')),
		errorrenewal: defineAsyncComponent(() => import('@/pages/error/ErrorRenewal.vue')),
	};
</script>

<template>
	<div class="m_error">
		<component :is="errorComponent[`error${error}` as keyof ErrorCompoenent] ?? errorComponent[`error`]"></component>
	</div>
</template>