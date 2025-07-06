<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>비밀번호 변경</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign">
				<div class="m_popup-sign-title">
					<h3><b>정보 보호를 위해 6개월마다<br> <strong class="mm_text-variable">비밀번호를 변경해주세요</strong></b></h3>
					<b>‘다음에 변경’ 시 1개월간 안내를 받지않습니다</b>
				</div>
				<h5 class="mm_text-label">
					<b>현재 비밀번호</b>
				</h5>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">현재 비밀번호를 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>새 비밀번호</b>
				</h5>
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
				<h5 class="mm_text-label">
					<b>새 비밀번호 확인</b>
				</h5>
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
							<b>비밀번호 변경하기</b>
						</button>
						<button
							type="button"
							class="mm_btn T=line"
						>
							<b>다음에 변경하기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>