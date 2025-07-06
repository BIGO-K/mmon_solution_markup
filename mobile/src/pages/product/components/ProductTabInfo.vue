<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const infoAPI = ref<ProductDetailInfoAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_INFORMATION`, ref: infoAPI },
	]);
</script>

<template>
	<!-- 상세정보 -->
	<div class="m_prodetail-tab-info">
		<!-- 셀러 휴무일 -->
		<div
			v-if="infoAPI?.seller_holiday"
			class="m...info-seller-off"
		>
			<strong>배송 공지</strong>
			<p>{{ infoAPI.seller_holiday?.reason }}(으)로 {{ infoAPI.seller_holiday?.start_at }} ~ {{ infoAPI.seller_holiday?.end_at }} 주문한 상품은 {{ infoAPI.seller_holiday?.release_at }}부터 순차적으로 배송됩니다.</p>
		</div>

		<!-- 상품 공통배너 -->
		<div class="m...info-banner">
			<ul>
				<li
					v-for="topBanner in infoAPI?.top_banners"
					:key="topBanner.contents ?? undefined"
				>
					<!-- 에디터 등록 방식 -->
					<div
						v-if="topBanner.is_editor_use"
						class="mm_editor"
						v-html="topBanner.contents"
					></div>

					<!-- 이미지 등록 방식 -->
					<i class="image_banner">
						<LazyloadMUI
							:_tag="'img'"
							:_src="topBanner.image_url"
							:alt="topBanner.image_alt != null ? topBanner.image_alt : ''"
						></LazyloadMUI>
					</i>
				</li>
			</ul>
		</div>

		<div class="mm_inner">
			<p class="text_code">
				상품번호<span>2345678</span>
			</p>

			<!-- 동영상 -->
			<div
				v-if="infoAPI != null"
				class="m...info-media"
				v-html="infoAPI.video_url"
			></div>

			<!-- 상품 상세설명 및 이미지 -->
			<div class="m...info-desc">
				<p class="text_zoom">
					상세정보를 확대해서 볼 수 있어요
				</p>

				<!-- 상세설명 -->
				<div
					class="mm_pinchzoom"
					data-pinchzoom
				>
					<div class="mm_pinchzoom-wrapper">
						<!-- (D) 에디터로 등록 -->
						<div
							class="mm_editor"
							v-html="infoAPI?.detail_info"
						></div>
					</div>
				</div>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=line T=primary btn_more"
						data-switch="{ '_isParent': true, '_parentSelector': '.m\\.\\.\\.info-desc', '_defaultTitle': '상세정보 더보기', '_title': '상세정보 접기' }"
						title="상세정보 더보기"
					>
						<b class="mm_ir-blind">상세정보 더보기</b>
					</button>
				</div>
			</div>
		</div>

		<!-- 상품 공통배너 -->
		<div class="m...info-banner">
			<ul>
				<li
					v-for="bottomBanner in infoAPI?.bottom_banners"
					:key="bottomBanner.contents ?? undefined"
				>
					<!-- 에디터 등록 방식 -->
					<div
						v-if="bottomBanner.is_editor_use"
						class="mm_editor"
						v-html="bottomBanner.contents"
					></div>

					<!-- 이미지 등록 방식 -->
					<i
						v-else
						class="image_banner"
					>
						<LazyloadMUI
							:_tag="'img'"
							:_src="bottomBanner.image_url"
							:alt="bottomBanner.image_alt != null ? bottomBanner.image_alt : ''"
						></LazyloadMUI>
					</i>
				</li>
			</ul>
		</div>
	</div>
</template>