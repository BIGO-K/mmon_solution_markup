<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';

	const importantListAPI = ref<CsImportantNoticeListAPI>();
	const listAPI = ref<CsNoticeListAPI>();

	// api
	Api.getAll([
		{ key: `CS_IMPORTANT_NOTICES`, ref: importantListAPI },
		{ key: `CS_NOTICE_LIST`, ref: listAPI },
	]);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>공지사항</b></h1>
		</template>

		<template #content>
			<!-- 내용없음 -->
			<p
				v-if="(listAPI?.paginator.total ?? NaN) < 0"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>공지사항 내역이 없습니다
			</p>

			<div
				v-else
				class="mm_accordion"
			>
				<ul>
					<li
						v-for="importantItem in importantListAPI?.important_notices"
						:key="importantItem.id"
					>
						<dl
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_accrodion-notice' }"
						>
							<dt
								class="btn_dropdown"
								tabindex="0"
								title="펼쳐보기"
							>
								<p><b class="text_important">중요</b><b>{{ importantItem.title }}</b></p><i class="ico_dropdown"></i>
							</dt>
							<dd class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<p>{{ importantItem.contents }}</p>
								</div>
							</dd>
						</dl>
					</li>
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
					>
						<dl
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_accrodion-notice' }"
						>
							<dt
								class="btn_dropdown"
								tabindex="0"
								title="펼쳐보기"
							>
								<p><b>{{ item.title }}</b></p><i class="ico_dropdown"></i>
							</dt>
							<dd class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<p>{{ item.contents }}</p>
								</div>
							</dd>
						</dl>
					</li>
				</ul>
			</div>

			<!-- 페이지네이션 -->
			<pagination
				v-if="listAPI?.paginator != null && listAPI.paginator.total > 0"
				:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</template>
	</LayoutSub>
</template>