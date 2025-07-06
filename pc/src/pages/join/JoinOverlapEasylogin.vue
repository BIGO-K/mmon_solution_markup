<!-- TODO 간편로그인 유료기능 확인 후 페이지 삭제 필요 -->
<script setup lang="ts">

</script>

<template>
	<div class="m_sign-find-fin">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>회원가입</b>
			</h3>
			<p>이미 가입된 아이디 정보입니다<small>카카오톡, 네이버, 애플, 페이코 회원은 이메일 주소를 아이디로 사용하게 됩니다</small></p>
		</div>

		<!-- 아이디목록 -->
		<ul class="m...fin-id">
			<li>
				<i
					class="ico_sns-naver"
					title="네이버 아이디"
				></i>
				<p>abc******@naver.com</p>
			</li>
			<li>
				<i
					class="ico_sns-kakao"
					title="카카오톡 아이디"
				></i>
				<p>abc******@kakao.com</p>
			</li>
			<li>
				<i
					class="ico_sns-apple"
					title="애플 아이디"
				></i>
				<p>abc******@icloud.com</p>
			</li>
			<li>
				<i
					class="ico_sns-payco"
					title="페이코 아이디"
				></i>
				<p>abc******@payco.com</p>
			</li>
		</ul>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<a
					class="mm_btn T=line T=primary"
					href="#"
				>
					<b>아이디 찾기</b>
				</a>
				<a
					class="mm_btn T=primary"
					href="#"
				>
					<b>로그인</b>
				</a>
			</div>
		</div>
	</div>

	<!-- 현재 페이지 스크립트 -->
	<!-- <script src="../js/.js"></script> -->
</template>