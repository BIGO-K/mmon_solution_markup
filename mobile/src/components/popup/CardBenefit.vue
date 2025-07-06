<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const cardAPI = ref<CardInterestAPI>();

	// api
	Api.getAll([
		{ key: `CARD_INSTALLMENT`, ref: cardAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>카드사별 혜택</b></h1>
		</template>

		<template #content>
			<div class="m_popup-card">
				<!-- 무이자할부안내 -->
				<section>
					<h3 class="mm_strapline">
						<b>무이자 할부 안내</b>
					</h3>

					<!-- 내용없음 -->
					<p
						v-if="cardAPI && cardAPI?.interest_info.interest_free_list.length < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>등록된 무이자 할부가 없습니다
					</p>

					<ul v-else>
						<li
							v-for="card in cardAPI?.interest_info.interest_free_list"
							:key="card.card_code"
						>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="card.image_url"
								:_is-error-image="false"
								:title="card.image_alt"
							></LazyloadMUI>
							<p v-html="card.info"></p>
							<span>{{ cardAPI?.interest_info.display_start_at }} ~ {{ cardAPI?.interest_info.display_end_at }}</span>
						</li>
					</ul>
				</section>

				<!-- 부분무이자할부안내 -->
				<section>
					<h3 class="mm_strapline">
						<b>부분 무이자 할부 안내</b>
					</h3>

					<!-- 내용없음 -->
					<p
						v-if="cardAPI && cardAPI?.interest_info.partial_interest_list.length < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>등록된 부분 무이자 할부가 없습니다
					</p>

					<ul v-else>
						<li
							v-for="card in cardAPI?.interest_info.partial_interest_list"
							:key="card.card_code"
						>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="card.image_url"
								:_is-error-image="false"
								:title="card.image_alt"
							></LazyloadMUI>
							<p v-html="card.info"></p>
							<span>{{ cardAPI?.interest_info.display_start_at }} ~ {{ cardAPI?.interest_info.display_end_at }}</span>
						</li>
					</ul>
				</section>
			</div>
		</template>
	</LayoutPopup>
</template>