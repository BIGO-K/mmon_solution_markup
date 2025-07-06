<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>M.Monstar 리뉴얼 오픈</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign m_popup-renewal">
				<div class="m_popup-sign-title">
					<h3><b><strong class="mm_text-variable">홍길동</strong>님<br> 새로운 비밀번호를 설정해주세요</b></h3>
					<b>기존 아이디와 해당 비밀번호로 쇼핑몰을<br> 이용하실 수 있습니다</b>
				</div>
				<div class="mm_note">
					<ul>
						<li>본인인증이 필요한 회원은 본인인증 후 비밀번호 변경이 가능합니다.</li>
					</ul>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<a
							class="mm_btn T=lg T=primary"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<b>휴대폰 인증</b>
						</a>
					</div>
				</div>
				<h5 class="mm_text-label">
					<b>새 비밀번호</b>
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
						<span class="text_placeholder">새 비밀번호를 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>새 비밀번호 확인</b>
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
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>비밀번호 변경하기</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>