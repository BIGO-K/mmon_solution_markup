declare interface ShowcaseCategoriesAPI {
	sort_list: {
		id: number;
		name: string;
	}[];
}

declare interface ShowcaseListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			first_words: string;
			second_words: string;
			thumbnail_url: string;
			brand_id: number;
			brand_name: string;
			sort_id: number;
			sort_name: string;
			title: string;
		}[];
	};
}

/** 쇼케이스 상세 */
declare interface ShowcaseDetailAPI{
	showcase_information: {
        id: number;
        title: string;
        created_at: string;
        mobile_banner_url: string;
        mobile_banner_alt: string;
        pc_banner_url: string;
        pc_banner_alt: string;
        sub_title: string;
        first_words: string;
        second_words: string;
        details: string;
        is_video: false,
        video_url: string;
        brand_id: number;
        brand_name: string;
        logo_image_url: string;
        groups: [
            {
                id: number;
                mobile_image_url: string;
                mobile_image_alt: string;
                pc_image_url: string;
                pc_image_alt: string;
                goods_list: ProductItemData[];
            }
        ]
    }
}

/** 쇼케이스 상세 View More */
declare interface ShowcaseMoreAPI {
	list_by_sort: {
		id: number;
		title: string;
		thumbnail_url: string;
		sort_id: number;
		sort_name: string;
	}[];
}