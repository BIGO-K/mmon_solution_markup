/** 상품상세 - 사은품 상세 조회 */
declare interface ProductGiftDetailAPI {
	name: string;
	condition_label: string;
	image_url: string;
	image_alt: string;
	start_at: string;
	end_at: string;
}

/** 사은품 대상 상품 */
declare interface GiftTargetProductAPI {
	total: number;
	current_page: number;
	per_page: number;
	data: {
		id: number;
		name: string;
		headline: string;
		brand_name: string;
		thumbnail_url: string;
	}[];
}