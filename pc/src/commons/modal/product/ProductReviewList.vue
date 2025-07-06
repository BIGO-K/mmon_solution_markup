<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import ModalLayout from '@/components/Modal.vue';

	const photoListAPI = ref<ProductReviewPhotoListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_PHOTO_REVIEWS`, ref: photoListAPI },
	]);
</script>

<template>
	<ModalLayout :modal-class="'m_modal-prodetail-photo'">
		<template #header>
			<h2><b>포토리뷰</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<!-- 포토리뷰 리스트 -->
			<div class="m...photo-list">
				<ul>
					<li
						v-for="item in photoListAPI?.paginator.data"
						:key="item.id"
					>
						<a href="#">
							<b class="mm_ir-blind">{{ item.writer_masking_id }}님의 포토리뷰</b>
							<LazyloadMUI
								class="mm_bg-cover image_review"
								:_src="'/public/images/dummy/prod_review_1.jpg'"
							></LazyloadMUI>
						</a>
					</li>
				</ul>
			</div>
			<Pagination
				v-if="photoListAPI != null && photoListAPI.paginator.total > 0"
				:total-page="Math.ceil(photoListAPI.paginator.total / photoListAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</template>
	</ModalLayout>
</template>