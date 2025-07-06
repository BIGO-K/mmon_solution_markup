<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>비회원 주문조회</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-sign-inquiry">
				<h6 class="mm_text-label">
					<b>이름</b>
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
						<span class="text_placeholder">이름을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>주문번호</b>
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
						<span class="text_placeholder">주문번호를 입력하세요</span>
					</label>
				</div>

				<!-- 하단버튼 -->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>비회원 주문조회</b>
						</button>
					</div>
				</div>

				<div class="m...inquiry-cs">
					<strong>고객센터<i class="ico_cs"></i></strong>
					<p><strong>1588 - 0000</strong><br> 월 - 금 10:00~17:00 (점심시간 12:00~13:30)<br> 토, 일 공휴일 휴무</p>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>