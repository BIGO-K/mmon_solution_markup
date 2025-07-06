<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const editInfoAPI = ref<MyEditInfoAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<MyEditInfoAPI>(`MEMBER_EDIT_INFO`, editInfoAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>회원정보 수정</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-myinfo">
				<h6 class="mm_text-label">
					<b>아이디</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ editInfoAPI?.login_id }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ editInfoAPI?.phone }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<b>휴대폰 번호 변경</b>
				</a>
				<h6 class="mm_text-label">
					<b>이름</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ editInfoAPI?.name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<b>이름 변경</b>
				</a>
				<h6 class="mm_text-label">
					<b>비밀번호</b>
				</h6>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">• • • • • • • •</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
				>
					<b>비밀번호 변경</b>
				</a>
				<h6 class="mm_text-label">
					<b>이메일</b>
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
							:value="`${editInfoAPI?.email}`"
						><i class="bg_text"></i>
						<span class="text_placeholder">이메일을 입력하세요</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=line T=dark"
				>
					<b>중복 확인</b>
				</button>
				<h6 class="mm_text-label">
					<b>생일</b>
				</h6>
				<div class="mm_form_mix-linked">
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">5</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<span class="text_readonly">14</span>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<h6 class="mm_text-label">
					<b>마케팅 수신 동의</b>
				</h6>
				<div class="mm_check-list">
					<ul>
						<li>
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check
									:checked="editInfoAPI?.is_email_receive"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check
									:checked="editInfoAPI?.is_sms_receive"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SNS</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<div class="mm_note">
					<ul>
						<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
						<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
					</ul>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>수정 완료</b>
						</button>
						<router-link
							class="btn_withdraw"
							:to="{ name: 'MyInfoWithdraw' }"
						>
							<b>회원탈퇴</b>
						</router-link>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>