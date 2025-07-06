<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	import { useRoute, onBeforeRouteUpdate } from 'vue-router';
	import Api from '@markup/api';
	import { useMypageTab } from '@/composables/useMypage';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const { inquiryTab, onTabRouteHandler } = useMypageTab();

	const tabItems: {
		id: keyof typeof inquiryTab;
		apiKey: string;
	}[] = [
		{
			id: 'qna',
			apiKey: 'MYPAGE_QNA_LIST',
		},
		{
			id: 'seller',
			apiKey: 'MEMBER_SELLER_QNA_LIST',
		}
	];

	const route = useRoute();
	const _tabId = computed(() => route.params.tab);

	const inquiryAPI = ref<InquiryAPI | InquirySellerAPI>();

	watch(_tabId, () => {

		const item = tabItems.find(__item => __item.id === _tabId.value);
		if (item == null) return;

		// api
		Api.getAll([
			{ key: item.apiKey, ref: inquiryAPI },
		]);

	}, { immediate: true });

	onBeforeRouteUpdate(onTabRouteHandler);
</script>

<template>
	<div class="m_my-inquiry">
		<h5 class="mm_heading">
			<b>1:1 문의</b>
		</h5>

		<!-- 탭메뉴 -->
		<div class="mm_tab_menu">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul class="mm_flex T=equal">
				<li
					v-for="tab in tabItems"
					:key="tab.id"
				>
					<router-link
						:class="{ 'S=tab-on': tab.id === _tabId }"
						:title="tab.id === _tabId ? '선택됨' : ''"
						:to="{ params: { tab: tab.id }}"
						replace
					>
						<b>{{ inquiryTab[tab.id] }}</b>
					</router-link>
				</li>
			</ul>
		</div>

		<!-- 문의 목록 -->
		<div class="mm_qna">
			<table>
				<colgroup>
					<col style="width: 144px;">
					<col style="width: 430px;">
					<col>
					<col style="width: 153px;">
				</colgroup>
				<thead>
					<tr>
						<th scope="col">
							<b>답변 여부</b>
						</th>
						<th scope="col">
							<b>문의 상품</b>
						</th>
						<th scope="col">
							<b>문의 제목</b>
						</th>
						<th scope="col">
							<b>작성일</b>
						</th>
					</tr>
				</thead>
				<tbody
					v-if="inquiryAPI == null || inquiryAPI.paginator.data.length < 1"
				>
					<tr>
						<td colspan="4">
							<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
							<None>등록된 문의가 없습니다</None>
						</td>
					</tr>
				</tbody>
				<template v-else>
					<tbody
						v-for="inquiry in inquiryAPI.paginator.data"
						:key="inquiry.id"
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_qna' }"
					>
						<tr
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<td>
								<strong
									v-if="inquiry.answer"
									class="mm_text-variable text_state"
								>답변완료</strong>
								<strong
									v-else
									class="text_state"
								>답변대기</strong>
							</td>
							<td>
								<div
									v-if="inquiry.goods"
									class="mm_product-item T=single T=sm"
								>
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="'image_url' in inquiry.goods ? inquiry.goods.image_url : inquiry.goods.thumbnail_url"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">
												{{ inquiry.goods.brand_name }}
											</p>
											<p class="text_product">
												{{ inquiry.goods.name }}
											</p>
											<p
												v-if="inquiry.goods.option_name != null"
												class="text_option"
											>
												{{ inquiry.goods.option_name }}
											</p>
										</figcaption>
									</figure>
								</div>
							</td>
							<td><p>{{ inquiry.title }}</p></td>
							<td><b>{{ inquiry.created_at }}</b></td>
						</tr>
						<tr class="mm_dropdown-item">
							<td
								class="mm_dropdown-item-inner"
								colspan="4"
							>
								<div class="mm_qna-qustion">
									<p>
										{{ inquiry.contents }}
									</p>
									<div
										v-if="!inquiry.answer"
										class="mm_btn_box"
									>
										<button
											type="button"
											class="mm_btn T=xs T=line T=lightest"
										>
											<b>삭제</b>
										</button>
										<a
											class="mm_btn T=xs T=darker"
											href="#"
										>
											<b>수정</b>
										</a>
									</div>
								</div>
								<div
									v-if="inquiry.answer"
									class="mm_qna-answer"
								>
									<p>{{ inquiry.answer.contents }}</p>
									<span class="text_date">답변일: {{ inquiry.answer.created_at }}</span>
								</div>
							</td>
						</tr>
					</tbody>
				</template>
			</table>
		</div>
		<Pagination
			v-if="inquiryAPI != null"
			:total-page="Math.ceil(inquiryAPI.paginator.total / inquiryAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>