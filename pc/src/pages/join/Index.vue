<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const duplicateAPI = ref<JoinDuplicateAPI>();

	// api
	Api.getAll([
		{ key: `AUTH_TOKEN_DUPLICATE_CHECK`, ref: duplicateAPI },
	]);
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
					<li
						class="T=step-on"
						title="현재 진행 중인 단계"
					>
						<span><small>STEP</small>1</span><strong>본인인증</strong>
					</li>
					<li><span><small>STEP</small>2</span><strong>회원정보 및 약관동의</strong></li>
					<li><span><small>STEP</small>3</span><strong>가입완료</strong></li>
				</ol>
			</div>
		</div>
		<p class="text_welcome">
			<i class="ico_smile"></i><strong>반가워요!</strong><br> <span>안전한 회원가입을 위해</span> 고객님의 본인인증이 필요합니다
		</p>

		<!-- 유의사항 -->
		<div class="mm_note">
			<ul>
				<li>14세 미만 회원은 가입이 불가합니다.</li>
				<li>법인폰 사용자는 휴대폰 인증이 불가합니다.</li>
			</ul>
		</div>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<a
					class="mm_btn T=primary"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="() => {
						if(!duplicateAPI?.is_duplicate_user) {
							$router.push({
								name: 'JoinInfo'
							})
						} else {
							$router.push({
								name: 'Login'
							})
						}
					}"
				>
					<b>휴대폰 인증</b>
				</a>
			</div>
		</div>
	</div>
</template>