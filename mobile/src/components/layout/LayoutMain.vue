<script setup lang="ts">
	import { onMounted, onUnmounted } from 'vue';
	import { useRoute } from 'vue-router';
	import Header from '@/components/header/Header.vue';
	import Gnb from '@/components/header/HeaderGnb.vue';
	import Content from '@/components/layout/Index.vue';
	import Toolbar from '@/components/toolbar/ToolbarA.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});
</script>

<template>
	<!-- 화면 -->
	<div
		class="mm_view"
		:class="layouts"
	>
		<!-- 앱으로 보기 상단 배너 -->
		<div class="m_main-app-view">
			<a
				href="#"
				target="blank"
			>
				<b>앱으로 더 편리하게 쇼핑해보세요</b><i>앱으로 보기</i>
			</a>
		</div>

		<Header>
			<template #title>
				<h1>
					<router-link
						:to="{ name: 'LayoutMain' }"
					>
						<i class="image_logo"></i><b class="mm_ir-blind">M.Mon solution</b>
					</router-link>
				</h1>
			</template>
		</header>

		<Content>
			<Gnb></Gnb>

			<slot></slot>

			<!-- 홈 -->
			<div
				v-if="$route.name === 'LayoutMain'"
				class="m_main"
			>
				<!-- 인기검색어 -->
				<!-- (D) 첫 번째 블록 바로 다음 위치로 고정합니다. -->
				<section class="m_main-popular">
					<div class="m_main-popular-inner">
						<div class="m_main-popular-head">
							<h3><b>인기검색어</b></h3>
							<p class="text_date">
								2022.01.01 15:04 기준
							</p>
							<button
								type="button"
								data-switch="{ '_isParent': true, '_parentSelector': '.m_main-popular-inner', '_defaultTitle': '펼쳐보기', '_title': '접어놓기', 'onChange': 'searchPopularChange' }"
								title="펼쳐보기"
							>
								<i class="ico_more"></i>
							</button>
						</div>
						<ol>
							<li>
								<a href="#"><b>엠몬스타</b><i
									class="ico_rank-up"
									title="상승"
								></i><b class="text_rank">2</b></a>
							</li>
							<li>
								<a href="#"><b>후드티</b><i
									class="ico_rank-down"
									title="하락"
								></i><b class="text_rank">1</b></a>
							</li>
							<li>
								<a href="#"><b>원피스</b><i
									class="ico_rank-down"
									title="하락"
								></i><b class="text_rank">1</b></a>
							</li>
							<li>
								<a href="#"><b>첼시부츠</b><i
									class="ico_rank-new"
									title="신규"
								></i></a>
							</li>
							<li>
								<a href="#"><b>가디건</b><i
									class="ico_rank-unchanged"
									title="변동없음"
								></i></a>
							</li>
							<li>
								<a href="#"><b>맨투맨</b><i
									class="ico_rank-up"
									title="상승"
								></i><b class="text_rank">8</b></a>
							</li>
							<li>
								<a href="#"><b>셔츠</b><i
									class="ico_rank-unchanged"
									title="변동없음"
								></i></a>
							</li>
							<li>
								<a href="#"><b>자켓</b><i
									class="ico_rank-down"
									title="하락"
								></i><b class="text_rank">3</b></a>
							</li>
							<li>
								<a href="#"><b>양말</b><i
									class="ico_rank-new"
									title="신규"
								></i></a>
							</li>
							<li>
								<a href="#"><b>데님</b><i
									class="ico_rank-up"
									title="상승"
								></i><b class="text_rank">122</b></a>
							</li>
						</ol>
					</div>
				</section>
			</div>
		</Content>

		<Toolbar></Toolbar>
	</div>
</template>