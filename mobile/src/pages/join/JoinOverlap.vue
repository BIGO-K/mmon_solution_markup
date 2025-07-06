<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>회원가입</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign-find">
				<div class="m_popup-sign-title">
					<h3><b>이미 가입된 아이디 정보입니다</b></h3>
					<b>카카오톡, 네이버, 애플 회원은<br> 이메일 주소를 아이디로 사용하게 됩니다</b>
				</div>
				<ul class="m...find-id">
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

					<!-- (유료) 간편로그인 -->
					<li>
						<i
							class="ico_sns-payco"
							title="페이코 아이디"
						></i><p>abc******@payco.com</p>
					</li>
				</ul>
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
							:to="{ name: 'LoginFindId' }"
						>
							<b>아이디 찾기</b>
						</router-link>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>