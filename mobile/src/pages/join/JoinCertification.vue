<script setup lang="ts">
</script>

<template>
	<h3 class="m_popup-join-title">
		<b>STEP 1</b><strong>본인인증</strong><i class="image_line T=step1"></i>
	</h3>
	<p class="text_welcome">
		<i class="ico_smile"></i><strong>반가워요!</strong><span>안전한 회원가입을 위해</span>고객님의 본인인증이<br> 필요합니다
	</p>
	<div class="mm_btn_box">
		<a
			class="mm_btn T=lg T=primary"
			href="#"
			target="_blank"
			title="새 창 열림"
			@click.prevent="$router.push({ name: 'JoinPolicy' })"
		>
			<b>휴대폰 인증</b>
		</a>
	</div>
	<div class="mm_note">
		<ul>
			<li>14세 미만 회원은 가입이 불가합니다.</li>
			<li>법인폰 사용자는 휴대폰 인증이 불가합니다.</li>
		</ul>
	</div>
	<div class="m_popup-join-sns">
		<h6><b>SNS 계정으로 로그인</b></h6>
		<ul>
			<li>
				<a
					class="btn_naver"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="$router.push({ name: 'JoinInfoSns' })"
				>
					<i class="ico_sns-naver"></i><b class="mm_ir-blind">네이버</b>
				</a>
			</li>
			<li>
				<a
					class="btn_kakaotalk"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="$router.push({ name: 'JoinInfoKakao' })"
				>
					<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡</b>
				</a>
			</li>
			<!-- (D) 모바일 ios app에서만 애플ID로그인 기능이 노출됩니다. -->
			<li>
				<a
					class="btn_apple"
					href="#"
					target="_blank"
					title="새 창 열림"
					@click.prevent="$router.push({ name: 'JoinOverlap' })"
				>
					<i class="ico_sns-apple"></i><b class="mm_ir-blind">애플</b>
				</a>
			</li>
		</ul>
	</div>
</template>