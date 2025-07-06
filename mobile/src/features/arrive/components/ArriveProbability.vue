<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const probabilityAPI = ref<ProductDetailAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BASIC_INFO`, ref: probabilityAPI },
	]);
</script>

<template>
	<!-- 배송확률 -->
	<div class="m...info-ship">
		<p class="text_ship">
			<i class="ico_ship"></i><strong>{{ probabilityAPI?.goods.delivery_info.shipping_arrival_probability.average_date }}</strong> 도착 확률<strong>{{ probabilityAPI?.goods.delivery_info.shipping_arrival_probability.probability }}<sub>%</sub></strong>
		</p>
		<p class="text_note">
			오후 3시 이전 주문시 당일 출고 가능
		</p>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';

	.m_prodetail {
		&-head-info {
			#{escape('.m...info-ship')} {
				margin-top: 7px;

				> .text_ship {
					padding: 11px;
					height: 50px;
					border: 1px solid #eee;
					border-radius: 1px;
					background-color: #fafafa;
					font-size: 1.4rem;
					@include mixin.font('1.4rem/2.6rem');

					strong {
						font-variation-settings: 'wght' 700;

						~ strong {
							margin-left: 11px;
							vertical-align: -1px;
							@include mixin.font(#4457a7 '1.6rem');
						}

						sub {
							font-size: 1.4rem;
						}
					}

					.ico_ship {
						margin-right: 10px;
						padding: 7px 6px;
						width: 26px;
						height: 26px;
						border-radius: 100%;
						background-color: #888;

						&::before {
							width: 13px;
							height: 11px;
							background-color: #f0f7f7;
						}
					}
				}

				.text_note {
					margin-top: 3px;
					padding: 0 6px;
					@include mixin.font(#888 '1.1rem/2rem');
				}

				+ dl {
					margin-top: 12px;
				}
			}
		}
	}
</style>