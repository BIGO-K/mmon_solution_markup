import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/mypage',
		name: 'Mypage',
		component: () => import('@/pages/mypage/MyMain.vue'),
	},
	{
		path: '/my-size',
		name: 'MySize',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/personal/PersonalMySize.vue'),
	},
	{
		path: '/my-grade',
		name: 'MyMainGrade',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyMainGrade.vue'),
	},
	{
		path: '/my-order/:tab(\\d+)?',
		name: 'MyOrder',
		component: () => import('@/pages/mypage/MyOrder.vue'),
	},
	{
		path: '/order-confirm',
		name: 'MyOrderConfirm',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderConfirm.vue'),
	},
	{
		path: '/myOrderDetail',
		name: 'MyOrderDetail',
		component: () => import('@/pages/mypage/MyOrderDetail.vue'),
	},
	{
		path: '/myOrderCancel',
		name: 'MyOrderCancel',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderCancel.vue'),
	},
	{
		path: '/myOrderCancelFin',
		name: 'MyOrderCancelFin',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderCancelFin.vue'),
	},
	{
		path: '/myOrderReturn',
		name: 'MyOrderReturn',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturn.vue'),
	},
	{
		path: '/myOrderReturnInfo',
		name: 'MyOrderReturnInfo',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturnInfo.vue'),
	},
	{
		path: '/myOrderReturnFin',
		name: 'MyOrderReturnFin',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturnFin.vue'),
	},
	{
		path: '/myOrderExchange',
		name: 'MyOrderExchange',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderExchange.vue'),
	},
	{
		path: '/myOrderExchangeInfo',
		name: 'MyOrderExchangeInfo',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderExchangeInfo.vue'),
	},
	{
		path: '/myOrderExchangeFin',
		name: 'MyOrderExchangeFin',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderExchangeFin.vue'),
	},
	{
		path: '/myOrderReturnSwitch',
		name: 'MyOrderReturnSwitch',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturnSwitch.vue'),
	},
	{
		path: '/myOrderReturnSwitchInfo',
		name: 'MyOrderReturnSwitchInfo',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturnSwitchInfo.vue'),
	},
	{
		path: '/myOrderReturnSwitchFin',
		name: 'MyOrderReturnSwitchFin',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyOrderReturnSwitchFin.vue'),
	},
	{
		path: '/myBenefitCoupon',
		name: 'MyBenefitCoupon',
		component: () => import('@/pages/mypage/MyBenefitCoupon.vue'),
	},
	{
		path: '/myBenefitPoint',
		name: 'MyBenefitPoint',
		component: () => import('@/pages/mypage/MyBenefitPoint.vue'),
	},
	{
		path: '/myLikeProd',
		name: 'MyLikeProd',
		component: () => import('@/pages/mypage/MyLikeProd.vue'),
	},
	{
		path: '/myLikeProdDetail:name?',
		name: 'MyLikeProdDetail',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyLikeProdDetail.vue'),
	},
	{
		path: '/myLikeBrand',
		name: 'MyLikeBrand',
		component: () => import('@/pages/mypage/MyLikeBrand.vue'),
	},
	{
		path: '/myReview',
		name: 'MyReview',
		component: () => import('@/pages/mypage/MyReview.vue'),
	},
	{
		path: '/myReviewWritten',
		name: 'MyReviewWritten',
		component: () => import('@/pages/mypage/MyReviewWritten.vue'),
	},
	{
		path: '/myReviewRegister',
		name: 'MyReviewRegister',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyReviewRegister.vue'),
	},
	{
		path: '/myInquiry',
		name: 'MyInquiry',
		component: () => import('@/pages/mypage/MyInquiry.vue'),
	},
	{
		path: '/myInquirySeller',
		name: 'MyInquirySeller',
		component: () => import('@/pages/mypage/MyInquirySeller.vue'),
	},
	{
		path: '/myClaimShip',
		name: 'MyClaimShip',
		component: () => import('@/pages/mypage/MyRewardClaimShip.vue'),
	},
	{
		path: '/myClaimShipResult',
		name: 'MyClaimShipResult',
		component: () => import('@/pages/mypage/MyRewardClaimShipResult.vue'),
	},
	{
		path: '/myClaimSoldout',
		name: 'MyClaimSoldout',
		component: () => import('@/pages/mypage/MyRewardClaimSoldout.vue'),
	},
	{
		path: '/myClaimSoldoutResult',
		name: 'MyClaimSoldoutResult',
		component: () => import('@/pages/mypage/MyRewardClaimSoldoutResult.vue'),
	},
	{
		path: '/myInfoRefund',
		name: 'MyInfoRefund',
		component: () => import('@/pages/mypage/MyInfoRefund.vue'),
	},
	{
		path: '/myInfoRefundRegister',
		name: 'MyInfoRefundRegister',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyInfoRefundRegister.vue'),
	},
	{
		path: '/myRecentProd',
		name: 'MyRecentProd',
		component: () => import('@/pages/mypage/MyRecentProd.vue'),
	},
	{
		path: '/myRecentPromo',
		name: 'MyRecentPromo',
		component: () => import('@/pages/mypage/MyRecentPromo.vue'),
	},
	{
		path: '/mySetting',
		name: 'MySetting',
		component: () => import('@/pages/mypage/MySetting.vue'),
	},
	{
		path: '/myRaffleEntry',
		name: 'MyRaffleEntry',
		component: () => import('@/features/raffle/RaffleMyEntry.vue'),
	},
	{
		path: '/myInfoModify',
		name: 'MyInfoModify',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyInfoModify.vue'),
	},
	{
		path: '/pw-change',
		name: 'MyPWChange',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/login/LoginPwChange.vue'),
	},
	{
		path: '/myInfoWithdraw',
		name: 'MyInfoWithdraw',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyInfoWithdraw.vue'),
	},
	{
		path: '/myPWVerify',
		name: 'MyPWVerify',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyPWVerify.vue'),
	},
	{
		path: '/myPWVerifySns',
		name: 'MyPWVerifySns',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/mypage/MyPWVerifySns.vue'),
	}
];

export default routes;