<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import ExperienceProductReview from '@/features/experience/components/ExperienceProductReview.vue';
	import ReviewTemplate from '@/features/reviewTemplate/components/ReviewTemplateDetail.vue';
	import ReviewTemplateSatisfy from '@/features/reviewTemplate/components/ReviewTemplateSatisfy.vue';

	const { configFeature } = useConfigStore();
	const reviewAggregateAPI = ref<ProductReviewAggregateAPI>();
	const listAPI = ref<ProductReviewListAPI>();
	const photoListAPI = ref<ProductReviewPhotoListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_AGGREGATE`, ref: reviewAggregateAPI },
		{ key: `GOODS_DETAIL_REVIEWS`, ref: listAPI },
		{ key: `GOODS_PHOTO_REVIEWS`, ref: photoListAPI },
	]);

	// TODO reviewList 삭제 필요
	const reviewLists = ref(['b']);
	const _isCheckPhoto = ref(false);

	// TODO json 연결: _isCheckPhoto 값이 false > 전체 리뷰 연결
	const changeReviewType = (): void => {

		reviewLists.value = (_isCheckPhoto.value) ? [] : ['b'];// json 연결: _isCheckPhpto 값에 따라 전체 또는 포토 리뷰 연결

	};
</script>

<template>
	<template v-if="listAPI?.paginator.total != 0 && !_isCheckPhoto">
		<div class="m_prodetail-tab-review">
			<div class="mm_flex m...review-info">
				<p>리뷰를 작성하시면 최대 1,000 + 500 적립금를 적립해드립니다.</p>
				<ul>
					<li><i class="ico_photo"></i>포토 리뷰<b><strong>1,000</strong><sub>원</sub></b></li>
					<li><i class="ico_write"></i>텍스트 리뷰<b><strong>500</strong><sub>원</sub></b></li>
				</ul>
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>리뷰 작성하기</b>
				</a>
			</div>
			<p class="mm_text-none">
				<i class="ico_text-none"></i>등록된 리뷰가 아직 없습니다
			</p>
		</div>
	</template>

	<template v-else>
		<div class="m_prodetail-tab-review">
			<p class="text_satisfy">
				<i class="ico_star"></i>
				<span>{{ reviewAggregateAPI?.review_average_star }}</span>
				<strong>{{ reviewAggregateAPI?.reviewer_count }}명</strong>의 고객님이 리뷰를 남겨주셨고,
				<strong class="mm_text-secondary">{{ reviewAggregateAPI?.satisfaction }}%</strong>가 만족하셨습니다.
			</p>
			<!-- (D) 슈즈 상품의 경우 'm...review-value' 요소에 'T=value-shoes' 클래스를 추가하며 노출되는 항목은 4개입니다. -->
			<ReviewTemplate v-if="configFeature.review_template"></ReviewTemplate>

			<div class="mm_flex m...review-info">
				<p>리뷰를 작성하시면 최대 1,000 + 500 적립금를 적립해드립니다.</p>
				<ul>
					<li><i class="ico_photo"></i>포토 리뷰<b><strong>1,000</strong><sub>원</sub></b></li>
					<li><i class="ico_write"></i>텍스트 리뷰<b><strong>500</strong><sub>원</sub></b></li>
				</ul>
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>리뷰 작성하기</b>
				</a>
			</div>

			<!-- 베스트 리뷰 -->
			<div class="m...review-best">
				<h5><b>베스트 리뷰</b></h5>
				<div
					class="mm_slider"
					data-slider="{ 'onReady': 'reviewBestReady', 'onActive': 'reviewBestChange' }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li class="mm_slider-item m...review-best-item">
								<a href="#">
									<div class="m...item-content">
										<b class="text_user">
											<LazyloadMUI
												class="mm_bg-cover"
												title="level5"
												:_src="'../image/common/level5.png'"
											></LazyloadMUI>soyo***
										</b>
										<b class="text_star"><i class="ico_star"></i><span>4.5</span></b>
										<span class="text_date">2020.08.24</span>
										<p class="text_review">
											꽤 길고 박시해요. 딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
											기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
											초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
											여름에 두루두루 잘 입을 수 있을 것 같아요 다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
										</p>
									</div>
									<!-- (D) 포토리뷰인 경우에만 '.m...item-image' 영역을 노출합니다 -->
									<div class="m...item-image">
										<LazyloadMUI
											class="mm_bg-cover image_review"
											:_src="'/public/images/dummy/prod_review_2.jpg'"
										></LazyloadMUI>
										<!-- (D) 등록된 포토 리뷰가 2장 이상 일 때 노출합니다 -->
										<b class="text_more"><i class="ico_plus"></i>3</b>
									</div>
								</a>
							</li>
							<li class="mm_slider-item m...review-best-item">
								<a href="#">
									<div class="m...item-content">
										<b class="text_user">
											<LazyloadMUI
												class="mm_bg-cover"
												title="level3"
												:_src="'../image/common/level3.png'"
											></LazyloadMUI>soyo***
										</b>
										<b class="text_star"><i class="ico_star"></i><span>4.5</span></b>
										<span class="text_date">2020.08.24</span>
										<p class="text_review">
											꽤 길고 박시해요. 딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
											기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
											초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
											여름에 두루두루 잘 입을 수 있을 것 같아요 다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
										</p>
									</div>
									<!-- (D) 포토리뷰인 경우에만 '.m...item-image' 영역을 노출합니다 -->
									<div class="m...item-image">
										<LazyloadMUI
											class="mm_bg-cover image_review"
											:_src="'/public/images/dummy/prod_review_1.jpg'"
										></LazyloadMUI>
										<!-- (D) 등록된 포토 리뷰가 2장 이상 일 때 노출합니다 -->
										<!-- <b class="text_more"><i class="ico_plus"></i>3</b> -->
									</div>
								</a>
							</li>
							<li class="mm_slider-item m...review-best-item">
								<a href="#">
									<div class="m...item-content">
										<b class="text_user">
											<LazyloadMUI
												class="mm_bg-cover"
												title="level2"
												:_src="'../image/common/level2.png'"
											></LazyloadMUI>soyo***
										</b>
										<b class="text_star"><i class="ico_star"></i><span>4.5</span></b>
										<span class="text_date">2020.08.24</span>
										<p class="text_review">
											꽤 길고 박시해요. 딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요<br>
											기장이 길어서 바지 안에 넣어입기에는 좀 귀찮고 모델사진처럼 치마에 넣어입으니까 편하고 좋네요<br>
											초록색 레터링에 반해서 좀 비싸도 사봤는데 만족합니다<br>
											여름에 두루두루 잘 입을 수 있을 것 같아요 다만 트임을 이용해서 앞만 넣고 입는건 뒤에 남는 기장 때문에 개인적으로 좀 애매한것 같아요.
										</p>
									</div>
								</a>
							</li>
							<li class="mm_slider-item m...review-best-item">
								<a href="#">
									<div class="m...item-content">
										<b class="text_user">
											<LazyloadMUI
												class="mm_bg-cover"
												title="level2"
												:_src="'../image/common/level2.png'"
											></LazyloadMUI>soyo***
										</b>
										<b class="text_star"><i class="ico_star"></i><span>4.5</span></b>
										<span class="text_date">2020.08.24</span>
										<p class="text_review">
											꽤 길고 박시해요. 딱 만졌을 때 면은 도톰하니 되게 질이 좋아보여요
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
					<!-- mm_slider에는 mm_slider-count요소가 없어서 해당 페이지에서만 별도로 추가하여 사용합니다(카운팅 index는 스크립트를 통해 변경됩니다.) -->
					<div class="mm_slider-count">
						<strong class="text_slider-index"></strong>
						<span class="text_slider-total"></span>
					</div>
				</div>
			</div>

			<!-- 리뷰 리스트 -->
			<div class="m...review-list">
				<h5 class="mm_strapline">
					<b>전체 리뷰수</b><strong>{{ listAPI?.paginator.total }}</strong>
				</h5>

				<!-- 포토리뷰 -->
				<div class="m...review-list-photo">
					<ul>
						<li
							v-for="item, index in photoListAPI?.paginator.data"
							:key="item.id"
						>
							<a
								v-if="photoListAPI != null && index === 9 && photoListAPI.paginator.data.length > 10"
								href="#"
							>
								<b class="mm_ir-blind">포토리뷰 더보기</b>
								<b>+{{ photoListAPI?.paginator.data.length - 10 }}</b>
								<LazyloadMUI
									class="mm_bg-cover image_review"
									:_src="'/public/images/dummy/prod_review_4.jpg'"
								></LazyloadMUI>
							</a>
							<a
								v-else
								href="#"
							>
								<b class="mm_ir-blind">{{ item.writer_masking_id }}님의 포토리뷰</b>
								<LazyloadMUI
									class="mm_bg-cover image_review"
									:_src="'/public/images/dummy/prod_review_1.jpg'"
								></LazyloadMUI>
							</a>
						</li>
					</ul>
				</div>

				<!-- 전체리뷰 -->
				<div class="m...review-list-unit">
					<label class="mm_form-check">
						<input
							v-model="_isCheckPhoto"
							type="checkbox"
							@change="changeReviewType"
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">포토리뷰</span>
						</b>
					</label>
					<!-- (D) 선택된 정렬메뉴에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<ul>
						<li>
							<a
								class="S=sort-on"
								href="#"
								title="선택됨"
							>
								<b>최신순</b>
							</a>
						</li>
						<li><a href="#"><b>별점 높은순</b></a></li>
						<li><a href="#"><b>별점 낮은순</b></a></li>
					</ul>
				</div>
				<p
					v-if="_isCheckPhoto && listAPI?.paginator.total === 0"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 포토리뷰가 아직 없습니다
				</p>
				<ul v-else>
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
					>
						<div class="m...review-item">
							<p
								class="text_user"
							>
								<ExperienceProductReview v-if="item.is_experience_group && configFeature.experience_review"></ExperienceProductReview>
								<LazyloadMUI
									class="mm_bg-cover"
									:title="item.writer_grade_label"
									:_src="'../image/common/level5.png'"
								></LazyloadMUI>{{ item.writer_masking_id }}
							</p>
							<p class="text_star">
								<i class="ico_star"></i><span>{{ item.rate }}</span>
							</p>
							<p class="text_info">
								{{ item.option_name }}
								<span v-if="item.height != null || item.weight != null || item.shoes_size != null">{{ `${item.height}cm/${item.weight}kg0/${item.shoes_size}mm` }}</span>
							</p>
							<ReviewTemplateSatisfy
								v-if="configFeature.review_template"
								:templates="item.templates"
							></ReviewTemplateSatisfy>
							<p class="text_review">
								{{ item.contents }}
							</p>
							<ul
								v-if="item.is_photo_review"
								class="m...review-item-photo"
							>
								<li
									v-for="imageUrl, index in item.image_urls"
									:key="index"
								>
									<a href="#">
										<LazyloadMUI
											class="mm_bg-cover image_review"
											:_src="'/public/images/dummy/prod_review_1.jpg'"
										></LazyloadMUI>
										<!-- TODO imageUrl 이미지 경로에 적용 필요 -->
										<b class="mm_ir-blind">
											{{ imageUrl }} 이미지 확대보기
										</b>
									</a>
								</li>
							</ul>
							<p class="text_date">
								{{ item.created_at }}
							</p>
						</div>
					</li>
				</ul>
				<Pagination
					v-if="listAPI != null && listAPI.paginator.total > 0"
					:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</div>
		</div>
	</template>
</template>