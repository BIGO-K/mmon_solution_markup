<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import EasyloginPW from '@/features/easylogin/components/EasyloginMyPWVerify.vue';

	// 유료기능 사용 검증 및 세팅
	const feature = {
		pay: {
			_is: true,
			// value
		},
		easylogin: {
			_is: true,
			// value
		}
	};

	const _isPay = ref(true);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>비밀번호 재입력</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-myinfo">
				<h3 class="mm_title">
					<b>소중한 개인정보 보호를 위해<br> <strong>한번 더 로그인해주세요</strong></b>
				</h3>
				<p v-if="feature.pay._is && _isPay">
					로그인하셔야 간편결제 비밀번호 수정이 가능합니다
				</p>
				<p v-else>
					로그인하셔야 회원정보 수정이 가능합니다
				</p>
				<ul class="m_my-sns">
					<li>
						<a
							class="btn_sns"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<i class="ico_sns-naver"></i><b>네이버</b>
						</a>
					</li>
					<li>
						<a
							class="btn_sns"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<i class="ico_sns-kakao"></i><b>카카오톡</b>
						</a>
					</li>
					<li>
						<a
							class="btn_sns"
							href="#"
							target="_blank"
							title="새 창 열림"
						>
							<i class="ico_sns-apple"></i><b>애플</b>
						</a>
					</li>
					<EasyloginPW v-if="feature.easylogin._is"></EasyloginPW>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>