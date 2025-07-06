<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const cancelOrderDetailAPI = ref<CancelOrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<CancelOrderDetailAPI>(`ORDER_CANCEL_DETAIL`, cancelOrderDetailAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>취소 완료</b></h1>
		</template>

		<template #content>
			<h3 class="mm_heading m_popup-myclaim-title">
				<b>주문 취소가 완료되었습니다</b>
			</h3>
			<!-- 취소 상품 목록 -->
			<div class="mm_order-item">
				<label class="mm_form-check">
					<input
						type="checkbox"
						data-check="{ '_type': 'check_all', '_group': 'dev_check-product' }"
					>
					<b class="mm_block">
						<i class="ico_form-check"></i>
						<span class="text_label">전체선택</span>
					</b>
				</label>
				<div
					v-for="pack in cancelOrderDetailAPI?.cancel_detail.packs"
					:key="pack.shipping_rule_id"
					class="mm_order-item-seller"
				>
					<div class="mm_order...seller-head">
						<p class="text_ship">
							<i class="ico_ship"></i>
							<span
								v-if="pack.paid_shipping_price > 0"
								class="text_price"
							>
								<strong>{{ pack.paid_shipping_price }}</strong>
							</span>
							<span v-else>무료배송</span>
						</p>
					</div>
					<div class="mm_product-list T=sm">
						<ul>
							<li
								v-for="item in pack.order_items"
								:key="item.id"
							>
								<label
									v-if="item.goods.is_soldout"
									class="mm_form-check"
								>
									<input
										type="checkbox"
										data-check="{ '_group': 'dev_check-product' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label mm_ir-blind">상품 선택</span>
									</b>
								</label>
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
											<p
												v-if="item.goods.is_soldout"
												class="text_soldout"
											>
												품절
											</p>
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
						<li>판매자의 <strong>승인 전까지 주문은 실제로 취소되지 않으며,</strong> 사정에 따라 <strong>취소 거부</strong>가 될 수 있습니다.</li>
						<li>노출되는 가격 및 옵션은 현재와 다를 수 있습니다.</li>
						<li>품절 등 장바구니에 담을 수 없는 상품은 체크하실 수 없습니다.</li>
						<li>취소 수량과 별개로 장바구니에는 1개의 수량만 담깁니다.</li>
					</ul>
				</div>
			</div>
			<div class="m_popup-myclaim-foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=equal">
						<a
							class="mm_btn T=line T=dark"
							href="#"
						>
							<b>취소내역 확인</b>
						</a>
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>장바구니 담기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>