<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>우편번호 찾기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-postcode">
				<!-- 우편번호 검색 -->
				<div class="m_modal-postcode-search">
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="search"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">도로명 또는 지번을 입력하세요</span>
						</label>
					</div>
					<button
						type="button"
						class="btn_search"
					>
						<i class="ico_search T=sm"></i><b class="mm_ir-blind">검색하기</b>
					</button>
				</div>

				<!-- 우편번호 검색 가이드 -->
				<div class="m_modal-postcode-guide">
					<dl>
						<dt><strong>TIP</strong>도로명, 건물명, 지번 중 선택하여 입력하세요</dt>
						<dd>도로명 + 건물번호<strong>예) 판교로 242</strong></dd>
						<dd>동/읍/면/리 + 번지<strong>예) 삼평동 624</strong></dd>
						<dd>건물명, 아파트명<strong>예) 삼성동 힐스테이트</strong></dd>
					</dl>
					<section>
						<h5 class="m_modal-postcode-title">
							<b>예) ‘삼성동 힐스테이트’ 검색결과</b>
						</h5>
						<div class="m_modal-postcode-item">
							<dl>
								<dt>도로명</dt>
								<dd>서울특별시 강남구 삼성로 115길 37-4(삼성동,힐 스테이트5차)</dd>
							</dl>
							<dl>
								<dt>지번</dt>
								<dd>서울특별시 강남구 역삼1동 737</dd>
							</dl>
							<strong class="text_postcode">06236</strong>
						</div>
					</section>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>