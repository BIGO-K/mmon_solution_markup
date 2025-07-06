<script setup lang="ts">
	// import { ref } from 'vue';
	import easyLoginWithMap from '@/features/easylogin/easyLoaginSns';

	const channel = ['naver', 'kakao', 'apple', 'payco']; // 임시데이터
	const socialList: LoginWithMap = {
		naver: {
			name: '네이버',
			call: async (): Promise<void> => {
				console.log(1);
			}
		},
		kakao: {
			name: '카카오',
			call: async (): Promise<void> => {
				console.log(1);
			}
		},
		apple: {
			name: '애플',
			call: async (): Promise<void> => {
				console.log(1);
			}
		}
	};

	Object.assign(socialList, easyLoginWithMap);
</script>

<template>
	<div class="m_sign m_login">
		<div class="m_sign-title">
			<h3 class="mm_title">
				<b>로그인</b>
			</h3>
			<!-- (D) 성인인증이 필요한 로그인의 경우에만 .text_adult를 노출합니다. -->
			<strong class="text_adult"><i class="ico_adult T=sm"></i><b>본 상품은 19세 미만의 청소년이 이용할 수 없습니다</b></strong>
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
			<b>비밀번호</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">비밀번호 영문/특수문자/숫자 8~16자</span>
			</label>
		</div>
		<!-- (D) 로그인 5회 실패 시 .m_login-security 영역을 노출합니다. -->

		<!-- 보안문자입력 -->
		<div class="m_login-security">
			<p class="mm_text-negative">
				로그인을 5회 실패하였습니다.<br> 보안 문자를 입력하여 로그인해주세요.
			</p>
			<div class="mm_flex m_login-security-info">
				<i class="image_security">
					<img
						src="/public/images/dummy/login_fail.png"
						alt="보안문자"
					>
				</i>
				<button
					type="button"
					class="btn_refresh"
				>
					<i class="ico_refresh"></i><b>새로고침</b>
				</button>
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
						<span class="text_placeholder">보안문자 입력</span>
					</label>
				</div>
			</div>
		</div>

		<label class="mm_form-check">
			<input
				type="checkbox"
				data-check
			>
			<b class="mm_block">
				<i class="ico_form-check"></i>
				<span class="text_label">아이디 저장하기</span>
			</b>
		</label>

		<!-- 하단버튼-->
		<div class="mm_foot">
			<div class="mm_btn_box">
				<div class="mm_block">
					<button
						type="button"
						class="mm_btn T=lg T=primary"
					>
						<b>로그인</b>
					</button>
					<router-link
						class="mm_btn T=lg T=line T=dark"
						:to="{ name: 'Join' }"
					>
						<b>회원가입</b>
					</router-link>
				</div>
			</div>
			<div class="mm_btn_box">
				<div class="mm_flex T=auto">
					<router-link :to="{ name: 'LoginFindId' }">
						<b>아이디 찾기</b>
					</router-link>
					<router-link :to="{ name: 'LoginFindPw' }">
						<b>비밀번호 찾기</b>
					</router-link>
					<a href="#"><b>비회원 주문조회</b></a>

					<!-- (D) 비회원 주문 시 '비회원 주문조회' 대신 '비회원 주문하기' 버튼을 노출합니다. -->
					<!-- <a href="#"><b>비회원 주문하기</b></a> -->
				</div>
			</div>
		</div>

		<!-- 간편로그인 -->
		<ul class="m_login-sns">
			<template
				v-for="social in channel"
				:key="social"
			>
				<li>
					<a
						:class="`btn_${social}`"
						href="#"
						target="_blank"
						title="새 창 열림"
					>
						<i :class="`ico_sns-${social}`"></i><b>{{ socialList[social as keyof LoginWithMap]?.name }}</b>
					</a>
					<span class="text_recent">최근 로그인</span>
				</li>
			</template>
		</ul>
	</div>
</template>