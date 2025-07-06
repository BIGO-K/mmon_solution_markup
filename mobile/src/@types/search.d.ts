/** 인기검색어 */
declare interface HotSearchAPI {
	indexed_at: string;
	hot_search_words: {
		rank: number;
		previous_rank: number;
		keyword: string;
		change_type: string;
		change_rank: number;
	}[];
}

/** 검색결과 */
declare interface SearchAPI {
	brand: {
		id: number;
		name: string;
		kor_name: string;
		eng_name: string;
	}
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: ProductItemData[];
	};
	best_goods: ProductItemData[];
	is_corrected: boolean;
	corrected_keyword: string;
	origin_keyword: string;
	related_keywords: string[];
}