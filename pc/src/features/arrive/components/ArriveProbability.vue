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
	<dd class="text_arrive">
		<i class="ico_ship"></i>
		<strong>{{ probabilityAPI?.goods.delivery_info.shipping_arrival_probability.average_date }}</strong>
		도착 확률
		<strong>{{ probabilityAPI?.goods.delivery_info.shipping_arrival_probability.probability }}<sub>%</sub></strong>
		<small>오후 3시 이전 주문시 당일 출고 가능</small>
	</dd>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';

	.m_prodetail-head-info {
		.text_arrive {
			position: relative;
			margin: 10px 0 10px -1px;
			padding: 14px 19px;
			height: 68px;
			border: 1px solid #e6e6e6;
			background-color: #fafafa;
			@include mixin.font(#4a4a4a '1.7rem/3.8rem');

			.ico_ship {
				margin-right: 10px;
				padding-top: 12px;
				width: 38px;
				height: 38px;
				border-radius: 38px;
				background-color: #888;
				text-align: center;

				&::before {
					width: 19px;
					height: 14px;
					background-color: #fff;
				}
			}

			strong {
				margin-right: 4px;
				@include mixin.font(const.$color_text_base v_700);

				~ strong {
					margin: 0 18px 0 10px;
					@include mixin.font(#4457a7 '2rem');

					sub {
						font-size: 1.7rem;
					}
				}
			}

			small {
				vertical-align: 0;
				@include mixin.font(#7b7b7b '1.3rem');
			}
		}
	}

</style>