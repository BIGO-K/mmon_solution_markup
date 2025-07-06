<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const recentPromotionAPI = ref<RecentPromotionAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<RecentPromotionAPI>(`MEMBER_RECENT_VIEW_PLANNINGS`, recentPromotionAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>최근 본 쇼핑정보</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyRecentProd' }">
							<b>최근 본 상품</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyRecentPromo' }"
							title="선택됨"
						>
							<b>최근 본 기획전</b>
						</router-link>
					</li>
				</ul>
			</div>

			<p
				v-if="(recentPromotionAPI?.recent_view_plannings.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>최근 본 기획전이 없습니다
			</p>

			<template v-else>
				<p class="m_myrecent-note">
					* 2주 후 자동 삭제
				</p>
				<div class="mm_list m_myrecent-promo">
					<ul>
						<li
							v-for="promotion in recentPromotionAPI?.recent_view_plannings"
							:key="promotion.id"
						>
							<router-link
								:to="{ name: 'Promotion', params: { id: '123' } }"
							>
								<b
									v-if="promotion.is_ended"
									class="text_status T=status-off"
								>
									종료
								</b>
								<b
									v-else
									class="text_status"
								>
									진행중
								</b>
								<p>{{ promotion.title }}</p>
							</router-link>
						</li>
					</ul>
				</div>
			</template>
		</template>
	</LayoutSub>
</template>