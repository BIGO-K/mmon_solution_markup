import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import base from '@/router/path/base';
import cs from '@/router/path/cs';
import guest from '@/router/path/guest';
import user from '@/router/path/user';
import mypage from '@/router/path/mypage';
import order from '@/router/path/order';

const routes: RouteRecordRaw[] = [...base, ...user, ...order, ...mypage, ...cs, ...guest];

export default createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(__to, __from, __position) {

		// 히스토리 이동
		if (__position != null) return __position;
		// query 이동
		else return (__to.path === __from.path) ? null : { top: 0, left: 0 };

	}
});