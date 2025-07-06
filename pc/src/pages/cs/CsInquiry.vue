<script setup lang="ts">

</script>

<template>
	<div class="m_my-inquiry">
		<h3 class="mm_heading">
			<b>1:1 고객상담</b>
		</h3>
		<!-- 유형 선택 -->
		<div class="mm_form-select T=short">
			<label>
				<select data-select>
					<option>1차 문의 유형선택</option>
					<option data-option="{ 'syncer': '.mm_syncer-inquiry-order' }">배송</option>
					<option data-option="{ 'syncer': '.mm_syncer-inquiry-order' }">반품/교환</option>
					<option data-option="{ 'syncer': '.mm_syncer-inquiry-order' }">취소/환불</option>
					<option data-option="{ 'syncer': '.mm_syncer-inquiry-order' }">주문/결제</option>
					<option>쿠폰/적립금</option>
					<option>이벤트/상품평</option>
					<option>회원가입/정보관리</option>
					<option>오류/개선사항</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div class="mm_form-select T=short">
			<label>
				<select data-select>
					<option>2차 문의 유형선택</option>
				</select>
				<b class="text_selected"></b>
				<i class="ico_form-select"></i>
			</label>
		</div>
		<div class="mm_syncer-inquiry-order">
			<div class="mm_form-select T=short">
				<label>
					<select data-select>
						<option>주문번호 선택</option>
					</select>
					<b class="text_selected"></b>
					<i class="ico_form-select"></i>
				</label>
			</div>
			<div class="mm_form-select T=short">
				<label>
					<select data-select>
						<option>문의상품 선택</option>
					</select>
					<b class="text_selected"></b>
					<i class="ico_form-select"></i>
				</label>
			</div>
		</div>

		<!-- 문의 작성 -->
		<h6 class="mm_text-label">
			<b>문의 제목</b>
		</h6>
		<div class="mm_form-text">
			<button
				type="button"
				class="btn_text-clear"
			>
				<i class="ico_form-clear"></i>
				<b class="mm_ir-blind">지우기</b>
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
				<i class="ico_form-clear"></i>
				<b class="mm_ir-blind">지우기</b>
			</button>
			<label>
				<textarea
					class="textfield"
					data-text="{ '_byte': 2000 }"
				>
					</textarea>
				<i class="bg_text"></i>
				<span class="text_placeholder">최소 10자 이상 입력하세요<br>개인정보 입력 시 사전 고지없이 삭제될 수 있습니다</span>
			</label>
		</div>

		<!-- 하단 버튼 -->
		<div class="mm_foot">
			<div class="mm_btn_box T=equal">
				<button
					type="button"
					class="mm_btn T=light"
				>
					<b>취소하기</b>
				</button>
				<button
					type="button"
					class="mm_btn T=primary"
				>
					<b>등록하기</b>
				</button>
			</div>
		</div>

		<!-- 유의사항 -->
		<section class="mm_note">
			<h6 class="text_title">
				<i class="ico_note"></i><b>유의사항</b>
			</h6>
			<ul>
				<li>주민번호, 전화번호, 이메일 등 개인정보를 남기면 타인에 의해 도용될 수 있으니 문의하기 작성 시 주의해주세요.</li>
				<li>이메일/SMS 답변 수신은 주문, 회원 가입 시 작성한 정보를 기준으로 발송됩니다.</li>
			</ul>
		</section>
	</div>
</template>