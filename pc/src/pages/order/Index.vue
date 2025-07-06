<script setup lang="ts">
	import { defineAsyncComponent, ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import GiftInfo from '@/features/gift/components/GiftOrderGiftInfo.vue';

	const receiveAddressAPI = ref<ReceiveAddressAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_RECEIVE_ADDRESS`, ref: receiveAddressAPI },
	]);

	const _isPay = false;

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
	const orderPaymentComponent = (_isPay) ? orderPayment[0] : orderPayment[1];

	/** 로그인 여부 */
	const _isLogin = ref(true);
</script>

<template>
	<div class="mm_inner m_order">
		<h3 class="mm_title">
			<b>주문/결제</b>
		</h3>
		<!-- 받는분 정보 -->
		<section
			v-if="_isLogin"
			class="mm_order-form m_order-receive"
		>
			<h4 class="mm_strapline T=line">
				<b>받는분 정보</b>
			</h4>
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>이메일 주소</b>
						</th>
						<td>
							<div class="mm_form-text T=short">
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
									><i class="bg_text"></i>
									<span class="text_placeholder">이메일 주소를 입력하세요(필수입력)</span>
								</label>
							</div>
						</td>
					</tr>
					<tr class="mm_address-list">
						<th scope="row">
							<b>배송지 정보<span class="text_amount">4개</span></b>
						</th>
						<td>
							<div
								class="mm_slider"
								data-slider="{ '_isLoop': false }"
							>
								<div class="mm_slider-inner">
									<ul class="mm_slider-list">
										<li class="mm_slider-item">
											<a
												class="btn_address-add"
												href="#"
											><i class="ico_address-add"></i><b>배송지를 등록하세요</b></a>
										</li>
										<li
											v-for="address in receiveAddressAPI?.receive_addresses"
											:key="address.id"
											class="mm_slider-item"
										>
											<input
												type="radio"
												name="dev_radio-address"
												:title="`${address.shipping_name}`"
												data-radio
											>
											<div class="mm_address-item">
												<i class="ico_form-radio T=circle"></i>
												<dl>
													<dt>
														<span>{{ address.shipping_name }}</span>
														<b
															v-if="address.is_recent"
															class="text_tag"
														>최근배송지</b>
													</dt>
													<dd>{{ address.name }} / {{ address.tel }}</dd>
													<dd>{{ address.zip_code }} {{ address.base_address }} {{ address.detail_address }}</dd>
												</dl>
											</div>
										</li>
									</ul>
								</div>
								<div class="mm_slider-control">
									<button
										type="button"
										class="btn_slider-prev"
									>
										<i class="ico_control-prev T=sm"></i><b class="mm_ir-blind">이전</b>
									</button>
									<button
										type="button"
										class="btn_slider-next"
									>
										<i class="ico_control-next T=sm"></i><b class="mm_ir-blind">다음</b>
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr class="m_order-receive-memo">
						<th scope="row">
							<b>배송 메모</b>
						</th>
						<td>
							<div class="mm_radio-list T=chain">
								<ul>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-list"
												data-radio
												checked
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">선택 안함</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-list"
												data-radio
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">부재 시 경비실에 맡겨주세요</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-list"
												data-radio
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">빠른 배송 부탁드립니다</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-list"
												data-radio
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">부재 시 핸드폰으로 연락 바랍니다</span>
											</b>
										</label>
									</li>
									<li>
										<label class="mm_form-radio">
											<input
												type="radio"
												name="dev_radio-list"
												data-radio
											>
											<b class="mm_block">
												<i class="ico_form-radio"></i>
												<span class="text_label">배송 전 연락 바랍니다</span>
											</b>
										</label>
									</li>
									<li>
										<div class="mm_form_mix-linked">
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">직접 입력</span>
												</b>
											</label>
											<div class="mm_form-text T=short">
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
														disabled
													><i class="bg_text"></i>
													<span class="text_placeholder">배송 메모를 입력하세요(20자 이내)</span>
												</label>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr class="m_order-receive-unipass">
						<th scope="row">
							<b>해외배송<br> 개인통관고유부호</b>
						</th>
						<td>
							<div class="mm_form-text T=short">
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
									><i class="bg_text"></i>
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
									<span class="text_label">다음 주문 시에도 계속 사용(편리한 배송을 위해 보관됩니다)</span>
								</b>
							</label>
							<div class="mm_note">
								<ul>
									<li>상품을 받는 분의 명의로 통관이 진행되므로 <span class="mm_text-secondary">홍길동 님</span>의 개인통관고유부호를 입력해주세요.</li>
									<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
									<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
								</ul>
								<a
									class="btn_unipass"
									href="#"
									target="_blank"
									title="새 창 열림"
								><b>개인통관고유부호 발급/확인 바로가기</b><i class="ico_link"></i></a>
							</div>
							<div class="mm_check-list">
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">해외배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의</span>
											</b>
										</label>
										<button
											type="button"
											class="btn_popover"
											data-switch="{ '_defaultTitle': '자세히보기', '_title': '접어놓기' }"
											title="자세히보기"
										>
											<i class="ico_popover-help"></i>
										</button>
										<div class="mm_popover">
											<h6><b>개인통관고유부호 수집 동의</b></h6>
											<p>고유부호는 수입 통관 업무 처리를 위해 수집하며, 서비스 이용 기간동안 보관합니다.</p>
											<button
												type="button"
												class="btn_close"
												onclick="this.parentElement.previousElementSibling.click();"
											>
												<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
											</button>
										</div>
									</li>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">해외배송 상품의 수입신고를 위한 개인통관고유부호의 판매자 제공에 동의</span>
											</b>
										</label>
										<button
											type="button"
											class="btn_popover"
											data-switch="{ '_defaultTitle': '자세히보기', '_title': '접어놓기' }"
											title="자세히보기"
										>
											<i class="ico_popover-help"></i>
										</button>
										<div class="mm_popover">
											<h6><b>개인통관고유부호 판매자 제공 동의</b></h6>
											<p>수입 통관 업무 처리를 위해 본 상품 판매자에게 개인통관 고유부호를 제공하며, 해당 업무 처리 후 파기합니다.</p>
											<button
												type="button"
												class="btn_close"
												onclick="this.parentElement.previousElementSibling.click();"
											>
												<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
											</button>
										</div>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<!-- (D) 기존 해외배송 사용했던 고객의 경우 입력했던 고유부호가 아래와 같이 노출됩니다 -->
					<tr class="m_order-receive-unipass">
						<th scope="row">
							<b>해외배송<br> 개인통관고유부호</b>
						</th>
						<td>
							<div class="mm_form-text T=short">
								<label>
									<span class="textfield text_readonly">P123123123123</span>
									<i class="bg_text"></i>
								</label>
							</div>
							<button
								type="button"
								class="mm_btn T=sm T=line btn_modify"
							>
								<b>수정하기</b><i class="ico_link T=xs"></i>
							</button>
							<div class="mm_check-list">
								<ul>
									<li>
										<label class="mm_form-check">
											<input
												type="checkbox"
												data-check
											>
											<b class="mm_block">
												<i class="ico_form-check"></i>
												<span class="text_label">해외배송 상품의 수입신고를 위한 개인통관고유부호의 판매자 제공에 동의</span>
											</b>
										</label>
										<button
											type="button"
											class="btn_popover"
											data-switch="{ '_defaultTitle': '자세히보기', '_title': '접어놓기' }"
											title="자세히보기"
										>
											<i class="ico_popover-help"></i>
										</button>
										<div class="mm_popover">
											<h6><b>개인통관고유부호 판매자 제공 동의</b></h6>
											<p>수입 통관 업무 처리를 위해 본 상품 판매자에게 개인통관 고유부호를 제공하며, 해당 업무 처리 후 파기합니다.</p>
											<button
												type="button"
												class="btn_close"
												onclick="this.parentElement.previousElementSibling.click();"
											>
												<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
											</button>
										</div>
									</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</section>

		<template v-else>
			<!-- 주문자 정보 -->
			<section class="mm_order-form">
				<h4 class="mm_strapline T=line">
					<b>주문자 정보</b>
				</h4>
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<b>주문자명</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">주문자 이름을 입력하세요(필수입력)</span>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>휴대폰 번호</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
											maxlength="11"
										><i class="bg_text"></i>
										<span class="text_placeholder">휴대폰 번호를 입력하세요(필수/숫자만 입력)</span>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>이메일 주소</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">이메일 주소를 입력하세요(필수입력)</span>
									</label>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<!-- 배송지 정보 -->
			<section class="mm_order-form m_order-receive">
				<h4 class="mm_strapline T=line">
					<b>배송지 정보</b>
				</h4>
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
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<b>받는 사람</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">받는 사람을 입력하세요(필수입력)</span>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>휴대폰 번호</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
											maxlength="11"
										><i class="bg_text"></i>
										<span class="text_placeholder">휴대폰 번호를 입력하세요(필수/숫자만 입력)</span>
									</label>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">
								<b>주소</b>
							</th>
							<td>
								<div class="mm_form_mix-address">
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
												><i class="bg_text"></i>
												<span class="mm_ir-blind text_placeholder">우편번호</span>
											</label>
										</div>
										<a
											class="mm_btn T=dark"
											href="#"
										><b>우편번호 찾기</b></a>
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
											><i class="bg_text"></i>
											<span class="mm_ir-blind text_placeholder">검색주소</span>
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
											><i class="bg_text"></i>
											<span class="text_placeholder">상세 주소를 입력하세요(필수입력)</span>
										</label>
									</div>
								</div>
							</td>
						</tr>
						<tr class="m_order-receive-memo">
							<th scope="row">
								<b>배송 메모</b>
							</th>
							<td>
								<div class="mm_radio-list T=chain">
									<ul>
										<li>
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
													checked
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">선택 안함</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">부재 시 경비실에 맡겨주세요</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">빠른 배송 부탁드립니다</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">부재 시 핸드폰으로 연락 바랍니다</span>
												</b>
											</label>
										</li>
										<li>
											<label class="mm_form-radio">
												<input
													type="radio"
													name="dev_radio-list"
													data-radio
												>
												<b class="mm_block">
													<i class="ico_form-radio"></i>
													<span class="text_label">배송 전 연락 바랍니다</span>
												</b>
											</label>
										</li>
										<li>
											<div class="mm_form_mix-linked">
												<label class="mm_form-radio">
													<input
														type="radio"
														name="dev_radio-list"
														data-radio
													>
													<b class="mm_block">
														<i class="ico_form-radio"></i>
														<span class="text_label">직접 입력</span>
													</b>
												</label>
												<div class="mm_form-text T=short">
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
															disabled
														><i class="bg_text"></i>
														<span class="text_placeholder">배송 메모를 입력하세요(20자 이내)</span>
													</label>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr class="m_order-receive-unipass">
							<th scope="row">
								<b>해외배송<br> 개인통관고유부호</b>
							</th>
							<td>
								<div class="mm_form-text T=short">
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
										><i class="bg_text"></i>
										<span class="text_placeholder">P로 시작하는 정보를 입력하세요</span>
									</label>
								</div>
								<div class="mm_note">
									<ul>
										<li>상품을 받는 분의 명의로 통관이 진행되므로 <span class="mm_text-secondary">수취인</span>의 개인통관고유부호를 입력해주세요.</li>
										<li>해외배송 상품은 관세청 통관을 위해 수취인의 고유식별정보를 판매자에게 제공합니다.</li>
										<li>개인통관고유부호는 통관 시 주민등록번호 대신 사용 가능한 번호로, 관세청 사이트에서 발급 받으실 수 있습니다.</li>
									</ul>
									<a
										class="btn_unipass"
										href="#"
										target="_blank"
										title="새 창 열림"
									><b>개인통관고유부호 발급/확인 바로가기</b><i class="ico_link"></i></a>
								</div>
								<div class="mm_check-list">
									<ul>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">해외배송 상품의 수입신고를 위한 개인통관고유부호 수집에 동의</span>
												</b>
											</label>
											<button
												type="button"
												class="btn_popover"
												data-switch="{ '_defaultTitle': '자세히보기', '_title': '접어놓기' }"
												title="자세히보기"
											>
												<i class="ico_popover-help"></i>
											</button>
											<div class="mm_popover">
												<h6><b>개인통관고유부호 수집 동의</b></h6>
												<p>고유부호는 수입 통관 업무 처리를 위해 수집하며, 서비스 이용 기간동안 보관합니다.</p>
												<button
													type="button"
													class="btn_close"
													onclick="this.parentElement.previousElementSibling.click();"
												>
													<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
												</button>
											</div>
										</li>
										<li>
											<label class="mm_form-check">
												<input
													type="checkbox"
													data-check
												>
												<b class="mm_block">
													<i class="ico_form-check"></i>
													<span class="text_label">해외배송 상품의 수입신고를 위한 개인통관고유부호의 판매자 제공에 동의</span>
												</b>
											</label>
											<button
												type="button"
												class="btn_popover"
												data-switch="{ '_defaultTitle': '자세히보기', '_title': '접어놓기' }"
												title="자세히보기"
											>
												<i class="ico_popover-help"></i>
											</button>
											<div class="mm_popover">
												<h6><b>개인통관고유부호 판매자 제공 동의</b></h6>
												<p>수입 통관 업무 처리를 위해 본 상품 판매자에게 개인통관 고유부호를 제공하며, 해당 업무 처리 후 파기합니다.</p>
												<button
													type="button"
													class="btn_close"
													onclick="this.parentElement.previousElementSibling.click();"
												>
													<i class="ico_close"></i><b class="mm_ir-blind">닫기</b>
												</button>
											</div>
										</li>
									</ul>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</template>


		<!-- 상품 정보 -->
		<section>
			<h4 class="mm_strapline T=line">
				<b>상품 정보</b>
			</h4>
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
				<section class="mm_order-item-seller">
					<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
					<p class="text_ship">
						<i class="ico_ship"></i><span>무료배송</span>
					</p>
					<ul>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_1.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 10개</p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm...order-price">
									<p class="text_price">
										<span class="text_price-sale">즉시할인 적용가</span>
										<strong>44,000</strong>
									</p>
									<!-- <p class="text_point">
										사용 적립금<b><strong>12,000</strong><sub>원</sub></b>
									</p> -->
								</div>
								<dl><dt>쿠폰 적용</dt><dd>10개</dd></dl>
								<div class="mm_btn_box">
									<div class="mm_block">
										<!-- (D) 쿠폰이 적용된 상태일 경우 mm_btn 요소에 "T=line T=primary" 클래스를 추가합니다. -->
										<a
											class="mm_btn T=sm T=line T=primary"
											href="#"
										><b>쿠폰적용</b></a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_2.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">N212WTS840 여성 드라이실 중힙기장 반팔 티셔츠</p>
												<p class="text_option">화이트 FREE / 10개</p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm...order-price">
									<p class="text_price">
										<strong>395,000</strong>
									</p>
								</div>
								<dl><dt>쿠폰 적용</dt><dd>0개</dd></dl>
								<div class="mm_btn_box">
									<div class="mm_block">
										<!-- (D) 쿠폰 적용이 불가능한 상품인 경우 mm_btn 요소에 "disabled"를 추가합니다. -->
										<button
											type="button"
											class="mm_btn T=sm"
											disabled
										>
											<b>쿠폰적용</b>
										</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>
				<section class="mm_order-item-seller">
					<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
					<p class="text_ship">
						<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
					</p>
					<ul>
						<li>
							<div class="mm_flex">
								<div class="mm_product-item T=single">
									<a href="#">
										<figure>
											<div class="mm_image-scale">
												<LazyloadMUI
													class="mm_bg-cover image_product"
													:_src="'/public/images/dummy/prod_x1_3.png'"
												></LazyloadMUI>
											</div>
											<figcaption>
												<p class="text_brand">M.Mon 엠몬스타</p>
												<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
												<p class="text_option">화이트 FREE / 10개</p>
											</figcaption>
										</figure>
									</a>
								</div>
								<div class="mm...order-price">
									<p class="text_price">
										<span class="text_price-sale">즉시할인 적용가</span>
										<strong>290,000</strong>
									</p>
									<!-- <p class="text_point">
										사용 적립금<b><strong>12,000</strong><sub>원</sub></b>
									</p> -->
								</div>
								<dl><dt>쿠폰 적용</dt><dd>3개</dd></dl>
								<div class="mm_btn_box">
									<div class="mm_block">
										<!-- (D) 쿠폰이 적용되지 않은 상품의 경우 mm_btn 요소에 "T=primary" 클래스를 추가합니다. -->
										<a
											class="mm_btn T=sm T=primary"
											href="#"
										><b>쿠폰적용</b></a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</section>

		<GiftInfo v-if="_isPay"></GiftInfo>

		<!-- 결제 정보 -->
		<div class="m_order-payment">
			<div>
				<!-- 적립금 사용 -->
				<section class="mm_order-form">
					<h4 class="mm_strapline T=line">
						<b>적립금 사용</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>적립금</b>
								</th>
								<td>
									<div class="mm_form_mix-linked">
										<div class="mm_form-text T=short">
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
													data-text="{ '_default': '0' }"
												><i class="bg_text"></i>
												<span class="text_placeholder">사용할 적립금</span>
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
										보유 적립금<b><strong>210,000</strong><sub>원</sub></b>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="mm_note">
						<ul>
							<li>적립금 사용 시 상품 구매금액 비율로 계산되어 각 상품에 사용 적립금이 자동 적용 됩니다.</li>
							<li><strong>최소 5,000원 이상 보유 시 사용 가능</strong>합니다.</li>
							<li><strong>최대 30,000원까지 사용 가능</strong>합니다.</li>
						</ul>
					</div>
				</section>

				<!-- 결제수단 선택 -->
				<section class="m_order-payment-method">
					<h4 class="mm_strapline T=line">
						<b>결제수단 선택</b>
					</h4>
					<component :is="orderPaymentComponent.component"></component>
				</section>
			</div>

			<!-- 최종 결제금액 -->
			<section>
				<h4 class="mm_strapline T=line">
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
				<!-- 약관 동의 -->
				<div class="m_order-payment-agree">
					<dl>
						<dt>주문상품정보 및 서비스 이용약관에 동의</dt>
						<dd>
							<ul>
								<li><b>구매조건 확인 및 결제 진행 동의</b></li>
								<li><b>만 14세 이상 동의</b></li>
								<li>
									<b>개인정보 제 3자 제공 동의</b>
									<button
										type="button"
										class="btn_detail"
										data-switch="{ '_isParent': true }"
									>
										<b>자세히</b>
									</button>
									<!-- 개인정보 제 3자 제공 동의 -->
									<table>
										<colgroup>
											<col style="width: 107px;">
											<col>
										</colgroup>
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
												<td>구매자 이름, 전화번호, ID, 휴대폰번호, 이메일주소, 상품 구매정보, 상품 수취인 정보(이름, 주소, 전화번호)</td>
											</tr>
											<tr>
												<th scope="row">
													<b>보유 및 이용기간</b>
												</th>
												<td>배송완료 후 한달</td>
											</tr>
										</tbody>
									</table>
								</li>
							</ul>
						</dd>
					</dl>
					<p>위 주문 내용을 확인하였으며, 결제에 동의합니다.</p>
				</div>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<div class="mm_block">
							<button
								type="button"
								class="mm_btn T=lg T=primary"
							>
								<b>결제하기</b>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->
<!-- <script>
	(function () {

		// 배송 메모 직접 입력 선택
		mm.event.on('.m_order-receive-memo .mm_form-radio input', 'change', function () {

			mm.find('.textfield', this.closest('.mm_radio-list'))[0].disabled = (this.closest('.mm_form_mix-linked')) ? false : true;

		});

	})();
</script> -->
</template>
