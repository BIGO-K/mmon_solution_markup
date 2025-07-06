<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const { configPoint, configFeature } = useConfigStore();

	const claimShipAPI = ref<ClaimShipAPI>();
	Api.getAll([
		{ key: `MEMBER_CLAIM_DELIVERY_DELAY_REPORTABLE_ORDER_ITEMS`, ref: claimShipAPI },
	]);
</script>

<template>
	<p
		v-if="claimShipAPI != null && claimShipAPI?.paginator.total > 0"
		class="text_quantity"
	>
		신고가능 주문 수<strong>{{ claimShipAPI.paginator.total }}</strong><sub>개</sub>
	</p>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="claimShipAPI != null && claimShipAPI.paginator.data.length < 1"
	>
		배송지연 신고 가능 주문이 없습니다
	</None>

	<template
		v-else
	>
		<!-- 배송지연 신고 가능 목록 -->
		<article
			v-for="order in claimShipAPI?.paginator.data"
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
		v-if="$route.query.type != 'none' && claimShipAPI?.paginator != null"
		:total-page="Math.ceil(claimShipAPI.paginator.total / claimShipAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>

	<!-- 배송지연 보상정책 안내 -->
	<section>
		<h5><b>배송지연 보상정책 안내</b></h5>
		<p>
			결제완료일 다음날(1일째) 부터 3일 이내 배송출발이 되지 않았을 경우 상품금액의
			{{
				configFeature.reward_policies?.delivery_delay_reward_policies.length === 1
					? `${configFeature.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}%`
					: `최저 ${configFeature.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}% ~ 최고 ${configFeature.reward_policies?.delivery_delay_reward_policies[configFeature.reward_policies?.delivery_delay_reward_policies?.length - 1].reward_rate || 0}%`
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
						v-for="(reward, index) in configFeature.reward_policies?.delivery_delay_reward_policies"
						:key="reward.day"
					>
						<th
							v-if="index + 1 === configFeature.reward_policies?.delivery_delay_reward_policies.length"
							scope="row"
						>
							<b>{{ reward.day }}일 이상 지연</b>
						</th>
						<th
							v-else
							scope="row"
						>
							<b>{{ reward.day }}일 지연</b>
						</th>
						<td>{{ reward.reward_rate }}% ({{ configPoint.label_name }} 보상)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mm_note">
			<ul>
				<li>결제완료일로부터 배송출발일 수 기준</li>
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