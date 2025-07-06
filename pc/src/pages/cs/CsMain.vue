<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const faqTypesAPI = ref<CsFaqTypesAPI>();
	const faqListAPI = ref<CsFaqListAPI>();
	const mainNoticeAPI = ref<CsMainNoticeAPI>();

	// api
	Api.getAll([
		{ key: `CS_FAQ_TYPES`, ref: faqTypesAPI },
		{ key: `CS_FAQ_LIST`, ref: faqListAPI },
		{ key: `CS_TOP_NOTICES`, ref: mainNoticeAPI },
	]);

	const route = useRoute();
	const _faqId = computed<number>(() => Number(route.query.faq));

	/** 검색결과 리스트 노출 */
	const _isResult = ref(false);
</script>

<template>
	<!-- 자주 찾는 메뉴 -->
	<div class="mm_flex m_cs-quick">
		<h4><small>QUICK MENU</small><b>바로가기</b></h4>
		<ul class="mm_flex mm_flex-equal T=equal">
			<li>
				<router-link :to="{ name: 'CsInquiry' }">
					<i class="ico_cs-qna"></i><b>1:1 고객상담</b>
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'MyInquiry' }">
					<i class="ico_cs-answer"></i><b>상담/답변확인</b>
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'MyOrder' }">
					<i class="ico_cs-ship"></i><b>주문배송조회</b>
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'MyBenefit' }">
					<i class="ico_cs-coupon"></i><b>쿠폰/적립금</b>
				</router-link>
			</li>
		</ul>
	</div>

	<!-- 자주하는 질문 -->
	<div class="m_cs-faq">
		<!-- 검색 -->
		<div class="m_cs-faq-search">
			<div class="mm_form_mix-linked">
				<h5 class="text_linked">
					<b>자주하는 질문</b>
				</h5>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="text"
							class="textfield"
							data-text
							maxlength="30"
						><i class="bg_text"></i>
						<span class="text_placeholder">검색어를 입력하세요</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=dark"
					@click="_isResult = !_isResult"
				>
					<b>검색하기</b>
				</button>
			</div>
			<h4
				v-if="_isResult"
				class="text_searched"
			>
				<strong>‘배송’</strong> 으로 검색한 결과 <strong>80개</strong>
			</h4>
		</div>

		<!-- 탭메뉴 -->
		<div class="mm_tab_menu T=square">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul class="mm_flex T=equal">
				<li
					v-for="faq in faqTypesAPI?.faq_types"
					:key="faq.id"
				>
					<router-link
						:class="{ 'S=tab-on': _faqId === faq.id }"
						:title="_faqId === faq.id ? '선택됨' : ''"
						:to="{ query: { faq: faq.id } }"
						replace
					>
						<b>{{ faq.name }}</b>
					</router-link>
				</li>
			</ul>
		</div>

		<none v-if="faqListAPI != null && faqListAPI.paginator.total < 1">
			검색 결과가 없습니다
		</None>

		<!-- 리스트 -->
		<div
			v-else
			class="mm_accordion"
		>
			<ul v-if="_isResult">
				<li>
					<dl
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_accrodion' }"
					>
						<dt
							class="btn_dropdown"
							tabindex="0"
							title="펼쳐보기"
						>
							<p><span><strong>배송</strong>지연/품절지연 보상 제도란 무엇인가요?</span></p>
							<i class="ico_dropdown"></i>
						</dt>
						<dd class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<p><strong>배송</strong>지연/품절지연 보상 제도란 무엇인가요?</p>
							</div>
						</dd>
					</dl>
				</li>
				<li>
					<dl
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_accrodion' }"
					>
						<dt
							class="btn_dropdown"
							tabindex="0"
							title="펼쳐보기"
						>
							<p><span><strong>배송</strong>비는 어떻게 부과되나요?</span></p>
							<i class="ico_dropdown"></i>
						</dt>
						<dd class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<p><strong>배송</strong>비는 어떻게 부과되나요?</p>
							</div>
						</dd>
					</dl>
				</li>
				<li>
					<dl
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_accrodion' }"
					>
						<dt
							class="btn_dropdown"
							tabindex="0"
							title="펼쳐보기"
						>
							<p><span>묶음 <strong>배송</strong>이 가능한가요?</span></p>
							<i class="ico_dropdown"></i>
						</dt>
						<dd class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<p>묶음 <strong>배송</strong>이 가능한가요?</p>
							</div>
						</dd>
					</dl>
				</li>
				<li>
					<dl
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_accrodion' }"
					>
						<dt
							class="btn_dropdown"
							tabindex="0"
							title="펼쳐보기"
						>
							<p><span><strong>배송</strong>기간은 얼마나 걸리나요?</span></p>
							<i class="ico_dropdown"></i>
						</dt>
						<dd class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<p><strong>배송</strong>기간은 얼마나 걸리나요?</p>
							</div>
						</dd>
					</dl>
				</li>
			</ul>
			<ul v-else>
				<li
					v-for="item in faqListAPI?.paginator.data"
					:key="item.id"
				>
					<dl
						class="mm_dropdown"
						data-dropdown="{ '_group': 'dev_accrodion' }"
					>
						<dt
							class="btn_dropdown"
							tabindex="0"
							title="펼쳐보기"
						>
							<p><span>{{ item.title }}</span></p><i class="ico_dropdown"></i>
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

		<pagination
			v-if="faqListAPI?.paginator != null && faqListAPI.paginator.total > 0"
			:total-page="Math.ceil(faqListAPI.paginator.total / faqListAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>

	<!-- 공지사항 -->
	<div class="m_cs-notice">
		<h5 class="mm_strapline">
			<b>공지사항</b>
		</h5>
		<div class="mm_list">
			<ul>
				<li
					v-for="notice in mainNoticeAPI?.notices"
					:key="notice.id"
				>
					<router-link :to="{ name: 'CsNoticeDetail', params: { id: notice.id } }">
						<b>{{ notice.title }}</b>
						<strong
							v-if="notice.is_important"
							class="text_important"
						>
							중요
						</strong>
						<small>{{ notice.created_at }}</small>
					</router-link>
				</li>
			</ul>
		</div>
		<router-link
			class="btn_more"
			:to="{ name: 'CsNotice' }"
		>
			<b>더보기</b>
			<i class="ico_more"></i>
		</router-link>
	</div>
</template>