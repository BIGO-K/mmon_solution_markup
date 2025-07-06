<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const editInfoAPI = ref<MyEditInfoAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_EDIT_INFO`, ref: editInfoAPI },
	]);
</script>

<template>
	<!-- XXX 비밀번호 재입력 후 노출되어야 하는 페이지 -->
	<div class="m_my-info">
		<h5 class="mm_heading">
			<b>회원정보 관리</b>
		</h5>
		<div class="m_my-info-inner">
			<h6 class="mm_text-label">
				<b>아이디</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ editInfoAPI?.login_id }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">{{ editInfoAPI?.phone }}</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>이름</b>
			</h6>
			<div class="mm_form_mix-linked">
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">{{ editInfoAPI?.name }}</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<b>이름 변경</b>
				</a>
			</div>
			<h6 class="mm_text-label">
				<b>비밀번호</b>
			</h6>
			<div class="mm_form_mix-linked">
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">• • • • • • • •</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
				>
					<b>비밀번호 변경</b>
				</a>
			</div>
			<h6 class="mm_text-label">
				<b>이메일</b>
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
							value="mmonstar@mmonstar.co.kr"
						><i class="bg_text"></i>
						<span class="text_placeholder">이메일을 입력하세요</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=line T=dark"
				>
					<b>중복 확인</b>
				</button>
			</div>
			<!-- TODO 생일 월/일 쪼개서 넣기 작업 필요 -->
			<h6 class="mm_text-label">
				<b>생일</b>
			</h6>
			<div class="mm_form_mix-linked">
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">12</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">5</span>
						<i class="bg_text"></i>
					</label>
				</div>
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
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>수정완료</b>
					</button>
					<a
						class="btn_withdraw"
						href="#"
					>
						<b>회원탈퇴</b><i class="ico_link"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>