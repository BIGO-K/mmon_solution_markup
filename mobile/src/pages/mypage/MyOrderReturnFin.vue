<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const returnOrderDetailAPI = ref<ReturnOrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ReturnOrderDetailAPI>(`ORDER_RETURN_DETAIL`, returnOrderDetailAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>반품 신청 완료</b></h1>
		</template>

		<template #content>
			<h3 class="mm_heading m_popup-myclaim-title">
				<b>반품 신청이 완료되었습니다</b>
			</h3>
			<!-- 반품 상품 목록 -->
			<div class="mm_order-item">
				<div class="mm_order-item-seller">
					<div class="mm_order...seller-head">
						<p class="text_ship">
							<i class="ico_ship"></i>
							<span
								v-if="returnOrderDetailAPI?.return_detail != null && returnOrderDetailAPI?.return_detail.pack.paid_shipping_price > 0"
								class="text_price"
							>
								<strong>{{ returnOrderDetailAPI?.return_detail.pack.paid_shipping_price }}</strong>
							</span>
							<span v-else>무료배송</span>
						</p>
					</div>
					<div class="mm_product-list T=sm">
						<ul>
							<li
								v-for="item in returnOrderDetailAPI?.return_detail.pack.order_items"
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
												<p class="text_price"><strong>{{ item.paid_price }}</strong></p>
												<p class="text_option">{{ item.goods.option_name }}</p>
											</figcaption>
										</figure>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="mm_inner">
				<div class="mm_note">
					<ul>
						<li>위의 목록은 반품 신청하신 상품에 대한 금액만 표시됩니다.</li>
						<li>반품 사유 및 적립금 사용에 따라 실제 환불 금액은 다를 수 있습니다.</li>
					</ul>
				</div>
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
								<b>반품내역 확인</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>