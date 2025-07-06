<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		templates: string[];
	}>();

	const cancelOrderDetailAPI = ref<CancelOrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<CancelOrderDetailAPI>(`ORDER_CANCEL_DETAIL`, cancelOrderDetailAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<!-- 취소 주문번호 -->
	<template
		v-for="order in templates"
		:key="order"
	>
		<div
			class="mm_dropdown T=order S=on"
			data-dropdown
		>
			<button
				type="button"
				class="btn_dropdown"
				title="접어놓기"
			>
				<b>취소 주문번호</b><b class="text_contraction">{{ order }}</b><i class="ico_dropdown"></i>
			</button>
			<div class="mm_dropdown-item">
				<div class="mm_dropdown-item-inner">
					<!-- 취소상품 -->
					<div class="mm_order-item">
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
											<div
												v-if="_isLogin"
												class="mm_product-item-footer"
											>
												<p class="text_point">
													사용 적립금<b><strong>{{ item.point_used }}</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- 취소정보 -->
					<div class="mm_inner m_myorder-detail-claim">
						<h4 class="mm_strapline">
							<b>취소 사유</b>
						</h4>
						<div class="mm_form-select">
							<label>
								<span class="text_readonly">{{ cancelOrderDetailAPI?.cancel_detail.reason.label }}</span>
								<i class="ico_form-select"></i>
							</label>
						</div>
						<div
							v-if="cancelOrderDetailAPI?.cancel_detail.reason.detail"
							class="mm_form-textarea"
						>
							<label>
								<span class="textfield text_readonly">{{ cancelOrderDetailAPI?.cancel_detail.reason.detail }}</span>
								<i class="bg_text"></i>
							</label>
						</div>
						<template v-if="cancelOrderDetailAPI?.cancel_detail.refund_account">
							<h4 class="mm_strapline">
								<b>환불 계좌정보</b>
							</h4>
							<div class="mm_order-info">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>예금주</b>
											</th>
											<td>{{ cancelOrderDetailAPI?.cancel_detail.refund_account.owner_name }}</td>
										</tr>
										<tr>
											<th scope="row">
												<b>환불 은행</b>
											</th>
											<td>{{ cancelOrderDetailAPI?.cancel_detail.refund_account.bank_name }}</td>
										</tr>
										<tr>
											<th scope="row">
												<b>환불 계좌</b>
											</th>
											<td>{{ cancelOrderDetailAPI?.cancel_detail.refund_account.account_number }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</template>
						<template v-if="!cancelOrderDetailAPI?.cancel_detail.is_cancel_before_paid">
							<h4 class="mm_strapline">
								<b>환불 정보</b>
							</h4>
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>신용카드 환불</b>
											</th>
											<td>
												<p class="text_price">
													<strong>{{ cancelOrderDetailAPI?.cancel_detail.refund_info.total_paid_price }}</strong>
												</p>
											</td>
										</tr>
										<template v-if="cancelOrderDetailAPI?.cancel_detail.refund_info.calculate_details[0]">
											<tr
												v-for="refund, index in cancelOrderDetailAPI?.cancel_detail.refund_info.calculate_details"
												:key="index"
											>
												<th scope="row">
													<strong>{{ refund.label }}</strong>
												</th>
												<td>
													<p class="text_price">
														<template v-if="refund.is_substracted">
															-
														</template>
														<strong>{{ refund.amount }}</strong>
													</p>
												</td>
											</tr>
										</template>
										<tr>
											<th scope="row">
												<b>적립금 환불</b>
											</th>
											<td>
												<p class="text_point">
													<strong>{{ cancelOrderDetailAPI?.cancel_detail.refund_info.refund_point }}</strong><sub>원</sub>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>환불 예상금액</b>
											</th>
											<td>
												<p class="text_price mm_text-variable">
													<strong>{{ cancelOrderDetailAPI?.cancel_detail.refund_info.refund_price }}</strong>
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
		<hr class="mm_line">
	</template>
</template>