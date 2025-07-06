<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const findIdResultAPI = ref<FindIdResultAPI>();

	// api
	Api.getAll([
		{ key: `AUTH_FIND_ID`, ref: findIdResultAPI },
	]);
</script>

<template>
	<div class="m_sign-find-fin">
		<h3><b><span class="mm_text-variable">{{ findIdResultAPI?.user_name }}</span>님 <br>아이디 찾기가 완료되었습니다</b></h3>
		<!-- 아이디목록 -->
		<ul class="m...fin-id">
			<li
				v-for="result in findIdResultAPI?.find_results"
				:key="result.regist_type"
			>
				<i
					v-if="result.regist_type === 'shop'"
					class="ico_member"
					title="일반 회원가입 아이디"
				></i>
				<i
					v-if="result.regist_type === 'naver'"
					class="ico_sns-naver"
					title="네이버 아이디"
				></i>
				<i
					v-if="result.regist_type === 'kakao'"
					class="ico_sns-kakao"
					title="카카오톡 아이디"
				></i>
				<i
					v-if="result.regist_type === 'apple'"
					class="ico_sns-apple"
					title="애플 아이디"
				></i><p>{{ result.masking_login_id }}</p>
			</li>
		</ul>

		<div class="m...fin-verify">
			<p>가려진 정보가 궁금하다면?</p>
			<!-- (D) 휴대폰 번호로 아이디를 찾았을 경우 '휴대폰 번호로 전송' 버튼을 노출합니다. -->
			<button
				v-if="$route.query.findType === 'phone'"
				type="button"
				class="mm_btn T=xs T=line"
			>
				<b>휴대폰으로 전송</b>
			</button>
			<!-- (D) 이메일 주소로로 아이디를 찾았을 경우 '이메일로 전송' 버튼을 노출합니다. -->
			<button
				v-if="$route.query.findType === 'email'"
				type="button"
				class="mm_btn T=xs T=line"
			>
				<b>이메일로 전송</b>
			</button>
		</div>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<router-link
					class="mm_btn T=line T=primary"
					:to="{ name: 'LoginFindPw' }"
				>
					<b>비밀번호 찾기</b>
				</router-link>
				<router-link
					class="mm_btn T=primary"
					:to="{ name: 'Login' }"
				>
					<b>로그인</b>
				</router-link>
			</div>
		</div>
	</div>
</template>