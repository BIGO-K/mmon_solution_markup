<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-raffle-guide'">
		<template #header>
			<h2><b>래플</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<h3><b>래플 안내</b></h3>
			<p>온라인 추첨 구입 제도로 당첨된 회원에 한하여<br>구매할 수 있는 상품입니다</p>
			<ol>
				<li>
					<b>로그인</b>
					<p>회원에 한하여 1인 1회 응모 가능</p>
				</li>
				<li>
					<b>응모 정보 작성</b>
					<p>잘못된 정보 입력 시 응모 취소</p>
				</li>
				<li>
					<b>응모하기</b>
					<p>응모 완료 팝업 확인</p>
				</li>
				<li>
					<b>당첨 여부 공지</b>
					<p>알림톡으로 개별 발송,<br>마이페이지 &#62; 래플응모 내역에서 확인 가능</p>
				</li>
				<li>
					<b>구매하기</b>
					<p>당첨된 회원에 한해 상품 상세 페이지에서 구매 가능</p>
				</li>
			</ol>

			<!-- 안내문구 -->
			<div class="mm_note">
				<ul>
					<li>래플 상품별로 응모기간과 발표일, 구매 기간이 다르며 당첨자는 100% 랜덤 추첨됩니다.</li>
				</ul>
			</div>
		</template>
	</ModalLayout>
</template>