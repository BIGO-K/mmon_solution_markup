<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
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
	<h3 class="mm_heading">
		<b>공지사항</b>
	</h3>
	<div class="mm_table">
		<table>
			<colgroup>
				<col style="width: 90px;">
				<col>
				<col style="width: 200px;">
			</colgroup>
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">
						<b>제목</b>
					</th>
					<th scope="col">
						<b>등록일</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="importantItem in importantListAPI?.important_notices"
					:key="importantItem.id"
					class="T=table-notice"
				>
					<td>공지</td>
					<td>
						<p>
							<router-link :to="{ name: 'CsNoticeDetail', params: { id: importantItem.id } }">
								<b>{{ importantItem.title }}</b><strong class="text_important">중요</strong>
							</router-link>
						</p>
					</td>
					<td>{{ importantItem.created_at }}</td>
				</tr>
				<tr
					v-for="(item, index) in listAPI?.paginator.data"
					:key="item.id"
				>
					<!-- TODO 공지사항 index 순서 구해야함 -->
					<td>{{ index + 1 }}</td>
					<td>
						<p>
							<router-link :to="{ name: 'CsNoticeDetail', params: { id: item.id } }">
								<b>{{ item.title }}</b>
							</router-link>
						</p>
					</td>
					<td>{{ item.created_at }}</td>
				</tr>
			</tbody>
		</table>
	</div>

	<pagination
		v-if="listAPI?.paginator != null && listAPI.paginator.total > 0"
		:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>
</template>