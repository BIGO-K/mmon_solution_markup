<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<div class="m_coopbuy">
			<div class="m_coopbuy-head">
				<h3><b>목표 수량에 도달하면<br> <strong>공동구매</strong> 성공!</b></h3>
				<strong>지금 참여하기 버튼을 누르세요</strong>
				<p>목표수량 도달 시 알림톡과 쿠폰이 발송되며 해당 상품을<br> 공동구매가로 구매하실 수 있습니다.</p>
				<ol>
					<li><i class="ico_coopbuy-join"></i><b>공동구매 참여</b></li>
					<li><i class="ico_coopbuy-goal"></i><b>목표 달성</b></li>
					<li><i class="ico_coopbuy-coupon"></i><b>쿠폰 발급</b></li>
					<li><i class="ico_coopbuy-buy"></i><b>상품 구매</b></li>
				</ol>
			</div>
			<div class="mm_inner">
				<div
					class="mm_tab"
					data-tab="{ '_isToggle': true }"
				>
					<div class="mm_tab_menu T=full">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
						<ul class="mm_flex T=equal">
							<li>
								<a
									class="btn_tab S=tab-on"
									href="#"
									title="선택됨"
								>
									<b>진행중</b>
								</a>
							</li>
							<li>
								<a
									class="btn_tab"
									href="#"
								>
									<b>마감</b>
								</a>
							</li>
						</ul>
					</div>

					<!-- 진행중 공동구매 -->
					<div class="mm_tab-item S=tab-on">
						<div class="m_coopbuy-on">
							<!-- 내용없음 -->
							<p class="mm_text-none">
								<i class="ico_text-none"></i>진행중인 공동구매가 없습니다
							</p>

							<!-- 스켈레톤 -->
							<ul
								v-if="_isLoading"
								class="m_coopbuy-list T=skeleton"
							>
								<li
									v-for="item in 4"
									:key="item"
								>
									<i class="image_product"></i>
									<p class="text_brand"></p>
									<p class="text_product"></p>
									<p class="text_price"></p>
								</li>
							</ul>

							<ul class="m_coopbuy-list">
								<!-- (D) 공동구매 목표 달성 시 li 요소에 'S=coopbuy-complete' 클래스를 추가합니다 -->
								<li>
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_1.png' }"
											></i>
											<figcaption>
												<div class="m_coopbuy-on-progress">
													<p class="text_state">
														<b>D<span>-</span>30<strong>719<span>:</span>14<span>:</span>38</strong></b>
														<strong>진행 중</strong>
													</p>
													<p class="text_goal">목표까지<b><strong>5,852<sub>명</sub></strong><span>/</span>10,000명</b></p>
													<b class="m...progress-bar">
														<i
															style="width: 50%;"
															title="50%"
														></i>
													</b>
												</div>
												<p class="text_brand">BRANDNAME 엠몬스타</p>
												<p class="text_product">ProductNAME [굿프라이스][22SPRING][기은세, 뷰티펄진 주 착용][1차: OATMEAL 4/8, 2차: LIGHT GREY</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<!-- 공유하기 -->
											<button
												type="button"
												class="mm_btn T=line T=dark btn_sns-share"
											>
												<i class="ico_share"></i><b>친구에게 공유하기</b>
											</button>
											<div class="mm_sns">
												<div class="mm_sns-dim"></div>
												<div class="mm_sns-list">
													<ul>
														<li>
															<button
																type="button"
																class="btn_sns-url"
															>
																<b>URL</b>
															</button>
														</li>
														<li>
															<a
																class="btn_sns-kakaotalk"
																href="#"
																target="_blank"
																title="새 창 열림"
															><i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b></a>
														</li>
													</ul>
													<button
														type="button"
														class="btn_sns-close"
													>
														<i class="ico_sns-close"></i><b class="mm_ir-blind">공유 모달 닫기</b>
													</button>
												</div>
											</div>
											<!--// 공유하기 -->
											<button
												type="button"
												class="mm_btn btn_coopbuy-entry"
											>
												<b>공동구매 참여하기</b>
											</button>
										</div>
									</div>
								</li>
								<li class="S=coopbuy-complete">
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_3.png' }"
											></i>
											<figcaption>
												<div class="m_coopbuy-on-progress">
													<p class="text_state">
														<b>D<span>-</span>2<strong>24<span>:</span>14<span>:</span>38</strong></b>
														<strong>목표 달성</strong>
													</p>
													<p class="text_goal">목표까지<b><strong>15,852<sub>명</sub></strong><span>/</span>10,000명</b></p>
													<b class="m...progress-bar"><i
														style="width: 100%;"
														title="100%"
													></i></b>
												</div>
												<p class="text_brand">BRANDNAME 엠몬스타</p>
												<p class="text_product">ProductNAME [굿프라이스][22SPRING][기은세, 뷰티펄진 주 착용][1차: OATMEAL 4/8, 2차: LIGHT GREY</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<!-- 공유하기 -->
											<button
												type="button"
												class="mm_btn T=line T=dark btn_sns-share"
											>
												<i class="ico_share"></i><b>친구에게 공유하기</b>
											</button>
											<div class="mm_sns">
												<div class="mm_sns-dim"></div>
												<div class="mm_sns-list">
													<ul>
														<li>
															<button
																type="button"
																class="btn_sns-url"
															>
																<b>URL</b>
															</button>
														</li>
														<li>
															<a
																class="btn_sns-kakaotalk"
																href="#"
																target="_blank"
																title="새 창 열림"
															><i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b></a>
														</li>
													</ul>
													<button
														type="button"
														class="btn_sns-close"
													>
														<i class="ico_sns-close"></i><b class="mm_ir-blind">공유 모달 닫기</b>
													</button>
												</div>
											</div>
											<!--// 공유하기 -->
											<button
												type="button"
												class="mm_btn btn_coopbuy-entry"
											>
												<b>공동구매 참여하기</b>
											</button>
										</div>
									</div>
								</li>
								<li class="S=coopbuy-complete">
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_3.png' }"
											></i>
											<p class="text_adult"><b class="mm_ir-blind">미성년자 구매불가</b><i class="ico_adult"></i></p>
											<figcaption>
												<div class="m_coopbuy-on-progress">
													<p class="text_state">
														<b>D<span>-</span>2<strong>24<span>:</span>14<span>:</span>38</strong></b>
														<strong>목표 달성</strong>
													</p>
													<p class="text_goal">목표까지<b><strong>15,852<sub>명</sub></strong><span>/</span>10,000명</b></p>
													<b class="m...progress-bar"><i
														style="width: 100%;"
														title="100%"
													></i></b>
												</div>
												<p class="text_brand">BRANDNAME 엠몬스타</p>
												<p class="text_product">ProductNAME [굿프라이스][22SPRING][기은세, 뷰티펄진 주 착용][1차: OATMEAL 4/8, 2차: LIGHT GREY</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
									<div class="mm_btn_box">
										<div class="mm_flex T=equal">
											<!-- 공유하기 -->
											<button
												type="button"
												class="mm_btn T=line T=dark btn_sns-share"
											>
												<i class="ico_share"></i><b>친구에게 공유하기</b>
											</button>
											<div class="mm_sns">
												<div class="mm_sns-dim"></div>
												<div class="mm_sns-list">
													<ul>
														<li>
															<button
																type="button"
																class="btn_sns-url"
															>
																<b>URL</b>
															</button>
														</li>
														<li>
															<a
																class="btn_sns-kakaotalk"
																href="#"
																target="_blank"
																title="새 창 열림"
															><i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b></a>
														</li>
													</ul>
													<button
														type="button"
														class="btn_sns-close"
													>
														<i class="ico_sns-close"></i><b class="mm_ir-blind">공유 모달 닫기</b>
													</button>
												</div>
											</div>
											<!--// 공유하기 -->
											<button
												type="button"
												class="mm_btn btn_coopbuy-entry"
											>
												<b>공동구매 참여하기</b>
											</button>
										</div>
									</div>
								</li>
							</ul>
							<div class="mm_foot">
								<div class="mm_btn_box">
									<button
										type="button"
										class="mm_btn T=line T=dark btn_more"
									>
										<b>더보기</b><i class="ico_more"></i>
									</button><br>
								</div>
							</div>
						</div>
					</div>

					<!-- 종료된 공동구매 -->
					<div class="mm_tab-item">
						<div class="m_coopbuy-off">
							<!-- 내용없음 -->
							<p class="mm_text-none">
								<i class="ico_text-none"></i>종료된 공동구매가 없습니다
							</p>

							<!-- 스켈레톤 -->
							<ul
								v-if="_isLoading"
								class="m_coopbuy-list T=skeleton"
							>
								<li
									v-for="item in 4"
									:key="item"
								>
									<i class="image_product"></i>
									<p class="text_brand"></p>
									<p class="text_product"></p>
									<p class="text_price"></p>
								</li>
							</ul>

							<ul class="m_coopbuy-list">
								<!-- 목표 달성 -->
								<li>
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_1.png' }"
											></i>
											<figcaption>
												<p class="text_state">목표 달성<span>/</span><strong>1,530</strong> 명 참여</p>
												<p class="text_brand">엠몬스타</p>
												<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</li>
								<li>
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_3.png' }"
											></i>
											<figcaption>
												<p class="text_state">목표 달성<span>/</span><strong>51,530</strong> 명 참여</p>
												<p class="text_brand">엠몬스타</p>
												<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼 블랙 숏 라이너 리버시블 점퍼</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</li>

								<!-- 목표 미달성 -->
								<li>
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_2.png' }"
											></i>
											<figcaption>
												<p class="text_state">목표 미달성<span>/</span><strong>1,530</strong> 명 참여</p>
												<p class="text_brand">엠몬스타</p>
												<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</li>
								<li>
									<a href="prodDetail_coopbuy.html">
										<figure>
											<i
												class="mm_bg-cover image_product"
												data-lazyload="{ '_src': '../image/_sample/prod_x3_4.png' }"
											></i>
											<p class="text_adult"><b class="mm_ir-blind">미성년자 구매불가</b><i class="ico_adult"></i></p>
											<figcaption>
												<p class="text_state">목표 미달성<span>/</span><strong>1,530</strong> 명 참여</p>
												<p class="text_brand">엠몬스타</p>
												<p class="text_product">남녀공용 블랙 숏 라이너 리버시블 점퍼</p>
												<p class="text_price"><del><span>118,800</span></del>공동구매가<strong>99,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</li>
							</ul>
							<div class="mm_foot">
								<div class="mm_btn_box">
									<button
										type="button"
										class="mm_btn T=line T=dark btn_more"
									>
										<b>더보기</b><i class="ico_more"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</LayoutMain>
</template>

<style src="./_coopbuy.scss" lang="scss"></style>