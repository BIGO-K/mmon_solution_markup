<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>간편결제 - 카카오페이</b></h1>
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
									<p><b>모바일</b></p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<ul>
											<li>
												<dl>
													<dt><span class="text_indent">1.</span><p>결제수단 선택</p></dt>
													<dd><p>주문하기 결제수단을 간편결제 > 카카오페이 선택 [결제하기] 클릭</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">2.</span><p>카카오 페이지 카드 등록 및 선택</p></dt>
													<dd><p>카드등록 및 선택 후 [결제하기] 클릭</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">3.</span><p>카카오페이 비밀번호 또는 지문인증</p></dt>
													<dd><p>카카오페이 비밀번호 또는 지문 입력</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">4.</span><p>카드 200만원 이상 결제 시 ARS 인증</p></dt>
													<dd><p>ARS 인증 요청 클릭 후 고객 인증(200만원 미만 결제 시 인증 페이지 미 노출)</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">5.</span><p>결제 인증 완료</p></dt>
													<dd><p>[확인] 버튼 클릭</p></dd>
												</dl>
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
									<p><b>PC</b></p><i class="ico_dropdown"></i>
								</dt>
								<dd class="mm_dropdown-item">
									<div class="mm_dropdown-item-inner">
										<p>카카오톡에 탑재되어 별도의 어플을 설치할 필요가 없습니다</p>
										<ul>
											<li>
												<dl>
													<dt><span class="text_indent">1.</span><p>결제수단 선택</p></dt>
													<dd><p>주문하기 결제수단을 간편결제 > 카카오페이 선택</p></dd>
													<dd><p>[결제하기] 클릭</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">2.</span><p>휴대폰 번호/생년월일을 입력</p></dt>
													<dd><p>휴대폰 번호/생년월일 입력 후 [결제 요청] 클릭</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">3.</span><p>카톡 메시지 확인</p></dt>
													<dd><p>[결제하기] 클릭하면 카카오 페이로 이동</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">4.</span><p>카카오페이 카드 등록 및 선택</p></dt>
													<dd><p>카드 등록 및 선택 후 [결제하기] 클릭</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">5.</span><p>카카오페이 비밀번호 또는 지문인증</p></dt>
													<dd><p>카카오페이 비밀번호 또는 지문 입력</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">6.</span><p>카드 200만원 이상 결제 시 ARS 인증</p></dt>
													<dd><p>ARS 인증 요청 클릭 후 고객 인증(200만원 미만 결제 시 인증 페이지 미 노출)</p></dd>
												</dl>
											</li>
											<li>
												<dl>
													<dt><span class="text_indent">7.</span><p>결제 인증 완료</p></dt>
													<dd><p>[확인] 버튼 클릭</p></dd>
												</dl>
											</li>
											<li><span class="text_indent">8.</span><p>결제 완료</p></li>
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