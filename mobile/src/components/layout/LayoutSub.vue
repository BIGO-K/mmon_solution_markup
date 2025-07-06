<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import Header from '@/components/header/Header.vue';
	import Content from '@/components/layout/Index.vue';
	import Toolbar from '@/components/toolbar/ToolbarA.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];
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

			<template #extend>
				<slot name="headerCategoryMain"></slot>
			</template>
		</header>

		<Content>
			<slot name="content"></slot>
		</Content>

		<Toolbar></Toolbar>
	</div>
</template>