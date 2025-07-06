<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import ReviewTemplate from '@/features/reviewTemplate/components/ReviewTemplateProduct.vue';

	const bestListAPI = ref<ProductBestReviewListAPI>();
	const photoListAPI = ref<ProductReviewPhotoListAPI>();
	const listAPI = ref<ProductReviewListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_BEST_REVIEW`, ref: bestListAPI },
		{ key: `GOODS_PHOTO_REVIEWS`, ref: photoListAPI },
		{ key: `GOODS_DETAIL_REVIEWS`, ref: listAPI },
	]);

	const _isCheckPhoto = ref(false);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		ReviewTemplate: {
			_is: true,
			// value: productItem.product.icon
		},
	};
</script>

<template>
	<!-- 리뷰 -->
	<div class="m_prodetail-tab-review">
		<template v-if="listAPI && listAPI.paginator.data.length === 0">
			<div class="m...review-point">
				<p>리뷰 작성하시면 포인트를 적립해드립니다.</p>
				<ul>
					<li><p>텍스트 리뷰: <strong>500</strong><sub>원</sub></p></li>
					<li><p>포토 리뷰: <strong>1,000</strong><sub>원</sub></p></li>
				</ul>
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>리뷰 작성하기</b>
				</a>
			</div>

			<!-- 내용없음 -->
			<p class="mm_text-none">
				<i class="ico_text-none"></i>등록된 리뷰가 아직 없습니다
			</p>
		</template>

		<template v-else>
			<strong class="text_star"><i class="ico_star-fill"></i><span>4.5</span></strong>
			<p><strong>828명</strong>의 고객님이 리뷰를 남겨주셨고,<br> <strong class="mm_text-secondary">99%</strong>가 만족하셨습니다.</p>

			<ReviewTemplate v-if="feature.ReviewTemplate._is"></ReviewTemplate>

			<div class="m...review-best">
				<h4><b>베스트 리뷰</b></h4>
				<div
					class="mm_carousel"
					data-carousel="{ '_isMoreSide': true }"
				>
					<div class="mm_carousel-inner">
						<ul class="mm_carousel-list">
							<li
								v-for="item in bestListAPI?.best_review"
								:key="item.id"
								class="mm_carousel-item"
							>
								<router-link :to="{ name: 'ProductBestReviewDetail' }">
									<p class="text_user">
										<LazyloadMUI
											class="mm_bg-contain image_grade"
											:_src="item.writer_grade_image_url"
										></LazyloadMUI>
										{{ item.writer_masking_id }}
									</p>
									<p class="text_star">
										<i class="ico_star-fill"></i><span>{{ item.rate }}</span>
									</p>
									<div class="mm_flex">
										<p class="text_review">
											<b v-html="item.contents"></b>
											<span class="text_date">{{ item.created_at }}</span>
										</p>
										<LazyloadMUI
											class="mm_bg-cover image_review"
											:_src="item.image_urls[0]"
										></LazyloadMUI>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
					<div class="mm_carousel-count">
						<strong class="text_carousel-index">01</strong>
						<i>/</i>
						<span class="text_carousel-total">03</span>
					</div>
				</div>
			</div>
			<section class="m...review-list">
				<h4><b>전체 리뷰수</b><strong>{{ listAPI?.paginator.total }}</strong></h4>

				<!-- 포토리뷰 -->
				<div
					v-if="photoListAPI && photoListAPI.paginator.data.length > 0"
					class="m...review-list-photo"
				>
					<ul>
						<li
							v-for="item in photoListAPI.paginator.data.slice(0, 3)"
							:key="item.id"
						>
							<router-link :to="{ name: 'ProductPhotoReviewDetail' }">
								<LazyloadMUI
									class="mm_bg-cover image_review"
									:_src="item.image_url"
								></LazyloadMUI>
								<b class="mm_ir-blind">{{ item.writer_masking_id }}님의 포토리뷰</b>
							</router-link>
						</li>
						<li v-if="photoListAPI.paginator.data.length > 4">
							<router-link :to="{ name: 'ProductPhotoReviewImageList' }">
								<LazyloadMUI
									class="mm_bg-cover image_review"
									:_src="photoListAPI.paginator.data[3].image_url"
								></LazyloadMUI>
								<b>+{{ photoListAPI?.paginator.data.length - 3 }}<span class="mm_ir-blind">리뷰 더보기</span></b>
							</router-link>
						</li>
					</ul>
				</div>

				<!-- 리뷰 목록 -->
				<div class="m...review-list-head">
					<label class="mm_form-check">
						<input
							v-model="_isCheckPhoto"
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">포토리뷰</span>
						</b>
					</label>
					<ul>
						<li>
							<button
								type="button"
								class="S=on"
								title="선택됨"
							>
								<b>최신순</b>
							</button>
						</li>
						<li>
							<button type="button">
								<b>별점 높은순</b>
							</button>
						</li>
						<li>
							<button type="button">
								<b>별점 낮은순</b>
							</button>
						</li>
					</ul>
				</div>

				<!-- 내용없음 -->
				<p
					v-if="_isCheckPhoto && photoListAPI && photoListAPI.paginator.data.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 포토리뷰가 아직 없습니다
				</p>

				<ul v-else>
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
					>
						<div class="mm_review">
							<div class="mm_review-head">
								<p class="text_user">
									<!-- (유료) 체험단 -->
									<b class="mm_tag T=full T=square T=dark"><i class="ico_experience"></i>체험단</b>

									<LazyloadMUI
										class="mm_bg-contain image_grade"
										:_src="item.writer_grade_image_url"
									></LazyloadMUI>
									{{ item.writer_masking_id }}
								</p>
								<p class="text_star">
									<i class="ico_star-fill"></i><span>{{ item.rate }}</span>
								</p>
								<p class="text_info">
									{{ item.option_name }}
								</p>
							</div>
							<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
							<p
								v-if="'리뷰 내용 3줄 이하'"
								class="text_review"
							>
								<b>{{ item.contents }}</b>
							</p>
							<p
								v-else
								class="text_review"
								title="열기"
								data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
								tabindex="0"
							>
								{{ item.contents }}
								<span class="mm_btn T=line T=dark"><i class="ico_toggle"></i></span>
							</p>

							<!-- (유료) 개인화 상품 리뷰 -->
							<div class="mm_satisfy">
								<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
								<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
								<dl><dt>핏</dt><dd>적당해요</dd></dl>
							</div>

							<ul
								v-if="item.is_photo_review"
								class="mm_review-image"
							>
								<li
									v-for="imageUrl, index in item.image_urls"
									:key="index"
								>
									<a href="_popup_imageZoom.html">
										<i class="image_review">
											<LazyloadMUI
												class="mm_bg-contain image_grade"
												:_tag="'img'"
												:_src="imageUrl"
											></LazyloadMUI>
										</i>
									</a>
								</li>
							</ul>
							<p class="text_date">
								{{ item.created_at }}
								{{ listAPI?.paginator.total }}
							</p>
						</div>
					</li>
				</ul>

				<Pagination
					v-if="listAPI != null && listAPI.paginator.total > 0"
					:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</section>
		</template>
	</div>
</template>