<script setup lang="ts">
	import { defineAsyncComponent, computed } from 'vue';
	import { onBeforeRouteUpdate, useRoute } from 'vue-router';
	import { useMypageTab } from '@/composables/useMypage';

	const { interestTab, onTabRouteHandler } = useMypageTab();

	const tabItems: {
		id: keyof typeof interestTab;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			id: 'product',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyLikeProduct.vue')),
		},
		{
			id: 'brand',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyLikeBrand.vue')),
		}
	];

	const route = useRoute();
	const _tabId = computed(() => route.params.tab);

	onBeforeRouteUpdate(onTabRouteHandler);
</script>

<template>
	<div class="m_my-like">
		<h5 class="mm_heading">
			<b>My 찜</b>
		</h5>

		<!-- 탭메뉴 -->
		<div class="mm_tab_menu">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
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
						<b>{{ interestTab[tab.id] }}</b>
					</router-link>
				</li>
			</ul>
		</div>

		<keep-alive>
			<component :is="tabItems.find(__item => __item.id === _tabId)?.component"></component>
		</keep-alive>
	</div>
</template>