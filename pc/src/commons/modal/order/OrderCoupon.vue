<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-order-coupon'">
		<template #header>
			<h2><b>쿠폰 적용</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<section class="mm_order-item-seller T=scroller">
				<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
				<div class="mm_scroller">
					<ul>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_1.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 1개</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_form-select T=short">
									<label>
										<select data-select>
											<option>쿠폰을 선택하세요</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_2.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 1개</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_form-select T=short">
									<label>
										<select data-select>
											<option>쿠폰을 선택하세요</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single T=sm">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_3.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 1개</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_form-select T=short">
									<label>
										<select data-select>
											<option>쿠폰을 선택하세요</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single T=sm">
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
												<p class="text_option">화이트 FREE / 1개</p>
												<p class="text_price"><strong>44,000</strong></p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm_form-select T=short">
									<label>
										<select data-select>
											<option>쿠폰을 선택하세요</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box T=equal">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>적용하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>