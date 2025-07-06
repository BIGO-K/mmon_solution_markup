<script setup lang="ts">

</script>

<template>
	<div class="mm_inner m_partnership">
		<h3 class="mm_heading">
			<b>제휴 및 입점문의</b>
		</h3>
		<p>공동 프로모션 제안, 이벤트 제안, 브랜드 입점 등 여러분의 참여를 기다립니다. 아래 내용을 작성하고 신청해주시면 성심껏 검토 후 답변 드리겠습니다.</p>
		<div class="m_partnership-form">
			<div class="mm_lside">
				<h6 class="mm_text-label">
					<b>문의 선택</b>
				</h6>
				<div class="mm_radio-list">
					<ul>
						<!-- 제휴 및 입점문의 -->
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-list"
									data-radio="{ 'syncer': '.mm_syncer-partnership' }"
									checked
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">제휴 및 입점문의</span>
									<small>M.Mon Solution 입점 및 상품 판매 관련 문의</small>
								</b>
							</label>
							<div class="mm_syncer-partnership">
								<p>카테고리 선택 (복수 선택가능)</p>
								<div class="mm_check-list">
									<ul>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">여성패션</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">남성패션</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">액세사리</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">라이프</span>
												</b>
											</label>
										</li>
									</ul>
								</div>
							</div>
						</li>

						<!-- 서비스 및 광고문의 -->
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-list"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">서비스 및 광고문의</span>
									<small>광고/서비스 기술/ 프로모션 제휴 제안 등</small>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<h6 class="mm_text-label">
					<b>업체명</b><i class="ico_required"></i>
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
						<span class="text_placeholder">업체를 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>브랜드명</b><i class="ico_required"></i>
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
						<span class="text_placeholder">브랜드를 입력하세요</span>
					</label>
				</div>
			</div>
			<div class="mm_rside">
				<h6 class="mm_text-label">
					<b>담당자명</b><i class="ico_required"></i>
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
						<span class="text_placeholder">담당자를 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>담당자 이메일</b><i class="ico_required"></i>
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
						<span class="text_placeholder">이메일을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>담당자 휴대폰 번호</b><i class="ico_required"></i>
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
							maxlength="12"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호를 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>구체적인 제휴 내용</b><i class="ico_required"></i>
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
						<span class="text_placeholder">제휴 내용을 입력하세요</span>
					</label>
				</div>
			</div>
		</div>
		<div class="m_partnership-agree">
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">개인정보 수집 및 이용에 동의</span>
				</b>
			</label>
			<a
				class="btn_detail"
				href="#"
			>
				<b>자세히</b>
			</a>
		</div>
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<a
					class="mm_btn T=light"
					href="#"
				>
					<b>취소하기</b>
				</a>
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>신청하기</b>
				</button>
			</div>
		</div>
	</div>
</template>