<script setup lang="ts">
	defineProps<{
		totalPage: number,
		currentPage: number,
	}>();
	// TODO 한 번에 노출될 수 있는 페이지네이션의 개수 구하는 작업 필요
	// TODO 페이지가 아닌 컨텐츠 내 페이지 링크 클릭 시 링크 변수 적용
</script>

<template>
	<!-- 페이지네이션 -->
	<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
	<div class="mm_pagination">
		<div class="mm_inline">
			<ol>
				<li
					v-for="index in totalPage"
					:key="index"
				>
					<router-link
						:class="{ 'S=page-on': currentPage === index }"
						:title="currentPage === index ? '선택됨' : ''"
						:to="{ query: { page: index } }"
					>
						<b>{{ index }}</b>
					</router-link>
				</li>
			</ol>
			<button
				type="button"
				class="btn_control-first"
				disabled
			>
				<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
			</button>
			<button
				type="button"
				class="btn_control-prev"
				disabled
			>
				<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
			</button>
			<button
				type="button"
				class="btn_control-next"
			>
				<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
			</button>
			<button
				type="button"
				class="btn_control-last"
			>
				<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
			</button>
		</div>
	</div>
</template>