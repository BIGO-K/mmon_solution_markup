<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Pagination from '@/components/Pagination.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const inquiryAPI = ref<InquirySellerAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<InquirySellerAPI>(`MEMBER_SELLER_QNA_LIST`, inquiryAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>문의 관리</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link :to="{ name: 'MyInquiry' }">
							<b>1:1 문의</b>
						</router-link>
					</li>
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyInquirySeller' }"
							title="선택됨"
						>
							<b>판매자 문의</b>
						</router-link>
					</li>
				</ul>
			</div>

			<p
				v-if="(inquiryAPI?.paginator.data.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>문의 내역이 없습니다
			</p>

			<!-- 문의목록 -->
			<div
				v-else
				class="mm_qna m_myinquiry"
			>
				<ul>
					<li
						v-for="inquiry in inquiryAPI?.paginator.data"
						:key="inquiry.id"
					>
						<div
							v-if="inquiry.goods"
							class="mm_product-item T=single-sm"
						>
							<figure>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="inquiry.goods.thumbnail_url"
								></LazyloadMUI>
								<figcaption>
									<p class="text_brand">
										{{ inquiry.goods.brand_name }}
									</p>
									<p class="text_product">
										{{ inquiry.goods.name }}
									</p>
									<p
										v-if="inquiry.goods.option_name"
										class="text_option"
									>
										{{ inquiry.goods.option_name }}
									</p>
								</figcaption>
							</figure>
						</div>
						<dl
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_qna' }"
						>
							<dt
								class="btn_dropdown"
								tabindex="0"
								title="펼쳐보기"
							>
								<strong
									v-if="inquiry.answer"
									class="mm_text-variable text_state"
								>
									답변완료
								</strong>
								<strong
									v-else
									class="text_state"
								>
									답변대기
								</strong>
								<p>
									<span class="text_title">{{ inquiry.title }}</span>
									<span class="text_date">{{ inquiry.created_at }}</span>
									<i
										v-if="inquiry.is_private"
										class="ico_secret"
									></i>
								</p>
								<i class="ico_dropdown"></i>
							</dt>
							<dd class="mm_dropdown-item">
								<div class="mm_dropdown-item-inner">
									<div class="mm_qna-qustion">
										<p>{{ inquiry.contents }}</p>
										<div
											v-if="!inquiry.answer"
											class="mm_btn_box"
										>
											<div class="mm_inline">
												<button
													type="button"
													class="mm_btn T=2xs T=line T=lighter"
												>
													<b>삭제</b>
												</button>
												<a
													class="mm_btn T=2xs T=line T=lighter"
													href="#"
												>
													<b>수정</b>
												</a>
											</div>
										</div>
									</div>
									<div
										v-if="inquiry.answer"
										class="mm_qna-answer"
									>
										<p>{{ inquiry.answer.contents }}</p>
										<span class="text_date">답변일: {{ inquiry.answer.created_at }}</span>
									</div>
								</div>
							</dd>
						</dl>
					</li>
				</ul>
			</div>

			<Pagination
				v-if="inquiryAPI?.paginator != null"
				:total-page="Math.ceil(inquiryAPI.paginator.total / inquiryAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</template>
	</LayoutSub>
</template>