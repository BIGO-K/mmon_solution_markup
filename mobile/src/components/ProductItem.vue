<script setup lang="ts">
	import { provide, ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Headline from '@/features/headline/components/HeadlineProduct.vue';
	import ProductIcon from '@/features/productIcon/components/ProductIcon.vue';
	import RestockIcon from '@/features/restock/components/RestocIcon.vue';

	const productItem = withDefaults(defineProps<{
			product: ProductItemData;
			/** 상품 타입 클래스 */
			class?: string;
			/** 정가 노출 */
			isSalePrice?: boolean;
			/** 랭킹 순위 사용 */
			isRank?: boolean;
			/** 좋아요 수, 리뷰 수, 리뷰 스코어 평균 등 반응 사용 */
			isReact?: boolean;
			/** 무료배송 등 뱃지 사용 */
			isBadge?: boolean;
			isOrder?: boolean;
		}>(),
		{
			class: '',
			isSalePrice: true,
			isRank: false,
			isReact: true,
			isBadge: true,
			isOrder: false
		});

	const isRequiredProduct = (x: ProductItemData): x is Required<ProductItemData> => {
		return x.badges != null || x.review_count != null && x.review_score_average != null && x.wish_count != null;
	};

	// 유료기능 사용 검증 및 세팅
	const feature = {
		productIcon: {
			_is: true,
			// value: productItem.product.icon
		},
		headline: {
			_is: true,
			// value: productItem.product.headline
		},
		restockIcon: {
			_is: true
		},
	};

	provide('productIcon', productItem.product.icon);
	provide('headline', productItem.product.headline);

	const _isLike = ref(false);
</script>

<template>
	<div
		class="mm_product-item"
		:class="productItem.class"
	>
		<router-link :to="{ name:'ProductDetail', params: { id: product.id } }">
			<p
				v-if="isRank"
				class="text_rank"
			></p>
			<figure>
				<LazyloadMUI
					class="mm_bg-cover image_product"
					:_src="product.thumbnail_url"
				></LazyloadMUI>
				<p
					v-if="product.is_only_adult"
					class="text_adult"
				>
					<b class="mm_ir-blind">미성년자 구매불가</b>
					<i class="ico_adult"></i>
				</p>
				<p
					v-if="product.is_soldout"
					class="text_soldout"
				>
					SOLD OUT
				</p>
				<p
					v-if="(product.stock ?? NaN) < 5"
					class="text_product-status"
				>
					품절임박
				</p>
				<ProductIcon v-if="feature.productIcon._is"></ProductIcon>
				<RestockIcon v-if="product.is_soldout && feature.restockIcon._is"></RestockIcon>
				<figcaption>
					<p class="text_brand">
						{{ product.brand_name }}
					</p>
					<p class="text_product">
						<Headline v-if="feature.headline._is"></Headline>
						{{ product.name }}
					</p>
					<p class="text_sale">
						{{ `${product.sale_rate}%` }}
					</p>
					<p class="text_price">
						<strong>{{ product.base_discounted_price }}</strong>
						<del v-if="productItem.isSalePrice && (product.sale_rate ?? NaN) > 0"><span>{{ product.price }}</span></del>
					</p>
					<div
						v-if="isReact !== false && isRequiredProduct(product)"
						class="mm_product-item-react"
					>
						<p
							v-if="product.review_score_average > 0"
							class="text_star"
						>
							<i class="ico_star"></i><span>{{ product.review_score_average }}</span>
						</p>
						<p
							v-if="product.review_count > 0"
							class="text_review"
						>
							<i class="ico_review"></i><span>{{ product.review_count }}</span>
						</p>
						<p
							v-if="product.wish_count > 0"
							class="text_like"
						>
							<i class="ico_like"></i><span>{{ product.wish_count }}</span>
						</p>
					</div>
					<div
						v-if="isBadge !== false && isRequiredProduct(product)"
						class="mm_tag-list"
					>
						<b
							v-for="badge in product.badges"
							:key="badge"
							class="mm_tag T=square T=dark"
						>
							{{ badge }}
						</b>
					</div>
				</figcaption>
			</figure>
		</router-link>
		<button
			type="button"
			class="btn_like"
			:class="{ 'S=switch-on': _isLike }"
			data-switch
			@click="_isLike = !_isLike"
		>
			<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
		</button>
	</div>
</template>