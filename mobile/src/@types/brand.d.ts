/** 브랜드샵 */
declare interface BrandshopAPI {
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