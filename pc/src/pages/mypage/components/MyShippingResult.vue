<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const { configPoint, configFeature } = useConfigStore();

	const claimShipResultAPI = ref<ClaimShipResultAPI>();
	Api.getAll([
		{ key: `MEMBER_CLAIM_DELIVERY_DELAY_REPORTED_ORDER_ITEMS`, ref: claimShipResultAPI },
	]);
</script>

<template>
	<p
		v-if="claimShipResultAPI != null && claimShipResultAPI?.paginator.total > 0"
		class="text_quantity"
	>
		신고 주문 수<strong>{{ claimShipResultAPI.paginator.total }}</strong><sub>개</sub>
	</p>
	<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
	<None
		v-if="claimShipResultAPI != null && claimShipResultAPI.paginator.data.length < 1"
	>
		처리중인 배송지연 주문이 없습니다
	</None>

	<template
		v-else
	>
		<!-- 배송지연 신고 목록 -->
		<article
			v-for="order in claimShipResultAPI?.paginator.data"
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
							<ul class="mm...order-claim">
								<li><b class="mm_tag T=round">신고접수<span>800</span></b><p>신고일: 2022.05.14</p></li>
								<li><b class="mm_tag T=round T=variable">처리완료<span>50</span></b><p>처리일: 2022.05.14</p></li>
								<li><b class="mm_tag T=round T=gray">처리불가<span>10</span></b><p>처리일: 2022.05.14</p></li>
							</ul>
						</div>
					</li>
				</ul>
			</section>
		</article>
	</template>

	<Pagination
		v-if="$route.query.type != 'none' && claimShipResultAPI?.paginator != null"
		:total-page="Math.ceil(claimShipResultAPI.paginator.total / claimShipResultAPI.paginator.per_page)"
		:current-page="Number($route.query.page)"
	></Pagination>
	<!-- 배송지연 신고 처리 순서 -->
	<section>
		<h5><b>배송지연 신고 처리 순서</b></h5>
		<ol>
			<li><dl><dt><small>STEP 1.</small>신고접수</dt><dd>고객님께서 신고 완료한 상태</dd></dl></li>
			<li><dl><dt><small>STEP 2.</small>처리완료/처리불가</dt><dd>보상적립금 지급 처리불가 또는 처리를 완료한 상태</dd></dl></li>
		</ol>
		<div class="mm_note">
			<ul>
				<li>처리 완료된 건의 보상 적립금은 <strong>[마이페이지 &#62; 혜택 관리 &#62; 보유 적립금]</strong>에서 확인이 가능합니다.</li>
			</ul>
		</div>
	</section>

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
</template>