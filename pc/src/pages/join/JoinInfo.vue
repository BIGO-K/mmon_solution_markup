<script setup lang="ts">

</script>

<template>
	<div class="m_join">
		<div class="m_join-head">
			<h3 class="mm_title">
				<b>회원가입</b>
			</h3>

			<!-- 회원가입 스텝 -->
			<div class="m_join-head-step">
				<!-- (D) 현재 페이지에 해당되는 li 요소에 'T=step-on' 클래스와 '현재 진행 중인 단계' 타이틀을 추가합니다 -->
				<ol class="mm_flex T=equal">
					<li><span><small>STEP</small>1</span><strong>본인인증</strong></li>
					<li
						class="T=step-on"
						title="현재 진행 중인 단계"
					>
						<span><small>STEP</small>2</span><strong>회원정보 및 약관동의</strong>
					</li>
					<li><span><small>STEP</small>3</span><strong>가입완료</strong></li>
				</ol>
			</div>
		</div>
		<div class="m_join-info">
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
				<b>아이디</b>
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
							maxlength="20"
						><i class="bg_text"></i>
						<span class="text_placeholder">아이디를 입력하세요</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=line T=dark"
				>
					<b>아이디 중복확인</b>
				</button>
			</div>
			<h6 class="mm_text-label">
				<b>비밀번호</b>
			</h6>
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-pw"
				>
					<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
				</button>
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="password"
						class="textfield"
						data-text
						maxlength="16"
					><i class="bg_text"></i>
					<span class="text_placeholder">비밀번호를 입력하세요</span>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>비밀번호 확인</b>
			</h6>
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-pw"
				>
					<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
				</button>
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="password"
						class="textfield"
						data-text
						maxlength="16"
					><i class="bg_text"></i>
					<span class="text_placeholder">비밀번호를 한번 더 입력하세요</span>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>이름</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">홍길동</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>생년월일</b><b class="mm_text-variable">(선택)</b>
			</h6>
			<div class="mm_form_mix-linked">
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>년</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>월</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>일</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
			</div>
			<h6 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">01012345678</span>
					<i class="bg_text"></i>
				</label>
			</div>
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
								checked
							>
							<b class="mm_block">
								<i class="ico_form-radio"></i>
								<span class="text_label">여자</span>
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
								<i class="ico_form-radio"></i>
								<span class="text_label">남자</span>
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
								<i class="ico_form-radio"></i>
								<span class="text_label">선택안함</span>
							</b>
						</label>
					</li>
				</ul>
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
	</div>

	<!-- 현재 페이지 스크립트 -->
	<!-- <script src="../js/.js"></script> -->
</template>