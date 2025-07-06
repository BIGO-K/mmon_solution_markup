<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<ProductQnaListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_QNA_LIST`, ref: listAPI },
	]);
</script>

<template>
	<!-- QNA -->
	<div
		v-if="listAPI"
		class="m_prodetail-tab-qna"
	>
		<div class="m...qna-head">
			<p>판매자에게 상품, 배송, 취소, 교환, 반품 등<br> 궁금한 내용을 문의하세요</p>
			<router-link
				class="mm_btn T=sm T=line T=dark"
				:to="{ name: 'ProductInquiry' }"
			>
				<b>상품 문의하기</b>
			</router-link>
		</div>

		<!-- 내용없음 -->
		<p
			v-if="listAPI.total < 1"
			class="mm_text-none"
		>
			<i class="ico_text-none"></i>등록된 문의가 없습니다
		</p>

		<!-- 문의 목록 -->
		<div
			v-else
			class="mm_qna"
		>
			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">답변완료만 보기</span>
				</b>
			</label>
			<ul>
				<li
					v-for="item in listAPI.data"
					:key="item.id"
				>
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
								v-if="item.is_reply"
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
							<p v-if="item.is_private">
								<span class="text_title">비밀글입니다</span>
								<span class="text_date">{{ item.created_at }}</span>
								<i class="ico_secret"></i>
							</p>
							<p v-else>
								<span class="text_title">{{ item.title }}</span>
								<span class="text_date">{{ item.created_at }}</span>
							</p>
							<i
								v-if="!item.is_private"
								class="ico_dropdown"
							></i>
						</dt>
						<!-- TODO 조건 다시 생각 필요 -->
						<dd
							v-if="!item.is_private"
							class="mm_dropdown-item"
						>
							<div class="mm_dropdown-item-inner">
								<div class="mm_qna-qustion">
									<p>{{ item.contents }}</p>
									<div
										v-if="item.is_editable"
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
									v-if="item.is_reply"
									class="mm_qna-answer"
								>
									<p>{{ item.answer?.contents }}</p>
									<span class="text_date">답변일: {{ item.created_at }}</span>
								</div>
							</div>
						</dd>
					</dl>
				</li>
			</ul>
		</div>

		<Pagination
			v-if="listAPI"
			:total-page="Math.ceil(listAPI.total / listAPI.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>