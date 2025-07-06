<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ArriveProbability from '@/features/arrive/components/ArriveProbability.vue';
	import GiftProductInfo from '@/features/gift/components/GiftProductInfo.vue';
	import MultiangleView360 from '@/features/multiangle/components/MultiangleView360.vue';
	import RestockProdcutIcon from '@/features/restock/components/RestockProductButton.vue';
	import TimedealProductClock from '@/features/timedeal/components/TimedealProductClock.vue';
	import Option from '@/pages/product/components/ProductOption.vue';
	import ProductFooter from '@/pages/product/components/ProductFooter.vue';

	const productAPI = ref<ProductDetailAPI>();
	const stockAPI = ref<ProductDetailStockAPI>();
	// const productRecommendAPI = ref<ProductDetailRecommendAPI>();
	const aggregateAPI = ref<ProductDetailAggregatekAPI>();
	const promotionAPI = ref<ProductDetailPromotionAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BASIC_INFO`, ref: productAPI },
		{ key: `GOODS_DETAIL_STOCK`, ref: stockAPI },
		// { key: `GOODS_DETAIL_PACKAGES`, ref: productRecommendAPI },
		{ key: `GOODS_DETAIL_AGGREGATE`, ref: aggregateAPI },
		{ key: `GOODS_DETAIL_PROMOTIONS`, ref: promotionAPI },
	]);

	const tabIndex = ref(0);
	const tabItems: {
		name: string;
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			name: `상세정보`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabInfo.vue`)),
		},
		{
			name: `리뷰`,
			component: defineAsyncComponent(() => import(`@/pages/product/components/ProductTabReview.vue`)),
		},
		{
			name: `상품 Q&A`,
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

	// TODO 유료기능 사용 검증 및 세팅
	const feature = {
		gift: {
			_is: true,
			// value
		},
		restock: {
			_is: true,
			// value
		},
		multiangle: {
			_is: true,
			// value
		},
		arriveProbability: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<div class="m_prodetail">
		<!-- 상품상세 상단 -->
		<div class="m_prodetail-head">
			<div class="mm_inner">
				<div class="mm_lside">
					<!-- 품절임박 -->
					<!-- (D) 품절임박 상품 일 때만 노출합니다. -->
					<p
						v-if="stockAPI != null && !stockAPI.is_soldout && stockAPI.stock < 5"
						class="m_prodetail-head-stock"
					>
						<i class="ico_clock"></i><strong>품절임박</strong>서두르세요!<span>남은수량</span><strong>{{ stockAPI?.stock }}<sub>개</sub></strong>
					</p>

					<!-- 품절 -->
					<!-- (D) 품절된 상품일 경우 노출합니다. -->
					<p
						v-if="stockAPI?.is_soldout"
						class="m_prodetail-head-soldout"
					>
						SOLD OUT
					</p>

					<!-- 상품 이미지 -->
					<div class="m_prodetail-thumbnail">
						<i class="image_thumbnail">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
						<div class="m_prodetail-thumbnail-list">
							<ul class="mm_flex T=equal">
								<li
									v-for="thumbnail in productAPI?.goods.thumbnail_urls"
									:key="thumbnail"
								>
									<button
										type="button"
										class="btn_thumbnail"
									>
										<LazyloadMUI
											class="mm_bg-cover"
											:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
										></LazyloadMUI>
									</button>
								</li>
							</ul>
						</div>
						<MultiangleView360
							v-if="feature.multiangle._is && productAPI != null && productAPI.goods.degree_360_image_urls.length > 0"
							:multiangle="productAPI.goods.degree_360_image_urls"
						></MultiangleView360>
					</div>

					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=sm T=line T=light btn_copy"
						>
							<i class="ico_copy"></i><b>주소 복사하기</b>
						</button>
					</div>
				</div>
				<div class="mm_rside">
					<TimedealProductClock
						v-if="stockAPI != null"
						:total-stock="stockAPI?.stock"
					></TimedealProductClock>

					<!-- 상품정보 -->
					<div class="m_prodetail-head-product">
						<p class="text_star">
							<i
								class="ico_star"
								title="별점"
							></i><span>{{ aggregateAPI?.review_average_star }}</span>
							<button
								type="button"
								class="btn_review"
							>
								<b>리뷰 {{ aggregateAPI?.total_review_count }}개 보기</b>
							</button>
						</p>
						<a
							class="btn_brand"
							href="#"
						>
							<b>{{ productAPI?.goods.brand_name }}</b><i class="ico_link"></i>
						</a>
						<p class="text_product">
							<span
								v-if="productAPI?.goods.headline != null"
								class="text_foreword"
							>
								[{{ productAPI.goods.headline }}]
							</span>{{ productAPI?.goods.name }}
						</p>
						<p
							v-if="promotionAPI != null"
							class="text_price"
						>
							<strong
								v-if="promotionAPI?.sale_rate > 0"
								class="text_sale"
							>
								{{ promotionAPI.sale_rate }}%
							</strong>
							<strong>{{ promotionAPI.base_discounted_price }}</strong><del v-if="promotionAPI.sale_rate > 0">{{ promotionAPI.price }}</del>
						</p>
					</div>

					<!-- 할인 혜택 -->
					<div class="m_prodetail-head-discount">
						<dl>
							<dt>M.MON 쇼핑몰 고객을 위한 혜택</dt>
							<dd v-if="promotionAPI?.is_downloadable_coupon">
								<a
									class="btn_coupon"
									href="#"
								>
									<b>쿠폰 받기<i class="ico_download"></i></b>
								</a>
							</dd>
							<!-- (D) 쿠폰 다운이 완료된 경우에 노출합니다. -->
							<dd v-else>
								<a class="btn_coupon T=coupon-complete"><b>쿠폰다운 완료<i class="ico_coupon-complete"></i></b></a>
							</dd>
						</dl>
						<!-- TODO 할인 정책 확인 후 수정 필요함 ! -->
						<div
							class="mm_dropdown"
							data-dropdown
						>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>최대 할인가</b><b class="text_price"><strong>208,000</strong></b><i class="ico_dropdown"></i>
							</button>
							<div class="mm_dropdown-item">
								<div
									v-if="promotionAPI != null"
									class="mm_dropdown-item-inner"
								>
									<section>
										<h5><b>비회원가</b></h5>
										<dl>
											<dt>정가</dt>
											<dd class="text_price">
												<b>{{ promotionAPI.price }}</b>
											</dd>
										</dl>
										<dl>
											<dt>특가할인</dt>
											<dd class="text_price">
												<b>{{ promotionAPI.price - promotionAPI.sell_price }}</b>
											</dd>
										</dl>
										<dl>
											<dt>판매가</dt>
											<dd class="text_price">
												<strong>{{ promotionAPI.max_discounted_price }}</strong>
											</dd>
										</dl>
									</section>
									<section>
										<h5><b>회원가</b></h5>
										<dl>
											<dt>회원할인</dt>
											<dd class="text_price">
												<b>- {{ promotionAPI.sell_price - promotionAPI.base_discounted_price }}</b>
											</dd>
										</dl>
										<dl>
											<dt>쿠폰할인</dt>
											<dd class="text_price">
												<b>- 22,000</b>
											</dd>
										</dl>
										<!-- (유료) 타임특가 -->
										<dl v-if="promotionAPI.night_sale_amount > 0">
											<dt>심야할인</dt>
											<dd class="text_price">
												<b>- {{ promotionAPI.night_sale_amount }}</b>
											</dd>
										</dl>
										<dl>
											<dt class="text_timesale">
												타임특가 할인
											</dt>
											<dd class="text_price">
												<b>- 22,000</b>
											</dd>
										</dl>
										<!--// (유료) 타임특가 -->
										<dl>
											<dt>회원 혜택가</dt>
											<dd class="text_price">
												<strong>{{ promotionAPI.max_discounted_price }}</strong>
											</dd>
										</dl>
									</section>
									<div class="mm_note">
										<ul>
											<li>현재 최대 할인가의 금액 기준은 할인 혜택이 적용된 금액이며 일부는 회원에게만 적용될 수 있습니다.</li>
											<li>쿠폰 받기 버튼을 누르셔서 쿠폰을 다운로드하셔야 쿠폰 할인이 가능합니다.</li>
											<li>즉시 할인의 경우 주문 시 사용하는 쿠폰 및 적립금에 따라 할인금액이 변경될 수 있습니다..</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- 기타정보(배송정보, 혜택, 예약배송 등) -->
					<div class="m_prodetail-head-info">
						<dl>
							<dt>배송정보</dt>
							<dd>무료배송</dd>
							<dd>도서산간지역 5,000원</dd>
							<ArriveProbability v-if="feature.arriveProbability._is"></ArriveProbability>
							<!-- (D) 주문제작 상품인 경우 노출합니다 -->
							<!-- <dd>배송기간 5~7일</dd> -->
							<!-- <dd>주문 제작 상품 교환/반품 불가합니다</dd> -->

							<!-- (D) 해외배송 상품인 경우 노출합니다 -->
							<!-- <dd>해외배송 상품</dd> -->
							<!-- <dd>배송기간 5~7일</dd> -->
						</dl>
						<dl>
							<dt>혜택</dt>
							<dd>
								<a href="#"><span>50,000원 이상 결제 시 무이자할부</span><i class="ico_help-fill"></i></a>
							</dd>
						</dl>
						<!-- (D) 예약판매 상품인 경우 입력한 예약판매 스케줄을 노출합니다. -->
						<dl>
							<dt>예약배송</dt>
							<dd>
								<p><span>예약판매 기간</span>2024-00-00 ~ 2024-00-00</p>
							</dd>
							<dd>
								<p><span>예약배송 기간</span>2024-00-00 ~ 2024-00-00</p>
							</dd>
						</dl>
						<GiftProductInfo v-if="feature.gift._is"></GiftProductInfo>
					</div>

					<!-- 옵션선택 -->
					<!-- (D) 옵션이 전체 품절인 경우 'm_product-option' 영역을 노출하지 않습니다.  -->
					<div
						v-if="!stockAPI?.is_soldout"
						class="m_prodetail-head-option m_product-option"
					>
						<a
							class="btn_size"
							href="#"
						>
							<i class="ico_size"></i><b>사이즈 가이드</b><i class="ico_link"></i>
						</a>
						<RestockProdcutIcon v-if="!stockAPI?.is_soldout"></RestockProdcutIcon>

						<Option></Option>

						<!-- 선택된 옵션 목록 -->
						<!-- XXX 선택된 옵션 json 찾아야함 -->
						<!--
							(D) 옵션을 4개이상 선택하여 ".m_product-option-selected" 요소에 스크롤이 생기는 경우 'S=selected-scroll' 클래스를 추가합니다.
								선택된 상품이 없을경우 .m_product-option-selected 요소를 노출하지 않습니다.
						-->
						<div class="m_product-option-selected S=selected-scroll">
							<div class="mm_scroller">
								<ul>
									<li>
										<div class="m...selected-item">
											<p class="text_option">
												<b>네이비/100</b><strong class="text_stock">남은수량 <span>3</span>개</strong>
											</p>
											<div
												class="mm_stepper"
												data-stepper="{ '_max': 3 }"
											>
												<div class="mm_form-text">
													<label>
														<input
															type="text"
															class="textfield text_stepper"
															data-text
														>
														<i class="bg_text"></i>
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
												<strong>15,000</strong>
											</p>
											<button
												type="button"
												class="btn_option-remove"
											>
												<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
											</button>
										</div>
									</li>
									<li>
										<div class="m...selected-item">
											<p class="text_option">
												<b>블랙/95</b>
											</p>
											<div
												class="mm_stepper"
												data-stepper="{ '_max': 3 }"
											>
												<div class="mm_form-text">
													<label>
														<input
															type="text"
															class="textfield text_stepper"
															data-text
														>
														<i class="bg_text"></i>
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
												<strong>15,000</strong>
											</p>
											<button
												type="button"
												class="btn_option-remove"
											>
												<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
											</button>
										</div>
									</li>
									<li>
										<div class="m...selected-item">
											<p class="text_option">
												<b>그레이/95</b>
											</p>
											<div
												class="mm_stepper"
												data-stepper="{ '_max': 3 }"
											>
												<div class="mm_form-text">
													<label>
														<input
															type="text"
															class="textfield text_stepper"
															data-text
														>
														<i class="bg_text"></i>
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
												<strong>15,000</strong>
											</p>
											<button
												type="button"
												class="btn_option-remove"
											>
												<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
											</button>
										</div>
									</li>
									<li>
										<div class="m...selected-item">
											<p class="text_option">
												<b>화이트/95</b>
											</p>
											<div
												class="mm_stepper"
												data-stepper="{ '_max': 3 }"
											>
												<div class="mm_form-text">
													<label>
														<input
															type="text"
															class="textfield text_stepper"
															data-text
														>
														<i class="bg_text"></i>
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
												<strong>15,000</strong>
											</p>
											<button
												type="button"
												class="btn_option-remove"
											>
												<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
											</button>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<!--
							(D) 선택 할 수 있는 옵션이 유일한 경우 아래 형식으로 노출됩니다.
								.btn_option-remove 옵션 삭제 버튼은 노출하지 않습니다.
								.m_product-option-select 옵션 목록 영역은 노출하지 않습니다.
						-->
						<!-- <div class="m_product-option-selected">
							<div class="mm_scroller">
								<ul>
									<li>
										<div class="m...selected-item">
											<p class="text_option">
												<b>네이비/100</b>
											</p>
											<div
												class="mm_stepper"
												data-stepper
											>
												<div class="mm_form-text">
													<label>
														<input
															type="text"
															class="textfield text_stepper"
															data-text
														>
														<i class="bg_text"></i>
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
												<strong>15,000</strong>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div> -->

						<!-- 총 상품 금액 -->
						<dl class="m_product-option-total">
							<dt>총 상품 금액</dt>
							<dd>
								<p class="text_price">
									<strong>0</strong>
								</p>
							</dd>
						</dl>
					</div>
					<div class="mm_btn_box">
						<div class="mm_flex">
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
							<template v-if="!stockAPI?.is_soldout">
								<button
									type="button"
									class="mm_btn btn_cart T=lg T=line T=primary"
								>
									<b>장바구니</b>
								</button>
								<button
									type="button"
									class="mm_btn btn_buy T=lg T=primary"
								>
									<b>구매하기</b>
								</button>
							</template>

							<template v-if="stockAPI?.is_soldout">
								<!-- (D) 상품이 품절인 경우 장바구니, 구매하기 버튼을 노출하지 않고 품절 버튼을 노출합니다. -->
								<b class="mm_btn T=lg T=disabled">품절</b>
								<RestockProdcutIcon v-if="feature.restock._is && stockAPI.is_soldout"></RestockProdcutIcon>
							</template>
						</div>
					</div>
					<router-link
						v-if="productAPI?.goods.is_use_seller_shop && productAPI?.goods.seller_id"
						class="btn_seller"
						:to="{ name: 'Sellershop', params: { id: productAPI?.goods.seller_id } }"
					>
						<b>판매자의 다른 상품 더보기</b><i class="ico_link"></i>
					</router-link>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<!-- 추천 아이템 -->
			<!-- XXX goodsDetailPackages.json 연결 필요 + 캐러셀 작업 방향 ?? -->
			<section class="m_prodetail-recommend">
				<h4><small>With Item</small><b>이런 아이템은 어떠세요?</b></h4>
				<div
					class="mm_carousel"
					data-carousel
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li class="mm_carousel-item">
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_1.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product"><span class="text_foreword">[단독]</span>MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_2.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_3.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
							</li>
							<li class="mm_carousel-item">
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_4.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_5.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product"><span class="text_foreword">[단독]</span>MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_6.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_carousel-control">
						<button
							type="button"
							class="btn_carousel-prev"
						>
							<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_carousel-next"
						>
							<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
					<div class="mm_carousel-count">
						<strong class="text_carousel-index">01</strong><i>/</i><span class="text_carousel-total">02</span>
					</div>
				</div>
			</section>

			<!-- 상품정보 탭 -->
			<div class="m_prodetail-tab">
				<div class="m_prodetail-tab-menu">
					<div
						class="mm_tab_menu"
						data-horizon
					>
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
						<ul class="mm_flex T=equal">
							<li
								v-for="(tab, index) in tabItems"
								:key="tab.name"
							>
								<button
									type="button"
									class="btn_tab"
									:class="{ 'S=tab-on': tabIndex === index }"
									:title="tabIndex === index ? '선택됨' : ''"
									@click="tabChange(index)"
								>
									<b>{{
										(tab.name === `리뷰` && (aggregateAPI?.reviewer_count ?? 0) > 0) ? `리뷰(${aggregateAPI?.reviewer_count})`
										: (tab.name === `상품 Q&A` && (aggregateAPI?.total_qna_count ?? 0) > 0) ? `상품 Q&A(${aggregateAPI?.total_qna_count})`
											: tab.name
									}}</b>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<keep-alive>
					<component :is="tabItems[tabIndex].component">
					</component>
				</keep-alive>
			</div>

			<ProductFooter></ProductFooter>
		</div>

		<!-- 하단 옵션 선택 -->
		<!-- (D) 상품이 품절된 경우 하단 옵션선택 영역(.m_prodetail-buy)은 노출하지 않습니다 -->
		<div
			class="m_prodetail-buy m_product-option"
			:class="['S=buy-sticky', 'S=switch-on' ]"
		>
			<div class="m_prodetail-buy-head">
				<div class="mm_inner">
					<button
						type="button"
						class="btn_option-toggle"
						data-switch="{ '_defaultTitle': '펼쳐보기', '_title': '접어놓기', '_isParent': true, '_parentSelector': '.m_prodetail-buy', 'onChange': 'changeSidePosition' }"
					>
						<b>구매 옵션선택</b><i class="ico_toggle"></i>
					</button>
					<div class="mm_lside">
						<div class="mm_product-item T=single T=sm">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="'/public/images/dummy/prod_x1_2.png'"
										></LazyloadMUI>
									</div>
									<figcaption>
										<p class="text_brand">M.Mon 엠몬스타</p>
										<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
									</figcaption>
								</figure>
							</a>
						</div>
					</div>
					<div class="mm_rside">
						<dl class="m_product-option-total">
							<dt>총 상품 금액</dt>
							<dd>
								<p class="text_price">
									<strong>0</strong>
								</p>
							</dd>
						</dl>
						<div class="mm_btn_box">
							<button
								type="button"
								class="btn_like"
								data-switch
							>
								<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
							</button>
							<button
								type="button"
								class="mm_btn T=line T=primary"
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
			<div class="mm_inner m_prodetail-buy-option">
				<div class="mm_lside">
					<Option></Option>
				</div>
				<div class="mm_rside">
					<!-- 선택된 옵션 목록 -->
					<!-- XXX 선택된 옵션 json 찾아야함 -->
					<!--
						(D) 옵션을 3개이상 선택하여 ".m_product-option-selected" 요소에 스크롤이 생기는 경우 'S=selected-scroll' 클래스를 추가합니다.
							선택된 상품이 없을경우 .m_product-option-selected 요소를 노출하지 않습니다.
					-->
					<div class="m_product-option-selected S=selected-scroll">
						<h6><b>선택상품</b></h6>
						<!-- (D) 선택된 옵션이 없을경우 mm_scroller를 노출하지 않습니다 -->
						<div class="mm_scroller">
							<ul>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>네이비/100</b><strong class="text_stock">남은수량 <span>3</span>개</strong>
										</p>
										<div
											class="mm_stepper"
											data-stepper="{ '_max': 3 }"
										>
											<div class="mm_form-text">
												<label>
													<input
														type="text"
														class="textfield text_stepper"
														data-text
													>
													<i class="bg_text"></i>
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
											<strong>15,000</strong>
										</p>
										<button
											type="button"
											class="btn_option-remove"
										>
											<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
										</button>
									</div>
								</li>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>블랙/95</b>
										</p>
										<div
											class="mm_stepper"
											data-stepper="{ '_max': 3 }"
										>
											<div class="mm_form-text">
												<label>
													<input
														type="text"
														class="textfield text_stepper"
														data-text
													>
													<i class="bg_text"></i>
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
											<strong>15,000</strong>
										</p>
										<button
											type="button"
											class="btn_option-remove"
										>
											<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
										</button>
									</div>
								</li>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>그레이/95</b>
										</p>
										<div
											class="mm_stepper"
											data-stepper="{ '_max': 3 }"
										>
											<div class="mm_form-text">
												<label>
													<input
														type="text"
														class="textfield text_stepper"
														data-text
													>
													<i class="bg_text"></i>
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
											<strong>15,000</strong>
										</p>
										<button
											type="button"
											class="btn_option-remove"
										>
											<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
										</button>
									</div>
								</li>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>화이트/95</b>
										</p>
										<div
											class="mm_stepper"
											data-stepper="{ '_max': 3 }"
										>
											<div class="mm_form-text">
												<label>
													<input
														type="text"
														class="textfield text_stepper"
														data-text
													>
													<i class="bg_text"></i>
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
											<strong>15,000</strong>
										</p>
										<button
											type="button"
											class="btn_option-remove"
										>
											<i class="ico_remove-circle"></i><b class="mm_ir-blind">옵션삭제</b>
										</button>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<!--
						(D) 선택 할 수 있는 옵션이 유일한 경우 아래 형식으로 노출됩니다.
							.btn_option-remove 옵션 삭제 버튼은 노출하지 않습니다.
							.m_product-option-select 옵션 목록 영역은 노출하지 않습니다.
					-->
					<!-- <div class="m_product-option-selected">
						<div class="mm_scroller">
							<ul>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>네이비/100</b>
										</p>
										<div
											class="mm_stepper"
											data-stepper
										>
											<div class="mm_form-text">
												<label>
													<input
														type="text"
														class="textfield text_stepper"
														data-text
													>
													<i class="bg_text"></i>
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
											<strong>15,000</strong>
										</p>
									</div>
								</li>
							</ul>
						</div>E
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<style src="../../features/experience/_experience.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script> -->
