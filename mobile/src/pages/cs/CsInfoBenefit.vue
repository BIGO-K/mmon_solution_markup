<script setup lang="ts">
	import { ref } from 'vue';
	import { useConfigStore } from '@/store/config';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const { configShop, configPoint, configFeature } = useConfigStore();

	const tabIndex = ref(0);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>쿠폰/{{ configPoint.label_name }}</b></h1>
		</template>

		<template #content>
			<div
				class="mm_tab m_popup-cs"
				data-tab
			>
				<div class="mm_tab_menu">
					<ul class="mm_flex T=equal">
						<li>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 0 }"
								:title="tabIndex === 0 ? '선택됨' : ''"
								@click.prevent="tabIndex = 0"
							>
								<b>쿠폰 안내</b>
							</a>
						</li>
						<li
							v-if="configPoint"
						>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 1 }"
								:title="tabIndex === 1 ? '선택됨' : ''"
								@click.prevent="tabIndex = 1"
							>
								<b>{{ configPoint.label_name }} 안내</b>
							</a>
						</li>
					</ul>
				</div>

				<!-- 쿠폰안내 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 0 }"
				>
					<div class="mm_accordion">
						<ul>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-order' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>쿠폰 유의사항</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<ul>
												<li><p>쿠폰은 회원에 한해 적용되며, 한 품목당 한장의 쿠폰만 사용할 수 있습니다.</p></li>
												<li><p>쿠폰 사용 후 잔액은 환불이 불가하며, 자동 소멸됩니다.</p></li>
												<li><p>쿠폰에 따라 유효기간/최소 사용금액과 같은 사용 조건이 상이합니다.</p></li>
												<li><p>쿠폰에 따라 금액, 브랜드, 상품, 디바이스별로 사용이 제한될 수 있습니다.</p></li>
												<li><p>유효기간이 만료된 쿠폰은 사용할 수 없습니다.</p></li>
											</ul>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-order' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>쿠폰 종류별 사용 방법</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<ul>
												<li><p>등급 혜택에서 회원 등급별로 매월 할인 쿠폰을 다운로드 받으실 수 있습니다.</p></li>
											</ul>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>

				<!-- 적립금 안내 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 1 }"
				>
					<div class="mm_accordion">
						<ul>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-return' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p>
											<b
												v-if="configFeature.reward_policies?.delivery_delay_reward_policies"
											>
												배송지연
											</b>
											<span v-if="configFeature.reward_policies?.delivery_delay_reward_policies && configFeature.reward_policies?.soldout_cancel_reward_policies">/</span>
											<b
												v-if="configFeature.reward_policies?.soldout_cancel_reward_policies"
											>
												품절보상
											</b>
											<span>&nbsp;{{ configPoint.label_name }}</span>
										</p>
										<i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<table class="m_popup-cs-point">
												<colgroup>
													<col style="width: 29.46428%;">
													<col>
												</colgroup>
												<tbody>
													<tr>
														<th scope="row">
															<b>배송 지연</b>
														</th>
														<td>
															결제 완료일 다음날(1일째)부터 {{ configFeature.reward_policies?.delivery_delay_reward_policies[0].day }}일 이내 배송 출발이 되지 않았을 경우, 상품 금액의
															{{
																configFeature.reward_policies?.delivery_delay_reward_policies.length === 1
																	? `최저 ${configFeature.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}% ~ 최고 ${configFeature.reward_policies?.delivery_delay_reward_policies[configFeature.reward_policies?.delivery_delay_reward_policies?.length - 1].reward_rate || 0}%`
																	: `${configFeature.reward_policies?.delivery_delay_reward_policies[0].reward_rate || 0}%`
															}}를 {{ configPoint.label_name }}으로 보상해드리는 제도입니다.
														</td>
													</tr>
													<tr>
														<th scope="row">
															<b>품절 지연</b>
														</th>
														<td>
															{{
																configFeature.reward_policies?.soldout_cancel_reward_policies.length === 1
																	? `${configFeature.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}%`
																	: `최저 ${configFeature.reward_policies?.soldout_cancel_reward_policies[0].reward_rate || 0}% ~ 최고 ${configFeature.reward_policies?.soldout_cancel_reward_policies[configFeature.reward_policies?.soldout_cancel_reward_policies?.length - 1].reward_rate || 0}%`
															}}를 {{ `${configPoint.label_name!}로` }} 보상해드리는 제도입니다.
														</td>
													</tr>
												</tbody>
											</table>
											<ul>
												<li><p>배송지연/품절취소 보상은 <strong class="text_highlight">[<span>고객센터 &#62; 고객 보상제도</span>]</strong>에서 상세한 내용 확인이 가능합니다.</p></li>
											</ul>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-return' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>이벤트를 통한 {{ configPoint.label_name }}</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<ul>
												<li><p>{{ configPoint.label_name }}이 책정되어 있는 이벤트를 통해서 {{ configPoint.label_name }}을 적립하실 수 있습니다. (이벤트당 {{ configPoint.label_name }} 상이)</p></li>
											</ul>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-return' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>{{ configPoint.label_name }} 사용 안내</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<ul>
												<li>
													<p>
														{{
															`${ configPoint.label_name } ${ configPoint.min_usable_balance }${ configPoint.suffix } 이상 보유시
															${ configPoint.label_name } 1${ configPoint.suffix } = 현금 1원으로 ${ configShop.name }몰 내에서 사용 가능합니다.`
														}}
													</p>
												</li>
												<li><p>상품 주문시 사용하신 {{ configPoint.label_name }}은 해당 상품의 취소/반품/환불시 재적립이 가능합니다.</p></li>
											</ul>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>