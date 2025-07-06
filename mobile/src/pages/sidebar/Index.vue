<script setup lang="ts">
	import { useRoute } from 'vue-router';
	import { onMounted, onUnmounted, ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Content from '@/components/layout/Index.vue';
	import Header from '@/components/header/Header.vue';
	import SidebarCategory from './components/SidebarCategory.vue';

	const memberInfoAPI = ref<MemberInfoAPI>();

	Api.get<MemberInfoAPI>(`AUTH_REFRESH_TOKEN`, memberInfoAPI);

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});

	const _isLogin = true;
</script>

<template>
	<!-- 화면 -->
	<div
		class="mm_view"
		:class="layouts"
	>
		<Header>
			<template #title>
				<h1>
					<template v-if="_isLogin">
						<LazyloadMUI
							class="mm_bg-contain image_grade"
							:_src="memberInfoAPI?.user.grade.image_url"
							:alt="memberInfoAPI?.user.grade.name"
						></LazyloadMUI>
						<b><strong>{{ memberInfoAPI?.user.grade.name }}</strong>{{ memberInfoAPI?.user.name }}님, 환영합니다</b>
						<b><strong>FAMILY</strong>홍길동님, 환영합니다</b>
					</template>
					<a
						v-else
						href="_popup_login.html"
					>
						<b>로그인이 필요합니다<i class="ico_link"></i></b>
					</a>
				</h1>
			</template>

			<template #extend>
				<!-- 사이드바 퀵메뉴 -->
				<ul class="mm_flex T=auto m_sidebar-menu">
					<li><a href="myMain_level1.html"><i class="ico_mypage"></i><b>마이페이지</b></a></li>
					<li><a href="myOrder.html"><i class="ico_ship"></i><b>배송조회</b></a></li>
					<li><a href="myLikeProd.html"><i class="ico_like"></i><b>찜상품</b></a></li>
				</ul>
			</template>
		</Header>

		<content>
			<!-- 사이드바 탭 -->
			<div class="mm_full">
				<div
					class="mm_tab m_sidebar-tab"
					data-tab="{ ' onChange': 'sidebarTabChange' }"
				>
					<!-- 탭메뉴 -->
					<div class="mm_tab_menu T=full">
						<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
						<ul class="mm_flex T=equal">
							<li>
								<a
									class="btn_tab S=tab-on"
									href="#"
									title="선택됨"
								>
									<b>아이템</b>
								</a>
							</li>
							<li>
								<a
									class="btn_tab"
									href="#"
								>
									<b>브랜드</b>
								</a>
							</li>
						</ul>
					</div>

					<!-- 아이템 -->
					<div class="mm_tab-item S=tab-on">
						<div class="mm_scroller">
							<SidebarCategory></SidebarCategory>
						</div>
					</div>

					<!-- 브랜드 검색 -->
					<div class="mm_tab-item">
						<div class="mm_scroller">
							<div class="m_sidebar-brand">
								<!-- 브랜드 검색 -->
								<div class="m_sidebar-brand-find T=find-category">
									<div class="m...find-inner">
										<!-- 검색어 -->
										<div class="mm_inner">
											<div class="mm_form-text">
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
													<span class="text_placeholder">브랜드를 검색하세요</span>
												</label>
											</div>
										</div>

										<!-- 브랜드 분류 -->
										<div class="m...find-category">
											<div class="mm_scroller T=x">
												<!-- (D) 선택된 탭메뉴에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
												<ul>
													<li>
														<button
															type="button"
															class="S=category-on"
															title="선택됨"
														>
															<b>ALL</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>LIFE</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>FASHION</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>BEAUTY</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>SHOES</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>STUFF</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>LIFE</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>FASHION</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>BEAUTY</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>SHOES</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>STUFF</b>
														</button>
													</li>
												</ul>
											</div>
										</div>

										<!-- 초성 -->
										<div class="mm_scroller T=x">
											<!-- 정렬 -->
											<ul class="m...find-rank">
												<!-- (D) 선택된 카테고리에 'S=sort-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
												<li>
													<button
														type="button"
														class="S=sort-on"
														title="선택됨"
													>
														<b>전체</b>
													</button>
												</li>
											</ul>

											<!-- 초성 정렬 -->
											<div class="m...find-sort">
												<!--
													(D) 기본으로 노출되는 정렬리스트는 'ㄱㄴㄷ'리스트입니다
														리스트 내에 '.btn_sort'버튼을 클릭하면 부모인 '.m...find-sort'에 'S=sort-switch' 클래스가 추가되고,
														현재 화면에 노출중인 초성 리스트는 숨김처리, 숨김처리 되어있던 초성 리스트가 화면에 노출됩니다.
												-->
												<!-- ㄱㄴㄷ -->
												<div class="m...find-sort-menu">
													<!-- (D) 선택된 초성에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
													<ul>
														<li>
															<button
																type="button"
																class="btn_sort"
																data-switch="{ '_classOn': 'S=sort-switch', '_isParent': true, '_parentSelector': '.m\\.\\.\\.find-sort' }"
															>
																<i class="ico_switch"></i><b>ABC</b>
															</button>
														</li>
														<li>
															<a
																class="S=sort-on"
																href="#"
																title="선택됨"
															>
																<b>ㄱ</b>
															</a>
														</li>
														<li><a href="#"><b>ㄴ</b></a></li>
														<li><a href="#"><b>ㄷ</b></a></li>
														<li><a href="#"><b>ㄹ</b></a></li>
														<li><a href="#"><b>ㅁ</b></a></li>
														<li><a href="#"><b>ㅂ</b></a></li>
														<li><a href="#"><b>ㅅ</b></a></li>
														<li><a href="#"><b>ㅇ</b></a></li>
														<li><a href="#"><b>ㅈ</b></a></li>
														<li><a href="#"><b>ㅊ</b></a></li>
														<li><a href="#"><b>ㅋ</b></a></li>
														<li><a href="#"><b>ㅌ</b></a></li>
														<li><a href="#"><b>ㅍ</b></a></li>
														<li><a href="#"><b>ㅎ</b></a></li>
														<li><a href="#"><b>123</b></a></li>
													</ul>
												</div>

												<!-- ABC -->
												<div class="m...find-sort-menu">
													<ul>
														<li>
															<button
																type="button"
																class="btn_sort"
																data-switch="{ '_classOn': 'S=sort-switch', '_isParent': true, '_parentSelector': '.m\\.\\.\\.find-sort', 'desyncer': 'm...find-sort-menu' }"
															>
																<i class="ico_switch"></i><b>ㄱㄴㄷ</b>
															</button>
														</li>
														<li><a href="#"><b>A</b></a></li>
														<li><a href="#"><b>B</b></a></li>
														<li><a href="#"><b>C</b></a></li>
														<li><a href="#"><b>D</b></a></li>
														<li><a href="#"><b>E</b></a></li>
														<li><a href="#"><b>F</b></a></li>
														<li><a href="#"><b>G</b></a></li>
														<li><a href="#"><b>H</b></a></li>
														<li><a href="#"><b>I</b></a></li>
														<li><a href="#"><b>J</b></a></li>
														<li><a href="#"><b>K</b></a></li>
														<li><a href="#"><b>L</b></a></li>
														<li><a href="#"><b>M</b></a></li>
														<li><a href="#"><b>N</b></a></li>
														<li><a href="#"><b>O</b></a></li>
														<li><a href="#"><b>P</b></a></li>
														<li><a href="#"><b>Q</b></a></li>
														<li><a href="#"><b>R</b></a></li>
														<li><a href="#"><b>S</b></a></li>
														<li><a href="#"><b>T</b></a></li>
														<li><a href="#"><b>U</b></a></li>
														<li><a href="#"><b>V</b></a></li>
														<li><a href="#"><b>W</b></a></li>
														<li><a href="#"><b>X</b></a></li>
														<li><a href="#"><b>Y</b></a></li>
														<li><a href="#"><b>Z</b></a></li>
														<li><a href="#"><b>123</b></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- 브랜드 리스트 -->
								<div class="m_sidebar-brand-list">
									<ul>
										<li><a href="brandShop.html"><b>기비</b><small>GIBI</small></a></li>
										<li><a href="brandShop.html"><b>가먼트 릭</b><small>GARMENT LEE'C</small></a></li>
										<li><a href="brandShop.html"><b>가먼트레이블</b><small>GARMENT LABEL</small></a></li>
										<li><a href="brandShop.html"><b>갤럭시</b><small>Gallexy</small></a></li>
										<li><a href="brandShop.html"><b>거버</b><small>Gerver</small></a></li>
										<li><a href="brandShop.html"><b>갤럭시 라이프스타일</b><small>GALAXY LIFESTYLE</small></a></li>
										<li><a href="brandShop.html"><b>갭</b><small>GAP</small></a></li>
										<li><a href="brandShop.html"><b>갭키즈</b><small>GAP KIDS</small></a></li>
										<li><a href="brandShop.html"><b>그라나이트기어</b><small>Granitegiear</small></a></li>
										<li><a href="brandShop.html"><b>내셔널지오그래픽내셔널지오그래픽내셔널지오그래픽내셔널지오그래픽내셔널지오그래픽내셔널지오그래픽</b><small>NationalGeographicNationalGeographicNationalGeographicNationalGeographicNationalGeographic</small></a></li>
										<li><a href="brandShop.html"><b>나나아웃도어</b><small>NANA OUTDOOR</small></a></li>
										<li><a href="brandShop.html"><b>나로</b><small>Naro</small></a></li>
										<li><a href="brandShop.html"><b>나우</b><small>Now</small></a></li>
										<li><a href="brandShop.html"><b>나인</b><small>NAIN</small></a></li>
										<li><a href="brandShop.html"><b>내셔널지오그래픽</b><small>NationalGeographic</small></a></li>
										<li><a href="brandShop.html"><b>나우</b><small>Now</small></a></li>
										<li><a href="brandShop.html"><b>네파</b><small>NEPA</small></a></li>
										<li><a href="brandShop.html"><b>AMERICAN TOURISTER</b><small>아메리칸투어리스트</small></a></li>
										<li><a href="brandShop.html"><b>ANNASUI</b><small>안나수이</small></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</content>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
// 카테고리 선택시 화면 앵커
	function categoryAnchor(__is) {

		var $this = this;

		if (!__is) {
			mm.dropdown.close(mm.find('.mm_dropdown.S=on', $this));

			return;
		}

		var _classBefore = 'S=before';
		var data = mm.data.get($this, 'data-dropdown');
		var $groups = mm.find(mm.string.template('[data-dropdown*="${GROUP}"]', { GROUP: data._group }));
		var $toggleEl = mm.find(mm.selector(_classBefore, '.'))[0];
		var $header = mm.find('.mm_header')[0];
		var _marginTop = 0;

		if ($toggleEl) {
			if (mm.element.index($groups, $toggleEl) < mm.element.index($groups, $this)) _marginTop = mm.find('.mm_dropdown-item', $toggleEl)[0].offsetHeight;
			$toggleEl.classList.remove(_classBefore);
		}

		$this.classList.add(_classBefore);
		mm.scroll.to($this, { scroller: mm.scroll.find('.m_sidebar-category', true), _margin: _marginTop + $header.offsetHeight + mm.element.offset($header).top + 13 });

	}

	// 3depth 카테고리 오픈시 2depth 카테고리 목록 높이값 변경
	function categoryHeight(__is) {

		if (!__is) return;

		var $parentEl = this.closest('.mm_dropdown-item');
		if ($parentEl.style.height !== 'auto') $parentEl.style.height = 'auto';

	}

	function sidebarTabChange() {

		document.documentElement.classList.remove('S=hide');// 메인 헤더 숨김 해제

	}
</script> -->