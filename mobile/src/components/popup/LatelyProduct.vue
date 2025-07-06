<script setup lang="ts">
	import { ref } from 'vue';
	import { useLatelyStore } from '@/store/lately';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const latelyProductAPI = ref<LatelyViewProductAPI>();
	(async () => latelyProductAPI.value = await useLatelyStore().product)();
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>최근 본 상품</b></h1>
		</template>

		<template #content>
			<div class="m_popup-lately">
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="item in latelyProductAPI?.recent_view_goods"
							:key="item.id"
						>
							<div class="mm_product-item">
								<router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.thumbnail_url"
										></LazyloadMUI>
										<p
											v-if="item.is_soldout"
											class="text_soldout"
										>
											품절
										</p>
										<figcaption>
											<p class="text_brand">
												{{ item.brand_name }}
											</p>
											<p class="text_product">
												{{ item.name }}
											</p>
											<p class="text_price">
												<strong>{{ item.base_discounted_price }}</strong>
											</p>
										</figcaption>
									</figure>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>