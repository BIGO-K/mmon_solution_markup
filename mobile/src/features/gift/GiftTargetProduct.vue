<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import Pagination from '@/components/Pagination.vue';

	const giftDetailAPI = ref<ProductGiftDetailAPI>();
	const giftTargetProductAPI = ref<GiftTargetProductAPI>();

	Api.getAll([
		{ key: `SHOPPING_GIVEAWAY_DETAIL`, ref: giftDetailAPI },
		{ key: `SHOPPING_GIVEAWAY_DETAIL_TARGET_GOODS`, ref: giftTargetProductAPI }
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>사은품 지급 대상</b></h1>
		</template>

		<template #content>
			<div class="m_popup-gift-target">
				<div class="mm_gift-item">
					<figure>
						<LazyloadMUI
							class="mm_bg-cover image_gift"
							:_src="giftDetailAPI?.image_url"
						></LazyloadMUI>
						<figcaption>
							<p class="text_name">
								{{ giftDetailAPI?.name }}
							</p>
							<p class="text_condition">
								{{ giftDetailAPI?.condition_label }}
							</p>
							<p class="text_date">
								{{ giftDetailAPI?.start_at.split('T')[0].replaceAll('-', '.') }} ~
								{{ giftDetailAPI?.end_at.split('T')[0].replaceAll('-', '.') }}
							</p>
						</figcaption>
					</figure>
				</div>
				<table>
					<colgroup>
						<col style="width:74px;">
						<col style="width:32%;">
						<col>
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<b>상품</b>
							</th>
							<th scope="col">
								<b>브랜드명</b>
							</th>
							<th scope="col">
								<b>상품명</b>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="product in giftTargetProductAPI?.data"
							:key="product.id"
						>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="product.thumbnail_url"
								></LazyloadMUI>
							</td>
							<td><b>{{ product.brand_name }}</b></td>
							<td>
								<p class="text_product">
									{{ product.name }}
								</p>
							</td>
						</tr>
					</tbody>
				</table>

				<Pagination
					v-if="giftTargetProductAPI != null"
					:total-page="Math.ceil(giftTargetProductAPI.total / giftTargetProductAPI.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</div>
		</template>
	</LayoutPopup>
</template>

<style lang="scss">
	@use '../../assets/scss/common/helper/function' as *;
	@use '../../assets/scss/common/helper/mixin';
	@use '../../assets/scss/common/setting/const';
	@use '../../assets/scss/style/setting/var';

	.m_popup-gift-target {
		padding: 32px 17px 0;
		@include mixin.font('1.3rem/1.9rem');

		.mm_gift-item {
			padding: 0;
			border: 0;

			.image_gift {
				width: 70px;
			}

			figcaption {
				margin-left: 70px;
				padding-left: 10px;

				> p {
					@include mixin.text-ellipsis(0);
				}

				.text_date {
					margin-top: 6px;
				}
			}
		}

		table {
			margin-top: 27px;
			border-top: 1px solid #d5d5d5;

			th {
				padding: 8px 11px;
				border-bottom: 1px solid #d5d5d5;
				background-color: #fafafa;
			}

			td {
				padding: 11px;
				border-bottom: 1px solid #e6e6e6;
				@include mixin.font(#4a4a4a left);

				> .image_product {
					display: block;

					&::after {
						padding-top: const.$prod_height_base;
						content: '';
					}
				}

				> b {
					margin-left: 2px;
					color: var.$color_text_base;
				}

				.text_product {
					@include mixin.text-ellipsis(3);

					margin-left: 4px;

					.text_foreword {
						margin-right: 3px;
					}
				}
			}
		}

		.mm_pagination {
			margin-top:22px;
		}
	}
</style>