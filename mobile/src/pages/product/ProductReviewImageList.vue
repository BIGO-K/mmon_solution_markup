<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const photoListAPI = ref<ProductReviewPhotoListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_PHOTO_REVIEWS`, ref: photoListAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>포토리뷰</b></h1>
		</template>

		<template #content>
			<div class="m_popup-review-photo">
				<ul>
					<li
						v-for="item in photoListAPI?.paginator.data"
						:key="item.id"
					>
						<router-link :to="{ name: 'ProductPhotoReviewDetail', params: { id: item.id } }">
							<LazyloadMUI
								class="mm_bg-cover image_review"
								:_src="item.image_url"
							></LazyloadMUI>
							<b class="mm_ir-blind">{{ item.writer_masking_id }}님의 포토리뷰</b>
						</router-link>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>