<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>본인인증</b></h1>
		</template>

		<template #content>
			<div class="m_popup-certify">
				<h2 class="mm_title">
					<b>서비스 이용을 위해<br> <strong class="mm_text-variable">본인인증</strong>이 필요합니다</b>
				</h2>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=lg T=primary"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<b>휴대폰 인증</b>
						</a>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>