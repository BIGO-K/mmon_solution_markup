/** 업체리스트 */
declare interface PolicyCompanyListAPI {
	middle_users: {
		name: string;
		ceo_name: string;
	}[];
}

/** 이전 약관 항목 조회 & 현재 노출중 항목 조회 */
declare interface PolicyListAPI {
	prev_policies: {
		id: number;
		title: string;
	}[];
	now_policy: {
		id: number;
		title: string;
		contents: string;
		display_date: string;
	};
}