<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const listAPI = ref<ReturnListAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_RETURN_LIST`, ref: listAPI },
	]);

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="listAPI != null && listAPI.return_orders.length < 1"
	>
		반품 내역이 없습니다
	</None>

	<!-- 주문 목록 -->
	<div
		v-else
		class="mm_order-list"
	>
		<article
			v-for="order in listAPI?.return_orders"
			:key="order.return_id"
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
			<section
				v-for="seller in order.packs[0].sellers"
				:key="seller.id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
				</div>
				<ul>
					<li
						v-for="item in seller.order_items"
						:key="item.id"
					>
						<div class="mm_flex">
							<p class="text_status">
								{{ item.order_status_label }}
							</p>
							<div class="mm_product-item T=single">
								<a href="#">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="item.goods.thumbnail_url"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">{{ item.goods.brand_name }}</p>
											<p class="text_product">{{ item.goods.name }}</p>
											<p class="text_option">{{ item.goods.option_name }}</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<p class="text_price">
								<strong>{{ item.paid_price + item.point_used }}</strong>
							</p>
							<div class="mm_btn_box">
								<div class="mm_block">
									<button
										v-if="item.return_cancelable"
										type="button"
										class="mm_btn T=sm T=line T=light"
									>
										<b>반품철회</b>
									</button>
									<a
										v-if="item.return_delivery_trackable"
										class="btn_tracking"
										href="#"
									>
										<b>반송조회</b><i class="ico_link T=circle"></i>
									</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div
					v-if="_isLogin"
					class="mm_btn_box"
				>
					<a
						class="btn_inquiry"
						href="#"
					>
						<b>판매자 문의하기</b><i class="ico_link T=sm"></i>
					</a>
					<a class="mm_btn T=sm T=primary btn_review-write"><i class="ico_review-write"></i><b>리뷰 쓰기</b></a>
				</div>
			</section>
		</article>
	</div>
</template>