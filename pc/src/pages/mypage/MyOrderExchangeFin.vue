<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const exchangeOrderDetailAPI = ref<ExchangeOrderDetailAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_EXCHANGE_DETAIL`, ref: exchangeOrderDetailAPI },
	]);
</script>

<template>
	<h3 class="mm_heading">
		<b>주문 교환</b>
	</h3>
	<div class="m_my-order-fin">
		<p>교환 신청이 완료되었습니다</p>
		<div class="mm_btn_box">
			<a
				class="mm_btn T=line T=dark"
				href="#"
			><b>메인으로 이동</b></a>
			<a
				class="mm_btn T=primary"
				href="#"
			><b>교환내역 확인</b></a>
		</div>
	</div>

	<!-- 주문 교환 내역 -->
	<div class="mm_order-item">
		<section class="mm_order-item-seller">
			<div class="mm_order...seller-head">
				<p class="text_ship">
					<i class="ico_ship"></i>
					<span
						v-if="exchangeOrderDetailAPI?.exchange_detail != null && exchangeOrderDetailAPI?.exchange_detail.pack.paid_shipping_price > 0"
						class="text_price"
					><strong>{{ exchangeOrderDetailAPI?.exchange_detail.pack.paid_shipping_price }}</strong></span>
					<span v-else>무료배송</span>
				</p>
			</div>
			<ul>
				<li
					v-for="item in exchangeOrderDetailAPI?.exchange_detail.pack.order_items"
					:key="item.id"
				>
					<div class="mm_flex">
						<div class="mm_product-item T=single">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.goods.thumbnail_url"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">{{ item.goods.brand_name }}</p>
										<p class="text_product">{{ item.goods.name }}</p>
										<p class="text_option">{{ item.goods.option_name }}</p>
									</figcaption>
								</figure>
							</a>
						</div>
						<p class="text_seller">
							<i class="ico_shop"></i>{{ item.seller_name }}
						</p>
						<div class="mm...order-price">
							<p class="text_price">
								<strong>{{ item.paid_price }}</strong>
							</p>
						</div>
					</div>
					<p class="text_changed">
						<span>변경한 옵션</span><strong>{{ item.exchanged_option_name }}</strong>
					</p>
				</li>
			</ul>
		</section>
	</div>
</template>