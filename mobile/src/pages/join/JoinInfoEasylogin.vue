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
				<div class="m_popup-sign-title">
					<h3><b>회원가입 완료까지 한단계 남았어요!</b></h3>
					<b>다음부터는 카카오톡으로 빠르게 로그인할 수 있어요</b>
				</div>
				<h5 class="mm_text-label">
					<b>이름</b>
				</h5>
				<div class="mm_form-text">
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
					<b>생년월일</b><strong class="mm_text-variable">(선택)</strong>
				</h5>
				<div class="mm_form_mix-linked">
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>년</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>월</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>일</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
				</div>
				<h5 class="mm_text-label">
					<b>성별</b>
				</h5>
				<div class="mm_radio-list T=chain">
					<ul>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">여자</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">남자</span>
								</b>
							</label>
						</li>
						<li>
							<label class="mm_form-radio">
								<input
									type="radio"
									name="dev_radio-gender"
									data-radio
								>
								<b class="mm_block">
									<i class="ico_form-radio"></i>
									<span class="text_label">선택안함</span>
								</b>
							</label>
						</li>
					</ul>
				</div>
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
									>
										<b>자세히</b>
									</a>
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
									>
										<b>자세히</b>
									</a>
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
		</template>
	</LayoutPopup>
</template>