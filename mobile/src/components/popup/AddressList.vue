<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>배송지 관리</b></h1>
		</template>

		<template #content>
			<div class="mm_address-list">
				<a
					class="mm_btn T=primary btn_register"
					href="_popup_addressRegister.html"
				><b>신규 배송지 등록</b></a>

				<!-- 내용없음 -->
				<p class="mm_text-none">
					<i class="ico_text-none"></i>등록된 배송지가 없습니다
				</p>

				<!-- (D) 최근배송지인 'mm_address-item' 에 'S=on' 클래스를 추가합니다. -->
				<ul>
					<li>
						<a>
							<div class="mm_address-item S=on">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><b>나의자취방</b><b class="mm_tag T=gray">최근배송지</b></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616<br>부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동)'<br>302동 101호</dd>
								</dl>
							</div>
						</a>
						<button
							type="button"
							class="btn_remove"
						>
							<b>삭제</b>
						</button>
					</li>
					<li>
						<a>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><b>나의자취방</b></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616<br>서울특별시 도봉구 창2동 647-12<br>가람마을10단지동양엔파트월드메르디앙 302동 101호</dd>
								</dl>
							</div>
						</a>
						<button
							type="button"
							class="btn_remove"
						>
							<b>삭제</b>
						</button>
					</li>
					<li>
						<a>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><b>회사</b></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616<br>서울특별시 도봉구 창2동 647-12<br>가람마을10단지동양엔파트월드메르디앙 302동 101호</dd>
								</dl>
							</div>
						</a>
						<button
							type="button"
							class="btn_remove"
						>
							<b>삭제</b>
						</button>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>