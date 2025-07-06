<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';

	const refundAccountAPI = ref<MyRefundAccountAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_REFUND_ACCOUNT`, ref: refundAccountAPI },
	]);
</script>

<template>
	<div class="m_my-info">
		<h5 class="mm_heading">
			<b>회원정보 관리</b>
		</h5>
		<h6 class="mm_strapline T=line">
			<b>환불 계좌 관리</b>
		</h6>
		<template v-if="refundAccountAPI?.refund_account == null">
			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None>등록된 환불 계좌 정보가 없습니다</None>
			<div class="mm_btn_box T=equal">
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>등록하기</b>
				</a>
			</div>
		</template>
		<div
			v-else
			class="m_my-info-inner"
		>
			<h6 class="mm_text-label">
				<b>예금주명</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ refundAccountAPI?.refund_account.owner_name }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>입금은행</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ refundAccountAPI?.refund_account.bank_name }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>계좌번호</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ refundAccountAPI?.refund_account.account_number }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=equal">
						<button
							type="button"
							class="mm_btn T=line"
						>
							<b>삭제하기</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>변경하기</b>
						</button>
					</div>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>환불 계좌를 등록하시면 추후 이용시에도 별도의 입력없이 이용하실 수 있습니다.</li>
				</ul>
			</div>
		</div>
	</div>
</template>