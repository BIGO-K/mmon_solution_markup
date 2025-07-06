<script setup lang="ts">
	import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});

	// XXX 에러 종류 구분 필요함
	// defineProps<{
	// 	error: string,
	// }>();
	const error = ref('error');

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
	<!-- 화면 -->
	<div
		class="mm_view"
		:class="layouts"
	>
		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<div class="mm_page-inner">
				<!-- 본문 -->
				<div class="mm_page-content">
					<div
						class="m_error"
						:class="{'T=renewal': error === 'renewal'}"
					>
						<component :is="errorComponent[`error${error}` as keyof ErrorCompoenent] ?? errorComponent[`error`]"></component>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>