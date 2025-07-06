<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<RaffleEndListAPI>();

	// api
	Api.getAll([
		{ key: `RAFFLES_ENDED`, ref: listAPI },
	]);
</script>

<template>
	<div class="mm_inner">
		<div class="m_raffle">
			<h3 class="mm_title">
				<b>종료된 래플</b>
			</h3>

			<!-- 종료된 래플 상품리스트 -->
			<div class="mm_product-list m_raffle-list">
				<ul>
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
					>
						<div class="mm_product-item">
							<router-link :to="{ name: 'ProductDetailRaffle', params: { id: item.id } }">
								<figure>
									<div class="m_raffle-list-dim"></div>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_6.png'"
										></LazyloadMUI>
									</div>
									<p class="text_raffle">
										<strong>00<span>:</span>00<span>:</span>00</strong><b><span>{{ item.total_entry_count }}</span>명 참여</b>
									</p>
									<figcaption>
										<p class="text_brand">
											{{ item.goods.brand_name }}
										</p>
										<p class="text_product">
											{{ item.goods.name }}
										</p>
										<p class="text_sale">
											{{ item.goods.sale_rate }}%
										</p>
										<p class="text_price">
											<strong>{{ item.goods.price }}</strong>
											<del>{{ item.goods.base_discounted_price }}</del>
										</p>
									</figcaption>
								</figure>
							</router-link>
							<div class="mm_btn_box">
								<a class="mm_btn T=sm"><b>래플 종료</b></a>
								<a
									class="btn_winner"
									href="#"
								>
									<b>당첨자 보기</b><i class="ico_link T=xs"></i>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<Pagination
				v-if="listAPI?.paginator"
				:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</div>
	</div>
</template>

<style src="./_raffle.scss" lang="scss"></style>