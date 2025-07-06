<script setup lang="ts">
	import { ref } from 'vue';
	import { gsap } from 'gsap';
	import { useCategoryStore } from '@/store/category';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const { categoryItems } = useCategoryStore();

	/** mm_gnb-cate-item > nav */
	const $cateBox = ref<HTMLElement>();
	/** 선택된 카테고리 코드 */
	const _selectedCategoryCode = ref<string>();
	/** 1뎁스 카테고리 너비 기본값 */
	const _depth1CategoryWidthDefault = 181;
	const _depth1CategoryWidth = ref(_depth1CategoryWidthDefault);

	const categoryMouseEnter = (__e: MouseEvent) => {

		if (_depth1CategoryWidth.value < _depth1CategoryWidthDefault) _depth1CategoryWidth.value = _depth1CategoryWidthDefault;

		if ($cateBox.value != null) {
			const $cateItems = __e.target as HTMLElement;

			// mm_gnb...depth div 기본 너비 149 (아무것도 없는 경우 대비!)
			const _defaultWidth = _depth1CategoryWidth.value + ($cateItems.children[1] as HTMLElement)?.offsetWidth || 149;
			gsap.to($cateBox.value, { width: _defaultWidth, duration: 0.4, ease: 'sine.inOut', overwrite: true });

			const $cateList = $cateBox.value.querySelector('ul');

			if ($cateList) {
				const _cateLimit = $cateItems?.offsetHeight || 0;
				const _cateMoveHeight = $cateBox.value.offsetHeight - $cateList?.offsetHeight;

				if (_cateMoveHeight > 0) return;

				let _ratioY = (__e.clientY - $cateBox.value.getBoundingClientRect().top - _cateLimit) / ($cateBox.value.offsetHeight - _cateLimit * 2);
				_ratioY = Math.max(0, Math.min(_ratioY, 1));
				gsap.to($cateList, { 'margin-top': _cateMoveHeight * _ratioY, duration: 0.4, ease: 'quad.out' });
			}
		}

	};

	const categoryMouseLeave = () => {

		if ($cateBox.value != null) {
			gsap.to($cateBox.value, { width: _depth1CategoryWidth.value, duration: 0.2, delay: 0.1, ease: 'sine.inOut', overwrite: true });
			_selectedCategoryCode.value = '';
		}

	};

	const handleMouseOver = (__e: MouseEvent, __depth1CategoryCode: string) => {

		_selectedCategoryCode.value = __depth1CategoryCode;
		_depth1CategoryWidth.value = (__e.target as HTMLElement)?.offsetWidth;

	};

	const handleMouseLeave = () => {

		if (_categoryOn.value) {
			setTimeout(() => {
				_categoryOn.value = !_categoryOn.value;
			}, 300);
		}

	};
	/** GNB 카테고리 */
	const _categoryOn = ref(false);
</script>

<template>
	<div class="mm_gnb">
		<div class="mm_inner">
			<!-- 카테고리메뉴 -->
			<!--
					(D) .btn_catemenu 버튼 클릭 시 '접어놓기' 타이틀이 추가되고, 부모인 .mm_gnb-cate에게 'S=switch-on' 클래스가 추가됩니다.
					.mm_gnb...depth 안 section 태그(2depth 기준) 하단에 wbr태그를 넣어줍니다.
					-->
			<div
				class="mm_gnb-cate"
				:class="{ 'S=switch-on': _categoryOn }"
				@mouseleave="handleMouseLeave()"
			>
				<button
					type="button"
					class="btn_catemenu"
					data-switch="{ '_defaultTitle': '펼쳐보기', '_title': '접어놓기', '_isParent': true, '_isParentUpdate': true, '_isReturnParams': false, 'onChange': 'mm.observer.dispatch', 'onChangeParams': ['CATE_MENU_SWITCH'] }"
					title="펼쳐보기"
					@click="_categoryOn = !_categoryOn"
				>
					<i class="ico_menu"></i><b class="mm_ir-blind">카테고리 메뉴</b>
				</button>
				<div class="mm_gnb-cate-item">
					<nav ref="$cateBox">
						<ul>
							<li
								v-for="category in categoryItems"
								:key="category.code"
								@mouseenter="categoryMouseEnter($event)"
								@mouseleave="categoryMouseLeave()"
							>
								<router-link
									v-if="category.code != null"
									:class="{ 'S=catemenu-on' : _selectedCategoryCode === category.code }"
									:to="{ name: 'Category', params: { id: category.code } }"
									@mouseover="handleMouseOver($event, category.code)"
								>
									<LazyloadMUI
										class="mm_bg-cover image_category"
										:_src="category.image_url"
									></LazyloadMUI><b>{{ category.name }}</b>
								</router-link>
								<div class="mm_gnb...depth">
									<div class="mm_scroller">
										<h3>
											<b>{{ category.name }}</b>
											<router-link
												class="mm_btn T=2xs T=square T=line T=light btn_all"
												:to="{ name: 'Category', params: { id: category.code } }"
											>
												<b>전체보기</b><i class="ico_link T=xs"></i>
											</router-link>
										</h3>
										<template
											v-for="categoryDepth2 in category.children"
											:key="categoryDepth2"
										>
											<section>
												<h4>
													<router-link :to="{ name: 'Category', params: { id: category.code } }">
														<b>{{ categoryDepth2.name }}</b>
													</router-link>
												</h4>
												<ul>
													<li
														v-for="categoryDepth3 in categoryDepth2.children"
														:key="categoryDepth3.code"
													>
														<router-link :to="{ name: 'Category', params: { id: category.code } }">
															<b>{{ categoryDepth3.name }}</b>
														</router-link>
													</li>
												</ul>
											</section>
											<wbr>
										</template>
									</div>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<!-- 메뉴 -->
			<nav class="mm_gnb-menu">
				<div class="mm_gnb-inner">
					<!-- (D) 현재페이지의 a 요소에 "S=on" 클래스와 "선택됨" 타이틀을 추가합니다. -->
					<ul class="mm_flex">
						<!-- (D) 텍스트 볼드 스타일이 필요한 메뉴는 a태그 안에 strong태그로 감싸줍니다. -->
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Main' }"
								:title="$route.name === 'Main'? '선택됨': ''"
								:to="{ name: 'Main' }"
							>
								<strong>홈</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Best' }"
								:title="$route.name === 'Best'? '선택됨': ''"
								:to="{ name: 'Best' }"
							>
								<strong>베스트</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Brandmap' }"
								:title="$route.name === 'Brandmap'? '선택됨': ''"
								:to="{ name: 'Brandmap' }"
							>
								<strong>브랜드맵</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Promotion' }"
								:title="$route.name === 'Promotion'? '선택됨': ''"
								:to="{ name: 'Promotion', params: { id: '123'} }"
							>
								<strong>기획전</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Event' }"
								:title="$route.name === 'Event'? '선택됨': ''"
								:to="{ name: 'Event' }"
							>
								<strong>이벤트</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'RankingMain' }"
								:title="$route.name === 'RankingMain'? '선택됨': ''"
								:to="{ name: 'RankingMain' }"
							>
								<strong>랭킹</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Showcase' }"
								:title="$route.name === 'Showcase'? '선택됨': ''"
								:to="{ name: 'Showcase' }"
							>
								<strong>쇼케이스(매거진)</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Raffle' }"
								:title="$route.name === 'Raffle'? '선택됨': ''"
								:to="{ name: 'Raffle' }"
							>
								<strong>래플</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Coop' }"
								:title="$route.name === 'Coop'? '선택됨': ''"
								:to="{ name: 'Coop' }"
							>
								<strong>공동구매</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Codyshot' }"
								:title="$route.name === 'Codyshot'? '선택됨': ''"
								:to="{ name: 'Codyshot' }"
							>
								<strong>코디샷</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Category' && $route.params.id === '123' }"
								:title="$route.name === 'Category'? '선택됨': ''"
								:to="{ name: 'Category', params: { id: '001000000'} }"
							>
								<strong>카테고리1</strong>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=on' : $route.name === 'Category' && $route.params.id === '125' }"
								:title="$route.name === 'Category'? '선택됨': ''"
								:to="{ name: 'Category', params: { id: '002000000'} }"
							>
								<strong>카테고리2</strong>
							</router-link>
						</li>
					</ul>
				</div>
			</nav>

			<!-- 사이드메뉴 -->
			<div class="mm_gnb-side">
				<ul class="mm_flex">
					<li><a href="#"><strong>추가메뉴1</strong></a></li>
					<li><a href="#"><strong>추가메뉴2</strong></a></li>
				</ul>
			</div>
		</div>
	</div>
</template>