/** 아이디 찾기 */
declare interface FindIdResultAPI {
	find_results: {
		masking_login_id: string;
		regist_type: string;
	}[];
	user_name: string;
}

/** 회원가입 > 본인인증 > 회원중복확인 */
declare interface JoinDuplicateAPI {
	is_duplicate_user: boolean;
}

/** 회원가입 > 소셜회원 중복 체크 */
declare interface DuplicateUserAPI {
	duplicate_users: {
		platform_type: string;
		masking_id: string;
	}[];
}