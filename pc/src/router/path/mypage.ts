import { RouteRecordRaw } from 'vue-router';
import { useMypageTab } from '@/composables/useMypage';

const { onTabRouteHandler } = useMypageTab();

const routes: RouteRecordRaw[] = [
	{
		path: '/mypage',
		meta: {
			requiresAuth: true,
		},
		component: () => import('@/pages/mypage/Index.vue'),
		children: [
			{
				path: '',
				name: 'MyMain',
				// exact: true,
				component: () => import('@/pages/mypage/MyMain.vue'),
			},
			{
				path: 'grade',
				name: 'MyMainGrade',
				component: () => import('@/pages/mypage/MyMainGrade.vue'),
			},
			{
				path: 'raffle',
				name: 'MyRaffleEntry',
				component: () => import('@/features/raffle/RaffleMyEntry.vue'),
			},
			{
				path: 'order',
				children: [
					{
						path: ':tab?',
						name: 'MyOrder',
						meta: {
							tabId: 'order',
						},
						component: () => import('@/pages/mypage/MyOrder.vue'),
						beforeEnter: [onTabRouteHandler],
					},
					{
						path: ':tab/:id',
						name: 'MyOrderDetail',
						component: () => import('@/pages/mypage/MyOrderDetail.vue'),
					},
					{
						path: 'return/convert',
						name: 'MyOrderReturnSwitch',
						component: () => import('@/pages/mypage/MyOrderReturnSwitch.vue'),
					},
					{
						path: 'return/convert/complete',
						name: 'MyOrderReturnSwitchFin',
						component: () => import('@/pages/mypage/MyOrderReturnSwitchFin.vue'),
					},
					{
						path: 'cancel/request',
						name: 'MyOrderCancel',
						component: () => import('@/pages/mypage/MyOrderCancel.vue'),
					},
					{
						path: 'cancel/complete',
						name: 'MyOrderCancelFin',
						component: () => import('@/pages/mypage/MyOrderCancelFin.vue'),
					},
					{
						path: 'return/request',
						name: 'MyOrderReturn',
						component: () => import('@/pages/mypage/MyOrderReturn.vue'),
					},
					{
						path: 'return/complete',
						name: 'MyOrderReturnFin',
						component: () => import('@/pages/mypage/MyOrderReturnFin.vue'),
					},
					{
						path: 'exchange/request',
						name: 'MyOrderExchange',
						component: () => import('@/pages/mypage/MyOrderExchange.vue'),
					},
					{
						path: 'exchange/complete',
						name: 'MyOrderExchangeFin',
						component: () => import('@/pages/mypage/MyOrderExchangeFin.vue'),
					},
				]
			},
			{
				path: 'benefit/:tab?',
				name: 'MyBenefit',
				meta: {
					tabId: 'benefit',
				},
				component: () => import('@/pages/mypage/MyBenefit.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				path: 'interest/:tab?',
				name: 'MyInterest',
				meta: {
					tabId: 'interest',
				},
				component: () => import('@/pages/mypage/MyInterest.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				path: 'lately',
				name: 'MyLatelyList',
				component: () => import('@/pages/mypage/MyLatelyList.vue'),
			},
			{
				path: 'review/:tab?',
				name: 'MyReview',
				meta: {
					tabId: 'review',
				},
				component: () => import('@/pages/mypage/MyReview.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				path: 'inquiry/request',
				name: 'MyInquiryCounsel',
				component: () => import('@/pages/mypage/MyInquiryCounsel.vue'),
			},
			{
				path: 'inquiry/:tab?',
				name: 'MyInquiry',
				meta: {
					tabId: 'inquiry',
				},
				component: () => import('@/pages/mypage/MyInquiry.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				path: 'shipping/:tab?',
				name: 'MyShipping',
				meta: {
					tabId: 'shipping',
				},
				component: () => import('@/pages/mypage/MyShipping.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				path: 'soldout/:tab?',
				name: 'MySoldout',
				meta: {
					tabId: 'soldout',
				},
				component: () => import('@/pages/mypage/MySoldout.vue'),
				beforeEnter: [onTabRouteHandler],
			},
			{
				// auto/check meta
				path: 'verify',
				name: 'MyInfoPWVerify',
				component: () => import('@/pages/mypage/MyPWReEntry.vue'),
			},
			{
				// auto/check meta
				path: 'verify-sns',
				name: 'MyInfoPWVerifySns',
				component: () => import('@/pages/mypage/MyPWReEntrySns.vue'),
			},
			{
				path: 'info',
				name: 'MyInfoModify',
				meta: {
					requiresAuth: true,
				},
				component: () => import('@/pages/mypage/MyInfoModify.vue'),
			},
			{
				path: 'withdraw',
				name: 'MyInfoWithdraw',
				component: () => import('@/pages/mypage/MyInfoWithdraw.vue'),
			},
			{
				path: 'refund-account',
				name: 'MyRefundAccount',
				component: () => import('@/pages/mypage/MyRefundAccount.vue'),
			},
			{
				// auto/check meta
				path: 'pay/verify',
				name: 'MyPayPWVerify',
				component: () => import('@/pages/mypage/MyPWReEntry.vue'),
			},
			{
				// auto/check meta
				path: 'pay/verify-sns',
				name: 'MyPayPWVerifySns',
				component: () => import('@/pages/mypage/MyPWReEntrySns.vue'),
			},
		]
	},
];

export default routes;