<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	defineProps<{
		multiangle: ProductDetail360[`degree_360_image_urls`];
	}>();
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b></b></h1>
		</template>

		<template #content>
			<div class="m_popup-multiangle">
				<p class="m_popup-multiangle-note">
					<i class="ico_multiangle-drag"></i>좌우로 움직여 더 자세히 보세요
				</p>
				<div
					v-for="image in multiangle"
					:key="image"
					class="m_popup-multiangle-image"
				>
					<LazyloadMUI
						class="mm_bg-cover image_gift"
						:_src="image"
					></LazyloadMUI>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<sytle src="./_multiangle.scss" lang="scss"></sytle>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	mm.load(function () {

		var $multiangle = mm.find('.m_popup-multiangle')[0];
		var $list = mm.find('.m_popup-multiangle-image', $multiangle)[0];
		var _classOn = 'S=multiangle-on';

		if (!$list) return;

		mm.class.add($list.children, 'S=on');// 화면에 처음 노출될 때 깜빡이는 이슈로 첫 실행 시 노출 적용
		mm.intersection.force(mm.find('data-lazyload', $list));

		// 상품 이미지 360도 보기
		$multiangle.classList.add(_classOn);

		mm.class.remove($list.children, 'S=on');
		$list.firstElementChild.classList.add('S=on');

		// 상품 이미지 360도 드래그
		var _sensitive = 1.7 * (32 / $list.childElementCount);
		var _dragCount = 0;
		var _previewIndex = 0;

		mm.event.on($list, 'touchstart', function (__e) {

			_dragCount = 0;
			_previewIndex = mm.element.index($list.children, '.S=on');
			var prevTouch = __e.touches[0];

			mm.event.on($list, 'touchmove touchend', function view360MouseInlineHandler(__e) {

				__e.preventDefault();
				__e.stopPropagation();

				switch (__e.type) {
					case 'touchmove':
						var touch = (__e.type === 'touchend') ? __e.changedTouches[0] : __e.touches[0];
						var _moveX = touch.screenX - prevTouch.screenX;
						prevTouch = touch;

						if (_moveX > 0) _dragCount++;
						else _dragCount--;

						if (Math.abs(_dragCount) > _sensitive) {
							_dragCount = 0;
							_previewIndex = (_moveX > 0) ? _previewIndex + 1 : _previewIndex - 1;
							if (_previewIndex >= $list.childElementCount) _previewIndex = 0;
							if (_previewIndex < 0) _previewIndex = $list.childElementCount - 1;

							mm.class.remove($list.children, 'S=on');
							$list.children[_previewIndex].classList.add('S=on');
						}
						break;
					case 'touchend':
						mm.event.off($list, 'touchmove touchend', view360MouseInlineHandler);
						break;
				}

			});

		});

	});
</script> -->