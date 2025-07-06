<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-raffle-winner'">
		<template #header>
			<h2><b>당첨자 보기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<ul>
				<li><b>**호</b>abcde***</li>
				<li><b>**호</b>abcde***</li>
				<li><b>**진</b>fghij***@naver.com</li>
				<li><b>**진</b>fghij***@naver.com</li>
				<li><b>**희</b>abcde***</li>
				<li><b>**희</b>abcde***</li>
				<li><b>**호</b>fghij***@naver.com</li>
				<li><b>**호</b>fghij***@naver.com</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**희</b>fghij***@naver.com</li>
				<li><b>**희</b>fghij***@naver.com</li>
				<li><b>**호</b>abc***@naver.com</li>
				<li><b>**호</b>abc***@naver.com</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**희</b>fghij***</li>
				<li><b>**희</b>fghij***</li>
				<li><b>**호</b>abcde***</li>
				<li><b>**호</b>abcde***</li>
				<li><b>**진</b>fghij***@naver.com</li>
				<li><b>**진</b>fghij***@naver.com</li>
				<li><b>**희</b>abcde***</li>
				<li><b>**희</b>abcde***</li>
				<li><b>**호</b>fghij***@naver.com</li>
				<li><b>**호</b>fghij***@naver.com</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**희</b>fghij***@naver.com</li>
				<li><b>**희</b>fghij***@naver.com</li>
				<li><b>**호</b>abc***@naver.com</li>
				<li><b>**호</b>abc***@naver.com</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**진</b>abcde***</li>
				<li><b>**희</b>fghij***</li>
				<li><b>**희</b>fghij***</li>
			</ul>
		</template>
	</ModalLayout>
</template>