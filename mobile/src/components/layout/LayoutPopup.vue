<script setup lang="ts">
	import { onMounted, onUnmounted } from 'vue';
	import { useRoute } from 'vue-router';
	import Header from '@/components/header/Header.vue';
	import Content from '@/components/layout/Index.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});
</script>

<template>
	<!-- 화면 -->
	<div
		class="mm_view"
		:class="layouts"
	>
		<Header>
			<template #title>
				<slot name="title"></slot>
			</template>
		</header>

		<Content>
			<slot name="content"></slot>

			<template #extend>
				<slot name="contentExtend"></slot>
			</template>
		</Content>
	</div>

	<!-- TODO 필터 구조 최종 확정 필요함 -->
	<slot name="filter"></slot>
</template>