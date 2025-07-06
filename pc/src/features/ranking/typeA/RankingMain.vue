<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
</script>

<template>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None v-if="$route.query.type === 'none'">
		집계된 항목이 없습니다
	</None>

	<template v-else>
		<!-- 아이템 랭킹 -->
		<section class="mm_inner m_ranking-item">
			<h3><b><strong>아이템</strong>랭킹</b></h3>
			<p class="text_update">
				<span>2020.03.18</span>기준
			</p>

			<!-- 상품리스트 -->
			<div class="mm_product-list m_ranking-list">
				<ol>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_1.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>1
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_2.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_3.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a>
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_4.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-unchanged"
										title="변동없음"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>10
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_6.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>12
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_7.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
				</ol>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line btn_more"
						href="#"
					>
						<b>BEST 아이템 더보기</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</section>

		<!-- 브랜드 랭킹 -->
		<section class="m_ranking-brand">
			<h3><b><strong>브랜드</strong>랭킹</b></h3>
			<div class="mm_inner">
				<p class="text_update">
					<span>2020.03.18</span>기준
				</p>
				<div class="m_ranking-brand-list">
					<ol>
						<li>
							<p class="text_rank">
								<sub>위</sub><span class="text_rank-up">
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
													<figcaption>-
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
					</ol>
				</div>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line btn_more"
						href="#"
					>
						<b>BEST 브랜드 더보기</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</section>

		<!-- VIEW 랭킹 -->
		<section class="mm_inner m_ranking-view">
			<h3><b><strong>VIEW</strong>랭킹</b></h3>
			<p class="text_update">
				<span>2020.03.18</span>기준
			</p>
			<!-- 상품리스트 -->
			<div class="mm_product-list">
				<ol>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_1.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>1
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_2.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_3.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a>
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_4.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-unchanged"
										title="변동없음"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>10
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_6.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>12
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_7.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-unchanged"
										title="변동없음"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_8.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>1
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/error'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
				</ol>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line btn_more"
						href="#"
					>
						<b>BEST VIEW 더보기</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</section>

		<!-- 찜 랭킹 -->
		<section class="mm_inner m_ranking-like">
			<h3><b><strong>찜</strong>랭킹</b></h3>
			<p class="text_update">
				<span>2020.03.18</span>기준
			</p>
			<!-- 상품리스트 -->
			<div class="mm_product-list">
				<ol>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_1.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>1
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_2.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_3.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a>
								<p class="text_rank">
									<i
										class="ico_rank-new"
										title="신규"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_4.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>2
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-unchanged"
										title="변동없음"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_5.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>10
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_6.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-up">
										<i
											class="ico_rank-up"
											title="상승"
										></i>12
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_7.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<i
										class="ico_rank-unchanged"
										title="변동없음"
									></i>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x2_8.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
					<li>
						<div class="mm_product-item">
							<a href="#">
								<p class="text_rank">
									<span class="text_rank-down">
										<i
											class="ico_rank-down"
											title="하락"
										></i>1
									</span>
								</p>
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/error'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price"><strong>99,000</strong></p>
									</figcaption>
								</figure>
							</a>
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
						</div>
					</li>
				</ol>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line btn_more"
						href="#"
					>
						<b>BEST 찜 더보기</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</section>
	</template>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->