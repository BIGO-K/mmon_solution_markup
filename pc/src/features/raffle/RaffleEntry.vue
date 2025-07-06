<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-raffle-entry'">
		<template #header>
			<h2><b>응모하기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<h6 class="mm_text-label">
				<b>아이디</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">afghij***@naver.com</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>이름</b>
			</h6>
			<div class="mm_form-text">
				<label>
					<span class="textfield text_readonly">홍길동</span>
					<i class="bg_text"></i>
				</label>
			</div>
			<h6 class="mm_text-label">
				<b>휴대폰 번호</b>
			</h6>
			<div class="mm_form_mix-linked">
				<div class="mm_form-text">
					<label>
						<span class="textfield text_readonly">01012345678</span>
						<i class="bg_text"></i>
					</label>
				</div>
				<a
					class="mm_btn T=line T=dark"
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<b>휴대폰 번호 변경</b>
				</a>
			</div>

			<!-- 유의사항 -->
			<div class="mm_note">
				<ul>
					<li>래플은 회원 아이디 기준으로 이벤트 당 1회 응모 가능합니다.</li>
					<li>래플은 선착순이 아닌 랜덤 추첨으로 진행됩니다.</li>
					<li><strong>마이페이지 &#62; 래플 응모 내역</strong>에서 당첨 여부 확인할 수 있습니다.</li>
					<li>회원정보 기준으로 당첨자 본인만 구매 가능합니다.</li>
					<li>당첨자에 한하여 구매기간 이내 구매 가능하며 미구매 시 당첨이 취소됩니다.</li>
					<li>래플 상품은 취소, 반품, 교환이 불가능합니다.</li>
				</ul>
			</div>

			<label class="mm_form-check">
				<input
					type="checkbox"
					data-check
				>
				<b class="mm_block">
					<i class="ico_form-check"></i>
					<span class="text_label">안내사항을 확인하였으며 이에 동의합니다.</span>
				</b>
			</label>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>응모하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>