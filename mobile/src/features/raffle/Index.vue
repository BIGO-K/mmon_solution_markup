<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';

	const listAPI = ref<RaffleListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_RAFFLES`, ref: listAPI },
	]);

	// const today = new Date();
	// const deviceTextMap: Record<RaffleDeviceType, string> = {
	// 	PC: `PC`,
	// 	M_WEB: `모바일 WEB`,
	// 	M_APP: `APP`
	// };

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
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

				<!-- 내용없음 -->
				<p
					v-if="(listAPI?.raffle_list.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 래플이 없습니다
				</p>

				<!-- 스켈레톤 -->
				<div
					v-if="_isLoading"
					class="m_raffle-list T=skeleton"
				>
					<ul>
						<li
							v-for="item in 4"
							:key="item"
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

				<!-- 래플 상품리스트 -->
				<div class="m_raffle-list">
					<ul>
						<!-- 응모중 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_1.png'"
										></LazyloadMUI>
										<p class="text_raffle"><strong>42<span>:</span>30<span>:</span>17</strong><b><span>821,000</span>명 참여중</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<a
										class="mm_btn T=primary"
										href="#"
									><b>응모하기</b></a>
								</div>
							</div>
						</li>
						<!--// 응모중 -->

						<!-- 응모마감 - 발표예정 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_2.png'"
										></LazyloadMUI>
										<p class="text_adult"><b class="mm_ir-blind">미성년자 구매불가</b><i class="ico_adult"></i></p>
										<p class="text_raffle"><strong>00<span>:</span>00<span>:</span>00</strong><b><span>821,000</span>명 참여중</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<b class="mm_btn T=line">05.06 (금) 17:00 당첨자 발표 예정</b>
								</div>
							</div>
						</li>
						<!--// 응모마감 - 발표예정 -->

						<!-- 응모마감 - 발표, 구매 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_3.png'"
										></LazyloadMUI>
										<p class="text_raffle"><strong>00<span>:</span>00<span>:</span>00</strong><b><span>821,000</span>명 참여</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<a
										class="mm_btn T=primary"
										href="_modal_raffleResult.html"
									><b>당첨 결과 확인하기</b></a>
								</div>
							</div>
						</li>
						<!--// 응모마감 - 발표, 구매 -->

						<!-- 진행 예정 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_4.png'"
										></LazyloadMUI>
										<p class="text_raffle"><strong>42<span>:</span>30<span>:</span>17</strong><b><span>821,000</span>명 참여중</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<b class="mm_btn T=line">진행 예정</b>
								</div>
							</div>
						</li>
						<!--// 진행 예정 -->

						<!-- 응모중 - 응모 디바이스 설정시 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_3.png'"
										></LazyloadMUI>
										<p class="text_raffle"><strong>42<span>:</span>30<span>:</span>17</strong><b><span>821,000</span>명 참여중</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<!-- <b class="mm_btn T=line">모바일 WEB에서만 응모 가능</b> -->
									<!-- <b class="mm_btn T=line">PC에서만 응모 가능</b> -->
									<!-- <b class="mm_btn T=line">APP에서만 응모 가능</b> -->
									<b class="mm_btn T=line">모바일 WEB과 PC에서만 응모 가능</b>
								</div>
							</div>
						</li>
						<!--// 응모중 - 응모 디바이스 설정시 -->

						<!-- 래플 종료 -->
						<li>
							<div class="mm_product-item">
								<a href="prodDetail_raffle.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/_sample/prod_x3_1.png'"
										></LazyloadMUI>
										<p class="text_raffle"><strong>00<span>:</span>00<span>:</span>00</strong><b><span>821,000</span>명 참여</b></p>
										<figcaption>
											<p class="text_brand">엠몬스타</p>
											<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
											<p class="text_sale">50%</p>
											<p class="text_price"><strong>327,000</strong><del><span>168,000</span></del></p>
										</figcaption>
									</figure>
								</a>
								<div class="mm_btn_box">
									<a class="mm_btn T=disabled"><b>래플 종료</b></a>
									<a
										class="mm_btn T=primary"
										href="_popup_raffleWinner.html"
									>
										<b>당첨자 보기</b>
									</a>
								</div>
							</div>
						</li>
						<!--// 래플 종료 -->
					</ul>
				</div>

				<!-- 종료된 래플 전체보기 -->
				<div class="mm_btn_box">
					<div class="mm_inline">
						<router-link
							class="btn_more"
							:to="{ name: 'RaffleClosedList' }"
						>
							<b>종료된 래플 전체보기</b><i class="ico_link"></i>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</LayoutMain>
</template>

<style src="./_raffle.scss" lang="scss"></style>