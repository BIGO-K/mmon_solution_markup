<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const exchangeOrderDetailAPI = ref<ExchangeOrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ExchangeOrderDetailAPI>(`ORDER_EXCHANGE_DETAIL`, exchangeOrderDetailAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>교환 신청 완료</b></h1>
		</template>

		<template #content>
			<h3 class="mm_heading m_popup-myclaim-title">
				<b>교환 신청이 완료되었습니다</b>
			</h3>
			<!-- 교환 상품 목록 -->
			<div class="mm_order-item">
				<div class="mm_order-item-seller">
					<div class="mm_order...seller-head">
						<p class="text_ship">
							<i class="ico_ship"></i>
							<span
								v-if="exchangeOrderDetailAPI?.exchange_detail != null && exchangeOrderDetailAPI?.exchange_detail.pack.paid_shipping_price > 0"
								class="text_price"
							>
								<strong>{{ exchangeOrderDetailAPI?.exchange_detail.pack.paid_shipping_price }}</strong>
							</span>
							<span v-else>무료배송</span>
						</p>
					</div>
					<div class="mm_product-list T=sm">
						<ul>
							<li
								v-for="item in exchangeOrderDetailAPI?.exchange_detail.pack.order_items"
								:key="item.id"
							>
								<p class="text_seller">
									<i class="ico_shop"></i>{{ item.seller_name }}
								</p>
								<div class="mm_product-item">
									<a href="#">
										<figure>
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="item.goods.thumbnail_url"
											></LazyloadMUI>
											<figcaption>
												<p class="text_brand">{{ item.goods.brand_name }}</p>
												<p class="text_product">{{ item.goods.name }}</p>
												<p class="text_option">{{ item.goods.option_name }}</p>
											</figcaption>
										</figure>
									</a>
									<div class="mm_product-item-footer">
										<p class="text_changed">
											<strong class="mm_text-variable">변경된 옵션</strong>
											<span>{{ item.exchanged_option_name }}</span>
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="mm_inner">
				<div class="mm_foot">
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<a
								class="mm_btn T=line T=dark"
								href="#"
							>
								<b>메인으로 이동</b>
							</a>
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>교환내역 확인</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>