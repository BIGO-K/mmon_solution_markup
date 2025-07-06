<script setup lang="ts">
	import { ref, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const route = useRoute();
	const listAPI = ref<PolicyListAPI>();

	const titleMap = {
		agreement: '이용약관',
		privacy: '개인정보 처리방침'
	};

	const _policyType = route.path.split('/').pop() as keyof typeof titleMap;
	const policyId = ref<string>();

	// 이전 약관 조회
	watch(policyId, (__toID) => {

		let _apiQuery = `?policy_type=${_policyType}`;
		if (__toID != null) _apiQuery += `&id=${__toID}`;
		Api.get<PolicyListAPI>(`POLICY_NOW_DISPLAY_END_PREV_LIST`, listAPI, _apiQuery);

	}, {
		immediate: true
	});
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>{{ titleMap[_policyType] }}</b></h1>
		</template>

		<template #content>
			<div class="mm_policy">
				<!-- 약관 내용 -->
				<div
					class="mm_policy-inner"
					v-html="listAPI?.now_policy.contents"
				></div>

				<!-- 약관 정보 -->
				<div class="mm_policy-info">
					<ul v-if="_policyType === 'privacy'">
						<li>개인정보처리방침 버전번호: v5.9</li>
						<li>개인정보처리방침 시행일자: 2020-00-00</li>
						<li>개인정보처리방침 변경일자: 2020-00-00</li>
					</ul>
					<div class="mm_form-select">
						<label>
							<select
								data-select
								@change="(__e) => policyId = (__e.target as HTMLSelectElement).value"
							>
								<option
									v-for="policy in listAPI?.prev_policies"
									:key="policy.id"
									:value="policy.id"
								>
									{{ policy.title }}
								</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>