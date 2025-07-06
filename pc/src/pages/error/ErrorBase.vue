<script setup lang="ts">

</script>

<template>
	<i class="image_error T=2xl">
		<img
			src="../../../public/images/common/error.svg"
			alt="오류"
		>
	</i>
	<h1><b>불편을 드려 죄송합니다</b></h1>
	<p>찾고 계시는 페이지가 삭제 또는 변경되어<br> 일시적인 오류로 표시할 수 없습니다</p>
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