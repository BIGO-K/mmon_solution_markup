<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useLatelyStore } from '@/store/lately';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const hotSearchAPI = ref<HotSearchAPI>();
	const latelyProductAPI = ref<LatelyViewProductAPI>();
	(async () => latelyProductAPI.value = await useLatelyStore().product)();

	// api
	Api.getAll([
		{ key: `SEARCH_ENGINE_HOT_SEARCHES`, ref: hotSearchAPI },
	]);
</script>

<template>
	<LayoutPopup>
		<template #content>
			<!-- 상품 및 검색어 -->
			<div
				class="mm_carousel m_popup-search"
				data-carousel="{ '_isMoreSide': true }"
			>
				<div class="mm_carousel-inner">
					<ul class="mm_carousel-list">
						<!-- 최근 본 상품 -->
						<li class="mm_carousel-item">
							<section class="m_popup-search-list">
								<h3><b>최근 본 상품</b></h3>

								<!-- 내용없음 -->

								<p
									v-if="(latelyProductAPI?.recent_view_goods.length ?? NaN) < 1"
									class="mm_text-none"
								>
									<i class="ico_text-none"></i>최근 본 상품이 없습니다
								</p>

								<div class="mm_scroller">
									<div class="mm_product-list T=sm">
										<ul>
											<li
												v-for="item in latelyProductAPI?.recent_view_goods"
												:key="item.id"
											>
												<div class="mm_product-item">
													<router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
														<figure>
															<LazyloadMUI
																class="mm_bg-cover image_product"
																:_src="item.thumbnail_url"
															></LazyloadMUI>
															<p
																v-if="item.is_soldout"
																class="text_soldout"
															>
																품절
															</p>
															<figcaption>
																<p class="text_product">
																	{{ item.name }}
																</p>
																<p class="text_price">
																	<strong>{{ item.base_discounted_price }}</strong>
																</p>
															</figcaption>
														</figure>
													</router-link>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="m...list-foot">
									<router-link
										class="btn_more"
										:to="{ name: 'LatelyProduct' }"
									>
										<b>최근 본 상품 더보기</b><i class="ico_link"></i>
									</router-link>
								</div>
							</section>
						</li>

						<!-- 최근 검색어 -->
						<!-- TODO json 못찾음 -->
						<!-- (D) 최근 검색어 삭제 시 mm_carousel-item의 clone 요소에서도 항목을 삭제해야 합니다. -->
						<li class="mm_carousel-item">
							<section class="m_popup-search-list">
								<h3><b>최근 검색어</b></h3>

								<!-- 내용없음 -->
								<p class="mm_text-none">
									<i class="ico_text-none"></i>최근 검색내역이 없습니다
								</p>

								<div class="mm_scroller">
									<ul>
										<li>
											<a href="searchResult.html"><b>원피스</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>오버핏 후드</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>맨투맨</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>스니커즈</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>플랫슈즈</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>치마</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>슬랙스</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>율이에</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>코치</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>양말</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>원피스</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>오버핏 후드</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>맨투맨</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>스니커즈</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
										<li>
											<a href="searchResult.html"><b>플랫슈즈</b></a><button
												type="button"
												class="btn_remove"
											>
												<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
											</button>
										</li>
									</ul>
								</div>
								<div class="m...list-foot">
									<button
										type="button"
										class="btn_remove-all"
									>
										<b>최근 검색어 전체삭제</b><i class="ico_remove-trash"></i>
									</button>
								</div>
							</section>
						</li>

						<!-- 인기 검색어 -->
						<li class="mm_carousel-item">
							<section class="m_popup-search-list">
								<h3><b>인기 검색어</b></h3>
								<div class="mm_scroller">
									<ol>
										<li
											v-for="item in hotSearchAPI?.hot_search_words"
											:key="item.keyword"
										>
											<router-link :to="{ name: 'SearchResult' }">
												<b>{{ item.keyword }}</b>
												<i
													v-if="item.change_type === 'N'"
													class="ico_rank-new"
													title="신규"
												></i>
												<i
													v-else-if="item.change_type === 'S'"
													class="ico_rank-unchanged"
													title="변동없음"
												></i>
												<i
													v-else-if="item.change_type === 'U'"
													class="ico_rank-up"
													title="상승"
												></i>
												<i
													v-else-if="item.change_type === 'D'"
													class="ico_rank-down"
													title="하락"
												></i>
												<b
													v-if="item.change_type === 'U' || item.change_type === 'D'"
													class="text_rank"
												>
													{{ item.change_rank }}
												</b>
											</router-link>
										</li>
									</ol>
								</div>
								<div class="m...list-foot">
									<p>
										{{ hotSearchAPI?.indexed_at }} 기준
									</p>
								</div>
							</section>
						</li>
					</ul>
				</div>
				<div class="mm_carousel-pagination">
					<ol>
						<li>
							<button
								type="button"
								class="btn_carousel-page"
							>
								<b class="mm_ir-blind">최근 본 상품</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_carousel-page"
							>
								<b class="mm_ir-blind">최근 검색어</b>
							</button>
						</li>
						<li>
							<button
								type="button"
								class="btn_carousel-page"
							>
								<b class="mm_ir-blind">인기 검색어</b>
							</button>
						</li>
					</ol>
				</div>
			</div>

			<!-- 검색어 자동완성 -->
			<!-- TODO searchEngineAutoComplete.json 연결 및 노출 조건 설정 필요 -->
			<div class="mm_full m_popup-search-auto">
				<div class="mm_scroller">
					<ul>
						<li><a href="prodSub.html"><b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>롱<strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="prodSub.html"><b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>숏<strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="prodSub.html"><b>남성<i class="ico_depth"></i>팬츠<i class="ico_depth"></i>트레이닝<strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
					</ul>
					<ul>
						<li><a href="_popup_searchResult.html"><b>코튼 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>스트링 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>테이퍼드 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>멀티 포켓  <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>트레이닝 7부 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>하프 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>조거 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
						<li><a href="_popup_searchResult.html"><b>스트레치 <strong class="mm_text-variable">팬츠</strong></b><i class="ico_link-arrow"></i></a></li>
					</ul>
					<!-- (D) 일치하는 검색어가 없을 경우 아래 영역을 노출합니다. -->
					<!-- <ul>
						<li><p>일치하는 검색어가 없습니다<i class="ico_link-arrow"></i></p></li>
					</ul> -->
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 검색어 자동완성 노출
	(function () {

		mm.event.on('.mm_header .textfield', 'keyup change', function (__e) {

			var $auto = mm.find('.m_popup-search-auto')[0];

			if (__e.target.value) $auto.classList.add('S=auto-on');
			else $auto.classList.remove('S=auto-on');

		});

	})();
</script> -->