<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>간편결제 - 네이버페이</b></h1>
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
											<li><span class="text_indent">1.</span><p>네이버페이 결제선택</p></li>
											<li><span class="text_indent">2.</span><p>네이버 ID 로그인</p></li>
											<li><span class="text_indent">3.</span><p>사전 설정한 결제 비밀번호로 인증</p></li>
											<li><span class="text_indent">4.</span><p>결제 완료</p></li>
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
										<p>네이버페이는 네이버 ID로 별도 앱 설치 없이 신용카드 또는 은행 계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수 있는 간편결제 서비스입니다</p>
										<ul>
											<li><span class="text_indent">1.</span><p>네이버페이 결제선택</p></li>
											<li><span class="text_indent">2.</span><p>네이버 ID 로그인</p></li>
											<li><span class="text_indent">3.</span><p>결제카드 등록 및 본인인증</p></li>
											<li><span class="text_indent">4.</span><p>결제 비밀번호 인증</p></li>
											<li><span class="text_indent">5.</span><p>등록 및 결제 완료</p></li>
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