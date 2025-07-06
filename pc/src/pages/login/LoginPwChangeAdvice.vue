<script setup lang="ts">

</script>

<template>
	<div class="m_sign">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>비밀번호 변경</b>
			</h3>
			<p>정보 보호를 위해 6개월마다 <span class="mm_text-variable">비밀번호를 변경해주세요</span><small>‘다음에 변경’시 1개월간 안내를 받지않습니다</small></p>
		</div>
		<!-- 비밀번호 변경 입력 -->
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

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<a
					class="mm_btn T=line"
					href="#"
				>
					<b>다음에 변경하기</b>
				</a>
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>비밀번호 변경하기</b>
				</button>
			</div>
		</div>
	</div>
</template>