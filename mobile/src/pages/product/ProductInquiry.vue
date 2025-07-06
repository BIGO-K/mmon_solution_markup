<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>상품 문의하기</b></h1>
		</template>

		<template #content>
			<div class="m_popup-inquiry">
				<dl><dt>업체 정보</dt><dd>엠몬스타/02-1234-5678</dd></dl>
				<p>결제/적립금/환불 관련문의<a href="#"><b>고객센터 바로가기</b><i class="ico_link"></i></a></p>
				<div class="mm_product-item T=single-sm">
					<a href="#">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'/public/images/_sample/prod_x1_1.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_brand">엠몬스타</p>
								<p class="text_product">[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140</p>
							</figcaption>
						</figure>
					</a>
				</div>
				<div class="mmYYYN_inner">
					<h6 class="mm_text-label">
						<b>문의 유형</b>
					</h6>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>문의 유형을 선택하세요</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
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
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">문의 제목을 입력하세요</span>
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
							<span class="text_placeholder">개인정보 입력 시 사전 고지없이 삭제될 수 있습니다<br> 최소 10자 이상 입력하세요</span>
						</label>
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
					<div class="mm_note">
						<div
							class="mm_dropdown"
							data-dropdown
						>
							<button
								type="button"
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<i class="ico_info"></i><b>상품 문의 시 유의사항</b><i class="ico_dropdown T=box"></i>
							</button>
							<div class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<ul>
										<li>주문내역의 변경(확인)에 대한 내용, 주민등록번호, 연락처 등의 정보는 노출되지 않도록 주의해주세요.</li>
										<li>비방, 음란 등 제반 법령에 저촉되거나 광고성 등 게시글은 사전 고지 없이 삭제될 수 있습니다.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>