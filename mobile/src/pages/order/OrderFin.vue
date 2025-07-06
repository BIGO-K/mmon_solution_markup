<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import GiftInfo from '@/features/gift/components/GiftOrderFinGiftInfo.vue';

	const orderResultAPI = ref<OrderResultAPI>();
	const { configShop } = useConfigStore();

	Api.getAll([
		{ key: `ORDER_RESULT`, ref: orderResultAPI }
	]);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		gift: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>주문완료</b></h1>
		</template>

		<template #content>
			<div class="m_popup-order-fin">
				<div class="mm_inner">
					<h3 class="mm_title">
						<b>주문이 완료되었습니다</b>
					</h3>
					<p>주문번호: 2005141142151234562</p>
					<div
						v-if="orderResultAPI?.payment_info.eng_label === 'virtual_account'"
						class="m...fin-deposit"
					>
						<p class="text_deadline">
							입금기한: {{ orderResultAPI?.payment_info.bank_input_expire_date.split('T')[0] }}<span>23:59:59</span>까지
						</p>
						<p>입금계좌: {{ orderResultAPI?.payment_info.bank_label }} {{ orderResultAPI?.payment_info.bank_account_number }}</p>
					</div>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<router-link
								class="mm_btn T=line T=dark"
								:to="{ name: 'MyOrder' }"
							>
								<b>구매내역 보기</b>
							</router-link>
							<router-link
								class="mm_btn T=primary"
								to="/"
							>
								<b>쇼핑 홈 가기</b>
							</router-link>
						</div>
					</div>
				</div>

				<!-- (D) 주문실패 -->
				<!-- <div class="mm_inner">
					<p class="mm_text-none">
						<i class="ico_text-none"></i>결제 승인에 실패했습니다<br>카드 잔액이 부족합니다
					</p>
					<div class="mm_btn_box">
						<div class="mm_flex T=equal">
							<a
								class="mm_btn T=line T=dark"
								href="#"
							>
								<b>주문서로 가기</b>
							</a>
							<a
								class="mm_btn T=primary"
								href="#"
							>
								<b>쇼핑 홈 가기</b>
							</a>
						</div>
					</div>
				</div> -->

				<!-- 주문 상품 -->
				<div class="mm_order-item">
					<div
						v-for="pack in orderResultAPI?.packs"
						:key="pack.shipping_price"
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
									v-for="product in pack.items"
									:key="product.goods_name"
								>
									<p class="text_seller">
										<i class="ico_shop"></i>{{ product.seller_name }}
									</p>
									<div class="mm_product-item">
										<a>
											<figure>
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="product.goods_thumbnail_url"
												></LazyloadMUI>
												<figcaption>
													<p class="text_brand">{{ product.brand_name }}</p>
													<p class="text_product">{{ product.goods_name }}</p>
													<p class="text_price"><strong>{{ product.goods_sell_price - (product.coupon_amount ?? 0) }}</strong></p>
													<p class="text_option">{{ product.option_name }} / 1개</p>
												</figcaption>
											</figure>
										</a>
										<div class="mm_product-item-footer">
											<p class="text_point">
												사용 적립금<b><strong>{{ product.used_point_amount }}</strong><sub>원</sub></b>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<div class="mm_inner">
					<GiftInfo v-if="feature.gift._is"></GiftInfo>

					<!-- 배송지 정보 -->
					<section>
						<h4 class="mm_strapline">
							<b>배송지 정보</b>
						</h4>
						<div class="mm_order-info">
							<table>
								<tbody>
									<tr>
										<th scope="row">
											<b>배송지명</b>
										</th>
										<td>{{ orderResultAPI?.receive_address.shipping_name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>받는 사람</b>
										</th>
										<td>{{ orderResultAPI?.receive_address.name }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>휴대폰 번호</b>
										</th>
										<td>{{ orderResultAPI?.receive_address.phone }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>주소</b>
										</th>
										<td>{{ orderResultAPI?.receive_address.zip_code }}<br>{{ orderResultAPI?.receive_address.base_address }} {{ orderResultAPI?.receive_address.detail_address }}</td>
									</tr>
									<tr>
										<th scope="row">
											<b>배송메모</b>
										</th>
										<td>{{ orderResultAPI?.receive_address.message }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<!-- 최종 결제금액 -->
					<section class="mm_costbox">
						<h4 class="mm_strapline">
							<b>최종 결제금액</b>
						</h4>
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
											<b>추가할인</b>
										</th>
										<td>
											<p class="text_price">
												- <strong>6,200</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>쿠폰할인</b>
										</th>
										<td>
											<p class="text_price">
												- <strong>8,540</strong>
											</p>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<b>적립금 사용</b>
										</th>
										<td>
											<p class="text_point">
												- <strong>2,450</strong><sub>원</sub>
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
						<div class="mm_costbox-unit">
							<p>결제수단: {{ orderResultAPI?.payment_info.label }}</p>
							<template v-if="orderResultAPI?.payment_info.eng_label === 'credit_card'">
								<p>카드사: {{ orderResultAPI?.payment_info.card_label }}</p>
								<p>카드번호: {{ orderResultAPI?.payment_info.card_masking_number }}</p>
								<p>결제승인일: 2020.06.04<span class="text_time">12:30:12</span></p>
							</template>
							<template v-if="orderResultAPI?.payment_info.eng_label === 'virtual_account'">
								<p>이체은행: {{ orderResultAPI?.payment_info.bank_label }}</p>
								<p>예금주: {{ configShop.bank_owner_name }}</p>
								<p>계좌번호: {{ orderResultAPI?.payment_info.bank_account_number }}</p>
								<p>입금기한: {{ orderResultAPI?.payment_info.bank_input_expire_date.split('T')[0] }} 23:59:59</p>
								<p>입금액: </p>
							</template>
						</div>
					</section>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>