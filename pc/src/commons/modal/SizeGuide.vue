<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-size'">
		<template #header>
			<h2><b>사이즈 가이드</b></h2>
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
						:_tag="'img'"
						:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
						alt=""
					></LazyloadMUI>
				</i>
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