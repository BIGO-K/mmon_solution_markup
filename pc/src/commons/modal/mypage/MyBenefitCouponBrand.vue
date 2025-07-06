<script setup lang="ts">
	// import Pagination from '@/components/Pagination.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-my-coupon'">
		<template #header>
			<h2><b>사용 조건</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_my-table">
				<table>
					<colgroup>
						<col style="width: 244px;">
						<col>
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<b>브랜드명</b>
							</th>
							<th scope="col">
								<b>적용 제한사항</b>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p>최대 할인금액: <strong>1,000원</strong></p>
								<p>최저 금액조건: 30,000원</p>
								<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
							</td>
						</tr>
						<tr>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p>최대 할인금액: <strong>1,000원</strong></p>
								<p>최저 금액조건: 30,000원</p>
								<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
							</td>
						</tr>
						<tr>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p>최대 할인금액: <strong>1,000원</strong></p>
								<p>최저 금액조건: 30,000원</p>
								<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
							</td>
						</tr>
						<tr>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p>최대 할인금액: <strong>1,000원</strong></p>
								<p>최저 금액조건: 30,000원</p>
								<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
							</td>
						</tr>
						<tr>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p>최대 할인금액: <strong>1,000원</strong></p>
								<p>최저 금액조건: 30,000원</p>
								<p>사용가능 디바이스: PC, 모바일앱, 모바일웹</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- TODO <Pagination></Pagination> -->
		</template>
	</ModalLayout>
</template>