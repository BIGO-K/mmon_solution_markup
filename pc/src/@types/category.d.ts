interface CategoryItem {
	code: string;
	depth: number;
	full_path: string;
	name: string;
	image_url: string;
	alt: string;
	pc_top_image_url: string;
	pc_top_alt: string | null;
	mobile_top_image_url: string;
	mobile_top_alt: string | null;
	children?: CategoryBase[];
}

declare interface CategoryListAPI {
	category_list: CategoryItem[];
}

/** 카테고리 필터 목록 */
declare interface ProductCategoryFilterAPI {
	filters: {
		brands: {
			id: number;
			name: string;
			goods_count: number;
		}[];
		fit_sizes: {
			id: number;
			label: string;
		}[];
		shoes_sizes: {
			id: number;
			label: string;
		}[];
		colors: {
			id: number;
			code: string;
			label: string;
		}[];
	}
}