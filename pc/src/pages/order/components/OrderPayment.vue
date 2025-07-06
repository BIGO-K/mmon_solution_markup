<script setup lang="ts">
	import EasypayPayment from '@/features/easypay/components/EasypayPayment.vue';
	import EasypayPaymentNote from '@/features/easypay/components/EasypayPaymentNote.vue';

	const _isPay = true;
</script>

<template>
	<div class="m...method-type">
		<ul>
			<li>
				<label class="mm_form-radio">
					<input
						type="radio"
						name="dev_radio-payment"
						data-radio="{ 'syncer': '.mm_syncer-method-card' }"
						checked
					>
					<b class="mm_block">
						<i class="ico_credit-card"></i>
						<span class="text_label">신용/체크카드</span>
					</b>
				</label>
			</li>
			<li>
				<label class="mm_form-radio">
					<input
						type="radio"
						name="dev_radio-payment"
						data-radio="{ 'syncer': '.mm_syncer-method-account' }"
					>
					<b class="mm_block">
						<i class="ico_virtual-account"></i>
						<span class="text_label">무통장 입금</span>
					</b>
				</label>
			</li>
			<li>
				<label class="mm_form-radio">
					<input
						type="radio"
						name="dev_radio-payment"
						data-radio
					>
					<b class="mm_block">
						<i class="ico_mobile"></i>
						<span class="text_label">휴대폰</span>
					</b>
				</label>
			</li>
			<li>
				<label class="mm_form-radio">
					<input
						type="radio"
						name="dev_radio-payment"
						data-radio="{ 'syncer': '.mm_syncer-method-escrow' }"
					>
					<b class="mm_block">
						<i class="ico_escrow"></i>
						<span class="text_label">에스크로 결제</span>
					</b>
				</label>
			</li>
			<EasypayPayment v-if="_isPay"></EasypayPayment>
		</ul>
	</div>

	<!-- 신용/체크카드 -->
	<div class="mm_syncer-method-card">
		<div class="mm_order-form">
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>결제 수단</b>
						</th>
						<td>
							<div class="mm_form-select T=short">
								<label>
									<select data-select>
										<option>카드를 선택하세요</option>
									</select>
									<b class="text_selected"></b>
									<i class="ico_form-select"></i>
								</label>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<b>할부 선택</b>
						</th>
						<td>
							<div class="mm_form-select T=short">
								<label>
									<select data-select>
										<option>일시불</option>
									</select>
									<b class="text_selected"></b>
									<i class="ico_form-select"></i>
								</label>
							</div>
							<a
								class="btn_card-guide"
								href="#"
							><b>무이자할부 안내</b><i class="ico_link"></i></a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- 무통장 입금 -->
	<div class="mm_syncer-method-account m...method-account">
		<div class="mm_order-form">
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>은행 선택</b>
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
							<b>입금자명</b>
						</th>
						<td>
							<div class="mm_form_mix-linked">
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
										<span class="text_placeholder">입금자명을 입력하세요</span>
									</label>
								</div>
								<p class="text_period">
									입금기한<strong>2021.06.02 23:59:59까지</strong>
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- 현금영수증 발급 신청 -->
		<div class="mm_order-form m...method-account-receipt">
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>현금영수증 발급신청</b>
						</th>
						<td>
							<div class="mm_radio-list">
								<ul>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-receipt"
												data-radio="{ 'syncer': '.mm_syncer-receipt-income' }"
											>
											<b class="mm_block">
												<span class="text_label">소득공제용</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-receipt"
												data-radio="{ 'syncer': '.mm_syncer-receipt-expense' }"
											>
											<b class="mm_block">
												<span class="text_label">지출증빙용</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-receipt"
												data-radio
											>
											<b class="mm_block">
												<span class="text_label">신청안함</span>
											</b>
										</label>
									</li>
								</ul>
							</div>

							<!-- 소득공제용 -->
							<div class="mm_syncer-receipt-income">
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
											maxlength="11"
										><i
											class="bg_text"
										></i>
										<span class="text_placeholder">휴대폰 번호(숫자만 입력하세요)</span>
									</label>
								</div>
							</div>

							<!-- 지출증빙용 -->
							<div class="mm_syncer-receipt-expense">
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
											maxlength="10"
										><i
											class="bg_text"
										></i>
										<span class="text_placeholder">사업자 등록번호(숫자만 입력하세요)</span>
									</label>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- 환불 계좌 관리 -->
		<div class="mm_order-form m...method-account-refund">
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>환불 계좌 관리</b>
						</th>
						<td>
							<!-- (D) 등록된 환불 계좌가 있을 경우 노출합니다. -->
							<!-- <p>국민은행</p>
							<p>홍길동</p>
							<p>
								67140123456789
								<a
									class="mm_btn T=xs"
									href="#"
								><b>변경하기</b><i class="ico_link T=xs"></i></a>
							</p> -->

							<!-- (D) 등록된 환불 계좌가 없을 경우 노출합니다. -->
							<p>
								환불 계좌를 등록해 주세요.
								<a
									class="mm_btn T=xs"
									href="#"
								>
									<b>등록하기</b>
									<i
										class="ico_link T=xs"
									></i>
								</a>
							</p>
							<div class="mm_note">
								<ul>
									<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- 에스크로 결제 -->
	<div class="mm_syncer-method-escrow">
		<div class="mm_note">
			<ul>
				<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
			</ul>
		</div>

		<!-- 환불 계좌 관리 -->
		<div class="mm_order-form m...method-account-refund">
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>환불 계좌 관리</b>
						</th>
						<td>
							<!-- (D) 등록된 환불 계좌가 있을 경우 노출합니다. -->
							<p>국민은행</p>
							<p>홍길동</p>
							<p>
								67140123456789
								<a
									class="mm_btn T=xs"
									href="#"
								>
									<b>변경하기</b>
									<i
										class="ico_link T=xs"
									></i>
								</a>
							</p>

							<!-- (D) 등록된 환불 계좌가 없을 경우 노출합니다. -->
							<!-- <p>환불 계좌를 등록해 주세요.<a class="mm_btn T=xs" href="#"><b>등록하기</b><i class="ico_link T=xs"></i></a></p> -->
							<div class="mm_note">
								<ul>
									<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<EasypayPaymentNote v-if="_isPay"></EasypayPaymentNote>
</template>