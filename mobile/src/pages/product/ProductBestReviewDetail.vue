<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const bestListAPI = ref<ProductBestReviewListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BEST_REVIEW`, ref: bestListAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>베스트 리뷰</b></h1>
		</template>

		<template #content>
			<div class="m_popup-review-detail">
				<div
					class="mm_carousel"
					data-carousel="{ '_isAutoHeight': true, 'onComplete': 'reviewAutoHide' }"
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li
								v-for="item in bestListAPI?.best_review"
								:key="item.id"
								class="mm_carousel-item"
							>
								<div class="mm_review">
									<div class="mm_review-head">
										<p class="text_user">
											<!-- (유료) 체험단 -->
											<!-- TODO 체험단 노출되어야하는지 확인 필요 -->
											<b class="mm_tag T=full T=square T=dark"><i class="ico_experience"></i>체험단</b>

											<LazyloadMUI
												class="mm_bg-contain image_grade"
												:_src="item.writer_grade_image_url"
												:_is-error-image="false"
											></LazyloadMUI>
											{{ item.writer_masking_id }}
										</p>
										<p class="text_star">
											<i class="ico_star-fill"></i><span>{{ item.rate }}</span>
										</p>
									</div>
									<ul class="m...detail-image">
										<li
											v-for="image in item.image_urls"
											:key="image"
										>
											<a href="#">
												<i class="image_review">
													<LazyloadMUI
														:_tag="'img'"
														:_src="image"
													></LazyloadMUI>
												</i>
											</a>
										</li>
									</ul>
									<p class="text_info">
										{{ item.option_name }}
									</p>
									<p class="text_review">
										<b v-html="item.contents"></b>
									</p>

									<!-- (유료) 개인화 상품 리뷰 -->
									<!-- TODO 개인화 상품 리뷰 노출되어야하는지 확인 필요 -->
									<div class="mm_satisfy">
										<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
										<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
										<dl><dt>핏</dt><dd>적당해요</dd></dl>
									</div>

									<p class="text_date">
										{{ item.created_at }}
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