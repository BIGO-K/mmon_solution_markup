<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const duplicateUserAPI = ref<DuplicateUserAPI>();

	// api
	Api.getAll([
		{ key: `THIRD_PARTY_USER_DUPLICATE_CHECK`, ref: duplicateUserAPI },
	]);
</script>

<template>
	<div class="m_sign-find-fin">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>회원가입</b>
			</h3>
			<p>이미 가입된 아이디 정보입니다<small>카카오톡, 네이버, 애플 회원은 이메일 주소를 아이디로 사용하게 됩니다</small></p>
		</div>

		<!-- 아이디목록 -->
		<ul class="m...fin-id">
			<li
				v-for="user in duplicateUserAPI?.duplicate_users"
				:key="user.masking_id"
			>
				<i
					:class="`ico_sns-${user.platform_type}`"
					:title="`${user.platform_type} 아이디`"
				></i>
				<p>{{ user.masking_id }}</p>
			</li>
		</ul>

		<!-- 하단버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<router-link
					class="mm_btn T=line T=primary"
					:to="{ name: 'LoginFindId' }"
				>
					<b>아이디 찾기</b>
				</router-link>
				<router-link
					class="mm_btn T=primary"
					:to="{ name: 'Login'}"
				>
					<b>로그인</b>
				</router-link>
			</div>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->