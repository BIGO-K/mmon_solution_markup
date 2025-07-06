declare interface CoopProductListAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			id: number;
			goods_id: number;
			goods_name: string;
			thumbnail_url: string;
			brand_id: number;
			brand_name: string;
			logo_image_url: string;
			price: number;
			joint_purchase_price: number;
			target_count: number;
			participant_count: number;
			is_target_achieve: boolean;
			target_at: string;
			target_achieve_rate: number;
			is_only_adult: false
		}[];
	};
}