<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ReviewSatisfy from '@/features/reviewTemplate/components/ReviewTemplateSatisfy.vue';

	const { configFeature } = useConfigStore();
	const reviewCountAPI = ref<reviewCountAPI>();
	const reviewListAPI = ref<reviewWrittenAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_AGGREGATES_REVIEW`, ref: reviewCountAPI },
		{ key: `MEMBER_REVIEWS`, ref: reviewListAPI },
	]);
</script>

<template>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="reviewListAPI != null && reviewListAPI.paginator.data.length < 1"
	>
		작성한 리뷰가 없습니다
	</None>

	<!-- 작성한 리뷰 -->
	<div
		v-else
		class="m_my-review-list T=written"
	>
		<ul>
			<li
				v-for="review in reviewListAPI?.paginator.data"
				:key="review.id"
			>
				<!-- (D) 리뷰 내용이 3줄 이상이거나 포토리뷰가 포함된 경우 'm_my-review-item' 요소에 T=item-toggle 클래스를 추가합니다. -->
				<div
					class="m_my-review-item"
					:class="{ 'T=item-toggle': review.image_urls }"
				>
					<p class="text_date">
						{{ review.created_at }}
					</p>
					<div class="mm_product-item T=single T=sm">
						<a href="#">
							<figure>
								<div class="mm_image-scale">
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="review.order_item.goods.thumbnail_url"
									></LazyloadMUI>
								</div>
								<figcaption>
									<p class="text_brand">{{ review.order_item.goods.brand_name }}</p>
									<p class="text_product">{{ review.order_item.goods.name }}</p>
									<p class="text_option">{{ review.order_item.option_name }} / {{ review.order_item.ea }}개</p>
								</figcaption>
							</figure>
						</a>
					</div>
					<p class="text_star">
						<i class="ico_star"></i><span>{{ review.rate }}</span>
					</p>
					<p
						class="text_review"
						tabindex="0"
						data-switch="{ '_isParent': true, '_parentSelector': '.m_my-review-item', '_defaultTitle': '열기', '_title': '닫기' }"
						title="열기"
					>
						<b>
							{{ review.contents }}
						</b>
						<span
							v-if="review.image_urls"
							class="mm_btn T=xs T=line T=light"
						><i class="ico_toggle T=round"></i></span>
					</p>
					<ReviewSatisfy
						v-if="configFeature.review_template"
						:templates="review.templates"
					></ReviewSatisfy>
					<ul class="m...item-image">
						<li
							v-for="image, index in review.image_urls"
							:key="index"
						>
							<a href="#">
								<i class="image_review">
									<LazyloadMUI
										:_tag="'img'"
										alt=""
										:_src="image"
										:_is-ratio="true"
									></LazyloadMUI>
								</i>
							</a>
						</li>
					</ul>
					<!-- (D) 등록 리뷰의 사진 미등록시에만 '.text_tooltip' 요소를 노출합니다. -->
					<p
						v-if="!review.image_urls"
						class="text_tooltip"
					>
						포토 등록 시 <strong>4,000원</strong>추가
					</p>
					<a
						class="mm_btn T=xs T=primary btn_modify"
						href="#"
					><i class="ico_review-write"></i><b>리뷰 수정</b></a>
				</div>
			</li>
		</ul>
	</div>
	<Pagination
		v-if="$route.query.type != 'none' && reviewListAPI?.paginator != null"
		:total-page="Math.ceil(reviewListAPI.paginator.total / reviewListAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>
</template>