<script setup lang="ts">
	import { ref, onBeforeUnmount, watch, toRef } from 'vue';
	import Events from '@markup/mui/src/events';
	import Utils from '@markup/mui/src/utils';
	import Images from '@markup/mui/src/images';

	interface LazyloadProp {
		/** @prop { string } `default: null` - 이미지 경로 */
		_src?: string | null;
		/** @prop `default: null` - _src가 없을 때 추가로 불러올 이미지 경로 */
		_src2?: string | null;
		/** @prop `default: i` - 생성할 태그로 i는 background로 적용 */
		_tag?: `iframe` | `img` | `i`;
		/** @prop `defualt: 0px 0px 0px 0px` - intersection observer 영역의 rootMargin */
		_rootMargin?: string;
		/** @prop `default: true` - 오류 이미지 노출 */
		_isErrorImage?: boolean;
		/** @prop `default: false` - 로드 완료 시 비율에 따라 클래스 추가(landscape, portrait, square) */
		_isRatio?: boolean;
		/** @prop `default: false` - 로드 업데이트에서 제외 */
		_isPass?: boolean;
		/** @prop `default: false` - _isIntersecting, _isPass를 무시하고 강제 로드(프리로드) */
		_isForce?: boolean;
		/** @prop `default: null` */
		onBefore?: ((...rest: Required<LazyloadProp>[`onBeforeParams`]) => void) | null;
		/** @prop `default: []` */
		onBeforeParams?: unknown[];
		/** @prop `default: null` */
		onComplete?: ((__is: true, ...rest: Required<LazyloadProp>[`onCompleteParams`]) => void) | null;
		/** @prop `default: []` */
		onCompleteParams?: unknown[];
		/** @prop `default: null` */
		onError?: ((__is: false, ...rest: Required<LazyloadProp>[`onErrorParams`]) => void) | null;
		/** @prop `default: []` */
		onErrorParams?: unknown[];
	}

	const prop = withDefaults(defineProps<LazyloadProp>(),
		{
			_src: null,
			_src2: null,
			_tag: `i`,
			_rootMargin: `0px 0px 0px 0px`,
			_isErrorImage: true,
			_isRatio: false,
			_isPass: false,
			_isForce: false,
			onBefore: null,
			onBeforeParams: () => [],
			onComplete: null,
			onCompleteParams: () => [],
			onError: null,
			onErrorParams: () => [],
		}
	);

	const CLASS_LOADING = `S=loading`;
	const CLASS_LOADED = `S=loaded`;
	const CLASS_ERROR = `S=error`;
	const $ui = ref<HTMLElement>();
	const _src = toRef(prop, `_src`);

	// 레이지로드 연결
	const init = () => {

		if ($ui.value == null) return;

		const lazyloadHandler = (__entry: IntersectionObserverEntry): void => {

			if (!__entry.isIntersecting || Object.values(__entry.target.classList).some(__class => [CLASS_LOADING, CLASS_LOADED, CLASS_ERROR].includes(__class))) return;

			load();

		};

		Events.intersection.on($ui.value, lazyloadHandler, { rootMargin: prop._rootMargin }, { data: prop, _isOnce: true });

	};

	// 레이지로드 해제
	const destroy = () => {

		if ($ui.value == null) return;

		if (Object.values($ui.value.classList).some(__class => [CLASS_LOADED, CLASS_ERROR].includes(__class))) return;// 진행 중인 요소는 제외

		$ui.value.removeAttribute(`src`);
		$ui.value.classList.remove(CLASS_LOADING);

		Events.intersection.off($ui.value);//, `lazyloadHandler`);

	};

	// 레이지로드 강제로드
	const force = () => {

		if ($ui.value == null) return;

		if (!Object.values($ui.value.classList).some(__class => [CLASS_LOADING, CLASS_LOADED, CLASS_ERROR].includes(__class))) load();

	};

	// 요소 로드
	const load = () => {

		if ($ui.value == null) return;

		let $event = $ui.value;// 이벤트를 연결할 요소
		// iframe
		if ($ui.value instanceof HTMLIFrameElement) {
			if (!$ui.value.getAttribute(`scrolling`)) $ui.value.setAttribute(`scrolling`, `no`);// scrolling 속성 웹표준 오류로 스크립트로 적용
		}
		// 배경
		else if (!($ui.value instanceof HTMLImageElement)) $event = document.createElement(`img`);

		// 로드 전
		$ui.value.classList.add(CLASS_LOADING);
		Utils.apply(prop.onBefore, [{ ui: this }, ...prop.onBeforeParams]);

		const eventLoadHandler = (__e: Event): void => {

			if ($ui.value == null) return;

			Events.bind.off($event, `load error`);

			switch (__e.type) {
				/** 로드 완료 */
				case `load`:
					$ui.value.classList.remove(...[CLASS_LOADING, CLASS_ERROR]);
					$ui.value.classList.add(CLASS_LOADED);

					// iframe
					if ($ui.value instanceof HTMLIFrameElement) {
						// * iframe 오류 상태 개발에서 적용
						const _iframeTitle = $ui.value.getAttribute(`title`) ?? $ui.value.contentDocument?.title ?? ``;
						$ui.value.setAttribute(`title`, _iframeTitle);

						// 에러 화면 title로 확인
						if (/404 not found|불편을 드려 죄송합니다|페이지를 찾을 수 없습니다|^error$/i.test(_iframeTitle)) {
							$ui.value.classList.remove(...[CLASS_LOADING, CLASS_LOADED]);
							$ui.value.classList.add(CLASS_ERROR);
							console.log(`error src : ` + $ui.value.getAttribute(`src`));

							Utils.apply(prop.onError, [{ ui: this }, ...prop.onErrorParams]);

							return;
						}
					}
					else {
						const $target = $event as HTMLImageElement;
						if (prop._isRatio) {
							const _ratio = $target.naturalWidth / $target.naturalHeight;
							let _classRatio = `S=image-square`;
							if (_ratio > 1) _classRatio = (_ratio > 8) ? `S=image-landscape-4x` : (_ratio > 4) ? `S=image-landscape-3x` : (_ratio > 2) ? `S=image-landscape-2x` : `S=image-landscape`;
							else if (_ratio < 1) _classRatio = (_ratio < 0.25) ? `S=image-portrait-3x` : (_ratio < 0.5) ? `S=image-portrait-2x` : `S=image-portrait`;

							$ui.value.classList.add(_classRatio);
						}

						// 배경
						if (!($ui.value instanceof HTMLImageElement)) {
							$ui.value.style.backgroundImage = `url("${$target.getAttribute(`src`)}")`;
							$target.remove();
						}
					}

					Utils.apply(prop.onComplete, [true, ...prop.onCompleteParams]);
					break;
				/** 로드 에러(iframe은 load에서 에러 처리) */
				case `error`:
					$ui.value.classList.remove(...[CLASS_LOADING, CLASS_LOADED]);

					// 보조 경로가 있으면 다시 로드
					if (prop._src2 != null) {
						_src.value = prop._src2;
						if ($ui.value !== $event) $event.remove();// 임시로 생성된 이미지 요소 삭제

						load();
					}
					else {
						$ui.value.classList.add(CLASS_ERROR);
						console.log(`error src: ${$event.getAttribute(`src`)}`);

						if (prop._isErrorImage) Images.none($ui.value);// 없음 이미지

						Utils.apply(prop.onError, [false, ...prop.onErrorParams]);
					}
					break;
			}

		};
		Events.bind.on($event, `load error`, eventLoadHandler);

		const _loadSrc = (_src.value != null) ? _src.value.trim() : ``;
		if (_loadSrc.length === 0) Events.bind.call($event, `error`);
		else $event.setAttribute(`src`, _loadSrc);

	};

	const watchOff = watch([$ui, _src], () => {

		if (_src.value != null && _src.value.trim().length > 0) {
			watchOff();

			if (prop._isForce) force();// load();
			else init();
		}

	}, {
		flush: 'post'
	});

	onBeforeUnmount(() => {

		destroy();

	});
</script>

<template>
	<component
		:is="_tag"
		ref="$ui"
		data-lazyload
		v-bind="_tag === 'img' ? { src: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' } : {}"
	></component>
</template>