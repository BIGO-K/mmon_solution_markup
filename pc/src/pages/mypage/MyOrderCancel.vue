<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const orderCancelListAPI = ref<OrderCancelListAPI>();
	const orderCancelRefundAPI = ref<OrderCancelRefundAPI>();
	const refundAccountAPI = ref<MyRefundAccountAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_CANCEL_CANCELABLES`, ref: orderCancelListAPI },
		{ key: `ORDER_CANCEL_REFUND_INFO`, ref: orderCancelRefundAPI },
		{ key: `MEMBER_REFUND_ACCOUNT`, ref: refundAccountAPI },
	]);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<h3 class="mm_heading">
		<b>주문 취소</b>
	</h3>
	<div class="m_my-order">
		<!-- 주문 취소 내역 -->
		<article class="mm_order-item">
			<h5>
				<b>{{ orderCancelListAPI?.cancelable_order.ordered_at }}</b>
				<strong>주문번호: {{ orderCancelListAPI?.cancelable_order.order_id }}</strong>
			</h5>
			<section
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
							<label
								v-if="pack.order_items.length > 1"
								class="mm_form-check"
							>
								<input
									type="checkbox"
									data-check
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="mm_ir-blind text_label">상품 선택</span>
								</b>
							</label>
							<p class="text_status">
								{{ item.order_status_label }}
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
							<template v-if="pack.order_items.length > 1">
								<dl><dt>취소 수량</dt><dd>4개</dd></dl>
								<div class="mm_btn_box">
									<div class="mm_block">
										<a
											class="mm_btn T=sm T=line T=light"
											href="#"
										>
											<b>부분 선택</b>
										</a>
									</div>
								</div>
							</template>
						</div>
					</li>
				</ul>
			</section>
		</article>

		<!-- 취소 사유 선택 -->
		<section class="mm_order-form">
			<h5 class="mm_strapline T=line">
				<b>취소 사유 선택</b>
			</h5>
			<div class="mm_radio-list T=chain">
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
								<span class="text_label">동일 상품 재주문(주문/결제 정보 수정)</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">단순 변심</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">타 사이트 상품 주문</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">이중 주문으로 인한 취소</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">배송 지연</span>
							</b>
						</label>
					</li>
					<li>
						<div class="mm_form_mix-linked">
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-reason"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">기타</span>
								</b>
							</label>
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
										data-text
										disabled
									></textarea><i class="bg_text"></i>
									<span class="text_placeholder">기타 사유를 입력하세요</span>
								</label>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<template v-if="orderCancelListAPI?.cancelable_order.is_paid">
			<!-- 환불 정보 -->
			<section class="mm_order-info">
				<h5 class="mm_strapline T=line">
					<b>환불 정보</b>
				</h5>
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<strong>{{ orderCancelListAPI.cancelable_order.payment_method_label }} 환불</strong>
							</th>
							<td>
								<p class="text_price">
									<strong>{{ orderCancelRefundAPI?.refund_info.total_paid_price }}</strong>
								</p>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<strong>적립금 환불</strong>
							</th>
							<td>
								<p class="text_price">
									<strong>{{ orderCancelRefundAPI?.refund_info.refund_point }}</strong>
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
								<strong>환불 예상금액</strong>
							</th>
							<td>
								<p class="text_price mm_text-variable">
									<strong>{{ orderCancelRefundAPI?.refund_info.refund_price }}</strong>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<!-- 환불 계좌 관리 -->
			<section
				v-if="!_isLogin"
				class="mm_order-form"
			>
				<h5 class="mm_strapline T=line">
					<b>환불 계좌 입력</b>
				</h5>
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<b>예금주</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">예금주명을 입력하세요</span>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>환불 은행</b>
							</th>
							<td>
								<div class="mm_form-select T=short">
									<label>
										<select data-select>
											<option>은행을 선택하세요</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>환불 계좌</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">계좌를 입력하세요</span>
									</label>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section
				v-else
				class="mm_order-info"
			>
				<h5 class="mm_strapline T=line">
					<b>환불 계좌 관리</b>
				</h5>
				<table>
					<tbody v-if="refundAccountAPI?.refund_account == null">
						<tr>
							<th scope="row">
								<b>계좌번호</b>
							</th>
							<td>
								<b>환불 계좌를 등록해주세요.</b>
								<a
									class="mm_btn T=xs btn_refund-set"
									href="#"
								>
									<b>등록하기</b><i class="ico_link T=xs"></i>
								</a>
								<div class="mm_note">
									<ul>
										<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
					<tbody v-else>
						<tr>
							<th scope="row">
								<b>예금주명</b>
							</th>
							<td>{{ refundAccountAPI?.refund_account.owner_name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>은행명</b>
							</th>
							<td>{{ refundAccountAPI?.refund_account.bank_name }}</td>
						</tr>
						<tr>
							<th scope="row">
								<b>계좌번호</b>
							</th>
							<td>
								<b>{{ refundAccountAPI?.refund_account.account_number }}</b>
								<a
									class="mm_btn T=xs btn_refund-set"
									href="#"
								>
									<b>변경하기</b><i class="ico_link T=xs"></i>
								</a>
								<div class="mm_note">
									<ul>
										<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</template>

		<!-- 하단 버튼 -->
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

		<!-- 유의사항 -->
		<section class="mm_note">
			<h6 class="text_title">
				<i class="ico_note"></i><b>취소 유의사항</b>
			</h6>
			<ul>
				<li>무통장 입금을 제외한 나머지 결제 수단의 경우 원 결제 수단 취소로 진행됩니다.</li>
				<li>휴대폰 주문은 결제한 당월이 지날 경우 원 결제 취소가 불가합니다.</li>
				<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
			</ul>
		</section>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
	(function () {

		//< 취소 사유 기타 선택
		mm.event.on('.mm_form-radio input', 'change', function () {

			mm.find('.textfield', this.closest('.mm_radio-list'))[0].disabled = (this.closest('.mm_form_mix-linked')) ? false : true;

		});
		//> 취소 사유 기타 선택

	})();
</script> -->