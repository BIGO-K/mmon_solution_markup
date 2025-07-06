declare interface SellerAPI {
	name: string;
}

declare interface CurationAPI {
	best_goods: ProductItemBaseData[];
	new_goods: ProductItemBaseData[];
}