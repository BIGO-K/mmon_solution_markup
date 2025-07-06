<script setup lang="ts">
	import { computed, ref, watch } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import EasypayPayment from '@/features/easypay/components/EasypayPayment.vue';
	import EasypayPaymentNote from '@/features/easypay/components/EasypayPaymentNote.vue';

	const orderPaymentListAPI = ref<OrderPaymentListAPI>();
	const paymentMethodAPI = ref<PayMethods>();
	const refundAccountAPI = ref<RefundAccountAPI>();
	const { configFeature } = useConfigStore();

	Api.getAll([
		{ key: `ORDER_BASIC_DATA`, ref: orderPaymentListAPI },
		{ key: `ORDER_UTIL_PAYMENT_METHODS`, ref: paymentMethodAPI },
		{ key: `MEMBER_REFUND_ACCOUNT`, ref: refundAccountAPI }
	]);

	const baseMethods = ref<PayMethod[]>([]);
	const easypayMethods = ref<PayMethod[]>([]);

	const watchOff = watch(paymentMethodAPI, () => {

		if (paymentMethodAPI.value) {
			const activeEasypays = configFeature.active_easypays;
			const payMethods = paymentMethodAPI.value.pay_methods;

			payMethods.forEach((method) => {
				if (activeEasypays?.some((easypay) => easypay === method.eng_label)) easypayMethods.value.push(method);
				else baseMethods.value.push(method);
			});

			watchOff();
		}

	});

	// 카드사 리스트
	const creditCards = computed(() => {
		return paymentMethodAPI.value?.pay_methods.find(__method => {
			return __method.eng_label === 'credit_card';
		})?.child_methods || [];
	});

	// 무통장 입금 은행 리스트
	const bankAccounts = computed(() => {
		return paymentMethodAPI.value?.pay_methods.find(__method => {
			return __method.eng_label === 'virtual_account';
		})?.child_methods || [];
	});

	// 무통장 입금 날짜
	const bankDepositExpireDate = (() => {

		const date = new Date();
		const year = String(date.getFullYear());
		const month = String(date.getMonth() + 1);
		const day = String(date.getDate() + 1);

		return year + '.' + month.padStart(2, '0') + '.' + day.padStart(2, '0') + ' 23:59:59';

	})();

	// 유료기능 사용 검증 및 세팅
	const feature = {
		easypay: {
			_is: true,
		// value
		}
	};

	const methodCard = ref('');
</script>

<template>
	<!-- 결제수단 목록 -->
	<div class="m...payment-method">
		<ul>
			<li
				v-for="method in baseMethods"
				:key="method.label"
			>
				<label class="mm_form-radio">
					<input
						v-model="methodCard"
						type="radio"
						name="dev_radio-payment"
						data-radio="{ 'syncer': '.mm_syncer-method-card' }"
						:value="method.eng_label"
						:checked="method.code === orderPaymentListAPI?.orderer_information?.latest_payment_method_code"
					>
					<b class="mm_block">
						<i :class="`ico_${ method.eng_label.replace('_', '-') }`"></i>
						<span class="text_label">{{ method.label }}</span>
					</b>
				</label>
			</li>
			<EasypayPayment
				v-if="(configFeature.active_easypays.length ?? NaN) > 0 && feature.easypay._is"
				:easypay-methods="easypayMethods"
				:lately-method-code="orderPaymentListAPI?.orderer_information?.latest_payment_method_code"
			></EasypayPayment>
		</ul>
	</div>

	<!-- 신용/체크카드 -->
	<div
		class="mm_syncer-method-card"
		:class="{ 'S=radio-use': methodCard === 'credit_card' }"
	>
		<div class="mm_form-select">
			<label>
				<select data-select>
					<option>카드를 선택하세요</option>
					<option
						v-for="card in creditCards"
						:key="card.label"
					>
						{{ card.label }}
					</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div class="mm_form-select">
			<label>
				<select data-select>
					<option>일시불</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<a
			class="btn_card-info"
			href="#"
		>
			<b>무이자할부 안내</b><i class="ico_link"></i>
		</a>
	</div>

	<!-- 무통장 입금 -->
	<div
		class="mm_syncer-method-deposit"
		:class="{ 'S=radio-use': methodCard === 'virtual_account' }"
	>
		<div class="mm_inner">
			<div class="mm_form-select">
				<label>
					<select data-select>
						<option>은행을 선택하세요</option>
						<option
							v-for="bank in bankAccounts"
							:key="bank.code"
						>
							{{ bank.label }}
						</option>
					</select>
					<b class="text_selected"></b>
					<i class="ico_form-select"></i>
				</label>
			</div>
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
					<span class="text_placeholder">입금자명을 입력하세요</span>
				</label>
			</div>
			<p>입금기한: <strong class="mm_text-secondary">{{ `${bankDepositExpireDate}까지` }}</strong></p>
		</div>
		<section class="m...payment-receipt">
			<h6 class="mm_strapline">
				<b>현금영수증 발급신청</b>
			</h6>
			<ul class="mm_flex T=equal">
				<li>
					<label class="mm_form-radio">
						<input
							type="radio"
							name="dev_radio-receipt"
							data-radio="{ 'syncer': '.mm_syncer-receipt-income'}"
							checked
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
							data-radio="{ 'syncer': '.mm_syncer-receipt-expense'}"
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
			<div class="mm_syncer-receipt-income">
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="tel"
							class="textfield"
							data-text
							maxlength="11"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호(숫자만 입력하세요)</span>
					</label>
				</div>
			</div>
			<div class="mm_syncer-receipt-expense">
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
						<span class="text_placeholder">사업자 등록번호(숫자만 입력하세요)</span>
					</label>
				</div>
			</div>
		</section>
		<section>
			<h6 class="mm_strapline">
				<b>환불 계좌 관리</b>
			</h6>
			<div
				v-if="refundAccountAPI === null"
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
			<div
				v-else
				class="mm_order-refund"
			>
				<p class="text_bank">
					{{ refundAccountAPI?.refund_account?.bank_name }}
				</p>
				<p class="text_name">
					{{ refundAccountAPI?.refund_account?.owner_name }}
				</p>
				<p>{{ refundAccountAPI?.refund_account?.account_number }}</p>
				<router-link
					class="mm_btn T=xs T=dark"
					:to="{ name: 'MyInfoRefundRegister' }"
				>
					<b>변경하기</b><i class="ico_link T=sm"></i>
				</router-link>
			</div>
			<div class="mm_note">
				<ul>
					<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
				</ul>
			</div>
		</section>
	</div>

	<!-- 에스크로 -->
	<div
		class="mm_syncer-method-escrow"
		:class="{ 'S=radio-use': methodCard === 'escrow' }"
	>
		<div class="mm_note">
			<ul>
				<li>에스크로 결제 건은 부분 취소가 불가능하고, 전체 취소만 가능합니다.</li>
			</ul>
		</div>
		<hr class="mm_line">
		<section>
			<h6 class="mm_strapline">
				<b>환불 계좌 관리</b>
			</h6>
			<div
				v-if="refundAccountAPI === null"
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
			<div
				v-else
				class="mm_order-refund"
			>
				<p class="text_bank">
					{{ refundAccountAPI?.refund_account?.bank_name }}
				</p>
				<p class="text_name">
					{{ refundAccountAPI?.refund_account?.owner_name }}
				</p>
				<p>{{ refundAccountAPI?.refund_account?.account_number }}</p>
				<router-link
					class="mm_btn T=xs T=dark"
					:to="{ name: 'MyInfoRefundRegister' }"
				>
					<b>변경하기</b><i class="ico_link T=sm"></i>
				</router-link>
			</div>
			<div class="mm_note">
				<ul>
					<li>입력하신 계좌 정보는 환불 목적으로만 이용되고 있습니다.</li>
				</ul>
			</div>
		</section>
	</div>

	<EasypayPaymentNote
		v-if="(configFeature.active_easypays.length ?? NaN) > 0 && feature.easypay._is"
		:easypay-methods="easypayMethods"
	></EasypayPaymentNote>
</template>