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
	<div class="m_prodetail-tab-info">
		<!--  상품 공통배너 -->
		<div class="m_prodetail-banner">
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

					<!--  이미지 등록 방식 -->
					<i
						v-else
						class="image_banner"
					>
						<LazyloadMUI
							:_tag="'img'"
							:alt="topBanner.image_alt != null ? topBanner.image_alt : ''"
							:_src="'/public/images/dummy/prodetail_banner_1.png'"
						></LazyloadMUI>
					</i>
				</li>
			</ul>
		</div>

		<p class="text_code">
			상품번호<span>2345678</span>
		</p>

		<!--  동영상 -->
		<div
			v-if="infoAPI != null"
			class="m...info-media"
			v-html="infoAPI.video_url"
		></div>

		<!-- 상품 상세설명 및 이미지 -->
		<div class="m...info-desc">
			<!-- 상세설명 -->
			<div
				class="mm_editor"
				v-html="infoAPI?.detail_info"
			></div>
		</div>

		<!-- 일반 상품 정보 -->
		<!-- XXX 상품번호, 브랜드 데이터 연결 필요 -->
		<section class="m_prodetail-info">
			<h4 class="m_prodetail-info-title">
				<b>일반 상품 정보</b>
			</h4>
			<table>
				<colgroup>
					<col style="width: 209px;">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">
							<b>상품번호</b>
						</th>
						<td>123456</td>
					</tr>
					<tr>
						<th scope="row">
							<b>상품상태</b>
						</th>
						<td>{{ infoAPI?.use_state_label }}</td>
					</tr>
					<tr>
						<th scope="row">
							<b>브랜드</b>
						</th>
						<td>MMON</td>
					</tr>
					<tr>
						<th scope="row">
							<b>원산지</b>
						</th>
						<td>{{ infoAPI?.origin_label }}</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- 상품정보고시 -->
		<section class="m_prodetail-info">
			<h4 class="m_prodetail-info-title">
				<b>상품정보고시</b>
			</h4>
			<table>
				<colgroup>
					<col style="width: 209px;">
					<col>
				</colgroup>
				<tbody>
					<tr
						v-for="mandatory in infoAPI?.mandatory"
						:key="mandatory.title"
					>
						<th scope="row">
							<b>{{ mandatory.title }}</b>
						</th>
						<td>{{ mandatory.content }}</td>
					</tr>
				</tbody>
			</table>
		</section>

		<!-- 상품 공통배너 -->
		<div class="m_prodetail-banner">
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

					<!--  이미지 등록 방식 -->
					<i
						v-else
						class="image_banner"
					>
						<LazyloadMUI
							:_tag="'img'"
							:alt="bottomBanner.image_alt != null ? bottomBanner.image_alt : ''"
							:_src="'/public/images/dummy/prodetail_banner_1.png'"
						></LazyloadMUI>
					</i>
				</li>
			</ul>
		</div>
	</div>
</template>