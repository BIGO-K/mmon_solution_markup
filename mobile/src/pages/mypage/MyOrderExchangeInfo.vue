<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const orderExchangeListAPI = ref<OrderExchangeListAPI>();
	const orderExchangeRefundAPI = ref<OrderExchangeRefundAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<OrderExchangeListAPI>(`ORDER_EXCHANGE_EXCHANGEABLE`, orderExchangeListAPI);
	Api.get<OrderExchangeRefundAPI>(`ORDER_EXCHANGE_ADDITIONAL_PAYMENTS`, orderExchangeRefundAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>주문 교환</b></h1>
		</template>

		<template #content>
			<!-- (D) '.mm_process' 영역은 단계별 입력 페이지로 현재 순서에 해당하는 '.mm_process-item' 영역에 'S=process-on' 클래스가 추가됩니다. -->
			<div class="mm_process">
				<!-- 교환사유 -->
				<div class="mm_process-item S=process-on">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>교환 사유를 선택하세요</b>
						</h3>
						<div class="m_popup-myclaim-reason">
							<ul>
								<li>
									<label class="mm_form-radio">
										<input
											type="radio"
											name="dev_radio-reason"
											data-radio
											checked
										>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<i class="ico_my-change"><i class="ico_my-cancel"></i></i>
											<strong>상품을 받고 마음이 변했어요</strong>
											<span>구매자 반품비용 부담</span>
										</b>
									</label>
								</li>
								<li>
									<label class="mm_form-radio">
										<input
											type="radio"
											name="dev_radio-reason"
											data-radio="{ 'syncer': '.mm_syncer-reason' }"
										>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<i class="ico_my-defects"><i class="ico_my-cancel"></i></i>
											<strong>상품에 하자가 있어요</strong>
											<span>판매자 반품비용 부담</span>
										</b>
									</label>
								</li>
								<li>
									<label class="mm_form-radio">
										<input
											type="radio"
											name="dev_radio-reason"
											data-radio="{ 'syncer': '.mm_syncer-reason' }"
										>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<i class="ico_my-other"><i class="ico_my-question"></i></i>
											<strong>다른 상품이 배송됐어요</strong>
											<span>판매자 반품비용 부담</span>
										</b>
									</label>
								</li>
							</ul>
							<div class="mm_syncer-reason">
								<h6 class="mm_strapline">
									<b>상세사유</b><strong>(필수입력)</strong>
								</h6>
								<div class="mm_form-textarea">
									<button
										type="button"
										class="btn_text-clear"
									>
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<textarea
											class="textfield"
											data-text="{ '_byte': 2000 }"
										></textarea><i class="bg_text"></i>
										<span class="text_placeholder">상세 사유를 입력하세요</span>
									</label>
								</div>
							</div>
						</div>
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_flex T=auto">
									<a
										class="mm_btn T=line T=light btn_back"
										href="#"
									>
										<i class="ico_page-prev"></i><b>이전으로</b>
									</a>
									<button
										type="button"
										class="mm_btn T=primary"
									>
										<b>다음 단계로</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 옵션변경 -->
				<div class="mm_process-item">
					<h3 class="mm_heading m_popup-myclaim-title">
						<b>변경할 옵션을 선택하세요</b>
					</h3>
					<div class="mm_order-item">
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
								</p>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a href="prodDetail_info.html">
												<figure>
													<i
														class="mm_bg-cover image_product"
														data-lazyload="{ '_src': '../image/_sample/prod_x1_1.png' }"
													></i>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
														<p class="text_option">베이지 FREE / 10개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<div class="mm_product...footer-indent">
													<a
														class="mm_btn T=sm T=line T=primary"
														href="_popup_myOrderOptionChange.html"
													><b>옵션 변경</b></a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="mm_order-item-seller">
							<div class="mm_order...seller-head">
								<p class="text_ship">
									<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
								</p>
							</div>
							<div class="mm_product-list T=sm">
								<ul>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a href="prodDetail_info.html">
												<figure>
													<i
														class="mm_bg-cover image_product"
														data-lazyload="{ '_src': '../image/_sample/prod_x1_2.png' }"
													></i>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
														<p class="text_option">베이지 FREE / 10개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<div class="mm_product...footer-indent">
													<a
														class="mm_btn T=sm T=line T=primary"
														href="_popup_myOrderOptionChange.html"
													><b>옵션 변경</b></a>
												</div>
												<p class="text_changed">
													<strong class="mm_text-variable">변경된 옵션</strong>
													<span>베이지 FREE / 2개</span>
												</p>
											</div>
										</div>
									</li>
									<li>
										<p class="text_seller">
											<i class="ico_shop"></i>엠몬스타
										</p>
										<div class="mm_product-item">
											<a href="prodDetail_info.html">
												<figure>
													<i
														class="mm_bg-cover image_product"
														data-lazyload="{ '_src': '../image/_sample/prod_x1_5.png' }"
													></i>
													<figcaption>
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스</p>
														<p class="text_option">베이지 FREE / 10개</p>
													</figcaption>
												</figure>
											</a>
											<div class="mm_product-item-footer">
												<div class="mm_product...footer-indent">
													<a
														class="mm_btn T=sm T=line T=primary"
														href="_popup_myOrderOptionChange.html"
													><b>옵션 변경</b></a>
												</div>
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
								<div class="mm_flex T=auto">
									<button
										type="button"
										class="mm_btn T=line T=light btn_back"
									>
										<i class="ico_page-prev"></i><b>이전으로</b>
									</button>
									<button
										type="button"
										class="mm_btn T=primary"
									>
										<b>다음 단계로</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 교환방법 -->
				<div class="mm_process-item">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>교환 방법을 선택하세요</b>
						</h3>
						<div class="m_popup-myclaim-way">
							<ul>
								<li>
									<label class="mm_form-radio">
										<input
											type="radio"
											name="dev_radio-send"
											data-radio="{ 'syncer': '.mm_syncer-way-already' }"
											checked
										>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">상품을 이미 보냈어요</span>
										</b>
									</label>
									<div class="mm_syncer-way-already">
										<h6 class="mm_strapline">
											<b>발송한 택배사</b>
										</h6>
										<div class="mm_form-select">
											<label>
												<select data-select>
													<option>택배사를 선택하세요</option>
												</select>
												<b class="text_selected"></b>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<h6 class="mm_strapline">
											<b>송장번호</b>
										</h6>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="number"
													class="textfield"
													data-text
												>
												<i class="bg_text"></i>
												<span class="text_placeholder">송장번호를 입력하세요</span>
											</label>
										</div>
									</div>
								</li>
								<li>
									<label class="mm_form-radio">
										<input
											type="radio"
											name="dev_radio-send"
											data-radio="{ 'syncer': '.mm_syncer-way-yet' }"
										>
										<b class="mm_block">
											<i class="ico_form-radio"></i>
											<span class="text_label">상품을 아직 보내지 않았어요</span>
										</b>
									</label>
									<div class="mm_syncer-way-yet">
										<div class="mm_order-info">
											<table>
												<caption>교환 수거지 정보</caption>
												<tbody>
													<tr>
														<th scope="row">
															<b>보내는 분</b>
														</th>
														<td>{{ orderExchangeListAPI?.exchangeable_order.shipping_address.name }}</td>
													</tr>
													<tr>
														<th scope="row">
															<b>휴대폰 번호</b>
														</th>
														<td>{{ orderExchangeListAPI?.exchangeable_order.shipping_address.tel }}</td>
													</tr>
													<tr>
														<th scope="row">
															<b>주소</b>
														</th>
														<td>
															{{
																`${ orderExchangeListAPI?.exchangeable_order.shipping_address.zip_code }<br>${ orderExchangeListAPI?.exchangeable_order.shipping_address.base_address } ${ orderExchangeListAPI?.exchangeable_order.shipping_address.detail_address }`
															}}
														</td>
													</tr>
												</tbody>
											</table>
											<a
												class="mm_btn T=xs T=line btn_address-change"
												href="#"
											>
												<b>주소변경</b>
											</a>
										</div>
									</div>
								</li>
							</ul>
							<div class="mm_syncer-way-yet">
								<div class="mm_note T=bg">
									<!-- (D) 굿스플로 사용하는 브랜드 관리자 상품일 경우 노출합니다. -->
									<!-- <ul>
										<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
										<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
										<li>상품은 착불로 발송바랍니다.</li>
										<li>본 상품은 택배사에 <strong>자동으로 교환/수거 접수</strong>됩니다.</li>
									</ul> -->
									<!-- (D) 굿스플로 사용하지 않는 브랜드 관리자 상품일 경우 노출합니다 -->
									<ul>
										<li>배송비 관련 금액이 발생될 경우 추가 결제가 진행됩니다.</li>
										<li>배송비 관련 금액을 동봉하지 말아주세요.</li>
										<li>상품은 착불로 발송바랍니다.</li>
										<li>본 상품은 <strong>판매처에서 교환/수거 접수</strong>됩니다.</li>
										<li><strong>3일 이내 회수되지 않을 경우</strong> 해당 택배사 또는 쇼핑몰 고객센터로 문의하세요.</li>
										<li>회수 시 발급된 송장번호는 <strong>교환 상세내역에서 등록</strong>하세요.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_flex T=auto">
									<button
										type="button"
										class="mm_btn T=line T=light btn_back"
									>
										<i class="ico_page-prev"></i><b>이전으로</b>
									</button>
									<button
										type="button"
										class="mm_btn T=primary"
									>
										<b>다음 단계로</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 교환받을주소 -->
				<div class="mm_process-item">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>교환 상품 받으실 주소를 설정하세요</b>
						</h3>
						<div class="mm_order-info">
							<table>
								<caption>교환 상품 받을 정보</caption>
								<tbody>
									<tr>
										<th scope="row">
											<b>받는 사람</b>
										</th>
										<td>{{ orderExchangeListAPI?.exchangeable_order.shipping_address.name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>{{ orderExchangeListAPI?.exchangeable_order.shipping_address.tel }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>
											{{
												`${ orderExchangeListAPI?.exchangeable_order.shipping_address.zip_code }<br>${ orderExchangeListAPI?.exchangeable_order.shipping_address.base_address } ${ orderExchangeListAPI?.exchangeable_order.shipping_address.detail_address }`
											}}
										</td>
									</tr>
								</tbody>
							</table>
							<a
								class="mm_btn T=xs T=line btn_address-change"
								href="#"
							>
								<b>주소변경</b>
							</a>
						</div>
						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_flex T=auto">
									<button
										type="button"
										class="mm_btn T=line T=light btn_back"
									>
										<i class="ico_page-prev"></i><b>이전으로</b>
									</button>
									<button
										type="button"
										class="mm_btn T=primary"
									>
										<b>다음 단계로</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 추가금액결제 -->
				<div class="mm_process-item">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>추가 금액을 결제하세요</b>
						</h3>
						<div class="mm_cost">
							<table>
								<tbody>
									<template v-if="orderExchangeRefundAPI?.additional_payments.calculate_details[0]">
										<tr
											v-for="refund, index in orderExchangeRefundAPI?.additional_payments.calculate_details"
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
											<b>추가 결제금액</b>
										</th>
										<td>
											<p class="text_price mm_text-variable">
												<strong>{{ orderExchangeRefundAPI?.additional_payments.total_price }}</strong>
											</p>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>

						<template v-if="orderExchangeRefundAPI?.additional_payments && orderExchangeRefundAPI?.additional_payments.total_price > 0">
							<h6 class="mm_strapline">
								<b>결제방법 선택</b>
							</h6>
							<div class="m_popup-myclaim-way">
								<ul>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-payment"
												data-radio="{ 'syncer': '.mm_syncer-payment-now' }"
												checked
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">즉시 결제</span>
											</b>
										</label>
										<div class="mm_syncer-payment-now">
											<div class="mm_form-select">
												<label>
													<select data-select>
														<option>카드를 선택하세요</option>
													</select>
													<b class="text_selected"></b>
													<i class="ico_form-select"></i>
												</label>
											</div>
										</div>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-payment"
												data-radio
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">판매자와 협의 후 결제</span>
											</b>
										</label>
									</li>
								</ul>
							</div>
						</template>

						<div class="mm_foot">
							<div class="mm_btn_box">
								<div class="mm_flex T=auto">
									<button
										type="button"
										class="mm_btn T=line T=light btn_back"
									>
										<i class="ico_page-prev"></i><b>이전으로</b>
									</button>
									<button
										v-if="orderExchangeRefundAPI?.additional_payments && orderExchangeRefundAPI?.additional_payments.total_price > 0"
										type="button"
										class="mm_btn T=primary"
									>
										<b>결제하기</b>
									</button>
									<button
										v-else
										type="button"
										class="mm_btn T=primary"
									>
										<b>교환 신청하기</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>