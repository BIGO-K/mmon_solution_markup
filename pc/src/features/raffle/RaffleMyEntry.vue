<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const raffleAPI = ref<RaffleEntryAPI>();
	const raffleEndAPI = ref<RaffleEntryAPI>();

	const getApiRaffleEntry = (__list: typeof raffleAPI, __isEnd: number): void => {

		// api
		Api.getAll([
			{ key: `MYPAGE_RAFFLE_ENTRY_LIST`, ref: __list, query: `?is_end=${__isEnd}` },
		]);

	};

	getApiRaffleEntry(raffleAPI, 0);
	getApiRaffleEntry(raffleEndAPI, 1);
</script>

<template>
	<!-- 본문 내용 -->
	<div class="mm_page-content-body">
		<div class="m_my-raffle">
			<h5 class="mm_heading">
				<b>래플 응모 내역</b>
			</h5>

			<!-- 진행중인 래플 응모 내역 -->
			<section class="m_my-raffle-on">
				<h6 class="mm_strapline T=line">
					<b>진행중인 래플 응모 내역</b>
				</h6>
				<None v-if="raffleAPI != null && raffleAPI.raffle_list.length < 1">
					응모 내역이 없습니다
				</None>
				<ul v-else>
					<li
						v-for="raffle in raffleAPI?.raffle_list"
						:key="raffle.id"
					>
						<div class="mm_product-item T=single">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="raffle.goods.thumbnail_url"
										></LazyloadMUI>
									</div>
									<figcaption>
										<b
											v-if="raffle.progress_status === '응모마감'"
											class="mm_tag T=gray"
										>응모마감</b>
										<b
											v-else
											class="mm_tag T=support"
										>{{ raffle.progress_status }}</b>
										<p class="text_brand">{{ raffle.goods.brand_name }}</p>
										<p class="text_product">{{ raffle.goods.name }}</p>
									</figcaption>
								</figure>
							</a>
						</div>
						<a
							v-if="raffle.progress_status === '추첨완료'"
							class="mm_btn T=sm T=primary"
							href="#"
						>
							<b>당첨 결과 확인하기</b>
						</a>
						<b
							v-else
							class="mm_btn T=sm T=line T=dark"
						>{{ raffle.announce_at }} 당첨자 발표 예정</b>
					</li>
				</ul>
			</section>

			<!-- 종료된 래플 응모 내역 -->
			<section class="m_my-raffle-off">
				<h6 class="mm_strapline T=line">
					<b>종료된 래플 응모 내역</b><small>최근 6개월 기준</small>
				</h6>
				<None v-if="raffleEndAPI != null && raffleEndAPI.raffle_list.length < 1">
					응모 내역이 없습니다
				</None>
				<ul v-else>
					<li
						v-for="raffle in raffleEndAPI?.raffle_list"
						:key="raffle.id"
					>
						<div class="mm_product-item T=single">
							<figure>
								<div class="mm_image-scale">
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="raffle.goods.thumbnail_url"
									></LazyloadMUI>
								</div>
								<figcaption>
									<div class="mm_tag-list">
										<b
											v-if="!raffle.is_winner"
											class="mm_tag T=bg T=gray"
										>미당첨</b>
										<template v-else>
											<b class="mm_tag T=bg T=support">당첨</b>
											<b
												v-if="raffle.is_purchase"
												class="mm_tag T=support"
											>구매완료</b>
											<b
												v-else
												class="mm_tag"
											>미구매</b>
										</template>
									</div>
									<p class="text_brand">
										{{ raffle.goods.brand_name }}
									</p>
									<p class="text_product">
										{{ raffle.goods.name }}
									</p>
								</figcaption>
							</figure>
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<style src="./_raffle.scss" lang="scss"></style>