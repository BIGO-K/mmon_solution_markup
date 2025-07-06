<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	defineProps<{
		templates: OrderDetailGift[];
	}>();
</script>

<template>
	<!-- 사은품 정보 -->
	<div class="m...detail-gift">
		<h5 class="mm_strapline T=line">
			<b>사은품 정보</b>
		</h5>
		<div class="mm_gift-list">
			<ul>
				<li
					v-for="gift in templates"
					:key="gift.id"
				>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="gift.image_url"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									{{ gift.name }}
								</p>
								<p class="text_condition">
									{{ gift.condition_label }}
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style src="../_gift.scss" lang="scss"></style>
<style lang="scss">
	@use '../../../assets/scss/common/helper/function';

	/** 마이페이지 > 주문상세 */
	.m_my-order-detail {
		#{function.escape('.m...detail-gift')} {
			margin-top: 94px;

			.mm_gift-list {
				ul {
					li {
						width: 378px;
					}
				}
			}

			.mm_gift-item {
				.btn_gift-info::before {
					width: 350px;
				}
			}
		}
	}
</style>