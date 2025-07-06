<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const listAPI = ref<PolicyCompanyListAPI>();

	// api
	Api.getAll([
		{ key: `COMPANY_LIST`, ref: listAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>업체리스트</b></h1>
		</template>

		<template #content>
			<div class="m_popup-company">
				<div class="m_modal-company">
					<table>
						<colgroup>
							<col>
							<col style="width: 29.52127%;">
						</colgroup>
						<thead>
							<tr>
								<th scope="col">
									<b>업체명</b>
								</th>
								<th scope="col">
									<b>대표자</b>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in listAPI?.middle_users"
								:key="item.name"
							>
								<td><b>{{ item.name }}</b></td>
								<td><b>{{ item.ceo_name }}</b></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>