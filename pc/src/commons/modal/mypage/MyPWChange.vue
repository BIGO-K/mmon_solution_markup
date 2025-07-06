<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>비밀번호 변경</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-my-pw">
				<h3 class="mm_heading">
					<b>변경하실 비밀번호를 입력해주세요</b>
				</h3>
				<h6 class="mm_text-label">
					<b>현재 비밀번호</b>
				</h6>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-pw"
					>
						<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
					</button>
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="password"
							class="textfield"
							data-text
							maxlength="16"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">현재 비밀번호를 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>새 비밀번호</b>
				</h6>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-pw"
					>
						<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
					</button>
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="password"
							class="textfield"
							data-text
							maxlength="16"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">새 비밀번호를 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>새 비밀번호 확인</b>
				</h6>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-pw"
					>
						<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
					</button>
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="password"
							class="textfield"
							data-text
							maxlength="16"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">비밀번호를 한번 더 입력하세요</span>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>확인하기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>