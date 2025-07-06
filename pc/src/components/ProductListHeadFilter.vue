<script setup lang="ts">
	import { ref } from 'vue';

	defineProps<{
		total: number;
	}>();

	const productFilterList = [
		{
			name: '판매순'
		},
		{
			name: '신상품순'
		},
		{
			name: '낮은 가격순'
		},
		{
			name: '높은 가격순'
		},
		{
			name: '할인율 높은순'
		},
		{
			name: '리뷰 많은순'
		},
	];
	const selectFilter = ref('판매순');
</script>

<template>
	<div class="mm_product-list-head">
		<div class="mm_lside">
			<span class="text_total"><strong>{{ total }}</strong>개</span>
		</div>
		<div class="mm_rside">
			<!-- (D) 현재 페이지에 해당하는 a요소에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul>
				<li
					v-for="filter in productFilterList"
					:key="filter.name"
				>
					<a
						:class="{'S=sort-on': selectFilter === filter.name }"
						href="#"
						:title="selectFilter === filter.name? '선택됨' : ''"
						@click.prevent="selectFilter = filter.name"
					>
						<b>{{ filter.name }}</b>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>