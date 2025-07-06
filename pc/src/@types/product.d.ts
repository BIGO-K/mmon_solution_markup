/** 최근 본 상품 */
declare interface RecentViewProductAPI {
	recent_view_goods: {
		id: number;
		name: string;
		brand_name: string;
		thumbnail_url: string;
		base_discounted_price: number;
		sale_rate: number;
		is_soldout: boolean;
	}[];
}

/** 상품 총 개수 */
declare interface ProductTotalCountAPI {
	total_count: number;
}

/** 상품리스트 - 페이지네이션 */
declare interface ProductListAPI {
	paginator: {
		per_page: number;
		current_page: number;
		data: ProductItemData[];
	};
}

/** 베스트 */
declare interface BestProductAPI {
	best_goods: ProductItemData[];
}

/** 이벤트 상세 상품 그룹 */
declare interface EventProductAPI {
	group_goods: ProductItemData[];
}

/** 기획전 상세 상품 그룹 */
declare interface PromotionProductAPI {
	planning_group_goods: ProductItemData[];
}

declare interface ProductItemBaseData extends ProductItemHeadline {
	id: number;
	name: string;
	price: number;
	base_discounted_price: number;
	sale_rate: number;
	thumbnail_url: string;
	mouse_over_image_url: string;
	stock: number;
	is_only_adult: boolean;
	is_soldout: boolean;
	brand_id: number;
	brand_name: string;
	icon: ProductItemIcon | null;
	is_use_stock_notify?: boolean; // TODO 재입고 알림 사용여부 다른 페이지 사용 여부 체크 필요함
}

declare interface ProductItemOptionData {
	badges: string[];
	wish_count: number;
	review_count: number;
	review_score_average: number;
}

declare type ProductItemData = ProductItemBaseData & Partial<ProductItemOptionData>;

/** 상품아이템 - 말머리 */
declare interface ProductItemHeadline {
	headline: string | null;
}

/** 상품아이템 - 상품아이콘 */
declare interface ProductItemIcon {
	label: string;
	background_color_code: string;
	font_color_code: string;
}

/** 상품상세 */
declare interface ProductDetailAPI {
	goods: ProductDetailGoods;
}

/** 상품상세 - 상품정보 */
declare interface ProductDetailGoods extends ProductDetail360 {
	name: string;
	brand_name: string;
	thumbnail_urls: string[];
	is_use_seller_shop: boolean;
	delivery_info: ProductDetailSellerDelivery;
	return_delivery_info: ProduceDetailSellerReturn;
	seller_id: number;
	headline: string;
}

/** 상품상세 - 상품 정보 - 360도 이미지 리스트 */
declare interface ProductDetail360 {
	degree_360_image_urls: string[];
}

/** 상품상세 - stock */
declare interface ProductDetailStockAPI {
	stock: number;
	is_soldout: boolean;
}

/** 타임딜 */
declare interface TimedealAPI {
	sell_start_at: string;
	sell_end_at: string;
	max_orderable_count: number;
}

/** 상품상세 - aggregate */
declare interface ProductDetailAggregatekAPI {
	reviewer_count: number;
	total_review_count: number;
	review_average_star: number;
	satisfaction: number;
	total_qna_count: number;
	wish_count: number;
}

/** 상품상세 -  가격 프로모션 정보 */
declare interface ProductDetailPromotionAPI {
	price: number;
	sell_price: number;
	base_discounted_price: number;
	sale_rate: number;
	night_sale_amount: number;
	is_downloadable_coupon: boolean;
	highest_downloadable_coupon_amount: number;
	immediately_sale_amount: number;
	time_sale_amount: number;
	max_discounted_price: number;
	purchasable: boolean;
	event_info: {
		price: number;
		amount_type: string;
		amount: number;
	}
}

/** 상품상세 -  옵션 */
declare interface ProductDetailOptionAPI {
	options: {
		name: string;
		sub: {
			name: string;
			qty: number;
			code: number;
			extra_amount: number;
		}[];
	}[];
}

/** 상품상세 - 추천 아이템 */
declare interface ProductDetailRecommendAPI {
	goods_packages: {
		goods_id: number;
		base_discounted_price: number;
		name: string;
		is_only_adult: boolean;
		thumbnail_url: string;
		is_soldout: boolean;
		brand_name: string;
		stock: number;
		sale_rate: number;
	}[];
}

/** 상품상세 하단 - 추천 상품 */
declare interface ProductCategoryBestAPI {
	category_best_goods: ProductDetialItem[];
}

/** 상품상세 하단 - 브랜드 인기상품 */
declare interface ProductBrandBestAPI {
	brand_best_goods: ProductDetialItem[];
}

/** 상품상세 - 아이템 공통 */
interface ProductDetialItem {
	id: number;// MINT에는 goods_id로 표기되어 있음 확인 필요
	base_discounted_price: number;
	name: string;
	is_only_adult: boolean;
	thumbnail_url: string;
	is_soldout: boolean;
	brand_name: string;
	stock: number;
	sale_rate: number;
}

/** 상품상세 - 상세정보 탭 */
declare interface ProductDetailInfoAPI {
	top_banners: {
		contents: string;
		image_url: string;
		image_alt: string;
		is_editor_use: boolean;
	}[];
	bottom_banners: {
		is_editor_use: boolean;
		contents: string;
		image_url: string;
		image_alt: string;
	}[];
	video_url: string;
	detail_info: string;
	mandatory: {
		title: string;
		content: string;
	}[];
	use_state_label: string;
	origin_label: string;
}

/** 상품상세 - 리뷰 탭 */
declare interface ProductReviewAggregateAPI {
	reviewer_count: number;
	total_review_count: number;
	review_average_star: number;
	satisfaction: number;
	total_qna_count: number;
	wish_count: number;
}

/** 상품상세 - 리뷰 탭 리뷰 리스트 */
declare interface ProductReviewListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			contents: string;
			rate: number;
			is_photo_review: boolean;
			option_name: string;
			image_urls: string[] | null;
			created_at: string;
			writer_grade_label: string;
			writer_grade_image_url: string;
			writer_masking_id: string;
			id: number;
			height: number | null;
			weight: number | null;
			shoes_size: number | null;
			is_experience_group: boolean;
			templates: ProductReviewtemplate[];
		}[];
	};
}

declare interface ProductReviewtemplate {
	id: number;
	title: string;
	selected_label: string;
}

/** 상품상세 - 리뷰 탭 포토 리뷰 리스트 */
declare interface ProductReviewPhotoListAPI {
	paginator: {
        total: number;
        per_page: number;
        current_page: number;
        data: {
			id: number;
			image_url: string;
			writer_masking_id: string;
		}[];
    };
}

/** 상품상세 - 포로리뷰상세 모달 */
declare interface PhotoReviewDetailAPI {
	photo_review: {
		id: number;
		contents: string;
		rate: number;
		option_name: string;
		image_urls: string[];
		created_at: string;
		writer_grade_image_url: string;
		writer_grade_label: string;
		writer_masking_id: string;
	};
	next_review_id: number;
	prev_review_id: number;
}

/** 상품상세 - Q&A 탭 */
declare interface ProductQnaListAPI {
	total: number;
	current_page: number;
	per_page: number;
	data: {
		id: number;
		title: string;
		created_at: string;
		contents: string;
		is_editable: boolean;
		is_reply: boolean;
		is_private: boolean;
		answer: {
			created_at: string;
			contents: string
		};
		is_readable: boolean;
	}[];
}

/** 판매지 정보 탭 - 배송정보 */
declare interface ProductDetailSellerDelivery {
	shipping_company: string;
	shipping_price: number;
	is_free_delivery: boolean;
	conditional_free_price: number;
	extra_shipping_price: number;
	is_package_delivery: boolean;
	today_exportable_message: string;
	is_conditional_free_delivery: boolean;
	shipping_center_name: string;
	shipping_arrival_probability: {
		average_date: string;
		probability: string;
	};
}

/** 판매지 정보 탭 - 반품 업체 정보 */
declare interface ProduceDetailSellerReturn {
	shipping_company: string;
	tel: string;
	return_address: string;
	ceo_name: string;
	return_shipping_price: number;
}

/** 상품상세 - 다운로드 가능 쿠폰 조회 */
declare interface ProductCouponDownListAPI {
	coupon: {
		id: number;
		name: string;
		expiration_date_message: string;
		downloadable: boolean;
		usable_device_labels: string[];
	}[];
}

/** 상품상세 - 사은품 상세 조회 */
declare interface ProductGiftDetailAPI {
	name: string;
	condition_label: string;
	image_url: string;
	image_alt: string;
	start_at: string;
	end_at: string;
}