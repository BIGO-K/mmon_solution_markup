<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const refundAccountAPI = ref<RefundAccountAPI>();
	const banksAPI = ref<BanksAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<RefundAccountAPI>(`MEMBER_REFUND_ACCOUNT`, refundAccountAPI);
	Api.get<BanksAPI>(`CONF_BANK_CODES`, banksAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1 v-if="refundAccountAPI?.refund_account === null">
				<b>환불 계좌 등록</b>
			</h1>
			<h1 v-else>
				<b>환불 계좌 변경</b>
			</h1>
		</template>

		<template #content>
			<div class="mm_inner m_myaccount">
				<h6 class="mm_text-label">
					<b>예금주명</b>
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
							:value="refundAccountAPI?.refund_account != null ? `${refundAccountAPI.refund_account.owner_name}` : ''"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">예금주명을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>은행명</b>
				</h6>
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>은행을 선택하세요</option>
							<option
								v-for="bank in banksAPI?.bank_codes"
								:key="bank.code"
								:selected="(refundAccountAPI?.refund_account != null && refundAccountAPI?.refund_account.bank_name === bank.label) ? true : false"
							>{{ bank.label }}</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>계좌번호</b>
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
							:value="refundAccountAPI?.refund_account != null ? `${refundAccountAPI.refund_account.account_number}` : ''"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">계좌번호를 입력하세요(숫자만 입력)</span>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							v-if="refundAccountAPI?.refund_account === null"
							type="button"
							class="mm_btn T=primary"
						>
							<b>등록하기</b>
						</button>
						<button
							v-else
							type="button"
							class="mm_btn T=primary"
						>
							<b>변경하기</b>
						</button>
					</div>
				</div>
				<div class="mm_note">
					<ul>
						<li>환불 계좌를 등록하시면 추후 이용 시에도 별도의 입력없이 이용 하실 수 있습니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>