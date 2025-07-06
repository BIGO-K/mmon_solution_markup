<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>휴대폰 인증</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-pay-certify">
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
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
								maxlength="11"
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">휴대폰 번호를 입력하세요(필수입력, 숫자만 입력)</span>
						</label>
					</div>
					<button
						type="button"
						class="mm_btn T=line T=dark"
					>
						<b>인증번호 발송</b>
					</button>
				</div>
				<h6 class="mm_text-label">
					<b>인증번호</b>
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
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">10분 이내로 입력하세요</span>
						</label>
					</div>
					<button
						type="button"
						class="mm_btn T=line T=dark"
					>
						<b>인증번호 확인</b>
					</button>
				</div>

				<!-- (D) 결제 비밀번호 최초 등록시 노출z합니다. -->
				<!-- 약관동의 -->
				<h6 class="mm_text-label">
					<b>약관동의</b>
				</h6>
				<div class="mm_check_box">
					<div class="mm_check-list">
						<ul>
							<li>
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'dev_check_box' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">(필수) M.Monstar 간편결제 서비스 이용동의</span>
									</b>
								</label>
							</li>
							<li>
								<div class="mm_flex">
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'dev_check_box' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label">(필수) 개인정보 수집 및 이용동의</span>
										</b>
									</label>
									<button
										type="button"
										class="btn_detail"
										data-switch="{ '_isParent': true }"
										title="선택됨"
									>
										<b>자세히</b>
									</button>
								</div>
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>목적</b>
											</th>
											<td>M.Monstar 간편결제 이용 시</td>
										</tr>
										<tr>
											<th scope="row">
												<b>항목</b>
											</th>
											<td>휴대전화번호, 결제비밀번호</td>
										</tr>
										<tr>
											<th scope="row">
												<b>보유 및 이용기간</b>
											</th>
											<td>
												<b>수집목적 달성시까지 이용</b>
												<p>단, 관계 법령의 규정에 의하여 일정 기간 보유하여야 할 필요가 있는 경우 해당 기간동안 보관</p>
												<p>자세한 내용은 사이트 하단 ‘개인 정보 처리방침’ 참고 바랍니다</p>
											</td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check="{ '_type': 'check_all', '_group': 'dev_check_box' }"
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">전체 동의</span>
						</b>
					</label>
				</div>

				<!-- 하단버튼-->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
							disabled
						>
							<b>인증 완료</b>
						</button>
					</div>
				</div>

				<!-- (D) 결제 비밀번호 등록 후 재인증시 노출합니다. -->
				<!-- 유의사항 -->
				<div class="mm_note">
					<ul>
						<li>인증받은 휴대전화번호로 회원정보가 자동 변경됩니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>