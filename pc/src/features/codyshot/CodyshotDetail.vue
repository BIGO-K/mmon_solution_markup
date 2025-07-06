<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ProductItem from '@/components/ProductItem.vue';

	const detailAPI = ref<CodyshotDetailAPI>();

	// api
	Api.getAll([
		{ key: `CODY_SHOT_DETAIL`, ref: detailAPI },
	]);

	const selectPointerItemIndex = ref();

	function pointerItem(itemIndex: number) {

		selectPointerItemIndex.value = itemIndex;

		setTimeout(() => {
			selectPointerItemIndex.value = null;
		}, 2000);

	}
</script>

<template>
	<div class="mm_inner m_codyshot-detail">
		<h3 class="mm_title">
			<b>코디샷</b>
		</h3>
		<figure>
			<div class="m_codyshot-detail-banner">
				<LazyloadMUI
					tag="'img'"
					:_src="'/public/images/dummy/shocase1.png'"
					alt=""
				></LazyloadMUI>
				<button
					v-for="(pointer, index) in detailAPI?.cody_shot.pointers"
					:key="pointer.order_seq"
					type="button"
					class="btn_product-pointer"
					:style="{ top: `${pointer.y}%`, left: `${pointer.x}%` }"
					@click="pointerItem(index)"
				>
					<b class="mm_ir-blind">{{ pointer.goods.name }}</b>
				</button>
			</div>
			<figcaption>
				<p class="text_brand">
					{{ detailAPI?.cody_shot.brand_name }}
				</p>
				<p class="text_title">
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
					class="btn_share"
				>
					<i class="ico_share"></i><b class="mm_ir-blind">클립보드 복사</b>
				</button>
			</figcaption>
		</figure>
		<div class="mm_product-list">
			<!--
				(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
				data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
				세일 상품이 아닐 경우 del 대신 빈 span 태그를 넣어주세요. (전체적으로 del이 안 들어갈 경우 del/span 모두 안 씀)
			-->
			<!-- (D) '.m_codyshot-detail-banner' 포인터 영역에서 'btn_product-pointer' 클릭  버튼의 index에 해당하는 mm_product-list의 li요소에 'S=pointer-on' 클래스가 추가됩니다. -->
			<ul>
				<li
					v-for="(item, index) in detailAPI?.cody_shot.pointers"
					:key="item.order_seq"
					:class="{ 'S=pointer-on': selectPointerItemIndex === index }"
				>
					<ProductItem
						:product="item.goods"
						:is-react="false"
					></ProductItem>
				</li>
			</ul>
		</div>
	</div>
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

			var _classOn = 'S=pointer-on';
			var _index = mm.element.index($btns, this);
			var $target = mm.find('li', $prodList)[_index];

			mm.class.remove(mm.find('li', $prodList), _classOn);

			$target.classList.add(_classOn);
			mm.scroll.to($target, { _margin: 100 });

			setTimeout(function () { mm.find('li', $prodList)[_index].classList.remove(_classOn); }, 2000);

		});

	})();
</script> -->