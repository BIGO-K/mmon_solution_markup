<script setup lang="ts">

</script>

<template>
	<div class="m_my-info">
		<h5 class="mm_heading">
			<b>회원정보 관리</b>
		</h5>

		<!-- 유의사항 -->
		<section class="mm_note T=bg">
			<h6 class="text_title">
				<i class="ico_note"></i><b>회원탈퇴 유의사항</b>
			</h6>
			<ul>
				<li>고객님의 구매 및 반품 등 고객서비스가 완료되지 않은 경우 탈퇴처리 되지 않습니다. (1:1 상담게시판을 통해 회원탈퇴관련 문의내용을 남겨주시면 확인하여 안내 드리겠습니다.)</li>
				<li>탈퇴 시에는 보유하고 계신 적립금 및 할인쿠폰은 자동으로 소멸 됩니다. (회원탈퇴로 소멸된 쿠폰과 적립금은 재가입시 복원되지 않습니다.)</li>
				<li>탈퇴 시에 주문정보는 교환/반품/환불 및 사후처리(A/S) 등을 위하여 전자상거래 등 에서의 소비자보호에 관한 법류에 의거, 개인정보보호정책에 따라 관리됩니다.</li>
				<li>탈퇴 신청 후 완료까지 일부 기간 소요되며 기간 중 메일이 발송될 수 있으니 양해 부탁드립니다.</li>
			</ul>
		</section>

		<div class="m_my-info-withdraw">
			<p>어떤 부분이 불편하셨나요? <small>탈퇴 사유를 남겨주시면 소중한 의견을 반영해 더 좋은 서비스로 찾아뵙겠습니다</small></p>
			<div class="mm_radio-list T=chain">
				<ul>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
								checked
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">상품품질 불만</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">고객서비스 불만</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">원하는 상품 없음</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">속도가 느림</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">배송 지연</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">교환/환불 불만</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								type="radio"
								name="dev_radio-reason"
								data-radio
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">자주 이용하지 않음</span>
							</b>
						</label>
					</li>
					<li>
						<div class="mm_form_mix-linked">
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-reason"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">기타</span>
								</b>
							</label>
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
										data-text
										disabled
									></textarea><i class="bg_text"></i>
									<span class="text_placeholder">기타 사유를 입력하세요</span>
								</label>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<h5 class="m_my-info-title">
			<b>그동안 <strong class="mm_text-variable">M.Mon 쇼핑몰</strong>을 이용해 주셔서 감사합니다.</b>
		</h5>
		<p class="text_sub">
			고객님과 앞으로 함께하지 못해 아쉽습니다
		</p>
		<p class="text_sub">
			다시 돌아오셨을 때 지금보다 더 나은 상품과 서비스로 발전된<br> M.Mon 쇼핑몰이 될 수 있도록 노력하겠습니다
		</p>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>회원탈퇴 신청</b>
				</button>
			</div>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
		(function () {

			//< 탈퇴 사유 기타 선택
			mm.event.on('.mm_form-radio input', 'change', function () {

				mm.find('.textfield', this.closest('.mm_radio-list'))[0].disabled = (this.closest('.mm_form_mix-linked')) ? false : true;

			});
			//> 탈퇴 사유 기타 선택

		})();
	</script> -->