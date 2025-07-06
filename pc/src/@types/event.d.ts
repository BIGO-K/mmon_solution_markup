declare interface EventListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			title: string;
			description: string;
			image_url: string;
			start_at: string;
			end_at: string;
			is_use_detail_url: boolean;
			detail_url: string;
			alt: string;
		}[];
	};
}

/** 이벤트 상세 */
declare interface EventDetailAPI {
	special_event: {
		id: number;
		title: string;
		description: string;
		image_url: string;
		alt: string;
		contents_type: string;
		contents_html: string;
		contents_image_url: string;
		contents_image_alt: string;
		is_commentable: boolean;
		goods_groups: {
			title: string;
			id: number;
		}[];
		start_at: string;
		end_at: string;
	}
}

/** 이벤트 상세, 기획전 상세 - 댓글리스트 */
declare interface CommentAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			contents: string;
			is_private: boolean;
			is_editable: boolean | null;
			writer_grade_image_url: string;
			writer_masking_login_id: string;
			created_at: string;
			writer_grade_level: number;
		}[]
	}
}

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