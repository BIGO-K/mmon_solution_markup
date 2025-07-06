<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const noticeDetailAPI = ref<CsNoticeDetailAPI>();

	// api
	Api.getAll([
		{ key: `CS_NOTICE`, ref: noticeDetailAPI },
	]);
</script>

<template>
	<div class="m_cs-notice-detail">
		<div class="m...detail-head">
			<h3><b>{{ noticeDetailAPI?.title }}</b></h3>
			<span class="text_date">{{ noticeDetailAPI?.created_at }}</span>
		</div>
		<div class="m...detail-content">
			<div
				class="mm_editor"
				v-html="noticeDetailAPI?.contents"
			></div>
		</div>
		<div class="mm_foot">
			<div class="mm_btn_box">
				<router-link
					class="mm_btn T=line T=dark"
					:to="{ name: 'CsNotice' }"
				>
					<b>목록으로</b>
				</router-link>
			</div>
		</div>
	</div>
</template>