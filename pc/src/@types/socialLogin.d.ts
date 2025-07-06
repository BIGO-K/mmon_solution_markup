declare interface LoginWithItem {
	name: string;
	call: () => Promise<void>
}

declare interface LoginWithMap {
	naver: LoginWithItem;
	kakao: LoginWithItem;
	apple: LoginWithItem;
}