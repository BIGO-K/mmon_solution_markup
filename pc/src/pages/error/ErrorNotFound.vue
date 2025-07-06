<script setup lang="ts">

</script>

<template>
	<i class="image_error">
		<img
			src="../../../public/images/common/error_404.svg"
			alt="오류 404"
		>
	</i>
	<h1><b>페이지를 찾을 수 없습니다</b></h1>
	<p>해당 페이지가 삭제 또는 변경되었거나<br> 일시적인 오류로 표시할 수 없습니다</p>
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