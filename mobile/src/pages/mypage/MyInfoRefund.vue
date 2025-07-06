<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const refundAccountAPI = ref<RefundAccountAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<RefundAccountAPI>(`MEMBER_REFUND_ACCOUNT`, refundAccountAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>환불 계좌 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_myaccount">
				<template v-if="refundAccountAPI?.refund_account === null">
					<p class="mm_text-none">
						<i class="ico_text-none"></i>등록된 환불계좌가 없습니다
					</p>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<router-link
								class="mm_btn T=primary"
								:to="{ name: 'MyInfoRefundRegister' }"
							>
								<b>등록하기</b>
							</router-link>
						</div>
					</div>
				</template>
				<template v-else>
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
						<b>은행명</b>
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
									class="mm_btn T=line T=light"
								>
									<b>삭제하기</b>
								</button>
								<router-link
									class="mm_btn T=primary"
									:to="{ name: 'MyInfoRefundRegister' }"
								>
									<b>변경하기</b>
								</router-link>
							</div>
						</div>
					</div>
				</template>
				<div class="mm_note">
					<ul>
						<li>환불 계좌를 등록하시면 추후 이용 시에도 별도의 입력없이 이용 하실 수 있습니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>