declare interface RecentCodyshotListAPI {
	recent_cody_shots: {
		id: number;
		title: string;
		brand_name: string;
		thumbnail_url: string;
		alt: string;
	}[];
}

declare interface CodyshotCategoryiesAPI {
	cody_shot_categories: {
		id: number;
		name: string;
	}[];
}

declare interface CodyshotListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			title: string;
			brand_name: string;
			thumbnail_url: string;
			alt: string;
		}[];
	};
}

/** 코디샷 상세 */
declare interface CodyshotDetailAPI {
	cody_shot: {
		id: number;
		title: string;
		sub_title: string;
		brand_name: string;
		thumbnail_url: string;
		alt: string;
		pointers: {
			order_seq: number;
			x: number;
			y: number;
			goods: ProductItemData;
		}[];
		created_at: string;
	}
}