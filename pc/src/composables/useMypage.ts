/** router params.tab과 페이지 탭 이름 연결 */

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const useMypageTab = () => {

	const tabList = {
		// 주문 관리
		orderTab: {
			all: '주문',
			cancel: '취소',
			return: '반품',
			exchange: '교환',
		},
		// 혜택 관리
		benefitTab: {
			coupon: '보유 쿠폰',
			point: '보유 적립금',
		},
		// My 찜
		interestTab: {
			product: '찜한 아이템',
			brand: '찜한 브랜드',
		},
		// 리뷰 관리
		reviewTab: {
			pending: '작성 가능한 리뷰',
			completed: '작성한 리뷰',
		},
		// 1:1 문의
		inquiryTab: {
			qna: '1:1 문의',
			seller: '판매자 문의',
		},
		// 배송지연 신고
		shippingTab: {
			report: '배송지연 신고',
			result: '배송지연 처리결과',
		},
		// 품절취소 신고
		soldoutTab: {
			report: '품절취소 신고',
			result: '품절취소 처리결과',
		},
	};

	return {
		...tabList,
		// route params이 없을 때 초기 값 적용
		onTabRouteHandler(__to: RouteLocationNormalized, __from: RouteLocationNormalized, __next: NavigationGuardNext) {

			const keys = Object.keys(tabList[`${__to.meta.tabId}Tab`]);

			if (!__to.params.tab) __next({ name: __to.name, params: { tab: keys[0] } });
			else if (!keys.includes(__to.params.tab)) __next({ name: 'Error' });
			else __next();

		},
	};
};