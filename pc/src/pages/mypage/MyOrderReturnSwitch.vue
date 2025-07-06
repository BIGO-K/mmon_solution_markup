<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const returnSwitchListAPI = ref<ReturnSwitchListAPI>();
	const returnSwitchRefundAPI = ref<ReturnSwitchRefundAPI>();
	const refundAccountAPI = ref<MyRefundAccountAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_EXCHANGE_SWITCH_RETURNABLE`, ref: returnSwitchListAPI },
		{ key: `ORDER_EXCHANGE_SWITCH_RETURN_REFUND_INFO`, ref: returnSwitchRefundAPI },
		{ key: `MEMBER_REFUND_ACCOUNT`, ref: refundAccountAPI },
	]);

	/** 로그인 여부 */
	const _isLogin = ref(true);

</script>

<template>
	<h3 class="mm_heading">
		<b>반품 전환</b>
	</h3>
	<div class="m_my-order">
		<!--
				(D) 반품 전환 상품 선택 후 '선택 완료' 버튼 클릭 시 'S=process-on' 클래스가 추가됩니다.
					'S=process-on'클래스가 추가될 경우 'm_my-order-process'가 노출됩니다
					'상품 재선택' 버튼 클릭 시 'S=process-on' 클래스가 삭제되고, 반품 전환 상품을 다시 선택할 수 있습니다
			-->
		<div class="m_my-order-process">
			<!-- 반품 전환 신청 내용 -->
			<div class="m...process-apply">
				<!-- 반품 사유 선택 -->
				<section class="m_my-order-choice">
					<h5 class="mm_strapline T=line">
						<b>반품 사유 선택</b>
					</h5>
					<div class="m_my-order-reason">
						<ul class="mm_flex T=equal">
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-reason"
										data-radio
										:checked="returnSwitchListAPI?.chosen_exchange_reason.label === '마음이 변했어요' ? true : false"
										:disabled="returnSwitchListAPI?.chosen_exchange_reason.label != '마음이 변했어요' ? true : false"
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
										:checked="returnSwitchListAPI?.chosen_exchange_reason.label === '상품에 하자가 있어요' ? true : false"
										:disabled="returnSwitchListAPI?.chosen_exchange_reason.label != '상품에 하자가 있어요' ? true : false"
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
										:checked="returnSwitchListAPI?.chosen_exchange_reason.label === '다른 상품이 배송됐어요' ? true : false"
										:disabled="returnSwitchListAPI?.chosen_exchange_reason.label != '다른 상품이 배송됐어요' ? true : false"
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
										maxlength="100"
									></textarea><i class="bg_text"></i>
									<span class="text_placeholder">상세 사유를 입력하세요(필수입력)</span>
								</label>
							</div>
						</div>
					</div>
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
									<strong>반품 상품 주문 금액</strong>
								</th>
								<td>
									<p class="text_price">
										<strong>{{ returnSwitchRefundAPI?.refund_info.total_paid_price }}</strong>
									</p>
								</td>
							</tr>
							<tr
								v-for="refund, index in returnSwitchRefundAPI?.refund_info.calculate_details"
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
										<strong>{{ returnSwitchRefundAPI?.refund_info.refund_price }}</strong>
									</p>
									<b>({{ returnSwitchListAPI?.switch_returnable_order.payment_method_label }} 환불 {{ returnSwitchRefundAPI?.refund_info.refund_price }}원 + 적립금 환불 {{ returnSwitchRefundAPI?.refund_info.refund_point }}원)</b>
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

				<!-- 하단 버튼 -->
				<div class="mm_foot">
					<div class="mm_btn_box T=equal">
						<button
							type="button"
							class="mm_btn T=line btn_process-select"
						>
							<b>상품 재선택</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>반품 신청하기</b>
						</button>
					</div>
				</div>

				<!-- 유의사항 -->
				<section class="mm_note">
					<h6 class="text_title">
						<i class="ico_note"></i><b>반품 주의사항</b>
					</h6>
					<ul>
						<li>반품 전환의 경우 수량 부분 선택이 불가능합니다.</li>
						<li>반품 전환하신 상품은 바로 반품 완료 처리가 진행됩니다.</li>
					</ul>
				</section>
			</div>

			<!-- 반품 전환 상품 선택 -->
			<div class="m...process-product">
				<!-- 반품 전환 내역 -->
				<article class="mm_order-item">
					<h5>
						<b>{{ returnSwitchListAPI?.switch_returnable_order.ordered_at }}</b>
						<strong>주문번호: {{ returnSwitchListAPI?.switch_returnable_order.order_id }}</strong>
					</h5>
					<section
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
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="mm_ir-blind text_label">상품 선택</span>
										</b>
									</label>
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
									<!-- <dl><dt>반품 수량</dt><dd>1개</dd></dl>
										<div class="mm_block">
											<a
												class="mm_btn T=sm T=line T=light"
												href="#"
											><b>부분 선택</b></a>
										</div> -->
								</div>
							</li>
						</ul>
					</section>
				</article>

				<!-- 하단버튼 -->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary btn_process-complete"
						>
							<b>선택 완료</b>
						</button>
					</div>
				</div>

				<!-- 유의사항 -->
				<section class="mm_note">
					<h6 class="text_title">
						<i class="ico_note"></i><b>반품 주의사항</b>
					</h6>
					<ul>
						<li>반품 전환의 경우 수량 부분 선택이 불가능합니다.</li>
						<li>반품 전환하신 상품은 바로 반품 완료 처리가 진행됩니다.</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-myProcess.js"></script> -->