<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const listAPI = ref<ProductReviewZoomImageListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_REVIEW_ZOOM_IMAGES`, ref: listAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>포토리뷰</b></h1>
		</template>

		<template #content>
			<div class="m_popup-image-detail">
				<ul>
					<li
						v-for="image in listAPI?.image_urls"
						:key="image"
					>
						<i>
							<LazyloadMUI
								:_tag="'img'"
								:_src="image"
							></LazyloadMUI>
						</i>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>