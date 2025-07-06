<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ReviewSatisfy from '@/features/reviewTemplate/components/ReviewTemplateSatisfy.vue';

	const reviewCountAPI = ref<reviewCountAPI>();
	const reviewListAPI = ref<reviewWrittenAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<reviewCountAPI>(`MEMBER_AGGREGATES_REVIEW`, reviewCountAPI);
	Api.get<reviewWrittenAPI>(`MEMBER_REVIEWS`, reviewListAPI);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		reviewTemplate: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>리뷰 관리</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyReview' }">
							<b>작성 가능한 리뷰 {{ reviewCountAPI?.reviews.writables }}</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyReviewWritten' }"
							title="선택됨"
						>
							<b>작성한 리뷰 {{ reviewCountAPI?.reviews.written }}</b>
						</router-link>
					</li>
				</ul>
			</div>

			<p
				v-if="(reviewListAPI?.paginator.data.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>작성한 리뷰가 없습니다
			</p>

			<div
				v-else
				class="m_myreview"
			>
				<!-- 리뷰목록 -->
				<div class="m_myreview-written">
					<ul>
						<li
							v-for="review in reviewListAPI?.paginator.data"
							:key="review.id"
						>
							<div class="mm_product-item T=single-sm">
								<a href="#">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="review.order_item.goods.thumbnail_url"
										></LazyloadMUI>
										<figcaption>
											<p class="text_brand">{{ review.order_item.goods.brand_name }}</p>
											<p class="text_product">{{ review.order_item.goods.name }}</p>
											<p class="text_option">{{ review.order_item.option_name }} / {{ review.order_item.ea }}개</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="mm_review">
								<div class="mm_review-head">
									<p class="text_star">
										<i class="ico_star-fill"></i><span>{{ review.rate }}</span>
									</p>
								</div>
								<!-- (D) 리뷰 내용이 3줄 이하인 경우는 리뷰 내용이 아래와 같이 노출됩니다 -->
								<!-- <p class="text_review">
									<b>
										{{ review.contents }}
									</b>
								</p> -->
								<p
									class="text_review"
									title="열기"
									data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
									tabindex="0"
								>
									<b>
										{{ review.contents }}
									</b>
									<span class="mm_btn T=line T=dark"><i class="ico_toggle"></i></span>
								</p>
								<ul
									v-if="review.image_urls"
									class="mm_review-image"
								>
									<li
										v-for="image, index in review.image_urls"
										:key="index"
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
								<p class="text_date">
									{{ review.created_at }}
								</p>
								<ReviewSatisfy
									v-if="feature.reviewTemplate._is"
									:templates="review.templates"
								></ReviewSatisfy>
								<div class="mm_review-foot">
									<p
										v-if="!review.image_urls"
										class="m_myreview-tooltip"
									>
										포토 등록 시 <strong class="mm_text-secondary">4,000원</strong> 추가
									</p>
									<a
										class="btn_modify"
										href="#"
									>
										<i class="ico_review-write"></i><b>리뷰 수정하기</b>
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<Pagination
					v-if="reviewListAPI?.paginator != null"
					:total-page="Math.ceil(reviewListAPI.paginator.total / reviewListAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</div>
		</template>
	</LayoutSub>
</template>