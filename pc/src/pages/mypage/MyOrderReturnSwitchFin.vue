<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const returnOrderDetailAPI = ref<ReturnOrderDetailAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_RETURN_DETAIL`, ref: returnOrderDetailAPI },
	]);
</script>

<template>
	<h3 class="mm_heading">
		<b>반품 전환</b>
	</h3>
	<div class="m_my-order-fin">
		<p>반품 전환이 완료되었습니다</p>
		<div class="mm_btn_box">
			<a
				class="mm_btn T=line T=dark"
				href="#"
			><b>메인으로 이동</b></a>
			<a
				class="mm_btn T=primary"
				href="#"
			><b>반품내역 확인</b></a>
		</div>
	</div>

	<!-- 반품 전환 내역 -->
	<section class="mm_order-item-seller">
		<div class="mm_order...seller-head">
			<p class="text_ship">
				<i class="ico_ship"></i>
				<span
					v-if="returnOrderDetailAPI?.return_detail != null && returnOrderDetailAPI?.return_detail.pack.paid_shipping_price > 0"
					class="text_price"
				><strong>{{ returnOrderDetailAPI?.return_detail.pack.paid_shipping_price }}</strong></span>
				<span v-else>무료배송</span>
			</p>
		</div>
		<ul>
			<li
				v-for="item in returnOrderDetailAPI?.return_detail.pack.order_items"
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
			</li>
		</ul>
	</section>

	<!-- 유의사항 -->
	<div class="mm_note">
		<ul>
			<li>위의 목록은 반품 신청하신 상품에 대한 금액만 표시됩니다.</li>
			<li>반품 사유 및 적립금 사용에 따라 실제 환불 금액은 다를 수 있습니다.</li>
		</ul>
	</div>
</template>