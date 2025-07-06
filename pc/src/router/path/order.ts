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
		component: () => import('@/pages/order/Index.vue'),
	},
	{
		path: '/order/complete',
		name: 'OrderComplete',
		component: () => import('@/pages/order/OrderComplete.vue'),
	},
	{
		path: '/order/fail',
		name: 'OrderFail',
		component: () => import('@/pages/order/OrderFail.vue'),
	},
];

export default routes;