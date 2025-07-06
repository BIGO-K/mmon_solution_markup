<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const returnSwitchListAPI = ref<ReturnSwitchListAPI>();
	const returnSwitchRefundAPI = ref<ReturnSwitchRefundAPI>();
	const refundAccountAPI = ref<RefundAccountAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<ReturnSwitchListAPI>(`ORDER_EXCHANGE_SWITCH_RETURNABLE`, returnSwitchListAPI);
	Api.get<ReturnSwitchRefundAPI>(`ORDER_EXCHANGE_SWITCH_RETURN_REFUND_INFO`, returnSwitchRefundAPI);
	Api.get<RefundAccountAPI>(`MEMBER_REFUND_ACCOUNT`, refundAccountAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>반품 전환</b></h1>
		</template>

		<template #content>
			<!-- (D) '.mm_process' 영역은 단계별 입력 페이지로 현재 순서에 해당하는 '.mm_process-item' 영역에 'S=process-on' 클래스가 추가됩니다. -->
			<div class="mm_process">
				<!-- 반품사유 -->
				<div class="mm_process-item S=process-on">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>반품 사유를 선택하세요</b>
						</h3>
						<div class="m_popup-myclaim-reason">
							<ul>
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
										></textarea>
										<i class="bg_text"></i>
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

				<!-- 환불관련정보 -->
				<div class="mm_process-item">
					<div class="mm_inner">
						<h3 class="mm_heading m_popup-myclaim-title">
							<b>예상 환불금액을 확인하세요</b>
						</h3>
						<div class="mm_cost">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>반품 상품 주문 금액</b>
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
								</tbody>
								<tfoot>
									<tr>
										<th scope="row">
											<b>환불 예상 금액</b>
										</th>
										<td>
											<p class="text_price mm_text-variable">
												<strong>{{ returnSwitchRefundAPI?.refund_info.refund_price }}</strong>
											</p>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
						<h6 class="mm_strapline">
							<b>환불 정보</b>
						</h6>
						<div class="mm_cost">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>{{ returnSwitchListAPI?.switch_returnable_order.payment_method_label }} 환불</b>
										</th>
										<td>
											<p class="text_price">
												<strong>{{ returnSwitchRefundAPI?.refund_info.refund_price }}</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>적립금 환불</b>
										</th>
										<td>
											<p class="text_point">
												<strong>{{ returnSwitchRefundAPI?.refund_info.refund_point }}</strong><sub>원</sub>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="mm_note">
							<ul>
								<li>최종적으로 환불 받으실 금액은 상이할 수 있습니다.</li>
							</ul>
						</div>

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
										<b>반품 전환하기</b>
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