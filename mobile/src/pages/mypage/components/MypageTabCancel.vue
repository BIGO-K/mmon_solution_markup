<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const cancelListAPI = ref<CancelListAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<CancelListAPI>(`ORDER_CANCEL_LIST`, cancelListAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<p
		v-if="(cancelListAPI?.cancel_orders.length ?? NaN) < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>취소 내역이 없습니다
	</p>

	<!-- 주문목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in cancelListAPI?.cancel_orders"
			:key="order.order_id"
			class="mm_order-item"
		>
			<h5>
				<b>{{ order.ordered_at }}</b>
				<strong>주문번호: {{ order.order_id }}</strong>
			</h5>
			<a
				class="btn_detail"
				href="#"
			>
				<b>주문 상세보기</b><i class="ico_link"></i>
			</a>
			<div
				v-for="seller in order.packs[0].sellers"
				:key="seller.id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
					<a
						v-if="_isLogin"
						href="#"
					><b>판매자 문의하기</b></a>
				</div>
				<div class="mm_product-list T=sm">
					<ul>
						<li
							v-for="item in seller.order_items"
							:key="item.id"
						>
							<div class="mm_product-item">
								<a href="#">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.goods.thumbnail_url"
										></LazyloadMUI>
										<figcaption>
											<p class="text_status">
												{{ item.order_status_label }}
												<b
													v-if="item.refund_status_label != ''"
													class="text_refund"
												>{{ item.refund_status_label }}</b>
											</p>
											<p class="text_brand">{{ item.goods.brand_name }}</p>
											<p class="text_product">{{ item.goods.name }}</p>
											<p class="text_price"><strong>{{ item.paid_price + item.point_used }}</strong></p>
											<p class="text_option">{{ item.goods.option_name }}</p>
										</figcaption>
									</figure>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</div>
</template>