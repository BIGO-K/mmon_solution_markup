<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import OrderGift from '@/features/gift/components/GiftMyOrderDetail.vue';
	import OrderDetailCancel from '@/pages/mypage/components/MypageOrderDetailCancel.vue';
	import OrderDetailReturn from '@/pages/mypage/components/MypageOrderDetailReturn.vue';
	import OrderDetailExchange from '@/pages/mypage/components/MypageOrderDetailExchange.vue';

	const orderDetailAPI = ref<OrderDetailAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<OrderDetailAPI>(`ORDER_DETAIL`, orderDetailAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		gift: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>주문 상세</b></h1>
		</template>

		<template #content>
			<section class="m_myorder-detail">
				<h3><b>{{ orderDetailAPI?.order.ordered_at }}</b><strong>주문번호: {{ orderDetailAPI?.order.order_id }}</strong></h3>
				<hr class="mm_line">

				<!-- 주문자 정보 -->
				<div
					class="mm_dropdown T=order S=on"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="접어놓기"
					>
						<b>주문자 정보</b><i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_inner">
								<div class="mm_order-info">
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
													<b>이메일 주소</b>
												</th>
												<td>{{ orderDetailAPI?.order.orderer_info.email }}</td>
											</tr>
											<tr v-if="orderDetailAPI?.order.orderer_info.personal_clearance_code != null">
												<th scope="row">
													<b>개인통관<br> 고유번호</b>
												</th>
												<td>{{ orderDetailAPI?.order.orderer_info.personal_clearance_code }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 배송 정보 -->
				<div
					class="mm_dropdown T=order S=on"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="접어놓기"
					>
						<b>배송 정보</b><i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_inner">
								<div class="mm_order-info">
									<table>
										<caption>상품 받을 주소</caption>
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
													{{
														`${ orderDetailAPI?.order.shipping_address.zip_code }<br>${ orderDetailAPI?.order.shipping_address.base_address } ${ orderDetailAPI?.order.shipping_address.detail_address }`
													}}
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
									<!-- (D) '입금 대기, 결제 완료' 주문일 경우 '주소변경' 버튼을 노출합니다. -->
									<a
										class="mm_btn T=xs T=line btn_address-change"
										href="#"
									><b>주소변경</b></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 구매 상품 -->
				<div
					class="mm_dropdown T=order S=on"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="접어놓기"
					>
						<b>구매 상품</b><i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_order-item">
								<div
									v-for="seller in orderDetailAPI?.order.packs[0].sellers"
									:key="seller.id"
									class="mm_order-item-seller"
								>
									<div class="mm_order...seller-head">
										<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
										<a
											v-if="_isLogin"
											href="#"
										><b>판매자 문의하기</b></a>
									</div>
									<div class="mm_product-list T=sm">
										<ul>
											<li
												v-for="item in seller.order_items"
												:key="item.id"
											>
												<div class="mm_product-item">
													<a href="#">
														<figure>
															<LazyloadMUI
																class="mm_bg-cover image_product"
																:_src="item.goods.thumbnail_url"
															></LazyloadMUI>
															<figcaption>
																<p class="text_status">
																	{{ item.order_status_label }}
																	<b
																		v-if="item.refund_status_label"
																		class="text_refund"
																	>{{ item.refund_status_label }}</b>
																</p>
																<p class="text_brand">{{ item.goods.brand_name }}</p>
																<p class="text_product">{{ item.goods.name }}</p>
																<p class="text_price"><strong>{{ item.paid_price }}</strong></p>
																<p class="text_option">{{ item.goods.option_name }}</p>
															</figcaption>
														</figure>
													</a>
													<div class="mm_product-item-footer">
														<p
															v-if="item.exchanged_option_name"
															class="text_changed"
														>
															<strong class="mm_text-variable">변경된 옵션</strong>
															<span>{{ item.exchanged_option_name }}</span>
														</p>
														<div
															v-if="item.cancelable || item.receipt_confirmable || item.delivery_trackable || item.exchangeable || item.returnable || item.purchase_confirmable || item.review_writable || item.return_cancelable || item.exchange_cancelable || item.return_delivery_trackable || item.to_return_switchable"
															class="mm_btn_box"
														>
															<div class="mm_flex T=equal">
																<a
																	v-if="item.cancelable"
																	class="mm_btn T=sm T=line"
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
																	v-if="item.delivery_trackable"
																	class="mm_btn T=sm T=line T=variable"
																	href="#"
																	target="_blank"
																	title="새 창 열림"
																>
																	<b>배송조회</b>
																</a>
																<a
																	v-if="item.exchangeable"
																	class="mm_btn T=sm T=line"
																	href="#"
																>
																	<b>교환신청</b>
																</a>
																<a
																	v-if="item.returnable"
																	class="mm_btn T=sm T=line"
																	href="#"
																>
																	<b>반품신청</b>
																</a>
																<a
																	v-if="item.purchase_confirmable"
																	class="mm_btn T=sm T=variable"
																	href="#"
																>
																	<b>구매확정</b>
																</a>
																<a
																	v-if="_isLogin && item.review_writable"
																	class="mm_btn T=sm T=line T=variable"
																	href="#"
																>
																	<b>리뷰 쓰기</b>
																</a>
																<button
																	v-if="item.return_cancelable"
																	type="button"
																	class="mm_btn T=sm T=line"
																>
																	<b>반품철회</b>
																</button>
																<button
																	v-if="item.exchange_cancelable"
																	type="button"
																	class="mm_btn T=sm T=line"
																>
																	<b>교환철회</b>
																</button>
																<a
																	v-if="item.return_delivery_trackable"
																	class="mm_btn T=sm T=line T=variable"
																	href="#"
																	target="_blank"
																	title="새 창 열림"
																>
																	<b>반송조회</b>
																</a>
																<a
																	v-if="item.to_return_switchable"
																	class="mm_btn T=sm T=line"
																	href="#"
																>
																	<b>반품전환</b>
																</a>
															</div>
														</div>
														<p class="text_point">
															사용 적립금<b><strong>{{ item.point_used }}</strong><sub>원</sub></b>
														</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<a
									v-if="orderDetailAPI?.order.original_order_id"
									class="btn_order-origin"
									href="#"
								>
									<b>원 주문 상세보기<i class="ico_link"></i></b>
								</a>
							</div>

							<OrderGift
								v-if="feature.gift._is && orderDetailAPI?.order.giveaways != null"
								:templates="orderDetailAPI?.order.giveaways"
							></OrderGift>

							<div class="mm_inner m_myorder-detail-cost">
								<!-- 최종 결제금액 -->
								<section class="mm_costbox">
									<h4 class="mm_strapline">
										<b>최종 결제금액</b>
									</h4>
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
									<div class="mm_costbox-unit">
										<p>결제수단: {{ orderDetailAPI?.order.payment_info.label }}</p>
										<template v-if="orderDetailAPI?.order.payment_info.card">
											<p>카드사: {{ orderDetailAPI?.order.payment_info.card.label }}</p>
											<p>카드번호: {{ orderDetailAPI?.order.payment_info.card?.masking_number }}</p>
										</template>
										<template v-if="orderDetailAPI?.order.payment_info.bank_account">
											<p>은행명: {{ orderDetailAPI?.order.payment_info.bank_account.bank_name }}</p>
											<p>계좌번호: {{ orderDetailAPI?.order.payment_info.bank_account.account_number }}</p>
											<p>입금기한: {{ orderDetailAPI?.order.payment_info.bank_account.input_expire_at }}</p>
										</template>
									</div>
									<a
										v-if="orderDetailAPI?.order.receipt_viewable"
										class="mm_btn T=2xs T=dark btn_receipt"
										href="#"
									>
										<b>영수증 보기</b>
									</a>
								</section>

								<!-- 적립금 적립 혜택 -->
								<h4 class="mm_strapline">
									<b>적립금 적립 혜택</b>
								</h4>
								<div class="mm_cost">
									<table>
										<tbody>
											<tr>
												<th scope="row">
													<b>구매 적립</b>
												</th>
												<td>
													<p class="text_point">
														<strong>{{ orderDetailAPI?.order.payment_info.buy_point }}</strong><sub>원</sub>
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="mm_note">
									<ul>
										<li>취소완료/반품완료 된 상품의 적립금은 차감되어 구매적립금이 표시 됩니다.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<OrderDetailCancel
					v-if="orderDetailAPI?.cancel_ids[0]"
					:templates="orderDetailAPI?.cancel_ids"
				></OrderDetailCancel>

				<OrderDetailReturn
					v-if="orderDetailAPI?.return_ids[0]"
					:templates="orderDetailAPI?.return_ids"
				></OrderDetailReturn>

				<OrderDetailExchange
					v-if="orderDetailAPI?.exchange_ids[0]"
					:templates="orderDetailAPI?.exchange_ids"
				></OrderDetailExchange>
			</section>
		</template>
	</LayoutSub>
</template>