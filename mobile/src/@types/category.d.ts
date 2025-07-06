interface CategoryBase {
	code: string;
	depth: number;
	full_path: string;
	name: string;
	image_url: string;
	alt: string;
	pc_top_imape_url: string;
	pc_top_alt: string | null;
	mobile_top_imape_url: string;
	mobile_top_alt: string | null;
}

interface CategoryItem extends CategoryBase {
	children: CategoryItem[];
}

interface CategoryListAPI {
	category_list: CategoryItem[];
}