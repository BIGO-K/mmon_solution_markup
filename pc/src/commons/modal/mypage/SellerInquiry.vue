<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-inquiry'">
		<template #header>
			<h2><b>판매자 문의하기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<!-- 업체정보 -->
			<div class="m_modal-inquiry-head">
				<dl><dt>업체정보</dt><dd>주식회사 해리슨/01-1234-5678</dd></dl>
			</div>

			<!-- 상품정보 -->
			<!--
				(D) 단일/묶음상품에 따라 노출되는 'mm_product-select(상품정보)'의 형태가 다릅니다.
				1. 상품정보 자동노출 형태 : 단일 상품 주문건, '마이페이지 > MY리뷰'에서 리뷰수정 버튼 클릭 시
				2. 상품 선택 형태 : 주문관리 페이지에서 한 셀러에게 2개 이상 구매한 상품 주문건
			-->
			<!-- 상품정보 : 선택형 -->
			<div class="mm_product-select">
				<div
					class="mm_dropdown"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>문의 상품을 선택하세요</b><i class="ico_dropdown T=bold"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_scroller">
								<ul>
									<li>
										<div class="mm_product-item T=single T=sm">
											<a>
												<figure>
													<div class="mm_image-scale">
														<LazyloadMUI
															class="mm_bg-cover image_product"
															:_src="'/public/images/dummy/prod_x1_2.png'"
														></LazyloadMUI>
													</div>
													<figcaption>
														<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
														<p class="text_option">화이트 FREE / 1개</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item T=single T=sm">
											<a>
												<figure>
													<div class="mm_image-scale">
														<LazyloadMUI
															class="mm_bg-cover image_product"
															:_src="'/public/images/dummy/prod_x1_2.png'"
														></LazyloadMUI>
													</div>
													<figcaption>
														<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
														<p class="text_option">화이트 FREE / 1개</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
									<li>
										<div class="mm_product-item T=single T=sm">
											<a>
												<figure>
													<div class="mm_image-scale">
														<LazyloadMUI
															class="mm_bg-cover image_product"
															:_src="'/public/images/dummy/prod_x1_2.png'"
														></LazyloadMUI>
													</div>
													<figcaption>
														<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
														<p class="text_option">화이트 FREE / 1개</p>
													</figcaption>
												</figure>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div class="mm_product-select-complete"></div>
			</div>

			<!-- 상품정보 : 자동노출 -->
			<!-- <div class="mm_product-select">
				<div class="mm_product-item T=single T=sm">
					<a>
						<figure>
							<div class="mm_image-scale">
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_2.png'"
								></LazyloadMUI>
							</div>
							<figcaption>
								<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
								<p class="text_option">화이트 FREE / 1개</p>
							</figcaption>
						</figure>
					</a>
				</div>
			</div> -->

			<!-- 유형 선택 -->
			<h6 class="mm_text-label">
				<b>문의 유형</b>
			</h6>
			<div class="mm_form-select T=short">
				<label>
					<select data-select>
						<option>문의 유형을 선택하세요</option>
					</select>
					<b class="text_selected"></b>
					<i class="ico_form-select"></i>
				</label>
			</div>

			<!-- 문의 작성 -->
			<h6 class="mm_text-label">
				<b>문의 제목</b>
			</h6>
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="text"
						class="textfield"
						data-text
						maxlength="30"
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">문의 제목을 30자 이하로 입력하세요</span>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>문의 내용</b>
			</h6>
			<div class="mm_form-textarea">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<textarea
						class="textfield"
						data-text="{ '_byte': 2000 }"
					></textarea>
					<i class="bg_text"></i>
					<span class="text_placeholder">최소 10자 이상 입력하세요</span>
				</label>
			</div>
			<div class="mm_note">
				<ul>
					<li>결제, 적립금, 환불 관련 문의는 고객센터 &#62; 1:1 고객상담을 통해 문의하세요.</li>
					<li>상품, 배송, 기타를 선택한 문의는 해당 상품의 상세페이지 &#62; Q&#38;A 영역에 노출됩니다.</li>
				</ul>
			</div>
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">비공개</span>
				</b>
			</label>

			<!-- 하단 버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>등록하기</b>
					</button>
				</div>
			</div>

			<!-- 유의사항 -->
			<section class="mm_note">
				<h6 class="text_title">
					<i class="ico_note"></i><b>판매자 문의 시 주의사항</b>
				</h6>
				<ul>
					<li>알림톡/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
					<li>주민등록번호, 전화번호, 이메일 등 개인 정보를 남기면 타인에 의해 도용될 수 있습니다.</li>
				</ul>
			</section>
		</template>
	</ModalLayout>
</template>