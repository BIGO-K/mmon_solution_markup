/** 응모 가능 디바이스 */
declare type RaffleDeviceType = 'M_APP' | 'M_WEB' | 'PC';

/** 래플리스트 */
declare interface RaffleListAPI {
	raffle_list: {
		id: string;
		available_device_list: Array<RaffleDeviceType>;
		start_at: string;
		end_at: string;
		notice_at: string;
		buy_start_at: string;
		buy_end_at: string;
		total_entry_count: number;
		goods: {
			id: number;
			thumbnail_url: string;
			name: string;
			brand_name: string;
			price: number;
			base_discounted_price: number;
			sale_rate: number;
			is_only_adult: boolean;
		},
		is_entry: boolean;
		is_confirmed_winner: boolean;
	}[];
}

/** 종료된 래플리스트 */
declare interface RaffleEndListAPI {
	paginator: {
        total: number;
        current_page: number;
        per_page: number;
        data: {
			id: number;
			total_entry_count: number;
			goods: {
				id: number;
				thumbnail_url: string;
				name: string;
				brand_name: string;
				price: number;
				base_discounted_price: number;
				sale_rate: number;
			},
			is_confirmed_winner: false
		}[];
    };
}