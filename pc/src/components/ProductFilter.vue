<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import None from '@/components/None.vue';
	import SizeFilter from '@/features/personal/components/PersonalFilter.vue';

	const productCategoryFilterAPI = ref<ProductCategoryFilterAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_CATEGORIES_FILTER`, ref: productCategoryFilterAPI },
	]);

	const brandInitials = [
		'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		'123',
		'전체',
	];
	const selectedBrandInitials = ref('전체');
	const reviewRates = [5, 4, 3, 2, 1];

	// TODO 유료기능 사용 검증 및 세팅
	const feature = {
		sizeFilter: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<!-- 필터검색 -->
	<!--
        (D) 각 필터검색 항목 선택시 "선택된 필터 목록(mm_filter-selected)"에 추가 합니다.
        가격 영역의 가격 범위값 입력시 가격 입력 후 적용하기 버튼을 눌렀을 때만 선택된 필터 목록(mm_filter-selected)에 추가합니다.

        소카테고리 선택 시 소카테고리 내 모든 항목을 선택할 경우 선택된 필터 목록(mm_filter-selected)에는 이전에 선택한 소카테고리는 모두 삭제되고
        소카테고리 전체(ex. 원피스 전체, 신발 전체, 쥬얼리 전체)만 노출합니다.
    -->
	<!-- XXX 카테고리, 가격, 혜택 필터 작업 필요 -->
	<div class="mm_filter">
		<div
			class="mm_dropdown S=on"
			data-dropdown
		>
			<button
				type="button"
				class="btn_dropdown"
				title="펼쳐보기"
			>
				<i class="ico_filter"></i><b>필터검색</b><i class="ico_dropdown T=sm"></i>
			</button>
			<div class="mm_dropdown-item">
				<div class="mm_dropdown-item-inner">
					<!-- 카테고리 -->
					<section class="mm_filter-category">
						<h5><span>카테고리</span></h5>
						<div class="mm_filter-category-main">
							<!-- 대카테고리 목록 샘플 -->
							<ul>
								<!-- (D) 선택된 btn_category에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
								<li>
									<button
										type="button"
										class="btn_category S=category-on"
										title="선택됨"
									>
										<b>여성</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>남성</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>액세서리</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>라이프</b>
									</button>
								</li>
							</ul>
						</div>
						<!-- (D) 대카테고리 선택시 중카테고리 .mm_filter-category-main 요소에 S=category-on 클래스를 추가합니다. -->
						<div class="mm_filter-category-main S=category-on">
							<!-- 중카테고리 목록 샘플 -->
							<ul>
								<!-- (D) 선택된 btn_category에 'S=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>상의</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>아우터</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category S=category-on"
										title="선택됨"
									>
										<b>원피스</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>바지</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>스커트</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>가방</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>스니커즈</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>신발</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>시계</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>모자</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>스포츠/용품</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>양말/레그웨어</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>속옷</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>쥬얼리</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>액세서리</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>양말/레그웨어</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>속옷</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>쥬얼리</b>
									</button>
								</li>
								<li>
									<button
										type="button"
										class="btn_category"
									>
										<b>액세서리</b>
									</button>
								</li>
							</ul>
						</div>
						<!-- (D) 중카테고리 선택시 .mm_filter-category-sub 요소에 S=category-on 클래스를 추가합니다. -->
						<div class="mm_filter-category-sub S=category-on">
							<div class="mm_filter-list">
								<div class="mm_scroller">
									<!-- 소카테고리 목록 샘플 -->
									<ul>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_type': 'check_all', '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0000' }"
												>
												<b class="mm_block">
													<span class="text_label">전체</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0001' }"
												>
												<b class="mm_block">
													<span class="text_label">A라인/플레어 스커트</span>
													<small>10</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0002' }"
												>
												<b class="mm_block">
													<span class="text_label">H라인 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0003' }"
												>
												<b class="mm_block">
													<span class="text_label">니트/벨벳 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0004' }"
												>
												<b class="mm_block">
													<span class="text_label">미니 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0005' }"
												>
												<b class="mm_block">
													<span class="text_label">프린트 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0006' }"
												>
												<b class="mm_block">
													<span class="text_label">레이스 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0007' }"
												>
												<b class="mm_block">
													<span class="text_label">청 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0004' }"
												>
												<b class="mm_block">
													<span class="text_label">미니 스커트</span>
													<small>1234</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0005' }"
												>
												<b class="mm_block">
													<span class="text_label">일이삼사오육칠팔구십일이삼사오육칠팔구십</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0006' }"
												>
												<b class="mm_block">
													<span class="text_label">레이스 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0007' }"
												>
												<b class="mm_block">
													<span class="text_label">청 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0004' }"
												>
												<b class="mm_block">
													<span class="text_label">미니 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0005' }"
												>
												<b class="mm_block">
													<span class="text_label">프린트 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0006' }"
												>
												<b class="mm_block">
													<span class="text_label">레이스 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check="{ '_group': 'dev_check-category' }"
													data-category="{ '_code': '08_0007' }"
												>
												<b class="mm_block">
													<span class="text_label">청 스커트</span>
													<small>123</small>
												</b>
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<!-- 브랜드 -->
					<section class="mm_filter-brand">
						<h5><b>브랜드</b></h5>
						<div class="mm_filter-brand-search">
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
									<span class="text_placeholder">브랜드를 검색하세요</span>
								</label>
								<button
									type="button"
									class="btn_search"
								>
									<i class="ico_search T=sm"></i><b class="mm_ir-blind">검색하기</b>
								</button>
							</div>
							<!--
                                (D) 페이지 로드시 정렬버튼(ㄱ, ㄴ, ㄷ...)에 T=filter-on 클래스가 있는경우 해당 키워드의 브랜드 목록이 기본값으로 노출합니다.
                                브랜드 목록 정렬버튼 (ㄱ, ㄴ, ㄷ...) 클릭시 'T=filter-on' 클래스와 '선택됨' 타이틀을 추가합니다
                            -->
							<ul>
								<li
									v-for="initial in brandInitials"
									:key="initial"
								>
									<button
										type="button"
										:class="{ 'T=filter-on' : selectedBrandInitials === initial }"
										data-filter="{ '_keyword': 'ㄱ' }"
										@click="selectedBrandInitials = initial"
									>
										<b>{{ initial }}</b>
									</button>
								</li>
							</ul>
						</div>

						<!-- 필터 브랜드 목록 -->
						<div class="mm_filter-list">
							<div class="mm_scroller">
								<!-- 브랜드 목록 -->
								<!-- (D) 브랜드 정렬 버튼 클릭에 따라 키워드 매칭되는 브랜드의 li요소에 .T=filter-on 클래스를 추가합니다. -->
								<ul v-if="productCategoryFilterAPI?.filters?.brands != null && productCategoryFilterAPI?.filters?.brands.length > 0">
									<li
										v-for="brand in productCategoryFilterAPI?.filters?.brands"
										:key="brand.id"
										class="T=filter-on"
									>
										<label
											class="mm_form-check"
											data-filter="{ '_keyword': 'S' }"
										>
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<span class="text_label">{{ brand.name }}</span>
												<small>{{ brand.goods_count }}</small>
											</b>
										</label>
									</li>
								</ul>
								<!-- (D) 정렬 키워드에 속한 브랜드가 없는 경우 아래 .mm_text-none 요소가 노출됩니다. -->
								<None
									v-else
									:class="'T=sm'"
								>
									브랜드가 없습니다
								</None>
							</div>
						</div>
					</section>

					<!-- 가격 -->
					<section>
						<h5><b>가격</b></h5>
						<div class="mm_filter-list">
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
						<div class="mm_filter-range">
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
										type="text"
										class="textfield"
										data-text
									>
									<i class="bg_text"></i>
									<span class="text_placeholder">최대금액</span>
								</label>
							</div>
							<button
								type="button"
								class="mm_btn T=square T=line T=lighter btn_price-apply"
							>
								<b>적용</b>
							</button>
						</div>
					</section>

					<!-- 별점 -->
					<section class="mm_filter-star">
						<h5><b>별점</b></h5>
						<div class="mm_filter-list">
							<ul>
								<li
									v-for="rate in reviewRates"
									:key="rate"
								>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check
										>
										<b class="mm_block">
											<i class="ico_star"></i>
											<span class="text_label">{{ `${rate}.0` }}</span>
										</b>
									</label>
								</li>
							</ul>
						</div>
					</section>

					<!-- 혜택 -->
					<section>
						<h5><b>혜택</b></h5>
						<div class="mm_filter-list">
							<ul>
								<li>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check
										>
										<b class="mm_block">
											<span class="text_label">무료배송</span>
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
											<span class="text_label">할인상품</span>
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
											<span class="text_label">품절제외</span>
										</b>
									</label>
								</li>
							</ul>
						</div>
					</section>

					<!-- 색상 -->
					<section class="mm_filter-color">
						<h5><b>색상</b></h5>
						<div class="mm_filter-list">
							<ul>
								<li
									v-for="color in productCategoryFilterAPI?.filters?.colors"
									:key="color.id"
								>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check
										>
										<b class="mm_block">
											<i
												class="ico_check-color"
												:style="`background-color: ${ color.code };`"
											></i>
											<span class="text_label">{{ color.label }}</span>
										</b>
									</label>
								</li>
							</ul>
						</div>
					</section>

					<SizeFilter v-if="feature.sizeFilter._is"></SizeFilter>

					<!-- 하단버튼 -->
					<div class="mm_btn_box">
						<button
							type="button"
							class="btn_reset"
						>
							<i class="ico_refresh"></i><b>새로고침</b>
						</button>
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>적용하기</b>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 선택된 필터 목록 -->
		<!-- XXX 선택된 필터 목록 작업 필요 -->
		<div class="mm_filter-selected">
			<ul>
				<li>
					<div class="mm_filter-selected-item">
						<p class="text_label">
							<i class="ico_star"></i><span>4점</span>
						</p>
						<button
							type="button"
							class="btn_filter-remove"
						>
							<i class="ico_filter-remove"></i><b class="mm_ir-blind">삭제</b>
						</button>
					</div>
				</li>
				<li>
					<div class="mm_filter-selected-item">
						<span class="text_label">15,000 ~ 35,000</span>
						<button
							type="button"
							class="btn_filter-remove"
						>
							<i class="ico_filter-remove"></i><b class="mm_ir-blind">삭제</b>
						</button>
					</div>
				</li>
				<li>
					<div class="mm_filter-selected-item">
						<span class="text_label">225</span>
						<button
							type="button"
							class="btn_filter-remove"
						>
							<i class="ico_filter-remove"></i><b class="mm_ir-blind">삭제</b>
						</button>
					</div>
				</li>
				<li>
					<div class="mm_filter-selected-item">
						<span class="text_label">무료배송</span>
						<button
							type="button"
							class="btn_filter-remove"
						>
							<i class="ico_filter-remove"></i><b class="mm_ir-blind">삭제</b>
						</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>