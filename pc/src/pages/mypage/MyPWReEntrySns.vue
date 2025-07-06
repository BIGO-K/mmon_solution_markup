<script setup lang="ts">
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
	<div class="m_my-info">
		<h5 class="mm_heading">
			<b>회원정보 관리</b>
		</h5>
		<div class="m_my-info-inner m_sign">
			<h6 class="m_my-info-title">
				<b>소중한 개인정보 보호를 위해 <strong class="mm_text-variable">한번 더 로그인해주세요</strong></b><small>로그인하셔야 회원정보 수정이 가능합니다</small>
			</h6>

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
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>