<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>신규 배송지 등록</b></h1>
		</template>

		<template #content>
			<div class="m_popup-address">
				<h6 class="mm_text-label">
					<b>배송지명</b>
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
							maxlength="5"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">배송지명을 입력하세요(필수입력)</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>받는 사람</b>
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
						<span class="text_placeholder">받는 사람을 입력하세요(필수입력)</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
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
							type="tel"
							class="textfield"
							data-text
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호를 입력하세요(필수·숫자만입력)</span>
					</label>
				</div>
				<div class="mm_form_mix-address">
					<h6 class="mm_text-label">
						<b>주소</b>
					</h6>
					<div class="mm_form_mix-linked">
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
									readonly
								>
								<i class="bg_text"></i>
								<span class="text_placeholder mm_ir-blind">우편번호</span>
							</label>
						</div>
						<a
							href="_popup_postcode.html"
							class="mm_btn T=dark"
						>
							<b>우편번호 찾기</b>
						</a>
					</div>
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
								readonly
							>
							<i class="bg_text"></i>
							<span class="text_placeholder mm_ir-blind">검색주소</span>
						</label>
					</div>
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
							<span class="text_placeholder">상세 주소를 입력하세요(필수입력)</span>
						</label>
					</div>
				</div>

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
			</div>
		</template>
	</LayoutPopup>
</template>