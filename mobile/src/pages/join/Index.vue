<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>회원가입</b></h1>
		</template>

		<template #content>
			<div class="m_popup-join">
				<router-view></router-view>
			</div>
		</template>
	</LayoutPopup>
</template>