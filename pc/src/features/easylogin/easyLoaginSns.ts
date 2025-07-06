interface LoginWithMap {
	payco: LoginWithItem;
}

const easyLoginWithMap: LoginWithMap = {
	payco: {
		name: '페이코',
		call: async (): Promise<void> => {
			console.log(1);
		}
	}
};

export default easyLoginWithMap;