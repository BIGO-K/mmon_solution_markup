<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	var $tag = document.getElementsByClassName('.text_tag');
	var count = { _complete: 0, _working: 0, _checking: 0, _ready: 0, _remove: 0, _unused: 0 };

	// _.forEach($tag, function(__$tag) {

	// 	var $a = __$tag.closest('a');
	// 	var _class = __$tag.getAttribute('class');

	// 	if (_class.includes('complete')) {
	// 		count._complete++;
	// 		__$tag.textContent = '완료';
	// 	}
	// 	else if (_class.includes('working')) {
	// 		count._working++;
	// 		__$tag.textContent = '작업중';
	// 	}
	// 	else if (_class.includes('checking')) {
	// 		count._checking++;
	// 		__$tag.textContent = '검수중';
	// 	}
	// 	else if (_class.includes('remove')) {
	// 		count._remove++;
	// 		__$tag.textContent = '삭제';

	// 		_.forEach(mm.siblings(__$tag.parentElement), function(__$el) {

	// 			mm.element.wrap(__$el, 'del', true);

	// 		});
	// 	}
	// 	else if (_class.includes('unused')) {
	// 		count._unused++;
	// 		__$tag.textContent = '미사용';

	// 		_.forEach(mm.siblings(__$tag.parentElement), function(__$el) {

	// 			mm.element.wrap(__$el, 'del', true);

	// 		});

	// 		return;
	// 	}
	// 	else {
	// 		count._ready++;
	// 		__$tag.textContent = '미작업';

	// 		return;
	// 	}

	// 	mm.element.attribute($a, { 'href': mm.string.template('html/${LINK}', { LINK: mm.find('.text_link', $a)[0].textContent }), 'target': '_blank' });

	// });

	console.log('총 페이지 수: ' + $tag.length);
	console.log('완료: ' + count._complete);
	console.log('삭제: ' + count._remove);
	console.log('검수중: ' + count._checking);
	console.log('작업중: ' + count._working);
	console.log('미작업: ' + count._ready);

	const tabIndex = ref(0);
	const tabMenu = [
		{ name: '템플릿/에러/모달' },
		{ name: '메인/검색' },
		{ name: '로그인/회원가입' },
		{ name: '카테고리/상품상세' },
		{ name: '브랜드' },
		{ name: '장바구니/주문결제' },
		{ name: '마이페이지(회원)' },
		{ name: '마이페이지(비회원)' },
		{ name: '고객센터' },
		{ name: '약관/정책/입점문의/회사소개' },
		{ name: '이메일' },
	];

	function changeTab() {

		const _tabClass = `S=tab-on`;
		const $items = Object.values(document.querySelectorAll(`.mm_tab-item`));
		for (const [_i, $item] of $items.entries()) {
			$item.classList[(_i === tabIndex.value) ? `add` : `remove`](_tabClass);
		}

	}

	onMounted(() => {

		changeTab();

	});
</script>

<template>
	<div id="mm_view">
		<h1><b>M.Mon solution PC</b></h1>

		<!--
			인덱스
			(D) 태그 상태에 따라 text_tag에 상태 클래스를 추가하고(미작업 제외), 링크가 없는 li의 경우 .text_name을 제외한 나머지 div 요소를 삭제합니다.
		-->
		<div
			class="mm_tab"
			data-tab
		>
			<nav class="mm_tab-menu">
				<ul>
					<li
						v-for="(menu, index) in tabMenu"
						:key="index"
					>
						<a
							class="btn_tab"
							:class="{ 'S=tab-on': tabIndex === index }"
							@click.prevent="tabIndex = index; changeTab();"
						>
							{{ menu.name }}
						</a>
					</li>
				</ul>
			</nav>

			<!-- 템플릿/에러/모달 -->
			<div
				class="mm_tab-item"
			>
				<!-- 템플릿 -->
				<section>
					<h2><b>템플릿/레이아웃</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">템플릿</div>
								<div class="text_link">_template.html</div>
								<div><span class="text_tag T=working"></span></div>
								<div><p class="text_color1">작업이 진행되면서 내용이 업데이트 됩니다.</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">레이아웃</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">메인</div>
										<div class="text_link">_layoutMain.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">LNB구조</div>
										<div class="text_link">_layoutLnb.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">마이페이지, 고객센터 사용</p></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">모달</div>
										<div class="text_link">_layoutModal.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">BOM</div>
										<div class="text_link">_layoutBom.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">컨텐츠 iframe</div>
										<div class="text_link">_layoutFrame.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">외부경로 또는 내용을 iframe으로 넣을 때 사용합니다.</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">헤더</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">A타입</div>
										<div class="text_link">_header_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">B타입</div>
										<div class="text_link">_header_b.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">푸터</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">A타입</div>
										<div class="text_link">_footer_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">B타입</div>
										<div class="text_link">_footer_b.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 에러 -->
				<section>
					<h2><b>에러</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">403</div>
								<div class="text_link">error403.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">404</div>
								<div class="text_link">error404.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">500</div>
								<div class="text_link">error500.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">서비스점검</div>
								<div class="text_link">errorService.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">트래픽</div>
								<div class="text_link">errorTraffic.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">리뉴얼</div>
								<div class="text_link">errorRenewal.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">그 외</div>
								<div class="text_link">error.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">익스 접속 안내</div>
								<div class="text_link">errorIE.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>

				<!-- 모달 -->
				<section>
					<h2><b>모달</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) sns회원본인인증</div>
								<div class="text_link">_modal_certify_sns.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(상태) sns 간편로그인 가입</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 우편번호찾기</div>
								<div class="text_link">_modal_postcode.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">검색결과</div>
										<div class="text_link">_modal_postcode_result.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">_modal_postcode_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 배송지 관리</div>
								<div class="text_link">_modal_addressList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">_modal_addressList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 신규 배송지 등록</div>
								<div class="text_link">_modal_addressRegister.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 카드사별혜택</div>
								<div class="text_link">_modal_cardBenefit.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 사이즈 가이드</div>
								<div class="text_link">_modal_sizeGuide.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 찜폴더담기</div>
								<div class="text_link">_modal_likeFolder.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(BOM) 새 폴더 추가하기</div>
										<div class="text_link">_bom_newFolder.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(BOM) 찜하기 완료</div>
										<div class="text_link">_bom_addFolder.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>

			<!-- 메인/검색 -->
			<div
				class="mm_tab-item"
			>
				<!-- 메인 -->
				<section>
					<h2><b>메인</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">팝업</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">기본형</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">A타입</div>
												<div class="text_link">main_popup_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">B타입</div>
												<div class="text_link">main_popup_b.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">플로팅형</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">A타입</div>
												<div class="text_link">main_popupFloating_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 메인 타임딜</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">A타입</div>
										<div class="text_link">main_timedeal_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 타임딜</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">B타입</div>
										<div class="text_link">main_timedeal_b.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 타임딜</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">C타입</div>
										<div class="text_link">main_timedeal_c.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 타임딜</p>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">배너</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">날개배너</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">A 타입</div>
												<div class="text_link">main_banner_wing_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">탑배너</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">A 타입</div>
												<div class="text_link">main_banner_top_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color1">커튼 배너 포함</p></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</section>


				<!-- GNB 메뉴 -->
				<section>
					<h2><b>GNB 메뉴</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Best' }"
								target="_blank"
							>
								<div class="text_name">
									베스트
								</div>
								<div class="text_link">
									/best
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Promotion', params: { id: '123' } }"
								target="_blank"
							>
								<div class="text_name">
									기획전 상세
								</div>
								<div class="text_link">
									/promotion/:id(\\d+)
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 이벤트</div>
							</a>
							<ul>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'Event' }"
										target="_blank"
									>
										<div class="text_name">
											(유료) 이벤트
										</div>
										<div class="text_link">
											/event
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">
												(유료기능) 갤러리형 게시판
											</p>
										</div>
									</router-link>
									<ul>
										<li>
											<router-link
												class="mm_flex"
												:to="{ name: 'EventDetail', params: { id: '123' } }"
												target="_blank"
											>
												<div class="text_name">
													이벤트 상세
												</div>
												<div class="text_link">
													/event/:id(\\d+)
												</div>
												<div><span class="text_tag T=develop"></span></div>
												<div>
													<p class="text_color2">
														(상태) 로그인
													</p>
												</div>
											</router-link>
										</li>
									</ul>
								</li>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'Experience' }"
										target="_blank"
									>
										<div class="text_name">
											(유료) 체험단
										</div>
										<div class="text_link">
											/experience
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">
												(유료기능) 체험단 게시판
											</p>
										</div>
									</router-link>
									<ul>
										<li>
											<router-link
												class="mm_flex"
												:to="{ name: 'EventDetail', params: { id: '123' } }"
												target="_blank"
											>
												<div class="text_name">
													체험단 후기 상세
												</div>
												<div class="text_link">
													/experience/:id(\\d+)
												</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</router-link>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 체험단 후기 작성</div>
												<div class="text_link">_modal_eventExperienceRegister.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Codyshot' }"
								target="_blank"
							>
								<div class="text_name">
									(유료) 코디샷
								</div>
								<div class="text_link">
									/codyshot/:categoryId?
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p class="text_color2">
										(유료기능) 코디샷
									</p>
								</div>
							</router-link>
							<ul>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'CodyshotDetail', params: { id: '123' } }"
										target="_blank"
									>
										<div class="text_name">
											코디샷 상세
										</div>
										<div class="text_link">
											/codyshot/detail/:id(\\d+)
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color1">
												(추가 가능한 유료기능) 상품 아이콘
											</p>
										</div>
									</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Coop' }"
								target="_blank"
							>
								<div class="text_name">
									(유료) 공동구매
								</div>
								<div class="text_link">
									/coop
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p class="text_color2">
										(유료기능) 공동구매
									</p>
								</div>
							</router-link>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Raffle' }"
								target="_blank"
							>
								<div class="text_name">
									(유료) 래플
								</div>
								<div class="text_link">
									/raffle
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p>(모달) 래플 응모 동의, 래플 안내, 응모 내역 없음, 추첨중, 당첨자 보기, 래플 당첨, 래플 낙첨</p>
									<p class="text_color2">
										(상태) 래플 진행중/종료
									</p>
									<p class="text_color2">
										(유료기능) 래플
									</p>
								</div>
							</router-link>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 래플 안내</div>
										<div class="text_link">_modal_raffleGuide.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 래플 응모하기</div>
										<div class="text_link">_modal_raffleEntry.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(페이지) 상품상세(래플)에서 공통 사용</p></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 당첨자 보기</div>
										<div class="text_link">_modal_raffleWinner.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'RaffleFinList' }"
										target="_blank"
									>
										<div class="text_name">
											종료된 래플 전체보기
										</div>
										<div class="text_link">
											/raffle/end
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</router-link>
								</li>
							</ul>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Showcase' }"
								target="_blank"
							>
								<div class="text_name">
									(유료) 쇼케이스
								</div>
								<div class="text_link">
									/showcase/:categoryId?
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p class="text_color2">
										(유료기능) 웹진
									</p>
								</div>
							</router-link>
							<ul>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'ShowcaseDetail', params: { id: '123' } }"
										target="_blank"
									>
										<div class="text_name">
											(유료) 쇼케이스 상세
										</div>
										<div class="text_link">
											/showcase/detail/:id(\\d+)
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color1">
												(추가 가능한 유료기능) 상품 아이콘
											</p>
											<p class="text_color2">
												(유료기능) 웹진
											</p>
										</div>
									</router-link>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 펀딩</div>
								<div class="text_link">mainFunding.html</div>
								<div><span class="text_tag T=remove"></span></div>
								<div><p class="text_color2">(유료기능) 펀딩</p></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">mainFunding_none.html</div>
										<div><span class="text_tag T=remove"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">스켈레톤</div>
										<div class="text_link">mainFunding_skeleton.html</div>
										<div><span class="text_tag T=remove"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 랭킹</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">A타입</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">메인</div>
												<div class="text_link">mainRanking_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
											<ul>
												<li>
													<a class="mm_flex">
														<div class="text_name">내용없음</div>
														<div class="text_link">mainRanking_a_none.html</div>
														<div><span class="text_tag T=develop"></span></div>
														<div></div>
													</a>
												</li>
											</ul>
										</li>
										<li>
										</li><li>
											<a class="mm_flex">
												<div class="text_name">아이템 랭킹</div>
												<div class="text_link">rankingItem_a.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div>
													<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
													<p class="text_color2">(상태) 등락없음</p>
												</div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">브랜드 랭킹</div>
										<div class="text_link">rankingBrand_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(상태) 등락없음</p></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">View 랭킹</div>
										<div class="text_link">rankingView_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
											<p class="text_color2">(상태) 등락없음</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">찜 랭킹</div>
										<div class="text_link">rankingLike_a.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
											<p class="text_color2">(상태) 등락없음</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">ranking_a_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(상태) 아이템/브랜드/View/찜 내용없음</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">B타입</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">메인</div>
										<div class="text_link">mainRanking_b.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">mainRanking_b_none.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
								</li><li>
									<a class="mm_flex">
										<div class="text_name">아이템 랭킹</div>
										<div class="text_link">rankingItem_b.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">브랜드 랭킹</div>
								<div class="text_link">rankingBrand_b.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">View 랭킹</div>
								<div class="text_link">rankingView_b.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">찜 랭킹</div>
								<div class="text_link">rankingLike_b.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">내용없음</div>
								<div class="text_link">ranking_b_none.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(상태) 아이템/브랜드/View/찜 내용없음</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">C타입</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">메인</div>
										<div class="text_link">mainRanking_c.html</div>
										<div><span class="text_tag"></span></div>
										<div></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">mainRanking_c_none.html</div>
												<div><span class="text_tag"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
								</li><li>
									<a class="mm_flex">
										<div class="text_name">아이템 랭킹</div>
										<div class="text_link">rankingItem_c.html</div>
										<div><span class="text_tag"></span></div>
										<div>
											<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
											<p class="text_color2">(상태) 등락없음</p>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">브랜드 랭킹</div>
								<div class="text_link">rankingBrand_c.html</div>
								<div><span class="text_tag"></span></div>
								<div><p class="text_color2">(상태) 등락없음</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">View 랭킹</div>
								<div class="text_link">rankingView_c.html</div>
								<div><span class="text_tag"></span></div>
								<div>
									<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
									<p class="text_color2">(상태) 등락없음</p>
								</div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">찜 랭킹</div>
								<div class="text_link">rankingLike_c.html</div>
								<div><span class="text_tag"></span></div>
								<div>
									<p class="text_color1">(추가 가능한 유료기능) 상품 아이콘</p>
									<p class="text_color2">(상태) 등락없음</p>
								</div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">내용없음</div>
								<div class="text_link">ranking_c_none.html</div>
								<div><span class="text_tag"></span></div>
								<div><p class="text_color2">(상태) 아이템/브랜드/View/찜 내용없음</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">D타입</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">메인</div>
										<div class="text_link">mainRanking_d.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color1">상품 리스트 B타입으로 적용되어 있습니다</p></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">mainRanking_d_none.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
								</li><li>
									<a class="mm_flex">
										<div class="text_name">아이템 랭킹</div>
										<div class="text_link">rankingItem_d.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color1">상품 리스트 B타입으로 적용되어 있습니다</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">브랜드 랭킹</div>
								<div class="text_link">rankingBrand_d.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">View 랭킹</div>
								<div class="text_link">rankingView_d.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color1">상품 리스트 B타입으로 적용되어 있습니다</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">찜 랭킹</div>
								<div class="text_link">rankingLike_d.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color1">상품 리스트 B타입으로 적용되어 있습니다</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">내용없음</div>
								<div class="text_link">ranking_d_none.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(상태) 아이템/브랜드/View/찜 내용없음</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 쇼핑LIVE</div>
								<div class="text_link">mainLive.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p class="text_color2">(유료기능) 라이브커머스</p>
								</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">mainLive_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">스켈레톤</div>
										<div class="text_link">mainLive_skeleton.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 쇼핑LIVE 상세</div>
										<div class="text_link">_modal_liveDetail.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">스팟성테마관</div>
								<div class="text_link">mainSpot.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>


				<!-- 검색 -->
				<section>
					<h2><b>검색</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'SearchResult' }"
								target="_blank"
							>
								<div class="text_name">
									검색결과
								</div>
								<div class="text_link">
									/search
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 찜폴더담기</div>
							</router-link>
						</li>
					</ul>
				</section>
			</div>

			<!-- 로그인/회원가입 -->
			<div
				class="mm_tab-item"
			>
				<!-- 로그인 -->
				<section>
					<h2><b>로그인</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">로그인</div>
								<div class="text_link">login.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 비회원 주문조회</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 비회원 주문조회</div>
										<div class="text_link">_modal_orderInquiry_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 로그인_SNS 간편로그인</div>
								<div class="text_link">login_easylogin.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(유료기능) 간편로그인</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">아이디/비밀번호찾기</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">아이디찾기</div>
										<div class="text_link">findID.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">아이디찾기완료</div>
												<div class="text_link">findIDFin.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
											<ul>
												<li>
													<a class="mm_flex">
														<div class="text_name">(유료) 아이디찾기완료_SNS 간편로그인</div>
														<div class="text_link">findIDFin_easylogin.html</div>
														<div><span class="text_tag T=develop"></span></div>
														<div><p class="text_color2">(유료기능) 간편로그인</p></div>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">비밀번호찾기</div>
										<div class="text_link">findPW.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">비밀번호재설정</div>
												<div class="text_link">findPWFin.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">비밀번호 변경 권유(6개월)</div>
								<div class="text_link">PWChangeAdvice.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 휴면회원 해제안내</div>
								<div class="text_link">_modal_loginQuiescent_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(상태) 쿠폰이 없는 휴면회원</p></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 쿠폰있음</div>
										<div class="text_link">_modal_loginQuiescent.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(상태) 쿠폰이 있는 휴면회원</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">성인인증</div>
								<div class="text_link">adultCertification.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">리뉴얼 오픈</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원조회/비밀번호 변경</div>
										<div class="text_link">renewalPWChange.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 회원가입 -->
				<section>
					<h2><b>회원가입</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">회원가입(일반/SNS간편)</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">본인인증</div>
										<div class="text_link">join.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">정보입력</div>
										<div class="text_link">joinInfo.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 이용약관, 개인정보처리방침, 마케팅수신동의</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">가입완료</div>
										<div class="text_link">joinFin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 회원가입 완료 적립금</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 회원가입 완료 적립금</div>
												<div class="text_link">_modal_joinFinPoint.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 회원가입 완료 쿠폰</div>
												<div class="text_link">_modal_joinFinCoupon.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">간편로그인 가입</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">비밀번호설정</div>
										<div class="text_link">joinPW_sns.html</div>
										<div><span class="text_tag T=remove"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">추가정보입력</div>
										<div class="text_link">joinInfo_sns.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											(모달) 이용약관, 개인정보처리방침, 마케팅수신동의
											<p class="text_color2">네이버 인증, 카카오 싱크 진행 후 노출합니다</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">추가정보입력(카카오)</div>
										<div class="text_link">joinInfo_kakao.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">카카오 싱크 진행 후 노출합니다</p></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">추가정보입력(간편로그인)</div>
										<div class="text_link">joinInfo_easylogin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">중복 가입 안내</div>
										<div class="text_link">joinOverlap.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료) 중복 가입 안내_SNS 간편로그인</div>
												<div class="text_link">joinOverlap_easylogin.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 간편로그인</p></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">가입완료</div>
										<div class="text_link">joinFin_sns.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>

			<!-- 카테고리/상품상세 -->
			<div
				class="mm_tab-item"
			>
				<!-- 카테고리 -->
				<section>
					<h2><b>카테고리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">대카테고리</div>
								<div class="text_link">prodMain.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">prodMain_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">스켈레톤</div>
										<div class="text_link">prodMain_skeleton.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Category', params: { id: '' } }"
								target="_blank"
							>
								<div class="text_name">
									상품 카테고리
								</div>
								<div class="text_link">
									/category/:id
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 찜폴더담기</div>
							</router-link>
						</li>
					</ul>
				</section>

				<!-- 상품상세 -->
				<section>
					<h2><b>상품상세</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'ProductDetail', params: { id: 123 } }"
								target="_blank"
							>
								<div class="text_name">
									상품상세 - 상세정보
								</div>
								<div class="text_link">
									/product/:id
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p>(모달) sns회원본인인증, 카드사혜택, 찜폴더담기, 사이즈 가이드, PCS쿠폰, 쿠폰 다운로드, 재입고 알림 신청, 사은품 정보</p>
									<p class="text_color2">
										(상태) 회원/비회원
									</p>
								</div>
							</router-link>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">상품상세 - 리뷰</div>
										<div class="text_link">prodDetail_review.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p>(유료) 개인화 상품 리뷰, (유료) 체험단 리뷰</p>
											<p class="text_color2">(상태) 버튼형 옵션</p>
										</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 포토리뷰 이미지 전체리스트</div>
												<div class="text_link">_modal_prodReviewList.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div>(모달) 포토리뷰 상세</div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 포토리뷰 상세</div>
												<div class="text_link">_modal_prodReviewDetail.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달)(유료) 포토리뷰 상세</div>
												<div class="text_link">_modal_prodReviewDetail_personal.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 개인화 상품 리뷰</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달)(유료) 포토리뷰 상세</div>
												<div class="text_link">_modal_prodReviewDetail_experience.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 체험단 게시판</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 이미지 확대보기</div>
												<div class="text_link">_modal_prodReviewImage.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">상품상세 - qna</div>
										<div class="text_link">prodDetail_qna.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(유료) 상품상세_360도 뷰 (유료) 상품상세_사은품 - (모달)(유료) 사은품 확인</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 상품문의하기</div>
												<div class="text_link">_modal_prodInquiry.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">상품상세 - 판매자 정보</div>
										<div class="text_link">prodDetail_seller.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 쿠폰 다운로드</div>
										<div class="text_link">_modal_prodCouponDown.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) PCS쿠폰_네이버</div>
										<div class="text_link">_modal_prodPcsCoupon_naver.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) PCS쿠폰_다음</div>
										<div class="text_link">_modal_prodPcsCoupon_daum.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 상품상세_선물하기</div>
										<div class="text_link">prodDetail_present.html</div>
										<div><span class="text_tag"></span></div>
										<div>
											<p class="text_color1">선물하기 기능은 현재 기획/디자인이 없는 기능으로 추후에 작업될 예정입니다</p>
											<p class="text_color2">(유료기능) 선물하기</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 상품상세_재입고 알림</div>
										<div class="text_link">prodDetail_restock.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 재입고 알림</p></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달)(유료) 재입고 알림 신청</div>
												<div class="text_link">_modal_restockAlarm.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 재입고알림</p></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 상품상세_배송확률</div>
										<div class="text_link">prodDetail_ship.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color1">배송확률은 일반 상품 상세에만 적용됩니다.</p>
											<p class="text_color2">(유료기능) 배송확률</p>
										</div>
									</a>
								</li>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'ProductDetailRaffle', params: { id: 123 } }"
										target="_blank"
									>
										<div class="text_name">
											(유료) 래플 상품상세
										</div>
										<div class="text_link">
											/product/raffle:id(\\d+)
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">
												(유료기능) 래플
											</p>
											<p class="text_color1">
												(추가 가능한 유료기능) 360도 뷰, 사은품
											</p>
										</div>
									</router-link>
								</li>
								<li>
									<router-link
										class="mm_flex"
										:to="{ name: 'ProductDetailCoop', params: { id: 123 } }"
										target="_blank"
									>
										<div class="text_name">
											(유료) 공동구매 상품상세
										</div>
										<div class="text_link">
											/product/coop:id(\\d+)
										</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">
												(유료기능) 공동구매
											</p>
											<p class="text_color1">
												(추가 가능한 유료기능) 360도 뷰
											</p>
										</div>
									</router-link>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 펀딩 상품상세</div>
										<div class="text_link">prodDetail_funding.html</div>
										<div><span class="text_tag T=remove"></span></div>
										<div>
											<p class="text_color2">(유료기능) 펀딩</p>
											<p class="text_color1">(추가 가능한 유료기능) 360도 뷰, 사은품, 선물하기</p>
										</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 펀딩 참여 안내 </div>
												<div class="text_link">_modal_fundingEntry.html</div>
												<div><span class="text_tag T=remove"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>

								<!-- 타임딜 -->
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 타임딜 상품상세_타임딜</div>
										<div class="text_link">prodDetail_timedeal.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 타임딜</p>
											<p class="text_color1">(추가 가능한 유료기능) 360도 뷰, 사은품, 선물하기</p>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- (pro) 판매자샵 -->
				<section>
					<h2><b>(pro) 판매자샵</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Sellershop', params: { id: 123 } }"
								target="_blank"
							>
								<div class="text_name">
									(pro) 판매자샵
								</div>
								<div class="text_link">
									/seller/:id
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 찜폴더담기</div>
							</router-link>
						</li>
					</ul>
				</section>
			</div>

			<!-- 브랜드 -->
			<div
				class="mm_tab-item"
			>
				<section>
					<h2><b>브랜드</b></h2>
					<ul>
						<!-- 브랜드샵 -->
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Brandshop', params: { id: 123 } }"
								target="_blank"
							>
								<div class="text_name">
									브랜드샵
								</div>
								<div class="text_link">
									/brand/:id(\\d+)
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(유료) 브랜드샵_쇼케이스 배너 - 웹진, 상품 아이콘 - 상품 아이콘, 재입고 예정 아이콘 - 재입고 알림, 개인화 추천 기능 - 개인화 추천 기능, 사이즈필터 - 사이즈 필터(FIT, 슈즈)<br>(모달) 찜폴더담기</div>
							</router-link>
						</li>

						<!-- 브랜드맵 -->
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Brandmap' }"
								target="_blank"
							>
								<div class="text_name">
									브랜드맵
								</div>
								<div class="text_link">
									/brand/map
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
						</li>
					</ul>
				</section>
			</div>

			<!-- 장바구니/주문결제 -->
			<div
				class="mm_tab-item"
			>
				<!-- 장바구니 -->
				<section>
					<h2><b>장바구니</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">장바구니</div>
								<div class="text_link">cart.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(레이어) 옵션/수량 변경</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">cart_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 주문결제 -->
				<section>
					<h2><b>주문결제</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문결제</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원</div>
										<div class="text_link">order.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 쿠폰적용, 배송지 관리, 카드사 혜택, 개인통관고유부호 수집 및 제공</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 쿠폰적용</div>
												<div class="text_link">_modal_orderCoupon.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">비회원</div>
										<div class="text_link">order_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문결제_간편결제</div>
										<div class="text_link">order_easypay.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 간편결제 SET</p></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문결제_자체페이</div>
										<div class="text_link">order_pay.html</div>
										<div><span class="text_tag T=checking"></span></div>
										<div><p class="text_color2">(유료기능) 자체페이(카드, 계좌)</p></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 휴대폰 인증</div>
												<div class="text_link">_modal_payPWCertify_pay.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 자체페이(카드, 계좌)</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 간편결제 비밀번호</div>
												<div class="text_link">_modal_payPWSet_pay.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 자체페이(카드, 계좌)</p></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문결제_사은품</div>
										<div class="text_link">order_gift.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 사은품</p></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 사은품 지급 대상_상품</div>
												<div class="text_link">_modal_orderGiftTarget_product.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 사은품 지급 대상_브랜드</div>
												<div class="text_link">_modal_orderGiftTarget_brand.html</div>
												<div><span class="text_tag T=remove"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) 사은품 지급 대상_카테고리</div>
												<div class="text_link">_modal_orderGiftTarget_category.html</div>
												<div><span class="text_tag T=remove"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문결제_래플</div>
										<div class="text_link">order_raffle.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 래플</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문완료</div>
								<div class="text_link">orderFin.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문완료_사은품</div>
										<div class="text_link">orderFin_gift.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 사은품</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문실패</div>
								<div class="text_link">orderFail.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>
			</div>

			<!-- 마이페이지(회원) -->
			<div
				class="mm_tab-item"
			>
				<!-- 메인 -->
				<section>
					<h2><b>메인</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">LEVEL.5</div>
								<div class="text_link">myMain_level5.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">LEVEL.4</div>
								<div class="text_link">myMain_level4.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">LEVEL.3</div>
								<div class="text_link">myMain_level3.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">LEVEL.2</div>
								<div class="text_link">myMain_level2.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">LEVEL.1</div>
								<div class="text_link">myMain_level1.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>내용없음</div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 메인</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 메인_MY사이즈</div>
										<div class="text_link">myMain_size.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 개인화 상품리뷰, 개인화 추천 기능, 사이즈 필터</p>
											<p>(모달) MY사이즈</p>
										</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료)(모달) MY사이즈</div>
												<div class="text_link">_modal_mySize.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 개인화 상품리뷰, 개인화 추천 기능, 사이즈 필터</p></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">등급혜택안내</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">등급혜택안내 - LEVEL5</div>
										<div class="text_link">myMainGrade_level5.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">등급혜택안내 - LEVEL4</div>
										<div class="text_link">myMainGrade_level4.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">등급혜택안내 - LEVEL3</div>
										<div class="text_link">myMainGrade_level3.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">등급혜택안내 - LEVEL2</div>
										<div class="text_link">myMainGrade_level2.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">등급혜택안내 - LEVEL1</div>
										<div class="text_link">myMainGrade_level1.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 주문 관리 -->
				<section>
					<h2><b>주문 관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 관리</div>
								<div class="text_link">myOrderList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 판매자문의하기, 리뷰쓰기, 구매 확정</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myOrderList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 구매 확정</div>
										<div class="text_link">_modal_myOrderConfirm.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">취소관리</div>
								<div class="text_link">myOrderCancelList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 판매자문의하기</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myOrderCancelList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">반품관리</div>
								<div class="text_link">myOrderReturnList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 판매자문의하기</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myOrderReturnList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">교환관리</div>
								<div class="text_link">myOrderExchangeList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 판매자문의하기</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myOrderExchangeList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품전환</div>
										<div class="text_link">myOrderReturnSwitch.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품전환 완료</div>
										<div class="text_link">myOrderReturnSwitchFin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 판매자 문의하기</div>
								<div class="text_link">_modal_sellerInquiry.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><span class="text_color2">(기능) 상품선택</span></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문상세내역</div>
								<div class="text_link">myOrderDetail.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 배송지 관리, 판매자문의하기, 리뷰쓰기, 영수증보기, 영수증발급_신용카드, 영수증발급_가상계좌, (BOM) 송장번호 입력</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 영수증발급_신용카드</div>
										<div class="text_link">_modal_receiptCard.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(BOM) 메일주소입력</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 영수증발급_가상계좌</div>
										<div class="text_link">_modal_receiptAccount.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(BOM) 메일주소입력</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(BOM) 메일주소입력</div>
												<div class="text_link">_bom_writeEmail.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(BOM) 송장번호 입력</div>
										<div class="text_link">_bom_invoiceNumber.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 주문상세내역_사은품</div>
										<div class="text_link">myOrderDetail_gift.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 사은품</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 부분선택</div>
								<div class="text_link">_modal_myOrderProdSelect.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(페이지) 비회원 공동사용</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문취소</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문취소</div>
										<div class="text_link">myOrderCancel.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 부분선택</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">취소완료</div>
										<div class="text_link">myOrderCancelFin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 반품</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문 반품</div>
										<div class="text_link">myOrderReturn.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 부분선택, 배송지 관리</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품신청완료</div>
										<div class="text_link">myOrderReturnFin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 교환</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문 교환</div>
										<div class="text_link">myOrderExchange.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 옵션변경, 배송지 관리</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 옵션변경</div>
												<div class="text_link">_modal_myOrderOptionChange.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(페이지) 비회원 공동사용</p></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">교환완료</div>
										<div class="text_link">myOrderExchangeFin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 혜택 관리 -->
				<section>
					<h2><b>혜택 관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">쿠폰</div>
								<div class="text_link">myBenefitCoupon.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 사용조건_모든상품, 사용조건_상품, 사용조건_브랜드</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myBenefitCoupon_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 사용조건_모든상품</div>
										<div class="text_link">_modal_myBenefitCoupon.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 사용조건_상품</div>
										<div class="text_link">_modal_myBenefitCoupon_prod.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 사용조건_브랜드</div>
										<div class="text_link">_modal_myBenefitCoupon_brand.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">적립금</div>
								<div class="text_link">myBenefitPoint.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myBenefitPoint_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- MY찜 -->
				<section>
					<h2><b>MY찜</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">찜한 아이템</div>
								<div class="text_link">myLikeProd.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 찜폴더담기, 폴더수정</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myLikeProd_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 찜폴더담기, 폴더수정</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 폴더수정</div>
										<div class="text_link">_modal_myLikeFolderModify.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><span class="text_color2">(기능) 순서변경</span></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">찜한 브랜드</div>
								<div class="text_link">myLikeBrand.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myLikeBrand_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 리뷰 관리 -->
				<section>
					<h2><b>리뷰 관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">작성 가능한 리뷰</div>
								<div class="text_link">myReview.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 리뷰작성</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myReview_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 리뷰작성</div>
										<div class="text_link">_modal_reviewRegister.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(기능) 멀티 이미지 업로드, 상품선택</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">작성한리뷰</div>
								<div class="text_link">myReviewWritten.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 리뷰수정</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myReviewWritten_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 리뷰수정</div>
										<div class="text_link">_modal_reviewModify.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(기능) 멀티 이미지 업로드</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 작성한리뷰_개인화 상품 리뷰</div>
								<div class="text_link">myReviewWritten_personal.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(유료기능) 개인화 상품 리뷰</p></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료)(모달) 리뷰작성_개인화 상품 리뷰</div>
										<div class="text_link">_modal_reviewRegister_personal.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료)(모달) 리뷰수정_개인화 상품 리뷰</div>
										<div class="text_link">_modal_reviewModify_personal.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 문의관리 -->
				<section>
					<h2><b>문의관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">1:1 문의하기</div>
								<div class="text_link">myInquiryCounsel.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">문의 관리</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">1:1문의</div>
										<div class="text_link">myInquiry.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 1:1 상품문의수정</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">myInquiry_none.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 1:1 문의수정</div>
												<div class="text_link">_modal_myInquiry.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">판매자 문의</div>
										<div class="text_link">myInquirySeller.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 상품문의 수정, 판매자문의 수정</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">myInquirySeller_none.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 상품문의 수정</div>
												<div class="text_link">_modal_prodInquiryModify.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(모달) 판매자문의 수정</div>
												<div class="text_link">_modal_sellerInquiryModify.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 배송지연신고 -->
				<section>
					<h2><b>[pro] 배송지연신고</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">[pro] 배송지연신고</div>
								<div class="text_link">myClaimShip_pro.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">[pro] 내용없음</div>
										<div class="text_link">myClaimShip_pro_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">[pro] 배송지연 처리결과</div>
								<div class="text_link">myClaimShipResult_pro.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">[pro] 내용없음</div>
										<div class="text_link">myClaimShipResult_pro_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 품절취소신고 -->
				<section>
					<h2><b>[pro] 품절취소신고</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">[pro] 품절취소 신고</div>
								<div class="text_link">myClaimSoldout_pro.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">[pro] 내용없음</div>
										<div class="text_link">myClaimSoldout_pro_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">[pro] 품절취소 처리결과</div>
								<div class="text_link">myClaimSoldoutResult_pro.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">[pro] 내용없음</div>
										<div class="text_link">myClaimSoldoutResult_pro_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 최근본쇼핑정보 -->
				<section>
					<h2><b>최근본쇼핑정보</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">최근본상품/기획전</div>
								<div class="text_link">myRecentList.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myRecentList_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 회원정보관리 -->
				<section>
					<h2><b>회원정보관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">비밀번호 재입력</div>
								<div class="text_link">myInfoPWVerify.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">SNS 비밀번호 재입력</div>
								<div class="text_link">myInfoPWVerify_sns.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) SNS 비밀번호 재입력_SNS 간편로그인</div>
										<div class="text_link">myInfoPWVerify_easylogin_sns.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(유료기능) 간편로그인</p></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">회원정보 수정</div>
								<div class="text_link">myInfoModify.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 비밀번호변경</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 비밀번호변경</div>
										<div class="text_link">_modal_myPWChange.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">회원탈퇴</div>
								<div class="text_link">myInfoWithdraw.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">환불 계좌 관리</div>
								<div class="text_link">myInfoRefund.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p>(모달) 환불계좌등록, 환불계좌변경</p></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myInfoRefund_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 환불 계좌 등록</div>
										<div class="text_link">_modal_myInfoRefundRegister.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 환불 계좌 변경</div>
										<div class="text_link">_modal_myInfoRefundModify.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(유료) 간편결제 비밀번호 재입력</div>
								<div class="text_link">myPayPWVerify.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>
									<p class="text_color2">(유료기능) 자체페이</p>
									<p>(모달) 휴대폰 인증, 간편결제 비밀번호 설정 및 수정</p>
								</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 간편결제 SNS 비밀번호 재입력</div>
										<div class="text_link">myPayPWVerify_sns.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 자체페이</p>
											<p>(모달) 휴대폰 인증, 간편결제 비밀번호 설정 및 수정</p>
										</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 간편결제 SNS 비밀번호 재입력_SNS 간편로그인</div>
										<div class="text_link">myPayPWVerify_easylogin_sns.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>
											<p class="text_color2">(유료기능) 자체페이, 간편로그인</p>
											<p>(모달) 휴대폰 인증, 간편결제 비밀번호 설정 및 수정</p>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>

				<!-- 래플 응모 내역 -->
				<section>
					<h2><b>(유료) 래플 응모 내역</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">래플 응모 내역</div>
								<div class="text_link">myRaffleEntry.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">내용없음</div>
										<div class="text_link">myRaffleEntry_none.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(모달) 당첨 결과 확인</div>
										<div class="text_link">_modal_raffleResult.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div><p class="text_color2">(상태) 래플 당첨</p></div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">내용없음</div>
												<div class="text_link">_modal_raffleResult_none.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(상태) 래플 낙첨, 추첨중, 미응모</p></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>

			<!-- 마이페이지(비회원) -->
			<div
				class="mm_tab-item"
			>
				<!-- 주문 관리 -->
				<section>
					<h2><b>주문 관리</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 관리</div>
								<div class="text_link">myOrderList_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 구매 확정</div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">취소관리</div>
								<div class="text_link">myOrderCancelList_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">반품관리</div>
								<div class="text_link">myOrderReturnList_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">교환관리</div>
								<div class="text_link">myOrderExchangeList_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품전환</div>
										<div class="text_link">myOrderReturnSwitch_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품전환 완료</div>
										<div class="text_link">myOrderReturnSwitchFin_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문상세내역</div>
								<div class="text_link">myOrderDetail_no.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div>(모달) 배송지 변경사항, 영수증발급_신용카드, 영수증발급_가상계좌</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">배송지 변경</div>
										<div class="text_link">_modal_addressChange.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문취소</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문취소</div>
										<div class="text_link">myOrderCancel_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">취소완료</div>
										<div class="text_link">myOrderCancelFin_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 반품</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문 반품</div>
										<div class="text_link">myOrderReturn_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 부분선택, 배송지 변경</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품신청완료</div>
										<div class="text_link">myOrderReturnFin_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 교환</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문 교환</div>
										<div class="text_link">myOrderExchange_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div>(모달) 옵션 변경, 배송지 변경</div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">교환완료</div>
										<div class="text_link">myOrderExchangeFin_no.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>

			<!-- 고객센터 -->
			<div
				class="mm_tab-item"
			>
				<section>
					<h2><b>고객센터</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'Cs' }"
								target="_blank"
							>
								<div class="text_name">
									메인
								</div>
								<div class="text_link">
									/cs
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">1:1 문의</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">1:1 고객상담</div>
										<div class="text_link">csInquiry.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">이용안내</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(pro) 고객보상제도</div>
										<div class="text_link">csInfoReward_pro.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문/반품 배송조회</div>
										<div class="text_link">csInfoOrder.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품/환불 안내</div>
										<div class="text_link">csInfoReturn.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원등급 및 혜택</div>
										<div class="text_link">csInfoBenefit.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">쿠폰/적립금</div>
										<div class="text_link">csInfoCoupon.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
									<ul>
										<a class="mm_flex">
											<div class="text_name">(pro) 쿠폰/적립금</div>
											<div class="text_link">csInfoCoupon_pro.html</div>
											<div><span class="text_tag T=develop"></span></div>
											<div></div>
										</a>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">(유료) 간편결제</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료) 간편결제(카카오페이)</div>
												<div class="text_link">csInfo_payKakao.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 간편결제 SET</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료) 간편결제(네이버페이)</div>
												<div class="text_link">csInfo_payNaver.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 간편결제 SET</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료) 간편결제(페이코)</div>
												<div class="text_link">csInfo_payPayco.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 간편결제 SET</p></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">(유료) 간편결제(토스페이)</div>
												<div class="text_link">csInfo_payToss.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(유료기능) 간편결제 SET</p></div>
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">공지사항</div>
								<div class="text_link">csNotice.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">상세보기</div>
										<div class="text_link">csNoticeDetail.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>

			<!-- 약관/정책/입점문의/회사소개 -->
			<div
				class="mm_tab-item"
			>
				<section>
					<h2><b>약관/정책</b></h2>
					<ul>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'PolicyService' }"
								target="_blank"
							>
								<div class="text_name">
									이용약관
								</div>
								<div class="text_link">
									/policy/service
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
						</li>
						<li>
							<router-link
								class="mm_flex"
								:to="{ name: 'PolicyPrivacy' }"
								target="_blank"
							>
								<div class="text_name">
									개인정보처리방침
								</div>
								<div class="text_link">
									/policy/privacy
								</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</router-link>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">업체리스트</div>
										<div class="text_link">_modal_companyList.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</section>
				<section>
					<h2><b>(모달) 약관/정책</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 이용약관</div>
								<div class="text_link">_modal_termUse.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(페이지) 회원가입 및 이전 약관 보기 시 노출</p></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">(모달) 개인정보처리방침</div>
								<div class="text_link">_modal_termPrivacy.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color2">(페이지) 회원가입 및 이전 약관 보기 시 노출</p></div>
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h2><b>(pro) 제휴 및 입점문의</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">(pro) 제휴 및 입점문의</div>
								<div class="text_link">partnershipInquiry_pro.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h2><b>회사소개</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">회사소개</div>
								<div class="text_link">company.html</div>
								<div><span class="text_tag"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>
			</div>

			<!-- 이메일 -->
			<div
				class="mm_tab-item"
			>
				<section>
					<h2><b>이메일 연결 팝업</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">청약철회안내</div>
								<div class="text_link">_popup_mailSubscriptionEnd.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">광고메일수신거부</div>
								<div class="text_link">_popup_mailRejection.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div><p class="text_color1">현재 광고성 메일은 없으며, 추후 추가될 수 있습니다</p></div>
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h2><b>이메일</b></h2>
					<ul>
						<li>
							<a class="mm_flex">
								<div class="text_name">주문 메일</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">가상계좌입금안내</div>
										<div class="text_link">_mail_orderAccount.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">결제 완료</div>
										<div class="text_link">_mail_orderComplete.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">배송출발</div>
										<div class="text_link">_mail_orderShip.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">주문 취소환불 완료</div>
										<div class="text_link">_mail_orderRefundComplete.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품신청</div>
										<div class="text_link">_mail_orderReturn.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">반품완료</div>
										<div class="text_link">_mail_orderReturnComplete.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">회원 메일</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원가입</div>
										<div class="text_link">_mail_memberJoin.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원탈퇴안내</div>
										<div class="text_link">_mail_memberWithdrawal.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">휴면회원전환안내</div>
										<div class="text_link">_mail_memberDormant.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">적립금소멸안내</div>
										<div class="text_link">_mail_memberPoint.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">문의답변작성안내</div>
										<div class="text_link">_mail_memberQnaAnswer.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">비밀번호찾기 인증번호발급</div>
										<div class="text_link">_mail_memberFindPassword.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">아이디찾기완료</div>
										<div class="text_link">_mail_memberFindId.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">회원등급변경 안내</div>
									</a>
									<ul>
										<li>
											<a class="mm_flex">
												<div class="text_name">회원등급변경 안내(LEVEL.5)</div>
												<div class="text_link">_mail_memberGrade_level5.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">회원등급변경 안내(LEVEL.4)</div>
												<div class="text_link">_mail_memberGrade_level4.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">회원등급변경 안내(LEVEL.3)</div>
												<div class="text_link">_mail_memberGrade_level3.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">회원등급변경 안내(LEVEL.2)</div>
												<div class="text_link">_mail_memberGrade_level2.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div></div>
											</a>
										</li>
										<li>
											<a class="mm_flex">
												<div class="text_name">회원등급변경 안내(LEVEL.1)</div>
												<div class="text_link">_mail_memberGrade_level1.html</div>
												<div><span class="text_tag T=develop"></span></div>
												<div><p class="text_color2">(상태) 쿠폰 없음</p></div>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">개인정보 이용내역 안내</div>
										<div class="text_link">_mail_privacy.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
								<li>
									<a class="mm_flex">
										<div class="text_name">마케팅 정보 수신 동의 안내</div>
										<div class="text_link">_mail_marketing.html</div>
										<div><span class="text_tag T=develop"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">자동 메일</div>
							</a>
							<ul>
								<li>
									<a class="mm_flex">
										<div class="text_name">(pro) 제휴 및 입점문의</div>
										<div class="text_link">_mail_cooperate_pro.html</div>
										<div><span class="text_tag"></span></div>
										<div></div>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="mm_flex">
								<div class="text_name">영수증</div>
								<div class="text_link">_mail_receipt.html</div>
								<div><span class="text_tag T=develop"></span></div>
								<div></div>
							</a>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	#mm_view { margin: 0 auto 100px; width: 1600px; }
	h1 { margin-bottom: 30px; padding: 25px 0; background: #00989c; color: #fff; font-size: 40px; text-align: center; }

	.mm_tab-menu { border: 0; }
	.mm_tab-menu ul:not(.mm_flex) { display: flex; height: auto; border-right: 1px solid #bcbcbc; }
	.mm_tab-menu ul:not(.mm_flex) > li { flex: auto; border: 1px solid #bcbcbc; border-right: 0; background: #fafafa; color: #bcbcbc; font-size: 14px; }
	.mm_tab-menu ul:not(.mm_flex) > li > .btn_tab { padding: 15px; width: 100%; height: auto; font-size: 14px; line-height: 1; text-align: center; }
	.mm_tab-menu ul:not(.mm_flex) > li > .btn_tab.S\=tab-on { background: #fff; color: #202020; font-weight: 700; }

	.mm_tab-item { margin-top: -1px; border: 1px solid #bcbcbc; }
	.mm_tab-item section { border-bottom: 1px solid #ddd; }
	.mm_tab-item section h2 { padding: 12px 10px; font-size: 15px; }
	.mm_tab-item section > ul > li:nth-child(even) { background: #fafafa; }
	.mm_tab-item section li { position: relative; padding-left: 30px; }
	.mm_tab-item section li > ul .mm_flex { border-top: 1px solid #f4f4f4; }
	.mm_tab-item section li ul::before { position: absolute; top: 35px; bottom: 10px; left: 48px; border-left: 1px solid #ddd; content: ''; }
	.mm_tab-item section .mm_flex { -webkit-align-items: center; align-items: center; padding: 8px 0; line-height: 18px; }
	.mm_tab-item section .mm_flex:hover { background: #dfdfdf; }
	.mm_tab-item section .mm_flex div { padding: 0 10px; font-size: 13px; text-align: center; }
	.mm_tab-item section .mm_flex div.text_name { -webkit-flex: 1; flex: 1; text-align: left; }
	.mm_tab-item section .mm_flex div.text_link { width: 350px; text-align: left; }
	.mm_tab-item section .mm_flex div:nth-child(3) { width: 100px; }
	.mm_tab-item section .mm_flex div:nth-child(4) { width: 450px; text-align: left; }
	.mm_tab-item section .mm_flex del { color: #aaa; }
	.mm_tab-item section .text_tag { display: inline-block; padding: 1px 5px; border: 1px solid #e11; border-radius: 3px; background: #fff; color: #e11; font-size: 12px; }

	.mm_tab-item section .text_tag.T\=develop,
	.mm_tab-item section .text_tag.T\=complete { border-color: #04aa37; color: #04aa37; }
	.mm_tab-item section .text_tag.T\=working { border-color: #558eda; color: #558eda; }
	.mm_tab-item section .text_tag.T\=checking { border-color: #973af3; color: #973af3; }
	.mm_tab-item section .text_tag.T\=recheck { border-color: #e83af3; color: #e83af3; }
	.mm_tab-item section .text_tag.T\=remove { border-color: #aaa; color: #aaa; }
	.mm_tab-item section .text_color1 { color: #558eda; }/* 진행중 */
	.mm_tab-item section .text_color2 { color: #973af3; }/* 개발전달 */
	.mm_tab-item section .text_color3 { color: #e11; }/* 긴급,변경사항 */
</style>
