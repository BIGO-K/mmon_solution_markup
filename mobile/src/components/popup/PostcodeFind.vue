<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>우편번호 검색</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-postcode">
				<div class="mm_form-text T=lg">
					<button
						type="button"
						class="btn_search"
					>
						<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
					</button>
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

				<!-- 우편번호 검색가이드 -->
				<div class="m_popup-postcode-guide">
					<dl>
						<dt><strong>TIP</strong>도로명, 건물명, 지번 중 선택하여<br>입력하세요</dt>
						<dd>도로명 + 건물번호<strong>예) 테헤란로 152</strong></dd>
						<dd>동/읍/면/리 + 번지<strong>예) 역삼동 737</strong></dd>
						<dd>건물명, 아파트명<strong>예) 삼성동 힐스테이트</strong></dd>
					</dl>
					<section>
						<h5 class="m_popup-postcode-title">
							<b>예) ‘삼성동 힐스테이트’ 검색결과</b>
						</h5>
						<div class="m_popup-postcode-item">
							<dl>
								<dt>도로명</dt>
								<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
							</dl>
							<dl>
								<dt>지번</dt>
								<dd>서울특별시 강남구 역삼1동 737</dd>
							</dl>
							<strong class="text_postcode">06236</strong>
						</div>
					</section>
				</div>

				<!-- 우편번호 검색결과 -->
				<h5 class="m_popup-postcode-title">
					<b>주소 검색결과 총 <strong>10</strong>건</b>
				</h5>

				<!-- 우편번호 검색결과 내용없음 -->
				<p class="mm_text-none">
					<i class="ico_text-none"></i>검색 결과가 없습니다
				</p>

				<div class="m_popup-postcode-list">
					<ul>
						<li>
							<a href="#">
								<div class="m_popup-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>서울특별시 강남구 역삼1동 737</dd>
									</dl>
									<strong class="text_postcode">06236</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="m_popup-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>서울특별시 강남구 역삼1동 737</dd>
									</dl>
									<strong class="text_postcode">06236</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="m_popup-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>서울특별시 강남구 삼성로 115길 37-4(삼성동, 힐스테이트5차)</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>서울특별시 강남구 삼성동 16 삼성동 힐스테이트</dd>
									</dl>
									<strong class="text_postcode">06236</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="m_popup-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>서울특별시 강남구 삼성동 16-2 삼성동힐스테이트1단지아파트</dd>
									</dl>
									<strong class="text_postcode">06236</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="m_popup-postcode-item">
									<dl>
										<dt>도로명</dt>
										<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
									</dl>
									<dl>
										<dt>지번</dt>
										<dd>서울특별시 강남구 역삼1동 737</dd>
									</dl>
									<strong class="text_postcode">06236</strong>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<!-- (D) 현재 페이지의 메뉴에 'S=page-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<div class="mm_pagination">
					<div class="mm_inline">
						<ol>
							<li>
								<a
									class="S=page-on"
									href="#"
									title="선택됨"
								>
									<b>1</b>
								</a>
							</li>
							<li><a href="#"><b>2</b></a></li>
							<li><a href="#"><b>3</b></a></li>
						</ol>
						<button
							type="button"
							class="btn_control-first"
							onclick="mm.link('')"
							disabled
						>
							<i class="ico_page-first"></i><b class="mm_ir-blind">처음</b>
						</button>
						<button
							type="button"
							class="btn_control-prev"
							onclick="mm.link('')"
							disabled
						>
							<i class="ico_page-prev"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_control-next"
							onclick="mm.link('')"
						>
							<i class="ico_page-next"></i><b class="mm_ir-blind">다음</b>
						</button>
						<button
							type="button"
							class="btn_control-last"
							onclick="mm.link('')"
						>
							<i class="ico_page-last"></i><b class="mm_ir-blind">마지막</b>
						</button>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>