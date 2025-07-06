<script setup lang="ts">

</script>

<template>
	<!-- 툴바 -->
	<div class="mm_toolbar T=tb">
		<ul class="mm_flex T=equal">
			<li>
				<a href="main.html">
					<i class="ico_home-full"></i>
					<b class="mm_ir-blind">홈</b>
				</a>
			</li>
			<li>
				<a
					href="sidebar_level5.html"
					onclick="mm.side.open(this.href);return false;"
				>
					<i class="ico_menu"></i>
					<b class="mm_ir-blind">카테고리</b>
				</a>
			</li>
			<li>
				<a href="_popup_search.html">
					<i class="ico_search"></i>
					<b class="mm_ir-blind">검색</b>
				</a>
			</li>
			<li>
				<a href="myMain_level5.html">
					<i class="ico_mypage"></i>
					<b class="mm_ir-blind">마이페이지</b>
				</a>
			</li>
			<li>
				<a href="#">
					<!-- (D) 최근본상품이 있을 때 노출합니다. -->
					<LazyloadMUI
						class="mm_bg-cover image_lately"
						:_src="'/public/images/_sample/prod_x1_3.png'"
					></LazyloadMUI>
					<b class="mm_ir-blind">최근본상품</b>
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
	:root {
		--toolbar_height_base: 42px;
	}
</style>
