<script setup lang="ts">
	import { ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import BiometricLogin from '@/features/biometric/components/BiometricLogin.vue';

	// 유료기능 사용 검증 및 세팅
	const feature = {
		biometric: {
			_is: true,
			// value
		}
	};

	// 최초 1회 생체 정보 동의
	const biometricAgree = ref(false);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>로그인</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign m_popup-login">
				<!-- (D) 성인인증이 필요한 로그인의 경우에만 .text_adult를 노출합니다. -->
				<strong class="text_adult"><i class="ico_adult T=lg"></i><b>본 상품은 19세 미만의 청소년이<br> 이용할 수 없습니다</b></strong>
				<h5 class="mm_text-label">
					<b>아이디</b>
				</h5>
				<div class="mm_form-text T=lg">
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
				<h5 class="mm_text-label">
					<b>비밀번호</b>
				</h5>
				<div class="mm_form-text T=lg">
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
						<span class="text_placeholder">비밀번호를 입력하세요</span>
					</label>
				</div>

				<!-- 보안문자입력 -->
				<!-- (D) 로그인 5회 실패 시 .m_popup-login-security 영역을 노출합니다. -->
				<div class="m_popup-login-security">
					<p class="mm_text-negative">
						로그인을 5회 실패하셨습니다<br>보안 문자를 입력하여 로그인하세요
					</p>
					<div class="m...security-info">
						<i class="image_security">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/_sample/login_fail.png'"
								:alt="'보안문자'"
							></LazyloadMUI>
						</i>
						<button
							type="button"
							class="mm_btn T=xs T=line T=light btn_refresh"
						>
							<i class="ico_reload"></i><b>새로고침</b>
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
				<router-link
					class="m_popup-login-customer"
					:to="{ name: 'LoginRenewalPwChange' }"
				>
					<b><strong>기존 가입고객</strong>은 최초 1회 비밀번호 변경 후 사용합니다.</b><small>GO <i class="ico_link T=bold"></i></small>
				</router-link>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=lg T=primary"
							@click="biometricAgree = !biometricAgree"
						>
							<b>로그인</b>
						</button>
						<router-link
							class="mm_btn T=lg T=line"
							:to="{ name: 'Join' }"
						>
							<b>회원가입</b>
						</router-link>
					</div>
					<div class="mm_btn_box">
						<div class="mm_flex T=auto">
							<router-link :to="{ name: 'LoginFindId' }">
								<b>아이디 찾기</b>
							</router-link>
							<router-link :to="{ name: 'LoginFindPw' }">
								<b>비밀번호 찾기</b>
							</router-link>
							<router-link :to="{ name: 'LoginGuestOrder' }">
								<b>비회원 주문조회</b>
							</router-link>
						</div>
					</div>
				</div>

				<!-- 간편로그인 -->
				<div class="m_popup-login-sns">
					<h6><b>SNS 계정으로 로그인</b></h6>
					<ul>
						<li>
							<a
								class="btn_naver"
								href="#"
								target="_blank"
								title="새 창 열림"
							>
								<i class="ico_sns-naver"></i><b class="mm_ir-blind">네이버</b>
							</a>
							<!-- (D) 최근 로그인한 SNS 채널에 text_lately 요소를 노출합니다 -->
							<span class="text_lately">최근 로그인</span>
						</li>
						<li>
							<a
								class="btn_kakaotalk"
								href="#"
								target="_blank"
								title="새 창 열림"
							>
								<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡</b>
							</a>
						</li>

						<!-- (유료) 간편로그인 -->
						<li>
							<a
								class="btn_payco"
								href="#"
								target="_blank"
								title="새 창 열림"
							>
								<i class="ico_sns-payco"></i><b class="mm_ir-blind">페이코</b>
							</a>
						</li>

						<!-- (D) 모바일 ios app에서만 애플ID로그인 기능이 노출됩니다. -->
						<li>
							<a
								class="btn_apple"
								href="#"
								target="_blank"
								title="새 창 열림"
							>
								<i class="ico_sns-apple"></i><b class="mm_ir-blind">애플</b>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</template>

		<template #contentExtend>
			<BiometricLogin v-if="feature.biometric._is && biometricAgree"></BiometricLogin>
		</template>
	</LayoutPopup>
</template>