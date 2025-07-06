/** 브랜드맵 - 카테고리 */
declare interface BrandCategoriesAPI {
	brand_categories: {
		id: number;
		name: string;
	}[];
}

/** 브랜드맵 - 리스트 */
declare interface BrandListAPI {
	brands: {
		id: number;
		eng_name: string;
		kor_name: string;
		brand_category_ids: number[];
	}[];
}

/** 브랜드샵 */
declare interface BrandShopAPI {
	top_pc_image_url: string;
	top_mobile_image_url: string;
	main_text: string;
	sub_text: string;
	brand_name: string;
	curations: ProductItemData[];
	brand_contents: BrandshopShowcaseAPI[];
	is_use_recommended_goods: boolean;
}

/** 브랜드샵 - 쇼케이스 */
declare interface BrandshopShowcaseAPI {
	id: number;
	title: string;
	image_url: string;
	image_alt: string;
	main_text_1: string;
	main_text_2: string;
}