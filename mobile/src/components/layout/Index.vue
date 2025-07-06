<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import Footer from '@/components/footer/FooterA.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];
</script>

<template>
	<!-- 내용 -->
	<div
		id="mm_body"
		class="mm_page"
	>
		<!-- (D) 실제 내용을 추가하는 부분입니다. -->

		<div class="mm_scroller">
			<div class="mm_page-inner">
				<!-- 본문 -->
				<div class="mm_page-content">
					<slot></slot>
				</div>
				<Footer v-if="!layouts.includes('L=popup')"></Footer>
			</div>
		</div>

		<slot name="extend"></slot>

		<!-- 사이드바 푸터 -->
		<div
			v-if="layouts.includes('L=side')"
			class="mm_btn_box T=fixed m_sidebar-footer"
		>
			<div class="mm_flex T=equal">
				<router-link
					:to="{ name: 'Cs' }"
				>
					<i class="ico_cs"></i><b>고객센터</b>
				</router-link>
				<a href="#"><i class="ico_setup"></i><b>설정</b></a>
			</div>
		</div>

		<a
			class="btn_topmost"
			href="#mm_app"
			data-href="{ '_type': 'anchor' }"
			title="페이지 처음으로"
		>
			<i class="ico_topmost"></i><b>TOP</b>
		</a>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->