import { defineStore } from 'pinia';
import Api from '@markup/api';

interface State {
	categories: CategoryListAPI;
}

export const useCategoryStore = defineStore(`categoryStore`, {
	state: (): State => ({
		categories: null,
	}),
	getters: {
		categoryItems: __state => __state.categories.category_list,
	},
	actions: {
		async fetchAPI() {

			if (this.categories == null) this.categories = await Api.get<CategoryListAPI>(`GOODS_DISPLAY_ALL_CATEGORIES`);

		}
	}
});