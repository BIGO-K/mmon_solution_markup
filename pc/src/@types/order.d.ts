/** 장바구니 */
declare interface CartListAPI {
	packs: {
		items: {
			cart_id: number;
			ea: number;
			goods_id: number;
			goods_name: string;
			goods_type: string;
			goods_stock: number;
			goods_sell_price: number;
			goods_base_discounted_price: number;
			goods_thumbnail_url: string;
			option_id: number;
			option_name: string;
			option_extra_amount: number;
			option_stock: number;
			brand_id: number;
			brand_name: string;
			is_soldout: boolean;
			goods_headline: string;
			seller_id: number;
			seller_name: string;
		}[];
		is_charge_on_each: boolean;
		shipping_rule_title: string;
		shipping_price_policy: number;
		shipping_price: number;
		extra_shipping_price: number;
		conditional_free_from: number;
	}[];
}

/** 주문결제 */
declare interface OrderPaymentListAPI {
	need_personal_clearance_code: boolean;
	orderer_information: {
		email: string | null;
		phone: string | null;
		personal_clearance_code: string | null;
		point_balance: string | null;
		latest_payment_method_code: number | null;
		latest_payment_card_code: string | null;
		latest_payment_bank_code: number | null;
		latest_payment_depositor_name: string | null;
		latest_cash_receipt_apply_type: number | null;
		latest_cash_receipt_apply_key: string | null;
		latest_shipping_message: string | null;
	} | null;
	packs: {
		items: {
			goods_id: number;
			goods_name: string;
			goods_headline: string;
			goods_type: string;
			goods_list_price: number;
			goods_sell_price: number;
			goods_base_discounted_price: number;
			goods_thumbnail_url: string;
			night_sale_id: number | null;
			night_sale_amount: number;
			option_id: number;
			option_name: string;
			option_extra_amount: number;
			brand_id: number;
			brand_name: string;
			seller_id: number;
			seller_name: string;
			usable_coupon_regists: {
				regist_id: number;
				coupon: {
					id: number;
					title: string;
					discount_amount: number;
					discount_type: string;
					maximum_discount_amount: number;
					expire_at: string;
				};
			}[];
		}[];
		shipping_rule_id: number;
		shipping_rule_title: string;
		shipping_type: number;
		shipping_price_payment_type: number;
		shipping_price_policy: number;
		shipping_price: number;
		extra_shipping_price: number;
		charged_shipping_price: number;
		conditional_free_from: number;
		condition_amount: number;
	}[];
	giveaway_groups: {
		giveaways: {
			id: number;
			name: string;
			condition_label: string;
			image_url: string;
			image_alt: string;
		}[];
		goods_id: number;
	}[];
}