<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const orderListAPI = ref<OrderListAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<OrderListAPI>(`MEMBER_ORDER_LIST`, orderListAPI);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<p
		v-if="(orderListAPI?.orders.length ?? NaN) < 1"
		class="mm_text-none"
	>
		<i class="ico_text-none"></i>주문 내역이 없습니다
	</p>

	<!-- 주문목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in orderListAPI?.orders"
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
											<p class="text_status">{{ item.order_status_label }}</p>
											<p class="text_brand">{{ item.goods.brand_name }}</p>
											<p class="text_product">{{ item.goods.name }}</p>
											<p class="text_price"><strong>{{ item.paid_price + item.point_used }}</strong></p>
											<p class="text_option">{{ item.goods.option_name }}</p>
										</figcaption>
									</figure>
								</a>
								<div
									v-if="item.cancelable || item.receipt_confirmable || item.delivery_trackable || item.exchangeable || item.returnable || item.purchase_confirmable || item.review_writable"
									class="mm_product-item-footer"
								>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<a
												v-if="item.cancelable"
												class="mm_btn T=sm T=line"
												href="#"
											>
												<b>주문취소</b>
											</a>
											<button
												v-if="item.receipt_confirmable"
												type="button"
												class="mm_btn T=sm"
											>
												<b>수취확인</b>
											</button>
											<a
												v-if="item.delivery_trackable"
												class="mm_btn T=sm T=line T=variable"
												href="#"
												target="_blank"
												title="새 창 열림"
											>
												<b>배송조회</b>
											</a>
											<a
												v-if="item.exchangeable"
												class="mm_btn T=sm T=line"
												href="#"
											>
												<b>교환신청</b>
											</a>
											<a
												v-if="item.returnable"
												class="mm_btn T=sm T=line"
												href="#"
											>
												<b>반품신청</b>
											</a>
											<a
												v-if="item.purchase_confirmable"
												class="mm_btn T=sm T=variable"
												href="#"
											>
												<b>구매확정</b>
											</a>
											<a
												v-if="_isLogin && item.review_writable"
												class="mm_btn T=sm T=line T=variable"
												href="#"
											>
												<b>리뷰 쓰기</b></a>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</div>
</template>