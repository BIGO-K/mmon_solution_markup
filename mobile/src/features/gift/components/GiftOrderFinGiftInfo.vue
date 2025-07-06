<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	// TODO mm_gift-list 컴포넌트로 분리해서 사용
</script>

<template>
	<!-- 사은품 정보 -->
	<section>
		<h4 class="mm_strapline">
			<b>사은품 정보</b>
		</h4>
		<ul class="mm_gift-list">
			<li>
				<div class="mm_gift-item">
					<figure>
						<LazyloadMUI
							class="mm_bg-cover image_gift"
							:_src="'/public/images/_sample/prod_x1_1.png'"
						></LazyloadMUI>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시전상품 25,000원 이상 구매 시
							</p>
						</figcaption>
					</figure>
					<div class="mm_btn_box">
						<div class="mm_rside">
							<router-link
								class="btn_gift-info"
								:to="{ name: 'ProductGiftTarget' }"
							>
								<b>지급대상확인</b><i class="ico_link T=xs"></i>
							</router-link>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="mm_gift-item">
					<figure>
						<LazyloadMUI
							class="mm_bg-cover image_gift"
							:_src="'/public/images/_sample/prod_x1_2.png'"
						></LazyloadMUI>
						<figcaption>
							<p class="text_name">
								내셔널지오그래픽 텀블러 증정
							</p>
							<p class="text_condition">
								전상품 25,000원 이상 구매 시
							</p>
						</figcaption>
					</figure>
					<div class="mm_btn_box">
						<div class="mm_rside">
							<router-link
								class="btn_gift-info"
								:to="{ name: 'ProductGiftTarget' }"
							>
								<b>지급대상확인</b><i class="ico_link T=xs"></i>
							</router-link>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<style src="../_gift.scss" lang="scss"></style>