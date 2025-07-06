<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<CoopProductListAPI>();
	const closeAPI = ref<CoopProductListAPI>();

	const getApiCoopProduct = (__list: typeof listAPI, __page: number, __size: number, __isEnd: boolean): void => {

		// api
		Api.getAll([
			{ key: `JOINT_PURCHASE_LIST`, ref: __list, query: `?page=${__page}&page_size=${__size}&is_end=${__isEnd}` },
		]);

	};

	getApiCoopProduct(listAPI, 1, 1, false);
	getApiCoopProduct(closeAPI, 1, 1, true);
</script>

<template>
	<div class="m_coopbuy-head">
		<div class="mm_inner">
			<h2><b>목표 수량에 도달하면 <strong>공동구매</strong> 성공!</b></h2>
			<p>지금 참여하기 버튼을 누르세요</p>
			<small>목표수량 도달 시 알림톡과 쿠폰이 발송되며 해당 상품을 공동구매가로 구매하실 수 있습니다</small>
			<ol>
				<li><i class="ico_coopbuy-join"></i><b>공동구매 참여</b></li>
				<li><i class="ico_coopbuy-goal"></i><b>목표 달성</b></li>
				<li><i class="ico_coopbuy-coupon"></i><b>쿠폰 발급</b></li>
				<li><i class="ico_coopbuy-buy"></i><b>상품 구매</b></li>
			</ol>
		</div>
	</div>

	<!-- 진행중인 공동구매 -->
	<div class="m_coopbuy-on">
		<div class="mm_inner">
			<ul
				v-if="$route.query.type === 'skeleton'"
				class="m_coopbuy-list T=skeleton"
			>
				<li>
					<i class="image_product"></i>
					<div>
						<p class="text_progress"></p>
						<p class="text_price"></p>
						<p class="text_brand"></p>
						<p class="text_product"></p>
					</div>
				</li>
				<li>
					<i class="image_product"></i>
					<div>
						<p class="text_progress"></p>
						<p class="text_price"></p>
						<p class="text_brand"></p>
						<p class="text_product"></p>
					</div>
				</li>
			</ul>

			<template v-else>
				<None v-if="listAPI != null && listAPI.paginator.total < 1">
					진행중인 공동구매가 없습니다
				</None>
				<ul class="m_coopbuy-list">
					<!-- (D) 공동구매 목표 달성시 'li' 요소에 'S=coopbuy-complete' 클래스를 추가합니다. -->
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
						:class="{ 'S=coopbuy-complete': item.target_achieve_rate >= 100}"
					>
						<router-link :to="{ name: 'ProductDetailCoop', params: { id: item.id } }">
							<figure>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x3_3.png'"
								></LazyloadMUI>
								<p
									v-if="item.is_only_adult"
									class="text_adult"
								>
									<b class="mm_ir-blind">미성년자 구매불가</b>
									<i class="ico_adult"></i>
								</p>
								<figcaption>
									<div class="mm_flex m_coopbuy-on-progress">
										<p class="text_state">
											<b>D<span>-</span>10<strong>24<span>:</span>14<span>:</span>38</strong></b><strong>공동구매 진행 중</strong>
										</p>
										<div>
											<p class="text_goal">
												목표까지<b><strong>{{ item.participant_count }}<sub>명</sub></strong>/ {{ item.target_count }}명</b>
											</p>
											<!-- (D) 'm...progress-bar > i'의 title, width 값에 공동구매 목표 달성율값을 추가합니다. -->
											<b class="m...progress-bar">
												<i
													:style="`width: ${item.target_achieve_rate}%;`"
													:title="`${item.target_achieve_rate}%`"
												></i>
											</b>
										</div>
									</div>
									<p class="text_price">
										<del><i class="ico_coopbuy-arrow"></i>{{ item.price }}</del>공동구매가<strong>{{ item.joint_purchase_price }}</strong>
									</p>
									<p class="text_brand">
										{{ item.brand_name }}
									</p>
									<p class="text_product">
										{{ item.goods_name }}
									</p>
								</figcaption>
							</figure>
						</router-link>
						<div class="mm_btn_box">
							<div class="mm_block">
								<router-link
									class="mm_btn T=lg btn_coopbuy-entry"
									:to="{ name: 'ProductDetailCoop', params: { id: item.id } }"
								>
									<b>공동구매 참여하기</b>
								</router-link>
								<button
									type="button"
									class="mm_btn T=lg T=line T=dark btn_share"
								>
									<i class="ico_share"></i><b>친구에게 공유하기</b>
								</button>
							</div>
						</div>
					</li>
				</ul>
			</template>

			<Pagination
				v-if="!$route.query.type && listAPI?.paginator != null"
				:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</div>
	</div>

	<!-- 종료된 공동구매 -->
	<div class="m_coopbuy-off">
		<div class="mm_inner">
			<ul
				v-if="$route.query.type === 'skeleton'"
				class="m_coopbuy-list T=skeleton"
			>
				<li>
					<i class="image_product"></i>
					<div>
						<p class="text_progress"></p>
						<p class="text_brand"></p>
						<p class="text_product"></p>
						<p class="text_price"></p>
					</div>
				</li>
				<li>
					<i class="image_product"></i>
					<div>
						<p class="text_progress"></p>
						<p class="text_brand"></p>
						<p class="text_product"></p>
						<p class="text_price"></p>
					</div>
				</li>
				<li>
					<i class="image_product"></i>
					<div>
						<p class="text_progress"></p>
						<p class="text_brand"></p>
						<p class="text_product"></p>
						<p class="text_price"></p>
					</div>
				</li>
			</ul>

			<template v-else>
				<None v-if="closeAPI != null && closeAPI.paginator.total < 1">
					종료된 공동구매가 없습니다
				</None>
				<ul class="m_coopbuy-list">
					<li
						v-for="item in closeAPI?.paginator.data"
						:key="item.id"
					>
						<router-link :to="{ name: 'ProductDetailCoop', params: { id: item.id } }">
							<figure>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x3_1.png'"
								></LazyloadMUI>
								<figcaption>
									<p class="text_state">
										{{ item.is_target_achieve ? '목표 달성' : '목표 미달성' }}<span>/</span><strong>{{ item.participant_count }}</strong>명 참여
									</p>
									<p class="text_brand">
										{{ item.brand_name }}
									</p>
									<p class="text_product">
										{{ item.goods_name }}
									</p>
									<p class="text_price">
										<del>{{ item.price }}</del>공동구매가<strong>{{ item.joint_purchase_price }}</strong>
									</p>
								</figcaption>
							</figure>
							<i class="ico_coopbuy-more"></i>
						</router-link>
					</li>
				</ul>
			</template>

			<Pagination
				v-if="!$route.query.type && closeAPI?.paginator != null"
				:total-page="Math.ceil(closeAPI.paginator.total / closeAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</div>
	</div>
</template>

<style src="./_coopbuy.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->