<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';

	const photoReviewDetailAPI = ref<PhotoReviewDetailAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BEST_REVIEW`, ref: photoReviewDetailAPI },
	]);
</script>

<template>
	<ModalLayout :modal-class="'m_modal-prodetail-review'">
		<template #header>
			<h2><b>포토리뷰</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="mm_flex">
				<!-- 리뷰사진 -->
				<div class="m_prodetail-thumbnail">
					<i class="image_thumbnail">
						<LazyloadMUI
							tag="'img'"
							:_src="'/public/images/dummy/brand_wide_1.png'"
							alt=""
						></LazyloadMUI>
					</i>
					<div class="m_prodetail-thumbnail-list">
						<ul class="mm_flex T=equal">
							<li
								v-for="thumbnail in photoReviewDetailAPI?.photo_review.image_urls"
								:key="thumbnail"
							>
								<button
									type="button"
									class="btn_thumbnail"
								>
									<LazyloadMUI
										class="mm_bg-cover"
										:_src="'/public/images/dummy/brand_wide_1.png'"
									></LazyloadMUI>
								</button>
							</li>
						</ul>
					</div>
				</div>

				<!-- 리뷰내용 -->
				<div class="m...review-item">
					<div class="mm_scroller">
						<div class="m...review-item-head">
							<p class="text_star">
								<i
									class="ico_star"
									title="별점"
								></i><span>{{ photoReviewDetailAPI?.photo_review.rate }}</span>
							</p>
							<p class="text_user">
								<!-- TODO 체험단 json 연결 ? 어디서 가져오는지 확인 필요 -->
								<b class="mm_tag T=bg T=dark"><i class="ico_experience"></i>체험단</b>
								<LazyloadMUI
									class="mm_bg-cover"
									:_src="'../image/common/level5.png'"
									title="level5"
								></LazyloadMUI>{{ photoReviewDetailAPI?.photo_review.writer_masking_id }}
							</p>
							<p class="text_info">
								{{ photoReviewDetailAPI?.photo_review.option_name }}
							</p>
							<!-- TODO 개인화 상품 리뷰 json 연결 ? 어디서 가져오는지 확인 필요 -->
							<div class="mm_satisfy">
								<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
								<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
								<dl><dt>핏</dt><dd>적당해요</dd></dl>
							</div>
							<p class="text_date">
								2020.05.26
							</p>
						</div>
						<p
							class="text_review"
							v-html="photoReviewDetailAPI?.photo_review.contents"
						></p>
					</div>
				</div>
			</div>

			<!-- 리뷰 컨트롤버튼 -->
			<button
				type="button"
				class="btn_control-prev"
			>
				<i class="ico_control-prev"></i><b class="mm_ir-blind">이전 리뷰 보기</b>
			</button>
			<button
				type="button"
				class="btn_control-next"
			>
				<i class="ico_control-next"></i><b class="mm_ir-blind">다음 리뷰 보기</b>
			</button>
			<button
				type="button"
				class="mm_btn T=line btn_control-back"
			>
				<i class="ico_review-list"></i><b>전체보기</b>
			</button>
		</template>
	</ModalLayout>
</template>