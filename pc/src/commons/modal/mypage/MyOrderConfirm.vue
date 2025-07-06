<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>구매 확정</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-my-confirm">
				<strong>구매 확정 이후로는 반품 및 교환이 불가하므로<br> 상품을 받으신 후 진행해주세요</strong>

				<!-- 구매확정목록 -->
				<section class="mm_order-item-seller">
					<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
					<ul>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_4.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 10개</p>
											</figcaption>
										</figure>
									</a>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<p>구매 확정 시 적립금 <b><strong>300</strong><sub>원</sub></b>적립</p>

				<!-- 하단버튼 -->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>구매확정</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>