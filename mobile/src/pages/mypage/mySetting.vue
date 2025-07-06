<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import BiometricLoginSwitch from '@/features/biometric/components/BiometricMySettingSwitch.vue';

	/** 로그인 여부 */
	const _isLogin = ref(true);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		biometric: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>설정</b></h1>
		</template>

		<template #content>
			<div class="m_myset">
				<!-- 로그인정보 -->
				<div
					v-if="!_isLogin"
					class="m_myset-login"
				>
					<p>로그인해 주세요</p>
					<router-link
						class="mm_btn T=sm T=line T=primary"
						:to="{ name: 'Login' }"
					>
						<b>로그인</b>
					</router-link>
				</div>
				<template v-else>
					<div class="m_myset-login">
						<p>honggildong@naver.com</p>
						<button
							type="button"
							class="mm_btn T=sm T=line"
						>
							<b>로그아웃</b>
						</button>
					</div>

					<!-- 간편 로그인 연동관리 -->
					<section class="m_myset-sns">
						<h3 class="mm_strapline">
							<b>간편 로그인 연동관리</b>
						</h3>
						<ul class="m_my-sns">
							<li>
								<i class="ico_sns-naver"></i><span>네이버</span>
								<button
									type="button"
									class="mm_btn T=sm T=lighter"
								>
									<b>연동해제</b>
								</button>
							</li>
							<li>
								<i class="ico_sns-kakao"></i><span>카카오</span>
								<a
									class="mm_btn T=sm T=line T=primary"
									href="#"
									target="_blank"
									title="새 창 열림"
								>
									<b>연동하기</b>
								</a>
							</li>
							<li>
								<i class="ico_sns-apple"></i><span>애플</span>
								<button
									type="button"
									class="mm_btn T=sm T=lighter"
								>
									<b>연동해제</b>
								</button>
							</li>
						</ul>
					</section>
				</template>

				<!-- 앱 전용 -->
				<!-- (D) 모바일 app에서만 앱관련정보가 노출됩니다. -->
				<div class="m_myset-app">
					<BiometricLoginSwitch v-if="feature.biometric._is"></BiometricLoginSwitch>

					<!-- 푸시 -->
					<div class="mm_check-list">
						<ul>
							<li>
								<label class="mm_form-check T=switch">
									<input
										type="checkbox"
										data-check
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">광고성(PUSH) 알림 수신</span>
									</b>
								</label>
								<p>본 설정은 해당 기기에서만 유효하며, 수신 거절 시 정보성 알림도 발송되지 않습니다</p>
							</li>
							<li>
								<label class="mm_form-check T=switch">
									<input
										type="checkbox"
										data-check
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">야간 광고성(PUSH) 알림 수신</span>
									</b>
								</label>
								<p>야간(오후9시 ~ 익일 오전8시)에도 알림 수신을 허용합니다</p>
							</li>
						</ul>
					</div>

					<!-- 버전 정보 -->
					<section>
						<h3 class="mm_strapline">
							<b>버전 정보</b>
						</h3>
						<dl class="mm_flex">
							<dt>설치된 버전</dt>
							<dd>V5.0.7</dd>
						</dl>
						<dl class="mm_flex">
							<dt>최신 버전</dt>
							<dd>
								V5.0.8
								<a
									class="mm_btn T=2xs T=line T=variable"
									href="#"
									target="_blank"
									title="새 창 열림"
								>
									<b>업데이트</b>
								</a>
							</dd>
						</dl>
					</section>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>