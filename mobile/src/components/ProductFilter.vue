<script setup lang="ts">
	import { ref } from 'vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const filterOptionDelivery = ref(false);
	const filterOptionSale = ref(false);
	const filterOptionSoldout = ref(true);

	const tabMenuList = [
		{
			name: 'category',
			label: '카테고리'
		},
		{
			name: 'brand',
			label: '브랜드'
		},
		{
			name: 'price',
			label: '가격'
		},
		{
			name: 'star',
			label: '별점'
		},
		{
			name: 'color',
			label: '색상'
		},
		{
			name: 'fit',
			label: 'FIT'
		},
		{
			name: 'shoes',
			label: '슈즈'
		},
	];

	const selectTabMenu = ref('category');
</script>

<template>
	<LayoutPopup>
		<template #filter>
			<!-- 필터 -->
			<!-- (D) 투명도 0이 기본이고 S=on 클래스가 추가되면서 투명도 1이 되면서 노출됩니다 -->
			<div class="mm_filter S=on">
				<div class="mm_filter-head">
					<h2><b>필터</b></h2>
					<button
						type="button"
						class="btn_filter-close"
						@click="$router.go(-1)"
					>
						<b class="mm_ir-blind">필터 닫기</b><i class="ico_filter-close"></i>
					</button>
				</div>
				<div class="mm_filter-content">
					<div class="mm_filter-content-inner">
						<!-- 필터상단 -->
						<div class="mm_filter-unit">
							<div class="mm_scroller T=x">
								<div class="mm_btn_box">
									<div class="mm_inline">
										<!-- (D) 선택한 버튼에 'S=btn-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
										<button
											type="button"
											class="mm_btn T=sm T=line"
											:class="{ 'S=btn-on': filterOptionDelivery }"
											:title="filterOptionDelivery? '선택됨' : ''"
											@click="filterOptionDelivery = !filterOptionDelivery"
										>
											<b>무료배송</b>
										</button>
										<button
											type="button"
											class="mm_btn T=sm T=line"
											:class="{ 'S=btn-on': filterOptionSale }"
											:title="filterOptionSale? '선택됨' : ''"
											@click="filterOptionSale = !filterOptionSale"
										>
											<b>할인상품</b>
										</button>
										<button
											type="button"
											class="mm_btn T=sm T=line"
											:class="{ 'S=btn-on': filterOptionSoldout }"
											:title="filterOptionSoldout? '선택됨' : ''"
											@click="filterOptionSoldout = !filterOptionSoldout"
										>
											<b>품절제외</b>
										</button>
									</div>
								</div>
							</div>
						</div>

						<!-- 필터영역 -->
						<div class="mm_filter-tab">
							<div
								class="mm_tab"
								data-tab
							>
								<!-- 탭메뉴 -->
								<!-- TODO 각 페이지에서 사용하는 필터에 맞게 구성 필요함 -->
								<div class="mm_tab_menu">
									<div class="mm_scroller">
										<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
										<ul>
											<li
												v-for="tab in tabMenuList"
												:key="tab.name"
											>
												<button
													type="button"
													class="btn_tab"
													:class="{ 'S=tab-on': selectTabMenu === tab.name }"
													:title="selectTabMenu === tab.name? '선택됨' : ''"
													@click="selectTabMenu = tab.name"
												>
													<b>{{ tab.label }}</b>
												</button>
											</li>
										</ul>
									</div>
								</div>

								<!-- 카테고리 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'category' }"
								>
									<div class="mm_scroller">
										<div class="mm_filter-tab-category">
											<div class="mm_accordion">
												<!--
												(D) 전체체크를 위해서 각 카테고리 영역에 맞게 체크박스의 '_group' 명을 맞춰줍니다.
													체크박스 옵션에 '_group' 명이 두개 들어가는 경우엔 1depth '_group' 명을 먼저 작성하시고, 2depth '_group' 명은 그 다음에 작성해주세요.
											-->
												<ul>
													<li>
														<dl
															class="mm_dropdown"
															data-dropdown="{ '_group': 'dev_accordion-category', '_time': 'auto', 'onChange': 'categoryAnchor' }"
														>
															<dt
																class="btn_dropdown"
																tabindex="0"
																title="펼쳐보기"
															>
																<p>일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
																<b class="text_count"><span data-check="{ '_group': 'dev_check-women' }">0</span>개</b>
																<i class="ico_dropdown"></i>
															</dt>
															<dd class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<!-- 카테고리 2depth -->
																	<div class="mm_filter...sub">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-women' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-women' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가방</span>
																							<small>5,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-women', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>티셔츠</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-women dev_check-women01' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">트렌치 코트</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">미니 가디건</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">루즈핏 가디건</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">집업/후드가디건</span>
																													<small>11,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">울/캐시미어 자켓</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">더블코트</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">바람막이 점퍼</span>
																													<small>12,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-women', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>아우터</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-women dev_check-women02' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-women dev_check-women02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																		</ul>
																	</div>
																<!--// 카테고리 2depth -->
																</div>
															</dd>
														</dl>
													</li>
													<li>
														<dl
															class="mm_dropdown"
															data-dropdown="{ '_group': 'dev_accordion-category', '_time': 'auto', 'onChange': 'categoryAnchor' }"
														>
															<dt
																class="btn_dropdown"
																tabindex="0"
																title="펼쳐보기"
															>
																<p>남성</p>
																<b class="text_count"><span data-check="{ '_group': 'dev_check-men' }">0</span>개</b>
																<i class="ico_dropdown"></i>
															</dt>
															<dd class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<!-- 카테고리 2depth -->
																	<div class="mm_filter...sub">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-men' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">가방</span>
																							<small>5,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-men', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>티셔츠</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men01' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">트렌치 코트</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">미니 가디건</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">루즈핏 가디건</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">집업/후드가디건</span>
																													<small>11,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">울/캐시미어 자켓</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">더블코트</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">바람막이 점퍼</span>
																													<small>12,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-men', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>아우터</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men02' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-men', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>모자</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-men dev_check-men03' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">트렌치 코트</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">미니 가디건</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">루즈핏 가디건</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">집업/후드가디건</span>
																													<small>11,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">울/캐시미어 자켓</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">더블코트</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-men dev_check-men03' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">바람막이 점퍼</span>
																													<small>12,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-men' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">팬츠</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																<!--// 카테고리 2depth -->
																</div>
															</dd>
														</dl>
													</li>
													<li>
														<dl
															class="mm_dropdown"
															data-dropdown="{ '_group': 'dev_accordion-category', '_time': 'auto', 'onChange': 'categoryAnchor' }"
														>
															<dt
																class="btn_dropdown"
																tabindex="0"
																title="펼쳐보기"
															>
																<p>화장품</p>
																<b class="text_count"><span data-check="{ '_group': 'dev_check-accessories' }">0</span>개</b>
																<i class="ico_dropdown"></i>
															</dt>
															<dd class="mm_dropdown-item">
																<div class="mm_dropdown-item-inner">
																	<!-- 카테고리 2depth -->
																	<div class="mm_filter...sub">
																		<label class="mm_form-check">
																			<input
																				type="checkbox"
																				data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories' }"
																			>
																			<b class="mm_inline">
																				<b class="mm_flex">
																					<span class="text_label">전체</span>
																					<small>115,884</small>
																				</b>
																			</b>
																		</label>
																		<ul>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">선크림</span>
																							<small>5,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-accessories', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>기초</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories dev_check-accessories01' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">트렌치 코트</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">미니 가디건</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">루즈핏 가디건</span>
																													<small>800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">집업/후드가디건</span>
																													<small>11,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">울/캐시미어 자켓</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">더블코트</span>
																													<small>20</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories01' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">바람막이 점퍼</span>
																													<small>12,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<dl
																					class="mm_dropdown"
																					data-dropdown="{ '_group': 'dev_accordion-category-accessories', '_time': 'auto', 'onChange': 'categoryHeight' }"
																				>
																					<dt
																						class="btn_dropdown"
																						tabindex="0"
																						title="펼쳐보기"
																					>
																						<p><b class="mm_flex"><span>에센스</span><small>115,884</small></b></p>
																						<i class="ico_dropdown"></i>
																					</dt>
																					<dd class="mm_dropdown-item">
																						<div class="mm_dropdown-item-inner">
																							<!-- 카테고리 3depth -->
																							<div class="mm_check-list">
																								<label class="mm_form-check">
																									<input
																										type="checkbox"
																										data-check="{ '_type': 'check_all', '_group': 'dev_check-accessories dev_check-accessories02' }"
																									>
																									<b class="mm_inline">
																										<b class="mm_flex">
																											<span class="text_label">전체</span>
																											<small>115,884</small>
																										</b>
																									</b>
																								</label>
																								<ul>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">가죽자켓</span>
																													<small>1,800</small>
																												</b>
																											</b>
																										</label>
																									</li>
																									<li>
																										<label class="mm_form-check">
																											<input
																												type="checkbox"
																												data-check="{ '_group': 'dev_check-accessories dev_check-accessories02' }"
																											>
																											<b class="mm_inline">
																												<b class="mm_flex">
																													<span class="text_label">캐쥬얼 점퍼</span>
																													<small>104</small>
																												</b>
																											</b>
																										</label>
																									</li>
																								</ul>
																							</div>
																						<!--// 카테고리 3depth -->
																						</div>
																					</dd>
																				</dl>
																			</li>
																			<li>
																				<label class="mm_form-check">
																					<input
																						type="checkbox"
																						data-check="{ '_group': 'dev_check-accessories' }"
																					>
																					<b class="mm_inline">
																						<b class="mm_flex">
																							<span class="text_label">색조</span>
																							<small>115,884</small>
																						</b>
																					</b>
																				</label>
																			</li>
																		</ul>
																	</div>
																<!--// 카테고리 2depth -->
																</div>
															</dd>
														</dl>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<!-- 브랜드 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'brand' }"
								>
									<div class="mm_filter-tab-brand">
										<!-- 브랜드검색 -->
										<div class="mm_filter...search">
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
													><i class="bg_text"></i>
													<span class="text_placeholder">브랜드를 검색하세요</span>
												</label>
											</div>
										</div>

										<!-- 브랜드목록 -->
										<div class="mm_filter...list">
											<!-- 검색된브랜드목록 -->
											<div class="mm_scroller T=brand-search">
												<div class="mm_check-list">
													<ul>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나나아웃도어</span>
																		<small>1,284</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나나키즈</span>
																		<small>365</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나로</span>
																		<small>104</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나이스크랍</span>
																		<small>800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나이키</span>
																		<small>11,800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나이키골프</span>
																		<small>20</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인</span>
																		<small>16</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인스텝</span>
																		<small>2,800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인식스뉴욕</span>
																		<small>20</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나즈나</span>
																		<small>2,800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">내셔널 지오그래픽</span>
																		<small>20</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">널디</span>
																		<small>365</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인</span>
																		<small>16</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인스텝</span>
																		<small>2,800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나인식스뉴욕</span>
																		<small>20</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">나즈나</span>
																		<small>2,800</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">내셔널 지오그래픽</span>
																		<small>20</small>
																	</b>
																</b>
															</label>
														</li>
														<li>
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check
																>
																<b class="mm_inline">
																	<b class="mm_flex">
																		<span class="text_label">널디</span>
																		<small>365</small>
																	</b>
																</b>
															</label>
														</li>
													</ul>
												</div>
											<!-- (D) 정렬 키워드에 속한 브랜드가 없는 경우 '.mm_text-none' 요소를 노출합니다. -->
											<!-- <p class="mm_text-none"><i class="ico_text-none"></i>브랜드가 없습니다</p> -->
											</div>

											<!-- 자음목록 -->
											<div class="mm_scroller T=brand-sort">
												<!-- (D) 현재페이지에 적용되어 있는 버튼에 'S=btn-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
												<ul>
													<li>
														<button type="button">
															<b>전체</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㄱ</b>
														</button>
													</li>
													<li>
														<button
															type="button"
															class="S=btn-on"
															title="선택됨"
														>
															<b>ㄴ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㄷ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㄹ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅁ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅂ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅅ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅇ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅈ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅊ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅋ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅌ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅍ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ㅎ</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>ABC</b>
														</button>
													</li>
													<li>
														<button type="button">
															<b>123</b>
														</button>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<!-- 가격 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'price' }"
								>
									<div class="mm_filter-tab-price">
										<div class="mm_scroller">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">~ 5만원</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">5만원 ~ 10만원</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">10만원 ~ 50만원</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">50만원 ~ 100만원</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">100만원 ~</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
											<div class="mm_form_mix-linked">
												<div class="mm_form-text">
													<button
														type="button"
														class="btn_text-clear"
													>
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input
															type="number"
															class="textfield"
															data-text
														><i class="bg_text"></i>
														<span class="text_placeholder">최저금액</span>
													</label>
												</div>
												<span class="text_tilde">~</span>
												<div class="mm_form-text">
													<button
														type="button"
														class="btn_text-clear"
													>
														<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
													</button>
													<label>
														<input
															type="number"
															class="textfield"
															data-text
														><i class="bg_text"></i>
														<span class="text_placeholder">최대금액</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- 별점 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'star' }"
								>
									<div class="mm_filter-tab-star">
										<div class="mm_scroller">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label"><i class="ico_star-fill"></i>5.0</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label"><i class="ico_star-fill"></i>4.0</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label"><i class="ico_star-fill"></i>3.0</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label"><i class="ico_star-fill"></i>2.0</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label"><i class="ico_star-fill"></i>1.0</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<!-- 색상 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'color' }"
								>
									<div class="mm_filter-tab-color">
										<div class="mm_scroller">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #fff;"></span></i>
																<span class="text_label">화이트</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #888;"></span></i>
																<span class="text_label">그레이</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #101010;"></span></i>
																<span class="text_label">블랙</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #d90708;"></span></i>
																<span class="text_label">레드</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #f4cf0d;"></span></i>
																<span class="text_label">옐로우</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #29326d;"></span></i>
																<span class="text_label">블루</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #d9bd8e;"></span></i>
																<span class="text_label">베이지</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #6a7334;"></span></i>
																<span class="text_label">올리브</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #3d4a36;"></span></i>
																<span class="text_label">카키</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #f0b6a0;"></span></i>
																<span class="text_label">코랄</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #c16048;"></span></i>
																<span class="text_label">브라운</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #903822;"></span></i>
																<span class="text_label">다크브라운</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<i class="ico_check-color"><span style="background-color: #471306;"></span></i>
																<span class="text_label">일이삼사오육칠팔구십</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<!-- FIT -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'fit' }"
								>
									<div class="mm_filter-tab-fit">
										<div class="mm_scroller">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">S</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">M ~ L</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">XL</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<!-- 슈즈 -->
								<div
									class="mm_tab-item"
									:class="{ 'S=tab-on': selectTabMenu === 'shoes' }"
								>
									<div class="mm_filter-tab-shoes">
										<div class="mm_scroller">
											<div class="mm_check-list">
												<ul>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">220 이하</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">225</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">230</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">235</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">240</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">245</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">250</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">255</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">260</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">265</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">270</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">275</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">280</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">285</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">290</span>
															</b>
														</label>
													</li>
													<li>
														<label class="mm_form-check">
															<input
																type="checkbox"
																data-check
															>
															<b class="mm_block">
																<span class="text_label">300 이상</span>
															</b>
														</label>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- 하단고정버튼 -->
					<div class="mm_btn_box T=fixed">
						<div class="mm_flex">
							<button
								type="button"
								class="btn_filter-reset"
							>
								<i class="ico_reload"></i><b class="mm_ir-blind">초기화</b>
							</button>
							<button
								type="button"
								@click="$router.go(-1)"
							>
								<b>적용하기</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<!-- 필터 스크립트 -->
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
	var _marginTop = 0;

	if ($toggleEl) {
		if (mm.element.index($groups, $toggleEl) < mm.element.index($groups, $this)) _marginTop = mm.find('.mm_dropdown-item', $toggleEl)[0].offsetHeight;
		$toggleEl.classList.remove(_classBefore);
	};

	$this.classList.add(_classBefore);
	mm.scroll.to($this, { scroller: mm.scroll.find('.mm_filter-tab-category', true), _margin: _marginTop });

}

// 3depth 카테고리 열릴때 2depth 카테고리 목록 높이값 변경
function categoryHeight(__is) {

	if (!__is) return;

	var $parentEl = this.closest('.mm_dropdown-item');
	if ($parentEl.style.height !== 'auto') $parentEl.style.height = 'auto';

}

mm.event.on(mm.find('.mm_filter-tab-category .mm_form-check'), 'change', function () {

	var $this = this;
	var _dataName = 'data-check';
	var _classOn = 'S=count-on';
	var _classUse = 'S=use';

	var $checkbox = mm.find(mm.selector(_dataName, '[]'), $this);
	var $categorySub = $this.closest('.mm_filter\\.\\.\\.sub');
	var $categorySubDropdown = $this.closest('.mm_dropdown');

	var datas = mm.data.get($checkbox).check;
	var _group = datas._group.split(' ');

	mm.delay.on(function () {

		var _groupLength = mm.find(mm.string.template('[${KEY}*="${GROUP}"]', { KEY: _dataName, GROUP: _group[0] }), mm.find('.mm_filter\\.\\.\\.sub li > .mm_form-check')).length;
		var checkedGroups = mm.find(mm.string.template('[${KEY}*="${GROUP}"]:checked', { KEY: _dataName, GROUP: _group[0] }));
		checkedGroups = _.reject(checkedGroups, function (__$item) { return __$item.matches('[data-check*="check_all"]') });

		var $count = mm.find(mm.string.template('[${KEY}*="${GROUP}"]', { KEY: _dataName, GROUP: _group[0]}))[0].closest('.text_count');

		if ($this === mm.find('.mm_form-check', $categorySub)[0]) {
			if (mm.find('[type="checkbox"]', $this)[0].checked) mm.class.add(mm.find('.mm_dropdown', $categorySub), _classUse);
			else mm.class.remove(mm.find('.mm_dropdown', $categorySub), _classUse);
		}
		else {
			if (mm.is.empty(mm.find('[type="checkbox"]:checked', $categorySubDropdown))) $categorySubDropdown.classList.remove(_classUse);
			else $categorySubDropdown.classList.add(_classUse);
		}

		mm.find('[data-check]', $count)[0].textContent = checkedGroups.length;
		var _isCheckAll = parseFloat(mm.find('[data-check]', $count)[0].textContent) === _groupLength;

		mm.element.style(mm.find('[data-check]', $count)[0], { 'visibility': (_isCheckAll) ? 'hidden' : '' });
		$count.innerHTML = (_isCheckAll) ? $count.innerHTML.replace('개', '전체') : $count.innerHTML.replace('전체', '개');

		if (mm.is.empty(checkedGroups)) mm.class.remove($count, _classOn);
		else mm.class.add($count, _classOn);

	}, { _time: 100 });

});
</script> -->