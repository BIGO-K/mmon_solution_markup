/** 카드사별 혜택 */
declare interface CardInterestAPI {
	interest_info: {
		interest_free_list: {
			image_url: string;
			image_alt: string;
			info: string;
			card_code: number;
		}[];
		partial_interest_list: {
			image_url: string;
			image_alt: string;
			info: string;
			card_code: number;
		}[];
		display_start_at: string;
		display_end_at: string;
	}
}