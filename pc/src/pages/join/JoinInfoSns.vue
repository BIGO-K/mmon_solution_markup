<script setup lang="ts">

</script>

<template>
	<div class="m_sign m_join-sns">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>회원가입</b>
			</h3>
		</div>
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
								data-check="{ '_group': 'dev_check_agree' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">만 14세 이상 확인</span>
							</b>
						</label>
					</li>
					<li>
						<div class="mm_flex">
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check="{ '_group': 'dev_check_agree' }"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label">이용약관</span>
								</b>
							</label>
							<a
								class="btn_detail"
								href="#"
							>
								<b>자세히</b>
							</a>
						</div>
					</li>
					<li>
						<div class="mm_flex">
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check="{ '_group': 'dev_check_agree' }"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label">개인정보 처리방침</span>
								</b>
							</label>
							<a
								class="btn_detail"
								href="#"
							>
								<b>자세히</b>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check="{ '_type': 'check_all', '_group': 'dev_check_agree' }"
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">전체 동의</span>
				</b>
			</label>
		</div>
		<h6 class="mm_text-label">
			<b>마케팅 수신동의</b>
		</h6>
		<div class="mm_check_box">
			<div class="mm_check-list">
				<ul>
					<li>
						<label class="mm_form-check">
							<input
								type="checkbox"
								data-check="{ '_group': 'dev_check_marketing' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-check">
							<input
								type="checkbox"
								data-check="{ '_group': 'dev_check_marketing' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
							</b>
						</label>
					</li>
				</ul>
				<div class="mm_note">
					<ul>
						<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
						<li>구매 정보 관련 이메일/SMS 수신 동의 여부와 관계없이 발송됩니다.</li>
					</ul>
				</div>
			</div>
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check="{ '_type': 'check_all', '_group': 'dev_check_marketing' }"
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">전체 동의</span>
				</b>
			</label>
		</div>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>가입완료</b>
				</button>
			</div>
		</div>
	</div>

	<!-- 현재 페이지 스크립트 -->
	<!-- <script src="../js/.js"></script> -->
</template>