import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	/** 장바구니 */
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('@/pages/cart/Index.vue'),
	},

	/** 주문 */
	{
		path: '/order',
		name: 'Order',
		meta: {
			layouts: ['L=popup', 'L=lowbtn']
		},
		component: () => import('@/pages/order/Index.vue'),
	},
	{
		path: '/order/fin',
		name: 'OrderFin',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/order/OrderFin.vue'),
	},
	{
		path: '/order/coupon',
		name: 'OrderCoupon',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/pages/order/OrderCoupon.vue'),
	},
	{
		path: '/address-register',
		name: 'OrderAddressRegister',
		meta: {
			layouts: ['L=popup']
		},
		component: () => import('@/components/popup/AddressRegister.vue'),
	},
];

export default routes;