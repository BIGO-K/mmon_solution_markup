<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import SnsShare from '@/components/SnsShare.vue';

	const detailAPI = ref<CodyshotDetailAPI>();

	// api
	Api.getAll([
		{ key: `CODY_SHOT_DETAIL`, ref: detailAPI },
	]);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>코디샷</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_codyshot-detail">
				<figure>
					<div class="m_codyshot-detail-banner">
						<LazyloadMUI
							class="mm_bg-cover image_banner"
							:_src="detailAPI?.cody_shot.thumbnail_url"
							:alt="detailAPI?.cody_shot.alt"
						></LazyloadMUI>
						<button
							v-for="pointer in detailAPI?.cody_shot.pointers"
							:key="pointer.order_seq"
							type="button"
							class="btn_product-pointer"
							:style="{ top: `${pointer.y}%`, left: `${pointer.x}%` }"
						>
							<b class="mm_ir-blind">{{ pointer.goods.name }}</b>
						</button>
					</div>
					<figcaption>
						<p class="text_brand">
							{{ detailAPI?.cody_shot.brand_name }}
						</p>
						<p class="text_main">
							{{ detailAPI?.cody_shot.title }}
						</p>
						<p class="text_sub">
							{{ detailAPI?.cody_shot.sub_title }}
						</p>
						<p class="text_date">
							{{ detailAPI?.cody_shot.created_at }}
						</p>
						<button
							type="button"
							class="btn_sns-share"
						>
							<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
						</button>
						<SnsShare></SnsShare>
					</figcaption>
				</figure>
				<div class="mm_product-list T=card">
					<!--
						(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
						data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
					-->
					<!-- TODO S=pointer-on 넣어주는 작업 필요함 -->
					<ul>
						<li
							v-for="item in detailAPI?.cody_shot.pointers"
							:key="item.order_seq"
							:class="{ 'S=pointer-on': true }"
						>
							<ProductItem
								:product="item.goods"
								:class="'T=pa'"
							></ProductItem>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>

<style src="./_codyshot.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	// 코디샷 포인터 클릭 이벤트
	(function () {

		var $codyshot = mm.find('.m_codyshot-detail')[0];
		var $banner = mm.find('.m_codyshot-detail-banner', $codyshot)[0];
		var $btns = mm.find('.btn_product-pointer', $banner);
		var $prodList = mm.find('.mm_product-list', $codyshot);

		mm.event.on($btns, 'click', function () {

			var $target = mm.find('li', $prodList)[mm.element.index($btns, this)];

			mm.scroll.to($target, { _margin: 100 });

		});

	})();
</script> -->