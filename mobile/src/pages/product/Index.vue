<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import SnsShare from '@/components/SnsShare.vue';
	import Footer from '@/components/footer/FooterA.vue';
	import Header from '@/components/header/Header.vue';
	import ArriveProbability from '@/features/arrive/components/ArriveProbability.vue';
	import MultiangleView360 from '@/features/multiangle/components/MultiangleProduct360.vue';
	import Gift from '@/features/gift/components/GiftProductInfoBtn.vue';
	import ProductRecommend from '@/pages/product/components/ProductHeadRecommend.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});

	const productAPI = ref<ProductDetailAPI>();
	const aggregateAPI = ref<ProductDetailAggregatekAPI>();
	const stockAPI = ref<ProductDetailStockAPI>();
	const productCategoryBestAPI = ref<ProductCategoryBestAPI>();
	const productBrandBestAPI = ref<ProductBrandBestAPI>();
	const infoAPI = ref<ProductDetailInfoAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BASIC_INFO`, ref: productAPI },
		{ key: `GOODS_DETAIL_AGGREGATE`, ref: aggregateAPI },
		{ key: `GOODS_DETAIL_STOCK`, ref: stockAPI },
		{ key: `GOODS_DETAIL_BRAND_BEST_GOODS`, ref: productBrandBestAPI },
		{ key: `GOODS_DETAIL_MAIN_CATEGORY_BEST_GOODS`, ref: productCategoryBestAPI },
		{ key: `GOODS_DETAIL_INFORMATION`, ref: infoAPI },
	]);

	type TabKey = `reviewer_count` | `total_qna_count`;

	const tabIndex = ref(0);
	const tabList: {
		name: string;
		key?: TabKey;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			name: `상세정보`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabInfo.vue`)),
		},
		{
			name: `리뷰`,
			key: `reviewer_count`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabReview.vue`)),
		},
		{
			name: `상품 Q&A`,
			key: `total_qna_count`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabQna.vue`)),
		},
		{
			name: `판매자 정보`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabSeller.vue`)),
		},
	];

	function tabChange(index: number) {
		tabIndex.value = index;
	}

	// 유료기능 사용 검증 및 세팅
	const feature = {
		gift: {
			_is: true,
			// value: productItem.product.icon
		},
		multiangle: {
			_is: true,
			// value
		},
		arriveProbability: {
			_is: true,
			// value
		},
	};
</script>

<template>
	<!-- 화면 -->
	<div
		class="mm_view"
		:class="layouts"
	>
		<Header>
			<template #title>
				<h1 class="mm_ir-blind">
					<b>상품상세</b>
				</h1>
			</template>
		</header>

		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<!-- (D) 실제 내용을 추가하는 부분입니다. -->

			<!-- (D) 페이지 하단에 고정버튼이 있는 경우에는 html, mm_view 태그에 'L=lowbtn' 클래스를 추가합니다. -->
			<div class="mm_scroller">
				<div class="mm_page-inner">
					<!-- 본문 -->
					<div class="mm_page-content">
						<div class="m_prodetail">
							<!-- 상품상세 상단 -->
							<div class="m_prodetail-head">
								<!-- 품절임박 -->
								<!-- (D) 품절임박 상품 일 때만 노출합니다. -->
								<p
									v-if="!stockAPI?.is_soldout && (stockAPI?.stock ?? NaN) < 5"
									class="m_prodetail-head-stock"
								>
									<i class="ico_clock"></i><strong>품절임박</strong>서두르세요!<span>남은수량</span><strong class="text_stock">{{ stockAPI?.stock }}<sub>개</sub></strong>
								</p>

								<!-- 품절 -->
								<!-- (D) 품절된 상품일 경우 노출합니다. -->
								<p
									v-if="stockAPI?.is_soldout"
									class="m_prodetail-head-soldout"
								>
									SOLD OUT
								</p>

								<!-- 상품정보 -->
								<div class="m_prodetail-head-product">
									<!-- 상품이미지 -->
									<div
										class="mm_carousel"
										data-carousel="{ '_effect': 'cover', '_isMoreSide': true, '_isErrorRemove': true }"
									>
										<div class="mm_carousel-inner">
											<ul class="mm_carousel-list">
												<li
													v-for="image in productAPI?.goods.thumbnail_urls"
													:key="image"
													class="mm_carousel-item"
												>
													<LazyloadMUI
														class="mm_bg-contain"
														:_src="image"
													></LazyloadMUI>
												</li>
											</ul>
										</div>
										<div class="mm_carousel-pagination">
											<ol>
												<li>
													<button
														type="button"
														class="btn_carousel-page"
													>
														<b class="mm_ir-blind">1</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_carousel-page"
													>
														<b class="mm_ir-blind">2</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_carousel-page"
													>
														<b class="mm_ir-blind">3</b>
													</button>
												</li>
											</ol>
										</div>
									</div>

									<MultiangleView360
										:multiangle="productAPI?.goods.degree_360_image_urls"
									></MultiangleView360>

									<div class="m...product-info">
										<p
											v-if="productAPI?.goods.review_average_star && productAPI?.goods.total_review_count"
											class="text_star"
										>
											<i
												class="ico_star-fill"
												title="별점"
											></i><span>{{ productAPI?.goods.review_average_star }}</span>
											<button
												type="button"
												class="btn_review"
											>
												<b>리뷰 {{ productAPI?.goods.total_review_count }}개 보기</b>
											</button>
										</p>
										<router-link
											class="btn_brand"
											:to="{ name: 'Brandshop', params: { id: (productAPI?.goods.brand_id ?? NaN) } }"
										>
											<b>{{ productAPI?.goods.brand_name }}</b><i class="ico_link"></i>
										</router-link>
										<p class="text_product">
											<span class="text_foreword">{{ productAPI?.goods.headline }}</span>{{ productAPI?.goods.name }}
										</p>
										<p class="text_price">
											<span class="text_sale">10%</span><strong>235,000</strong><del>350,000</del>
										</p>
									</div>
								</div>

								<div class="mm_inner">
									<!-- 할인정보 -->
									<div class="m_prodetail-head-benefit">
										<div class="m...benefit-coupon">
											<p>M.MON 쇼핑몰 고객을 위한 혜택</p>
											<router-link
												class="btn_coupon"
												:to="{ name: 'ProductCouponDown' }"
											>
												<b>쿠폰 받기<i class="ico_coupon-download"></i></b>
											</router-link>
											<!-- (D) 쿠폰 다운이 완료된 경우에 노출합니다. -->
											<!-- <a class="btn_coupon T=coupon-complete"><b>쿠폰받기 완료<i class="ico_coupon-complete"></i></b></a> -->
										</div>
										<div
											class="mm_dropdown"
											data-dropdown
										>
											<button
												type="button"
												class="btn_dropdown mm_flex"
												title="펼쳐보기"
											>
												<b>최대 할인가</b><b class="text_price"><strong>208,000</strong></b><i class="ico_dropdown"></i>
											</button>
											<div class="mm_dropdown-item">
												<div class="mm_dropdown-item-inner">
													<div class="m...benefit-detail">
														<h4><b>비회원가</b></h4>
														<dl>
															<dt>정가</dt><dd class="text_price">
																<span>353,000</span>
															</dd>
														</dl>
														<dl>
															<dt>특가할인</dt><dd class="text_price">
																<span>- 10,000</span>
															</dd>
														</dl>
														<dl>
															<dt>판매가</dt><dd class="text_price">
																<span>343,000</span>
															</dd>
														</dl>
													</div>
													<div class="m...benefit-detail">
														<h4><b>회원가</b></h4>
														<dl>
															<dt>회원할인</dt><dd class="text_price">
																<span>- 30,000</span>
															</dd>
														</dl>
														<dl>
															<dt>쿠폰할인</dt><dd class="text_price">
																<span>- 22,000</span>
															</dd>
														</dl>
														<dl>
															<dt>즉시할인</dt><dd class="text_price">
																<span>- 22,000</span>
															</dd>
														</dl>
														<dl>
															<dt>심야할인</dt><dd class="text_price">
																<span>- 22,000</span>
															</dd>
														</dl>

														<!-- (유료) 타임딜 -->
														<dl class="text_timesale">
															<dt>타임특가 쿠폰할인</dt><dd class="text_price">
																<span>- 2,000</span>
															</dd>
														</dl>

														<dl>
															<dt>회원 혜택가</dt><dd class="text_price">
																<span>208,000</span>
															</dd>
														</dl>
													</div>
													<div class="mm_note">
														<ul>
															<li>현재 최대 할인가의 금액 기준은 할인 혜택이 적용된 금액이며 일부는 회원에게만 적용될 수 있습니다.</li>
															<li>쿠폰 받기 버튼을 누르셔서 쿠폰을 다운로드하셔야 쿠폰 할인이 가능합니다.</li>
															<li>즉시 할인의 경우 주문 시 사용하는 쿠폰 및 적립금에 따라 할인금액이 변경될 수 있습니다.</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<!-- 배송정보 및 혜택 -->
									<div class="m_prodetail-head-info">
										<dl>
											<dt>배송정보</dt>
											<dd>무료배송</dd>
											<dd>도서산간지역 5,000원</dd>
											<dd>배송기간 5~7일</dd>
											<dd>주문제작 상품으로 교환/반품 불가</dd>
										</dl>

										<ArriveProbability v-if="feature.arriveProbability._is && productAPI?.goods.delivery_info.shipping_arrival_probability != null"></ArriveProbability>

										<dl>
											<dt>혜택</dt>
											<dd>
												<router-link :to="{ name: 'CardBenefit' }">
													<b>50,000원 이상 결제 시 무이자할부</b><i class="ico_help-fill"></i>
												</router-link>
											</dd>
										</dl>
										<!-- (D) 예약판매 상품인 경우 입력한 예약판매 스케줄을 노출합니다. -->
										<dl>
											<dt>예약배송</dt>
											<dd><p><span>예약판매 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
											<dd><p><span>예약배송 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
										</dl>

										<Gift v-if="feature.gift._is"></Gift>
									</div>

									<!-- 판매자샵 -->
									<router-link
										v-if="productAPI?.goods.is_use_seller_shop && productAPI?.goods.seller_id"
										class="btn_seller"
										:to="{ name: 'Sellershop', params: { id: productAPI?.goods.seller_id } }"
									>
										<b>판매자의 다른 상품 더보기</b><i class="ico_link"></i>
									</router-link>
								</div>

								<!-- 찜/공유하기 -->
								<div class="m_prodetail-head-like">
									<div class="mm_flex T=equal">
										<!-- TODO 찜하기 클릭 시 기능 추가 필요함 -->
										<button
											type="button"
											class="btn_like"
											data-switch
											@click="$router.push({ name: 'ProductLikeFolder' })"
										>
											<i class="ico_like"></i><b>찜<span>1,674</span></b>
										</button>
										<button
											type="button"
											class="btn_sns-share"
										>
											<i class="ico_share"></i><b>공유하기</b>
										</button>
										<SnsShare></SnsShare>
									</div>
								</div>

								<ProductRecommend></ProductRecommend>
							</div>

							<!-- 상품상세 탭 -->
							<div class="m_prodetail-tab">
								<div class="mm_tab_menu">
									<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
									<ul class="mm_flex T=equal">
										<li
											v-for="(item, index) in tabList"
											:key="item.name"
										>
											<button
												type="button"
												class="btn_tab"
												:class="{ 'S=tab-on': tabIndex === index }"
												:title="tabIndex === index ? '선택됨' : ''"
												@click="tabChange(index)"
											>
												<b>{{ item.name }}</b><small v-if="aggregateAPI != null && item.key != null">{{ aggregateAPI[item.key] }}</small>
											</button>
										</li>
									</ul>
								</div>

								<keep-alive>
									<component :is="tabList[tabIndex].component">
									</component>
								</keep-alive>
							</div>

							<div class="m_prodetail-foot">
								<!-- 추천 상품 -->
								<section>
									<h3 class="m_prodetail-strapline">
										<b>이 상품도 좋아하실 것 같아요</b>
									</h3>
									<div class="mm_scroller T=x">
										<div class="mm_product-list T=card">
											<ul>
												<li
													v-for="item in productCategoryBestAPI?.category_best_goods"
													:key="item.id"
												>
													<ProductItem
														:product="item"
														:class="'T=pa'"
														:is-sale-price="false"
													></ProductItem>
												</li>
											</ul>
										</div>
									</div>
								</section>

								<!-- 인기 상품 -->
								<section>
									<h3 class="m_prodetail-strapline">
										<b>이 브랜드의 인기상품</b>
									</h3>
									<div class="mm_scroller T=x">
										<div class="mm_product-list T=card">
											<ul>
												<li
													v-for="item in productBrandBestAPI?.brand_best_goods"
													:key="item.id"
												>
													<ProductItem
														:product="item"
														:class="'T=pa'"
														:is-sale-price="false"
													></ProductItem>
												</li>
											</ul>
										</div>
									</div>
								</section>

								<div class="mm_accordion m_prodetail-info">
									<ul>
										<li>
											<dl
												class="mm_dropdown"
												data-dropdown
											>
												<dt
													class="btn_dropdown"
													tabindex="0"
													title="펼쳐보기"
												>
													<p><b>일반 상품 정보</b></p><i class="ico_dropdown"></i>
												</dt>
												<dd class="mm_dropdown-item">
													<div class="mm_dropdown-item-inner">
														<table>
															<tbody>
																<tr>
																	<th scope="row">
																		<b>상품번호</b>
																	</th>
																	<td>123456</td>
																</tr>
																<tr>
																	<th scope="row">
																		<b>상품상태</b>
																	</th>
																	<td>{{ infoAPI?.use_state_label }}</td>
																</tr>
																<tr>
																	<th scope="row">
																		<b>브랜드</b>
																	</th>
																	<td>{{ productAPI?.goods.brand_name }}</td>
																</tr>
																<tr>
																	<th scope="row">
																		<b>원산지</b>
																	</th>
																	<td>{{ infoAPI?.origin_label }}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</dd>
											</dl>
										</li>
										<li>
											<dl
												class="mm_dropdown"
												data-dropdown
											>
												<dt
													class="btn_dropdown"
													tabindex="0"
													title="펼쳐보기"
												>
													<p><b>상품정보고시</b></p><i class="ico_dropdown"></i>
												</dt>
												<dd class="mm_dropdown-item">
													<div class="mm_dropdown-item-inner">
														<table>
															<tbody>
																<tr
																	v-for="mandatory in infoAPI?.mandatory"
																	:key="mandatory.title"
																>
																	<th scope="row">
																		<b>{{ mandatory.title }}</b>
																	</th>
																	<td>{{ mandatory.content }}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</dd>
											</dl>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<Footer></Footer>
				</div>
			</div>

			<!-- 옵션선택 -->
			<!--
				(D) 셀렉트형 옵션 형태에서 옵션1 또는 옵션2를 최초 선택시 '.m_product-option' 요소에 인라인 style height: 75%를 추가하고,
				선택된 옵션을 모두 삭제하여 선택된 옵션이 없을 경우에는 인라인 style height: 75%를 삭제합니다.
				(D) 옵션1, 2가 1개의 옵션만 있을 경우 'm_product-option' 요소에 'T=option-single' 클래스를 추가합니다.
			-->
			<div class="m_product-option">
				<button
					type="button"
					class="btn_option-close"
				>
					<i class="ico_toast"></i><b class="mm_ir-blind">옵션선택 닫기</b>
				</button>
				<a
					class="btn_size"
					href="#"
				>
					<i class="ico_size"></i><b>사이즈 가이드</b><i class="ico_link"></i>
				</a>

				<!-- 옵션 목록 -->
				<!--
					(D) 옵션1 또는 옵션2의 갯수가 6개 이하인 경우 버튼형 옵션을 사용하고, 7개 이상인 경우 셀렉트형 옵션을 사용합니다.
					(D) 모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
					(D) 옵션1, 2가 1개의 옵션만 있을 경우 별도의 옵션 선택 동작 없이 옵션이 선택된 상태로 노출되며, 수량 변경만 가능합니다.
					(D) 옵션1 혹은 옵션2만 등록한 단일옵션의 경우 1개의 옵션만 선택하게 됩니다. 이 때 옵션의 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
					(D) 셀렉트형 옵션인 경우 옵션선택 레이어 오픈 시 옵션1의 dropdown 요소에 'S=on' 클래스를 추가하여 옵션1을 바로 선택 가능하도록 합니다.
					(D) 옵션이 선택된 경우 'btn_option' 요소에 S=option-select 클래스와 '선택됨' 타이틀을 추가합니다.
				-->
				<div class="m_product-option-select">
					<!-- (D) 버튼형 옵션 -->
					<section>
						<h6 class="mm_strapline">
							<b>옵션1</b>
						</h6>
						<div class="mm_scroller T=x">
							<ul>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>네이비</b>
										<svg><line
											x1="0"
											y1="100%"
											x2="100%"
											y2="0"
											stroke="#cdcdcd"
											stroke-width="1"
										/></svg>
									</span>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>레드</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>핑크</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>화이트</b>
									</button>
								</li>
							</ul>
						</div>
					</section>
					<section>
						<h6 class="mm_strapline">
							<b>옵션2</b>
						</h6>
						<div class="mm_scroller T=x">
							<ul>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>95</b>
									</button>
								</li>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>100</b>
										<svg><line
											x1="0"
											y1="100%"
											x2="100%"
											y2="0"
											stroke="#cdcdcd"
											stroke-width="1"
										/></svg>
									</span>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>105</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>110</b>
									</button>
								</li>
							</ul>
						</div>
					</section>

				<!-- (D) 버튼형 옵션 + 단일 옵션(옵션1 또는 옵션2만 등록)인 경우 -->
				<!-- <section>
						<h6 class="mm_strapline"><b>옵션</b></h6>
						<div class="mm_scroller T=x">
							<ul>
								<li>
									<span class="btn_option" title="품절">
										<b>네이비</b>
										<svg><line x1="0" y1="100%" x2="100%" y2="0" stroke="#cdcdcd" stroke-width="1" /></svg>
									</span>
								</li>
								<li><button type="button" class="btn_option"><b>레드</b></button></li>
								<li><button type="button" class="btn_option"><b>핑크</b></button></li>
								<li><button type="button" class="btn_option"><b>화이트</b></button></li>
							</ul>
						</div>
					</section> -->

				<!-- (D) 셀렉트형 옵션 기본 -->
				<!-- <section class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion-option0' }">
						<h6 class="mm_strapline"><b>옵션1</b></h6>
						<button type="button" class="btn_dropdown" title="펼쳐보기"><b>선택하세요</b><i class="ico_dropdown T=bold"></i></button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_scroller">
									<ul>
										<li><span class="btn_option" title="품절"><b>네이비</b><b>(품절)</b></span></li>
										<li><button type="button" class="btn_option"><b>레드</b></button></li>
										<li><button type="button" class="btn_option"><b>블랙</b></button></li>
										<li><button type="button" class="btn_option"><b>화이트</b></button></li>
										<li><button type="button" class="btn_option"><b>그레이</b></button></li>
										<li><button type="button" class="btn_option"><b>그린</b></button></li>
										<li><button type="button" class="btn_option"><b>블루</b></button></li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section class="mm_dropdown" data-dropdown="{ '_group': 'dev_accrodion-option0' }">
						<h6 class="mm_strapline"><b>옵션2</b></h6>
						<button type="button" class="btn_dropdown" title="펼쳐보기"><b>선택하세요</b><i class="ico_dropdown T=bold"></i></button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_scroller">
									<ul>
										<li><button type="button" class="btn_option"><b>85</b></button></li>
										<li><span class="btn_option" title="품절"><b>90</b><b>(품절)</b></span></li>
										<li><button type="button" class="btn_option"><b>95</b></button></li>
										<li><button type="button" class="btn_option"><b>100</b><b>(1개)</b></button></li>
										<li><button type="button" class="btn_option"><b>105</b></button></li>
										<li><button type="button" class="btn_option"><b>110</b></button></li>
									</ul>
								</div>
							</div>
						</div>
					</section> -->

				<!-- (D) 셀렉트형 옵션 + 단일 옵션(옵션1 또는 옵션2만 등록)인 경우 -->
				<!-- <section class="mm_dropdown" data-dropdown>
						<h6 class="mm_strapline"><b>옵션</b></h6>
						<button type="button" class="btn_dropdown" title="펼쳐보기"><b>선택하세요</b><i class="ico_dropdown T=bold"></i></button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_scroller">
									<ul>
										<li><span class="btn_option" title="품절"><b>네이비</b><b>(품절)</b></span></li>
										<li><button type="button" class="btn_option"><b>레드</b></button></li>
										<li><button type="button" class="btn_option"><b>블랙</b></button></li>
										<li><button type="button" class="btn_option"><b>화이트</b></button></li>
										<li><button type="button" class="btn_option"><b>그레이</b></button></li>
										<li><button type="button" class="btn_option"><b>그린</b></button></li>
										<li><button type="button" class="btn_option"><b>블루</b></button></li>
									</ul>
								</div>
							</div>
						</div>
					</section> -->
				</div>

				<!-- 선택된 옵션 -->
				<div class="mm_scroller m_product-option-selected">
					<ul>
						<li>
							<div class="m...selected-info">
								<p class="text_product">
									시그니처 엠블럼 티셔츠 SIGNATURE EMBLEM T-SHIRT - 5color 프로텍팅내츄럴
								</p>
								<p class="text_option">
									블랙/95
								</p>
								<!-- (D) 구매가능 수량이 5개 이하인 경우에만 'text_stock' 요소를 노출합니다 -->
								<span class="text_stock">남은 수량 5개</span>
							</div>
							<div
								class="mm_stepper"
								data-stepper="{ '_max': 99 }"
							>
								<div class="mm_form-text">
									<label>
										<input
											type="text"
											class="textfield text_stepper"
											data-text
										><i class="bg_text"></i>
										<span class="mm_ir-blind text_placeholder">수량</span>
									</label>
								</div>
								<button
									type="button"
									class="btn_stepper-subtract"
								>
									<i class="ico_stepper-subtract"></i><b class="mm_ir-blind">수량 빼기</b>
								</button>
								<button
									type="button"
									class="btn_stepper-add"
								>
									<i class="ico_stepper-add"></i><b class="mm_ir-blind">수량 더하기</b>
								</button>
							</div>
							<p class="text_price">
								<strong>208,000</strong>
							</p>
							<button
								type="button"
								class="btn_option-remove"
							>
								<i class="ico_option-remove"></i><b class="mm_ir-blind">옵션삭제</b>
							</button>
						</li>
					</ul>
				</div>

				<div class="m_product-option-foot">
					<dl>
						<dt>총 상품 금액</dt>
						<dd class="text_price">
							<strong class="mm_text-variable">416,000</strong>
						</dd>
					</dl>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<button
								type="button"
								class="mm_btn T=line T=dark"
							>
								<b>장바구니</b>
							</button>
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>구매하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- 하단고정버튼 -->
			<div class="mm_btn_box T=fixed">
				<div class="mm_flex">
					<button
						type="button"
						class="btn_like btn_product-like"
						data-switch
					>
						<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
					</button>
					<!-- TODO 구매하기 클릭 시 옵션 나와야함 -->
					<button
						type="button"
						class="btn_product-buy"
						@click="$router.push({ name: 'Order' })"
					>
						<b>구매하기</b>
					</button>

				<!-- (D) 품절된 상품일 경우 노출합니다. -->
				<!-- <button type="button" class="btn_product-buy" disabled><b>품절</b></button> -->
				</div>
			</div>

			<!-- (유료) 타임딜 -->
			<div class="m_prodetail-timedeal">
				<button
					type="button"
					class="btn_timedeal"
					data-switch="{ '_isParent': true, 'onChange': 'timeDealBarMotion' }"
				>
					<i class="ico_clock"></i><b class="mm_ir-blind">타임특가</b>
				</button>
				<div class="mm_flex">
					<p class="text_time">
						<strong>20<span>:</span>18<span>:</span>56</strong>남음
					</p>
					<!-- (D) 남은수량의 값이 영역을 넘어가는 경우에는 '9999+'로 텍스트가 대체됩니다. -->
					<p class="mm_flex-equal text_stock">
						남은수량<strong>10000</strong>
					</p>
					<button
						type="button"
						class="btn_close"
						onclick="mm.switch.on('.m_prodetail-timedeal')"
					>
						<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
					</button>
				</div>
			</div>

			<a
				class="btn_topmost"
				href="#mm_app"
				data-href="{ '_type': 'anchor' }"
				title="페이지 처음으로"
			>
				<i class="ico_topmost"></i><b>TOP</b>
			</a>
			<!-- (D) 최근본 상품이 없을 경우 '.btn_prodetail-lately'요소를 노출하지 않습니다(display none처리가 아닌 요소 삭제) -->
			<router-link
				class="btn_prodetail-lately"
				:to="{ name: 'LatelyProduct' }"
			>
				<LazyloadMUI
					class="mm_bg-contain image_grade"
					:_src="'/public/images/_sample/prod_x1_1.png'"
				></LazyloadMUI>
				<b class="mm_ir-blind">최근 본 상품</b>
			</router-link>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script>
<script>
	// 타임딜 모션
	function timeDealBarMotion(__is) {

		var $timeSale = mm.find('.m_prodetail-timedeal')[0];
		var $btnSwitch = mm.find('.btn_timedeal', $timeSale)[0];
		var $timeSaleItem = mm.find('.m_prodetail-timedeal-item', $timeSale)[0];

		// 닫힘
		if (__is) {
			gsap.to($timeSale, { width: 46, duration: 0.2 });
			gsap.to($btnSwitch, { x: -7, duration: 0.2 });
			gsap.to($timeSaleItem, { autoAlpha: 0, duration: 0.6 });
		}
		// 펼침
		else {
			gsap.to($timeSale, { width: window.outerWidth - 28, duration: 0.2 });
			gsap.to($btnSwitch, { x: 0, duration: 0.2 });
			gsap.to($timeSaleItem, { autoAlpha: 1, duration: 0.2, delay: 0.1 });
		}

	}
</script> -->