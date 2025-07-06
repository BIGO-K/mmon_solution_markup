<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import ReviewSatisfy from '@/features/reviewTemplate/components/ReviewTemplateSatisfy.vue';

	const detailAPI = ref<ExperienceDetailAPI>();

	// api
	Api.getAll([
		{ key: `EXPERIENCEGROUP_REVIEW_DETAILS`, ref: detailAPI },
	]);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		reviewTemplate: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>체험단 후기 상세</b></h1>
		</template>

		<template #content>
			<div class="m_popup-experience-detail">
				<!-- 체험단 후기 상단 -->
				<div class="m...detail-head">
					<h3 class="text_title">
						{{ detailAPI?.detail.title }}
					</h3>
					<b class="text_user">{{ detailAPI?.detail.writer }}</b>
					<b class="text_date">{{ detailAPI?.detail.created_at }}</b>
					<b class="text_view">조회수 <strong>{{ detailAPI?.detail.view_count }}</strong></b>
				</div>

				<hr class="mm_line">

				<!-- 체험단 후기 상품 -->
				<div
					v-if="detailAPI"
					class="mm_product-item T=single-sm"
				>
					<router-link :to="{ name:'ProductDetail', params: { id: detailAPI.detail.goods_id } }">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="detailAPI.detail.goods_thumbnail_url"
							></LazyloadMUI>
							<figcaption>
								<p class="text_brand">
									{{ detailAPI?.detail.goods_name }}
								</p>
								<p class="text_product">
									{{ detailAPI?.detail.goods_name }}
								</p>
								<p class="text_price">
									<strong>{{ detailAPI?.detail.base_discounted_price }}</strong>
								</p>
							</figcaption>
						</figure>
					</router-link>
				</div>

				<div class="mm_inner">
					<!-- 체험단 후기 -->
					<div class="m...detail-content">
						<b class="text_star">
							<i
								class="ico_star-fill"
								title="별점"
							></i><span>{{ detailAPI?.detail.grade }}</span>
						</b>
						<b class="text_size">{{ `${ detailAPI?.detail.height }cm/${ detailAPI?.detail.weight }kg/${ detailAPI?.detail.shose_size }mm` }}</b>
						<p
							class="text_review"
							v-html="detailAPI?.detail.contents"
						></p>
					</div>

					<!-- 체험단 후기 사진 -->
					<div class="m...detail-photo">
						<ul>
							<li
								v-for="image in detailAPI?.detail.image_url_list"
								:key="image"
							>
								<i class="image_review">
									<LazyloadMUI
										:_tag="'img'"
										:_src="image"
										:alt="image"
									></LazyloadMUI>
								</i>
							</li>
						</ul>
					</div>

					<ReviewSatisfy
						v-if="feature.reviewTemplate._is && detailAPI && detailAPI.detail.templates.length > 0"
						:templates="detailAPI?.detail.templates"
					></ReviewSatisfy>
					<p class="text_thumb">
						이 리뷰가 도움이 되었다면 <strong>클릭!</strong>
					</p>
					<button
						type="button"
						class="btn_thumb"
						:class="{ 'S=switch-on': true }"
						title="선택됨"
						data-switch
					>
						<i class="ico_thumb"></i><b>1,000</b>
					</button>
				</div>

				<!-- 하단버튼 -->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=primary"
							@click.prevent="$router.go(-1)"
						>
							<b>목록으로</b>
						</a>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<style src="./_experience.scss" lang="scss"></style>