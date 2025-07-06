/** 1대1 고객상담 카테고리 분류 */
declare interface CsQnaTypesAPI {
	qna_types: {
		code: number;
		label: string;
		is_with_order: boolean;
		children: {
			code: number;
			label: string;
		}[];
	}[];
}

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

/** FAQ 분류 */
declare interface CsFaqTypesAPI {
	faq_types: {
		id: number;
		name: string;
	}[];
}

/** 노출중인 FAQ LIST */
declare interface CsFaqListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			title: string;
			contents: string;
		}[];
	};
}

/** 회원등급별 혜택 */
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

interface NoticeContent {
	id: number;
	title: strging;
	created_at: strging;
	contents: strging;
	is_important: boolean;
}

/** 메인 - 최근 공지 리스트 */
declare interface CsMainNoticeAPI {
	notices: NoticeContent[];
}

/** 공지사항 - 중요 공지 리스트 */
declare interface CsImportantNoticeListAPI {
	important_notices: Omit<NoticeContent, 'is_important'>;
}

/** 공지사항 - 일반 공지 리스트 */
declare interface CsNoticeListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: Omit<NoticeContent, 'is_important'>[];
	};
}

/** 공지사항 상세보기 */
declare type CsNoticeDetailAPI = NoticeContent;
