<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>리뷰 쓰기</b></h1>
		</template>

		<template #content>
			<div class="m_popup-myreview">
				<!-- 상품정보 : 선택형 -->
				<div class="m_popup-myreview-product">
					<div class="m...product-point">
						<p><i class="ico_review-photo"></i>포토 리뷰 등록 시 최대<b><strong>5,000</strong><sub>원</sub></b>적립!</p>
						<div class="m...product-point-inner">
							<dl><dt>텍스트 리뷰</dt><dd><strong>1,000</strong><sub>원</sub></dd></dl>
							<dl><dt>포토 리뷰</dt><dd><strong>5,000</strong><sub>원</sub></dd></dl>
						</div>
					</div>
					<div class="mm_product-select">
						<div
							class="mm_dropdown"
							data-dropdown
						>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<b>상품을 선택해주세요</b><i class="ico_dropdown T=bold"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_scroller">
										<div class="mm_product-list T=xs">
											<ul>
												<li>
													<div class="mm_product-item T=single-xs">
														<a>
															<figure>
																<i
																	class="mm_bg-cover image_product"
																	data-lazyload="{ '_src': '../image/_sample/prod_x1_2.png' }"
																></i>
																<figcaption>
																	<p class="text_product">시스루스트라이프셔츠</p>
																	<p class="text_option">화이트 FREE</p>
																</figcaption>
															</figure>
														</a>
													</div>
												</li>
												<li>
													<div class="mm_product-item T=single-xs">
														<a>
															<figure>
																<i
																	class="mm_bg-cover image_product"
																	data-lazyload="{ '_src': '../image/_sample/prod_x1_2.png' }"
																></i>
																<figcaption>
																	<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140드레스_MJM1OP3140</p>
																	<p class="text_option">화이트 FREE</p>
																</figcaption>
															</figure>
														</a>
													</div>
												</li>
												<li>
													<div class="mm_product-item T=single-xs">
														<a>
															<figure>
																<i
																	class="mm_bg-cover image_product"
																	data-lazyload="{ '_src': '../image/_sample/prod_x1_2.png' }"
																></i>
																<figcaption>
																	<p class="text_product">시스루스트라이프셔츠</p>
																	<p class="text_option">화이트 FREE</p>
																</figcaption>
															</figure>
														</a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- (D) 선택된 상품이 노출됩니다. -->
						<div class="mm_product-select-complete"></div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 별점 -->
				<section>
					<h6><b>상품은 만족하셨나요?</b></h6>
					<!--
						(D) 별점이 선택된 상태일 때는 m_popup-myreview-starscore 태그에 'S=starscore-choice' 클래스가 추가됩니다.
						선택된 별점의 li에 'S=starscore-on' 클래스와 button에 '선택됨' 타이틀이 추가되며, input hidden의 value값에 점수가 입력됩니다. (0 선택안됨)
					-->
					<div class="m_popup-myreview-starscore">
						<ul>
							<li>
								<button type="button">
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 1점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 2점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 3점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 4점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 5점</b>
								</button>
							</li>
						</ul>
						<input
							type="hidden"
							value="0"
						>
					</div>
				</section>

				<div class="mm_inner">
					<h6 class="mm_text-label">
						<b>리뷰 내용</b>
					</h6>
					<div class="mm_form-textarea">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<textarea
								class="textfield"
								data-text="{ '_byte': 2000 }"
							></textarea><i class="bg_text"></i>
							<span class="text_placeholder">최소 10자 이상 입력하세요</span>
						</label>
					</div>
					<div class="mm_form-multiple">
						<ul class="mm_flex T=equal">
							<li>
								<div class="mm_form-image">
									<button
										type="button"
										class="btn_remove-file"
									>
										<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
									</button>
									<div class="mm_form-image-preview"></div>
									<label>
										<input
											type="file"
											accept="image/*"
											data-file="{ '_imageSize': 'cover' }"
										>
										<b class="mm_form-image-box"><i class="ico_upload"></i><span class="mm_ir-blind">사진 첨부하기</span></b>
									</label>
								</div>
							</li>
						</ul>
						<label class="mm_btn T=line T=variable btn_select-multiple">
							<input
								type="file"
								accept="image/*"
								data-multiple="{ '_max': 3, '_isMax': true, '_isAuto': false }"
								multiple
							>
							<b>한번에 여러장 선택하기</b>
						</label>
					</div>
					<div class="mm_note">
						<ul>
							<li>사진은 jpg, png 파일로 3개까지 업로드 가능합니다.</li>
							<li>첫번째 등록한 사진이 리뷰 대표 이미지로 설정됩니다.</li>
							<li>입력하신 리뷰 위에 등록한 이미지가 노출됩니다.</li>
							<li>동일한 문자 또는 자음/모음은 4회 이상 연속 입력할 수 없습니다.</li>
							<li>소중한 고객님의 개인 정보 보호를 위해 주민번호, 전화번호 등 개 인 정보는 절대 입력하지 않도록 주의해주세요.</li>
							<li>저작권 침해/음란/욕설/비방 글, 개인 정보 유출(전화번호, 주민 번호, 이름, 아이디 등), 판매/광고/홍보성 글을 등록한 경우 임의 로 삭제될 수 있습니다.</li>
						</ul>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>등록하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>