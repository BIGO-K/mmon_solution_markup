<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const folderListAPI = ref<LikeProductFolderAPI>();
	const productListAPI = ref<LikeProductAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_WISH_GOODS_FOLDERS`, ref: folderListAPI },
		{ key: `MEMBER_WISH_GOODS_IN_FOLDER`, ref: productListAPI },
	]);

	// TODO folder id(computed)를 가져와서 api 재호출
</script>

<template>
	<div class="m_my-like-prod">
		<!-- 폴더목록 -->
		<div class="m...prod-folder">
			<button
				type="button"
				class="btn_folder-add"
			>
				<i class="ico_folder-add"></i><b>새 폴더 추가하기</b>
			</button>
			<a
				class="btn_folder-modify"
				href="#"
			><i class="ico_setup"></i><b>폴더 수정</b></a>
			<div class="mm_scroller">
				<!-- (D) 선택된 폴더에 'S=folder-open' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul>
					<li
						v-for="folder in folderListAPI?.wish_goods_folders"
						:key="folder.id"
					>
						<router-link
							class="btn_folder"
							:to="{ query: { type: folder.id } }"
							replace
						>
							<i class="ico_folder"></i><b>{{ folder.name }}<small>{{ folder.records_count }}</small></b>
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<!-- 상품리스트 -->
		<div class="m...prod-list">
			<div class="m...prod-list-head">
				<p>기본폴더<strong>50</strong></p>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=xs T=dark"
						href="#"
					>
						<i class="ico_folder-open"></i><b>폴더이동</b>
					</a>
					<button
						type="button"
						class="mm_btn T=xs T=line T=lighter"
					>
						<b>선택삭제</b>
					</button>
					<button
						type="button"
						class="mm_btn T=xs T=line T=lighter"
					>
						<b>전체삭제</b>
					</button>
				</div>
			</div>
			<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
			<None
				v-if="productListAPI != null && productListAPI.wish_goods.length < 1"
			>
				찜한 아이템이 없습니다
			</None>
			<ul
				v-else
			>
				<li
					v-for="product in productListAPI?.wish_goods"
					:key="product.id"
				>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label mm_ir-blind">상품 선택</span>
						</b>
					</label>
					<div class="mm_product-item T=single T=sm">
						<router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
							<figure>
								<div class="mm_image-scale">
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="product.thumbnail_url"
									></LazyloadMUI>
								</div>
								<figcaption>
									<p class="text_brand">
										{{ product.brand_name }}
									</p>
									<p class="text_product">
										{{ product.name }}
									</p>
									<p class="text_sale">
										{{ product.sale_rate }}%
									</p>
									<p class="text_price">
										<strong>{{ product.base_discounted_price }}</strong>
									</p>
								</figcaption>
							</figure>
						</router-link>
					</div>
					<button
						type="button"
						class="btn_remove"
					>
						<b class="mm_ir-blind">선택삭제</b><i class="ico_remove"></i>
					</button>
				</li>
			</ul>
		</div>
	<!--// 상품리스트 -->
	</div>
</template>