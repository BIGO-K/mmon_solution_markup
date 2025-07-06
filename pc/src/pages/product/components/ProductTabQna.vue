<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<ProductQnaListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_QNA_LIST`, ref: listAPI },
	]);

	const onlyAnswered = ref(false);
</script>

<template>
	<div class="m_prodetail-tab-qna">
		<p class="text_qna">
			판매자에게 상품,배송,취소,교환,반품 등<br>궁금한 내용을 문의하세요
		</p>
		<div class="mm_btn_box">
			<a
				class="mm_btn T=line T=primary"
				href="#"
			>
				<b>상품 문의하기</b>
			</a>
		</div>

		<template v-if="listAPI != null">
			<!-- Q&A 리스트 -->
			<None v-if="listAPI.total < 1">
				등록된 문의가 아직 없습니다
			</None>

			<template v-else>
				<div class="mm_qna">
					<label class="mm_form-check">
						<input
							v-model="onlyAnswered"
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">답변완료만 보기</span>
						</b>
					</label>

					<!-- (D) '답변완료만 보기' 체크박스 선택 시 노출되는 내용없음이며, 아래 table 및 pagination 미노출합니다. -->
					<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
					<!-- <None v-if="listAPI.total < 1 && onlyAnswered"> -->
					<None v-if="onlyAnswered">
						등록된 문의가 아직 없습니다
					</None>

					<table>
						<colgroup>
							<col style="width: 136px;">
							<col>
							<col style="width: 153px;">
						</colgroup>
						<tbody
							v-for="qnaItem in listAPI.data"
							:key="qnaItem.id"
							class="mm_dropdown"
							data-dropdown="{ '_group': 'dev_qna' }"
						>
							<tr
								class="btn_dropdown"
								title="펼쳐보기"
							>
								<td>
									<strong
										v-if="qnaItem.is_reply"
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
								</td>
								<td v-if="qnaItem.is_private">
									<p>비밀글입니다<i class="ico_lock"></i></p>
								</td>
								<td v-else>
									<p>{{ qnaItem.title }}</p>
								</td>
								<td>{{ qnaItem.created_at }}</td>
							</tr>
							<tr class="mm_dropdown-item">
								<td
									class="mm_dropdown-item-inner"
									colspan="3"
								>
									<div class="mm_qna-qustion">
										<p>{{ qnaItem.contents }}</p>
										<div
											v-if="qnaItem.is_editable"
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
										v-if="qnaItem.is_reply"
										class="mm_qna-answer"
									>
										<p>{{ qnaItem.answer?.contents }}</p>
										<span class="text_date">답변일: {{ qnaItem.answer?.created_at }}</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Pagination
					:total-page="Math.ceil(listAPI.total / listAPI.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</template>
		</template>
	</div>
</template>
