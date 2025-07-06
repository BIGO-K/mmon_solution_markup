import { defineStore } from 'pinia';

interface State {
	name: string | null;
}

export const useUserStore = defineStore('userStore', {
	state: (): State => ({
		// XXX 테스트 후 null로 변경
		name: 'ok', //null,
	}),
	getters: {
		isLogin: (__state) => __state.name != null,
	}
});