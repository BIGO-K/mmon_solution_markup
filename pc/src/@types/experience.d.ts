declare interface ExperienceListAPI {
	paginator: {
		total: number;
		current_page: number;
		per_page: number;
		data: {
			id: number;
			title: string;
			thumbnail_url: string;
			grade: number;
			writer: string;
			recommendation_count: number;
			view_count: number;
			created_at: string;
		}[];
	};
}