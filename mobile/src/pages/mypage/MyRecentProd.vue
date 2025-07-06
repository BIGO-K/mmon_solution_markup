<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const latelyViewProductAPI = ref<LatelyViewProductAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<LatelyViewProductAPI>(`MEMBER_RECENT_VIEW_GOODS`, latelyViewProductAPI);
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
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyRecentProd' }"
							title="선택됨"
						>
							<b>최근 본 상품</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyRecentPromo' }">
							<b>최근 본 기획전</b>
						</router-link>
					</li>
				</ul>
			</div>

			<p
				v-if="(latelyViewProductAPI?.recent_view_goods.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>최근 본 상품이 없습니다
			</p>

			<template v-else>
				<p class="m_myrecent-note">
					* 2주 후 자동 삭제
				</p>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="item in latelyViewProductAPI?.recent_view_goods"
							:key="item.id"
						>
							<div class="mm_product-item T=single T=sm">
								<a href="#">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.thumbnail_url"
										></LazyloadMUI>
										<figcaption>
											<p class="text_brand">{{ item.brand_name }}</p>
											<p class="text_product">{{ item.name }}</p>
											<p class="text_price"><strong>{{ item.base_discounted_price }}</strong></p>
										</figcaption>
									</figure>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</template>
		</template>
	</LayoutSub>
</template>