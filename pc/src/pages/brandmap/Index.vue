<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import None from '@/components/None.vue';

	const brandCategoriesAPI = ref<BrandCategoriesAPI>();
	const listAPI = ref<BrandListAPI>();

	// api
	Api.getAll([
		{ key: `ALL_DISPLAY_BRANDS`, ref: listAPI },
		{ key: `BRAND_CATEGORIES`, ref: brandCategoriesAPI },
	]);

	const koBrandInitials = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', '123'];
	const enBrandInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '123'];

	const route = useRoute();
	const _selsectedCategory = ref(0);
	const selectedBrandInitials = computed(() => route.query.initial);
</script>

<template>
	<div class="mm_inner">
		<h3 class="mm_title">
			<b>브랜드맵</b>
		</h3>

		<!-- 브랜드 카테고리 -->
		<div class="m_brand-category">
			<!-- (D) 선택된 탭메뉴에 'T=category-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul>
				<li>
					<button
						type="button"
						:class="{ 'T=category-on': _selsectedCategory === 0 }"
						:title="_selsectedCategory === 0 ? '선택됨' : ''"
						@click="_selsectedCategory = 0"
					>
						<b>ALL</b>
					</button>
				</li>
				<li
					v-for="brandCategory in brandCategoriesAPI?.brand_categories"
					:key="brandCategory.id"
				>
					<button
						type="button"
						:class="{ 'T=category-on': _selsectedCategory === brandCategory.id }"
						:title="_selsectedCategory === brandCategory.id ? '선택됨' : ''"
						@click="_selsectedCategory = brandCategory.id"
					>
						<b>{{ brandCategory.name }}</b>
					</button>
				</li>
			</ul>
		</div>

		<!-- 브랜드 검색 -->
		<div class="m_brand-find">
			<!-- (D) 선택된 초성에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<!-- ㄱㄴㄷ -->
			<ul class="m_brand-find-sort T=sort-kr">
				<li>
					<router-link
						:class="{ 'S=sort-on': selectedBrandInitials === 'ㄱㄴㄷ' }"
						:to="{ query: { initial: 'ㄱㄴㄷ' }}"
						:title="selectedBrandInitials === 'ㄱㄴㄷ' ? '선택됨' : ''"
						replace
					>
						<b>ㄱㄴㄷ</b>
					</router-link>
				</li>
				<li
					v-for="koInitials in koBrandInitials"
					:key="koInitials"
					router
				>
					<router-link
						:class="{ 'S=sort-on': koInitials === selectedBrandInitials }"
						:to="{ query: { initial: koInitials } }"
						:title="koInitials === selectedBrandInitials ? '선택됨' : ''"
						replace
					>
						<b>{{ koInitials }}</b>
					</router-link>
				</li>
			</ul>

			<!-- (D) 선택된 초성에 'S=sort-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<!-- ABC -->
			<ul class="m_brand-find-sort">
				<li>
					<router-link
						:class="{ 'S=sort-on': selectedBrandInitials === 'ABC' }"
						:to="{ query: { initial: 'ABC' } }"
						:title="selectedBrandInitials === 'ABC' ? '선택됨' : ''"
					>
						<b>ABC</b>
					</router-link>
				</li>
				<li
					v-for="enInitials in enBrandInitials"
					:key="enInitials"
				>
					<router-link
						:class="{ 'S=sort-on': enInitials === selectedBrandInitials }"
						:to="{ query: { initial: enInitials } }"
						:title="enInitials === selectedBrandInitials ? '선택됨' : ''"
					>
						<b>{{ enInitials }}</b>
					</router-link>
				</li>
			</ul>

			<!-- 검색어 -->
			<div class="m_brand-find-search">
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
						<span class="text_placeholder">검색어를 입력하세요</span>
					</label>
				</div>
				<button
					type="button"
					class="btn_search"
				>
					<i class="ico_search T=sm"></i><b class="mm_ir-blind">검색하기</b>
				</button>
			</div>
		</div>

		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			검색 결과가 없습니다
		</None>

		<template v-if="$route.query.type === 'skeleton'">
			<!-- 브랜드리스트 -->
			<div class="m_brand-list T=skeleton">
				<h5 class="text_title">
					<b>ㄱ</b>
				</h5>
				<ul>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
				</ul>
			</div>
			<div class="m_brand-list T=skeleton">
				<h5 class="text_title">
					<b>ㄴ</b>
				</h5>
				<ul>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
					<li><p></p></li>
				</ul>
			</div>
			<div class="m_brand-list T=skeleton">
				<!-- (D) 영문 초성 타이틀에는 'T=title-en' 클래스를 추가합니다. -->
				<h5 class="text_title T=title-en">
					<b>A</b>
				</h5>
				<ul>
					<li><p></p></li>
					<li><p></p></li>
				</ul>
			</div>
		</template>

		<template v-else>
			<!-- 브랜드리스트 -->
			<!-- XXX 한글/영어 첫글자 초성에 맞춰서 리스트 노출 필요 -->
			<div class="m_brand-list">
				<h5 class="text_title">
					<b>ㄱ</b>
				</h5>
				<ul>
					<li
						v-for="brand in listAPI?.brands"
						:key="brand.id"
					>
						<router-link :to="{ name:'Brandshop', params: { id: brand.id } }">
							<b>{{ brand.kor_name }}</b><small>{{ brand.eng_name }}</small>
						</router-link>
					</li>
					<!--
					<li><a href="#"><b>가먼트 릭</b><small>GARMENT LEE'C</small></a></li>
					<li><a href="#"><b>가먼트레이블</b><small>GARMENT LABEL</small></a></li>
					<li><a href="#"><b>갤럭시</b><small>Gallexy</small></a></li>
					<li><a href="#"><b>거버</b><small>Gerver</small></a></li>
					<li><a href="#"><b>갤럭시 라이프스타일</b><small>GALAXY LIFESTYLE</small></a></li>
					<li><a href="#"><b>갭</b><small>GAP</small></a></li>
					<li><a href="#"><b>갭키즈</b><small>GAP KIDS</small></a></li>
					<li><a href="#"><b>그라나이트기어</b><small>Granitegiear</small></a></li>
					<li><a href="#"><b>기비</b><small>GIBI</small></a></li>
					<li><a href="#"><b>가먼트 릭</b><small>GARMENT LEE'C</small></a></li>
					<li><a href="#"><b>가먼트레이블</b><small>GARMENT LABEL</small></a></li> -->
				</ul>
			</div>
			<!-- <div class="m_brand-list">
				<h5 class="text_title">
					<b>ㄴ</b>
				</h5>
				<ul>
					<li><a href="#"><b>나나아웃도어</b><small>NANA OUTDOOR</small></a></li>
					<li><a href="#"><b>나로</b><small>Naro</small></a></li>
					<li><a href="#"><b>나우</b><small>Now</small></a></li>
					<li><a href="#"><b>나인</b><small>NAIN</small></a></li>
					<li><a href="#"><b>내셔널지오그래픽</b><small>NationalGeographic</small></a></li>
					<li><a href="#"><b>나우</b><small>Now</small></a></li>
					<li><a href="#"><b>네파</b><small>NEPA</small></a></li>
					<li><a href="#"><b>내셔널지오그래픽</b><small>NationalGeographic</small></a></li>
					<li><a href="#"><b>나로</b><small>Naro</small></a></li>
					<li><a href="#"><b>네파</b><small>NEPA</small></a></li>
					<li><a href="#"><b>나인</b><small>NAIN</small></a></li>
				</ul>
			</div> -->
			<div class="m_brand-list">
				<!-- (D) 영문 초성 타이틀에는 'T=title-en' 클래스를 추가합니다. -->
				<h5 class="text_title T=title-en">
					<b>A</b>
				</h5>
				<ul>
					<li><a href="#"><b>AMERICAN TOURISTER</b><small>아메리칸투어리스트</small></a></li>
					<li><a href="#"><b>ANNASUI</b><small>안나수이</small></a></li>
				</ul>
			</div>
		</template>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->