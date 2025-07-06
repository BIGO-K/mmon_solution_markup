<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		templates: string[];
	}>();

	const exchangeOrderDetailAPI = ref<ExchangeOrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ExchangeOrderDetailAPI>(`ORDER_EXCHANGE_DETAIL`, exchangeOrderDetailAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<!-- 교환 주문번호 -->
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
				<b>교환 주문번호</b><b class="text_contraction">{{ order }}</b><i class="ico_dropdown"></i>
			</button>
			<div class="mm_dropdown-item">
				<div class="mm_dropdown-item-inner">
					<!-- 교환상품 -->
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
														<p class="text_price"><strong>{{ item.paid_price }}</strong></p>
														<p class="text_option">{{ item.goods.option_name }}</p>
													</figcaption>
												</figure>
											</a>
											<div
												class="mm_product-item-footer"
											>
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>{{ item.exchanged_option_name }}</span>
												</p>
												<p
													v-if="_isLogin"
													class="text_point"
												>
													사용 적립금<b><strong>{{ item.point_used }}</strong><sub>원</sub></b>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- 교환정보 -->
					<div class="mm_inner m_myorder-detail-claim">
						<h4 class="mm_strapline">
							<b>교환 사유 및 회수 방법</b>
						</h4>
						<div class="m...claim-collect">
							<h5 class="mm_strapline">
								<b>교환 사유</b>
							</h5>
							<div class="mm_form-select">
								<label>
									<span class="text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.reason.label }}</span>
									<i class="ico_form-select"></i>
								</label>
							</div>
							<h5 class="mm_strapline">
								<b>상세 사유</b>
							</h5>
							<div class="mm_form-textarea">
								<label>
									<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.reason.detail }}</span>
									<i class="bg_text"></i>
								</label>
							</div>
							<div class="mm_form_mix-address">
								<h5 class="mm_strapline">
									<b>교환 상품 받을 주소</b>
								</h5>
								<div class="mm_form_mix-linked">
									<div class="mm_form-text">
										<label>
											<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.zip_code }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</div>
								<div class="mm_form-textarea">
									<label>
										<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.base_address }}</span>
										<i class="bg_text"></i>
									</label>
								</div>
								<div class="mm_form-textarea">
									<label>
										<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.detail_address }}</span>
										<i class="bg_text"></i>
									</label>
								</div>
							</div>
							<section>
								<h5 class="mm_strapline">
									<b>교환 송장번호</b>
								</h5>
								<template v-if="exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice != null">
									<div class="mm_form-text">
										<label>
											<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice.delivery_compnay_name }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
									<div class="mm_form-text">
										<label>
											<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice.invoice_number }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
									<a
										class="mm_btn T=xs T=line btn_modify"
										href="#"
									>
										<b>수정하기</b>
									</a>
								</template>
								<div
									v-else
									class="mm_btn_box"
								>
									<a
										class="mm_btn T=sm T=line T=primary"
										href="#"
									>
										<b>입력하기</b>
									</a>
								</div>
							</section>
						</div>
						<template v-if="exchangeOrderDetailAPI?.exchange_detail.retrieve_address != null">
							<h4 class="mm_strapline">
								<b>교환 수거지 정보</b>
							</h4>
							<div class="mm_order-info">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>보내는 분</b>
											</th>
											<td>{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.name }}</td>
										</tr>
										<tr>
											<th scope="row">
												<b>휴대폰</b>
											</th>
											<td>{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.tel }}</td>
										</tr>
										<tr>
											<th scope="row">
												<b>주소</b>
											</th>
											<td>
												{{
													`${ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.zip_code }<br>${ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.base_address } ${ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.detail_address }`
												}}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</template>
						<section class="mm_costbox">
							<h4 class="mm_strapline">
								<b>추가 결제정보</b>
							</h4>
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>결제방법</b>
											</th>
											<td>{{ exchangeOrderDetailAPI?.exchange_detail.additional_payment_price.pay_type_label }}</td>
										</tr>
										<template v-if="exchangeOrderDetailAPI?.exchange_detail.additional_payment_price.calculate_details[0]">
											<tr
												v-for="refund, index in exchangeOrderDetailAPI?.exchange_detail.additional_payment_price.calculate_details"
												:key="index"
											>
												<th scope="row">
													<strong>{{ refund.label }}</strong>
												</th>
												<td>
													<p class="text_price">
														<strong>{{ refund.amount }}</strong>
													</p>
												</td>
											</tr>
										</template>
									</tbody>
									<tfoot>
										<tr>
											<th scope="row">
												<b>최종 결제금액</b>
											</th>
											<td>
												<p class="text_price mm_text-variable">
													<strong>{{ exchangeOrderDetailAPI?.exchange_detail.additional_payment_price.total_price }}</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div
								v-if="exchangeOrderDetailAPI?.exchange_detail.payment_info != null"
								class="mm_costbox-unit"
							>
								<p>결제수단: {{ exchangeOrderDetailAPI?.exchange_detail.payment_info.label }}</p>
								<p>카드사: {{ exchangeOrderDetailAPI?.exchange_detail.payment_info.card.label }}</p>
								<p>카드번호: {{ exchangeOrderDetailAPI?.exchange_detail.payment_info.card.masking_number }}</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<hr class="mm_line">
	</template>
</template>