<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>구매 확정</b></h1>
		</template>

		<template #content>
			<div class="m_popup-myconfirm">
				<h3 class="mm_heading">
					<b>구매 확정 이후로는 반품 및 교환이 불가하므로<br> 상품을 받으신 후 진행해주세요</b>
				</h3>
				<!-- 구매확정상품 -->
				<div class="mm_order-item">
					<div class="mm_order-item-seller">
						<div class="mm_order...seller-head">
							<h5><i class="ico_shop"></i><b>엠몬스타</b></h5>
						</div>
						<div class="mm_product-list T=sm">
							<ul>
								<li>
									<div class="mm_product-item">
										<a href="#">
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/_sample/prod_x1_2.png'"
												></LazyloadMUI>
												<figcaption>
													<p class="text_brand">엠몬스타</p>
													<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
													<p class="text_option">베이지 FREE / 1개</p>
												</figcaption>
											</figure>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="mm_inner">
					<p class="text_point">
						구매 확정 시 적립금 <b><strong>50</strong><sub>원</sub></b> 적립
					</p>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=primary"
							>
								<b>구매 확정하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>