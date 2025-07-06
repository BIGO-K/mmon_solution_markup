import { defineStore } from 'pinia';
import Api from '@markup/api';

interface State {
	config: ShopInfoAPI;
}

export const useConfigStore = defineStore(`configStore`, {
	state: (): State => ({
		config: null,
	}),
	getters: {
		configShop: __state => __state.config.shop,
		configPoint: __state => __state.config.point,
		configFeature: __state => __state.config.paid_features,
	},
	actions: {
		async fetchAPI() {

			if (this.config == null) this.config = await Api.get<ShopInfoAPI>(`CONF_INITIAL_SETTINGS`);

		}
	}
});