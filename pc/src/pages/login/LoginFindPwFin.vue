<script setup lang="ts">

</script>

<template>
	<div class="m_sign">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>비밀번호 재설정</b>
			</h3>
			<p>인증이 완료되었습니다<small>변경하실 <span class="mm_text-variable">새 비밀번호</span>를 입력해주세요</small></p>
		</div>
		<!-- 비밀번호 재설정 입력 -->
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
				<span class="text_placeholder">영문, 숫자, 특문을 포함하여 10자 이상으로 입력하세요</span>
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
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
					@click="$router.push({
						name: 'LoginPwChangeAdvice',
					})"
				>
					<b>비밀번호 재설정</b>
				</button>
			</div>
		</div>
	</div>
</template>