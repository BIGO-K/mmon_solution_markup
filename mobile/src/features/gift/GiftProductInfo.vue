<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	// import GiftList from '@/features/gift/components/GiftList.vue';
	// TODO mm_gift-list 컴포넌트로 분리해서 사용
	const giftDetailAPI = ref<ProductGiftDetailAPI>();

	// api
	Api.getAll([
		{ key: `SHOPPING_GIVEAWAY_DETAIL`, ref: giftDetailAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>사은품 정보</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-gift">
				<div class="mm_note">
					<ul>
						<li>사은품은 회원 대상으로 지급됩니다.</li>
					</ul>
				</div>
				<!-- (D) 사은품 정보 팝업에서만 지급조건과 지급기간 내용 앞에 "지급조건:", "지급기간:" 문구가 추가됩니다.(다른 페이지 내 사은품 내용에는 추가되지 않습니다.) -->
				<ul class="mm_gift-list">
					<li>
						<div class="mm_gift-item">
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
						</div>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>

<style lang="scss">
	@use '../../assets/scss/common/helper/function' as *;
	@use '../../assets/scss/common/helper/mixin';
	@use '../../assets/scss/common/setting/const';
	@use '../../assets/scss/style/setting/var';

	/** 사은품 정보 */
	.m_popup-gift {
		padding-top: 10px;

		.mm_note {
			padding-left: 3px;
		}

		.mm_gift-list {
			margin-top: 4px;
		}

		.mm_gift-item {
			figcaption {
				> p {
					@include mixin.text-ellipsis(0);
				}
			}
		}
	}
</style>