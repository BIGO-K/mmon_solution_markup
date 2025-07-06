<script setup lang="ts">
	// import Pagination from '@/components/Pagination.vue';
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import Reply from '@/pages/promoDetail/components/PromoDetailReply.vue';

	const promotionAPI = ref<PromotionAPI>();
	const productAPI = ref<PromotionProductAPI>();

	// api
	Api.getAll([
		{ key: `EXH_PLANNING_DETAIL`, ref: promotionAPI },
		{ key: `EXH_PLANNING_GROUP_GOODS`, ref: productAPI },
	]);

</script>

<template>
	<h3 class="mm_title">
		<b>기획전</b>
	</h3>

	<!-- 상세 타이틀 -->
	<div class="mm_event-head">
		<div class="mm_inner">
			<h4><b>{{ promotionAPI?.planning.title }}</b></h4>
			<a
				class="btn_home"
				href="#"
				@click.prevent="$router.go(-1)"
			>
				<i class="ico_back"></i><b>이전 페이지</b>
			</a>
			<button
				type="button"
				class="btn_sns-share"
			>
				<i class="ico_share"></i><b class="mm_ir-blind">클립보드 복사하기</b>
			</button>
		</div>
	</div>

	<!-- 상세 컨텐츠-->
	<div
		v-for="content in promotionAPI?.planning.sections"
		:key="content.id"
		class="mm_event-content"
	>
		<!-- 에디터 등록 -->
		<div
			class="mm_editor"
			v-html="content.pc_html"
		>
		</div>
		<!-- <div class="section1 w1200">
			<img
				src="/public/images/dummy/event_detail_1.png"
				alt=""
			>
		</div> -->
		<!-- <style>
			.mm_editor .w1200 {max-width: 1200px;}
		</style> -->

		<!-- 상품리스트 -->
		<div class="mm_inner">
			<div class="mm_product-list">
				<div
					class="mm_slider T=list-full"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li
								v-for="item in content.goods_list"
								:key="item.id"
								class="mm_slider-item"
							>
								<ProductItem :product="item"></ProductItem>
							</li>
						</ul>
					</div>
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- 상품 그룹/기획전 댓글 -->
	<div class="mm_inner">
		<!-- 상품 그룹 앵커 -->
		<!-- (D) 기획전 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)', '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
		<div class="mm_event-anchor">
			<div class="mm_event-anchor-inner">
				<ul data-horizon>
					<li
						v-for="section in promotionAPI?.planning.groups"
						:key="section.id"
					>
						<a :href="`#event_prod_section${section.id}`"><b>{{ section.title }}</b></a>
					</li>
				</ul>
			</div>
		</div>

		<!-- 상품 그룹 목록 -->
		<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
		<section
			v-for="section in promotionAPI?.planning.groups"
			:id="`event_prod_section${section.id}`"
			:key="section.id"
			class="mm_event-list"
		>
			<!-- 이미지형 그룹명 -->
			<h5>
				<b v-if="!section.has_pc_image">{{ section.title }}</b>
				<a
					v-else
					href="#"
					target="_blank"
					title="새 창 열림"
				>
					<i>
						<LazyloadMUI
							:_tag="'img'"
							:_src="'/public/images/dummy/event_detail_title.png'"
							:alt="section.pc_alt"
						></LazyloadMUI>
					</i>
				</a>
			</h5>
			<div class="mm_product-list">
				<ul>
					<li
						v-for="item in productAPI?.planning_group_goods"
						:key="item.id"
					>
						<ProductItem :product="item"></ProductItem>
					</li>
				</ul>
			</div>
		</section>

		<Reply v-if="promotionAPI?.planning.is_use_comment"></Reply>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->