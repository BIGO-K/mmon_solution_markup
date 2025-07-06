/** 체험단 리스트 */
declare interface ExperienceListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			title: string;
			thumbnail_url: string;
			grade: number;
			writer: string;
			recommendation_count: number;
			view_count: number;
			created_at: string;
		}[];
	};
}

/** 체험단 상세 */
declare interface ExperienceDetailAPI {
	detail: {
		id: number;
		title: string;
		writer: string;
		created_at: string;
		view_count: number;
		goods_id: number;
		goods_name: string;
		goods_thumbnail_url: string;
		base_discounted_price: number;
		brand_name: string;
		grade: number;
		height: number;
		weight: number;
		shose_size: number;
		contents: string;
		templates: ProductReviewtemplate[];
		recommendation_count: number;
		image_url_list: string[];
	};
}