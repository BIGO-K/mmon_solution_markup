<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-prodetail-zoom'">
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
			<div class="m_prodetail-thumbnail">
				<i class="image_thumbnail">
					<LazyloadMUI
						tag="'img'"
						:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
						alt=""
					></LazyloadMUI>
				</i>
				<!-- TODO goodsReviewZoomImages.json 연결 맞는지 확인 후 연결 ! -->
				<div class="m_prodetail-thumbnail-list">
					<ul class="mm_flex T=equal">
						<li>
							<button
								type="button"
								class="btn_thumbnail"
							>
								<LazyloadMUI
									class="mm_bg-cover"
									:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
								></LazyloadMUI>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_thumbnail"
							>
								<LazyloadMUI
									class="mm_bg-cover"
									:_src="'/public/images/dummy/review_2.png'"
								></LazyloadMUI>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_thumbnail"
							>
								<LazyloadMUI
									class="mm_bg-cover"
									:_src="'/public/images/dummy/review_3.png'"
								></LazyloadMUI>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>