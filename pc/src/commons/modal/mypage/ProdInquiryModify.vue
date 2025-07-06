<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-inquiry'">
		<template #header>
			<h2><b>상품 문의하기</b></h2>
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
				<p>
					결제/적립금/환불 관련문의
					<a
						class="mm_btn T=xs T=line"
						href="#"
					>
						<b>고객센터</b><i class="ico_link T=xs"></i>
					</a>
				</p>
			</div>

			<!-- 상품정보 -->
			<div class="mm_product-select">
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
								<p class="text_brand">M.Mon 엠몬스타</p>
								<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
							</figcaption>
						</figure>
					</a>
				</div>
			</div>

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
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check
					checked
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
					<i class="ico_note"></i><b>상품문의 시 유의사항</b>
				</h6>
				<ul>
					<li>주문내역의 변경(확인)에 대한 내용, 주민등록번호, 연락처 등의 정보는 노출되지 않도록 주의해주세요.</li>
					<li>비방, 음란 등 제반 법령에 저촉되거나 광고성 등 게시글은 사전 고지 없이 삭제될 수 있습니다.</li>
				</ul>
			</section>
		</template>
	</ModalLayout>
</template>