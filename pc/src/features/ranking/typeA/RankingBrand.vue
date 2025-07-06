<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
</script>

<template>
	<!-- 브랜드 랭킹 -->
	<div class="mm_inner m_ranking-brand">
		<h3 class="mm_title">
			<strong>브랜드 </strong><b>랭킹</b>
		</h3>
		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			집계된 브랜드가 없습니다
		</None>

		<template v-else>
			<div class="m_ranking-head">
				<div class="m_ranking-head-update">
					<!-- (D) btn_help 클릭시 .m...head-update에 'S=switch-on' 클래스가 추가되고 .m...update-tooltip 요소가 노출됩니다. -->
					<p class="text_update">
						<span>2020.06.05</span>기준
					</p>
					<button
						type="button"
						class="btn_help"
						data-switch="{ '_isParent': true }"
						title="선택됨"
					>
						<i class="ico_tooltip"></i>
					</button>
					<div class="m...update-tooltip">
						<p>전일 기준으로 랭킹 산정(매일 0시 기준, 일 1회 집계)</p>
						<p>산정기간: 2021.12.26. 00:00~23:59</p>
						<button
							type="button"
							class="btn_close"
							onclick="this.parentElement.previousElementSibling.click();"
						>
							<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
						</button>
					</div>
				</div>
				<!-- (D) 현재 페이지에 맞는 정렬 button에 'S=on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="m_ranking-head-sort">
					<li>
						<button
							type="button"
							class="btn_sort S=on"
							title="선택됨"
						>
							<b>일간</b>
						</button>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort"
						>
							<b>주간</b>
						</button>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort"
						>
							<b>월간</b>
						</button>
					</li>
				</ul>
			</div>

			<!-- 브랜드 리스트 -->
			<div class="m_ranking-brand-list">
				<ol>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-up">
								<i
									class="ico_rank-up"
									title="상승"
								></i>2
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>테바</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-new"
								title="신규"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>베니시아 12</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-unchanged"
								title="변동없음"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>워브먼트</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-down">
								<i
									class="ico_rank-down"
									title="하락"
								></i>1
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>레브바이레브</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-up">
								<i
									class="ico_rank-up"
									title="상승"
								></i>2
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>테바</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-new"
								title="신규"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>키르시</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-unchanged"
								title="변동없음"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>워브먼트</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-down">
								<i
									class="ico_rank-down"
									title="하락"
								></i>1
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>레브바이레브</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-up">
								<i
									class="ico_rank-up"
									title="상승"
								></i>2
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>테바</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-new"
								title="신규"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>뉴발란스</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<i
								class="ico_rank-unchanged"
								title="변동없음"
							></i>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>레브바이레브</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<p class="text_rank">
							<sub>위</sub>
							<span class="text_rank-down">
								<i
									class="ico_rank-down"
									title="하락"
								></i>1
							</span>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>해지스</b><i class="ico_link T=thin"></i>
						</a>
						<div class="mm_product-list">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_1.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_2.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_3.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="'/public/images/dummy/prod_x2_4.png'"
													></LazyloadMUI>
												</div>
												<figcaption>
													<p class="text_price"><strong>99,000</strong></p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ol>
			</div>
		</template>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->