<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const listAPI = ref<CategoryListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DISPLAY_ALL_CATEGORIES`, ref: listAPI },
	]);
</script>

<template>
	<div class="mm_accordion m_sidebar-category">
		<ul>
			<li
				v-for="category in listAPI?.category_list"
				:key="category.code"
			>
				<dl
					class="mm_dropdown"
					data-dropdown="{ '_group': 'dev_category', '_time': 'auto', 'onChange': 'categoryAnchor' }"
				>
					<dt
						class="btn_dropdown"
						tabindex="0"
						title="펼쳐보기"
					>
						<LazyloadMUI
							class="mm_bg-cover image_category"
							:_src="category.image_url"
							:alt="category.alt"
						></LazyloadMUI>
						<b>{{ category.name }}</b>
						<i class="ico_dropdown T=cross"></i>
					</dt>
					<dd class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<ul class="m_sidebar-category-sub">
								<li
									v-for="categoryDepth2 in category.children"
									:key="categoryDepth2.code"
								>
									<dl
										class="mm_dropdown"
										data-dropdown="{ '_group': 'dev_category-sub1', '_time': 'auto', 'onChange': 'categoryHeight' }"
									>
										<dt
											class="btn_dropdown"
											tabindex="0"
											title="펼쳐보기"
										>
											<b>{{ categoryDepth2.name }}</b><i class="ico_dropdown T=cross"></i>
										</dt>
										<dd class="mm_dropdown-item">
											<div class="mm_dropdown-item-inner">
												<ul>
													<li
														v-for="categoryDepth3 in categoryDepth2.children"
														:key="categoryDepth3.code"
													>
														<a href="#"><b>{{ categoryDepth3.name }}</b><small>85,124</small></a>
													</li>
												</ul>
											</div>
										</dd>
									</dl>
								</li>
							</ul>
						</div>
					</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>