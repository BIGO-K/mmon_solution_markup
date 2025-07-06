import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	/** 회원가입 */
	{
		path: '/join',
		name: 'Join',
		component: () => import('@/pages/join/Index.vue'),
	},
	{
		path: '/join/info',
		name: 'JoinInfo',
		component: () => import('@/pages/join/JoinInfo.vue'),
	},
	{
		path: '/join/fin',
		name: 'JoinFin',
		component: () => import('@/pages/join/JoinFin.vue'),
	},
	{
		path: '/join/info-sns',
		name: 'JoinInfoSns',
		component: () => import('@/pages/join/JoinInfoSns.vue'),
	},
	{
		path: '/join/info-kakao',
		name: 'JoinInfoKaKao',
		component: () => import('@/pages/join/JoinInfoKakao.vue'),
	},
	{
		path: '/join/overlap',
		name: 'JoinOverlap',
		component: () => import('@/pages/join/JoinOverlap.vue'),
	},
	{
		path: '/join/overlap-easy',
		name: 'JoinOverlapEasylogin',
		component: () => import('@/pages/join/JoinOverlapEasylogin.vue'),
	},
	{
		path: '/join/fin-sns',
		name: 'JoinFinSns',
		component: () => import('@/pages/join/JoinFinSns.vue'),
	},

	/** 로그인 */
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/pages/login/Index.vue'),
	},
	{
		path: '/find/id',
		name: 'LoginFindId',
		component: () => import('@/pages/login/LoginFindId.vue'),
	},
	{
		path: '/find/id/fin',
		name: 'LoginFindIdFin',
		component: () => import('@/pages/login/LoginFindIdFin.vue'),
	},
	{
		path: '/find/password',
		name: 'LoginFindPw',
		component: () => import('@/pages/login/LoginFindPw.vue'),
	},
	{
		path: '/find/password/fin',
		name: 'LoginFindPwFin',
		component: () => import('@/pages/login/LoginFindPwFin.vue'),
	},
	{
		path: '/password/change',
		name: 'LoginPwChangeAdvice',
		component: () => import('@/pages/login/LoginPwChangeAdvice.vue'),
	},
	{
		path: '/certify/adult',
		name: 'LoginAdultCertification',
		component: () => import('@/pages/login/LoginAdultCertification.vue'),
	},
	{
		path: '/password/renewal',
		name: 'LoginRenewalPwChange',
		component: () => import('@/pages/login/LoginRenewalPwChange.vue'),
	},
];

export default routes;