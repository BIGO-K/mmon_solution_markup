<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>간편결제 - 페이코</b></h1>
		</template>

		<template #content>
			<div class="m_popup-cs">
				<div class="mm_accordion">
					<ul>
						<li>
							<dl
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_accrodion-pay' }"
							>
								<dt
									class="btn_dropdown"
									tabindex="0"
									title="펼쳐보기"
								>
									<p><b>첫 결제 고객</b></p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<p>페이코는 NHN 엔터테인먼트가 만든 안전한 간편결제 서비스입니다</p>
										<ul>
											<li>
												<span class="text_indent">1.</span>
												<p>페이코 결제 선택</p>
											</li>
											<li>
												<span class="text_indent">2.</span>
												<p>본인인증(휴대폰/아이핀) 및 회원가입</p>
											</li>
											<li>
												<dl>
													<dt>
														<span class="text_indent">3.</span>
														<p>아이핀 회원가입 시 휴대폰 인증</p>
													</dt>
													<dd>
														<p>휴대폰 인증 가입 시 해당 단계 생략</p>
													</dd>
												</dl>
											</li>
											<li>
												<span class="text_indent">4.</span>
												<p>신용카드 정보 등록</p>
											</li>
											<li>
												<span class="text_indent">5.</span>
												<p>결제 비밀번호 등록</p>
											</li>
											<li>
												<span class="text_indent">6.</span>
												<p>등록 및 결제 완료</p>
											</li>
										</ul>
									</div>
								</dd>
							</dl>
						</li>
						<li>
							<dl
								class="mm_dropdown"
								data-dropdown="{ '_group': 'dev_accrodion-pay' }"
							>
								<dt
									class="btn_dropdown"
									tabindex="0"
									title="펼쳐보기"
								>
									<p><b>재 결제 고객</b></p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<p>카카오톡에 탑재되어 별도의 어플을 설치할 필요가 없습니다</p>
										<ul>
											<li>
												<span class="text_indent">1.</span>
												<p>페이코 결제선택</p>
											</li>
											<li>
												<span class="text_indent">2.</span>
												<p>로그인</p>
											</li>
											<li>
												<span class="text_indent">3.</span>
												<p>할인 및 결제수단 선택</p>
											</li>
											<li>
												<span class="text_indent">4.</span>
												<p>결제 비밀번호 등록ㄹ</p>
											</li>
											<li>
												<span class="text_indent">5.</span>
												<p>결제 완료</p>
											</li>
										</ul>
									</div>
								</dd>
							</dl>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>