<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>비밀번호 재입력</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-myinfo">
				<h3 class="mm_title">
					<b>개인정보 보호를 위해<br> <strong>비밀번호를 입력해주세요</strong></b>
				</h3>
				<h6 class="mm_text-label">
					<b>비밀번호</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">비밀번호를 입력하세요</span>
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
	</LayoutPopup>
</template>