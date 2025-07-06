<script setup lang="ts">
	import LayoutModal from '@/components/layout/LayoutModal.vue';
</script>

<template>
	<LayoutModal
		:is-title="false"
		:modal-class="'m_modal-join-benefit'"
	>
		<template #content>
			<h3><b>회원가입 완료<br> 적립금이 지급되었습니다!</b></h3>
			<div class="m...benefit-content">
				<p>엠몬스타가 드리는 적립금으로<br> 즐거운 쇼핑하세요</p>
				<dl class="m...benefit-content-point">
					<dt>적립금</dt>
					<dd><strong>5,000</strong></dd>
				</dl>
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
		</template>
	</LayoutModal>
</template>