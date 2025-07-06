/** 최근 본 상품 */
declare interface LatelyViewProductAPI {
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

/** 상품 아이템 공통 */
declare interface ProductItemData extends Partial<ProductItemHeadline> {
	id?: number;
	name?: string;
	price?: number;
	base_discounted_price?: number;
	sale_rate?: number;
	thumbnail_url?: string;
	mouse_over_image_url?: string;
	stock?: number;
	is_only_adult?: boolean;
	is_soldout?: boolean;
	brand_id?: number;
	brand_name?: string;
	icon?: ProductItemIcon | null;
	is_use_stock_notify?: boolean;
	badges?: string[];
	wish_count?: number;
	review_count?: number;
	review_score_average?: number;
}

/** 상품아이템 - 말머리 */
declare interface ProductItemHeadline {
	headline: string | null;
}

/** 상품상세 하단 - 추천 상품 */
declare interface ProductCategoryBestAPI {
	category_best_goods: ProductItemData[];
}

/** 상품상세 하단 - 브랜드 인기상품 */
declare interface ProductBrandBestAPI {
	brand_best_goods: ProductItemData[];
}

/** 상품아이템 - 상품아이콘 */
declare interface ProductItemIcon {
	label: string;
	background_color_code: string;
	font_color_code: string;
}

/** 상품상세 */
declare interface ProductDetailAPI {
	goods: ProductDetail;
}

declare interface ProductDetail extends ProductDetail360, ProductItemHeadline {
	name: string;
	brand_id: number;
	brand_name: string;
	thumbnail_urls: string[];
	review_average_star: number;
	headline: string;
	total_review_count: number;
	seller_id: number;
	is_use_seller_shop: boolean;
	delivery_info: ProductDetailSellerDelivery;
	return_delivery_info: ProduceDetailSellerReturn;
	shipping_arrival_probability: {
		average_date: string;
		probability: number;
	};
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

/** 상품상세 - aggregate */
declare interface ProductDetailAggregatekAPI {
	reviewer_count: number;
	total_review_count: number;
	review_average_star: number;
	satisfaction: number;
	total_qna_count: number;
	wish_count: number;
}

/** 상품상세 - 추천 아이템 */
declare interface ProductDetailRecommendAPI {
	goods_packages: {
		goods_id: number;
		base_discounted_price: number;
		name: string;
		is_only_adult: boolean;
		thumbnail_url: string;
		is_soldout:	boolean;
		brand_name: string;
		stock: number;
		sale_rate: number;
	}[];
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
	seller_holiday_message: string;
	seller_holiday: {
		reason: string;
		start_at: string;
		end_at: string;
		release_at: string;
	} | null;
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

/** 상품상세 - 리뷰 탭 베스트 리뷰 리스트 */
declare interface ProductBestReviewListAPI {
	best_review: {
		id: number;
		contents: string;
		rate: number;
		is_photo_review: boolean;
		option_name: string;
		image_urls: string[];
		writer_grade_label: string;
		writer_grade_image_url: string;
		writer_masking_id: string;
		created_at: string;
	}[];
	next_best_review_id: number;
	prev_best_review_id: number;
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

declare interface ProductReviewZoomImageListAPI {
	image_urls: string[];
}

/** 체험단 후기 > 작성 가능한 상품 리스트 조회 */
declare interface ExperienceReviewableProductListAPI {
	goods_list: {
		id: number;
		name: string;
		brand_name: string;
		thumbnail_url: string;
		option_list: {
			id: number;
			name: string;
		}[];
	}[];
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