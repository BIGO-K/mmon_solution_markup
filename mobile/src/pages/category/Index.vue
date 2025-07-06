<script setup lang="ts">
	import LayoutMain from '@/components/layout/LayoutMain.vue';
</script>

<template>
	<LayoutMain>
		<!-- 대카테고리 -->
		<div class="m_category">
			<div class="mm_title">
				<h2><b>여성 캐주얼</b></h2>
			</div>

			<!-- 캐러셀 -->
			<div class="m_category-banner">
				<div
					class="mm_carousel"
					data-carousel="{ '_autoDelay': 4, '_effect': 'fade' }"
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li class="mm_carousel-item">
								<a href="#">
									<figure>
										<i
											class="mm_bg-cover image_banner"
											data-lazyload="{ '_src': '../image/_sample/category_banner_01.jpg' }"
										></i>
										<figcaption>
											<p class="text_main">우리의 일상을</p>
											<p class="text_main">더욱 채워줄 ITEM</p>
											<p class="text_sub">데일리 아이템을 한자리에 ~80%</p>
											<!-- (D) 등록된 text_banner가 없을 때 노출합니다. -->
											<!-- <p class="mm-ir_blind">이미지 대체텍스트</p> -->
										</figcaption>
									</figure>
								</a>
							</li>
							<li class="mm_carousel-item">
								<a href="#">
									<figure>
										<i
											class="mm_bg-cover image_banner"
											data-lazyload="{ '_src': '../image/_sample/category_banner_02.jpg' }"
										></i>
										<figcaption>
											<p class="text_main">새로운 계절을</p>
											<p class="text_main">함께할 위시리스트</p>
											<p class="text_sub">봄 신상 오픈 기념 단독 ~62%</p>
											<!-- (D) 문구를 등록하지 않았을 경우 노출하는 구조입니다 -->
											<!-- <p class="mm-ir_blind">이미지 대체텍스트</p> -->
										</figcaption>
									</figure>
								</a>
							</li>
						</ul>
					</div>
					<div class="mm_carousel-count">
						<p><strong class="text_carousel-index"></strong><i>/</i><span class="text_carousel-total"></span></p>
						<a
							class="btn_more"
							href="_popup_categoryBanner.html"
						><i class="ico_more T=plus"></i><b>전체보기</b></a>
					</div>
				</div>
			</div>

			<!-- 탭메뉴 -->
			<div class="m_category-tab">
				<ul>
					<li><a href="#"><b>티셔츠</b></a></li>
					<li><a href="#"><b>블라우스/셔츠</b></a></li>
					<li><a href="#"><b>니트/스웨터</b></a></li>
					<li><a href="#"><b>가디건/베스트</b></a></li>
					<li><a href="#"><b>원피스/투피스</b></a></li>
					<li><a href="#"><b>코트</b></a></li>
					<li><a href="#"><b>재킷/점퍼</b></a></li>
					<li><a href="#"><b>팬츠</b></a></li>
					<li><a href="#"><b>스커트</b></a></li>
					<li><a href="#"><b>티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠티셔츠</b></a></li>
				</ul>
			</div>

			<!-- 인기브랜드 -->
			<div class="m_category-brand-popular">
				<button
					type="button"
					class="mm_btn T=line T=dark T=xs btn_brand"
				>
					<b>인기 브랜드<i class="ico_link"></i></b>
				</button>
				<div class="m...popular-popup">
					<div class="m...popular-popup-dim"></div>
					<div class="m...popular-popup-item">
						<div class="m...item-head">
							<h5><b>인기브랜드</b></h5>
							<button
								type="button"
								class="btn_close"
							>
								<b class="mm_ir-blind">닫기</b><i class="ico_popup-close"></i>
							</button>
						</div>
						<div class="mm_scroller">
							<ul>
								<li><a href="#"><b>인베스트</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>매긴나잇브릿지</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>율미아스탭</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>블루레이스</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>숲</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>비지트인뉴옥</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>세마</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>포커스</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>귈림</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>카라</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>클럽코코아</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>루비루비</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>예쎄</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>에레디타</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>무자크</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>크레송</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>반에이크</b><i class="ico_link"></i></a></li>
								<li><a href="#"><b>일이삼사오육칠팔구십</b><i class="ico_link"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- 베스트 브랜드 -->
			<div class="m_category-brand-best">
				<h3><b>베스트 브랜드</b></h3>

				<!-- 내용없음 -->
				<p class="mm_text-none">
					<i class="ico_text-none"></i>등록된 내역이 없습니다
				</p>

				<ul>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_01.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">올리브데올리브</p>
									<p class="text_main">백화점 랜선 쇼핑 20% 할인</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_02.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">숲</p>
									<p class="text_main">아이스탁몰 시크릿특가</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_03.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">CC콜렉트</p>
									<p class="text_main">아이스탁몰 단독! 한정수량 특가</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_04.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">로엠</p>
									<p class="text_main">봄맞이 니트/블라우스 ~80%</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_05.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">ON&ON</p>
									<p class="text_main">백화점 랜선 쇼핑 20% 할인</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_06.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">비지트인뉴욕</p>
									<p class="text_main">아이스탁몰 시크릿특가</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_07.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">던스트</p>
									<p class="text_main">봄맞이 니트/블라우스 ~80%</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<i
									class="mm_bg-cover image_banner"
									data-lazyload="{ '_src': '../image/_sample/category_best_08.jpg' }"
								></i>
								<figcaption>
									<p class="text_title">미쏘</p>
									<p class="text_main">아이스탁몰 단독! 한정수량 특가</p>
								</figcaption>
							</figure>
						</a>
					</li>
				</ul>
			</div>

			<!-- MD 추천상품 -->
			<div class="m_category-recommend">
				<h3><b>MD 추천상품</b></h3>

				<!-- 내용없음 -->
				<p class="mm_text-none">
					<i class="ico_text-none"></i>등록된 내역이 없습니다
				</p>

				<!-- 상품리스트 - 스켈레톤 -->
				<div class="mm_product-list T=card T=skeleton">
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

				<!-- 상품리스트 -->
				<div class="mm_product-list T=card">
					<ul>
						<li>
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_3.png' }"
										></i>
										<figcaption>
											<p class="text_brand">테이즈</p>
											<p class="text_product">[지수's pick]_Soft Knit Bolero (Sky Blue)</p>
											<p class="text_sale">20%</p>
											<p class="text_price"><strong>126,400</strong><del><span>158,000</span></del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">무료배송</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a>
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_4.png' }"
										></i>
										<p class="text_product-status">품절임박</p>
										<figcaption>
											<p class="text_brand">조셉플라워</p>
											<p class="text_product">조셉플라워 스웨트셔츠 (MELANGE IVORY)</p>
											<p class="text_price"><strong>76,000</strong></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">무료배송</b>
												<b class="mm_tag T=square T=dark">쿠폰할인</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_1.png' }"
										></i>
										<p class="text_product-status">품절임박</p>
										<figcaption>
											<p class="text_brand">마뗑킴</p>
											<p class="text_product">DETACHABLE SLEEVES VOLUME JUMPER IN KHAKI</p>
											<p class="text_sale">30%</p>
											<p class="text_price"><strong>138,600</strong><del><span>198,000</span></del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">무료배송</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a>
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_2.png' }"
										></i>
										<p class="text_soldout">SOLD OUT</p>
										<figcaption>
											<p class="text_brand">마르디메크르디</p>
											<p class="text_product"><span class="text_foreword">[단독]</span>마르디 플라워 니트 풀오버 아이보리</p>
											<p class="text_sale">20%</p>
											<p class="text_price"><strong>124,200</strong><del><span>138,000</span></del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">무료배송</b>
												<b class="mm_tag T=square T=dark">쿠폰할인</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../error' }"
										></i>
										<p class="text_adult"><b class="mm_ir-blind">미성년자 구매불가</b><i class="ico_adult"></i></p>
										<figcaption>
											<p class="text_brand">아페쎄</p>
											<p class="text_product"><span class="text_foreword">[당일출고]</span>아페쎄 인디고 데님 토트백 에코백 COCSX M61445</p>
											<p class="text_sale">10%</p>
											<p class="text_price"><strong>106,200</strong><del>118,000</del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
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
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_1.png' }"
										></i>
										<figcaption>
											<p class="text_brand">솔트앤초콜릿</p>
											<p class="text_product">라운드 토 베이직 플랫 롱부츠 412148001 (3.5cm/3color)</p>
											<p class="text_price"><strong>108,000</strong></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">타임특가</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': '../image/_sample/prod_x3_3.png' }"
										></i>
										<figcaption>
											<p class="text_brand">내셔널지오그래픽</p>
											<p class="text_product">내셔널지오그래픽 N231WJP950 여성 마틴 간절기 중기장 후드 웨더 바람막이 자켓 OAK BEIGE</p>
											<p class="text_sale">13%</p>
											<p class="text_price"><strong>139,000</strong><del><span>159,000</span></del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">타임특가</b>
											</div>
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
							<div class="mm_product-item T=pa">
								<a href="prodDetail_info.html">
									<figure>
										<i
											class="mm_bg-cover image_product"
											data-lazyload="{ '_src': 'error' }"
										></i>
										<figcaption>
											<p class="text_brand">24/7 시리즈</p>
											<p class="text_product">[24/7 series] 4WAY COLLARLESS JACKET BLACK (247)</p>
											<p class="text_sale">15%</p>
											<p class="text_price"><strong>100,300</strong><del><span>118,800</span></del></p>
											<div class="mm_product-item-react">
												<p class="text_star"><i class="ico_star"></i><span>4.5</span></p>
												<p class="text_review"><i class="ico_review"></i><span>890</span></p>
												<p class="text_like"><i class="ico_like"></i><span>999+</span></p>
											</div>
											<div class="mm_tag-list">
												<b class="mm_tag T=square T=dark">타임특가</b>
											</div>
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
					</ul>
				</div>
			</div>
		</div>
	</LayoutMain>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 베스트 카테고리 sticky
	(function (__$category) {

		if (!__$category) return;

		var $gnb = mm.find('.mm_gnb-inner')[0];
		var _classOn = 'S=sticky-on';

		function categorySticky() {

			(mm.element.offset(__$category).top + __$category.offsetHeight < mm.element.offset($gnb).top + $gnb.offsetHeight) ? __$category.classList.add(_classOn) : __$category.classList.remove(_classOn);

		}

		mm.event.on(mm.scroll.el, 'scroll', categorySticky);

	})(mm.find('.m_best-category')[0]);
</script> -->