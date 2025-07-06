<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const categoryFilter = ref<ProductCategoryFilterAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_CATEGORIES_FILTER`, ref: categoryFilter },
	]);
</script>

<template>
	<!-- FIT -->
	<section>
		<h5><b>FIT</b></h5>
		<div class="mm_filter-list">
			<ul>
				<li
					v-for="fit in categoryFilter?.filters.fit_sizes"
					:key="fit.id"
				>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<span class="text_label">{{ fit.label }}</span>
						</b>
					</label>
				</li>
			</ul>
		</div>
	</section>

	<!-- 슈즈 -->
	<section>
		<h5><b>슈즈</b></h5>
		<div class="mm_filter-list">
			<ul>
				<li
					v-for=" shoes in categoryFilter?.filters.shoes_sizes"
					:key="shoes.id"
				>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<span class="text_label">{{ shoes.label }}</span>
						</b>
					</label>
				</li>
			</ul>
		</div>
	</section>
</template>