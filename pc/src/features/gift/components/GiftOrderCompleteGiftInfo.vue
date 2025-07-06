<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<!-- 사은품 정보 -->
	<div class="m_order-gift">
		<h4 class="mm_strapline T=line">
			<b>사은품 정보</b>
		</h4>
		<div class="mm_gift-list">
			<ul>
				<li>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="'../image/_sample/prod_x1_6.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									캠핑 폴딩박스
								</p>
								<p class="text_condition">
									전상품 25,000원 이상 구매 시
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
				<li>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="'../image/_sample/prod_x1_1.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									캠핑 폴딩박스
								</p>
								<p class="text_condition">
									전상품 25,000원 이상 구매 시
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
				<li>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="'../image/_sample/prod_x1_2.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									캠핑 폴딩박스
								</p>
								<p class="text_condition">
									전상품 25,000원 이상 구매 시
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
				<li>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="'../image/_sample/prod_x1_5.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									캠핑 폴딩박스
								</p>
								<p class="text_condition">
									전상품 25,000원 이상 구매 시
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
				<li>
					<div class="mm_gift-item">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_gift"
								:_src="'../image/_sample/prod_x1_4.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_name">
									캠핑 폴딩박스
								</p>
								<p class="text_condition">
									전상품 25,000원 이상 구매 시
								</p>
							</figcaption>
						</figure>
						<a
							class="btn_gift-info"
							href="#"
						><b>지급대상확인</b><i class="ico_link T=sm"></i></a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!--// 사은품 정보 -->
</template>