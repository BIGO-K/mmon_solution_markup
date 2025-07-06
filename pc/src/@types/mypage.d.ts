/** 1:1 문의 가능 주문 조회 */
declare interface MemberQnaOrdersAPI {
	orders: {
		order_id: string;
		ordered_at: string;
		items: {
			id: number;
			goods_name: string;
			option_name: string;
		}[];
	}[];
}

/** 회원정보 */
declare interface MemberInfoAPI {
	user: {
		name: string;
		grade: {
			id: number;
			name: string;
			image_url: string;
		};
	};
}

/** 보유 쿠폰, 적립금 */
declare interface MemberBenefitAPI {
	benefits: {
		point: number;
		coupon_count: number;
	};
}

/** 등급 조건 */
declare interface MemberGradeConditionAPI {
	grade_up_condition: {
		order_amount: number;
		order_count: number;
		grade_up_order_amount_condition: number;
		grade_up_order_count_condition: number;
		next_grade_name: string;
		is_top_level: boolean;
		grade_up_calculation_period_month: number;
	};
}

/** 등급별 조건 및 적립율, 쿠폰 안내 */
declare interface MemberGradeBenefitAPI {
	grades: {
		id: number;
		name: string;
		image_url: string;
		grade_up_sell_price_condition: number;
		grade_up_sell_amount_condition: number;
		purchase_benefit_rate: number;
		coupons: {
			id: number;
			discount_amount: number;
			discount_type: string;
			download_limit: number;
			is_unlimited: boolean;
		}[] | null;
	}[];
}

/** 메인 진행중인 주문 */
declare interface MemberOngoingOrderAPI {
	orders: {
		pay_ready: {
			count: number;
		};
		paid: {
			count: number;
		};
		delivery_ready: {
			count: number;
		};
		delivery_ing: {
			count: number;
		};
		delivery_complete: {
			count: number;
		};
		purchase_confirmed: {
			count: number;
		};
		cancel_count: number;
		return_count: number;
		exchange_count: number;
	};
}

/** 메인 최근 본 기획전 */
declare interface RecentPromotionAPI {
	recent_view_plannings: {
		id: number;
		title: string;
		is_ended: boolean;
	}[];
}

/** 메인 찜한 아이템 */
declare interface LikeProductAPI {
	paginator: {
		total: number;
		data: {
			id: number;
			name: string;
			brand_name: string;
			thumbnail_url: string;
			is_soldout: boolean;
		}[];
	};
}

/** 래플 응모 내역 */
declare interface RaffleEntryAPI {
	raffle_list: {
		id: number;
		progress_status: string;
		announce_at: string;
		purchase_start_at: string;
		purchase_end_at: string;
		is_winner: boolean;
		is_purchase: boolean;
		goods: {
			id: number;
			name: string;
			brand_name: string;
			thumbnail_url: string;
		};
	}[];
}

/** 혜택 관리 보유 쿠폰 */
declare interface BenefitCouponAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			id: number;
			is_usable: boolean;
			expire_at: string;
			use_start_at: string;
			registed_at: string;
			coupon: {
				id: number;
				title: string;
				discount_amount: number;
				discount_type: string;
				apply_range_type: string;
				min_sell_price: number;
				is_unlimited: boolean;
				maximum_discount_amount: number;
				usable_device_labels: Array<'M_APP' | 'M_WEB' | 'PC'>;
				type_label: string;
			}
		}[];
	}
}

/** 혜택 관리 보유 적립금 */
declare interface BenefitPointAPI {
	total_point_balance: number;
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			is_earned: boolean;
			point_amount: number;
			description: string;
			order_id: string | null;
			created_at: string;
			expire_at: string | null;
		}[];
	}
}

/** My 찜 찜한 아이템 폴더 */
declare interface LikeProductFolderAPI {
	wish_goods_folders: {
		id: number;
		name: string;
		order_seq: number;
		records_count: number;
		recent_goods_thumbnail_url: string | null;
	}[];
}

/** My 찜 찜한 아이템 상품 */
declare interface LikeProductAPI {
	wish_goods: {
		id: number;
		name: string;
		brand_name: string;
		thumbnail_url: string;
		base_discounted_price: number;
		sale_rate: number;
		is_soldout: boolean;
	}[];
}

/** My 찜 찜한 브랜드 */
declare interface LikeBrandAPI {
	wish_brands: {
		id: number;
		name: string;
		logo_image_url: string;
	}[];
}

/** 리뷰 관리 리뷰 집계 */
declare interface reviewCountAPI {
	reviews: {
		writables: number;
		written: number;
	};
}

/** 리뷰 관리 작성 가능한 리뷰 */
declare interface reviewAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			order_id: string;
			option_id: number;
			option_name: string;
			ea: number;
			goods: {
				id: number;
				name: string;
				brand_name: string;
				thumbnail_url: string;
			},
			ordered_at: string;
		}[];
	}
}

/** 리뷰 관리 작성한 리뷰 */
declare interface reviewWrittenAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			id: number;
			contents: string;
			rate: number;
			is_photo_review: boolean;
			image_urls: string[] | null;
			order_item: {
				order_id: number;
				option_id: number;
				option_name: string;
				ea: number;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
				};
			};
			created_at: string;
			updated_at: string | null;
			templates: {
				id: number;
				title: string;
				selected_label: string;
			}[];
		}[];
	};
}

/** 문의 관리 1:1 문의 */
declare interface InquiryAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			id: number;
			title: string;
			contents: string;
			goods: {
				id: number;
				name: string;
				brand_name: string;
				option_name: string | null;
				image_url: string;
			} | null;
			answer: {
				contents: string;
				created_at: string;
			} | null;
			created_at: string;
		}[];
	};
}

/** 문의 관리 판매자 문의 */
declare interface InquirySellerAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			id: number;
			title: string;
			contents: string;
			is_private: boolean;
			goods: {
				id: number;
				name: string;
				brand_name: string;
				option_name: string;
				thumbnail_url: string;
			} | null;
			answer: {
				contents: string;
				created_at: string;
			} | null;
			created_at: string;
		}[];
	};
}

/** 배송지연 신고 */
declare interface ClaimShipAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			order_id: string;
			paid_at: string;
			payment_method_label: string;
			packs: {
				sellers: {
					id: number;
					name: string;
					order_items: {
						id: number;
						order_status_label: string;
						paid_price: number;
						point_used: string;
						goods: {
							id: number;
							name: string;
							thumbnail_url: string;
							brand_name: string;
							option_name: string;
						};
					}[];
				}[];
				shipping_rule_id: number;
				paid_shipping_price: number;
			}[];
		}[];
	};
}

/** 배송지연 신고 배송지연 처리결과 */
declare interface ClaimShipResultAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			order_id: string;
			paid_at: string;
			payment_method_label: string;
			packs: {
				sellers: {
					id: number;
					name: string;
					order_items: {
						id: number;
						order_status_label: string;
						paid_price: number;
						process_status_label: string;
						reported_at: string;
						processed_at: string;
						is_unable_to_complete: boolean;
						is_complete: boolean;
						point_used: number;
						goods: {
							id: number;
							name: string;
							thumbnail_url: string;
							brand_name: string;
							option_name: string;
						};
					}[];
				}[];
				shipping_rule_id: number;
				paid_shipping_price: number;
			}[];
		}[];
	};
}

/** 배송지연 신고 */
declare interface ClaimSoldoutAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			order_id: string;
			paid_at: string;
			payment_method_label: string;
			packs: {
				shipping_rule_id: number;
				paid_shipping_price: number;
				sellers: {
					id: number;
					name: string;
					order_items: {
						id: number;
						order_status_label: string;
						paid_price: number;
						goods: {
							id: number;
							name: string;
							thumbnail_url: string;
							brand_name: string;
							option_name: string;
						};
						point_used: string;
					}[];
				}[];
			}[];
		}[];
	};
}

/** 품절취소 처리결과 */
declare interface ClaimSoldoutResultAPI {
	paginator: {
		total: number;
		per_page: number;
		current_page: number;
		data: {
			order_id: string;
			paid_at: string;
			payment_method_label: string;
			packs: {
				shipping_rule_id: number;
				paid_shipping_price: number;
				sellers: {
					id: number;
					name: string;
					order_items: {
						id: number;
						order_status_label: string;
						paid_price: number;
						point_used: string;
						process_status_label: string;
						reported_at: string;
						processed_at: string;
						is_unable_to_complete: boolean;
						is_complete: boolean;
						goods: {
							id: number;
							name: string;
							thumbnail_url: string;
							brand_name: string;
							option_name: string;
						}
					}[];
				}[];
			}[];
		}[];
	}
}

/** 회원정보 관리 */
declare interface MyEditInfoAPI {
	login_id: string;
	name: string;
	email: string;
	phone: string;
	birthday: string | null;
	is_email_receive: boolean;
	is_sms_receive: boolean;
}

/** 환불계좌 관리 */
declare interface MyRefundAccountAPI {
	refund_account: {
		owner_name: string;
		bank_name: string;
		bank_code: string;
		account_number: string;
	} | null;
}

/** 배송지 리스트 */
declare interface ReceiveAddressAPI {
	receive_addresses: {
		id: number;
		shipping_name: string;
		name: string;
		tel: string;
		zip_code: string;
		base_address: string;
		detail_address: string;
		is_recent: boolean;
	}[];
}

/** 주문관리 주문리스트 */
declare interface OrderListAPI {
	orders: {
		order_id: string;
		ordered_at: string;
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			sellers: {
				id: number;
				name: string;
				tel: string;
				order_items: {
					id: number;
					order_status_label: string;
					cancelable: boolean;
					delivery_trackable: boolean;
					receipt_confirmable: boolean;
					returnable: boolean;
					exchangeable: boolean;
					purchase_confirmable: boolean;
					review_writable: boolean;
					paid_price: number;
					delivery_tracking_url: string;
					goods: {
						id: number;
						name: string;
						brand_name: string;
						thumbnail_url: string;
						option_name: string;
						option_id: number;
					},
					earnable_point: number;
					point_used: number;
				}[];
			}[];
		}[];
	}[];
}

/** 주문관리 취소리스트 */
declare interface CancelListAPI {
	cancel_orders: {
		order_id: string;
		ordered_at: string;
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			sellers: {
				id: number;
				name: string;
				tel: string;
				order_items: {
					id: number;
					order_status_label: string;
					refund_status_label: string;
					paid_price: number;
					goods: {
						id: number;
						name: string;
						brand_name: string;
						thumbnail_url: string;
						option_name: string;
					};
					point_used: number;
				}[];
			}[];
		}[];
	}[];
}

/** 주문관리 반품리스트 */
declare interface ReturnListAPI {
	return_orders: {
		return_id: string;
		order_id: string;
		ordered_at: string;
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			sellers: {
				id: number;
				name: string;
				tel: string;
				order_items: {
					id: number;
					order_status_label: string;
					paid_price: number;
					return_cancelable: boolean;
					return_delivery_trackable: boolean;
					return_delivery_tracking_url: string;
					goods: {
						id: number;
						name: string;
						brand_name: string;
						thumbnail_url: string;
						option_name: string;
					};
					return_target_id: number;
					point_used: number;
				}[];
			}[];
		}[];
	}[];
}

/** 주문관리 교환리스트 */
declare interface ExchangeListAPI {
	exchange_orders: {
		exchange_id: string;
		order_id: string;
		ordered_at: string;
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			sellers: {
				id: number;
				name: string;
				tel: string;
				order_items: {
					id: number;
					order_status_label: string;
					paid_price: number;
					exchanged_option_name: string;
					exchange_cancelable: boolean;
					to_return_switchable: boolean;
					return_delivery_trackable: boolean;
					return_delivery_tracking_url: string;
					goods: {
						id: number;
						name: string;
						brand_name: string;
						thumbnail_url: string;
						option_name: string;
					};
					exchange_target_id: number;
					point_used: number;
				}[];
			}[];
		}[];
	}[];
}

/** 주문관리 주문상세 */
declare interface OrderDetailAPI {
	order: {
		order_id: string;
		ordered_at: string;
		original_order_id: string | null;
		shipping_address_changeable: boolean;
		shipping_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
			message: string;
		};
		orderer_info: {
			name: string;
			tel: string;
			email: string;
			personal_clearance_code: string | null;
		};
		payment_info: {
			label: string;
			buy_point: number;
			except_buy_point: number;
			card: {
				label: string;
				masking_number: string;
				approved_at: string;
			} | null;
			bank_account: {
				bank_name: string;
				account_number: string;
				input_expire_at: string;
			} | null;
			mobile: {
				approved_at: string;
			} | null;
		};
		payment_summary: {
			total_goods_price: number;
			total_shipping_price: number;
			discounts: {
				member: number;
				night_sale: number;
				immediately_sale: number;
			};
			used_coupon_amount: number;
			used_points: number;
			total_price: number;
		};
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			sellers: {
				id: number;
				name: string;
				tel: string;
				order_items: {
					id: number;
					cancel_id: string | null;
					return_id: string | null;
					return_target_id: number;
					exchange_id: string | null;
					exchange_target_id: number | null;
					order_status_label: string;
					refund_status_label: string | null;
					earnable_point: number;
					point_used: number;
					paid_price: number;
					cancelable: boolean;
					delivery_trackable: boolean;
					receipt_confirmable: boolean;
					returnable: boolean;
					exchangeable: boolean;
					purchase_confirmable: boolean;
					review_writable: boolean;
					delivery_tracking_url: string;
					return_cancelable: boolean;
					return_delivery_trackable: boolean;
					return_delivery_tracking_url: string;
					exchanged_option_name: string;
					exchange_cancelable: boolean;
					to_return_switchable: boolean;
					goods: {
						id: number;
						name: string;
						brand_name: string;
						thumbnail_url: string;
						option_name: string;
						option_id: number;
					};
				}[];
			}[];
		}[];
		receipt_viewable: boolean;
		giveaways: OrderDetailGift[] | null;
	};
	cancel_ids: string[];
	return_ids: string[];
	exchange_ids: string[];
}

/** 주문관리 주문상세 사은품 정보 */
declare interface OrderDetailGift {
	id: number;
	name: string;
	condition_label: string;
	image_url: string;
}

/** 주문관리 주문상세 취소주문상세 */
declare interface CancelOrderDetailAPI {
	cancel_detail: {
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				point_used: number;
				paid_price: number;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_name: string;
					option_id: number;
					is_soldout: boolean;
				};
			}[];
		}[];
		reason: {
			label: string;
			detail: string | null;
		};
		refund_account: {
			owner_name: string;
			account_number: string;
			bank_name: string;
			bank_code: number;
		};
		refund_info: {
			total_paid_price: number;
			refund_price: number;
			refund_point: number;
			calculate_details: {
				label: string;
				amount: number;
				is_substracted: boolean;
			}[];
		};
		is_cancel_before_paid: boolean;
	};
}

/** 주문관리 주문상세 반품주문상세 */
declare interface ReturnOrderDetailAPI {
	return_detail: {
		pack: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				point_used: number;
				paid_price: number;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_name: string;
					option_id: number;
				};
			}[];
		};
		reason: {
			label: string;
			detail: string | null;
		};
		retrieve_invoice: {
			delivery_compnay_name: string;
			delivery_compnay_code: string;
			invoice_number: string;
		} | null;
		retrieve_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		};
		refund_account: {
			owner_name: string;
			account_number: string;
			bank_name: string;
			bank_code: number;
		};
		refund_info: {
			total_paid_price: number;
			refund_price: number;
			refund_point: number;
			calculate_details: {
				label: string;
				amount: number;
				is_substracted: boolean;
			}[];
		};
	};
}

/** 주문관리 주문상세 교환주문상세 */
declare interface ExchangeOrderDetailAPI {
	exchange_detail: {
		pack: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				point_used: number;
				paid_price: number;
				exchanged_option_name: string;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_name: string;
					option_id: number;
				};
			}[];
		};
		reason: {
			label: string;
			detail: string | null;
		};
		retrieve_invoice: {
			delivery_compnay_name: string;
			delivery_compnay_code: string;
			invoice_number: string;
		} | null;
		retrieve_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		} | null;
		exchange_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		};
		additional_payment_price: {
			total_price: number;
			calculate_details: {
				label: string;
				amount: number;
			}[];
			pay_type_label: string;
		};
		payment_info: {
			label: string;
			card: {
				label: string;
				masking_number: string;
				approved_at: string;
			};
		} | null;
	};
}

/** 주문교환 > 반품전환 반품전환 가능 주문 상품 */
declare interface ReturnSwitchListAPI {
	switch_returnable_order: {
		order_id: string;
		ordered_at: string;
		payment_method_label: string;
		shipping_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		};
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				order_status_label: string;
				order_status_code: number;
				paid_price: number;
				point_used: number | null;
				used_coupon_title: string | null;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_id: number;
					option_name: string;
					is_soldout: boolean;
				},
				exchange_target_id: number;
			}[];
		}[];
	};
	chosen_exchange_reason: {
		code: number;
		label: string;
		eng_label: string;
		detail: string | null;
	};
}

/** 주문교환 > 반품전환 환불 예상금액 */
declare interface ReturnSwitchRefundAPI {
	refund_info: {
		total_paid_price: number;
		refund_price: number;
		refund_point: number;
		calculate_details: {
			label: string;
			amount: number;
			is_substracted: boolean;
		}[];
	};
}

/** 주문취소 > 주문취소 가능 주문 상품 */
declare interface OrderCancelListAPI {
	cancelable_order: {
		order_id: string;
		ordered_at: string;
		is_paid: boolean;
		payment_method_label: string;
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				order_status_label: string;
				order_status_code: number;
				paid_price: number;
				point_used: number | null;
				used_coupon_title: string;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_id: number;
					option_name: string;
					is_soldout: boolean;
				};
			}[];
		}[];
	};
}

/** 주문취소 > 주문취소 환불 예상금액 */
declare interface OrderCancelRefundAPI {
	refund_info: {
		total_paid_price: number;
		refund_price: number;
		refund_point: number;
		calculate_details: {
			label: string;
			amount: number;
			is_substracted: boolean;
		}[];
	};
}

/** 주문반품 > 주문반품 가능 주문 상품 */
declare interface OrderReturnListAPI {
	returnable_order: {
		order_id: string;
		ordered_at: string;
		payment_method_label: string;
		shipping_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		};
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				order_status_label: string;
				order_status_code: number;
				paid_price: number;
				point_used: number | null;
				used_coupon_title: string | null;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_id: number;
					option_name: string;
					is_soldout: boolean;
				};
			}[];
		}[];
	};
	available_retrieve_methods: {
		code: number;
		label: string;
		is_retrieve_by_orderer: boolean;
		is_auto_retrieve: boolean;
	}[];
}

/** 주문반품 > 주문반품 환불 예상금액 */
declare interface OrderReturnRefundAPI {
	refund_info: {
		total_paid_price: number;
		refund_price: number;
		refund_point: number;
		calculate_details: {
			label: string;
			amount: number;
			is_substracted: boolean;
		}[];
	};
}

/** 주문교환 > 주문교환 가능 주문 상품 */
declare interface OrderExchangeListAPI {
	exchangeable_order: {
		order_id: string;
		ordered_at: string;
		payment_method_label: string;
		shipping_address: {
			name: string;
			tel: string;
			zip_code: string;
			base_address: string;
			detail_address: string;
		};
		packs: {
			shipping_rule_id: number;
			paid_shipping_price: number;
			order_items: {
				id: number;
				order_status_label: string;
				order_status_code: number;
				paid_price: number;
				point_used: number | null;
				used_coupon_title: string;
				seller_name: string;
				goods: {
					id: number;
					name: string;
					brand_name: string;
					thumbnail_url: string;
					option_id: number;
					option_name: string;
					is_soldout: boolean;
				};
				exchangeable_options: {
					id: number;
					label1: string;
					label2: string;
					stock: number;
				}[];
			}[];
		}[];
	};
	available_retrieve_methods: {
		code: number;
		label: string;
		is_retrieve_by_orderer: boolean;
		is_auto_retrieve: boolean;
	}[];
}

/** 주문교환 > 주문교환 환불 예상금액 */
declare interface OrderExchangeRefundAPI {
	additional_payments: {
		total_price: number;
		calculate_details: {
			label: string;
			amount: number;
		}[];
	};
}