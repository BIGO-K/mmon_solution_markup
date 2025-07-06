<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>배송지 변경</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-address">
				<h6 class="mm_text-label">
					<b>받는 사람</b>
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
							maxlength="10"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">받는 사람을 입력하세요(필수입력)</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
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
							maxlength="11"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호를 입력하세요(필수입력, 숫자만 입력)</span>
					</label>
				</div>
				<div class="mm_form_mix-address">
					<h6 class="mm_text-label">
						<b>주소</b>
					</h6>
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
									readonly
								>
								<i class="bg_text"></i>
								<span class="mm_ir-blind text_placeholder">우편번호</span>
							</label>
						</div>
						<a
							class="mm_btn T=dark"
							href="#"
						>
							<b>우편번호 찾기</b>
						</a>
					</div>
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
								readonly
							>
							<i class="bg_text"></i>
							<span class="mm_ir-blind text_placeholder">검색주소</span>
						</label>
					</div>
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
							<span class="text_placeholder">상세 주소를 입력하세요(필수입력)</span>
						</label>
					</div>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>등록하기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>