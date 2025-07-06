<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<!-- 툴바 -->
	<div class="mm_toolbar T=ta">
		<ul class="mm_flex T=equal">
			<li>
				<router-link
					:to="{ name: 'LayoutMain' }"
				>
					<i class="ico_home"></i>
					<b>홈</b>
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'Sidebar' }"
					onclick="mm.side.open(this.href); return false;"
				>
					<i class="ico_menu"></i>
					<b>카테고리</b>
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'Search' }"
				>
					<i class="ico_search"></i>
					<b class="mm_ir-blind">검색</b>
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Mypage' }">
					<i class="ico_mypage"></i>
					<b>마이페이지</b>
				</router-link>
			</li>
			<li>
				<!-- TODO 최근본상품 유무에 따른 분기처리 필요 -->
				<router-link :to="{ name: 'LatelyProduct' }">
					<!-- (D) 최근본상품이 있을 때 노출합니다. -->
					<LazyloadMUI
						class="mm_bg-cover image_lately"
						:_src="'/public/images/_sample/prod_x1_3.png'"
					></LazyloadMUI>

					<!-- (D) 최근본상품이 없을 때 노출합니다. -->
					<!-- <i class="ico_lately"></i> -->
					<b>최근본상품</b>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
	:root {
		--toolbar_height_base: 51px;
	}
</style>
