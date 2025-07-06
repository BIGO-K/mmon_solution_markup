<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>본인인증</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-certify">
				<p class="text_certify">
					서비스 이용을 위해<br> <strong class="mm_text-variable">본인인증</strong>이 필요합니다
				</p>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=primary"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<b>휴대폰 인증하기</b>
						</a>
					</div>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>