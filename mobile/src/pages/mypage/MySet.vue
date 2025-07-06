<script setup lang="ts">
	import LayoutModal from '@/components/layout/LayoutModal.vue';
</script>

<template>
	<LayoutModal :class="'m_modal-myset'">
		<template #title>
			설정
		</template>

		<template #content>
			<div class="mm_btn_box">
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>설정 변경하기</b>
				</a>
				<button
					type="button"
					class="mm_btn T=line btn_logout"
				>
					<b>로그아웃</b>
				</button>
			</div>
		</template>
	</LayoutModal>
</template>