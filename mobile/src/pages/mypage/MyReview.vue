<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const reviewCountAPI = ref<reviewCountAPI>();
	const reviewListAPI = ref<reviewAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<reviewCountAPI>(`MEMBER_AGGREGATES_REVIEW`, reviewCountAPI);
	Api.get<reviewAPI>(`MEMBER_REVIEW_WRITABLES`, reviewListAPI);
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
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyReview' }"
							title="선택됨"
						>
							<b>작성 가능한 리뷰 {{ reviewCountAPI?.reviews.writables }}</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyReviewWritten' }">
							<b>작성한 리뷰 {{ reviewCountAPI?.reviews.written }}</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="m_myreview">
				<p
					v-if="(reviewListAPI?.paginator.data.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>작성 가능한 리뷰가 없습니다
				</p>

				<template v-else>
					<p class="m_myreview-note">
						{{ reviewListAPI?.paginator.total }}건의 리뷰를 작성하시면 <strong class="mm_text-variable">최대 5,000원</strong>을 드립니다
					</p>
					<!-- 리뷰목록 -->
					<div class="m_myreview-list">
						<ul>
							<li
								v-for="review in reviewListAPI?.paginator.data"
								:key="review.order_id"
							>
								<p class="text_date">
									{{ review.ordered_at }}
								</p>
								<div class="mm_product-item T=single-sm">
									<a href="#">
										<figure>
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="review.goods.thumbnail_url"
											></LazyloadMUI>
											<figcaption>
												<p class="text_brand">{{ review.goods.brand_name }}</p>
												<p class="text_product">{{ review.goods.name }}</p>
												<p class="text_option">{{ review.option_name }} / {{ review.ea }}개</p>
											</figcaption>
										</figure>
									</a>
								</div>
								<p class="m_myreview-tooltip">
									최대 <strong class="mm_text-secondary">5,000원</strong> 적립
								</p>
								<a
									class="btn_write-review"
									href="_popup_reviewRegister.html"
								>
									<i class="ico_review-write"></i><b class="mm_ir-blind">리뷰 작성하기</b>
								</a>
							</li>
						</ul>
					</div>
				</template>

				<!-- 유의사항 -->
				<div class="mm_note">
					<ul>
						<li>리뷰는 배송출발 시점부터 바로 작성할 수 있습니다.</li>
						<li>구매확정 후 30일 경과 시 리뷰를 작성할 수 없습니다.</li>
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