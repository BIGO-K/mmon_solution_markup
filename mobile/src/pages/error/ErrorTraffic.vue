<script setup lang="ts">

</script>

<template>
	<article class="m_error-inner">
		<i class="image_error T=lg">
			<img
				src="../../../public/images/common/error_traffic.svg"
				alt="오류 트래픽증가"
			>
		</i>
		<h1><b>불편을 드려 죄송합니다</b></h1>
		<p>현재 일시적인 트래픽 증가로 접속이 어렵습니다<br> 잠시 후 다시 이용해주세요</p>
		<div class="mm_btn_box">
			<div class="mm_flex T=equal">
				<router-link
					class="mm_btn T=line T=light"
					:to="{ name: 'Main' }"
				>
					<b>메인으로</b>
				</router-link>
				<a
					class="mm_btn T=line T=primary"
					@click="$router.go(-1)"
				>
					<b>이전으로</b>
				</a>
			</div>
		</div>
	</article>
</template>