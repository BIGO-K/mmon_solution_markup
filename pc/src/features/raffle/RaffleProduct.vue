<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<div class="m_prodetail">
		<!-- 상품상세 상단 -->
		<div class="m_prodetail-head">
			<div class="mm_inner">
				<div class="mm_lside">
					<div class="m_prodetail-head-raffle">
						<strong class="text_time">42<span>:</span>30<span>:</span>17</strong>
						<p class="text_join">
							<strong>821,000</strong>명 참여중
						</p>
					</div>

					<!-- 상품 이미지 -->
					<div class="m_prodetail-thumbnail">
						<i class="image_thumbnail">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
					</div>

					<a
						class="btn_raffle-home"
						href="#"
					>
						<b>래플 메인으로 바로가기</b><i class="ico_link"></i>
					</a>
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
											<dt>쿠폰할인</dt>
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
						<dl class="m...info-raffle">
							<dt>래플</dt>
							<dd><span>래플 응모기간</span><strong>04.15(목) ~ 04.20(화) 15:00</strong></dd>
							<dd><span>당첨자 발표일</span><strong>04.21(수)</strong></dd>
							<dd><span>당첨자 구매기간</span><strong>2021.09.01 ~ 2021.10.01</strong></dd>
							<dd><span>당첨 예정자 수</span><strong>5명</strong></dd>
						</dl>
					</div>

					<!-- 옵션선택 -->
					<!-- (D) 래플 당첨 후 구매 가능한 경우에만 '.m_product-option' 영역을 노출합니다 -->
					<div class="m_prodetail-head-option m_product-option">
						<a
							class="btn_size"
							href="#"
						><i class="ico_size"></i><b>사이즈 가이드</b><i class="ico_link"></i></a>
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
						<!-- <div class="m_product-option-selected">
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
						<!-- (D) 래플 당첨 후 구매 가능한 경우에만 '구매하기' 버튼을 노출합니다 -->
						<button
							type="button"
							class="mm_btn T=lg T=primary btn_product-raffle"
						>
							<b>구매하기</b>
						</button>
						<!-- <button type="button" class="mm_btn T=lg T=primary btn_product-raffle"><b>응모하기</b></button> -->
						<!-- <b class="mm_btn T=lg T=disabled btn_product-raffle">응모 완료</b> -->
						<!-- <b class="mm_btn T=lg T=primary btn_product-raffle">5.28(금) 17:00 당첨자 발표 예정</b> -->
						<!-- <a class="mm_btn T=lg T=primary btn_product-raffle" href="#"><b>당첨 결과 확인하기</b></a> -->
						<!-- <b class="mm_btn T=lg T=disabled btn_product-raffle">래플 종료</b> -->
						<!-- <b class="mm_btn T=lg T=primary btn_product-raffle">진행 예정</b> -->
						<!-- <b class="mm_btn T=lg T=disabled btn_product-raffle">구매 완료</b> -->
					</div>
				</div>
			</div>
		</div>
		<div class="mm_inner">
			<!-- 추천 아이템 -->
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
							<li>
								<button
									type="button"
									class="btn_tab S=tab-on"
									title="선택됨"
								>
									<b>상세정보</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_tab"
								>
									<b>상품 Q&#38;A (30)</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_tab"
								>
									<b>판매자 정보</b>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<!-- 상세정보 탭 -->
				<div class="m_prodetail-tab-info">
					<!-- 상품 공통배너 -->
					<div class="m_prodetail-banner">
						<ul>
							<li>
								<!-- 이미지 등록 방식 -->
								<i class="image_banner">
									<LazyloadMUI
										:_tag="'img'"
										:_src="'/public/images/dummy/prodetail_banner_1.png'"
										alt="시그니처 2020 여름 콜렉션 비욘드 클로젯 티셔츠"
									></LazyloadMUI>
								</i>
							</li>
							<li>
								<!-- 에디터 등록 방식 -->
								<div class="mm_editor">
									<p>
										<LazyloadMUI
											:_tag="'img'"
											:_src="'/public/images/dummy/prodetail_banner_2.png'"
											alt="시그니처 2020 여름 콜렉션 비욘드 클로젯 티셔츠"
										></LazyloadMUI>
									</p>
								</div>
							</li>
						</ul>
					</div>

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
									:_tag="'img'"
									:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
									alt=""
								></LazyloadMUI>
							</p>
							<br>
							<p style="text-align: center;">
								<LazyloadMUI
									:_tag="'img'"
									:_src="'/public/images/dummy/product_detail_1.png'"
									alt=""
								></LazyloadMUI>
							</p>
							<br>
							<br>
							<p style="text-align: center;">
								<LazyloadMUI
									:_tag="'img'"
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
										:_tag="'img'"
										:_src="'/public/images/dummy/prodetail_banner_1.png'"
										alt="시그니처 2020 여름 콜렉션 비욘드 클로젯 티셔츠"
									></LazyloadMUI>
								</i>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- 상품상세 하단 -->
			<div class="m_prodetail-foot">
				<!-- 추천상품 -->
				<section>
					<h4><b>이 상품도 좋아하실 것 같아요</b></h4>
					<div class="mm_product-list">
						<div
							class="mm_slider"
							data-slider="{ '_isLoop': false }"
						>
							<div class="mm_slider-inner">
								<ul class="mm_slider-list">
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a>
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
														<p class="text_price">
															<strong>99,000</strong>
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
				</section>

				<!-- 인기상품 -->
				<section>
					<h4><b>이 브랜드의 인기상품</b></h4>
					<div class="mm_product-list">
						<div
							class="mm_slider"
							data-slider="{ '_isLoop': false }"
						>
							<div class="mm_slider-inner">
								<ul class="mm_slider-list">
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
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
														<p class="text_brand">엠몬스타</p>
														<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점 퍼 블랙 숏 라이너 리버시블 점퍼</p>
														<p class="text_sale">20%</p>
														<p class="text_price">
															<strong>99,000</strong>
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a>
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
									<li class="mm_slider-item">
										<div class="mm_product-item">
											<a href="#">
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
														<p class="text_price">
															<strong>99,000</strong>
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
				</section>
			</div>
		</div>

		<!-- 하단 옵션 선택 -->
		<!-- (D) 상품이 품절된 경우 하단 옵션선택 영역(.m_prodetail-buy)은 노출하지 않습니다 -->
		<!-- (D) 래플 당첨 후 구매 가능한 경우에만 '.m_product-option' 영역을 노출합니다 -->
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
								<div class="mm_dropdown	-item-inner">
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
					<!-- <div class="m_product-option-selected">
						<h6><b>선택상품</b></h6>
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
				</div>
			</div>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-productDetail.js"></script> -->

<style src="./_raffle.scss" lang="scss"></style>