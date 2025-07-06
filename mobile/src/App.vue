<script setup lang="ts">
	// import ModalSample from './pages/login/LoginQuiescent.vue';
</script>

<template>
	<!-- 스킵 -->
	<nav class="mm_skip">
		<ul>
			<li>
				<a
					href="#mm_body"
					data-href="{ '_type': 'anchor' }"
				>
					본문바로가기
				</a>
			</li>
		</ul>
	</nav>

	<!-- <ModalSample></ModalSample> -->

	<router-view></router-view>
</template>
