<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const tabIndex = ref(0);

	const tabList: {
		name: string;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			name: '주문',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MypageTabOrder.vue')),
		},
		{
			name: '취소',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MypageTabCancel.vue')),
		},
		{
			name: '반품',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MypageTabRetrun.vue')),
		},
		{
			name: '교환',
			component: defineAsyncComponent(() => import('@/pages/mypage/components/MypageTabExchange.vue')),
		},
	];

	function tabChange(index: number) {
		tabIndex.value = index;
	}
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>주문관리</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li
						v-for="(tab, index) in tabList"
						:key="tab.name"
					>
						<a
							href="#"
							:class="{ 'S=tab-on': tabIndex === index }"
							:title="tabIndex === index ? '선택됨' : ''"
							@click="() => {
								tabChange(index);

								$router.replace({
									name: '',
									params: { tab: tabIndex }
								})
							}"
						>
							<b>{{ tab.name }}</b>
						</a>
					</li>
				</ul>
			</div>

			<!-- 주문목록 정렬 -->
			<div class="m_myorder-sort">
				<div class="mm_form-select T=sm">
					<label>
						<select data-select>
							<option>최근 1개월</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div
					v-if="tabIndex === 0"
					class="mm_form-select T=sm"
				>
					<label>
						<select data-select>
							<option data-option="{ 'syncer': '.mm_syncer-order-review' }">주문상태 전체</option>
							<option>입금 대기</option>
							<option>결제 완료</option>
							<option>배송 준비 중</option>
							<option data-option="{ 'syncer': '.mm_syncer-order-review' }">배송 중</option>
							<option data-option="{ 'syncer': '.mm_syncer-order-review' }">배송 완료</option>
							<option>구매 확정</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
			</div>

			<!-- 유의사항  -->
			<div class="mm_syncer-order-review">
				<div class="mm_note">
					<ul>
						<li>리뷰는 구매확정 시점부터 바로 작성할 수 있습니다.</li>
						<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
						<li>미작성 리뷰는 마이페이지 &#62; 리뷰관리에서 작성하실 수 있습니다.</li>
					</ul>
				</div>
			</div>

			<keep-alive>
				<component :is="tabList[tabIndex].component"></component>
			</keep-alive>
		</template>
	</LayoutSub>
</template>