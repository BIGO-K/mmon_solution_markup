<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>회원가입 완료 적립금</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-join-point">
				<h3><b>회원가입 완료<br> 적립금이 지급되었습니다!</b></h3>
				<div class="m...point-content">
					<p>M.MONSTAR가 드리는 적립금으로 즐거운 쇼핑하세요</p>
					<dl>
						<dt>적립금</dt>
						<dd><strong>5,000</strong></dd>
					</dl>
					<p><strong>간편 회원은 본인인증 후 적립금 및 쿠폰을 받으실 수 있어요</strong></p>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=primary btn_link"
							href="#"
						>
							<b>적립금 확인하기</b><i class="ico_link"></i>
						</a>
					</div>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>