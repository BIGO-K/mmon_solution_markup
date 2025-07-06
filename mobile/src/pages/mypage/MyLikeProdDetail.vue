<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const productListAPI = ref<LikeProductAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<LikeProductAPI>(`MEMBER_WISH_GOODS_IN_FOLDER`, productListAPI);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>{{ $route.query.name }}</b></h1>
		</template>

		<template #content>
			<div class="m_popup-mylike-folder">
				<!-- 상단영역 -->
				<div class="m...folder-head">
					<div class="mm_lside">
						<p>전체<strong class="mm_text-variable">3개</strong></p>
					</div>
					<div
						v-if="productListAPI"
						class="mm_rside"
					>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<button
									type="button"
									class="mm_btn T=sm T=line T=light btn_modify"
								>
									<i class="ico_modify"></i><b>편집</b>
								</button>
								<button
									type="button"
									class="mm_btn T=sm T=line T=primary btn_move"
									disabled
								>
									<b>이동</b>
								</button>
								<button
									type="button"
									class="mm_btn T=sm T=line T=primary btn_remove"
									disabled
								>
									<b>삭제</b>
								</button>
								<button
									type="button"
									class="mm_btn T=sm T=line T=light btn_modify-cancel"
								>
									<i class="ico_modify"></i><b>편집취소</b>
								</button>
							</div>
						</div>
					</div>
				</div>

				<p
					v-if="(productListAPI?.wish_goods.length ?? NaN) < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>찜한 아이템이 없습니다
				</p>

				<!-- 상품목록 -->
				<div
					v-else
					class="mm_product-list T=sm"
				>
					<ul>
						<li
							v-for="product in productListAPI?.wish_goods"
							:key="product.id"
						>
							<div class="mm_product-item">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'dev_check-prod' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label mm_ir-blind">상품 선택</span>
									</b>
								</label>
								<a href="prodDetail_info.html">
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="product.thumbnail_url"
										></LazyloadMUI>
										<p
											v-if="product.is_soldout"
											class="text_soldout"
										>
											품절
										</p>
										<figcaption>
											<p class="text_brand">{{ product.brand_name }}</p>
											<p class="text_product">{{ product.name }}</p>
											<p class="text_price"><strong>{{ product.base_discounted_price }}</strong></p>
										</figcaption>
									</figure>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>