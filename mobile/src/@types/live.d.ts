interface LiveItem {
	thumbnails: {
		url: string;
		is_representative: boolean;
	}[];
	broadcast_thumbnails: {
		url: string;
		is_representative: boolean;
	}[];
	broadcast: {
		id: string;
		name: string;
		explanation: string;
		type_code: string;
		programming_start_at: string;
		programming_end_at: string;
		broadcast_start_at: string;
		broadcast_end_at: string;
		total_duration: number;
		hash_tags: string[];
		preview_url: string;
	};
}

interface LiveListAPI {
	total_count: number;
	next_page: number | null;
	items_count: number;
	items: LiveItem[];
}

/** 방송중 목록 조회 */
interface LiveActiveListAPI extends LiveListAPI {
	items: (LiveItem & {
		room: {
		chat_counter: number;
		incoming_counter: number;
		reaction_counter: number;
		};
	})[];
}

/** 방송중 목록 조회 */
type LiveScheduleListAPI = LiveListAPI

