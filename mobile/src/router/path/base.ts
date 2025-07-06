import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Main',
		redirect: { name: 'LayoutMain' },
		component: () => import('@/pages/Index.vue'),
		children: [
			{
				path: 'layout/main',
				name: 'LayoutMain',
				meta: {
					layouts: ['L=main']
				},
				component: () => import('@/components/layout/LayoutMain.vue'),
			},
			{
				path: 'layout/popup',
				name: 'LayoutPopup',
				meta: {
					layouts: ['L=popup']
				},
				component: () => import('@/components/layout/LayoutPopup.vue'),
			},
			{
				path: 'layout/sub',
				name: 'LayoutSub',
				component: () => import('@/components/layout/LayoutSub.vue'),
			},
		]
	},

	{
		path: '/filter',
		name: 'ProductFilter',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/ProductFilter.vue'),
	},

	/** 공통 팝업 */
	{
		path: '/lately',
		name: 'LatelyProduct',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/popup/LatelyProduct.vue'),
	},
	{
		path: '/card-benefit',
		name: 'CardBenefit',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/popup/CardBenefit.vue'),
	},
	{
		path: '/unipass',
		name: 'PolicyUnipass',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/popup/PolicyUnipass.vue'),
	},
	{
		path: '/postcode-find',
		name: 'PostcodeFind',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/popup/PostcodeFind.vue'),
	},

	/** 사이드바 */
	{
		path: '/sidebar',
		name: 'Sidebar',
		meta: {
			layouts: ['L=side', 'L=popup', 'L=lowbtn']
		},
		component: () => import('@/pages/sidebar/Index.vue'),
	},

	/** 베스트 */
	{
		path: '/best',
		name: 'Best',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/pages/best/Index.vue'),
	},

	/** 브랜드샵 */
	{
		path: '/brand/:id(\\d+)',
		name: 'Brandshop',
		component: () => import('@/pages/brandshop/Index.vue'),
	},

	/** 카테고리 */
	{
		path: '/category/:id(\\d+)',
		name: 'CategoryMain',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/pages/category/Index.vue'),
	},
	{
		path: '/category/sub/:id(\\d+)',
		name: 'CategorySub',
		component: () => import('@/pages/category/CategorySub.vue'),
	},

	/** 코디샷 */
	{
		path: '/codyshot/:id(\\d+)?',
		name: 'Codyshot',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/codyshot/Index.vue'),
	},
	{
		path: '/codyshot/detail/:id(\\d+)',
		name: 'CodyshotDetail',
		component: () => import('@/features/codyshot/CodyshotDetail.vue'),
	},

	/** 공동구매 */
	{
		path: '/coop',
		name: 'Coop',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/coop/Index.vue'),
	},

	/** 판매자샵 */
	{
		path: '/seller/:id(\\d+)',
		name: 'Sellershop',
		component: () => import('@/pages/seller/Index.vue'),
	},

	/** 쇼케이스 */
	{
		path: '/showcase',
		name: 'Showcase',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/showcase/Index.vue'),
	},
	{
		path: '/showcase/:id(\\d+)',
		name: 'ShowcaseDetail',
		component: () => import('@/features/showcase/ShowcaseDetail.vue'),
	},

	/** 검색 */
	{
		path: '/search',
		name: 'Search',
		meta: {
			layouts: ['L=popup', 'L=search']
		},
		component: () => import('@/pages/search/Index.vue'),
	},
	{
		path: '/search/result',
		name: 'SearchResult',
		meta: {
			layouts: ['L=popup', 'L=search']
		},
		component: () => import('@/pages/search/SearchResult.vue'),
	},

	/** 이벤트/프로모션/체험 */
	{
		path: '/event',
		name: 'Event',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/event/Index.vue'),
	},
	{
		path: '/event/:id(\\d+)',
		name: 'EventDetail',
		component: () => import('@/features/event/EventDetail.vue'),
	},
	{
		path: '/experience',
		name: 'Experience',
		component: () => import('@/features/experience/Index.vue'),
	},
	{
		path: '/experience/:id(\\d+)',
		name: 'ExperienceDetail',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/experience/ExperienceDetail.vue'),
	},
	{
		path: '/experience/register',
		name: 'ExperienceRegister',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/experience/ExperienceRegister.vue'),
	},
	{
		path: '/promotion/:id(\\d+)',
		name: 'Promotion',
		component: () => import('@/pages/promotion/Index.vue'),
	},

	/** 상품상세 */
	{
		path: '/product/:id',
		name: 'ProductDetail',
		meta: {
			layouts: ['L=lowbtn']
		},
		component: () => import('@/pages/product/Index.vue'),
	},
	{
		path: '/product/multiangle',
		name: 'ProductMultiangleView',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/multiangle/MultiangleViewProduct360.vue'),
	},
	{
		path: '/product/coupon-down',
		name: 'ProductCouponDown',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductCouponDown.vue'),
	},
	{
		path: '/product/like-folder',
		name: 'ProductLikeFolder',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductLikeFolder.vue'),
	},
	{
		path: '/product/review',
		name: 'ProductPhotoReviewImageList',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductReviewImageList.vue'),
	},
	{
		path: '/product/review/:id(\\d+)?',
		name: 'ProductPhotoReviewDetail',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductPhotoReviewDetail.vue'),
	},
	{
		path: '/product/best-review/:id(\\d+)?',
		name: 'ProductBestReviewDetail',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductBestReviewDetail.vue'),
	},
	{
		path: '/product/inquiry',
		name: 'ProductInquiry',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/product/ProductInquiry.vue'),
	},
	{
		path: '/product/gift',
		name: 'ProductGiftInfo',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/gift/GiftProductInfo.vue'),
	},
	{
		path: '/product/gift-target',
		name: 'ProductGiftTarget',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/gift/GiftTargetProduct.vue'),
	},

	/** 쇼핑LIVE */
	{
		path: '/live',
		name: 'ShoppingLive',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/live/Index.vue'),
	},

	/** 래플 */
	{
		path: '/raffle',
		name: 'Raffle',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/raffle/Index.vue'),
	},
	{
		path: '/raffle/closed',
		name: 'RaffleClosedList',
		meta: {
			layouts: ['L=main']
		},
		component: () => import('@/features/raffle/RaffleClosed.vue'),
	},
	{
		path: '/raffle/guide',
		name: 'RaffleGuide',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/raffle/RaffleGuide.vue'),
	},
	{
		path: '/raffle/winner',
		name: 'RaffleWinner',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/features/raffle/RaffleWinner.vue'),
	},

	/** 약관/정책 */
	{
		path: '/policy/:type?',
		name: 'Policy',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/policy/Index.vue'),
	},

	/** 오류 */
	{
		path: '/:pathMatch(.*)*',
		name: 'Error',
		meta: {
			layouts: ['L=error']
		},
		component: () => import('@/pages/error/Index.vue'),
	},
];

export default routes;