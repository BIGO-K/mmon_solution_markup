/** 기획전 상세 */
declare interface PromotionAPI {
	planning: {
        id: number;
        title: string;
        is_use_comment: boolean;
        sections: {
			id: number;
			pc_html: string;
			mobile_html: string;
			goods_list: ProductItemData[];
		}[];
        groups: {
			id: number;
			title: string;
			has_pc_image: boolean;
			pc_link: string;
			pc_image_url: string;
			pc_alt: string;
			has_mobile_image: false,
			mobile_link: string;
			mobile_image_url: string;
			mobile_alt: string;
		}[];
    };
}

/** 기획전 상세 상품 그룹 */
declare interface PromotionProductAPI {
	planning_group_goods: ProductItemData[];
}