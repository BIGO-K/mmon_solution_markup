<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>환불 계좌 등록</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-my-account">
				<h6 class="mm_text-label">
					<b>예금주명</b>
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
						<span class="text_placeholder">예금주명을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>입금은행</b>
				</h6>
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>입금은행을 선택하세요</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>계좌번호</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">계좌번호를 입력하세요</span>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>변경하기</b>
						</button>
					</div>
				</div>
				<div class="mm_note">
					<ul>
						<li>환불 계좌를 등록하시면 추후 이용시에도 별도의 입력없이 이용하실 수 있습니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>