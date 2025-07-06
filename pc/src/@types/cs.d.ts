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

/** 노출중인 FAQ 분류 */
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

interface NoticeContent {
	id: number;
	title: strging;
	created_at: strging;
	contents: strging;
}

/** 메인 - 최근 공지 리스트 */
declare interface CsMainNoticeAPI {
	notices: {
		id: number;
		title: string;
		is_important: boolean;
		created_at: string;
		contents: string;
	}[];
}

/** 공지사항 상세보기 */
declare interface CsNoticeDetailAPI {
	id: number;
	title: string;
	contents: string;
	created_at: string;
	is_important: boolean;
}

/** 공지사항 - 중요 공지 리스트 */
declare interface CsImportantNoticeListAPI {
	important_notices: NoticeContent;
}

/** 공지사항 - 일반 공지 리스트 */
declare interface CsNoticeListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: NoticeContent[];
	};
}