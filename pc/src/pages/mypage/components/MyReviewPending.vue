<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const reviewCountAPI = ref<reviewCountAPI>();
	const reviewListAPI = ref<reviewAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_AGGREGATES_REVIEW`, ref: reviewCountAPI },
		{ key: `MEMBER_REVIEW_WRITABLES`, ref: reviewListAPI },
	]);
</script>

<template>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="reviewListAPI != null && reviewListAPI.paginator.data.length < 1"
	>
		작성 가능한 리뷰가 없습니다
	</None>
	<!-- 작성 가능한 리뷰 -->
	<div
		v-else
		class="m_my-review-list"
	>
		<p class="text_note">
			{{ reviewListAPI?.paginator.total }}건의 리뷰를 작성하시면 최대 <strong>3,000원</strong>을 드립니다
		</p>
		<ul>
			<li
				v-for="review in reviewListAPI?.paginator.data"
				:key="review.order_id"
			>
				<div class="m_my-review-item">
					<p class="text_date">
						{{ review.ordered_at }}
					</p>
					<p class="text_tooltip">
						최대<strong>1,000원</strong>적립
					</p>
					<div class="mm_product-item T=single T=sm">
						<a href="#">
							<figure>
								<div class="mm_image-scale">
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="review.goods.thumbnail_url"
									></LazyloadMUI>
								</div>
								<figcaption>
									<p class="text_brand">{{ review.goods.brand_name }}</p>
									<p class="text_product">{{ review.goods.name }}</p>
									<p class="text_option">{{ review.option_name }} / {{ review.ea }}개</p>
								</figcaption>
							</figure>
						</a>
					</div>
					<a
						class="mm_btn T=xs T=primary btn_write"
						href="#"
					><i class="ico_review-write"></i><b>리뷰 쓰기</b></a>
				</div>
			</li>
		</ul>
	</div>
	<Pagination
		v-if="$route.query.type != 'none' && reviewListAPI?.paginator != null"
		:total-page="Math.ceil(reviewListAPI.paginator.total / reviewListAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>

	<!-- 유의사항 -->
	<div class="mm_note">
		<ul>
			<li>리뷰는 구매확정 시점부터 바로 작성하실 수 있습니다.</li>
			<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
		</ul>
	</div>
</template>