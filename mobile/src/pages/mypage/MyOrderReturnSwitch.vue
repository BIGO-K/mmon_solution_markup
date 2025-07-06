<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const returnSwitchListAPI = ref<ReturnSwitchListAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ReturnSwitchListAPI>(`ORDER_EXCHANGE_SWITCH_RETURNABLE`, returnSwitchListAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>반품 전환</b></h1>
		</template>

		<template #content>
			<!-- 주문목록 -->
			<article class="mm_order-item">
				<h5>
					<b>{{ returnSwitchListAPI?.switch_returnable_order.ordered_at }}</b>
					<strong>주문번호: {{ returnSwitchListAPI?.switch_returnable_order.order_id }}</strong>
				</h5>
				<div
					v-for="pack in returnSwitchListAPI?.switch_returnable_order.packs"
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
								<label class="mm_form-check">
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
											<figcaption>
												<p class="text_status">{{ item.order_status_label }}</p>
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
			</article>

			<!-- 반품신청 -->
			<div class="mm_inner">
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>다음 단계로</b>
						</button>
					</div>
				</div>
				<div class="mm_note">
					<div
						class="mm_dropdown S=on"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="접어놓기"
						>
							<i class="ico_info"></i><b>반품 주의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>반품 전환의 경우 수량 부분 선택이 불가능합니다.</li>
									<li>반품 전환하신 상품은 바로 반품 완료 처리가 진행됩니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>