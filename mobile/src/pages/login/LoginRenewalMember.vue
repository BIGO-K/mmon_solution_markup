<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>M.Monstar 리뉴얼 오픈</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign m_popup-renewal">
				<h5 class="mm_text-label">
					<b>아이디</b>
				</h5>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">아이디를 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>이름</b>
				</h5>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">이름을 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>이메일</b>
				</h5>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">이메일을 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>휴대폰 번호</b>
				</h5>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="tel"
							class="textfield"
							data-text
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호를 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>생년월일</b>
				</h5>
				<div class="mm_form_mix-linked">
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>년</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>월</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>일</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>조회하기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>