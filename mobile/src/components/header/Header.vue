<script setup lang="ts">
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];
</script>

<template>
	<!-- 헤더 -->
	<!-- (D) 텍스트 흰색을 선택한다면 mm_header에 T=text-white 클래스를 추가합니다. -->
	<header
		class="mm_header"
		:class="{'T=ha': layouts.includes('L=main') }"
	>
		<slot name="title"></slot>

		<div
			v-if="!layouts.includes('L=main')"
			class="mm_lside"
		>
			<i
				v-if="layouts.includes('L=search')"
				cass="ico_search"
			>
				<b class="mm_ir-blind">검색</b>
			</i>
			<a
				v-else
				class="btn_back"
				@click.prevent="$router.go(-1)"
			>
				<i class="ico_history-back"></i><b class="mm_ir-blind">이전으로</b>
			</a>
		</div>

		<template v-if="layouts.includes('L=search')">
			<div class="mm_form-text">
				<button
					type="button"
					class="btn_text-clear"
				>
					<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
				</button>
				<label>
					<input
						type="search"
						class="textfield"
						data-text
					>
					<i class="bg_text"></i>
					<span class="text_placeholder">검색어를 입력하세요</span>
				</label>
			</div>
		</template>

		<!-- XXX 장바구니 레이아웃 처리 필요 -->
		<div
			v-if="$route.name !== 'Cart'"
			class="mm_rside"
		>
			<router-link
				v-if="route.name === 'ProductDetail'"
				class="btn_home"
				:to="{ name: 'LayoutMain' }"
			>
				<i class="ico_home"></i>
				<b class="mm_ir-blind">홈</b>
			</router-link>
			<button
				v-if="layouts.includes('L=popup')"
				type="button"
				class="btn_popup-close"
				@click="$router.go(-1)"
			>
				<i class="ico_popup-close"></i><b class="mm_ir-blind">팝업 닫기</b>
			</button>
			<template v-else>
				<router-link
					:to="{ name: 'Search' }"
				>
					<b class="mm_ir-blind">검색</b><i class="ico_search"></i>
				</router-link>
				<router-link :to="{ name: 'Cart' }">
					<i class="ico_cart"></i><strong class="text_badge">2</strong><b class="mm_ir-blind">장바구니</b>
				</router-link>
			</template>
		</div>

		<slot name="extend"></slot>
	</header>
</template>

<style lang="scss">
	:root {
		--header_height_main: 56px;
		--color_header: #fff; /* 배경 흰색 버전 */

		/* --color_header: var(--color_main); /* 배경 컬러 버전 */
	}
</style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 인기검색어 스위칭
	function searchPopularChange(__is) {

		mm.observer.dispatch('SEARCH_POPULAR_CHANGE', { _isLocal: true, data: { _is: __is } });

	}

	(function() {

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