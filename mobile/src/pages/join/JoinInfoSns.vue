<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>추가정보 입력</b></h1>
		</template>

		<template #content>
			<div class="m_popup-join">
				<div class="mm_check_box">
					<div class="mm_check-list">
						<ul>
							<li>
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'agree_check' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">만 14세 이상 확인</span>
									</b>
								</label>
							</li>
							<li>
								<div class="mm_flex">
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'agree_check' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label">이용약관</span>
										</b>
									</label>
									<a
										class="btn_detail"
										href="#"
									><b>자세히</b></a>
								</div>
							</li>
							<li>
								<div class="mm_flex">
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'agree_check' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label">개인정보 처리방침</span>
										</b>
									</label>
									<a
										class="btn_detail"
										href="#"
									><b>자세히</b></a>
								</div>
							</li>
							<li>
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_type': 'check_all', '_group': 'agree_check agree_marketing' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">마케팅 수신 전체 동의</span>
									</b>
								</label>
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check="{ '_group': 'agree_check agree_marketing' }"
											>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label"><strong class="mm_text-variable">(선택)</strong>이메일</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check="{ '_group': 'agree_check agree_marketing' }"
											>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label"><strong class="mm_text-variable">(선택)</strong>SMS</span>
											</b>
										</label>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check="{ '_type': 'check_all', '_group': 'agree_check' }"
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">전체 동의</span>
						</b>
					</label>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>가입완료</b>
						</button>
					</div>
				</div>
			</div>
			<div class="mm_note">
				<ul>
					<li>선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.</li>
					<li>구매 정보 관련 이메일/SMS는 수신 동의 여부와 관계없이 발송됩니다.</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>