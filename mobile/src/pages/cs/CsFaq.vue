<script setup lang="ts">
	import { ref, onUpdated } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const typesAPI = ref<CsFaqTypesAPI>();
	const listAPI = ref<CsFaqListAPI>();

	// api
	Api.getAll([
		{ key: `CS_FAQ_TYPES`, ref: typesAPI },
		{ key: `CS_FAQ_LIST`, ref: listAPI },
	]);

	const route = useRoute();
	const faqTypeId = ref(0);

	onUpdated(() => {

		faqTypeId.value = Number(route.query.faq);

	});

	/** 검색결과 리스트 노출 */
	const _isResult = ref(false);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>자주하는 질문</b></h1>
		</template>

		<template #content>
			<div class="m_cs-faq">
				<!-- 검색 -->
				<div class="m_cs-faq-search">
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_search"
							@click="_isResult = !_isResult"
						>
							<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
						</button>
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="search"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">검색어를 입력하세요</span>
						</label>
					</div>
				</div>

				<!-- 자주하는 질문 키워드 -->
				<div class="mm_inner m_cs-faq-menu">
					<ul>
						<li
							v-for="faq in typesAPI?.faq_types"
							:key="faq.id"
						>
							<router-link
								:class="{ 'S=menu-on': faqTypeId === faq.id }"
								:to="{ name: `CsFaq`, query: { faq: faq.id } }"
								:title="faqTypeId === faq.id ? '선택됨' : ''"
							>
								<b>{{ faq.name }}</b>
							</router-link>
						</li>
					</ul>
				</div>

				<!-- 자주하는 질문 내용 목록 -->
				<div class="mm_accordion">
					<ul>
						<li
							v-for="faq in listAPI?.paginator.data"
							:key="faq.id"
						>
							<dl
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_accrodion-faq' }"
							>
								<dt
									class="btn_dropdown"
									tabindex="0"
									title="펼쳐보기"
								>
									<p><b>{{ faq.title }}</b></p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<p>{{ faq.contents }}</p>
									</div>
								</dd>
							</dl>
						</li>
					</ul>
				</div>

				<!-- 검색 결과 -->
				<div class="m_cs-faq-result">
					<h3 class="mm_heading">
						<b><strong class="text_search">결제</strong>으로 검색한 결과</b><strong class="mm_text-variable">3개</strong>
					</h3>

					<!-- 내용없음 -->
					<p
						v-if="listAPI != null && listAPI.paginator.total < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>검색결과가 없습니다
					</p>

					<div
						v-else-if="_isResult"
						class="mm_accordion"
					>
						<ul>
							<li
								v-for="item in listAPI?.paginator.data"
								:key="item.id"
							>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-faq' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<!-- TODO 검색 키워드 strong 태그에 넣어줘야함 -->
										<!-- <p><b>비회원도 주문 <strong>결제</strong>가 가능한가요?</b></p><i class="ico_dropdown"></i> -->
										<p>{{ item.title }}</p><i class="ico_dropdown"></i>
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
				</div>
			</div>
		</template>
	</LayoutSub>
</template>