<script setup lang="ts">

</script>

<template>
	<div class="m_sign m_renewal-info">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>M.Monstar 리뉴얼 오픈</b>
			</h3>
		</div>
		<h6 class="mm_text-label">
			<b>아이디</b>
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
				<span class="text_placeholder">아이디를 입력하세요</span>
			</label>
		</div>
		<h6 class="mm_text-label">
			<b>이름</b>
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
				<span class="text_placeholder">이름을 입력하세요</span>
			</label>
		</div>
		<h6 class="mm_text-label">
			<b>이메일</b>
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
					type="text"
					class="textfield"
					data-text
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">휴대폰 번호를 입력하세요</span>
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
		<!-- (D) 회원정보 조회 후에는 'm_renewal-info-pw' 영역을 노출하고 하단에 조회하기 버튼 대신 비밀번호 변경하기 버튼을 노출합니다  -->
		<div class="m_renewal-info-pw">
			<p><strong class="mm_text-variable">홍길동</strong>님 새로운 비밀번호를 설정해주세요<small>기존 아이디와 해당 비밀번호로 쇼핑몰을 이용하실 수 있습니다</small></p>
			<div class="mm_note">
				<ul>
					<li>본인인증이 필요한 회원은 본인인증 후 비밀번호 변경이 가능합니다.</li>
				</ul>
			</div>
			<div class="mm_btn_box">
				<a
					class="mm_btn T=primary"
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<b>휴대폰 인증</b>
				</a>
			</div>
			<h6 class="mm_text-label">
				<b>새 비밀번호</b>
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
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">새 비밀번호를 입력하세요</span>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>새 비밀번호 확인</b>
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
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">비밀번호를 한번 더 입력하세요</span>
				</label>
			</div>
		</div>
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<button
					type="button"
					class="mm_btn T=line T=primary"
				>
					<b>취소</b>
				</button>
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>조회하기</b>
				</button>
				<!-- <button
					type="button"
					class="mm_btn T=primary"
				>
					<b>비밀번호 변경하기</b>
				</button> -->
			</div>
		</div>
	</div>
</template>