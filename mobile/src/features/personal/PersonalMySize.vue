<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>My 사이즈</b></h1>
		</template>

		<template #content>
			<div class="m_popup-mysize">
				<h6 class="mm_text-label">
					<b>성별</b>
				</h6>
				<div class="mm_radio-list T=chain">
					<ul>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">선택안함</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">남성</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">여성</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<h6 class="mm_text-label">
					<b>MY 핏</b>
				</h6>
				<div class="mm_radio-list T=chain">
					<ul>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-fit"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">선택안함</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-fit"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">XS이하</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-fit"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">S~XL</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-fit"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">XXL이상</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<h6 class="mm_text-label">
					<b>신발 카테고리 선택</b>
				</h6>
				<div class="mm_radio-list T=chain">
					<ul>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-category"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">선택안함</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-category"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">공용</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-category"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">남성</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-category"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">여성</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<h6 class="mm_text-label">
					<b>신발 사이즈 선택</b>
				</h6>
				<div class="mm_radio-list T=chain">
					<ul>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">선택안함</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">210 이하</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">215</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">220</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">225</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">230</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">235</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">240</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">245</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">250</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">255</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">260</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">265</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">270</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">275</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">280</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">285</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">290</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">295</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-shoes-size"
									data-radio
								>
								<b class="mm_block">
									<span class="text_label">300 이상</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<h6 class="mm_text-label">
					<b>신체 정보 입력</b>
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
								type="number"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">키</span>
						</label>
					</div>
					<span class="text_linked">cm</span>
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="number"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">몸무게</span>
						</label>
					</div>
					<span class="text_linked">kg</span>
				</div>
				<div class="mm_note">
					<ul>
						<li>사이즈 정보를 입력해주시면 맞춤 상품을 추천해드립니다.</li>
					</ul>
				</div>
				<div class="m_popup-mysize-agree">
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">사이즈 정보 수집 및 이용 동의</span>
						</b>
					</label>
					<ul>
						<li><strong>1. 수집 목적:</strong> 상품 추천 서비스</li>
						<li><strong>2. 수집 항목:</strong> 성별, 신체 사이즈(키, 몸무게, 체형), 신발 카테고리, 신발 사이즈</li>
						<li><strong>3. 수집 및 보유기간:</strong> 개인정보처리방침 보유 기간에 따라 관리</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>