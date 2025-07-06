<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
</script>

<template>
	<!-- 찜 랭킹 -->
	<div class="mm_inner">
		<h3 class="mm_title">
			<strong>찜 </strong><b>랭킹</b>
		</h3>

		<!-- 카테고리 -->
		<div class="m_best-category">
			<div
				class="mm_slider"
				data-slider="{ '_isLoop': false }"
			>
				<div class="mm_slider-inner">
					<!-- (D) 선택된 카테고리에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<ul class="mm_slider-list">
						<li class="mm_slider-item">
							<button
								type="button"
								class="S=category-on"
								title="선택됨"
							>
								<i class="ico_category-all"></i><b>전체</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category1.png'"
								></LazyloadMUI><b>카테고리1</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/error'"
								></LazyloadMUI><b>카테고리2</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category3.png'"
								></LazyloadMUI><b>카테고리3</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category4.png'"
								></LazyloadMUI><b>카테고리4</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category5.png'"
								></LazyloadMUI><b>카테고리5</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category6.png'"
								></LazyloadMUI><b>카테고리6</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category7.png'"
								></LazyloadMUI><b>카테고리7</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리8</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리9</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리10</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리11</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리12</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리13</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리14</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리15</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리16</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리17</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리18</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리19</b>
							</button>
						</li>
						<li class="mm_slider-item">
							<button type="button">
								<LazyloadMUI
									class="mm_bg-cover image_category"
									:_src="'/public/images/dummy/category8.png'"
								></LazyloadMUI><b>카테고리20</b>
							</button>
						</li>
					</ul>
				</div>
				<div class="mm_slider-control">
					<button
						type="button"
						class="btn_slider-prev"
					>
						<i class="ico_control-prev"></i><b class="mm_ir-blind">이전</b>
					</button>
					<button
						type="button"
						class="btn_slider-next"
					>
						<i class="ico_control-next"></i><b class="mm_ir-blind">다음</b>
					</button>
				</div>
			</div>
		</div>

		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			집계된 상품이 없습니다
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<span></span>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
											:_src="'/public/images/dummy/prod_x2_1.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">엠몬스타</p>
										<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
										<p class="text_sale">20%</p>
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<span></span>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
										<p class="text_price">
											<strong>99,000</strong>
											<del>118,800</del>
										</p>
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
		</template>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->