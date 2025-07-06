<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-login-quiescent'">
		<template #header>
			<h2><b>휴면회원 해제안내</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<h3><b>홍길동님의 계정</b><br> <b class="mm_text-variable">휴면이 해제되었습니다</b></h3>
			<div class="m...quiescent-notice">
				<p>회원님의 개인 정보는 ‘개인정보보호법’에 따라 안전하게 분리/보관되고 있었습니다</p>
				<strong>다시 찾아주신 고객님, <b>환영합니다!</b></strong>
			</div>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=dark btn_link"
						href="#"
					>
						<b>쇼핑하러가기</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>