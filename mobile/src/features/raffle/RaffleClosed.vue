<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<RaffleClosedListAPI>();

	// api
	Api.getAll([
		{ key: `RAFFLES_ENDED`, ref: listAPI },
	]);
</script>

<template>
	<LayoutMain>
		<!-- 래플 -->
		<div class="mm_inner">
			<div class="m_raffle T=ra">
				<h3 class="mm_title">
					<b>RAFFLE</b>
					<router-link
						class="btn_guide"
						:to="{ name: 'RaffleGuide' }"
					>
						<b class="mm_ir-blind">래플 안내</b><i class="ico_help-guide"></i>
					</router-link>
				</h3>

				<!-- 종료된 래플 상품리스트 -->
				<div class="m_raffle-list">
					<ul>
						<li
							v-for="item in listAPI?.paginator.data"
							:key="item.id"
						>
							<div class="mm_product-item">
								<!-- <router-link :to="{ name: 'ProductDetailRaffle', params: { id: item.id } }"> -->
								<a href="#">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_1.png'"
										></LazyloadMUI>
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
												{{ `${item.goods.sale_rate}%` }}
											</p>
											<p class="text_price">
												<strong>{{ item.goods.base_discounted_price }}</strong><del><span>{{ item.goods.price }}</span></del>
											</p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<a class="mm_btn T=disabled"><b>래플 종료</b></a>
									<router-link
										class="mm_btn T=primary"
										:to="{ name: 'RaffleWinner' }"
									>
										<b>당첨자 보기</b>
									</router-link>
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
	</LayoutMain>
</template>

<style src="./_raffle.scss" lang="scss"></style>