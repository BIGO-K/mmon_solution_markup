import { defineStore } from 'pinia';
import Api from '@markup/api';

let api: LatelyViewProductAPI | undefined;

export const useLatelyStore = defineStore(`lately`, {
	getters: {
		async product() {

			if (api == null) api = await Api.get<LatelyViewProductAPI>(`MEMBER_RECENT_VIEW_GOODS`);

			return api;

		}
	}
});