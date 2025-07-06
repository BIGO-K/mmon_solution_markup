<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const orderCancelListAPI = ref<OrderCancelListAPI>();
	const orderCancelRefundAPI = ref<OrderCancelRefundAPI>();
	const refundAccountAPI = ref<RefundAccountAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<OrderCancelListAPI>(`ORDER_CANCEL_CANCELABLES`, orderCancelListAPI);
	Api.get<OrderCancelRefundAPI>(`ORDER_CANCEL_REFUND_INFO`, orderCancelRefundAPI);
	Api.get<RefundAccountAPI>(`MEMBER_REFUND_ACCOUNT`, refundAccountAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>주문 취소</b></h1>
		</template>

		<template #content>
			<!-- 주문목록 -->
			<!-- (D) '입금 대기' 상태일 경우 상단에 상품선택 체크박스는 노출하지 않습니다. -->
			<article class="mm_order-item">
				<h5>
					<b>{{ orderCancelListAPI?.cancelable_order.ordered_at }}</b>
					<strong>주문번호: {{ orderCancelListAPI?.cancelable_order.order_id }}</strong>
				</h5>
				<div
					v-for="pack in orderCancelListAPI?.cancelable_order.packs"
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
									v-if="pack.order_items.length > 1 && item.order_status_label != '입금 대기'"
									class="mm_form-check"
								>
									<input
										type="checkbox"
										data-check
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
			</article>

			<!-- 취소신청 -->
			<div class="mm_inner m_popup-myclaim-cancel">
				<h6 class="mm_strapline">
					<b>취소 사유</b>
				</h6>
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>취소 사유를 선택하세요</option>
							<option data-option="{ 'syncer': '.mm_syncer-reason' }">기타</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div class="mm_syncer-reason">
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
							></textarea>
							<i class="bg_text"></i>
							<span class="text_placeholder">취소 사유를 입력하세요(필수입력)</span>
						</label>
					</div>
				</div>

				<template v-if="orderCancelListAPI?.cancelable_order.is_paid">
					<h6 class="mm_strapline">
						<b>환불 정보</b>
					</h6>
					<div class="mm_cost">
						<table>
							<tbody>
								<tr>
									<th scope="row">
										<b>{{ orderCancelListAPI.cancelable_order.payment_method_label }} 환불</b>
									</th>
									<td>
										<p class="text_price">
											<strong>{{ orderCancelRefundAPI?.refund_info.total_paid_price }}</strong>
										</p>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<b>적립금 환불</b>
									</th>
									<td>
										<p class="text_point">
											<strong>{{ orderCancelRefundAPI?.refund_info.refund_point }}</strong><sub>원</sub>
										</p>
									</td>
								</tr>
								<tr
									v-for="refund, index in orderCancelRefundAPI?.refund_info.calculate_details"
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
								<tr>
									<th scope="row">
										<b>환불 예상금액</b>
									</th>
									<td>
										<p class="text_price mm_text-variable">
											<strong>{{ orderCancelRefundAPI?.refund_info.refund_price }}</strong>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</template>

				<template v-if="_isLogin">
					<h6 class="mm_strapline">
						<b>환불 계좌 관리</b>
					</h6>
					<div
						v-if="refundAccountAPI?.refund_account"
						class="mm_order-refund"
					>
						<p class="text_bank">
							{{ refundAccountAPI?.refund_account.bank_name }}
						</p>
						<p class="text_name">
							{{ refundAccountAPI?.refund_account.owner_name }}
						</p>
						<p>{{ refundAccountAPI?.refund_account.account_number }}</p>
						<a
							class="mm_btn T=xs T=dark"
							href="#"
						>
							<b>변경하기</b><i class="ico_link T=sm"></i>
						</a>
					</div>
					<!-- (D) 등록된 계좌가 없을 경우 노출합니다. -->
					<div
						v-else
						class="mm_order-refund-none"
					>
						<p>환불 계좌를 등록하세요</p>
						<a
							class="mm_btn T=dark"
							href="#"
						>
							<b>환불 계좌 등록하기</b>
						</a>
					</div>
				</template>

				<template v-else>
					<h6 class="mm_strapline">
						<b>예금주</b>
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
								type="text"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">예금주명을 입력하세요</span>
						</label>
					</div>
					<h6 class="mm_strapline">
						<b>환불 은행</b>
					</h6>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>은행을 선택하세요</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<h6 class="mm_strapline">
						<b>환불 계좌</b>
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
							<span class="text_placeholder">계좌번호를 입력하세요(숫자만 입력)</span>
						</label>
					</div>
				</template>
				<div class="mm_note">
					<ul>
						<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
					</ul>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>취소 신청하기</b>
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
							<i class="ico_info"></i><b>주문 취소 주의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>무통장 입금을 제외한 나머지 결제 수단의 경우 원 결제 수단 취소로 진행됩니다.</li>
									<li>휴대폰 주문은 결제한 당월이 지날 경우 원 결제 취소가 불가합니다.</li>
									<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>