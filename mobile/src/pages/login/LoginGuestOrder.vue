<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>비회원 주문조회</b></h1>
		</template>

		<template #content>
			<!-- 비회원 주문조회 -->
			<div class="m_popup-sign">
				<h5 class="mm_text-label">
					<b>이름</b>
				</h5>
				<div class="mm_form-text T=lg">
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
						<span class="text_placeholder">이름을 입력하세요</span>
					</label>
				</div>
				<h5 class="mm_text-label">
					<b>주문번호</b>
				</h5>
				<div class="mm_form-text T=lg">
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
						<span class="text_placeholder">주문번호를 입력하세요</span>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=lg T=primary"
						>
							<b>비회원 주문조회</b>
						</button>
					</div>
				</div>
			</div>

			<!-- 고객센터 운영시간 -->
			<div class="m_popup-sign-order">
				<div class="m...order-inner">
					<i class="ico_cs"></i>
					<p><strong>1588 - 0000</strong>월~금 10:00~17:00 (점심시간 12:00~13:30)<br> 토, 일, 공휴일 휴무</p>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>