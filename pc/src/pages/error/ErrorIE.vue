<script setup lang="ts">
	import { onMounted, onUnmounted } from 'vue';

	onMounted(() => {

		document.documentElement.classList.add('L=error');

	});

	onUnmounted(() => {

		document.documentElement.classList.remove('L=error');

	});
</script>

<!-- IE 에러 페이지 css -->
<!-- (D) 브라우저 에러 페이지에서는 mm 기본 css 및 스크립트를 호출하지 않습니다. -->
<template>
	<!-- 본문 -->
	<div class="mm_page-content">
		<!-- (D) IE와 구버전 엣지(navigator.userAgent에서 edg포함(크로미움 기반 엣지는 userAgent에서 edge가 포함된 string을 리턴))에서 접속 시 해당 페이지를 노출합니다. -->
		<div class="m_error-ie">
			<div class="m_error-ie-inner">
				<h1 class="mm_ir-blind">
					<b>지원하지 않은 브라우저에서만 보이는 페이지입니다. 브라우저를 업데이트 하세요! 엠몬솔루션몰의 빠르고 쾌적한 쇼핑을 도와드립니다. 정상 작동을 위해 엣지(버전 79.0.309.65 이상), 크롬, 웨일, 파이어폭스를 통해 로그인하거나 인터넷 익스플로러를 엣지로 변경/설치 후 이용해 주세요.</b>
				</h1>
				<i class="image_error">
					<img
						src="../../../public/images/common/error_ie_browser.png"
						usemap="#dev_error-ie"
						alt="최신 브라우저 설치하기"
					>
				</i>
				<map name="dev_error-ie">
					<area
						shape="rect"
						coords="137,368,298,620"
						href="https://www.microsoft.com/ko-kr/edge"
						target="_blank"
						alt="엣지 microsoft Edge 설치하기"
					>
					<area
						shape="rect"
						coords="315,368,482,620"
						href="https://www.google.co.kr/chrome/"
						target="_blank"
						alt="크롬 Google Chrome 설치하기"
					>
					<area
						shape="rect"
						coords="496,368,659,620"
						href="https://whale.naver.com/ko/"
						target="_blank"
						alt="웨일 Naver Whale 설치하기"
					>
					<area
						shape="rect"
						coords="675,368,841,620"
						href="https://www.mozilla.org/ko/firefox/new/"
						target="_blank"
						alt="파이어폭스 Mozilla FireFox 설치하기"
					>
				</map>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: 0;
		background-clip: padding-box;
		vertical-align: top;
		color: inherit;
		font: inherit;
		letter-spacing: inherit;
		word-break: inherit;

		&::before,
		&::after {
			display: inline-block;
			box-sizing: border-box;
			vertical-align: top;
			font: inherit;
			letter-spacing: inherit;
			word-break: inherit;
		}
	}

	:root,
	body {
		width: 100%;
		min-width: 1360px;
		height: 100%;
	}

	body {
		font-size: 1rem;
		-webkit-touch-callout: none;
	}

	.mm_app {
		position: relative;
		height: 100%;
	}

	.mm_view {
		height: 100%;
	}

	.mm_page {
		height: 100%;
	}

	.mm_page-content {
		height: 100%;
	}

	.m_error-ie {
		width: 100%;
		height: 100%;
		font-size: 0;
		text-align: center;

		&::before {
			margin-left: -1px;
			width: 1px;
			height: 100%;
			vertical-align: middle;
			content: '';
		}

		&::after {
			position: fixed;
			z-index: -1;
			inset: 0;
			background-image: url('../../../public/images/common/error_ie_bg.png');
			background-position: 0 0;
			background-size: cover;
			background-repeat: no-repeat;
			content: '';
		}

		&-inner {
			display: inline-block;
			padding: 50px;
			vertical-align: middle;

			.image_error {
				width: 1124px;

				img {
					border: 0;
				}
			}
		}
	}
</style>