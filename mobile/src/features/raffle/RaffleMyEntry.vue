<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const raffleAPI = ref<RaffleEntryAPI>();
	const raffleEndAPI = ref<RaffleEntryAPI>();

	const getApiRaffleEntry = (__list: typeof raffleAPI, __isEnd: number): void => {

		Api.get<RaffleEntryAPI>(`MYPAGE_RAFFLE_ENTRY_LIST`, __list, `?is_end=${__isEnd}`);

	};

	getApiRaffleEntry(raffleAPI, 0);
	getApiRaffleEntry(raffleEndAPI, 1);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>래플 응모 내역</b></h1>
		</template>

		<template #content>
			<div class="m_myraffle">
				<template v-if="(raffleAPI?.raffle_list.length ?? NaN) < 1 && (raffleEndAPI?.raffle_list.length ?? NaN) < 1">
					<p class="mm_text-none">
						<i class="ico_text-none"></i>응모하신 내역이 없습니다
					</p>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<router-link
								class="mm_btn T=primary"
								:to="{ name: 'Raffle' }"
							>
								<b>래플 메인 바로가기</b>
							</router-link>
						</div>
					</div>
				</template>
				<template v-else>
					<!-- 진행중인 응모 내역 -->
					<section class="m_myraffle-on">
						<h3><b>진행중인 응모 내역</b></h3>
						<template v-if="(raffleAPI?.raffle_list.length ?? NaN) < 1">
							<p class="mm_text-none">
								<i class="ico_text-none"></i>응모하신 내역이 없습니다
							</p>
							<div class="mm_btn_box">
								<div class="mm_inline">
									<router-link
										class="mm_btn T=primary"
										:to="{ name: 'Raffle' }"
									>
										<b>래플 메인 바로가기</b>
									</router-link>
								</div>
							</div>
						</template>
						<div
							v-else
							class="mm_product-list T=sm"
						>
							<ul>
								<li
									v-for="raffle in raffleAPI?.raffle_list"
									:key="raffle.id"
								>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="raffle.goods.thumbnail_url"
												></LazyloadMUI>
												<figcaption>
													<div class="mm_tag-list">
														<b
															v-if="raffle.progress_status === '응모마감'"
															class="mm_tag T=gray"
														>
															응모마감
														</b>
														<b
															v-else
															class="mm_tag T=support"
														>
															{{ raffle.progress_status }}
														</b>
													</div>
													<p class="text_brand">{{ raffle.goods.brand_name }}</p>
													<p class="text_product">{{ raffle.goods.name }}</p>
												</figcaption>
											</figure>
										</a>
										<div class="mm_btn_box">
											<a
												v-if="raffle.progress_status === '추첨완료'"
												class="mm_btn T=primary"
												href="#"
											>
												<b>당첨 결과 확인하기</b>
											</a>
											<b
												v-else-if="raffle.progress_status === '추첨중'"
												class="mm_btn T=line"
											>
												당첨자 추첨 진행중
											</b>
											<b
												v-else
												class="mm_btn T=line"
											>
												{{ raffle.announce_at }} 당첨자 발표 예정
											</b>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</section>
					<hr class="mm_line">

					<template v-if="raffleEndAPI">
						<!-- 종료된 응모 내역 -->
						<section class="m_myraffle-off">
							<h3><b>종료된 응모 내역</b><small>(최근 6개월)</small></h3>
							<div class="mm_product-list T=sm">
								<ul>
									<li
										v-for="raffle in raffleEndAPI?.raffle_list"
										:key="raffle.id"
									>
										<div class="mm_product-item">
											<a href="#">
												<figure>
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="raffle.goods.thumbnail_url"
													></LazyloadMUI>
													<figcaption>
														<div class="mm_tag-list">
															<b
																v-if="!raffle.is_winner"
																class="mm_tag T=full T=gray"
															>
																미당첨
															</b>
															<template v-else>
																<b class="mm_tag T=support">당첨</b>
																<b
																	v-if="raffle.is_purchase"
																	class="mm_tag T=full T=support"
																>
																	구매완료
																</b>
																<b
																	v-else
																	class="mm_tag"
																>
																	미구매
																</b>
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
											</a>
										</div>
									</li>
								</ul>
							</div>
						</section>
						<hr class="mm_line">
					</template>
				</template>
			</div>
		</template>
	</LayoutSub>
</template>

<style src="./_raffle.scss" lang="scss"></style>