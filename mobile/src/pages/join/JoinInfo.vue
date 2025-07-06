<script setup lang="ts">
</script>

<template>
	<h3 class="m_popup-join-title">
		<b>STEP 3</b><strong>정보입력</strong><i class="image_line T=step3"></i>
	</h3>
	<!-- (D) '.mm_process' 영역은 단계별 입력 페이지로 현재 순서에 해당하는 '.mm_process-item' 영역에 'S=process-on' 클래스가 추가됩니다. -->
	<div class="mm_process">
		<!-- 개인정보 설정 -->
		<div
			class="mm_process-item"
			:class="{'S=process-on' : !$route.query.process }"
		>
			<h5 class="mm_text-label">
				<b>이름</b>
			</h5>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">홍길동</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h5 class="mm_text-label">
				<b>생년월일</b><strong class="mm_text-variable">(선택)</strong>
			</h5>
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
			<h5 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h5>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">01012341234</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h5 class="mm_text-label">
				<b>성별</b>
			</h5>
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
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<a
							class="mm_btn T=line T=light btn_back"
							href="#"
							@click.prevent="$router.go(-1)"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</a>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="$router.push({ query: { process: 'id' } })"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 아이디 설정 -->
		<div
			class="mm_process-item"
			:class="{'S=process-on' : $route.query.process === 'id' }"
		>
			<h5 class="mm_text-label">
				<b>아이디</b>
			</h5>
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
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">아이디를 입력하세요</span>
				</label>
			</div>
			<button
				type="button"
				class="mm_btn T=line T=dark"
			>
				<b>아이디 중복확인</b>
			</button>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="$router.go(-1)"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="$router.push({ query: { process: 'pw' } })"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 비밀번호 설정 -->
		<div
			class="mm_process-item"
			:class="{'S=process-on' : $route.query.process === 'pw' }"
		>
			<h5 class="mm_text-label">
				<b>비밀번호</b>
			</h5>
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
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">비밀번호를 입력하세요</span>
				</label>
			</div>
			<h5 class="mm_text-label">
				<b>비밀번호 확인</b>
			</h5>
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
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">비밀번호를 한번 더 입력하세요</span>
				</label>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="$router.go(-1)"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
							@click="$router.push({ query: { process: 'agree' } })"
						>
							<b>다음으로</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 마케팅 수신동의 -->
		<div
			class="mm_process-item"
			:class="{'S=process-on' : $route.query.process === 'agree' }"
		>
			<div class="mm_check_box">
				<div class="mm_check-list">
					<ul>
						<li>
							<label class="mm_form-check">
								<input
									type="checkbox"
									data-check="{ '_group': 'agree_marketing' }"
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
									data-check="{ '_group': 'agree_marketing' }"
								>
								<b class="mm_block">
									<i class="ico_form-check"></i>
									<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
				<label class="mm_form-check">
					<input
						type="checkbox"
						data-check="{ '_type': 'check_all', '_group': 'agree_marketing' }"
					>
					<b class="mm_block">
						<i class="ico_form-check"></i>
						<span class="text_label">마케팅 수신 전체 동의</span>
					</b>
				</label>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<div class="mm_flex T=auto">
						<button
							type="button"
							class="mm_btn T=line T=light btn_back"
							@click="$router.go(-1)"
						>
							<i class="ico_page-prev"></i><b>이전으로</b>
						</button>
						<a
							class="mm_btn T=primary"
							href="#"
							@click.prevent="$router.push({ name: 'JoinFin' })"
						>
							<b>다음으로</b>
						</a>
					</div>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
					<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
				</ul>
			</div>
		</div>
	</div>
</template>