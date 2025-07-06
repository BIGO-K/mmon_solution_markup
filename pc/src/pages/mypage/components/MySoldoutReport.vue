<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const { configPoint, configFeature } = useConfigStore();

	const claimSoldoutAPI = ref<ClaimSoldoutAPI>();
	Api.getAll([
		{ key: `MEMBER_CLAIM_SOLDOUT_CANCEL_REPORTABLE_ORDER_ITEMS`, ref: claimSoldoutAPI },
	]);
</script>

<template>
	<p
		v-if="claimSoldoutAPI != null && claimSoldoutAPI?.paginator.total > 0"
		class="text_quantity"
	>
		신고가능 주문 수<strong>{{ claimSoldoutAPI.paginator.total }}</strong><sub>개</sub>
	</p>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="claimSoldoutAPI != null && claimSoldoutAPI.paginator.data.length < 1"
	>
		품절취소 신고 가능 주문이 없습니다
	</None>

	<template
		v-else
	>
		<!-- 품절취소 신고 가능 목록 -->
		<article
			v-for="order in claimSoldoutAPI?.paginator.data"
			:key="order.order_id"
			class="mm_order-item"
		>
			<h5>
				<b>{{ order.paid_at }}</b>
				<strong>주문번호: {{ order.order_id }}</strong>
			</h5>
			<section
				v-for="seller in order.packs[0].sellers"
				:key="seller.id"
				class="mm_order-item-seller"
			>
				<div class="mm_order...seller-head">
					<h5><i class="ico_shop"></i><b>{{ seller.name }}</b></h5>
				</div>
				<ul>
					<li
						v-for="item in seller.order_items"
						:key="item.id"
					>
						<div class="mm_flex">
							<p class="text_status">
								{{ item.order_status_label }}
							</p>
							<div class="mm_product-item T=single">
								<a href="#">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="item.goods.thumbnail_url"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">{{ item.goods.brand_name }}</p>
											<p class="text_product">{{ item.goods.name }}</p>
											<p class="text_option">{{ item.goods.option_name }}</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<p class="text_price">
								<strong>{{ item.paid_price }}</strong>
							</p>
							<dl><dt>결제방식</dt><dd>{{ order.payment_method_label }}</dd></dl>
							<div class="mm_btn_box">
								<div class="mm_block">
									<button
										type="button"
										class="mm_btn T=sm T=line T=light"
									>
										<b>배송지연 신고</b>
									</button>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</article>
	</template>
	<Pagination
		v-if="$route.query.type != 'none' && claimSoldoutAPI?.paginator != null"
		:total-page="Math.ceil(claimSoldoutAPI.paginator.total / claimSoldoutAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>

	<!-- 품절취소 보상정책 안내 -->
	<section>
		<h5><b>품절취소 보상정책 안내</b></h5>
		<p>
			재고 부족 등의 이유로 품절 사실을 안내 받으신 경우 상품 금액
			{{
				configFeature.reward_policies?.soldout_cancel_reward_policies.length === 1
					? `${configFeature.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}%`
					: `최저 ${configFeature.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}% ~ 최고 ${configFeature.reward_policies?.soldout_cancel_reward_policies[configFeature.reward_policies?.soldout_cancel_reward_policies?.length - 1].reward_rate || 0}%`
			}}를 {{ `${configPoint.label_name}로` }} 보상해드리는 제도입니다.
		</p>
		<div class="mm_table-point">
			<table>
				<colgroup>
					<col style="width: 205px;">
					<col>
				</colgroup>
				<tbody>
					<tr
						v-for="reward in configFeature.reward_policies?.soldout_cancel_reward_policies"
						:key="reward.day"
					>
						<th scope="row">
							<b>{{ reward.day }}일 후 안내</b>
						</th>
						<td>{{ reward.reward_rate }}% ({{ configPoint.label_name }} 보상)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mm_note">
			<ul>
				<li>결제완료일로부터 품절등록일 수 기준</li>
			</ul>
		</div>
	</section>

	<!-- 유의사항 -->
	<section class="mm_note">
		<h5 class="text_title">
			<i class="ico_note"></i><b>유의사항</b>
		</h5>
		<ul>
			<li>결제일로부터 30일 이내에 신고하셔야 보상금 지급이 가능합니다.</li>
			<li>해외배송 상품 및 주문제작 상품은 보상제도에서 제외됩니다.</li>
			<li>
				보상 신청은 결제일로부터 최대 30일 이내에 하셔야 하고, 최대 보상 금액은 {{ configFeature.reward_policies?.maximum_reward_price }}만원 입니다.
			</li>
			<li>지연일은 영업일 기준으로 토,일,공휴일은 포함하지 않습니다.</li>
			<li>비회원, 해외직배송, 주문 제작, 주문 후 오프라인 매장을 통한 배송 상품, 해당 상품 취소 및 반품 시에는 본 기준에서 제외됩니다.</li>
			<li>무통장 결제의 경우 입금완료일을 기준으로 합니다.</li>
		</ul>
	</section>
</template>