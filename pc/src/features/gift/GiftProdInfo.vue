<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';

	const giftDetailAPI = ref<ProductGiftDetailAPI>();

	// api
	Api.getAll([
		{ key: `SHOPPING_GIVEAWAY_DETAIL`, ref: giftDetailAPI },
	]);
</script>

<template>
	<ModalLayout :modal-class="'m_modal-gift-info'">
		<template #header>
			<h2><b>사은품 정보</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="mm_note">
				<ul>
					<li>사은품은 회원 대상으로 지급됩니다.</li>
				</ul>
			</div>
			<div class="mm_gift-list">
				<ul>
					<!--
						TODO json 데이터 맞는지 확인 필요함.
						shoppingGiveawayDetail.json obj or array 확인 필요
						+ 실섭 데이터 찾지 못함
					-->
					<li>
						<div class="mm_gift-item">
							<figure>
								<LazyloadMUI
									class="mm_bg-cover image_gift"
									:_src="'/public/images/dummy/prod_x1_1.png'"
								></LazyloadMUI>
								<figcaption>
									<p class="text_name">
										{{ giftDetailAPI?.name }}
									</p>
									<p class="text_condition">
										{{ giftDetailAPI?.condition_label }}
									</p>
									<p class="text_date">
										지급기간: {{ giftDetailAPI?.start_at }} ~ {{ giftDetailAPI?.end_at }}
									</p>
								</figcaption>
							</figure>
						</div>
					</li>
				</ul>
			</div>
		</template>
	</ModalLayout>
</template>

<style src="./_gift.scss" lang="scss"></style>