<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>아이디 찾기 완료</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign-find">
				<div class="m_popup-sign-title">
					<h3><b><strong class="mm_text-variable">홍길동</strong> 님<br> 아이디 찾기가 완료되었습니다</b></h3>
				</div>
				<ul class="m...find-id">
					<!-- (유료) 간편로그인 -->
					<li>
						<i
							class="ico_sns-payco"
							title="페이코 아이디"
						></i><p>abc******@payco.com</p>
					</li>

					<li>
						<i
							class="ico_member"
							title="MMONSTAR 아이디"
						></i><p>abc******</p>
					</li>
					<li>
						<i
							class="ico_sns-naver"
							title="네이버 아이디"
						></i><p>abc******@naver.com</p>
					</li>
					<li>
						<i
							class="ico_sns-kakao"
							title="카카오톡 아이디"
						></i><p>abc******@kakao.com</p>
					</li>
					<li>
						<i
							class="ico_sns-apple"
							title="애플 아이디"
						></i><p>abc******@apple.com</p>
					</li>
				</ul>
				<div class="m...find-verify">
					<p>가려진 정보가 궁금하신가요?</p>
					<!-- (D) 이메일로 아이디를 찾았을 경우 아래 '이메일 주소로 전송' 버튼을 노출합니다 -->
					<button
						type="button"
						class="mm_btn T=xs T=line"
					>
						<b>이메일 주소로 전송</b>
					</button>
					<!-- (D) 휴대폰 번호로 아이디를 찾았을 경우 아래 '휴대폰 번호로 전송' 버튼을 노출합니다 -->
					<!-- <button type="button" class="mm_btn T=xs T=line"><b>휴대폰 번호로 전송</b></button> -->
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<router-link
							class="mm_btn T=lg T=primary"
							:to="{ name: 'Login' }"
						>
							<b>로그인</b>
						</router-link>
						<router-link
							class="mm_btn T=lg T=line T=primary"
							:to="{ name: 'LoginFindPw' }"
						>
							<b>비밀번호 찾기</b>
						</router-link>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>