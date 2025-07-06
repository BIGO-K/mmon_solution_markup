/**
 * 페이지 공통
 */

import Doms from '@markup/mui/src/doms';
import Events from '@markup/mui/src/events';
import Is from '@markup/mui/src/is';
import { Switch, Tab } from '@markup/mui/src/ui/buttons';
import { Carousel, Slider } from '@markup/mui/src/ui/sliders';

/** 터치이벤트 상태 */
const documentTouchHandler = (__e: MouseEvent): void => {

	switch (__e.type) {
		case `touchstart`:
		case `mousedown`:
			Is.touch = true;
			break;
		case `touchend`:
		case `mouseup`:
			Is.touch = false;
			break;
	}

};
Events.bind.on(document, (Is.mobile() ? `touchstart touchend` : `mousedown mouseup`), documentTouchHandler);

/** DOM 생성 감지(이벤트 초기화) */
const documentMutationHabndler = (__records: MutationRecord[]): void => {

	for (const record of __records) if (record.removedNodes.length > 0) uiEventRemove(record.removedNodes);

};
Events.mutation.on(document.body, documentMutationHabndler, { childList: true, subtree: true });

// TODO 컴포넌트로 변경 후 기능 제거
const uiEventRemove = (__nodes: NodeList) => {

	for (const node in __nodes) {
		const $el = __nodes[node];
		if (!($el instanceof HTMLElement)) continue;

		// Carousel.destroy(Doms.find(`[data-carousel]`, $el));
		// Slider.destroy(Doms.find(`[data-slider]`, $el));
		// Switch.destroy(Doms.find(`[data-switch]`, $el));
		// Tab.destroy(Doms.find(`[data-tab]`, $el));
		// Dropdown.destroy(Doms.find(`[data-dropdown]`, $el));
	}

};