<script setup lang="ts">
	import { defineAsyncComponent, computed } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import { useMypageTab } from '@/composables/useMypage';

	const { soldoutTab, onTabRouteHandler } = useMypageTab();

	const tabItems: {
		id: keyof typeof soldoutTab;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			id: 'report',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MySoldoutReport.vue')),
		},
		{
			id: 'result',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MySoldoutResult.vue')),
		}
	];

	const route = useRoute();
	const _tabId = computed(() => route.params.tab);

	onBeforeRouteUpdate(onTabRouteHandler);
</script>

<template>
	<div class="m_my-claim">
		<h5 class="mm_heading">
			<b>품절취소 신고</b>
		</h5>

		<!-- 탭메뉴 -->
		<div class="mm_tab_menu">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
			<ul class="mm_flex T=equal">
				<li
					v-for="tab in tabItems"
					:key="tab.id"
				>
					<router-link
						:class="{ 'S=tab-on': tab.id === _tabId }"
						:title="tab.id === _tabId ? '선택됨' : ''"
						:to="{ params: { tab: tab.id }}"
						replace
					>
						<b>{{ soldoutTab[tab.id] }}</b>
					</router-link>
				</li>
			</ul>
		</div>

		<keep-alive>
			<component :is="tabItems.find(__item => __item.id === _tabId)?.component"></component>
		</keep-alive>
	</div>
</template>