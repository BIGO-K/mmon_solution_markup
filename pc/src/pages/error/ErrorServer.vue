<script setup lang="ts">

</script>

<template>
	<i class="image_error">
		<img
			src="../../../public/images/common/error_500.svg"
			alt="오류 500"
		>
	</i>
	<h1><b>서버 오류가 발생했습니다</b></h1>
	<p>이용에 불편을 드려 죄송합니다</p>
	<div class="mm_foot">
		<div class="mm_btn_box T=equal">
			<router-link
				class="mm_btn T=line"
				:to="{ name: 'Main' }"
			>
				<b>메인으로</b>
			</router-link>
			<button
				class="mm_btn T=primary"
				@click="$router.go(-1)"
			>
				<b>이전으로</b>
			</button>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->