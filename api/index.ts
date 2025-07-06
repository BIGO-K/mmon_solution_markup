import apiMap from 'apimap';

class Api {

    /**
     * api(json) 로드
     * @param { ApiKey } __key - apiMap으로 탐색할 키
     * @param { { value: unknown } } [__ref] - 저장할 반응형 타겟, 저장하는 쪽에서 async await를 한번 더 선언하지 않고 사용
     * @param { string } [__query] - api경로에 ?querystring 추가가 필요할 때 적용
	 * @returns { T }
     */
	public static async get<T>(__key: ApiKey, __ref?: { value: unknown }, __query?: string): T {

		let apiItem = apiMap[__key];
		if (apiItem == null) throw new Error(`${__key}에 연결된 API를 찾을 수 없습니다`);

		apiItem = `${apiItem}${(__query != null) ? __query : ``}`;
		const data = await import(/* @vite-ignore */ apiItem);
		// const response = await fetch(apiItem);
		// const data = await response.json();
		if (__ref != null) __ref.value = data.default;

		return data.default;

	}

	/**
	 * api(json) 전체 로드
	 * @param { ApiKey } _items.key - apiMap으로 탐색할 키
     * @param { { value: unknown } } [_items.ref] - 저장할 반응형 타겟, 저장하는 쪽에서 async await를 한번 더 선언하지 않고 사용
     * @param { string } [_items.query] - api경로에 ?querystring 추가가 필요할 때 적용
	 * @returns { unknown[] }
	 */
	public static async getAll(__items: { key: ApiKey, ref?: { value: unknown }, query?: string }[]): unknown[] {

		return await Promise.all(__items.map(__item => Api.get(...Object.values(__item))));

	}

}

export default Api;