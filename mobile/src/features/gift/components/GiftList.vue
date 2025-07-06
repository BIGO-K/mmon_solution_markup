<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	// defineProps<{
	// 	templates: GiftList[];
	// }>();

	const giftDetailAPI = ref<ProductGiftDetailAPI>();

	Api.getAll([
		{ key: `SHOPPING_GIVEAWAY_DETAIL`, ref: giftDetailAPI }
	]);
</script>

<template>
	<ul class="mm_gift-list">
		<li>
			<input
				type="radio"
				name="dev_radio-gift"
				data-radio
			>
			<div class="mm_gift-item">
				<i class="ico_form-radio T=circle"></i>
				<figure>
					<LazyloadMUI
						class="mm_bg-cover image_gift"
						:_src="giftDetailAPI?.image_url"
						:alt="giftDetailAPI?.image_alt"
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
				<div class="mm_btn_box">
					<div class="mm_rside">
						<router-link
							class="btn_gift-info"
							:to="{ name: 'ProductGiftTarget' }"
						>
							<b>지급대상확인</b><i class="ico_link T=xs"></i>
						</router-link>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

