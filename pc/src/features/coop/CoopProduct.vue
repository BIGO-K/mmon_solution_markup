<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<div class="m_prodetail">
		<!-- 상품상세 상단 -->
		<div class="m_prodetail-head">
			<div class="mm_inner">
				<div class="mm_lside">
					<!-- 상품 이미지 -->
					<div class="m_prodetail-thumbnail">
						<i class="image_thumbnail">
							<LazyloadMUI
								tag="'img'"
								:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
						<div class="m_prodetail-thumbnail-list">
							<ul class="mm_flex T=equal">
								<li>
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
								<li>
									<button
										type="button"
										class="btn_thumbnail"
									>
										<LazyloadMUI
											class="mm_bg-cover"
											:_src="'/public/images/dummy/prod_x3_1.png'"
										></LazyloadMUI>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_thumbnail"
									>
										<LazyloadMUI
											class="mm_bg-cover"
											:_src="'/public/images/dummy/prod_x3_2.png'"
										></LazyloadMUI>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_thumbnail"
									>
										<LazyloadMUI
											class="mm_bg-cover"
											:_src="'/public/images/dummy/prod_x3_3.png'"
										></LazyloadMUI>
									</button>
								</li>
							</ul>
						</div>
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
					<!-- 공동구매 안내 -->
					<!--
						(D) 공동구매 목표 달성시 'm_prodetail-head-coopbuy' 요소에 'S=coopbuy-complete' 클래스를 추가하고,
						목표 미달성시 'S=coopbuy-fail' 클래스를 추가합니다.
					-->
					<div class="m_prodetail-head-coopbuy">
						<p class="text_state">
							<strong>공동구매 진행 중</strong><b>D-10<strong>24<span>:</span>14<span>:</span>38</strong></b>
						</p>
						<!-- (D) 공동구매 목표 달성 시 노출합니다. -->
						<!-- <p class="text_state">
							<strong>공동구매 목표 달성</strong><b>D-10<strong>24<span>:</span>14<span>:</span>38</strong></b>
						</p> -->

						<!-- (D) 공동구매 목표 미달성 시 노출합니다 -->
						<!-- <p class="text_state">
							<strong>공동구매 목표 미달성</strong><b>D-0<strong>00<span>:</span>00<span>:</span>00</strong></b>
						</p> -->
						<div class="m...coopbuy-progress">
							<p class="text_goal">
								목표까지<b><strong>5,852<sub>명</sub></strong>/ 10,000명</b>
							</p>
							<!-- (D) 'm...coopbuy-progress-bar > i'의 title, width 값에 공동구매 목표 달성율값을 추가합니다. -->
							<b class="m...coopbuy-progress-bar">
								<i
									style="width: 60%;"
									title="60%"
								></i>
							</b>
						</div>
					</div>

					<!-- 상품정보 -->
					<div class="m_prodetail-head-product">
						<a
							class="btn_brand"
							href="#"
						>
							<b>BrandNAME</b><i class="ico_link"></i>
						</a>
						<p class="text_product">
							Prod_MMON Rosy Bag_3colors(Butter컬러 28일발송) N212UTS906 오버핏
						</p>
						<p class="text_price">
							<strong class="text_sale">45%</strong><strong>235,000</strong><del>350,000</del>
						</p>
					</div>

					<!-- 할인 혜택 -->
					<div class="m_prodetail-head-discount">
						<dl>
							<dt>M.MON 쇼핑몰 고객을 위한 혜택</dt>
							<dd></dd>
						</dl>
						<div
							class="mm_dropdown"
							data-dropdown
						>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>공동구매 할인가</b><b class="text_price"><strong>208,000</strong></b><i class="ico_dropdown"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<section>
										<h5><b>비회원가</b></h5>
										<dl>
											<dt>정가</dt>
											<dd class="text_price">
												<b>353,000</b>
											</dd>
										</dl>
										<dl>
											<dt>특가할인</dt>
											<dd class="text_price">
												<b>- 10,000</b>
											</dd>
										</dl>
										<dl>
											<dt>판매가</dt>
											<dd class="text_price">
												<strong>343,000</strong>
											</dd>
										</dl>
									</section>
									<section>
										<h5><b>회원가</b></h5>
										<dl>
											<dt>회원할인</dt>
											<dd class="text_price">
												<b>- 30,000</b>
											</dd>
										</dl>
										<dl>
											<dt>공동구매 할인</dt>
											<dd class="text_price">
												<b>- 22,000</b>
											</dd>
										</dl>
										<dl>
											<dt>회원 혜택가</dt>
											<dd class="text_price">
												<strong>208,000</strong>
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
							<!-- (D) 주문제작 상품인 경우 노출합니다 -->
							<!-- <dd>배송기간 5~7일</dd> -->
							<!-- <dd>주문 제작 상품 교환/반품 불가합니다</dd> -->

							<!-- (D) 해외배송 상품인 경우 노출합니다 -->
							<!-- <dd>해외배송 상품</dd> -->
							<!-- <dd>배송기간 5~7일</dd> -->
						</dl>
						<dl>
							<dt>혜택</dt>
							<dd><a href="#"><span>50,000원 이상 결제 시 무이자할부</span><i class="ico_help-fill"></i></a></dd>
						</dl>
						<!-- (D) 예약판매 상품인 경우 입력한 예약판매 스케줄을 노출합니다. -->
						<!-- <dl>
							<dt>예약배송</dt>
							<dd><p><span>예약판매 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
							<dd><p><span>예약배송 기간</span>2024-00-00 ~ 2024-00-00</p></dd>
						</dl> -->
						<dl class="m...info-coopbuy">
							<dt>공동구매</dt>
							<dd><span>공동구매 기간</span><strong>04.15(목) ~ 04.20(화) 15:00</strong></dd>
							<dd><span>목표인원</span><strong>10,000명</strong></dd>
							<dd><span>쿠폰사용 기간</span><strong>2021.09.01 ~ 2021.10.01</strong></dd>
						</dl>
					</div>

					<!-- 옵션선택 -->
					<!-- (D) 공동구매 목표 달성 실패 시 'm_product-option' 요소를 노출하지 않습니다. -->
					<div class="m_prodetail-head-option m_product-option">
						<a
							class="btn_size"
							href="#"
						>
							<i class="ico_size"></i><b>사이즈 가이드</b><i class="ico_link"></i>
						</a>

						<!-- 옵션 목록 -->
						<!--
							(D) 옵션1 또는 옵션2의 갯수가 6개 이하인 경우 버튼형 옵션을 사용하고, 7개 이상인 경우 셀렉트형 옵션을 사용합니다.
							버튼형 옵션인 경우 '.m_product-option-select' 요소에 'T=select-button' 클래스를 추가합니다.
							모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
						-->
						<div class="m_product-option-select">
							<!-- (D) 셀렉트형 옵션 + 선택옵션 없는 기본 상태의 옵션 샘플입니다. -->
							<!--
								(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
								이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
							-->
							<div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션1</b></h6>
								<!-- (D) 옵션을 선택하면 'btn_dropdown > b' 요소의 텍스트를 "옵션명" 에서 선택한 옵션명으로 변경합니다 -->
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>옵션명1</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>블랙</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>아이보리</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>카키</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션2</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>옵션명2</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<span
														class="mm_flex btn_option"
														title="품절"
													>
														<b>95</b><b>(품절)</b>
													</span>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>100</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>105</b><b>(3개)</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<!-- (D) 셀렉트형 옵션 + 옵션1 선택 상태의 옵션 샘플입니다. -->
							<!--
								(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
								이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
							-->
							<!-- <div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션1</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>아이보리</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>블랙</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option S=option-select"
													>
														<b>아이보리</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>카키</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션2</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>옵션명2</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<span
														class="mm_flex btn_option"
														title="품절"
													>
														<b>95</b><b>(품절)</b>
													</span>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>100</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>105</b><b>(3개)</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div> -->

							<!-- (D) 셀렉트형 옵션 + 옵션1이 '-'옵션인 경우의 옵션 샘플입니다. -->
							<!-- <div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
								style="display: none;"
							>
								<h6><b>옵션1</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>-</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<button
														type="button"
														class="btn_option S=option-select"
													>
														<b>-</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>옵션명</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<span
														class="mm_flex btn_option"
														title="품절"
													>
														<b>95</b><b>(품절)</b>
													</span>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>100</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>105</b><b>(3개)</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div> -->

							<!-- (D) 셀렉트형 옵션 + 옵션2가 '-'옵션인 경우의 옵션 샘플입니다. -->
							<!-- <div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
							>
								<h6><b>옵션</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>옵션명</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>블랙</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>아이보리</b>
													</button>
												</li>
												<li>
													<button
														type="button"
														class="btn_option"
													>
														<b>카키</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_option-select' }"
								style="display: none;"
							>
								<h6><b>옵션2</b></h6>
								<button
									type="button"
									class="btn_dropdown"
									title="펼쳐보기"
								>
									<b>-</b><i class="ico_dropdown T=bold"></i>
								</button>
								<div class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<div class="mm_scroller">
											<ul>
												<li>
													<button
														type="button"
														class="btn_option S=option-select"
													>
														<b>-</b>
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div> -->

							<!-- (D) 버튼형 옵션 + 선택옵션 없는 기본 상태의 옵션 샘플입니다. -->
							<!--
								(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
								이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
							-->
							<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스를 추가합니다. -->
							<!-- <section>
								<h6><b>옵션1</b></h6>
								<ul>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>네이비</b>
											<svg>
												<line
													x1="0"
													y1="100%"
													x2="100%"
													y2="0"
													stroke="#cdcdcd"
													stroke-width="1"
												/>
											</svg>
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
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그린</b>
										</button>
									</li>
								</ul>
							</section>
							<section>
								<h6><b>옵션2</b></h6>
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
										<button
											type="button"
											class="btn_option"
										>
											<b>100</b>
										</button>
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
							</section> -->

							<!-- (D) 버튼형 옵션 + 옵션1을 선택한 상태의 옵션 샘플입니다. -->
							<!-- <section>
								<h6><b>옵션1</b></h6>
								<ul>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>네이비</b>
											<svg>
												<line
													x1="0"
													y1="100%"
													x2="100%"
													y2="0"
													stroke="#cdcdcd"
													stroke-width="1"
												/>
											</svg>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option S=option-select"
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
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그린</b>
										</button>
									</li>
								</ul>
							</section>
							<section>
								<h6><b>옵션2</b></h6>
								<ul>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>95</b>
											<svg>
												<line
													x1="0"
													y1="100%"
													x2="100%"
													y2="0"
													stroke="#cdcdcd"
													stroke-width="1"
												/>
											</svg>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>100</b>
										</button>
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
										<span
											class="btn_option"
											title="품절"
										>
											<b>110</b>
											<svg>
												<line
													x1="0"
													y1="100%"
													x2="100%"
													y2="0"
													stroke="#cdcdcd"
													stroke-width="1"
												/>
											</svg>
										</span>
									</li>
								</ul>
							</section> -->

							<!-- (D) 버튼형 옵션 + 옵션1이 '-'옵션인 경우의 옵션 샘플입니다. -->
							<!-- <section style="display: none;">
								<h6><b>옵션1</b></h6>
								<ul>
									<li>
										<button
											type="button"
											class="btn_option S=option-select"
										>
											<b>-</b>
										</button>
									</li>
								</ul>
							</section>
							<section>
								<h6><b>옵션</b></h6>
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
										<button
											type="button"
											class="btn_option"
										>
											<b>100</b>
										</button>
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
							</section> -->

							<!-- (D) 버튼형 옵션 + 옵션2가 '-'옵션인 경우의 옵션 샘플입니다. -->
							<!-- <section>
								<h6><b>옵션</b></h6>
								<ul>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>네이비</b>
											<svg>
												<line
													x1="0"
													y1="100%"
													x2="100%"
													y2="0"
													stroke="#cdcdcd"
													stroke-width="1"
												/>
											</svg>
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
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그린</b>
										</button>
									</li>
								</ul>
							</section>
							<section style="display: none;">
								<h6><b>옵션2</b></h6>
								<ul>
									<li>
										<button
											type="button"
											class="btn_option S=option-select"
										>
											<b>-</b>
										</button>
									</li>
								</ul>
							</section> -->
						</div>

						<!-- 선택된 옵션 목록 -->
						<!--
							(D) 옵션을 4개이상 선택하여 ".m_product-option-selected" 요소에 스크롤이 생기는 경우 'S=selected-scroll' 클래스를 추가합니다.
								선택된 상품이 없을경우 .m_product-option-selected 요소를 노출하지 않습니다.
						-->
						<!-- <div class="m_product-option-selected S=selected-scroll">
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
						</div> -->

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

						<!-- 공동구매 안내 -->
						<!-- (D) 공동구매 진행 중에만 'm...option-coopbuy' 영역을 노출합니다. -->
						<div class="m...option-coopbuy">
							<strong>'공동구매 참여' 버튼 클릭 시</strong>
							<p>알림톡/SMS 수신에 동의한 것으로 간주되며 목표수량에 도달할 경우 공동구매 종료일 다음 날<br> 순차적으로 쿠폰 및 알림톡/SMS가 발송됩니다.</p>
						</div>

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
							<!-- (D) 솔루션에서 공동구매 시 일반구매 버튼 미노출 정책으로 변경됨 -->
							<!-- <a class="mm_btn T=lg T=line T=primary" href="#"><b>일반 구매</b></a> -->
							<button
								type="button"
								class="mm_btn T=lg T=primary"
							>
								<b>공동구매 참여</b>
							</button>

							<!-- (D) 공동구매 목표 달성 시 '공동구매가로 구매' 버튼을 노출합니다. -->
							<!-- <button type="button" class="mm_btn T=lg T=primary"><b>공동구매가로 구매</b></button> -->

							<!-- (D) 공동구매 목표 미달성 시 '해당 상품 구경하러 가기' 버튼을 노출합니다. -->
							<!-- <a class="mm_btn T=lg T=line T=primary" href="#"><b>해당 상품 구경하러 가기</b></a> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<!-- 공동구매 진행 단계 -->
			<div class="m_prodetail-coopbuy-process">
				<h4><strong>공동구매</strong><b>진행 단계</b></h4>
				<ol>
					<li>
						<i class="ico_coopbuy-join"></i>
						<dl>
							<dt>참여</dt>
							<dd>'공동구매 참여' 버튼을<br> 클릭합니다.</dd>
						</dl>
					</li>
					<li>
						<i class="ico_coopbuy-goal"></i>
						<dl>
							<dt>달성</dt>
							<dd>설정된 목표 수를<br> 달성하면</dd>
						</dl>
					</li>
					<li>
						<i class="ico_coopbuy-coupon"></i>
						<dl>
							<dt>발급</dt>
							<dd>할인쿠폰이 자동으로<br> 발급됩니다.</dd>
						</dl>
					</li>
					<li>
						<i class="ico_coopbuy-buy"></i>
						<dl>
							<dt>구매</dt>
							<dd>공동구매가로 상품을<br> 구매할 수 있습니다.</dd>
						</dl>
					</li>
				</ol>
			</div>

			<!-- 상품정보 탭 -->
			<div class="m_prodetail-tab">
				<!-- 상세정보 탭 -->
				<div class="m_prodetail-tab-info">
					<p class="text_code">
						상품번호<span>2345678</span>
					</p>
					<!-- 동영상 -->
					<div class="m...info-media">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/TM6m8TGlQBA"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>

					<!-- 상품 상세설명 및 이미지 -->
					<div class="m...info-desc">
						<!-- 상세설명 -->
						<div class="mm_editor">
							<!-- (D) 에디터로 등록 -->
							<p style="text-align: center;">
								Rosy Bag_3colors
							</p>
							<p style="text-align: center;">
								N212UTS906 오버핏
							</p>
							<p style="text-align: center;">
								Butter컬러 28일발송
							</p>
							<br>
							<p style="text-align: center;">
								<LazyloadMUI
									tag="'img'"
									:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
									alt=""
								></LazyloadMUI>
							</p>
							<br>
							<p style="text-align: center;">
								<LazyloadMUI
									tag="'img'"
									:_src="'/public/images/dummy/product_detail_1.png'"
									alt=""
								></LazyloadMUI>
							</p>
							<br>
							<br>
							<p style="text-align: center;">
								<LazyloadMUI
									tag="'img'"
									:_src="'/public/images/dummy/product_detail_1.png'"
									alt=""
								></LazyloadMUI>
							</p>
						</div>
					</div>

					<!-- 일반 상품 정보 -->
					<section class="m_prodetail-info">
						<h4 class="m_prodetail-info-title">
							<b>일반 상품 정보</b>
						</h4>
						<table>
							<colgroup>
								<col style="width: 209px;">
								<col>
							</colgroup>
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
									<td>새상품</td>
								</tr>
								<tr>
									<th scope="row">
										<b>브랜드</b>
									</th>
									<td>MMON</td>
								</tr>
								<tr>
									<th scope="row">
										<b>원산지</b>
									</th>
									<td>대한민국</td>
								</tr>
							</tbody>
						</table>
					</section>

					<!-- 상품정보고시 -->
					<section class="m_prodetail-info">
						<h4 class="m_prodetail-info-title">
							<b>상품정보고시</b>
						</h4>
						<table>
							<colgroup>
								<col style="width: 209px;">
								<col>
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">
										<b>소재</b>
									</th>
									<td>겉감: 나일론78%, 폴리에스터22%, 배색: 나일론100%, 안감: 폴리에스터 100%</td>
								</tr>
								<tr>
									<th scope="row">
										<b>색상</b>
									</th>
									<td>네이비, 블랙, 아이보리, 베이지, 카키, 레드</td>
								</tr>
								<tr>
									<th scope="row">
										<b>치수</b>
									</th>
									<td>95, 100, 105, 110, 115</td>
								</tr>
								<tr>
									<th scope="row">
										<b>제조자</b>
									</th>
									<td>EN OR</td>
								</tr>
								<tr>
									<th scope="row">
										<b>제조국</b>
									</th>
									<td>베트남</td>
								</tr>
								<tr>
									<th scope="row">
										<b>세탁방법 및 취급시 주의사항</b>
									</th>
									<td>표백제 및 강력 효소 세제는 절대로 사용하지 마십시오. 드라이를 권장합니다. 손세탁을 하실 경우 30도 이하의 온도에서 드라이 세제를 이용하여 세탁하여 주시고, 뜨거운 물에 세탁을 하시면 제품에 이상이 생길 수 있으므로 자제하시기 바랍니다</td>
								</tr>
								<tr>
									<th scope="row">
										<b>제조년월</b>
									</th>
									<td>2022.07.27</td>
								</tr>
								<tr>
									<th scope="row">
										<b>품질보증기준</b>
									</th>
									<td>본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거하여 보상받으실 수 있습니다</td>
								</tr>
								<tr>
									<th scope="row">
										<b>A/S 책임자와 전화번호</b>
									</th>
									<td>판매자 고객센터 1599-0000</td>
								</tr>
							</tbody>
						</table>
					</section>

					<!-- 상품 공통배너 -->
					<div class="m_prodetail-banner">
						<ul>
							<li>
								<!-- 이미지 등록 방식 -->
								<i class="image_banner">
									<LazyloadMUI
										tag="'img'"
										:_src="'/public/images/dummy/prodetail_banner_1.png'"
										alt="시그니처 2020 여름 콜렉션 비욘드 클로젯 티셔츠"
									></LazyloadMUI>
								</i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- 하단 옵션 선택 -->
		<!-- (D) 상품이 품절된 경우 하단 옵션선택 영역(.m_prodetail-buy)은 노출하지 않습니다 -->
		<!-- (D) 공동구매 목표 달성 실패 시 'm_product-option' 요소를 노출하지 않습니다. -->
		<div class="m_prodetail-buy m_product-option">
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
							<a
								class="mm_btn T=line T=primary"
								href="#"
							>
								<b>일반 구매</b>
							</a>
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>공동구매 참여</b>
							</button>

							<!-- (D) 공동구매 목표 달성시 '공동구매가로 구매' 버튼을 노출합니다. -->
							<!-- <button
								type="button"
								class="mm_btn T=primary"
							>
								<b>공동구매가로 구매</b>
							</button> -->
						</div>
					</div>
				</div>
			</div>
			<div class="mm_inner m_prodetail-buy-option">
				<div class="mm_lside">
					<!-- 옵션 목록 -->
					<!--
						(D) 옵션1 또는 옵션2의 갯수가 6개 이하인 경우 버튼형 옵션을 사용하고, 7개 이상인 경우 셀렉트형 옵션을 사용합니다.
						버튼형 옵션인 경우 '.m_product-option-select' 요소에 'T=select-button' 클래스를 추가합니다.
						모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
					-->
					<div class="m_product-option-select">
						<!-- (D) 셀렉트형 옵션 + 선택옵션 없는 기본 상태의 옵션 샘플입니다. -->
						<!--
							(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
							이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
						-->
						<div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션1</b></h6>
							<!-- (D) 옵션을 선택하면 'btn_dropdown > b' 요소의 텍스트를 "옵션명"에서 선택한 옵션명으로 변경합니다 -->
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>옵션명1</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>블랙</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>아이보리</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>카키</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션2</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>옵션명2</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<span
													class="mm_flex btn_option"
													title="품절"
												>
													<b>95</b><b>(품절)</b>
												</span>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>100</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>105</b><b>(3개)</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<!-- (D) 셀렉트형 옵션 + 옵션1 선택 상태의 옵션 샘플입니다. -->
						<!--
							(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
							이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
						-->
						<!-- <div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션1</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>아이보리</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>블랙</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option S=option-select"
												>
													<b>아이보리</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>카키</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션2</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>옵션명2</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<span
													class="mm_flex btn_option"
													title="품절"
												>
													<b>95</b><b>(품절)</b>
												</span>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>100</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>105</b><b>(3개)</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div> -->

						<!-- (D) 셀렉트형 옵션 + 옵션1이 '-'옵션인 경우의 옵션 샘플입니다. -->
						<!-- <div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
							style="display: none;"
						>
							<h6><b>옵션1</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>-</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<button
													type="button"
													class="btn_option S=option-select"
												>
													<b>-</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>옵션명</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<span
													class="mm_flex btn_option"
													title="품절"
												><b>95</b><b>(품절)</b></span>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>100</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>105</b><b>(3개)</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div> -->

						<!-- (D) 셀렉트형 옵션 + 옵션2가 '-'옵션인 경우의 옵션 샘플입니다. -->
						<!-- <div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
						>
							<h6><b>옵션</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>옵션명</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>블랙</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>아이보리</b>
												</button>
											</li>
											<li>
												<button
													type="button"
													class="btn_option"
												>
													<b>카키</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_option-select' }"
							style="display: none;"
						>
							<h6><b>옵션2</b></h6>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>-</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<ul>
											<li>
												<button
													type="button"
													class="btn_option S=option-select"
												>
													<b>-</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div> -->

						<!-- (D) 버튼형 옵션 + 선택옵션 없는 기본 상태의 옵션 샘플입니다. -->
						<!--
							(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
							이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
						-->
						<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스를 추가합니다. -->
						<!-- <section>
							<h6><b>옵션1</b></h6>
							<ul>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>네이비</b>
										<svg>
											<line
												x1="0"
												y1="100%"
												x2="100%"
												y2="0"
												stroke="#cdcdcd"
												stroke-width="1"
											/>
										</svg>
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
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>그린</b>
									</button>
								</li>
							</ul>
						</section>
						<section>
							<h6><b>옵션2</b></h6>
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
									<button
										type="button"
										class="btn_option"
									>
										<b>100</b>
									</button>
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
						</section> -->

						<!-- (D) 버튼형 옵션 + 옵션1을 선택한 상태의 옵션 샘플입니다. -->
						<!-- <section>
							<h6><b>옵션1</b></h6>
							<ul>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>네이비</b>
										<svg>
											<line
												x1="0"
												y1="100%"
												x2="100%"
												y2="0"
												stroke="#cdcdcd"
												stroke-width="1"
											/>
										</svg>
									</span>
								</li>
								<li>
									<button
										type="button"
										class="btn_option S=option-select"
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
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>그린</b>
									</button>
								</li>
							</ul>
						</section>
						<section>
							<h6><b>옵션2</b></h6>
							<ul>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>95</b>
										<svg>
											<line
												x1="0"
												y1="100%"
												x2="100%"
												y2="0"
												stroke="#cdcdcd"
												stroke-width="1"
											/>
										</svg>
									</span>
								</li>
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>100</b>
									</button>
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
									<span
										class="btn_option"
										title="품절"
									>
										<b>110</b>
										<svg>
											<line
												x1="0"
												y1="100%"
												x2="100%"
												y2="0"
												stroke="#cdcdcd"
												stroke-width="1"
											/>
										</svg>
									</span>
								</li>
							</ul>
						</section> -->

						<!-- (D) 버튼형 옵션 + 옵션1이 '-'옵션인 경우의 옵션 샘플입니다. -->
						<!-- <section style="display: none;">
							<h6><b>옵션1</b></h6>
							<ul>
								<li>
									<button
										type="button"
										class="btn_option S=option-select"
									>
										<b>-</b>
									</button>
								</li>
							</ul>
						</section>
						<section>
							<h6><b>옵션</b></h6>
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
									<button
										type="button"
										class="btn_option"
									>
										<b>100</b>
									</button>
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
						</section> -->

						<!-- (D) 버튼형 옵션 + 옵션2가 '-'옵션인 경우의 옵션 샘플입니다. -->
						<!-- <section>
							<h6><b>옵션</b></h6>
							<ul>
								<li>
									<span
										class="btn_option"
										title="품절"
									>
										<b>네이비</b>
										<svg>
											<line
												x1="0"
												y1="100%"
												x2="100%"
												y2="0"
												stroke="#cdcdcd"
												stroke-width="1"
											/>
										</svg>
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
								<li>
									<button
										type="button"
										class="btn_option"
									>
										<b>그린</b>
									</button>
								</li>
							</ul>
						</section>
						<section style="display: none;">
							<h6><b>옵션2</b></h6>
							<ul>
								<li>
									<button
										type="button"
										class="btn_option S=option-select"
									>
										<b>-</b>
									</button>
								</li>
							</ul>
						</section> -->
					</div>
				</div>
				<div class="mm_rside">
					<!-- 선택된 옵션 목록 -->
					<!--
						(D) 옵션을 3개이상 선택하여 ".m_product-option-selected" 요소에 스크롤이 생기는 경우 'S=selected-scroll' 클래스를 추가합니다.
							선택된 상품이 없을경우 .m_product-option-selected 요소를 노출하지 않습니다.
					-->
					<!-- <div class="m_product-option-selected S=selected-scroll">
						<h6><b>선택상품</b></h6>
						(D) 선택된 옵션이 없을경우 mm_scroller를 노출하지 않습니다
						<div class="mm_scroller">
							<ul>
								<li>
									<div class="m...selected-item">
										<p class="text_option">
											<b>네이비/100</b>
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
					</div> -->

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

					<!-- 공동구매 안내 -->
					<div class="mm_note m...option-coopbuy-note">
						<ul>
							<li>공동구매에 참여한 사용자에 한하여 해당 가격으로 구매 가능합니다.</li>
							<li>공동구매 쿠폰은 상품당 한 번만 사용 가능합니다.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style src="./_coopbuy.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script> -->