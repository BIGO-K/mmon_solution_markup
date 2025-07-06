<script setup lang="ts">

</script>

<template>
	<div class="m_my-info">
		<h5 class="mm_heading">
			<b>회원정보 관리</b>
		</h5>
		<div class="m_my-info-inner">
			<h6 class="m_my-info-title">
				<b>비밀번호 재입력</b><small>정보 보호를 위해 비밀번호를 입력해주세요</small>
			</h6>
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
					><i class="bg_text"></i>
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
	</div>
</template>