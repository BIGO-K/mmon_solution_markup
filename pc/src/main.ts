import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useCategoryStore } from '@/store/category';
import { useConfigStore } from '@/store/config';
import { useUserStore } from '@/store/user';
import App from '@/App.vue';
import router from '@/router';

router.beforeEach((__to, __from, __next) => {

	// 로그인 필요
	if (__to.matched.some(__record => __record.meta.requiresAuth)) {
		if (!useUserStore().isLogin) {
			__next({ name: 'Login', query: { redirect: __to.name } });
		}
		else __next();
	}
	else __next();

});

const app = createApp(App)
	.use(createPinia());

(async () => {

	// TODO 공통 fetch 및 import 통합
	await useCategoryStore().fetchAPI();
	await useConfigStore().fetchAPI();

	app.use(router)
		.mount('#app');

})();

console.log(' 기업가치를 높이는 IT기술 \n Solution developed by 엠몬스타(https://www.mmonstar.co.kr)\n' + '%c M.MONSTAR!', 'font-weight: bold; font-size: 16px; color: rgba(0, 139, 148, 1); text-shadow: 1px 1px 0 rgba(201, 255, 154, 1) , 2px 2px 1px rgba(19, 169, 132, 1)');