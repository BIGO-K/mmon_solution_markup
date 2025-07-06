<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const qnaTypesAPI = ref<CsQnaTypesAPI>();
	const memberQnaOrdersAPI = ref<MemberQnaOrdersAPI>();

	// api
	Api.getAll([
		{ key: `CS_QNA_TYPES`, ref: qnaTypesAPI },
		{ key: `MEMBER_QNA_ORDERS`, ref: memberQnaOrdersAPI },
	]);

	const selectedFirst = ref();
	const selectedSecond = ref();
	const selectedOrderNumber = ref();
	const selectedOrderItem = ref();
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>1:1 고객상담</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-inquiry">
				<div class="mm_form-select">
					<label>
						<select
							v-model="selectedFirst"
							@change="selectedSecond = '2차 문의 유형 선택'"
						>
							<option>1차 문의 유형 선택</option>
							<option
								v-for="qnaFirst in qnaTypesAPI?.qna_types"
								:key="qnaFirst.code"
								:value="qnaFirst.label"
							>
								{{ qnaFirst.label }}
							</option>
						</select>
						<b class="text_selected">{{ selectedFirst || '1차 문의 유형 선택' }}</b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div class="mm_form-select">
					<label>
						<select
							v-model="selectedSecond"
						>
							<option>2차 문의 유형 선택</option>
							<option
								v-for="qnaSecond in qnaTypesAPI?.qna_types[qnaTypesAPI.qna_types.findIndex(selectedIndex => selectedIndex.label == selectedFirst)]?.children"
								:key="qnaSecond.code"
								:value="qnaSecond.label"
							>
								{{ qnaSecond.label }}
							</option>
						</select>
						<b class="text_selected">{{ selectedSecond || '2차 문의 유형 선택' }}</b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div
					class="mm_syncer-inquiry-order"
					:class="{'S=option-use' : qnaTypesAPI?.qna_types[qnaTypesAPI.qna_types.findIndex(selectedIndex => selectedIndex.label == selectedFirst)]?.is_with_order === true}"
				>
					<div class="mm_form-select">
						<label>
							<select
								v-model="selectedOrderNumber"
								@change="selectedOrderItem = '문의상품 선택'"
							>
								<option>주문번호 선택</option>
								<option
									v-for="order in memberQnaOrdersAPI?.orders"
									:key="order.order_id"
									:value="order.order_id"
								>
									{{ order.order_id }}
								</option>
							</select>
							<b class="text_selected">{{ selectedOrderNumber || '주문번호 선택' }}</b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select
								v-model="selectedOrderItem"
							>
								<option>문의상품 선택</option>
								<option
									v-for="orderItem in memberQnaOrdersAPI?.orders[memberQnaOrdersAPI?.orders.findIndex(selectedIndex => selectedIndex.order_id == selectedOrderNumber)]?.items"
									:key="orderItem.id"
									:value="`${orderItem.goods_name} | ${orderItem.option_name}`"
								>
									{{ `${orderItem.goods_name} | ${orderItem.option_name}` }}
								</option>
							</select>
							<b class="text_selected">{{ selectedOrderItem || '문의상품 선택' }}</b>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<h6 class="mm_text-label">
					<b>문의 제목</b>
				</h6>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">문의 제목을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>문의 내용</b>
				</h6>
				<div class="mm_form-textarea">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<textarea
							class="textfield"
							data-text="{ '_byte': 2000 }"
						></textarea>
						<i class="bg_text"></i>
						<span class="text_placeholder">최소 10자 이상 입력하세요</span>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>등록하기</b>
						</button>
					</div>
				</div>
				<div class="mm_note">
					<div
						class="mm_dropdown"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="접어놓기"
						>
							<i class="ico_info"></i><b>1:1 고객상담 문의 시 유의사항</b><i class="ico_dropdown T=box"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li>주민등록번호, 전화번호, 이메일 등 개인정보를 남기면 타인에 의해 도용될 수 있으니 문의하기 작성 시 주의해 주세요.</li>
									<li>이메일/SMS 답변 수신은 주문, 회원가입 시 작성한 정보를 기준으로 발송됩니다.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>