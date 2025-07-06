<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>사이즈 가이드</b></h1>
		</template>

		<template #content>
			<div class="m_popup-size">
				<ul>
					<li>
						<i>
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/_sample/prod_x3_3.png'"
								:alt="''"
							></LazyloadMUI>
						</i>
					</li>
					<li>
						<i>
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/_sample/prod_x3_2.png'"
								:alt="''"
							></LazyloadMUI>
						</i>
					</li>
					<li>
						<i>
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/_sample/prod_x3_4.png'"
								:alt="''"
							></LazyloadMUI>
						</i>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>