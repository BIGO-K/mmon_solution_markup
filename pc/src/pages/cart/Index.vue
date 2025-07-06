<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const cartListAPI = ref<CartListAPI>();

	// api
	Api.getAll([
		{ key: `SHOPPING_CART_ITEMS`, ref: cartListAPI },
	]);
</script>

<template>
	<div class="mm_inner m_cart">
		<h3 class="mm_title">
			<b>장바구니</b>
		</h3>
		<template v-if="cartListAPI != null && cartListAPI.packs.length < 1">
			<!-- 상품 정보 -->
			<section>
				<h4 class="mm_strapline T=line">
					<b>상품 정보</b>
				</h4>
				<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
				<None>장바구니에 담긴 상품이 없습니다.<br> 원하는 상품을 장바구니에 담아보세요!</None>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=primary"
						href="#"
					>
						<b>쇼핑하러 가기</b>
					</a>
				</div>
			</section>
		</template>

		<template v-else>
			<!-- 상품 정보 -->
			<section>
				<h4 class="mm_strapline T=line">
					<b>상품 정보</b>
				</h4>
				<div class="mm_order-item">
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check="{ '_type': 'check_all', '_group': 'dev_check-product' }"
							checked
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">선택상품<strong data-check="{ '_type': 'check_count', '_group': 'dev_check-product' }">0</strong></span>
						</b>
					</label>
					<button
						type="button"
						class="btn_delete"
					>
						<i class="ico_delete"></i>
						<b>선택삭제</b>
					</button>
					<section
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
								><strong>{{ pack.shipping_price }}</strong></span>
								<span v-else>무료배송</span>
							</p>
						</div>
						<ul>
							<li
								v-for="item in pack.items"
								:key="item.cart_id"
							>
								<div class="mm_flex">
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
									<div class="mm_product-item T=single">
										<a href="#">
											<figure>
												<div class="mm_image-scale">
													<LazyloadMUI
														class="mm_bg-cover image_product"
														:_src="item.goods_thumbnail_url"
													></LazyloadMUI>
												</div>
												<p
													v-if="item.is_soldout"
													class="text_soldout"
												>SOLD OUT</p>
												<figcaption>
													<p class="text_brand">{{ item.brand_name }}</p>
													<p class="text_product">{{ item.goods_name }}</p>
													<p class="text_option">{{ item.option_name }} / {{ item.ea }}개</p>
												</figcaption>
											</figure>
										</a>
									</div>
									<button
										type="button"
										class="btn_like"
										data-switch
									>
										<i class="ico_like"></i>
										<b class="mm_ir-blind">찜한 아이템에 추가하기</b>
									</button>
									<div class="m_cart-option">
										<button
											type="button"
											class="mm_btn T=xs T=line btn_option-change"
										>
											<b>옵션/수량 변경</b>
											<i class="ico_dropdown T=xs"></i>
										</button>

										<!-- 옵션 변경 레이어 -->
									</div>
									<p class="text_price">
										<strong>{{ item.goods_sell_price * item.ea }}</strong>
									</p>
									<div class="mm_btn_box">
										<div class="mm_block">
											<button
												type="button"
												class="mm_btn T=sm T=primary"
											>
												<b>바로구매</b>
											</button>
											<button
												type="button"
												class="btn_delete"
											>
												<i class="ico_delete"></i>
												<b>삭제</b>
											</button>
										</div>
									</div>
								</div>
							</li>
						</ul>

						<!-- 셀러별 상품금액 합계 -->
						<p class="text_total-price">
							131,000원 + 배송비 2,500원 = <strong>135,500</strong>원<span>300,000원 이상 무료배송</span>
						</p>
					</section>
				</div>
			</section>

			<!-- 최종 결제금액 -->
			<section class="m_cart-total">
				<h4 class="mm_strapline T=line">
					<b>최종 결제금액</b>
				</h4>
				<div class="mm_flex T=auto m_cart-total-list">
					<dl class="mm_flex">
						<dt>총 상품금액</dt>
						<dd>
							<p class="text_price">
								<strong>10,210,000</strong>
							</p>
						</dd>
					</dl>
					<dl class="mm_flex">
						<dt><i class="ico_total-plus"></i>배송비</dt>
						<dd>
							<p class="text_price">
								<strong>2,500</strong>
							</p>
						</dd>
					</dl>
					<dl class="mm_flex">
						<dt><i class="ico_total-minus"></i>회원할인</dt>
						<dd>
							<p class="text_price">
								<strong>11,500</strong>
							</p>
						</dd>
					</dl>
					<dl class="mm_flex">
						<dt><i class="ico_total-equal"></i>최종 결제금액</dt>
						<dd>
							<p class="text_price mm_text-variable">
								<strong>10,412,100</strong>
							</p>
						</dd>
					</dl>
				</div>
			</section>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="m_cart-tooltip">
					<p><strong class="mm_text-secondary">추가할인</strong>은 주문 시 적용됩니다</p>
					<button
						type="button"
						class="btn_close"
						data-switch="{ '_isParent': true, '_classOn': 'S=tooltip-hide' }"
					>
						<i class="ico_close"></i>
						<b class="mm_ir-blind">닫기</b>
					</button>
				</div>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=lg T=primary btn_order"
					>
						<b>총 <strong>20</strong>개</b>
						<b><strong>520,400</strong>원 주문하기</b>
						<i class="ico_link T=xs"></i>
					</button>
				</div>
			</div>
		</template>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
	(function () {

		// 옵션/수량 변경 버튼 클릭(옵션 변경 레이어 오픈)
		mm.event.on('.btn_option-change', 'click', function () {

			var $this = this;
			var $layer = mm.find('.mm_layer.S=on')[0];
			var _classOn = 'S=on';

			if ($this.nextElementSibling.classList.contains(_classOn)) $this.nextElementSibling.classList.remove(_classOn);
			else {
				if ($layer) $layer.classList.remove(_classOn);
				$this.nextElementSibling.classList.add(_classOn);
			}

			mm.event.on('.btn_layer-close', 'click', function () {

				this.closest('.mm_layer').classList.remove(_classOn);

			});

		});

	})();
</script> -->