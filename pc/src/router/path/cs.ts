import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/cs',
		component: () => import('@/pages/cs/Index.vue'),
		children: [
			{
				path: '',
				name: 'CsMain',
				// exact: true,
				component: () => import('@/pages/cs/CsMain.vue'),
			},
			{
				path: 'inquiry',
				name: 'CsInquiry',
				component: () => import('@/pages/cs/CsInquiry.vue'),
			},
			{
				path: 'reward',
				name: 'CsInfoReward',
				component: () => import('@/pages/cs/CsInfoReward.vue'),
			},
			{
				path: 'delivery',
				name: 'CsInfoDelivery',
				component: () => import('@/pages/cs/CsInfoDelivery.vue'),
			},
			{
				path: 'return',
				name: 'CsInfoReturn',
				component: () => import('@/pages/cs/CsInfoReturn.vue'),
			},
			{
				path: 'benefit',
				name: 'CsInfoBenefit',
				component: () => import('@/pages/cs/CsInfoBenefit.vue'),
			},
			{
				path: 'coupon-point',
				name: 'CsInfoCoupon',
				component: () => import('@/pages/cs/CsInfoCoupon.vue'),
			},
			{
				path: 'pay-kakao',
				name: 'CsInfoPayKakao',
				component: () => import('@/features/easypay/EasypayCsKakao.vue'),
			},
			{
				path: 'pay-naver',
				name: 'CsInfoPayNaver',
				component: () => import('@/features/easypay/EasypayCsNaver.vue'),
			},
			{
				path: 'pay-payco',
				name: 'CsInfoPayPayco',
				component: () => import('@/features/easypay/EasypayCsPayco.vue'),
			},
			{
				path: 'pay-toss',
				name: 'CsInfoPayToss',
				component: () => import('@/features/easypay/EasypayCsToss.vue'),
			},
			{
				path: 'notice',
				name: 'CsNotice',
				component: () => import('@/pages/cs/CsNotice.vue'),
			},
			{
				path: 'notice/:id(\\d+)',
				name: 'CsNoticeDetail',
				component: () => import('@/pages/cs/CsNoticeDetail.vue'),
			},
		]
	},
];

export default routes;