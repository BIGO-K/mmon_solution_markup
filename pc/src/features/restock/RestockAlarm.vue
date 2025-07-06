<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-restock'">
		<template #header>
			<h2><b>재입고 알림 신청</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<!-- (D) 상품 상세 셀렉트형 옵션 클래스를 사용했습니다 -->
			<div class="m_product-option-select">
				<div
					class="mm_dropdown"
					data-dropdown="{ '_group': 'dev_option-select' }"
				>
					<h6><b>옵션1</b></h6>
					<!-- (D) 옵션을 선택하면 'btn_dropdown > b' 요소의 텍스트를 "선택하세요" 에서 선택한 옵션명으로 변경합니다 -->
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>선택하세요</b><i class="ico_dropdown T=bold"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_scroller">
								<ul>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>블랙</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>아이보리</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>카키</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>화이트</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>네이비</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>블루</b>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					class="mm_dropdown"
					data-dropdown="{ '_group': 'dev_option-select' }"
				>
					<h6><b>옵션2</b></h6>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>선택하세요</b><i class="ico_dropdown T=bold"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_scroller">
								<ul>
									<li>
										<span
											class="mm_flex btn_option"
											title="품절"
										>
											<b>95</b><b>(품절)</b>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>95</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>100</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>105</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>110</b>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>재입고 알림 받기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>

<style src="./_restock.scss" lang="scss"></style>