<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import OrderGift from '@/features/gift/components/GiftMyOrderDetail.vue';

	const orderDetailAPI = ref<OrderDetailAPI>();
	const cancelOrderDetailAPI = ref<CancelOrderDetailAPI>();
	const returnOrderDetailAPI = ref<ReturnOrderDetailAPI>();
	const exchangeOrderDetailAPI = ref<ExchangeOrderDetailAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_DETAIL`, ref: orderDetailAPI },
		{ key: `ORDER_CANCEL_DETAIL`, ref: cancelOrderDetailAPI },
		{ key: `ORDER_RETURN_DETAIL`, ref: returnOrderDetailAPI },
		{ key: `ORDER_EXCHANGE_DETAIL`, ref: exchangeOrderDetailAPI },
	]);

	/** 로그인 여부 */
	const _isLogin = ref(true);

	// TODO 유료기능 사용 검증 및 세팅
	const feature = {
		gift: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<h3 class="mm_heading">
		<b>주문 상세</b>
	</h3>
	<div class="m_my-order-detail">
		<h4 class="m...detail-title">
			<b>{{ orderDetailAPI?.order.ordered_at }}</b>
			<strong>주문번호: {{ orderDetailAPI?.order.order_id }}</strong>
		</h4>

		<!-- 주문자 정보 -->
		<section class="mm_order-info">
			<h5 class="mm_strapline T=line">
				<b>주문자 정보</b>
			</h5>
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>주문자 이름</b>
						</th>
						<td>{{ orderDetailAPI?.order.orderer_info.name }}</td>
					</tr>
					<tr>
						<th scope="row">
							<b>휴대폰 번호</b>
						</th>
						<td>{{ orderDetailAPI?.order.orderer_info.tel }}</td>
					</tr>
					<tr>
						<th scope="row">
							<b>이메일</b>
						</th>
						<td>{{ orderDetailAPI?.order.orderer_info.email }}</td>
					</tr>
					<tr v-if="orderDetailAPI?.order.orderer_info.personal_clearance_code != null">
						<th scope="row">
							<b>개인통관고유부호</b>
						</th>
						<td>{{ orderDetailAPI?.order.orderer_info.personal_clearance_code }}</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- 배송 정보 -->
		<section class="mm_order-info">
			<h5 class="mm_strapline T=line">
				<b>배송 정보</b>
			</h5>
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>받는 사람</b>
						</th>
						<td>{{ orderDetailAPI?.order.shipping_address.name }}</td>
					</tr>
					<tr>
						<th scope="row">
							<b>휴대폰 번호</b>
						</th>
						<td>{{ orderDetailAPI?.order.shipping_address.tel }}</td>
					</tr>
					<tr>
						<th scope="row">
							<b>주소</b>
						</th>
						<td>
							<span class="text_postcode">{{ orderDetailAPI?.order.shipping_address.zip_code }}</span>
							<b>{{ orderDetailAPI?.order.shipping_address.base_address }} {{ orderDetailAPI?.order.shipping_address.detail_address }}</b>
							<!-- (D) '입금 대기, 결제 완료' 주문일 경우 '주소변경' 버튼을 노출합니다. -->
							<a
								class="mm_btn T=xs T=line T=dark btn_address-change"
								href="#"
							>
								<b>주소변경</b><i class="ico_link T=xs"></i>
							</a>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<b>배송메모</b>
						</th>
						<td>{{ orderDetailAPI?.order.shipping_address.message }}</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- 구매 상품 -->
		<div class="m...detail-product">
			<h5 class="mm_strapline T=line">
				<b>구매 상품</b>
			</h5>
			<section
				v-for="seller in orderDetailAPI?.order.packs[0].sellers"
				:key="seller.id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
				</div>
				<ul>
					<li
						v-for="item in seller.order_items"
						:key="item.id"
					>
						<div class="mm_flex">
							<p class="text_status">
								{{ item.order_status_label }}
								<template v-if="item.refund_status_label">
									<br>
									<b class="mm_tag T=bg">{{ item.refund_status_label }}</b>
								</template>
							</p>
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
							<div class="mm...order-price">
								<p class="text_price">
									<strong>{{ item.paid_price }}</strong>
								</p>
								<p
									v-if="_isLogin"
									class="text_point"
								>
									사용 적립금<b><strong>{{ item.point_used }}</strong><sub>원</sub></b>
								</p>
							</div>
							<div class="mm_btn_box">
								<div class="mm_block">
									<a
										v-if="item.cancelable"
										class="mm_btn T=sm T=line T=light"
										href="#"
									>
										<b>주문취소</b>
									</a>
									<button
										v-if="item.receipt_confirmable"
										type="button"
										class="mm_btn T=sm"
									>
										<b>수취확인</b>
									</button>
									<a
										v-if="item.purchase_confirmable"
										class="mm_btn T=sm T=line T=variable"
										href="#"
									>
										<b>구매확정</b>
									</a>
									<a
										v-if="item.exchangeable"
										class="mm_btn T=sm T=line T=light"
										href="#"
									>
										<b>교환신청</b>
									</a>
									<a
										v-if="item.returnable"
										class="mm_btn T=sm T=line T=light"
										href="#"
									>
										<b>반품신청</b>
									</a>
									<a
										v-if="item.delivery_trackable"
										class="btn_tracking"
										href="#"
									>
										<b>배송조회</b><i class="ico_link T=circle"></i>
									</a>
									<button
										v-if="item.return_cancelable"
										type="button"
										class="mm_btn T=sm T=line T=light"
									>
										<b>반품철회</b>
									</button>
									<button
										v-if="item.exchange_cancelable"
										type="button"
										class="mm_btn T=sm T=line T=light"
									>
										<b>교환철회</b>
									</button>
									<a
										v-if="item.to_return_switchable"
										class="mm_btn T=sm T=line T=light"
										href="#"
									>
										<b>반품전환</b>
									</a>
									<a
										v-if="item.return_delivery_trackable"
										class="btn_tracking"
										href="#"
									>
										<b>반송조회</b><i class="ico_link T=circle"></i>
									</a>
								</div>
							</div>
						</div>
						<p
							v-if="item.exchanged_option_name"
							class="text_changed"
						>
							<span>변경한 옵션</span><strong>{{ item.exchanged_option_name }}</strong>
						</p>
					</li>
				</ul>
				<div
					v-if="_isLogin"
					class="mm_btn_box"
				>
					<a
						v-if="$route.query.type != 'no'"
						class="btn_inquiry"
						href="#"
					>
						<b>판매자 문의하기</b><i class="ico_link T=sm"></i>
					</a>
					<a
						class="mm_btn T=sm T=primary btn_review-write"
						:href="seller.order_items[0].review_writable ? '#' : undefined"
					><i class="ico_review-write"></i><b>리뷰 쓰기</b></a>
				</div>
			</section>

			<!-- (D) 교환 확정 후 신규 생성된 주문일 경우 노출합니다. -->
			<div
				v-if="orderDetailAPI?.order.original_order_id"
				class="m...detail-product-origin"
			>
				<a
					class="btn_order-origin"
					href="#"
				><i class="ico_order-origin"></i><b>원 주문 상세보기</b></a>
			</div>
		</div>

		<OrderGift
			v-if="feature.gift._is"
			:templates="orderDetailAPI?.order.giveaways"
		></OrderGift>

		<!-- 결제 내역 -->
		<div class="m...detail-payment">
			<!-- 결제 정보 -->
			<section class="mm_order-info">
				<h5 class="mm_strapline T=line">
					<b>결제 정보</b>
				</h5>
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<b>결제수단</b>
							</th>
							<td>{{ orderDetailAPI?.order.payment_info.label }}</td>
						</tr>
						<template v-if="orderDetailAPI?.order.payment_info.card">
							<tr>
								<th scope="row">
									<b>카드사</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.card.label }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>카드번호</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.card?.masking_number }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>결제승인일</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.card?.approved_at }}</td>
							</tr>
						</template>
						<template v-if="orderDetailAPI?.order.payment_info.bank_account">
							<tr>
								<th scope="row">
									<b>은행명</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.bank_account.bank_name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>계좌번호</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.bank_account.account_number }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>입금기한</b>
								</th>
								<td>{{ orderDetailAPI?.order.payment_info.bank_account.input_expire_at }}</td>
							</tr>
						</template>
						<tr v-if="orderDetailAPI?.order.payment_info.mobile">
							<th scope="row">
								<b>결제 승인일시</b>
							</th>
							<td>{{ orderDetailAPI?.order.payment_info.mobile.approved_at }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>구매 적립</b>
							</th>
							<td><span class="mm_text-variable">+{{ orderDetailAPI?.order.payment_info.buy_point }}원</span></td>
						</tr>
					</tbody>
				</table>
				<a
					v-if="orderDetailAPI?.order.receipt_viewable"
					class="mm_btn T=sm T=line T=lighter btn_receipt"
					href="#"
				>
					<b>영수증 보기</b>
				</a>
				<div class="mm_note">
					<ul>
						<li>취소완료/반품완료 된 상품의 적립금은 차감되어 구매적립금이 표시 됩니다.</li>
					</ul>
				</div>
			</section>

			<!-- 최종 결제금액 -->
			<section>
				<h5 class="mm_strapline T=line">
					<b>최종 결제금액</b>
				</h5>
				<div class="mm_cost">
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>총 상품금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ orderDetailAPI?.order.payment_summary.total_goods_price }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>배송비</b>
								</th>
								<td>
									<p class="text_price">
										+ <strong>{{ orderDetailAPI?.order.payment_summary.total_shipping_price }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>회원할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>{{ orderDetailAPI?.order.payment_summary.discounts.member }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>심야할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>{{ orderDetailAPI?.order.payment_summary.discounts.night_sale }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>즉시할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>{{ orderDetailAPI?.order.payment_summary.discounts.immediately_sale }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>쿠폰할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>{{ orderDetailAPI?.order.payment_summary.used_coupon_amount }}</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>적립금 사용</b>
								</th>
								<td>
									<p class="text_point">
										- <strong>{{ orderDetailAPI?.order.payment_summary.used_points }}</strong><sub>원</sub>
									</p>
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th scope="row">
									<b>최종 결제금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ orderDetailAPI?.order.payment_summary.total_price }}</strong>
									</p>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
		</div>

		<!-- 주문 정보 내역 -->
		<div
			v-if="orderDetailAPI?.cancel_ids[0] || orderDetailAPI?.return_ids[0] || orderDetailAPI?.exchange_ids[0]"
			class="mm_tab"
			data-tab
		>
			<!-- 탭메뉴 -->
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
			<div class="mm_tab_menu">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item, index in orderDetailAPI.cancel_ids"
								:key="index"
								class="mm_slider-item"
							>
								<a
									class="btn_tab"
									href="#"
								>
									<b>취소 주문번호</b><strong>{{ item }}</strong>
								</a>
							</li>
							<li
								v-for="item, index in orderDetailAPI.return_ids"
								:key="index"
								class="mm_slider-item"
							>
								<a
									class="btn_tab"
									href="#"
								>
									<b>반품 주문번호</b><strong>{{ item }}</strong>
								</a>
							</li>
							<li
								v-for="item, index in orderDetailAPI.exchange_ids"
								:key="index"
								class="mm_slider-item"
							>
								<a
									class="btn_tab"
									href="#"
								>
									<b>교환 주문번호</b><strong>{{ item }}</strong>
								</a>
							</li>
							<!-- <li class="mm_slider-item">
									<a
										class="btn_tab S=tab-on"
										href="#"
										title="선택됨"
									>
										<b>취소 주문번호</b><strong>20051411421512345656</strong>
									</a>
								</li> -->
						</ul>
					</div>
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
				</div>
			</div>

			<!-- 취소 주문상세 -->
			<div class="mm_tab-item">
				<!-- 취소 상품 -->
				<div class="m...detail-product">
					<h5 class="mm_strapline T=line">
						<b>취소 상품</b>
					</h5>
					<section
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
								><strong>{{ pack.paid_shipping_price }}</strong></span>
								<span v-else>무료배송</span>
							</p>
						</div>
						<ul>
							<li
								v-for="item in pack.order_items"
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
					</section>
				</div>

				<!-- 취소 사유 -->
				<section class="mm_order-form">
					<h5 class="mm_strapline T=line">
						<b>취소 사유</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>취소 사유</b>
								</th>
								<td>
									<div class="mm_form-select T=short">
										<label>
											<span class="text_readonly">{{ cancelOrderDetailAPI?.cancel_detail.reason.label }}</span>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</td>
							</tr>
							<tr v-if="cancelOrderDetailAPI?.cancel_detail.reason.detail">
								<th scope="row">
									<b>상세 사유</b>
								</th>
								<td>
									<div class="mm_form-textarea">
										<label>
											<span class="textfield text_readonly">{{ cancelOrderDetailAPI?.cancel_detail.reason.detail }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 환불 계좌정보 -->
				<section
					v-if="cancelOrderDetailAPI?.cancel_detail.refund_account"
					class="mm_order-info"
				>
					<h5 class="mm_strapline T=line">
						<b>환불 계좌 정보</b>
					</h5>
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
				</section>

				<!-- 환불 예상금액 -->
				<section
					v-if="!cancelOrderDetailAPI?.cancel_detail.is_cancel_before_paid"
					class="mm_order-info"
				>
					<h5 class="mm_strapline T=line">
						<b>환불 예상금액</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<strong>{{ orderDetailAPI?.order.payment_info.label }} 환불</strong>
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
									<strong>적립금 환불</strong>
								</th>
								<td>
									<p
										v-if="_isLogin"
										class="text_point"
									>
										<strong>{{ cancelOrderDetailAPI?.cancel_detail.refund_info.refund_point }}</strong><sub>원</sub>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<strong>환불 예상금액</strong>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ cancelOrderDetailAPI?.cancel_detail.refund_info.refund_price }}</strong>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="mm_note">
						<ul>
							<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
						</ul>
					</div>
				</section>
			</div>

			<!-- 반품 주문상세 -->
			<div class="mm_tab-item">
				<!-- 반품 상품 -->
				<div class="m...detail-product">
					<h5 class="mm_strapline T=line">
						<b>반품 상품</b>
					</h5>
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
					</section>
				</div>

				<!-- 반품 사유 및 회수 방법 -->
				<section class="mm_order-form">
					<h5 class="mm_strapline T=line">
						<b>반품 사유 및 회수 방법</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>반품 사유</b>
								</th>
								<td>
									<div class="mm_form-select T=short">
										<label>
											<span class="text_readonly">{{ returnOrderDetailAPI?.return_detail.reason.label }}</span>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>상세 사유</b>
								</th>
								<td>
									<div class="mm_form-textarea">
										<label>
											<span class="textfield text_readonly">{{ returnOrderDetailAPI?.return_detail.reason.detail }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>반품 송장번호</b>
								</th>
								<td>
									<div
										v-if="returnOrderDetailAPI?.return_detail.retrieve_invoice != null"
										class="mm_form_mix-linked"
									>
										<div class="mm_form-select T=short">
											<label>
												<span class="text_readonly">{{ returnOrderDetailAPI?.return_detail.retrieve_invoice.delivery_compnay_name }}</span>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text T=short">
											<label>
												<span class="textfield text_readonly">{{ returnOrderDetailAPI?.return_detail.retrieve_invoice.invoice_number }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<a
											class="mm_btn T=line btn_entry"
											href="#"
										>
											<b>수정하기</b>
										</a>
									</div>
									<a
										v-else
										class="mm_btn T=line T=primary btn_entry"
										href="#"
									><b>입력하기</b></a>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 반품 수거지 정보 -->
				<section class="mm_order-info">
					<h5 class="mm_strapline T=line">
						<b>반품 수거지 정보</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>보내는 분</b>
								</th>
								<td>{{ returnOrderDetailAPI?.return_detail.retrieve_address.name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>휴대폰 번호</b>
								</th>
								<td>{{ returnOrderDetailAPI?.return_detail.retrieve_address.tel }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>주소</b>
								</th>
								<td>
									<span class="text_postcode">{{ returnOrderDetailAPI?.return_detail.retrieve_address.zip_code }}</span>
									<b>{{ returnOrderDetailAPI?.return_detail.retrieve_address.base_address }} {{ returnOrderDetailAPI?.return_detail.retrieve_address.detail_address }}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 환불 계좌정보 -->
				<section class="mm_order-info">
					<h5 class="mm_strapline T=line">
						<b>환불 계좌 정보</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>예금주</b>
								</th>
								<td>{{ returnOrderDetailAPI?.return_detail.refund_account.owner_name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>환불 은행</b>
								</th>
								<td>{{ returnOrderDetailAPI?.return_detail.refund_account.bank_name }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>환불 계좌</b>
								</th>
								<td>{{ returnOrderDetailAPI?.return_detail.refund_account.account_number }}</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 환불 예상금액 -->
				<section class="mm_order-info">
					<h5 class="mm_strapline T=line">
						<b>환불 예상금액</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<strong>총 결제금액</strong>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ returnOrderDetailAPI?.return_detail.refund_info.total_paid_price }}</strong>
									</p>
								</td>
							</tr>
							<template v-if="returnOrderDetailAPI?.return_detail.refund_info.calculate_details[0]">
								<tr
									v-for="refund, index in returnOrderDetailAPI?.return_detail.refund_info.calculate_details"
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
									<strong>환불 예상금액</strong>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ returnOrderDetailAPI?.return_detail.refund_info.refund_price }}</strong>
									</p>
									<b>({{ orderDetailAPI?.order.payment_info.label }} 환불 {{ returnOrderDetailAPI?.return_detail.refund_info.refund_price }}원 + 적립금 환불 {{ returnOrderDetailAPI?.return_detail.refund_info.refund_point }}원)</b>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="mm_note">
						<ul>
							<li>환불 예상금액과 최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
						</ul>
					</div>
				</section>
			</div>

			<!-- 교환 주문상세 -->
			<div class="mm_tab-item S=tab-on">
				<!-- 교환 상품 -->
				<div class="m...detail-product">
					<h5 class="mm_strapline T=line">
						<b>교환 상품</b>
					</h5>
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
										<p
											v-if="_isLogin"
											class="text_point"
										>
											사용 적립금<b><strong>{{ item.point_used }}</strong><sub>원</sub></b>
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

				<!-- 교환 사유 및 회수 방법 -->
				<section class="mm_order-form">
					<h5 class="mm_strapline T=line">
						<b>교환 사유 및 회수 방법</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>교환 사유</b>
								</th>
								<td>
									<div class="mm_form-select T=short">
										<label>
											<span class="text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.reason.label }}</span>
											<i class="ico_form-select"></i>
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>상세 사유</b>
								</th>
								<td>
									<div class="mm_form-textarea">
										<label>
											<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.reason.detail }}</span>
											<i class="bg_text"></i>
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>교환 상품 받을 주소</b>
								</th>
								<td>
									<div class="mm_form_mix-address">
										<div class="mm_form_mix-linked">
											<div class="mm_form-text">
												<label>
													<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.zip_code }}</span>
													<i class="bg_text"></i>
												</label>
											</div>
										</div>
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.base_address }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<div class="mm_form-text">
											<label>
												<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.exchange_address.detail_address }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>회수 방법</b>
								</th>
								<td>
									<div
										v-if="exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice != null"
										class="mm_form_mix-linked"
									>
										<div class="mm_form-select T=short">
											<label>
												<span class="text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice.delivery_compnay_name }}</span>
												<i class="ico_form-select"></i>
											</label>
										</div>
										<div class="mm_form-text T=short">
											<label>
												<span class="textfield text_readonly">{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_invoice.invoice_number }}</span>
												<i class="bg_text"></i>
											</label>
										</div>
										<a
											class="mm_btn T=line btn_entry"
											href="#"
										><b>수정하기</b></a>
									</div>
									<!-- (D) 교환 신청 시 상품을 발송하지 않았을 경우에는 '입력하기' 버튼만 노출합니다. -->
									<a
										v-else
										class="mm_btn T=line T=primary btn_entry"
										href="#"
									>
										<b>입력하기</b>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 교환 수거지 정보 -->
				<section
					v-if="exchangeOrderDetailAPI?.exchange_detail.retrieve_address != null"
					class="mm_order-info"
				>
					<h5 class="mm_strapline T=line">
						<b>교환 수거지 정보</b>
					</h5>
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
									<b>휴대폰 번호</b>
								</th>
								<td>{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.tel }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>주소</b>
								</th>
								<td>
									<span class="text_postcode">{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.zip_code }}</span>
									<b>{{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.base_address }} {{ exchangeOrderDetailAPI?.exchange_detail.retrieve_address.detail_address }}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 추가 결제 금액 -->
				<section class="mm_order-info">
					<h5 class="mm_strapline T=line">
						<b>추가 결제 금액</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<strong>결제수단</strong>
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
							<tr>
								<th scope="row">
									<strong>추가 결제 금액</strong>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>{{ exchangeOrderDetailAPI?.exchange_detail.additional_payment_price.total_price }}</strong>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 추가 결제 정보 -->
				<section
					v-if="exchangeOrderDetailAPI?.exchange_detail.payment_info != null"
					class="mm_order-info"
				>
					<h5 class="mm_strapline T=line">
						<b>추가 결제 정보</b>
					</h5>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>결제수단</b>
								</th>
								<td>{{ exchangeOrderDetailAPI?.exchange_detail.payment_info.label }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>카드사</b>
								</th>
								<td>{{ exchangeOrderDetailAPI?.exchange_detail.payment_info.card.label }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>카드번호</b>
								</th>
								<td>{{ exchangeOrderDetailAPI?.exchange_detail.payment_info.card.masking_number }}</td>
							</tr>
							<tr>
								<th scope="row">
									<b>결제승인일</b>
								</th>
								<td>{{ exchangeOrderDetailAPI?.exchange_detail.payment_info.card.approved_at }}</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	</div>
</template>