<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<!-- 사은품 정보 -->
	<div class="m_order-gift">
		<section class="mm_order-form">
			<h4 class="mm_strapline T=line">
				<b>사은품 정보</b>
			</h4>
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>사은품 선택</b><small>(선택1)</small>
						</th>
						<td>
							<div class="mm_gift-list">
								<ul>
									<li>
										<input
											type="radio"
											name="dev_radio-gift"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_2.png'"
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
										<input
											type="radio"
											name="dev_radio-gift"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_3.png'"
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
										<input
											type="radio"
											name="dev_radio-gift"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_4.png'"
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
										<input
											type="radio"
											name="dev_radio-gift"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_1.png'"
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
										<input
											type="radio"
											name="dev_radio-gift"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<p><strong>선택안함</strong>구매상품만 받을게요</p>
										</div>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<b>사은품 선택</b><small>(선택2)</small>
						</th>
						<td>
							<div class="mm_gift-list">
								<ul>
									<li>
										<input
											type="radio"
											name="dev_radio-gift2"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_6.png'"
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
										<!-- (D) 이미 지급 받아서 다시 받을 수 없는 사은품일 때 아래와 같이 노출합니다. -->
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_gift"
													:_src="'/public/images/dummy/prod_x1_2.png'"
												></LazyloadMUI>
												<figcaption>
													<p class="text_note">
														이미 지급받으신 사은품입니다
													</p>
												</figcaption>
											</figure>
											<b class="btn_gift-info">지급대상확인<i class="ico_link T=sm"></i></b>
										</div>
									</li>
									<li>
										<input
											type="radio"
											name="dev_radio-gift2"
											data-radio
										>
										<div class="mm_gift-item">
											<i class="ico_form-radio T=circle"></i>
											<p><strong>선택안함</strong>구매상품만 받을게요</p>
										</div>
									</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	</div>
	<!--// 사은품 정보 -->
</template>