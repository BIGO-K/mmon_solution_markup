<script setup lang="ts">
	import { onMounted, onUnmounted, ref, defineAsyncComponent, watch } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import GiftInfo from '@/features/gift/components/GiftOrderGiftInfo.vue';
	import RaffleNote from '@/features/raffle/components/RaffleOrderNote.vue';

	const route = useRoute();
	const layouts = route.meta.layouts ?? [];

	onMounted(() => {

		document.documentElement.classList.add(...layouts);

	});

	onUnmounted(() => {

		document.documentElement.classList.remove(...layouts);

	});

	const orderPaymentListAPI = ref<OrderPaymentListAPI>();
	const receiveAddressAPI = ref<ReceiveAddressAPI>();
	const selectedShippingAddress = ref<receiveaddress>();
	const memberInfoAPI = ref<MemberInfoAPI>();
	const { configPoint } = useConfigStore();

	/** 배송지 정보 */
	const watchOff = watch(receiveAddressAPI, () => {

		if (receiveAddressAPI.value) {
			selectedShippingAddress.value = receiveAddressAPI.value.receive_addresses.find(address => {
				return address.is_recent;
			});

			watchOff();
		}

	});

	Api.getAll([
		{ key: `ORDER_BASIC_DATA`, ref: orderPaymentListAPI },
		{ key: `MEMBER_RECEIVE_ADDRESS`, ref: receiveAddressAPI },
		{ key: `AUTH_REFRESH_TOKEN`, ref: memberInfoAPI }
	]);

	/** 로그인 여부 */
	const _isLogin = true;
	const selectOption = ref('');
	const editPersonalClearanceCode = ref(false);

	/** 유료기능 사용 검증 및 세팅 */
	const feature = {
		gift: {
			_is: true,
			// value
		},
		pay: {
			_is: false,
			// value
		},
		raffle: {
			_is: true,
			// value
		}
	};

	const orderPayment: {
		component: ReturnType<typeof defineAsyncComponent>;
	}[] = [
		{
			component: defineAsyncComponent(() => import('@/features/pay/components/PayOrderPayment.vue')),
		},
		{
			component: defineAsyncComponent(() => import('@/pages/order/components/OrderPayment.vue')),
		},
	];
	const orderPaymentComponent = (feature.pay._is) ? orderPayment[0] : orderPayment[1];
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>주문/결제</b></h1>
		</template>

		<template #content>
			<div class="m_popup-order">
				<template v-if="_isLogin">
					<!-- 받는분 정보 -->
					<div
						class="mm_dropdown T=order"
						:class="{ 'S=on': true }"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<b>받는분 정보</b>
							<b class="text_contraction">{{ selectedShippingAddress?.shipping_name }}</b>
							<i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_inner">
									<h6 class="mm_text-label">
										<b>이메일 주소</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="text"
												class="textfield"
												data-text
												maxlength="50"
												:value="orderPaymentListAPI?.orderer_information?.email"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">이메일 주소를 입력하세요(필수입력)</span>
										</label>
									</div>
									<h6 class="mm_text-label">
										<b>배송지 정보</b>
									</h6>
									<router-link
										v-if="(receiveAddressAPI?.receive_addresses.length ?? NaN) <= 0"
										class="mm_address-item"
										:to="{ name: 'OrderAddressRegister' }"
									>
										<i class="ico_plus"></i><b>배송지를 등록하세요</b>
									</router-link>
									<div
										v-else
										class="mm_address-list T=scroller"
									>
										<div class="mm_scroller T=x">
											<ul>
												<li
													v-for="address in receiveAddressAPI?.receive_addresses"
													:key="address.id"
												>
													<input
														type="radio"
														name="dev_radio-address"
														:title="address.shipping_name"
														data-radio
														:checked="selectedShippingAddress !== null && selectedShippingAddress?.id === address.id"
													>
													<div class="mm_address-item">
														<i class="ico_form-radio T=circle"></i>
														<dl>
															<dt>
																<b>{{ address.shipping_name }}</b>
																<b
																	v-if="address.is_recent"
																	class="mm_tag T=gray"
																>
																	최근배송지
																</b>
															</dt>
															<dd>{{ address.name }} / {{ address.tel }}</dd>
															<dd>{{ address.zip_code }}<br>{{ address.base_address }}<br>{{ address.detail_address }}</dd>
														</dl>
													</div>
													<button
														type="button"
														class="btn_remove"
													>
														<b>삭제</b>
													</button>
												</li>
												<li>
													<router-link
														class="mm_address-item"
														:to="{ name: 'OrderAddressRegister' }"
													>
														<i class="ico_plus"></i><b>배송지를 등록하세요</b>
													</router-link>
												</li>
											</ul>
										</div>
									</div>
									<div class="mm_form-select">
										<label>
											<select
												v-model="selectOption"
												data-select
											>
												<option>배송메모를 선택하세요</option>
												<option
													data-option="{ 'syncer': '.mm_syncer-delivery-note'}"
													value="optionDeliveryNote"
												>
													직접입력
												</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
									<div
										class="mm_syncer-delivery-note"
										:class="{ 'S=option-use': selectOption === 'optionDeliveryNote' }"
									>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="text"
													class="textfield"
													data-text
													maxlength="20"
												>
												<i class="bg_text"></i>
												<span class="text_placeholder">배송메모를 입력하세요</span>
											</label>
										</div>
									</div>

									<!-- 해외배송 개인통관고유부호 -->
									<section
										v-if="orderPaymentListAPI?.need_personal_clearance_code"
										class="m_popup-order-unipass"
									>
										<h6 class="mm_text-label">
											<b>해외배송 개인통관고유부호</b>
										</h6>
										<!-- TODO '' 랑 null 동시에 체크 해야하는지 알아보자 -->
										<template v-if="orderPaymentListAPI?.orderer_information?.personal_clearance_code === '' || orderPaymentListAPI?.orderer_information?.personal_clearance_code === null || editPersonalClearanceCode">
											<div class="mm_form-text">
												<button
													type="button"
													class="btn_text-clear"
												>
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input
														type="text"
														class="textfield"
														data-text
														maxlength="13"
														:value="orderPaymentListAPI?.orderer_information?.personal_clearance_code"
													>
													<i class="bg_text"></i>
													<span class="text_placeholder">P로 시작하는 정보를 입력하세요</span>
												</label>
											</div>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">다음 주문 시에도 계속 사용</span>
												</b>
											</label>
											<div class="mm_note">
												<ul>
													<li>상품을 받는 분의 명의로 통관이 진행되므로 <strong class="mm_text-secondary">{{ memberInfoAPI?.user.name }} 님</strong>의 개인통관고유부호를 입력해주세요.</li>
													<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
													<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
												</ul>
											</div>
											<a
												class="btn_unipass"
												href="https://unipass.customs.go.kr/csp/persIndexRectOnslCrtf.do?qryIssTp=1&is_out_intent=Y"
												target="_blank"
											>
												<b>개인통관고유부호 발급/확인 바로가기</b>
												<i class="ico_link T=sm"></i>
											</a>
											<div class="mm_check_box">
												<div class="mm_check-list">
													<ul>
														<li>
															<div class="mm_flex">
																<label class="mm_form-check">
																	<input
																		type="checkbox"
																		data-check="{ '_group': 'agree_check-unipass' }"
																	>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의</span>
																	</b>
																</label>
																<router-link
																	class="btn_detail"
																	:to="{ name: 'PolicyUnipass' }"
																>
																	<b>자세히</b>
																</router-link>
															</div>
														</li>
														<li>
															<div class="mm_flex">
																<label class="mm_form-check">
																	<input
																		type="checkbox"
																		data-check="{ '_group': 'agree_check-unipass' }"
																	>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 판매자 제동 동의</span>
																	</b>
																</label>
																<router-link
																	class="btn_detail"
																	:to="{ name: 'PolicyUnipass' }"
																>
																	<b>자세히</b>
																</router-link>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</template>
										<template v-else>
											<div class="mm_form-text">
												<label>
													<span class="textfield text_readonly">{{ orderPaymentListAPI?.orderer_information?.personal_clearance_code }}</span>
													<i class="bg_text"></i>
												</label>
											</div>
											<button
												type="button"
												class="mm_btn T=xs T=line btn_modify"
												@click="editPersonalClearanceCode = !editPersonalClearanceCode"
											>
												<b>수정하기</b>
											</button>
											<div class="mm_check_box">
												<div class="mm_check-list">
													<ul>
														<li>
															<div class="mm_flex">
																<label class="mm_form-check">
																	<input
																		type="checkbox"
																		data-check="{ '_group': 'agree_check-unipass' }"
																	>
																	<b class="mm_block">
																		<i class="ico_form-check"></i>
																		<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 판매자 제동 동의</span>
																	</b>
																</label>
																<router-link
																	class="btn_detail"
																	:to="{ name: 'PolicyUnipass' }"
																>
																	<b>자세히</b>
																</router-link>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</template>
									</section>
								</div>
							</div>
						</div>
					</div>
					<hr class="mm_line">
				</template>
				<template v-else>
					<!-- 주문자 정보 -->
					<div
						class="mm_dropdown T=order"
						:class="{ 'S=on': true }"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<b>주문자 정보</b>
							<b class="text_contraction">홍길동</b>
							<i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_inner">
									<h6 class="mm_text-label">
										<b>주문자명</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="text"
												class="textfield"
												data-text
												maxlength="10"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">주문자 이름을 입력하세요(필수입력)</span>
										</label>
									</div>
									<h6 class="mm_text-label">
										<b>휴대폰 번호</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="tel"
												class="textfield"
												data-text
												maxlength="11"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">휴대폰 번호를 입력하세요(필수/숫자만 입력)</span>
										</label>
									</div>
									<h6 class="mm_text-label">
										<b>이메일 주소</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="text"
												class="textfield"
												data-text
												maxlength="50"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">이메일 주소를 입력하세요(필수입력)</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr class="mm_line">

					<!-- 배송지 정보 -->
					<div
						class="mm_dropdown T=order m_popup-order-receive"
						:class="{ ' S=on': true }"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<b>배송지 정보</b>
							<b class="text_contraction">김길동</b>
							<i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">주문자 정보와 동일</span>
									</b>
								</label>
								<div class="mm_inner">
									<h6 class="mm_text-label">
										<b>받는 사람</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="text"
												class="textfield"
												data-text
												maxlength="10"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">받는 사람을 입력하세요(필수입력)</span>
										</label>
									</div>
									<h6 class="mm_text-label">
										<b>휴대폰 번호</b>
									</h6>
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="tel"
												class="textfield"
												data-text
												maxlength="11"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">휴대폰 번호를 입력하세요(필수/숫자만 입력)</span>
										</label>
									</div>
									<div class="mm_form_mix-address">
										<h6 class="mm_strapline">
											<b>주소</b>
										</h6>
										<div class="mm_form_mix-linked">
											<div class="mm_form-text">
												<button
													type="button"
													class="btn_text-clear"
												>
													<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
												</button>
												<label>
													<input
														type="text"
														class="textfield"
														data-text
														readonly
													>
													<i class="bg_text"></i>
													<span class="text_placeholder mm_ir-blind">우편번호</span>
												</label>
											</div>
											<router-link
												class="mm_btn T=dark"
												:to="{ name: 'PostcodeFind' }"
											>
												<b>우편번호 찾기</b>
											</router-link>
										</div>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="text"
													class="textfield"
													data-text
													readonly
												>
												<i class="bg_text"></i>
												<span class="text_placeholder mm_ir-blind">검색주소</span>
											</label>
										</div>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="text"
													class="textfield"
													data-text
												>
												<i class="bg_text"></i>
												<span class="text_placeholder">상세 주소를 입력하세요(필수입력)</span>
											</label>
										</div>
									</div>
									<h6 class="mm_strapline">
										<b>배송메모</b>
									</h6>
									<div class="mm_form-select">
										<label>
											<select
												v-model="selectOption"
												data-select
											>
												<option>배송메모를 선택하세요</option>
												<option
													data-option="{ 'syncer': '.mm_syncer-delivery-note'}"
													value="optionDeliveryNote"
												>
													직접입력
												</option>
											</select>
											<b class="text_selected"></b>
											<i class="ico_form-select"></i>
										</label>
									</div>
									<div
										class="mm_syncer-delivery-note"
										:class="{ 'S=option-use': selectOption === 'optionDeliveryNote' }"
									>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="text"
													class="textfield"
													data-text
													maxlength="20"
												>
												<i class="bg_text"></i>
												<span class="text_placeholder">배송메모를 입력하세요</span>
											</label>
										</div>
									</div>
									<!-- 해외배송 개인통관고유부호 -->
									<section class="m_popup-order-unipass">
										<h6 class="mm_text-label">
											<b>해외배송 개인통관고유부호</b>
										</h6>
										<div class="mm_form-text">
											<button
												type="button"
												class="btn_text-clear"
											>
												<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
											</button>
											<label>
												<input
													type="text"
													class="textfield"
													data-text
													maxlength="13"
												>
												<i class="bg_text"></i>
												<span class="text_placeholder">P로 시작하는 정보를 입력하세요</span>
											</label>
										</div>
										<div class="mm_note">
											<ul>
												<li>상품을 받는 분의 명의로 통관이 진행되므로 <strong class="mm_text-secondary">수취인</strong>의 개인통관고유부호를 입력해주세요.</li>
												<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
												<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
											</ul>
										</div>
										<a
											class="btn_unipass"
											href="https://unipass.customs.go.kr/csp/persIndexRectOnslCrtf.do?qryIssTp=1&is_out_intent=Y"
											target="_blank"
										>
											<b>개인통관고유부호 발급/확인 바로가기</b>
											<i class="ico_link T=sm"></i>
										</a>
										<div class="mm_check_box">
											<div class="mm_check-list">
												<ul>
													<li>
														<div class="mm_flex">
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'agree_check-unipass' }"
																>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의</span>
																</b>
															</label>
															<router-link
																class="btn_detail"
																:to="{ name: 'PolicyUnipass' }"
															>
																<b>자세히</b>
															</router-link>
														</div>
													</li>
													<li>
														<div class="mm_flex">
															<label class="mm_form-check">
																<input
																	type="checkbox"
																	data-check="{ '_group': 'agree_check-unipass' }"
																>
																<b class="mm_block">
																	<i class="ico_form-check"></i>
																	<span class="text_label"><strong class="mm_text-variable">(필수)</strong>해외배송 상품의 수입신고를 위한 개인통관고유부호 판매자 제동 동의</span>
																</b>
															</label>
															<router-link
																class="btn_detail"
																:to="{ name: 'PolicyUnipass' }"
															>
																<b>자세히</b>
															</router-link>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
					<hr class="mm_line">
				</template>

				<!-- 상품 정보 -->
				<div
					class="mm_dropdown T=order S=on"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>상품 정보</b>
						<b class="text_contraction"><span class="text_count"><strong>3</strong><sub>건</sub></span><span class="text_price"><strong>239,000</strong></span></b>
						<i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_order-item">
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check
										checked
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label">최대할인 적용</span>
									</b>
								</label>
								<div
									v-for="pack in orderPaymentListAPI?.packs"
									:key="pack.shipping_rule_id"
									class="mm_order-item-seller"
								>
									<div class="mm_order...seller-head">
										<p class="text_ship">
											<i class="ico_ship"></i>
											<span
												v-if="pack.charged_shipping_price > 0"
												class="text_price"
											>
												<strong>{{ pack.charged_shipping_price }}</strong>
											</span>
											<span v-else>무료배송</span>
										</p>
									</div>
									<!-- TODO 동일 상품이더라도 수량만큼 items에 모두 들어가 있기 때문에 별도 처리로 동일한 상품끼리 묶어서 사용해야함 -->
									<div class="mm_product-list T=sm">
										<ul>
											<li
												v-for="item in pack.items"
												:key="item.goods_id"
											>
												<p class="text_seller">
													<i class="ico_shop"></i>{{ item.seller_name }}
												</p>
												<div class="mm_product-item">
													<a>
														<figure>
															<LazyloadMUI
																class="mm_bg-cover image_product"
																:_src="item.goods_thumbnail_url"
															>
															</LazyloadMUI>
															<figcaption>
																<p class="text_brand">{{ item.brand_name }}</p>
																<p class="text_product">{{ item.goods_name }}</p>
																<p class="text_price">
																	<strong>54,800</strong>
																	<span
																		v-if="item.appliable_immediately_sale"
																		class="text_price-sale"
																	>
																		즉시할인 적용가
																	</span>
																</p>
																<p class="text_option">{{ item.option_name }} / 1개</p>
															</figcaption>
														</figure>
													</a>
													<div class="mm_product-item-footer">
														<div class="mm_product...footer-indent">
															<p>쿠폰 적용: 1개</p>
															<!-- (D) 쿠폰이 적용되지 않은 경우 -->
															<router-link
																class="mm_btn T=sm T=primary"
																:to="{ name: 'OrderCoupon' }"
															>
																<b>쿠폰적용</b>
															</router-link>
														</div>
														<!-- <p class="text_point">사용 적립금<b><strong>3,000</strong><sub>원</sub></b></p> -->
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<GiftInfo
					v-if="feature.gift._is && orderPaymentListAPI?.giveaway_groups != null"
					:templates="orderPaymentListAPI?.giveaway_groups"
				></GiftInfo>

				<!-- 적립금 사용 -->
				<div
					class="mm_dropdown T=order m_popup-order-point"
					:class="{ 'S=on': true }"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>{{ configPoint.label_name }} 사용</b>
						<b class="text_contraction"><span class="text_point"><strong>1,200</strong><sub>원</sub></span></b>
						<i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_inner">
								<div class="mm_form_mix-linked">
									<div class="mm_form-text">
										<button
											type="button"
											class="btn_text-clear"
										>
											<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
										</button>
										<label>
											<input
												type="number"
												class="textfield"
												data-text="{ '_default': '0' }"
											>
											<i class="bg_text"></i>
											<span class="text_placeholder">사용 할 {{ configPoint.label_name }}을 입력하세요</span>
										</label>
									</div>
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label">모두 사용</span>
										</b>
									</label>
								</div>
								<p class="text_point">
									보유 {{ configPoint.label_name }} <strong>{{ (orderPaymentListAPI?.orderer_information?.point_balance || 0) }}</strong><sub>원</sub>
								</p>
								<div class="mm_note">
									<ul>
										<li>{{ configPoint.label_name }} 사용 시 상품 구매금액 비율로 계산되어 각 상품에 사용 적립금이 자동 적용 됩니다.</li>
										<li><strong>최소 {{ configPoint.min_usable_balance }}원 이상 보유 시 사용 가능</strong>합니다.</li>
										<li v-if="(configPoint.max_usable_amount ?? NaN) > 0">
											<strong v-if="configPoint.max_usable_amount_type === 'KRW'">최대 {{ configPoint.max_usable_amount }}원까지 사용 가능</strong>
											<strong v-else>최종 결제금액 대비 최대 {{ configPoint.max_usable_amount }}%까지 사용 가능</strong>
											합니다.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 최종 결제금액 -->
				<div
					class="mm_dropdown T=order"
					:class="{ 'S=on': true }"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>최종 결제금액</b>
						<b class="text_contraction"><span class="text_price mm_text-variable"><strong>239,000</strong></span></b>
						<i class="ico_dropdown"></i>
					</button>
					<!-- TODO 상품 묶음 처리와 함께 총 상품금액 처리 필요 -->
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_inner">
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
													<b>즉시할인</b>
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
							</div>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 결제수단 선택 -->
				<div
					class="mm_dropdown T=order m_popup-order-payment"
					:class="{ 'S=on': true }"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>결제수단 선택</b>
						<b class="text_contraction">신용/체크카드</b>
						<i class="ico_dropdown"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<component :is="orderPaymentComponent.component"></component>
						</div>
					</div>
				</div>
				<hr class="mm_line">

				<!-- 약관동의 안내 -->
				<div class="mm_inner m_popup-order-agree">
					<div class="m...agree-inner">
						<h6><b>주문상품정보 및 서비스 이용약관에 동의</b></h6>
						<ul>
							<li><p>구매조건 확인 및 결제 진행 동의</p></li>
							<li>
								<p>개인정보 제 3자 제공 동의</p>
								<button
									type="button"
									class="btn_more"
									data-switch
								>
									<b>자세히</b>
								</button>
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>제공 받는 자</b>
											</th>
											<td>공급사 판매자</td>
										</tr>
										<tr>
											<th scope="row">
												<b>목적</b>
											</th>
											<td>판매자와 구매자의 거래의 원활한 진행, 본인의사의확인, 고객 상담 및 불만처리, 상품과 경품 배송을 위한 배송지 확인 등</td>
										</tr>
										<tr>
											<th scope="row">
												<b>항목</b>
											</th>
											<td>이름, ID, 휴대폰번호, 이메일 주소,전화번호, 상품 구매정보, 상품 수취인정보(성명, 주소, 전화번호)</td>
										</tr>
										<tr>
											<th scope="row">
												<b>보유 및<br>이용기간</b>
											</th>
											<td>이용목적 달성 시까지 보관</td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
					<p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>

					<RaffleNote v-if="feature.raffle._is"></RaffleNote>
				</div>
			</div>
		</template>

		<template #contentExtend>
			<!-- 하단고정버튼 -->
			<!-- TODO 상품 묶음 처리와 함께 총 상품금액 처리 필요 -->
			<div class="mm_btn_box T=fixed">
				<button
					type="button"
					class="btn_order"
				>
					<b><strong>34,590</strong>원 결제하기</b>
				</button>
			</div>
		</template>
	</LayoutPopup>
</template>