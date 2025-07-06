<script setup lang="ts">

</script>

<template>
	<!-- 헤더 -->
	<!-- (D) 텍스트 흰색을 선택한다면 mm_header에 T=text-white 클래스를 추가합니다. -->
	<header class="mm_header T=hb T=text-white">
		<h1><a href="#"><i class="image_logo"></i><b class="mm_ir-blind">M.Mon solution</b></a></h1>
		<div class="mm_rside">
			<a href="_popup_search.html"><b class="mm_ir-blind">검색하기</b><i class="ico_search"></i></a>
			<a href="cart.html"><i class="ico_pushcart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b></a>
		</div>
	</header>
</template>

<style lang="scss">
	:root {
		--header_height_main: 50px;

		/* --color_header: #fff; /* 배경 흰색 버전 */
		--color_header: var(--color_main); /* 배경 컬러 버전 */
	}
</style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 인기검색어 스위칭
	function searchPopularChange(__is) {

		mm.observer.dispatch('SEARCH_POPULAR_CHANGE', { _isLocal: true, data: { _is: __is } });

	}

	(function () {

		// 인기검색어 롤링
		var $popular = mm.find('.m_main-popular')[0];
		var $popularItems = mm.find('ol > li', $popular);
		var _index = 0;
		var popularInterval;

		function popularAutoPlay() {

			popularInterval = setInterval(function() {

				gsap.fromTo($popularItems[_index], { y: '0%' }, { y: '-100%', duration: 0.3, ease: 'sine.inOut' });

				_index = (_index === $popularItems.length - 1) ? 0 : _index + 1;
				gsap.fromTo($popularItems[_index], { y: '100%' }, { y: '0', duration: 0.3, ease: 'sine.inOut' });

			}, 4000);

		}

		popularAutoPlay();

		mm.observer.on($popular, 'SEARCH_POPULAR_CHANGE', function(__e) {

			if (__e.detail._is) {
				gsap.killTweensOf($popularItems);
				clearInterval(popularInterval);
				mm.element.style($popularItems, { 'transform': '' });
			}
			else {
				_index = 0;
				popularAutoPlay();
			}

		});

	})();
</script> -->