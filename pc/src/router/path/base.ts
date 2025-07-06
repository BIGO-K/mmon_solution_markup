import { RouteRecordRaw } from 'vue-router';
import { useCategoryStore } from '@/store/category';

const routes: RouteRecordRaw[] = [
	{
		path: '/index',
		name: 'Index',
		meta: {
			layout: 'L=index',
			isShowHeader: false,
			isShowFooter: false,
		},
		component: () => import('@/Index.vue'),
	},
	{
		path: '/',
		name: 'Main',
		component: () => import('@/pages/Index.vue'),
	},

	/** 카테고리 */
	{
		path: '/category/:id(\\d+)?',
		name: 'Category',
		component: () => import('@/pages/category/Index.vue'),
		beforeEnter: async (__to, __from, __next) => {

			// 처음 값으로 적용(001000000)
			if (!__to.params.id) __next({ name: __to.name, params: { id: useCategoryStore().categoryItems[0].code } });
			else __next();

		}
	},

	/** 검색결과 */
	{
		path: '/search',
		name: 'SearchResult',
		component: () => import('@/pages/search/Index.vue'),
	},

	/** 상품상세 */
	{
		path: '/product/:id(\\d+)',
		name: 'ProductDetail',
		component: () => import('@/pages/product/Index.vue'),
	},
	{
		path: '/raffle/:id(\\d+)',
		name: 'ProductDetailRaffle',
		component: () => import('@/features/raffle/RaffleProduct.vue'),
	},
	{
		path: '/coop/:id(\\d+)',
		name: 'ProductDetailCoop',
		component: () => import('@/features/coop/CoopProduct.vue'),
	},

	/** 판매자샵 */
	{
		path: '/seller/:id',
		name: 'Sellershop',
		component: () => import('@/pages/sellershop/Index.vue'),
	},

	/** 브랜드샵 */
	{
		path: '/brand/:id(\\d+)',
		name: 'Brandshop',
		component: () => import('@/pages/brandshop/Index.vue'),
	},

	/** 브랜드맵 */
	{
		path: '/brand',
		name: 'Brandmap',
		component: () => import('@/pages/brandmap/Index.vue'),
	},

	/** 베스트 */
	{
		path: '/best',
		name: 'Best',
		component: () => import('@/pages/best/Index.vue'),
	},

	/** 랭킹 */
	{
		path: '/ranking',
		component: () => import('@/features/ranking/Index.vue'),
		children: [
			{
				path: '',
				name: 'RankingMain',
				// exact: true,
				component: () => import('@/features/ranking/typeA/RankingMain.vue'),
			},
			{
				path: 'item',
				name: 'RankingItem',
				component: () => import('@/features/ranking/typeA/RankingItem.vue'),
			},
			{
				path: 'brand',
				name: 'RankingBrand',
				component: () => import('@/features/ranking/typeA/RankingBrand.vue'),
			},
			{
				path: 'view',
				name: 'RankingView',
				component: () => import('@/features/ranking/typeA/RankingView.vue'),
			},
			{
				path: '/ranking/like',
				name: 'RankingLike',
				component: () => import('@/features/ranking/typeA/RankingLike.vue'),
			}
		]
	},

	/** 이벤트/프로모션/체험 */
	{
		path: '/event',
		name: 'Event',
		component: () => import('@/features/event/Index.vue'),
	},
	{
		path: '/event/:id(\\d+)',
		name: 'EventDetail',
		component: () => import('@/features/event/EventDetail.vue'),
	},
	{
		path: '/promotion/:id(\\d+)',
		name: 'Promotion',
		component: () => import('@/pages/promoDetail/Index.vue'),
	},
	{
		path: '/experience',
		name: 'Experience',
		component: () => import('@/features/experience/Index.vue'),
	},
	{
		path: '/experience/:id(\\d+)',
		name: 'ExperienceDetail',
		component: () => import('@/features/experience/ExperienceDetail.vue'),
	},

	/** 코디샷 */
	{
		path: '/codyshot',
		name: 'Codyshot',
		// query: { category: 0, page: 1 },
		component: () => import('@/features/codyshot/Index.vue'),
	},
	{
		path: '/codyshot/:id(\\d+)',
		name: 'CodyshotDetail',
		component: () => import('@/features/codyshot/CodyshotDetail.vue'),
	},

	/** 공동구매 */
	{
		path: '/coop',
		name: 'Coop',
		component: () => import('@/features/coop/Index.vue'),
	},

	/** 래플 */
	{
		path: '/raffle',
		name: 'Raffle',
		component: () => import('@/features/raffle/Index.vue'),
	},
	{
		path: '/raffle/closed',
		name: 'RaffleFinList',
		component: () => import('@/features/raffle/RaffleEnd.vue'),
	},

	/** 쇼케이스 */
	{
		path: '/showcase',
		name: 'Showcase',
		// query: { category: 0, page: 1 },
		component: () => import('@/features/showcase/Index.vue'),
	},
	{
		path: '/showcase/:id(\\d+)',
		name: 'ShowcaseDetail',
		component: () => import('@/features/showcase/ShowcaseDetail.vue'),
	},

	/** 오류 */
	{
		path: '/:pathMatch(.*)*',
		name: 'Error',
		meta: {
			layout: 'L=error',
			isShowHeader: false,
			isShowFooter: false,
		},
		component: () => import('@/pages/error/Index.vue'),
	},
	{
		path: '/error/IE',
		name: 'ErrorIE',
		meta: {
			isShowHeader: false,
			isShowFooter: false,
		},
		component: () => import('@/pages/error/ErrorIE.vue'),
	},

	/** 약관 */
	{
		path: '/policy/service',
		name: 'PolicyService',
		component: () => import('@/pages/policy/PolicyService.vue'),
	},
	{
		path: '/policy/privacy',
		name: 'PolicyPrivacy',
		component: () => import('@/pages/policy/PolicyPrivacy.vue'),
	},
];

export default routes;