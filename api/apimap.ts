const apiMap: Partial<Record<ApiKey, string>> = {
	/** 로그인 */
	AUTH_LOGIN: `./json/user.json`,
	/** 회원정보 수정용 정보 조회 */
	MEMBER_EDIT_INFO: `./json/userInfo.json`,
	/** 메인 배너 리스트 조회 */
	FETCH_MAIN_BANNERS: `./json/mainBanner.json`,
	/** 등급 및 혜택 조회 */
	CS_GRADE_BENEFIT_INFO: `./json/grade.json`,
	/** 장바구니에 상품 추가 */
	SHOPPING_ADD_CART_GOODS: `./json/addCartResult.json`,
	/** 작성한 리뷰 조회 */
	MEMBER_REVIEWS: `./json/review.json`,
	/** 1:1 문의 유형 조회 */
	CS_QNA_TYPES: `./json/qnaOrders.json`,
	/** (회원) 문의가능 주문 리스트 조회 */
	MEMBER_QNA_ORDERS: `./json/faqTypes.json`,
	/** 노출 중인 faq 분류 조회 */
	CS_FAQ_TYPES: `./json/faqs.json`,
	/** FAQ분류별 FAQ리스트 조회 */
	CS_FAQ_LIST: `./json/topNotices.json`,
	/** 최근 공지 리스트 */
	CS_TOP_NOTICES: `./json/noticeList.json`,
	/** 공지 리스트 조회 */
	CS_NOTICE_LIST: `./json/importantNotices.json`,
	/** 중요 공지 조회 */
	CS_IMPORTANT_NOTICES: `./json/notice.json`,
	/** 공지 상세 조회 */
	CS_NOTICE: `./json/findIdResult.json`,
	/** 휴대폰/이메일 아이디 찾기 */
	AUTH_FIND_ID: `./json/successOrError.json`,
	/** 이메일 비밀번호 찾기 인증번호 발송 */
	AUTH_SEND_VERIFICATION_CODE_EMAIL: `./json/successOrError.json`,
	/** SMS 비밀번호 찾기 인증번호 발송 */
	AUTH_SEND_VERIFICATION_CODE_PHONE: `./json/passwordFindResult.json`,
	/** 휴대폰/이메일 비밀번호 찾기 */
	AUTH_FIND_PASSWORD: `./json/successOrError.json`,
	/** 인증번호 확인 */
	AUTH_VERIFY_CODE: `./json/successOrError.json`,
	/** 비밀번호 변경 */
	AUTH_CHANGE_PASSWORD: `./json/successOrError.json`,
	/** 마스킹 해제된 아이디 이메일로 전송 */
	AUTH_SEND_UNMASKED_ID_EMAIL: `./json/successOrError.json`,
	/** 비밀번호 변경처리 */
	MEMBER_CHANGE_PASSWORD: `./json/successOrError.json`,
	/** 이메일 중복 확인 */
	MEMBER_CHECK_DUPLICATE_EMAIL: `./json/successOrError.json`,
	/** 회원탈퇴 사유 setter */
	MEMBER_WITHDRAW_REASONS: `./json/withdrawReason.json`,
	/** 회원탈퇴 처리 */
	MEMBER_WITHDRAW: `./json/successOrError.json`,
	/** 발급받은 쿠폰 내역 조회 */
	MEMBER_COUPON_REGIST_LIST: `./json/couponRegists.json`,
	/** 쿠폰 사용가능 상품 조회 */
	MEMBER_COUPON_USABLE_GOODS: `./json/couponRange.json`,
	/** 쿠폰 사용가능 상품 조회 */
	MEMBER_COUPON_USABLE_BRANDS: `./json/couponRange.json`,
	/** 쿠폰 인증번호로 쿠폰 등록 */
	MEMBER_REGIST_COUPON: `./json/successOrError.json`,
	CONF_POINT_RULE: `./json/pointUseRule.json`,
	/** 회원 포인트내역 조회 */
	MEMBER_POINT_HISTORY: `./json/pointHistory.json`,
	/** 등록된 환불계좌 조회 */
	MEMBER_REFUND_ACCOUNT: `./json/memberRefundAccount.json`,
	/** 회원 환불계좌 존재하면 업데이트, 존재하지 않으면 신규 생성 */
	MEMBER_CREATE_OR_UPDATE_REFUND_ACCOUNT: `./json/successOrError.json`,
	/** 회원 환불계좌 삭제 */
	MEMBER_DELETE_REFUND_ACCOUNT: `./json/successOrError.json`,
	/** 은행 코드/라벨 setter */
	CONF_BANK_CODES: `./json/bankCodes.json`,
	/** 찜한 브랜드 삭제 */
	MEMBER_DELETE_WISH_BRAND: `./json/successOrError.json`,
	/** 찜한 브랜드 최근순 조회 (페이지네이션) */
	MEMBER_WISH_BRANDS: `./json/wishBrand.json`,
	/** 찜한 브랜드 리스트 조회 */
	MEMBER_WISH_ALL_BRANDS: `./json/wishAllBrands.json`,
	/** 찜한 상품 폴더 리스트 조회 */
	MEMBER_WISH_GOODS_FOLDERS: `./json/wishGoodsFolders.json`,
	/** 찜한 상품 폴더별 조회 (페이지네이션) */
	MEMBER_WISH_GOODS: `./json/wishGoods.json`,
	/** 찜한 상품 폴더별 조회 */
	MEMBER_WISH_GOODS_IN_FOLDER: `./json/wishGoodsInFolder.json`,
	/** 찜한 상품 삭제 */
	MEMBER_DELETE_WISH_GOODS: `./json/successOrError.json`,
	/** 새 찜한 상품 폴더 추가 */
	MEMBER_CREATE_WISH_FOLDER: `./json/successOrError.json`,
	/** 폴더명 수정 */
	MEMBER_UPDATE_WISH_FOLDER: `./json/successOrError.json`,
	/** 폴더 순서 수정 */
	MEMBER_UPDATE_WISH_GOODS_FOLDER_SORT: `./json/successOrError.json`,
	/** 폴더 삭제 */
	MEMBER_DELETE_WISH_GOODS_FOLDER: `./json/successOrError.json`,
	/** 찜한 상품 수정 (폴더 이동) */
	MEMBER_UPDATE_WISH_GOODS: `./json/successOrError.json`,
	/** 찜한 브랜드 추가 */
	MEMBER_STORE_WISH_BRAND: `./json/successOrError.json`,
	/** 수정용 1:1 문의 조회 */
	MEMBER_QNA: `./json/editableQna.json`,
	/** 문의 수정 처리 */
	MEMBER_UPDATE_QNA: `./json/successOrError.json`,
	/** qna 삭제 */
	MEMBER_DELETE_QNA: `./json/successOrError.json`,
	/** 회원 최근 본 상품 추가 */
	MEMBER_ADD_RECENT_VIEW_GOODS: `./json/successOrError.json`,
	/** 최근 본 상품 리스트 최근순 조회 */
	MEMBER_RECENT_VIEW_GOODS: `./json/recentViewGoods.json`,
	/** 최근 본 기획전 추가 */
	MEMBER_ADD_RECENT_VIEW_PLANNING: `./json/successOrError.json`,
	/** 최근 본 기획전 리스트 최근순 조회 */
	MEMBER_RECENT_VIEW_PLANNINGS: `./json/recentViewPlanning.json`,
	/** 회원 혜택집계 조회 */
	MEMBER_AGGREGATES_BENEFIT: `./json/memberAggregate.json`,
	/** 회원 주문집계 조회 */
	MEMBER_AGGREGATES_ORDER: `./json/memberAggregate.json`,
	/** 회원 등급업 조건 조회 */
	MEMBER_AGGREGATES_GRADEUP_CONDITION: `./json/gradeConditions.json`,
	/** 판매자문의 조회 */
	MEMBER_SELLER_QNA_LIST: `./json/sellerQnas.json`,
	/** 작성가능리뷰 조회 */
	MEMBER_REVIEW_WRITABLES: `./json/reviewWritables.json`,
	/** 리뷰 수정페이지 리뷰 조회 */
	MEMBER_REVIEW: `./json/editableReview.json`,
	/** 기획전 상세 조회 */
	EXH_PLANNING_DETAIL: `./json/planning.json`,
	/** 기획전 댓글 조회 (페이지네이션) */
	EXH_PLANNING_COMMENTS: `./json/planning.json`,
	/** 기획전 댓글 작성 */
	CREATE_EXH_PLANNING_COMMENT: `./json/successOrError.json`,
	/** 기획전 댓글 수정 */
	UPDATE_EXH_PLANNING_COMMENT: `./json/successOrError.json`,
	/** 기획전 댓글 삭제 */
	DELETE_EXH_PLANNING_COMMENT: `./json/successOrError.json`,
	/** 기획전 그룹 상품 조회 */
	EXH_PLANNING_GROUP_GOODS: `./json/planning.json`,
	/** 주문 리스트 조회 */
	MEMBER_ORDER_LIST: `./json/normalOrder.json`,
	/** 정상주문 주문상태 코드/라벨 리스트 setter */
	MEMBER_ORDER_STATUS_CODES: `./json/normalOrder.json`,
	/** 동일주문 동일셀러 주문상품 중 판매자문의 가능한 주문상품 리스트 조회 */
	MEMBER_SELLER_QNA_WRITABLE_ORDER_ITEMS: `./json/sellerQnas.json`,
	/** 주문과 주문 내 취소 가능 주문상품 조회 */
	ORDER_CANCEL_CANCELABLES: `./json/cancelOrder.json`,
	/** 주문 및 선택한 주문상품과 묶음반품가능 주문상품 조회 */
	ORDER_RETURN_RETURNABLE: `./json/cancelOrder.json`,
	/** 추가 결제금액 조회 */
	ORDER_EXCHANGE_ADDITIONAL_PAYMENTS: `./json/exchangeOrder.json`,
	/** 주문 및 선택한 주문상품과 묶음교환가능 주문상품 조회 */
	ORDER_EXCHANGE_EXCHANGEABLE: `./json/exchangeOrder.json`,
	/** 취소 주문 리스트 조회 */
	ORDER_CANCEL_LIST: `./json/cancelOrder.json`,
	/** 반품 주문 리스트 조회 */
	ORDER_RETURN_LIST: `./json/returnOrder.json`,
	/** 교환 주문 리스트 조회 */
	ORDER_EXCHANGE_LIST: `./json/exchangeOrder.json`,
	/** 반품 전환 가능 주문상품 조회 */
	ORDER_EXCHANGE_SWITCH_RETURNABLE: `./json/exchangeOrder.json`,
	/** 반품전환 > 환불금액 정보 조회 */
	ORDER_EXCHANGE_SWITCH_RETURN_REFUND_INFO: `./json/exchangeOrder.json`,
	/** 주문 상세 조회 */
	ORDER_DETAIL: `./json/orderDetail.json`,
	/** 취소 주문 상세 조회 */
	ORDER_CANCEL_DETAIL: `./json/orderDetail.json`,
	/** 반품 주문 상세 조회 */
	ORDER_RETURN_DETAIL: `./json/orderDetail.json`,
	/** 영수증 조회 */
	ORDER_RECEIPT: `./json/orderDetail.json`,
	/** 코디샷 상세 */
	CODY_SHOT_DETAIL: `./json/codyShots.json`,
	/** 신규 등록 코디샷 조회 */
	MAIN_RECENT_CODY_SHOTS: `./json/codyShotSimpleList.json`,
	/** 코디샷 (페이지네이션) */
	MAIN_CODY_SHOTS: `./json/codyShotSimplePaginator.json`,
	/** 코디샷 카테고리 조회 */
	CODY_SHOT_CATEGORIES: `./json/codyShotCategories.json`,
	/** 제휴문의 구분 코드/라벨 리스트 조회 */
	PARTNERSHIP_INQUIRY_TYPES: `./json/partnershipInquiry.json`,
	/** 제휴문의 카테고리 리스트 조회 */
	PARTNERSHIP_INQUIRY_CATEGORIES: `./json/partnershipInquiry.json`,
	/** 메인 이벤트 리스트 조회 */
	MAIN_SPECIAL_EVENTS: `./json/eventsMain.json`, // MAIN_SPECIAL_EVENT
	/** 메인 이벤트 상세 조회 */
	SPECIAL_EVENT_DETAIL: `./json/eventDetailPC.json`,
	/** 이벤트 상품그룹 > 상품 리스트 조회 */
	SPECIAL_EVENT_GROUP_GOODS: `./json/eventGoodsList.json`,
	/** 이벤트 댓글 조회 (페이지네이션) */
	SPECIAL_EVENT_COMMENTS: `./json/eventReviews.json`,
	/** 블록 페이지단위 조회 */
	BLOCK_PAGE: `./json/block1.json`,
	BLOCK_BLOCK: `./json/w12Xh9_s9.json`,
	// BLOCK_TEST: `./json/block1.json`,
	/** 배송지연 신고가능 주문 조회 */
	MEMBER_CLAIM_DELIVERY_DELAY_REPORTABLE_ORDER_ITEMS: `./json/claimReport.json`,
	/** 배송지연 신고 주문 조회 */
	MEMBER_CLAIM_DELIVERY_DELAY_REPORTED_ORDER_ITEMS: `./json/claimReportResult.json`,
	/** 신고가능 주문 조회 */
	MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTABLE_ORDER_ITEMS: `./json/claimReport.json`,
	/** 품절취소 신고 주문 조회 */
	MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTED_ORDER_ITEMS: `./json/claimReportResult.json`,
	/** 브랜드 랭킹 조회 */
	RANKING_BRAND: `./json/rankingBrand.json`,
	/** 랭킹 조회 (아이템/뷰/찜) */
	RANKING_ITEM: `./json/rankingItem.json`,
	/** 공통 config 정보 조회 */
	CONF_INITIAL_SETTINGS: `./json/initialConfigs.json`,
	/** 메인 팝업 조회 */
	FETCH_MAIN_POPUPS: `./json/mainPopup.json`,
	/** 타임딜 조회 */
	TIME_DEAL: `./json/timeDeals.json`,
	/** 래플 조회 */
	MAIN_RAFFLES: `./json/raffles.json`,
	/** 래플 당첨자 리스트 조회 */
	RAFFLE_WINNERS: `./json/raffleWinners.json`,
};

const baseApiKey: Partial<Record<ApiKey, string>> = {
	/**  */
	USER_INFO: `./json/`,
	/**  */
	SHOPPER_UUID: `./json/`,
	/**  */
	SEARCH_ADDRESS: `./json/`,
	/**  */
	ADDRESS_EXTRA_AREA_CHECK: `./json/`,
	/**  */
	REGIST_POLICIES: `./json/`,
	/** 브래드맵 > 브랜드 구분 조회 */
	BRAND_CATEGORIES: `./json/brandCategoryies.json`,
	/** 전체 브랜드 조회 */
	ALL_DISPLAY_BRANDS: `./json/allDisplayBrands.json`,
	/** 이전 약관 항목 조회 & 현재 노출중 항목 조회 */
	// 약관 통합(이용약관, 개인정보 취급방침, 청소년, offer? 호출 url 같음, policy_type으로 구분)
	POLICY_NOW_DISPLAY_END_PREV_LIST: `./json/policy_now_display_end_prev_list.json`, // 이용약관
	// POLICY_NOW_DISPLAY_END_PREV_LIST: `./json/policy_now_display_end_prev_list_privacy.json`, // 테스트 개인정보
	// POLICY_NOW_DISPLAY_END_PREV_LIST: `./json/policy_now_display_end_prev_list_teen.json`,// 테스트 청소년
	// POLICY_NOW_DISPLAY_END_PREV_LIST: `./json/policy_now_display_end_prev_list_offer.json`,// 테스트 offer
	/**  */
	USER_GRADE_COLORS: `./json/`,
	/**  */
	POLICY_DETAIL: `./json/`,
	/**  */
	PARTNERSHIP_INQUIRY_CATEGORIES: `./json/`,
	/**  */
	PARTNERSHIP_INQUIRY_TYPES: `./json/`,
	/**  */
	SEND_PARTNERSHIP_INQUIRY: `./json/`,
	/**  */
	BLOCK_PAGE: `./json/`,
	/**  */
	BLOCK_BLOCK: `./json/`,
	/** 약관 > 업체 리스트 조회 */
	COMPANY_LIST: `./json/companyList.json`, // 직접 추가한 API
};

// 이벤트, 프로모션, 기획전 등
const exhibitApi: Partial<Record<ApiKey, string>> = {
	/** 기본 검색어 조회 */
	FETCH_BASE_SEARCH_WORDS: `./json/fetchBaseSearchWords.json`,
	/** */
	FETCH_MAIN_BANNERS: `./json/`, // 등록된 API 없음
	/** 메인페이지 팝업 조회(노출중인 항목 최대 4개) */
	FETCH_MAIN_POPUPS: `./json/fetchMainPopups.json`,
	/** 타임 특가 > 배너 조회 */
	TIME_DEAL: `./json/timeDeal.json`,
	/** 전시>카드 혜택(무이자) 정보 조회 */
	CARD_INSTALLMENT: `./json/cardInstallment.json`,
	/** 기획전 상세 조회 */
	EXH_PLANNING_DETAIL: `./json/exhPlanningDetail.json`,
	/** 기획전상세 > 기획전 댓글 페이지네이터 최근순 조회 */
	EXH_PLANNING_COMMENTS: `./json/expPlanningComments.json`,
	/** 기획전 상세 > 댓글 작성 처리 */
	CREATE_EXH_PLANNING_COMMENT: `./json/`,
	/** 기획전 상세 > 댓글 수정처리 */
	UPDATE_EXH_PLANNING_COMMENT: `./json/`,
	/** 기획전 상세 > 댓글 삭제 처리 */
	DELETE_EXH_PLANNING_COMMENT: `./json/`,
	/** 기획전 상세 > 상품 그룹별 상품 리스트 조회 */
	EXH_PLANNING_GROUP_GOODS: `./json/exhPlanningGroupGoods.json`,
	/** GNB메뉴 > (유료)쇼케이스 > 쇼케이스 구분(탭) 리스트 조회 */
	SHOWCASE_SORT_LIST: `./json/showcaseSortList.json`,
	/** GNB메뉴 > (유료)쇼케이스 > 리스트 조회 */
	SHOWCASE_LIST: `./json/showcaseList.json`,
	/** GNB메뉴 > (유료)쇼케이스 > 쇼케이스 상세 정보 조회 */
	SHOWCASE_DETAIL: `./json/showcaseDetail.json`,
	/** GNB메뉴 > (유료)쇼케이스 > 쇼케이스 상세 > 다른 쇼케이스 리스트 조회(각 쇼케이스 구분별 최근에 등록된 쇼케이스 1개씩만 노출) */
	ANOTHER_SHOWCASE_LIST: `./json/anotherShowcaseList.json`,
	/** 코디샷 카테고리 조회 */
	CODY_SHOT_CATEGORIES: `./json/codyShotCategories.json`,
	/** 코디샷 상세 조회 */
	CODY_SHOT_DETAIL: `./json/codyShotDetail.json`,
	/** 메인 > (유료)코디샷 > 코디샷 조회 */
	MAIN_CODY_SHOTS: `./json/mainCodyShot.json`,
	/** 메인 > (유료)코디샷 > 코디샷 최근 등록순 조회 */
	MAIN_RECENT_CODY_SHOTS: `./json/mainRecentCodyShot.json`,
	/**	메인 > (유료) 이벤트 목록 조회 */
	MAIN_SPECIAL_EVENTS: `./json/mainSpecialEvent.json`,
	/**	(유료)이벤트 상세 조회 */
	SPECIAL_EVENT_DETAIL: `./json/specialEventDetail.json`,
	/** (유료) 이벤트 상세 > 상품 그룹 정보 조회 */
	SPECIAL_EVENT_GROUP_GOODS: `./json/specialEventGroupGoods.json`,
	/** (유료) 이벤트 상세 > 댓글 페이지네이터 최근순 조회 */
	SPECIAL_EVENT_COMMENTS: `./json/specialEventComments.json`,
	/** (유료)이벤트 상세 > 댓글 작성 처리 */
	CREATE_SPECIAL_EVENT_COMMENT: `./json/`,
	/** (유료) 이벤트 상세 > 댓글 삭제 처리 */
	DELETE_SPECIAL_EVENT_COMMENT: `./json/`,
	/** (유료) 이벤트 상세 > 댓글 수정처리 */
	UPDATE_SPECIAL_EVENT_REVIEW_COMMENT: `./json/`,
	/** GNB 메뉴 > (유료) 이벤트 > 체험단 후기 리스트 조회 (최근 등록순) */
	EXPERIENCEGROUP_REVIEW_LIST: `./json/experiencegroupReviewList.json`,
	/** 체험단 후기 > 작성 가능한 상품 리스트 조회 */
	EXPERIENCEGROUP_REVIEWABLE_GOODS: `./json/experiencegroupReviewableGoods.json`,
	/**	체험단 후기 작성 처리 */
	EXPERIENCEGROUP_REVIEW_STORE: `./json/`,
	/** 체험단 후기 ID 배열로 추천 여부 조회 */
	EXPERIENCEGROUP_REVIEW_RECOMMENDATION: `./json/experiencegroupReviewRecommendation.json`,
	/** 체험단 후기 추천하기 */
	EXPERIENCEGROUP_REVIEW_RECOMMENDATION_ADD: `./json/`,
	/** 체험단 후기 추천 취소 */
	EXPERIENCEGROUP_REVIEW_RECOMMENDATION_CANCEL: `./json/`,
	/** GNB 메뉴 > (유료) 이벤트 > 체험단 후기 상세 조회(조회 수 자동 증가) */
	EXPERIENCEGROUP_REVIEW_DETAILS: `./json/experiencegroupReviewDetails.json`,
	/** GNB 메뉴 > (유료)공동 구매 > 리스트 조회 (공동 구매 종료일 빠른 순으로 노출, 남은 시간이 같을 경우 최근 등록순으로 노출) */
	JOINT_PURCHASE_LIST: `./json/jointPurchaseList.json`,
	/** 공동구매 상세 정보 조회 */
	JOINT_PURCHASE_DETAIL: `./json/jointPurchaseDetail.json`,
	/** (유료) 공동 구매 > 공동 구매 참여하기(참여 인원 증가, 동일한 공동 구매 재참여 불가능) */
	JOINT_PURCHASE_APPLY: `./json/`,
	/** 메인 > 래플 목록 조회 */
	MAIN_RAFFLES: `./json/mainRaffles.json`,
	/** 종료된 래플 목록 조회 */
	RAFFLES_ENDED: `./json/rafflesEnded.json`,
	/** 래플 > 응모하기 */
	RAFFLE_ENTRY: `./json/`,
	/** 래플 > 당첨자 목록 조회 */
	RAFFLE_WINNERS: `./json/raffleWinners.json`,
	/** 래플 > 응모하기 > 사용자 정보 조회 */
	RAFFLE_ENTRY_INFO: `./json/raffleEntryInfo.json`,
	/** 래플 > 응모 결과 조회 */
	RAFFLE_WINNING_RESULT: `./json/raffleWinningResult.json`,
	/** 회원 > 래플 당첨여부 + 구매가능 여부 */
	RAFFLE_IS_BUYABLE_CHECK: `./json/raffleIsBuyableCheck.json`
};

// 계정
const authApi: Partial<Record<ApiKey, string>> = {
	/** 로그인 */
	AUTH_LOGIN: `./json/authLogin.json`,
	/** 회원 로그아웃 처리 */
	AUTH_LOGOUT: `./json/`,
	/** 회원 > 토큰 및 회원정보 갱신 */
	AUTH_REFRESH: `./json/authRefresh.json`,
	/** */
	AUTH_ME: `./json/`,
	/**	비회원 > 주문조회 로그인 */
	AUTH_GUEST_LOGIN: `./json/`,
	/**	아이디 찾기 */
	AUTH_FIND_ID: `./json/authFindId.json`,
	/** 비밀번호 찾기 > 사용자명, 아이디, 이메일/핸드폰, 인증코드로 회원일치여부 확인 */
	AUTH_FIND_PASSWORD: `./json/`,
	/** 비밀번호 찾기 인증번호 이메일 발송(존재하지 않는 회원인 경우 발송 실패) */
	AUTH_SEND_VERIFICATION_CODE_EMAIL: `./json/`,
	/** 비밀번호 찾기 인증번호 휴대폰 번호 발송(존재하지 않는 회원인 경우 발송 실패) */
	AUTH_SEND_VERIFICATION_CODE_PHONE: `./json/authSendVerificationCodePhone.json`,
	/** 비밀번호 찾기 인증번호 확인 */
	AUTH_VERIFY_CODE: `./json/`,
	/** 비밀번호찾기 > 비밀번호 변경 처리 */
	AUTH_CHANGE_PASSWORD: `./json/`,
	/** 마스킹 해제된 아이디를 email로 전송 */
	AUTH_SEND_UNMASKED_ID_EMAIL: `./json/`,
	/**	마스킹 해제된 아이디를 휴대폰 번호로 전송 */
	AUTH_SEND_UNMASKED_ID_PHONE: `./json/`,
	/** 아이디 중복체크 */
	AUTH_ID_DUPLICATE_CHECK: `./json/`,
	/** 쇼핑몰 회원가입 처리 */
	AUTH_USER_REGIST: `./json/authUserRegist.json`,
	/**	회원가입 > 본인인증 > 회원중복확인 */
	AUTH_TOKEN_DUPLICATE_CHECK: `./json/authTokenDuplicateCheck.json`,
	/** 회원 > 토큰 및 회원정보 갱신 */
	AUTH_REFRESH_TOKEN: `./json/authRefreshToken.json`,
	/** 로그인 > 실패 > 캡차 이미지 조회 */
	AUTH_CAPTCHA_IMAGE: `./json/authCapchaImage.json`,
	/**	캡차 > 인증 처리 */
	AUTH_CAPTCHA_CERTIFICATE: `./json/`,
	/** 회원 > 비밀번호 변경 권유 > 비밀번호 변경 */
	AUTH_PASSWORD_ADVICE_CHANGE: `./json/`,
	/** 소셜 > 본인 인증 정보 업데이트 */
	AUTH_IDENTITY_VERIFICATION_CONFIRM: `./json/`
};

// 본인인증
const identityVerificationApi: Partial<Record<ApiKey, string>> = {
	/** */
	IDENTITY_VERIFICATION_GENERATE_TOKEN: `./json/`,
	/** */
	IDENTITY_VERIFICATION_RESULT: `./json/`
};

// 검색엔진
const searchEngineApi: Partial<Record<ApiKey, string>> = {
	/** 인기 검색어 조회 */
	SEARCH_ENGINE_HOT_SEARCHES: `./json/searchEngineHotSearches.json`,
	/** 자동완성 검색어 조회 */
	SEARCH_ENGINE_AUTO_COMPLETE: `./json/searchEngineAutoComplete.json`,
	/** 검색 > 상품검색 */
	SEARCH_ENGINE_SEARCH: `./json/searchEngineSearch.json`,
	/** 검색 > 상품클릭 피드백 */
	SEARCH_ENGINE_FEEDBACK: `./json/`
};

// 쇼핑
const shoppingApi: Partial<Record<ApiKey, string>> = {
	/** */
	SHOPPING_ADD_CART_GOODS: `./json/`,
	/** 장바구니 > 리스트 */
	SHOPPING_CART_ITEMS: `./json/shoppingCartItems.json`,
	/** */
	SHOPPING_FETCH_LIKED_GOODS: `./json/`,
	/** */
	SHOPPING_CART_ITEMS_REMOVE: `./json/`,
	/** */
	SHOPPING_CART_ITEM_OPTION_AND_STOCK_UPDATE: `./json/`,
	/** */
	SHOPPING_CART_COUNT: `./json/`,
	/** */
	SHOPPING_WISH_BRANDS: `./json/`,
	/** 사은품 > 상세 조회 */
	SHOPPING_GIVEAWAY_DETAIL: `./json/shoppingGiveawayDetail.json`,
	/** 사은품 > 대상 상품 조회 */
	SHOPPING_GIVEAWAY_DETAIL_TARGET_GOODS: `./json/shoppingGiveawayTargetGoods.json`
};

// 랭킹 관련
const rankingApi: Partial<Record<ApiKey, string>> = {
	/** 메인 > 랭킹 > 랭킹 조회 (아이템, 뷰, 찜) */
	RANKING_ITEM: `./json/rankingItem.json`,
	/** 메인 > 랭킹 > 브랜드 랭킹 조회 */
	RANKING_BRAND: `./json/rankingBrand.json`
};

// 상품 관련
const goodsApi: Partial<Record<ApiKey, string>> = {
	/** 현재 노출중인 상품 카테고리 조회 */
	GOODS_DISPLAY_ALL_CATEGORIES: `./json/goodsDisplayAllCategories.json`,
	/** 카테고리 > 상품 카운트 조회 */
	GOODS_CATEGORIES_INCLUDE_COUNT: `./json/goodsCategoriesIncludeCount.json`,
	/** 상품상세 > 리뷰 > 리뷰 리스트 조회(필터) */
	GOODS_DETAIL_REVIEWS: `./json/goodsDetailReviews.json`,
	/** 상품 상세 > 선택형 리뷰 항목 통계 */
	GOODS_DETAIL_REVIEW_STATS: `./json/goosDetailReviewStats.json`,
	/** 상품 상세 > 리뷰 > 포토 리뷰 상세 */
	GOODS_DETAIL_PHOTO_REVIEW_DETAIL: `./json/goodsDetailPhotoReviewDetail.json`,
	/** 메인>베스트>상품조회 */
	FETCH_MAIN_CATEGORY_BEST_GOODS: `./json/fetchMainCategoryBestGoods.json`,
	/** 상품상세 > 세트상품 리스트 조회 */
	GOODS_DETAIL_PACKAGES: `./json/goodsDetailPackages.json`,
	/**	상품 상세 > 브랜드 베스트 상품 */
	GOODS_DETAIL_BRAND_BEST_GOODS: `./json/goodsDetailBrandBestGoods.json`,
	/** 상품상세 > 상품 대표 카테고리 > 베스트 상품 조회 */
	GOODS_DETAIL_MAIN_CATEGORY_BEST_GOODS: `./json/goodsDetailMainCategoryBestGoods.json`,
	/**	상품상세 > 상품 기본정보 조회 */
	GOODS_DETAIL_BASIC_INFO: `./json/GoodsDetailBasicInfo.json`,
	/** 상품상세 > 탭 > 상세정보 조회 */
	GOODS_DETAIL_INFORMATION: `./json/GoodsDetailInformation.json`,
	/**	상품상세 > 상품Q&A 조회 */
	GOODS_DETAIL_QNA_LIST: `./json/goodsDetailQnaList.json`,
	/**	상품 > Q&A 등록시, 상품정보 조회 */
	GOODS_DETAIL_QNA_WRITE_INFO: `./json/GoodsDetailQnaWriteInfo.json`,
	/** */
	GOODS_STORE_QNA: `./json/`, // mint에 없음
	/** 상품상세 > Q&A 수정 */
	GOODS_UPDATE_QNA: `./json/`,
	/**	상품상세 > Q&A 삭제 */
	GOODS_DESTROY_QNA: `./json/`,
	/** 상품상세 > Q&A > 상세보기 */
	GOODS_SHOW_QNA: `./json/goodsShowQna.json`,
	/** 상품상세 > 다운로드 가능 쿠폰 조회 */
	GOODS_DETAIL_DOWNLOADABLE_COUPONS: `./json/goodsDetailDownloadableCoupons.json`,
	/** 상품 상세 > 쿠폰 다운로드 */
	GOODS_DETAIL_COUPON_DOWNLOAD: `./json/`,
	/**	상품 상세 > 포토 리뷰 > 전체 보기 */
	GOODS_PHOTO_REVIEWS: `./json/goodsPhotoReviews.json`,
	/** */
	GOODS_DETAIL_PROMOTIONS: `./json/goodsDetailPromotion.json`,
	/** */
	GOODS_OPTIONS: `./json/goodsOptions.json`, // mint에 없음
	/** */
	GOODS_EP_COUPON: `./json/`, // mint에 없음
	/** 상품 리뷰, 문의 관련 집계 */
	GOODS_DETAIL_AGGREGATE: `./json/goodsDetailAggregate.json`,
	/** */
	GOODS_DETAIL_STOCK: `./json/goodsDetailStock.json`, // mint에 없음
	/** */
	GOODS_DETAIL_BEST_REVIEWS: `./json/`, // mint에 없음
	/** [M]상품 상세 > 리뷰 > 베스트 리뷰 상세 */
	GOODS_DETAIL_BEST_REVIEW: `./json/goodsDetailBestReview.json`,
	/** 포토리뷰 이미지 조회 */
	GOODS_REVIEW_ZOOM_IMAGES: `./json/goodsReviewZoomImages.json`,
	/** */
	GOODS_DETAIL_ME: `./json/`, // mint에 없음
	/** 카테고리 > 상품 */
	GOODS_CATEGORIES_COMMON: `./json/goodsCategoriesCommon.json`,
	/**	카테고리 > 상품 > 필터 */
	GOODS_CATEGORIES_FILTER: `./json/goodsCategoriesFilter.json`,
	/** 카테고리 > 상품 > 전체 카운트 조회 */
	GOODS_CATEGORIES_COMMON_COUNT: `./json/goodsCategoriesCommonCount.json`,
	/** 카테고리 > 정보 조회 */
	GOODS_CATEGORIES_COMMON_INFO: `./json/goodsCategoriesCommonInfo.json`,
	/** 브랜드샵 > 브랜드 정보 & 큐레이션 상품 & 쇼케이스 조회 */
	GOODS_BRAND_SHOP_INFO_WITH_CURATION: `./json/goodsBrandShopInfoWithCuration.json`,
	/** 브랜드샵 > 상품 조회 */
	GOODS_BRAND_SHOP_FILTERED_GOODS: `./json/goodsBrandShopFilteredGoods.json`,
	/** 브랜드샵 > 상품 전체 카운트 조회 */
	GOODS_BRAND_SHOP_COUNT: `./json/goodsBrandShopCount.json`,
	/** 브랜드샵 > 필터 정보 조회 */
	GOODS_BRAND_SHOP_FILTER: `./json/goodsBrandShopFilter.json`,
	/** 셀러 > 사이즈 차트 이미지 조회 */
	GOODS_SIZE_GUIDE: `./json/goodsSizeGuide.json`,
	/**	판매자 > 기본정보 조회 */
	GOODS_SELLER_SHOP_INFO: `./json/goodsSellerShopInfo.json`,
	/** 판매자샵 >베스트 , NEW IN */
	GOODS_SELLER_SHOP_CURATION: `./json/goodsSellerShopCuration.json`,
	/** 판매자샵 > 필터 항목 조회 */
	GOODS_SELLER_SHOP_FILTER: `./json/goodsSellerShopFilter.json`,
	/** 판매자샵 > 상품 > 필터에 맞는 > 상품 카운트 조회 */
	GOODS_SELLER_SHOP_GOODS_COUNT: `./json/goodsSellerShopGoodsCount.json`,
	/**	판매자샵 > 상품 */
	GOODS_SELLER_SHOP_FILTERED_GOODS: `./json/goodsSellerShopFilteredGoods.json`,
	/** 상품 > 재입고 알림 신청 */
	GOODS_RESTOCK_NOTIFY_APPLY: `./json/GoodsRestockNotifyApply.json`,
	/** (상품상세용) 래플 상세 정보 조회 */
	GOODS_RAFFLE_DETAIL: `./json/GoodsRaffleDetail.json`,
	/** 타임어택 > 상세 정보 조회 */
	GOODS_TIME_ATTACK_DETAIL: `./json/GoodsTimeAttackDetail.json`
};

// 설정
const globalConfigApi: Partial<Record<ApiKey, string>> = {
	/** */
	CONF_SHOP_INFORMATION: `./json/`,
	/** 은행 코드, 라벨 조회 */
	CONF_BANK_CODES: `./json/confBankCodes.json`,
	/** */
	CONF_POINT_RULE: `./json/`,
	/** */
	CONF_POINT_LABEL: `./json/`,
	/** */
	CONF_GRADE_REVIEW_POINT_SETTING: `./json/`,
	/** */
	CONF_SHOES_SIZE: `./json/`,
	/** */
	CONF_CANCEL_REASONS: `./json/`,
	/** */
	CONF_RETURN_REASONS: `./json/`,
	/** */
	CONF_EXCHANGE_REASONS: `./json/`,
	/** */
	CONF_DELIVERY_COMPANIES: `./json/`,
	/** */
	CONF_SHOES_CATEGORIES: `./json/`,
	/** */
	CONF_FIT_LIST: `./json/`,
	/** */
	CONF_CLAIM_REWARD_INFO: `./json/`,
	/** 쇼핑몰 공통 config 데이터 조회. 쇼핑몰 정보, 포인트 정보(라벨, 정책), 유료옵션 사용여부 등을 조회 (해당 api는 10분 캐시설정이 있으므로 데이터 변경이 바로 되지 않습니다.) */
	CONF_INITIAL_SETTINGS: `./json/confInitialSettings.json`
};

// 리뉴얼
const renewalApiKey: Partial<Record<ApiKey, string>> = {
	/** */
	RENEWAL_CHECK_EXIST_USER: `./json/`,
	/** */
	RENEWAL_PASSWORD_CHANGE: `./json/`
};

// 고객센터
const csApi: Partial<Record<ApiKey, string>> = {
	/** 등급혜택 정보 조회 */
	CS_GRADE_BENEFIT_INFO: `./json/csGradeBenefitInfo.json`,
	/** 1:1고객상담 문의 유형 조회*/
	CS_QNA_TYPES: `./json/csQnaTypes.json`,
	/** */
	CS_SELLER_QNA_TYPES: `./json/`,
	/** 노출중인 FAQ 분류 조회 */
	CS_FAQ_TYPES: `./json/csFaqTypes.json`,
	/**	노출중인 FAQ 리스트 조회 */
	CS_FAQ_LIST: `./json/csFaqList.json`,
	/** FAQ 검색 결과 조회 */
	CS_FAQ_ALL_LIST: `./json/csFaqAllList.json`,
	/** */
	CS_TOP_NOTICES: `./json/csTopNotices.json`,
	/** */
	CS_NOTICE_LIST: `./json/csNoticeList.json`,
	/** */
	CS_IMPORTANT_NOTICES: `./json/csImportantNotices.json`,
	/** */
	CS_NOTICE: `./json/csNotice.json`,
	/** */
	CS_SHOPPING_GUIDES_ACTIVES_INFORMATION: `./json/`,
};

// 회원 마이페이지
const memberApi: Partial<Record<ApiKey, string>> = {
	/** 회원 > 연동된 소셜 조회 */
	MEMBER_CONNECTED_SOCIALS: `./json/memberConnectedSocials.json`,
	/** 마이페이지 회원정보 수정용 정보 조회 */
	MEMBER_EDIT_INFO: `./json/memberEditInfo.json`,
	/** 마이페이지 회원정보 수정 */
	MEMBER_UPDATE_INFO: `./json/`,
	/** 상품리뷰 수정처리 */
	MEMBER_UPDATE_REVIEW: `./json/`,
	/** 리뷰 수정 페이지 > 리뷰 정보 조회 */
	MEMBER_REVIEW: `./json/memberReview.json`,
	/** 상품리뷰 작성 처리 */
	MEMBER_STORE_REVIEW: `./json/`,
	/** 마이페이지 > 작성한 리뷰 조회 (최근작성순 조회) */
	MEMBER_REVIEWS: `./json/memberReviews.json`,
	/** 마이페이지 > 회원정보수정 > 비밀번호 변경 처리 */
	MEMBER_CHANGE_PASSWORD: `./json/`,
	/** 마이페이지 > 회원정보수정 > 이메일 중복 체크 */
	MEMBER_CHECK_DUPLICATE_EMAIL: `./json/memberCheckDuplicateEmail.json`,
	/** 회원탈퇴 사유 코드/라벨 조회 */
	MEMBER_WITHDRAW_REASONS: `./json/memberWithdrawReasons.json`,
	/** 회원정보수정 > 회원탈퇴 처리 */
	MEMBER_WITHDRAW: `./json/`,
	/** 로그인 후 로그인 엑세스 토큰과 비밀번호 통해 회원 재확인 */
	MEMBER_PREPARE_FOR_EDIT: `./json/memberPrepareForEdit.json`,
	/** 회원정보수정(비밀번호 재확인시 기능 이용 가능) > 현재 비밀번호 일치 여부 확인 */
	MEMBER_CHECK_CURRENT_PASSWORD: `./json/memberCheckCurrentPassword.json`,
	/** 마이페이지 > 혜택관리 > 발급받은 쿠폰 내역 조회 (사용가능 및 사용불가 노출. 사용완료 미노출) */
	MEMBER_COUPON_REGIST_LIST: `./json/memberCouponRegistList.json`,
	/** 마이페이지>혜택관리(쿠폰)>회원이 발급받은 쿠폰 조회 */
	MEMBER_COUPON_REGIST: `./json/memberCouponRegist.json`,
	/** 마이페이지 > 혜택관리 > 쿠폰 ID로 사용가능한 상품 조회 */
	MEMBER_COUPON_USABLE_GOODS: `./json/memberCouponUsableGoods.json`,
	/** 마이페이지 > 혜택관리 > 쿠폰 ID로 사용가능한 브랜드 조회 */
	MEMBER_COUPON_USABLE_BRANDS: `./json/memberCouponUsableBrands.json`,
	/** 마이페이지>혜택관리>쿠폰인증번호 통해 쿠폰 등록 */
	MEMBER_REGIST_COUPON: `./json/`,
	/** 마이페이지 > 혜택관리 > 포인트 내역 */
	MEMBER_POINT_HISTORY: `./json/memberPointHistory.json`,
	/** 마이페이지 > 환불계좌관리 > 환불계좌 조회 */
	MEMBER_REFUND_ACCOUNT: `./json/memberRefundAccount.json`,
	/** 마이페이지 > 환불계좌관리 > 환불계좌 등록/변경 (등록된 계좌 존재할시 수정, 없다면 신규등록) */
	MEMBER_CREATE_OR_UPDATE_REFUND_ACCOUNT: `./json/`,
	/** 마이페이지 > 환불계좌관리 > 등록된 환불계좌 삭제 */
	MEMBER_DELETE_REFUND_ACCOUNT: `./json/`,
	/** 마이페이지 > 찜한브랜드 최근순 조회 */
	MEMBER_WISH_BRANDS: `./json/memberWishBrands.json`,
	/** 마이페이지 > 찜한 브랜드 리스트 조회 */
	MEMBER_WISH_ALL_BRANDS: `./json/memberWishAllBrands.json`,
	/** 브랜드 찜처리 */
	MEMBER_STORE_WISH_BRAND: `./json/`,
	/** 마이페이지 > 찜한브랜드 삭제 */
	MEMBER_DELETE_WISH_BRAND: `./json/`,
	/** 상품찜 폴더 조회 */
	MEMBER_WISH_GOODS_FOLDERS: `./json/memberWishGoodsFolders.json`,
	/** 마이페이지 > 찜한상품 리스트 조회 */
	MEMBER_WISH_GOODS: `./json/memberWishGoods.json`,
	/** 마이페이지 > 폴더별 찜한 상품 조회 */
	MEMBER_WISH_GOODS_IN_FOLDER: `./json/memberWishGoodsInFolder.json`,
	/** */
	MEMBER_DELETE_WISH_GOODS: `./json/`,
	/** */
	MEMBER_CREATE_WISH_FOLDER: `./json/`,
	/** */
	MEMBER_UPDATE_WISH_FOLDER: `./json/`,
	/** */
	MEMBER_UPDATE_WISH_GOODS_FOLDER_SORT: `./json/`,
	/** */
	MEMBER_DELETE_WISH_GOODS_FOLDER: `./json/`,
	/** */
	MEMBER_STORE_WISH_GOODS: `./json/`,
	/** */
	MEMBER_UPDATE_WISH_GOODS: `./json/`,
	/** 최근 본 상품리스트 조회(최근순) 최대 50개 노출, 노출된지 2주 경과시 자동제거 */
	MEMBER_RECENT_VIEW_GOODS: `./json/memberRecentViewGoods.json`,
	/** */
	MEMBER_ADD_RECENT_VIEW_GOODS: `./json/`,
	/** 마이페이지 > 최근 본 기획전 조회(최근순) 최대 30개 노출, 노출된지 2주 경과시 자동제거 */
	MEMBER_RECENT_VIEW_PLANNINGS: `./json/memberRecentViewPlannings.json`,
	/** */
	MEMBER_ADD_RECENT_VIEW_PLANNING: `./json/`,
	/** 마이페이지 > 메인 > 회원혜택집계 (쿠폰, 포인트) */
	MEMBER_AGGREGATES_BENEFIT: `./json/memberAggregatesBenefit.json`,
	/** 마이페이지 메인 > 주문집계 (3주기준) */
	MEMBER_AGGREGATES_ORDER: `./json/memberAggregatesOrder.json`,
	/** 마이페이지 메인 회원 등급업 조건달성 집계 조회 */
	MEMBER_AGGREGATES_GRADEUP_CONDITION: `./json/memberAggregatesGradeupCondition.json`,
	/** 마이페이지 > 판매자문의 리스트 조회 */
	MEMBER_SELLER_QNA_LIST: `./json/memberSellerQnaList.json`,
	/** */
	MEMBER_PREPARE_FOR_EDIT_SOCIAL: `./json/`,
	/** 마이페이지 > 작성가능리뷰(주문상품) 조회 (최근주문순) */
	MEMBER_REVIEW_WRITABLES: `./json/memberReviewWritables.json`,
	/** */
	MEMBER_REVIEW_TEMPLATES: `./json/`,
	/** */
	MEMBER_STORE_QNA: `./json/`,
	/** 작성한 1:1문의 조회 */
	MYPAGE_QNA_LIST: `./json/mypageQnaList.json`,
	/** */
	MEMBER_QNA: `./json/`,
	/** */
	MEMBER_UPDATE_QNA: `./json/`,
	/** */
	MEMBER_DELETE_QNA: `./json/`,
	/** 1:1 문의 가능 주문 조회 */
	MEMBER_QNA_ORDERS: `./json/memberQnaOrders.json`,
	/** 마이페이지 > 리뷰 집계 */
	MEMBER_AGGREGATES_REVIEW: `./json/memberAggregatesReview.json`,
	/** */
	MEMBER_GRADE_COUPON_REGIST_COUNT: `./json/`,
	/** */
	MEMBER_DOWNLOAD_GRADE_COUPON: `./json/`,
	/** 회원 > 배송지 리스트 조회 */
	MEMBER_RECEIVE_ADDRESS: `./json/memberReceiveAddress.json`,
	/** */
	MEMBER_STORE_RECEIVE_ADDRESS: `./json/`,
	/** */
	MEMBER_DELETE_RECEIVE_ADDRESS: `./json/`,
	/** */
	MEMBER_DELETE_SELLER_QNA: `./json/`,
	/** */
	MEMBER_SELLER_QNA_WRITABLE_ORDER_ITEMS: `./json/`,
	/** */
	MEMBER_STORE_SELLER_QNA: `./json/`,
	/** */
	MEMBER_SELLER_QNA: `./json/`,
	/** */
	MEMBER_UPDATE_SELLER_QNA: `./json/`,
	/** */
	MEMBER_ADULT_VERIFICATIONS: `./json/`,
	/** */
	MEMBER_MY_SIZE: `./json/`,
	/** */
	MEMBER_MY_SIZE_UPDATE: `./json/`,
	/** 마이페이지 > 배송지연신고 > 신고가능주문 조회 */
	MEMBER_CLAIM_DELIVERY_DELAY_REPORTABLE_ORDER_ITEMS: `./json/memberClaimDeliveryDelayReportableOrderItems.json`,
	/** */
	MEMBER_CLAIM_REPORT_DELIVERY_DELAY_ORDER_ITEMS: `./json/`,
	/** 마이페이지 > 배송지연신고 > 신고결과 조회 */
	MEMBER_CLAIM_DELIVERY_DELAY_REPORTED_ORDER_ITEMS: `./json/memberClaimDeliveryDelayReportedOrderItems.json`,
	/** 마이페이지 > 품절취소신고 > 신고가능주문 조회 */
	MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTABLE_ORDER_ITEMS: `./json/memberClaimSoldoutCancelReportableOrderItems.json`,
	/** 마이페이지 > 품절취소신고 > 신고결과 조회 */
	MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTED_ORDER_ITEMS: `./json/memberClaimSoldoutCancelReprotedOrderItems.json`,
	/** */
	MEMBER_CLAIM_REPORT_SOLDOUT_CANCEL_ORDER_ITEMS: `./json/`,
	/** 마이페이지 > 래플 응모 내역 > 리스트 조회 [진행 중인 래플, 종료된 래플(최근 6개월)] */
	MYPAGE_RAFFLE_ENTRY_LIST: `./json/mypageRaffleEntryList.json`
};

// 마이페이지 주문
const myOrderApi: Partial<Record<ApiKey, string>> = {
	/** 마이페이지 > 주문관리 > (정상)주문 리스트 최근순 조회 */
	MEMBER_ORDER_LIST: `./json/memberOrderList.json`,
	/** */
	MEMBER_ORDER_STATUS_CODES: `./json/`,
	/** */
	ORDER_CONFIRM_PURCHASE: `./json/`,
	/** */
	ORDER_CONFIRM_RECEIPT: `./json/`,
	/** 마이페이지 > 주문관리 > 취소주문 리스트 최근순 조회 */
	ORDER_CANCEL_LIST: `./json/orderCancelList.json`,
	/** 취소요청페이지 > 동일주문내 취소가능 주문상품 조회 */
	ORDER_CANCEL_CANCELABLES: `./json/orderCancelCancelables.json`,
	/** 취소요청페이지 > 환불금액 계산 결과 조회 */
	ORDER_CANCEL_REFUND_INFO: `./json/orderCancelRefundInfo.json`,
	/** */
	ORDER_CANCEL: `./json/`,
	/** 마이페이지 > 주문관리 > 반품주문 리스트 최근순 조회 */
	ORDER_RETURN_LIST: `./json/orderReturnList.json`,
	/** 반품 요청페이지 > 동일주문 내에 요청한 주문상품ID와 묶음반품 가능한 주문상품 조회 */
	ORDER_RETURN_RETURNABLE: `./json/orderReturnReturnable.json`,
	/** 반품 요청 페이지 > 환불금액 계산 결과 조회 (계산상세내역 > 면제배송비, 반품배송비 필수) */
	ORDER_RETURN_REFUND_INFO: `./json/orderReturnRefundInfo.json`,
	/** 교환요청페이지 > 추가결제금액 조회 */
	ORDER_EXCHANGE_ADDITIONAL_PAYMENTS: `./json/orderExchangeAdditionalPayments.json`,
	/** */
	ORDER_RETURN: `./json/`,
	/** */
	ORDER_RETURN_CANCEL: `./json/`,
	/** 마이페이지 > 주문관리 > 교환주문 리스트 최근순 조회 */
	ORDER_EXCHANGE_LIST: `./json/orderExchangeList.json`,
	/** 교환 요청페이지 > 동일주문 내에 요청한 주문상품ID와 묶음교환 가능한 주문상품 조회 */
	ORDER_EXCHANGE_EXCHANGEABLE: `./json/orderExchangeExchangeable.json`,
	/** 교환주문 반품전환 페이지 > 동일 교환주문번호 내 반품전환 가능 주문상품 조회 */
	ORDER_EXCHANGE_SWITCH_RETURNABLE: `./json/orderExchangeSwitchReturnable.json`,
	/** */
	ORDER_EXCHANGE_CANCEL: `./json/`,
	/** 주문관리 > 주문상세 조회 */
	ORDER_DETAIL: `./json/orderDetail.json`,
	/** 주문관리 > 주문상세 > 취소상세 조회 */
	ORDER_CANCEL_DETAIL: `./json/orderCancelDetail.json`,
	/** 주문관리 > 주문상세 > 반품주문 상세 조회 */
	ORDER_RETURN_DETAIL: `./json/orderReturnDetail.json`,
	/** */
	ORDER_UPDATE_DELIVERY_ADDRESS_ID: `./json/`,
	/** */
	ORDER_RETURN_UPDATE_RETRIEVE_INVOICE: `./json/`,
	/** */
	ORDER_EXCHANGE_PREPARE_PAY: `./json/`,
	/** */
	ORDER_EXCHANGE: `./json/`,
	/** 주문관리 > 주문상세 > 교환 상세 */
	ORDER_EXCHANGE_DETAIL: `./json/orderExchangeDetail.json`,
	/** */
	ORDER_EXCHANGE_UPDATE_RETRIEVE_INVOICE: `./json/`,
	/** */
	ORDER_UPDATE_DELIVERY_ADDRESS_INFO: `./json/`,
	/** */
	ORDER_EXCHANGE_PAY_RESULT: `./json/`,
	/** */
	ORDER_RECEIPT: `./json/orderReceipt.json`,
	/** */
	ORDER_SEND_RECEIPT_TO_EMAIL: `./json/`,
	/** */
	ORDER_EXCHANGE_TO_RETURN: `./json/`,
	/** 교환주문 반품전환 페이지 > 환불금액 계산 결과 조회 (계산상세내역 > 면제배송비, 반품배송비 필수) */
	ORDER_EXCHANGE_SWITCH_RETURN_REFUND_INFO: `./json/orderExchangeSwitchReturnRefundInfo.json`,
	/** */
	ORDER_RETURN_VALIDATE_INVOICE: `./json/`
};

// 주문 관련
const orderApi: Partial<Record<ApiKey, string>> = {
	/** 상품 구매 > 주문번호 생성 */
	ORDER_START: `./json/orderStart.json`,
	/** 주문번호로 주문서 데이터 조회 */
	ORDER_BASIC_DATA: `./json/orderBasicData.json`,
	/** 주문서 > 결제 진입 */
	ORDER_PREPARE_PAY: `./json/orderPreparePay.json`,
	/** 주문 > 결제완료, 실패 여부 조회 */
	ORDER_RESULT: `./json/orderResult.json`,
	/** 주문 > 카드 할부개월 조회 */
	ORDER_UTIL_CARD_INSTALLMENTS: `./json/orderUtilCardInstallments.json`,
	/** 주문서 > 사용가능 결제 수단 조회 */
	ORDER_UTIL_PAYMENT_METHODS: `./json/orderUtilPaymentMethods.json`,
	/** 자체 페이 > 등록된 결제 수단 조회 */
	ORDER_UTIL_MY_PAY_METHODS: `./json/orderUtilMypayMethods.json`,
	/** 자체페이 > 결제 토큰 발급 처리 */
	ORDER_UTIL_MY_PAY_PREPARE_TOKEN: `./json/`,
	/** 간편결제 등록 전처리 */
	ORDER_UTIL_MY_PAY_PREPARE_REIGST: `./json/`,
	/** 간편결제 관리 페이지 호출 전처리 */
	ORDER_UTIL_MY_PAY_MANAGEMENT: `./json/`
};

// 앱 관련
const nativeAppApis: Partial<Record<ApiKey, string>> = {
	/** 디바이스 고유 토큰 및 OS 저장 처리*/
	APP_STORE_FIREBASE_MESSAGING_TOKEN: `./json/`,
	/** 바이스 고유 토큰,OS정보로 저장된 USER 정보 수정(로그인, 로그아웃시 실행) */
	APP_UPDATE_FIREBASE_MESSAGING_TOKEN: `./json/`,
	/** 푸시,야간푸시 수신 동의 여부 조회*/
	APP_IS_RECEIVE_PUSH: `./json/appIsReceivePush.json`,
	/** 설정 페이지 > 광고성 푸시 수신 동의 여부 수정 */
	APP_UPDATE_PUSH_NOTIFICATION_AGREE: `./json/`,
	/** 앱 최신버전정보 및 업데이트 링크 조회 */
	APP_INFO: `./json/appInfo.json`,
	/** 생체인증용 값 생성 */
	APP_BIOMETRIC_CREATE: `./json/`,
	/** 생체인증용 로그인 */
	APP_BIOMETRIC_LOGIN: `./json/appBiometricLogin.json`
};

// 서드파티
const thirdPartyApi: Partial<Record<ApiKey, string>> = {
	/** 소셜 회원 로그인  */
	THIRD_PARTY_LOGIN: `./json/thirdPartyLogin.json`,
	/** 소셜 회원 프로필 조회 */
	THIRD_PARTY_PROFILE: `./json/thirdPartyProfile.json`,
	/** 애플 로그인 > 페이지 진입 URL, 토큰 생성  */
	THIRD_PARTY_TOKEN: `./json/thirdPartyToken.json`,
	/** 애플 로그인 > 토큰 결과값 조회  */
	THIRD_PARTY_TOKEN_RESULT: `./json/`,
	/** 소셜회원 가입처리  */
	THIRD_PARTY_REGIST_USER: `./json/thirdPartyRegisterUser.json`,
	/** 소셜회원 중복 체크 */
	THIRD_PARTY_USER_DUPLICATE_CHECK: `./json/thirdPartyUserDuplicateCheck.json`,
	/** 소셜 회원 > 연동 */
	THIRD_PARTY_USER_CONNECT: `./json/`,
	/** 소셜 회원 > 연동 해제 */
	THIRD_PARTY_USER_DISCONNECT: `./json/`,
	/** (소셜로그인)토큰발급 API 프로세스 완료 여부 조회 */
	THIRD_PARTY_IS_TOKEN_PROCESS_COMPLETED: `./json/`
};

// 라이브커머스
const liveCommerceApis: Partial<Record<ApiKey, string>> = {
	/**  */
	GENERATE_LIVE_COMMERCE_TOKEN: `./json/`,
	/** 라이브 커머스 > 예정 방송 조회 */
	GET_SCHEDULE_BROAD_CAST: `./json/getScheduleBroadCast.json`,
	/** 라이브 커머스 > 방송 목록 조회 */
	GET_ACTIVE_BROAD_CAST: `./json/getActiveBroadCast.json`,
};
export default {
	...apiMap,
	...baseApiKey,
	...exhibitApi,
	...authApi,
	...searchEngineApi,
	...shoppingApi,
	...goodsApi,
	...globalConfigApi,
	...csApi,
	...memberApi,
	...myOrderApi,
	...orderApi,
	...thirdPartyApi,
	...liveCommerceApis
};
