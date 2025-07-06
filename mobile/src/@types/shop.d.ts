declare interface ShopInfoAPI {
	shop: {
		name: string;
		eng_name: string;
		business_number: string;
		sell_account: string;
		ceo_name: string;
		tel: string;
		privacy_manager: string;
		base_address: string;
		detail_address: string;
		homepage_url: string;
		payment_service_info_url: string;
		copyright_text: string;
		business_service_info_url: string;
		bank_owner_name: string;
		cs_tel: string;
		cs_email: string;
		cs_lunch_time: string;
		cs_fax_number: string;
		kakao_cs_weekday: string;
		kakao_cs_time: string;
		instagram_link: number;
		facebook_link: number;
		youtube_link: number;
		naver_blog_link: number;
		kakao_friend_name: string;
		cs_weekday: string;
		cs_time: string;
		kakao_channel_link: string;
		use_renewal: string;
	};
	point: {
		label_name: string;
		suffix: string;
		max_usable_amount: number;
		max_usable_amount_type: string;
		min_usable_balance: number;
	};
	paid_features: {
		reward: boolean;
		personalization: boolean;
		review_template: boolean;
		ranking: boolean;
		time_deal: boolean;
		cody_shot: boolean;
		showcase: boolean;
		raffle: boolean;
		joint_purchase: boolean;
		special_event: boolean;
		experience_review: boolean;
		social_login: boolean;
		usable_social_logins: string[];
		active_easypays: string[];
		reward_policies: {
			delivery_delay_reward_policies: {
				day: number;
				reward_rate: number;
			}[];
			soldout_cancel_reward_policies: {
				day: number;
				reward_rate: number;
			}[];
			maximum_reward_price: number;
			use_delivery_delay_penalty: boolean;
			use_soldout_cancel_penalty: boolean;
		} | null;
		my_pay: boolean;
	}
}