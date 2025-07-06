<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>포토리뷰</b></h1>
		</template>

		<template #content>
			<div class="m_popup-review-detail">
				<div
					class="mm_carousel"
					data-carousel="{ '_isAutoHeight': true, 'onComplete': 'reviewAutoHide' }"
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li class="mm_carousel-item">
								<div class="mm_review">
									<div class="mm_review-head">
										<p class="text_user">
											<!-- (유료) 체험단 -->
											<b class="mm_tag T=full T=square T=dark"><i class="ico_experience"></i>체험단</b>

											<i
												class="mm_bg-contain image_grade"
												data-lazyload="{ '_src': '../image/common/level5.png', '_isErrorImage': false }"
											></i>seed***
										</p>
										<p class="text_star">
											<i class="ico_star-fill"></i><span>4.5</span>
										</p>
									</div>
									<ul class="m...detail-image">
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/brand_wide_1.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_5.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_6.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
									</ul>
									<p class="text_info">
										화이트/85
									</p>
									<p class="text_review">
										<b>
											주문하고 다음날 바로 받았어요. 옆트임이 길어서 고민하다<br>
											주문했는데 연출하기 좀 애매한거 같아요.....
										</b>
									</p>

									<!-- (유료) 개인화 상품 리뷰 -->
									<div class="mm_satisfy">
										<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
										<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
										<dl><dt>핏</dt><dd>적당해요</dd></dl>
									</div>

									<p class="text_date">
										2022.05.26
									</p>
								</div>
							</li>
							<li class="mm_carousel-item">
								<div class="mm_review">
									<div class="mm_review-head">
										<p class="text_user">
											<i
												class="mm_bg-contain image_grade"
												data-lazyload="{ '_src': '../image/common/level5.png', '_isErrorImage': false }"
											></i>seed***
										</p>
										<p class="text_star">
											<i class="ico_star-fill"></i><span>4.5</span>
										</p>
									</div>
									<ul class="m...detail-image">
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_5.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_6.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
									</ul>
									<p class="text_info">
										화이트/85
									</p>
									<p class="text_review">
										<b>
											꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
											기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
											초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
											여름에 두루두루 잘 입을 수 있을 것 같아요<br>
											다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
										</b>
									</p>
									<p class="text_date">
										2022.05.26
									</p>
								</div>
							</li>
							<li class="mm_carousel-item">
								<div class="mm_review">
									<div class="mm_review-head">
										<p class="text_user">
											<i
												class="mm_bg-contain image_grade"
												data-lazyload="{ '_src': '../image/common/level5.png', '_isErrorImage': false }"
											></i>seed***
										</p>
										<p class="text_star">
											<i class="ico_star-fill"></i><span>4.5</span>
										</p>
									</div>
									<ul class="m...detail-image">
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_1.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
									</ul>
									<p class="text_info">
										화이트/85
									</p>
									<p class="text_review">
										<b>좋은 가격에 품질 무난하네요~! 핏은 딱 잡아주는 느낌은 아니고, 편안하게 핏 되네요 촉감이 굉장히 부드러워요~! 근데 몇번 입으면 보풀이 생길 것 같기도 해요.</b>
									</p>
									<p class="text_date">
										2022.05.26
									</p>
								</div>
							</li>
							<li class="mm_carousel-item">
								<div class="mm_review">
									<div class="mm_review-head">
										<p class="text_user">
											<i
												class="mm_bg-contain image_grade"
												data-lazyload="{ '_src': '../image/common/level5.png', '_isErrorImage': false }"
											></i>seed***
										</p>
										<p class="text_star">
											<i class="ico_star-fill"></i><span>4.5</span>
										</p>
									</div>
									<ul class="m...detail-image">
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_1.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="image_review">
													<img
														src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
														data-lazyload="{ '_src': '../image/_sample/prod_x1_2.png', '_isRatio': true }"
														alt=""
													>
												</i>
											</a>
										</li>
									</ul>
									<p class="text_info">
										화이트/85
									</p>
									<p class="text_review">
										<b>
											꽤 길고 박시해요.<br>딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
											기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
											초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
											여름에 두루두루 잘 입을 수 있을 것 같아요<br>
											다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
										</b>
									</p>
									<p class="text_date">
										2022.05.26
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_carousel-control">
						<button
							type="button"
							class="btn_carousel-prev"
						>
							<i class="ico_page-prev"></i><b class="mm_ir-blind">이전 리뷰 보기</b>
						</button>
						<button
							type="button"
							class="btn_carousel-next"
						>
							<i class="ico_page-next"></i><b class="mm_ir-blind">다음 리뷰 보기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 버튼 노출/숨김
	function reviewAutoHide(__isChange) {

		if (__isChange === false) return;

		var $carousel = mm.find('.mm_carousel')[0];
		var $btnControls = mm.find('.btn_carousel-prev, .btn_carousel-next', $carousel);
		var _classOn = 'S=control-on';

		mm.class.add($btnControls, _classOn);
		mm.delay.on(mm.class.remove, { _time: 1, _isSec: true, _name: 'DELAY_REVIEW_CONTROL_HIDE', _isOverwrite: true, params: [$btnControls, _classOn] });

	}

	mm.load(mm.delay.on(reviewAutoHide, { _time: 300 }));
</script> -->