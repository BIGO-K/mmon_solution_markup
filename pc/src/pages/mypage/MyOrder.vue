<script setup lang="ts">
	import { defineAsyncComponent, computed } from 'vue';
	import { useRoute, onBeforeRouteUpdate } from 'vue-router';
	import { useMypageTab } from '@/composables/useMypage';

	const { orderTab, onTabRouteHandler } = useMypageTab();

	const tabItems: {
		id: keyof typeof orderTab;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			id: 'all',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyOrderAll.vue')),
		},
		{
			id: 'cancel',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyOrderCancel.vue')),
		},
		{
			id: 'return',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyOrderReturn.vue')),
		},
		{
			id: 'exchange',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MyOrderExchange.vue')),
		},
	];

	const route = useRoute();
	const _tabId = computed(() => route.params.tab);

	onBeforeRouteUpdate(onTabRouteHandler);
</script>

<template>
	<h5 class="mm_heading">
		<b>주문 관리</b>
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
					<b>{{ orderTab[tab.id] }}</b>
				</router-link>
			</li>
		</ul>
	</div>

	<!-- 주문 목록 정렬 -->
	<div
		v-if="$route.query.type != 'no'"
		class="m_my-order-menu"
	>
		<div class="mm_form-select">
			<label>
				<select data-select>
					<option>주문상태 전체</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div class="mm_tab_menu T=square">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul>
				<li>
					<a
						class="S=tab-on"
						href="#"
						title="선택됨"
					>
						<b>최근 1개월</b>
					</a>
				</li>
				<li><a href="#"><b>최근 3개월</b></a></li>
				<li><a href="#"><b>최근 6개월</b></a></li>
				<li><a href="#"><b>최근 1년</b></a></li>
			</ul>
		</div>
	</div>

	<keep-alive>
		<component :is="tabItems.find(__item => __item.id === _tabId)?.component"></component>
	</keep-alive>
</template>