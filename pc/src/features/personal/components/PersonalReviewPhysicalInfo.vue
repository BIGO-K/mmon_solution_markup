<script setup lang="ts">

</script>

<template>
	<!-- 신체 정보 입력 -->
	<h5 class="mm_text-label">
		<b>신체 정보 입력<strong class="mm_text-variable">(선택)</strong></b>
	</h5>
	<div class="mm_form_mix-linked">
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
				><i class="bg_text"></i>
				<span class="text_placeholder">키</span>
			</label>
		</div>
		<span class="text_linked">cm</span>
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
				><i class="bg_text"></i>
				<span class="text_placeholder">몸무게</span>
			</label>
		</div>
		<span class="text_linked">kg</span>
		<div class="mm_form-select">
			<label>
				<select data-select>
					<option>발 사이즈</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<span class="text_linked">mm</span>
	</div>
	<div class="mm_note">
		<ul>
			<li>해당 정보는 다른 분들의 사이즈 참고용으로만 사용되고 개인식별정보는 공개되지 않습니다.</li>
		</ul>
	</div>
	<!--// 신체 정보 입력 -->
</template>