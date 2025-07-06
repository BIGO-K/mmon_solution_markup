<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const listAPI = ref<RaffleListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_RAFFLES`, ref: listAPI },
	]);

	const today = new Date();
	const deviceTextMap: Record<RaffleDeviceType, string> = {
		PC: `PC`,
		M_WEB: `모바일 WEB`,
		M_APP: `APP`
	};

</script>

<template>
	<div class="mm_inner">
		<div class="m_raffle">
			<h3 class="mm_title">
				<b>래플</b>
				<a
					class="btn_guide"
					href="#"
				>
					<b class="mm_ir-blind">래플 안내</b><i class="ico_help-guide"></i>
				</a>
			</h3>

			<None v-if="listAPI != null && listAPI.raffle_list.length < 1">
				등록된 래플이 없습니다
			</None>

			<template v-else-if="$route.query.type === 'skeleton'">
				<!-- 래플 상품리스트 -->
				<div class="mm_product-list T=skeleton m_raffle-list">
					<ul>
						<li
							v-for="i in 8"
							:key="i"
						>
							<div class="mm_product-item">
								<i class="image_product"></i>
								<div class="mm_product-item-info">
									<p class="text_brand"></p>
									<p class="text_product"></p>
									<p class="text_price"></p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</template>

			<template v-else>
				<!-- 래플 상품리스트 -->
				<div class="mm_product-list m_raffle-list">
					<ul>
						<li
							v-for="item in listAPI?.raffle_list"
							:key="item.id"
						>
							<div class="mm_product-item">
								<router-link :to="{ name: 'ProductDetailRaffle', params: { id: item.id } }">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="'/public/images/dummy/prod_x2_3.png'"
											></LazyloadMUI>
										</div>
										<p
											v-if="item.goods.is_only_adult"
											class="text_adult"
										>
											<b class="mm_ir-blind">미성년자 구매불가</b>
											<i class="ico_adult"></i>
										</p>
										<p class="text_raffle">
											<strong>42<span>:</span>30<span>:</span>17</strong><b><span>{{ item.total_entry_count }}</span>명 참여중</b>
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
									<!-- 진행 예정 -->
									<template v-if="today < new Date(item.start_at)">
										<b class="mm_btn T=sm T=line T=dark">진행 예정</b>
									</template>

									<!-- 종료-->
									<template v-else-if="today > new Date(item.end_at)">
										<!-- 래플 종료 -->
										<template v-if="today > new Date(item.buy_end_at)">
											<a class="mm_btn T=sm"><b>래플 종료</b></a>
											<a
												class="btn_winner"
												href="#"
											>
												<b>당첨자 보기</b><i class="ico_link T=sm"></i>
											</a>
										</template>

										<template v-else>
											<!-- 응모마감 - 발표예정 -->
											<b
												v-if="!item.is_confirmed_winner"
												class="mm_btn T=sm T=line T=dark"
											>
												05.06 (금) 17:00 당첨자 발표 예정
											</b>

											<!-- 응모마감 - 발표, 구매 -->
											<a
												v-else
												class="mm_btn T=sm T=primary"
												href="#"
											>
												<b>당첨 결과 확인하기</b>
											</a>
										</template>
									</template>

									<!-- 응모중 - 응모 디바이스 설정시 -->
									<template v-else-if="!item.available_device_list.includes(`PC`)">
										<!-- <b class="mm_btn T=sm T=line T=dark">모바일 WEB과 APP에서만 응모 가능</b> -->
										<b class="mm_btn T=sm T=line T=dark">{{ `${item.available_device_list.map((__type) => deviceTextMap[__type]).join(`과 `)}에서만 응모 가능` }}</b>
									</template>

									<!-- 응모 -->
									<template v-else>
										<!-- 응모완료 -->
										<a
											v-if="item.is_entry"
											class="mm_btn T=sm"
										>
											<b>응모 완료</b>
										</a>

										<!-- 응모하기 -->
										<router-link
											v-else
											class="mm_btn T=sm T=primary"
											:to="{ name: 'ProductDetailRaffle', params: { id: item.id } }"
										>
											<b>응모하기</b>
										</router-link>
									</template>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<!-- 종료된 래플 전체보기 -->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<router-link
							class="mm_btn T=line T=dark"
							:to="{ name: 'RaffleFinList' }"
						>
							<b>종료된 래플 전체보기</b><i class="ico_link"></i>
						</router-link>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style src="./_raffle.scss" lang="scss"></style>