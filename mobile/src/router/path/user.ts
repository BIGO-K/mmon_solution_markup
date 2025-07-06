import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	/** 로그인 */
	{
		path: '/login',
		name: 'Login',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/Index.vue'),
	},
	{
		path: '/password/renewal',
		name: 'LoginRenewalPwChange',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/LoginRenewalPwChange.vue'),
	},
	{
		path: '/find/',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/components/LoginfindTab.vue'),
		children: [
			{
				path: 'id',
				name: 'LoginFindId',
				component: () => import('@/pages/login/LoginFindId.vue'),
			},
			{
				path: 'pw',
				name: 'LoginFindPw',
				component: () => import('@/pages/login/LoginFindPw.vue'),
			},
		]
	},
	{
		path: '/find/id/complete',
		name: 'LoginFindIdComplete',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/LoginFindIdComplete.vue'),
	},
	{
		path: '/find/pw/complete',
		name: 'LoginFindPwComplete',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/LoginFindPwComplete.vue'),
	},
	{
		path: '/login/guest-order',
		name: 'LoginGuestOrder',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/login/LoginGuestOrder.vue'),
	},

	/** 회원가입 */
	{
		path: '/join',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/join/Index.vue'),
		children: [
			{
				path: '',
				name: 'Join',
				component: () => import('@/pages/join/JoinCertification.vue'),
			},
			{
				path: 'policy',
				name: 'JoinPolicy',
				component: () => import('@/pages/join/JoinPolicy.vue'),
			},
			{
				path: 'info:process?',
				name: 'JoinInfo',
				component: () => import('@/pages/join/JoinInfo.vue'),
			},
			{
				path: 'complete',
				name: 'JoinFin',
				component: () => import('@/pages/join/JoinComplete.vue'),
			},
		]
	},
	{
		path: '/join/info-sns',
		name: 'JoinInfoSns',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/join/JoinInfoSns.vue'),
	},
	{
		path: '/join/info-kakao',
		name: 'JoinInfoKakao',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/join/JoinInfoKakao.vue'),
	},
	{
		path: '/join/info-easylogin',
		name: 'JoinInfoEasylogin',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/join/JoinInfoEasylogin.vue'),
	},
	{
		path: '/join/overlap',
		name: 'JoinOverlap',
		meta: {
			layouts: ['L=popup', 'L=sign']
		},
		component: () => import('@/pages/join/JoinOverlap.vue'),
	},
];

export default routes;