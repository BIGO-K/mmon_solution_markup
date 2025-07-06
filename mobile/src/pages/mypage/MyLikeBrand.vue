<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const likeBrandAPI = ref<LikeBrandAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<LikeBrandAPI>(`MEMBER_WISH_ALL_BRANDS`, likeBrandAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>MY찜</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyLikeProd' }">
							<b>찜한 아이템</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyLikeBrand' }"
							title="선택됨"
						>
							<b>찜한 브랜드</b>
						</router-link>
					</li>
				</ul>
			</div>

			<p
				v-if="(likeBrandAPI?.wish_brands.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>찜한 브랜드가 없습니다
			</p>

			<!-- 찜한브랜드 -->
			<div
				v-else
				class="m_mylike-brand"
			>
				<ul>
					<li
						v-for="brand in likeBrandAPI?.wish_brands"
						:key="brand.id"
					>
						<a href="#">
							<figure>
								<LazyloadMUI
									class="mm_bg-contain image_brand"
									:_src="brand.logo_image_url"
									:_is-error-image="false"
									:_is-ratio="true"
									:title="brand.name"
								></LazyloadMUI>
								<figcaption>{{ brand.name }}</figcaption>
							</figure>
						</a>
						<button
							type="button"
							class="btn_remove"
						>
							<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
						</button>
					</li>
				</ul>
			</div>
		</template>
	</LayoutSub>
</template>