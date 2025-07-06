<script setup lang="ts">
	// import '../../public/js/app_header-typeA.js'
	import { ref } from 'vue';
	import { gsap } from 'gsap';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Gnb from '@/components/HeaderGnb.vue';
	import None from '@/components/None.vue';

	const recentViewProductAPI = ref<RecentViewProductAPI>();
	const hotSearchAPI = ref<HotSearchAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_RECENT_VIEW_GOODS`, ref: recentViewProductAPI },
		{ key: `SEARCH_ENGINE_HOT_SEARCHES`, ref: hotSearchAPI },
	]);

	/** 인기검색어 div.mm_header-popula */
	const $interest = ref<HTMLElement>();
	const hotSearchInterval = ref();
	const hotKeywordPlayIndex = ref(0);
	const _hotSearchOn = ref(false);

	/**
	 * 헤더 인기검색어 자동 롤링
	 * // XXX 인기검색어 자동 롤링 동작 수정 필요
	 */
	const hotKeywordCloseAndSetMotions = () => {

		clearInterval(hotSearchInterval.value);

		const $interestItems = $interest.value?.querySelectorAll('ol > li');

		if ($interestItems === undefined) return;

		if (hotSearchInterval.value != undefined && !_hotSearchOn.value) {
			gsap.killTweensOf($interestItems);
			clearInterval(hotSearchInterval.value);

			$interestItems.forEach(item => {
				item.setAttribute('style', '');
			});

			hotKeywordPlayIndex.value = 0;
		}

		_hotSearchOn.value = false;

		hotSearchInterval.value = setInterval(function() {

			if (!$interestItems[hotKeywordPlayIndex.value]) return;
			if (_hotSearchOn.value) return;

			gsap.fromTo($interestItems[hotKeywordPlayIndex.value], { y: '0%' }, { y: '-100%', duration: 0.3, ease: 'sine.inOut' });
			hotKeywordPlayIndex.value = hotKeywordPlayIndex.value === $interestItems.length - 1 ? 0 : hotKeywordPlayIndex.value + 1;
			gsap.fromTo($interestItems[hotKeywordPlayIndex.value], { y: '100%' }, { y: '0', duration: 0.3, ease: 'sine.inOut' });

		}, 2000);

	};

	const hotKeywordOpenAndKillMotions = () => {

		const $interestItems = $interest.value?.querySelectorAll('ol > li');
		if ($interestItems === undefined || hotSearchInterval.value === undefined) return;

		_hotSearchOn.value = true;

		gsap.killTweensOf($interestItems);
		clearInterval(hotSearchInterval.value);

		$interestItems.forEach(item => {
			item.setAttribute('style', '');
		});

	};

	/** 로그인 여부 */
	const _isLogin = ref(true);
	/** 최근 본 상품 */
	const _quickRecentOn = ref(false);

	const _quickRecentMouseleave = () => {

		setTimeout(() => {

			if (_quickRecentOn.value) _quickRecentOn.value = !_quickRecentOn.value;

		}, 400);

	};
</script>

<template>
	<!-- 헤더 -->
	<!-- (D) 텍스트 흰색을 선택한다면 mm_header에 T=text-white 클래스를 추가합니다. -->
	<div class="mm_header T=ha">
		<!-- 현재 헤더 본문 -->
		<div class="mm_inner">
			<h1>
				<router-link :to="{ name: 'Main'}">
					<b class="mm_ir-blind">M.Mon solution Basic</b>
				</router-link>
			</h1>

			<!-- 헤더 검색 -->
			<div class="mm_header-search">
				<!-- 검색영역 -->
				<div class="mm_header-search-form">
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
							<span class="mm_ir-blind text_placeholder">검색어를 입력하세요</span>
							<span class="text_keyword">[엠몬스타 단독] 23FW SHOES COLLECTION</span>
						</label>
					</div>
					<button
						type="button"
						class="btn_search"
					>
						<i class="ico_search"></i><b class="mm_ir-blind">검색하기</b>
					</button>
				</div>

				<!-- 최근검색어 -->
				<div class="mm_header-search-keyword">
					<h5><b>최근 검색어</b></h5>
					<ul>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>원피스</b><b class="text_date">09.09</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>코스토니 플리스</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>스몰 로고 풀기모 맨투맨</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>부클 돔햇</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>더 오리지널 릴렉스 체어</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>원피스</b><b class="text_date">09.09</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>코스토니 플리스</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>스몰 로고 풀기모 맨투맨</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>부클 돔햇</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
						<li>
							<a href="#"><i class="ico_search T=sm"></i><b>원피스</b><b class="text_date">09.07</b></a>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_delete"></i><b class="mm_ir-blind">삭제</b>
							</button>
						</li>
					</ul>

					<!-- (D) 최근 검색어가 없을 경우 아래 내역 없음 문구를 노출합니 다. -->
					<!-- <p class="mm_text-none"><i class="ico_text-none"></i>최근 검색내역이 없습니다</p> -->

					<div class="mm_header...keyword-foot">
						<button
							type="button"
							class="btn_remove-all"
						>
							<b>최근 검색어 전체삭제</b><i class="ico_delete"></i>
						</button>
						<button
							type="button"
							class="btn_close"
						>
							<b>닫기</b><i class="ico_close"></i>
						</button>
					</div>
				</div>

				<!-- 추천 검색어 -->
				<div class="mm_header-search-auto">
					<ul>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>여성패션</b><i class="ico_depth"></i><b>원피스</b><i class="ico_depth"></i><b>롱 <strong class="mm_text-variable">원피스</strong></b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>여성패션</b><i class="ico_depth"></i><b>원피스</b><i class="ico_depth"></i><b>쉬폰 <strong class="mm_text-variable">원피스</strong></b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>여성패션</b><i class="ico_depth"></i><b>원피스</b><i class="ico_depth"></i><b>기본/정장 <strong class="mm_text-variable">원피스</strong></b>
							</a>
						</li>
					</ul>
					<ul>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>니트 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>쉬폰 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>레니본 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>리스트 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>에고이스트 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>로엠 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>반에이크 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>시슬리 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>트위드 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
						<li>
							<a
								href="#"
								data-href="{ '_type': 'link' }"
							>
								<b>르샵 <strong class="mm_text-variable">원</strong>피스</b>
							</a>
						</li>
					</ul>

					<!-- (D) 일치하는 검색어가 없을 경우 아래 내역 없음 문구를 노출합니다. -->
					<!-- <p class="mm_text-none"><i class="ico_text-none"></i>일치하는 검색어가 없습니다</p> -->
				</div>
			</div>

			<!-- 인기 검색어 -->
			<div
				ref="$interest"
				class="mm_header-interest"
				:class="{ 'S=switch-on': _hotSearchOn }"
			>
				<div
					class="mm_header-interest-inner"
					@mouseleave="() => {
						if (_hotSearchOn) hotKeywordCloseAndSetMotions();
					}"
				>
					<h4><b>인기검색어</b></h4>
					<ol>
						<li
							v-for="interestKeyword in hotSearchAPI?.hot_search_words"
							:key="interestKeyword.keyword"
						>
							<router-link :to="{ name: 'SearchResult', query: { keyword: interestKeyword.keyword } }">
								<b>{{ interestKeyword.keyword }}</b>
								<i
									v-if="interestKeyword.change_type === 'N'"
									class="ico_rank-new"
									title="신규"
								></i>
								<i
									v-else-if="interestKeyword.change_type === 'S'"
									class="ico_rank-unchanged"
									title="변동없음"
								></i>
								<i
									v-else-if="interestKeyword.change_type === 'U'"
									class="ico_rank-up"
									title="상승"
								></i>
								<i
									v-else-if="interestKeyword.change_type === 'D'"
									class="ico_rank-down"
									title="하락"
								></i>
								<b
									v-if="interestKeyword.change_type === 'U' || interestKeyword.change_type === 'D'"
									class="text_rank"
								>
									{{ interestKeyword.change_rank }}
								</b>
							</router-link>
						</li>
					</ol>
					<p class="text_date">
						{{ hotSearchAPI?.indexed_at }} 기준
					</p>
					<button
						type="button"
						class="btn_more"
						data-switch="{ '_isParent': true, '_parentSelector': '.mm_header-interest', 'onChange': 'searchinterestChange' }"
						title="인기검색어 더보기"
						@click="() => {
							_hotSearchOn = !_hotSearchOn;
							hotKeywordOpenAndKillMotions();
						}"
					>
						<i class="ico_dropdown"></i>
					</button>
					<button
						type="button"
						class="btn_close"
						data-switch="{ '_isParent': true, '_parentSelector': '.mm_header-interest', 'onChange': 'searchinterestChange' }"
						@click.prevent="() => {
							_hotSearchOn = !_hotSearchOn
							hotKeywordCloseAndSetMotions();
						}"
					>
						<i class="ico_close"></i><b class="mm_ir-blind">인기검색어 접기</b>
					</button>
				</div>
			</div>

			<!-- 헤더 바로가기 -->
			<div class="mm_header-quick">
				<ul>
					<li v-if="!_isLogin">
						<router-link :to="{ name: 'Login' }">
							<i class="ico_login"></i><b>로그인</b>
						</router-link>
					</li>
					<li v-else>
						<a
							href="#"
							@click.prevent="() => {
								_isLogin = !_isLogin;

								$router.replace({
									name: 'Main',
								});
							}"
						>
							<i class="ico_logout"></i><b>로그아웃</b>
						</a>
					</li>
					<li v-if="!_isLogin">
						<router-link :to="{ name: 'Join' }">
							<i class="ico_join"></i><b>회원가입</b>
						</router-link>
					</li>
					<li>
						<router-link
							:to="{ name: 'MyMain' }"
							@click.prevent="() => {
								if (!_isLogin) {
									$router.push({
										name: 'Login',
									});
								}
							}"
						>
							<i class="ico_mypage"></i><b>마이페이지</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'Cart' }">
							<i class="ico_cart"></i><b>장바구니</b><strong class="text_count">2</strong>
						</router-link>
					</li>
					<li>
						<div
							class="mm_header-quick-recent"
							:class="{ 'S=switch-on': _quickRecentOn }"
						>
							<button
								type="button"
								class="btn_recent"
								data-switch="{ '_defaultTitle': '펼쳐보기', '_title': '접어놓기', '_isParent': true, '_isParentUpdate': true, '_isReturnParams': false, 'onChange': 'mm.observer.dispatch', 'onChangeParams': ['RECENT_SWITCH'] }"
								title="펼쳐보기"
								@click="_quickRecentOn = !_quickRecentOn"
							>
								<!-- (D) 이미지가 없으면 :_src 값을 '' 빈 값으로 설정해주세요 -->
								<LazyloadMUI
									class="mm_bg-cover image_recent"
									:_src="recentViewProductAPI?.recent_view_goods[0].thumbnail_url ?? ``"
									:_is-error-image="false"
								></LazyloadMUI><b>최근 본 상품</b>
							</button>
							<div
								class="mm_header...recent-list"
								@mouseleave="_quickRecentMouseleave()"
							>
								<ul
									v-if="recentViewProductAPI?.recent_view_goods != null && recentViewProductAPI?.recent_view_goods.length > 0"
									class="mm_scroller"
								>
									<li
										v-for="item in recentViewProductAPI?.recent_view_goods"
										:key="item.id"
										class="mm_product-item T=single T=sm"
									>
										<router-link :to="{ name: 'ProductDetail', params: { id: item.id } }">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="item.thumbnail_url"
													></LazyloadMUI>
												</div>
												<p
													v-if="item.is_soldout"
													class="text_soldout"
												>
													SOLD OUT
												</p>
												<figcaption>
													<p class="text_brand">
														{{ item.brand_name }}
													</p>
													<p class="text_product">
														{{ item.name }}
													</p>
													<p class="text_price">
														<strong>{{ item.base_discounted_price }}</strong>
													</p>
												</figcaption>
											</figure>
										</router-link>
									</li>
								</ul>

								<!-- (D) 최근 본 상품이 없을경우 아래 내용없음 문구를 노출합니다. -->
								<None
									v-else
									:class="'T=sm'"
								>
									최근 본 상품이 없습니다
								</None>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<Gnb></Gnb>
	</div>
</template>

<style lang="scss">
	:root {
		--header_height_base: 167px;
		--header_height_sm: 72px;
		--color_header: #fff;// 배경 흰색 버전
		// --color_header: var(--color_main);// 배경 컬러 버전
	}
</style>
