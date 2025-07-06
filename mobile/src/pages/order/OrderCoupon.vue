<script setup lang="ts">
	import { computed, ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const orderPaymentListAPI = ref<OrderPaymentListAPI>();

	Api.getAll([
		{ key: `ORDER_BASIC_DATA`, ref: orderPaymentListAPI }
	]);

	/** 쿠폰이 있는 상품의 pack(배송정책)만 재분류 */
	const shippingRules = computed(() => {

		return orderPaymentListAPI.value?.packs.filter(__pack => {

			return __pack.items.filter(__item => __item.usable_coupon_regists.length > 0).length > 0;

		});

	});
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>쿠폰 적용</b></h1>
		</template>

		<template #content>
			<div class="m_popup-order-coupon">
				<div class="mm_order-item">
					<div class="mm_product-list T=sm">
						<ul
							v-for="rule in shippingRules"
							:key="rule.shipping_rule_id"
						>
							<li
								v-for="item in rule.items"
								:key="item.goods_id"
							>
								<div class="mm_product-item">
									<a>
										<figure>
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="item.goods_thumbnail_url"
											></LazyloadMUI>
											<figcaption>
												<p class="text_brand">{{ item.brand_name }}</p>
												<p class="text_product">{{ item.goods_name }}</p>
												<p class="text_price"><strong>{{ item.goods_sell_price }}</strong></p>
												<p class="text_option">{{ item.option_name }} / 1개</p>
											</figcaption>
										</figure>
									</a>
									<div class="mm_product-item-footer">
										<div class="mm_form-select T=sm">
											<label>
												<select data-select>
													<option selected>쿠폰을 선택하세요</option>
													<option
														v-for="coupon in item.usable_coupon_regists"
														:key="coupon.regist_id"
													>
														{{ coupon.coupon.title }}
													</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_foot">
						<div class="mm_inner">
							<div class="mm_btn_box">
								<button
									type="button"
									class="mm_btn T=primary"
								>
									<b>적용하기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>