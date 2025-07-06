import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/cs',
		name: 'Cs',
		component: () => import('@/pages/cs/Index.vue'),
	},

	/** 자주하는 질문 */
	{
		path: '/cs/faq',
		name: 'CsFaq',
		component: () => import('@/pages/cs/CsFaq.vue'),
	},

	/** 공지사항 */
	{
		path: '/cs/notice',
		name: 'CsNotice',
		component: () => import('@/pages/cs/CsNotice.vue'),
	},

	/** 팝업 */
	{
		path: '/cs/inquiry',
		name: 'CsInquiry',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInquiry.vue'),
	},
	{
		path: '/cs/info/reward',
		name: 'CsInfoReward',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInfoReward.vue'),
	},
	{
		path: '/cs/info/order',
		name: 'CsInfoOrder',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInfoOrder.vue'),
	},
	{
		path: '/cs/info/return',
		name: 'CsInfoReturn',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInfoReturn.vue'),
	},
	{
		path: '/cs/info/grade',
		name: 'CsInfoGrade',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInfoGrade.vue'),
	},
	{
		path: '/cs/info/benefit',
		name: 'CsInfoBenefit',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/cs/CsInfoBenefit.vue'),
	},
	{
		path: '/cs/info/payKakao',
		name: 'CsInfoPayKakao',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/easypay/EasypayCsInfoKakao.vue'),
	},
	{
		path: '/cs/info/payPayco',
		name: 'CsInfoPayPayco',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/easypay/EasypayCsInfoPayco.vue'),
	},
	{
		path: '/cs/info/payNaver',
		name: 'CsInfoPayNaver',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/easypay/EasypayCsInfoNaver.vue'),
	},
	{
		path: '/cs/info/payToss',
		name: 'CsInfoPayToss',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/easypay/EasypayCsInfoToss.vue'),
	},
];

export default routes;