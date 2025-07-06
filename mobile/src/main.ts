import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useConfigStore } from '@/store/config';
import App from './App.vue';
import router from '@/router';

const app = createApp(App)
	.use(createPinia());

(async () => {

	// TODO 공통 fetch 및 import 통합
	await useConfigStore().fetchAPI();

	app.use(router)
		.mount('#app');

})();

console.log(' 기업가치를 높이는 IT기술 \n Solution developed by 엠몬스타(https://www.mmonstar.co.kr)\n' + '%c M.MONSTAR!', 'font-weight: bold; font-size: 16px; color: rgba(0, 139, 148, 1); text-shadow: 1px 1px 0 rgba(201, 255, 154, 1) , 2px 2px 1px rgba(19, 169, 132, 1)');