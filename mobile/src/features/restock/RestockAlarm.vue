<script setup lang="ts">
	import LayoutModal from '@/components/layout/LayoutModal.vue';
</script>

<template>
	<LayoutModal :class="'m_modal-restock'">
		<template #title>
			재입고 알림 신청
		</template>

		<template #content>
			<div class="m_product-option-select">
				<section
					class="mm_dropdown"
					data-dropdown="{ '_group': 'dev_accrodion-option0' }"
				>
					<h6 class="mm_strapline">
						<b>옵션1</b>
					</h6>
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
											class="btn_option"
											title="품절"
										>
											<b>네이비</b><b>(품절)</b>
										</span>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>레드</b>
										</button>
									</li>
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
											<b>화이트</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그레이</b>
										</button>
									</li>
									<li>
										<button
											type="button"
											class="btn_option"
										>
											<b>그린</b>
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
				</section>
				<section
					class="mm_dropdown"
					data-dropdown="{ '_group': 'dev_accrodion-option0' }"
				>
					<h6 class="mm_strapline">
						<b>옵션2</b>
					</h6>
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
											<b>85</b>
										</button>
									</li>
									<li>
										<span
											class="btn_option"
											title="품절"
										>
											<b>90</b><b>(품절)</b>
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
											<b>100</b><b>(1개)</b>
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
				</section>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=line T=primary"
					>
						<b>재입고 알림 신청하기</b>
					</button>
				</div>
			</div>
		</template>
	</LayoutModal>
</template>