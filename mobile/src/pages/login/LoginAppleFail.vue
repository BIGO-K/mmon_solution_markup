<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>애플 ID 로그인</b></h1>
		</template>

		<template #content>
			<div class="m_popup-login-apple">
				<div class="m...apple-inner">
					<p>애플 로그인에 실패했습니다<br>다시 시도 할까요?</p>
					<div class="mm_btn_box">
						<div class="mm_inline">
							<router-link
								class="mm_btn T=line T=dark btn_link"
								:to="{ name: 'Login' }"
							>
								<b>로그인 페이지 이동</b><i class="ico_link"></i>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>