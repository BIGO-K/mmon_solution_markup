<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import Header from '@/components/header/Header.vue';
	import Headline from '@/features/headline/components/HeadlineProduct.vue';

	const cartListAPI = ref<CartListAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<CartListAPI>(`SHOPPING_CART_ITEMS`, cartListAPI);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		headline: {
			_is: true,
			// value: productItem.product.headline
		},
	};
</script>

<template>
	<!-- 화면 -->
	<div class="mm_view">
		<Header>
			<template #title>
				<h1><b>장바구니</b></h1>
			</template>
		</header>

		<!-- 내용 -->
		<div
			id="mm_body"
			class="mm_page"
		>
			<!-- (D) 실제 내용을 추가하는 부분입니다. -->

			<div class="mm_scroller">
				<div class="mm_page-inner">
					<!-- 본문 -->
					<div class="mm_page-content">
						<div
							v-if="cartListAPI != null && cartListAPI?.packs.length < 1"
							class="m_cart"
						>
							<p class="mm_text-none">
								<i class="ico_text-none"></i>장바구니에 담긴 상품이 없습니다.<br> 원하는 상품을 장바구니에 담아보세요!
							</p>
							<div class="mm_btn_box">
								<div class="mm_inline">
									<button
										type="button"
										class="mm_btn T=primary"
									>
										<b>쇼핑하러 가기</b>
									</button>
								</div>
							</div>
						</div>
						<div
							v-else
							class="m_cart"
						>
							<!-- 장바구니 품목 -->
							<div class="mm_order-item">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_type': 'check_all', '_group': 'dev_check-product' }"
										checked
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">선택상품(<span data-check="{ '_type': 'check_count', '_group': 'dev_check-product' }"></span>)</span>
									</b>
								</label>
								<button
									type="button"
									class="btn_remove"
								>
									<i class="ico_remove-trash"></i><b>선택삭제</b>
								</button>
								<div
									v-for="pack, index in cartListAPI?.packs"
									:key="index"
									class="mm_order-item-seller"
								>
									<div class="mm_order...seller-head">
										<p class="text_ship">
											<i class="ico_ship"></i>
											<span
												v-if="pack.shipping_price > 0"
												class="text_price"
											>
												<strong>{{ pack.shipping_price }}</strong>
											</span>
											<span v-else>무료배송</span>
										</p>
									</div>
									<div class="mm_product-list T=sm">
										<ul>
											<li
												v-for="item in pack.items"
												:key="item.cart_id"
											>
												<label class="mm_form-check">
													<input
														type="checkbox"
														data-check="{ '_group': 'dev_check-product' }"
													>
													<b class="mm_block">
														<i class="ico_form-check"></i>
														<span class="mm_ir-blind text_label">상품 선택</span>
													</b>
												</label>
												<p class="text_seller">
													<i class="ico_shop"></i>{{ item.seller_name }}
												</p>
												<div class="mm_product-item">
													<a href="#">
														<figure>
															<LazyloadMUI
																class="mm_bg-cover image_product"
																:_src="item.goods_thumbnail_url"
															></LazyloadMUI>
															<p
																v-if="item.is_soldout"
																class="text_soldout"
															>SOLD OUT</p>
															<figcaption>
																<p class="text_brand">{{ item.brand_name }}</p>
																<p class="text_product">
																	<Headline v-if="feature.headline._is"></Headline>
																	{{ item.goods_name }}
																</p>
																<p class="text_price"><strong>{{ item.goods_sell_price * item.ea }}</strong></p>
																<p class="text_option">{{ item.option_name }} / {{ item.ea }}개</p>
															</figcaption>
														</figure>
													</a>
													<div class="mm_product-item-footer">
														<div class="mm_btn_box">
															<div class="mm_flex T=equal">
																<button
																	type="button"
																	class="btn_like"
																	data-switch
																>
																	<i class="ico_like"></i><b class="mm_ir-blind">찜한 아이템에 추가하기</b>
																</button>
																<p
																	v-if="item.is_soldout"
																	class="text_cart-soldout"
																>
																	상품이 품절되었어요
																</p>
																<template v-else>
																	<button
																		type="button"
																		class="mm_btn T=sm T=line btn_option-change"
																		data-switch="{ '_isParent': true, '_parentSelector': '.mm_product-item-footer' }"
																	>
																		<b>옵션/수량 변경</b><i class="ico_toggle"></i>
																	</button>
																	<button
																		type="button"
																		class="mm_btn T=sm T=line T=primary"
																	>
																		<b>바로구매</b>
																	</button>
																</template>
															</div>
														</div>
														<div class="m_cart-option">
															<a
																class="btn_size"
																href="#"
															>
																<i class="ico_size"></i><b>사이즈 가이드</b>
															</a>
														</div>
													</div>
												</div>
												<button
													type="button"
													class="btn_remove"
												>
													<i class="ico_remove"></i><b class="mm_ir-blind">상품 삭제</b>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<hr class="mm_line">

							<!-- 결제금액 -->
							<div class="mm_cost">
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>총 상품금액</b>
											</th>
											<td>
												<p class="text_price">
													<strong>210,000</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>배송비</b>
											</th>
											<td>
												<p class="text_price">
													+ <strong>2,500</strong>
												</p>
											</td>
										</tr>
										<tr>
											<th scope="row">
												<b>회원할인</b>
											</th>
											<td>
												<p class="text_price">
													- <strong>6,200</strong>
												</p>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th scope="row">
												<b>최종 결제금액</b>
											</th>
											<td>
												<p class="text_price mm_text-variable">
													<strong>201,510</strong>
												</p>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>

							<!-- 추가할인 안내문구 -->
							<div class="m_cart-popover">
								<p><strong>추가할인</strong>은 주문 시 적용됩니다</p>
								<button
									type="button"
									class="btn_close"
									onclick="this.closest('.m_cart-popover').classList.add('S=popover-hide');"
								>
									<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 하단고정버튼 -->
			<div class="mm_btn_box T=fixed">
				<button
					type="button"
					class="mm_flex T=auto btn_order"
				>
					<b class="text_total">총 <strong>10</strong>개</b>
					<b class="text_order"><strong>314,800</strong>원 주문하기</b>
				</button>
			</div>

			<a
				class="btn_topmost"
				href="#mm_app"
				data-href="{ '_type': 'anchor' }"
				title="페이지 처음으로"
			>
				<i class="ico_topmost"></i><b>TOP</b>
			</a>
		</div>
	</div>
</template>