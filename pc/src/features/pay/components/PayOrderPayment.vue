<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import OrderPayment from '@/pages/order/components/OrderPayment.vue';
</script>

<template>
	<ul>
		<!-- 간편결제 -->
		<li>
			<label class="mm_form-radio">
				<input
					type="radio"
					name="dev_radio-payselect"
					data-radio="{ 'syncer': '.mm_syncer-pay-card' }"
					checked
				>
				<b class="mm_block">
					<i class="ico_form-radio"></i>
					<span class="text_label">간편 카드결제</span>
				</b>
			</label>
			<div class="mm_syncer-pay-card">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo"><LazyloadMUI
										:_tag="'img'"
										:_src="'../image/_sample/pay_card_logo_1.png'"
										alt="현대카드"
									></LazyloadMUI></i>
									<figcaption>
										<p class="text_title">
											카드번호
										</p>
										<p class="text_num">
											<span>****</span><span>****</span><span>0421</span><span>1628</span>
										</p>
									</figcaption>
								</figure>
								<button
									type="button"
									class="btn_remove"
								>
									<i class="ico_remove"></i><b
										class="mm_ir-blind"
									>삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo"><LazyloadMUI
										:_tag="'img'"
										:_src="'../image/_sample/pay_card_logo_2.png'"
										alt="삼성카드"
									></LazyloadMUI></i>
									<figcaption>
										<p class="text_title">
											카드번호
										</p>
										<p class="text_num">
											<span>****</span><span>****</span><span>0421</span><span>1628</span>
										</p>
									</figcaption>
								</figure>
								<button
									type="button"
									class="btn_remove"
								>
									<i class="ico_remove"></i><b
										class="mm_ir-blind"
									>삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<a
									class="btn_register"
									href="#"
									target="_blank"
									title="새 창 열림"
								><i
									class="ico_add"
								></i><b>카드 추가 등록</b></a>
							</li>
							<!-- 등록된 카드가 없을 경우 아래 mm_slider-item 만 노출합니다 -->
							<!-- <li class="mm_slider-item">
								<a class="btn_register" href="#" target="_blank" title="새 창 열림"><i class="ico_add"></i><b>카드 등록 한번으로<br> 간편하게 결제해보세요</b></a>
							</li> -->
						</ul>
					</div>
					<!-- (D) 카드 등록 선택 시 할부 기간 선택은 비노출합니다. -->
					<!-- 할부 기간 선택 -->
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>일시불</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<!--// 할부 기간 선택 -->
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev T=sm"></i><b
								class="mm_ir-blind"
							>이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next T=sm"></i><b
								class="mm_ir-blind"
							>다음</b>
						</button>
					</div>
					<div class="mm_slider-pagination">
						<ol>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">1</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">2</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">3</b>
								</button>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</li>
		<li>
			<label class="mm_form-radio">
				<input
					type="radio"
					name="dev_radio-payselect"
					data-radio="{ 'syncer': '.mm_syncer-pay-account' }"
				>
				<b class="mm_block">
					<i class="ico_form-radio"></i>
					<span class="text_label">간편 계좌결제</span>
				</b>
			</label>
			<div class="mm_syncer-pay-account">
				<div
					class="mm_slider"
					data-slider="{ '_isLoop': false }"
				>
					<div class="mm_slider-inner">
						<ul class="mm_slider-list">
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo"><LazyloadMUI
										:_tag="'img'"
										:_src="'../image/_sample/pay_bank_logo_1.png'"
										alt="국민은행"
									></LazyloadMUI></i>
									<figcaption>
										<p class="text_num">
											123456***
										</p>
									</figcaption>
								</figure>
								<button
									type="button"
									class="btn_remove"
								>
									<i class="ico_remove"></i><b
										class="mm_ir-blind"
									>삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo"><LazyloadMUI
										:_tag="'img'"
										:_src="'../image/_sample/pay_bank_logo_2.png'"
										alt="하나은행"
									></LazyloadMUI></i>
									<figcaption>
										<p class="text_num">
											123456***
										</p>
									</figcaption>
								</figure>
								<button
									type="button"
									class="btn_remove"
								>
									<i class="ico_remove"></i><b
										class="mm_ir-blind"
									>삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<a
									class="btn_register"
									href="#"
									target="_blank"
									title="새 창 열림"
								>
									<i class="ico_add"></i>
									<b>계좌 추가 등록</b>
								</a>
							</li>
							<!-- 등록된 계좌가 없을 경우 아래 mm_slider-item 만 노출합니다 -->
							<!-- <li class="mm_slider-item">
								<a class="btn_register" href="#" target="_blank" title="새 창 열림">
									<i class="ico_add"></i>
									<b>계좌 등록 한번으로<br> 간편하게 결제해보세요</b>
								</a>
							</li> -->
						</ul>
					</div>
					<div class="mm_slider-control">
						<button
							type="button"
							class="btn_slider-prev"
						>
							<i class="ico_control-prev T=sm"></i><b
								class="mm_ir-blind"
							>이전</b>
						</button>
						<button
							type="button"
							class="btn_slider-next"
						>
							<i class="ico_control-next T=sm"></i><b
								class="mm_ir-blind"
							>다음</b>
						</button>
					</div>
					<div class="mm_slider-pagination">
						<ol>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">1</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">2</b>
								</button>
							</li>
							<li>
								<button
									type="button"
									class="btn_slider-page"
								>
									<b class="mm_ir-blind">3</b>
								</button>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</li>
		<!--// 간편결제 -->

		<!-- 다른 결제수단 -->
		<li>
			<label class="mm_form-radio">
				<input
					type="radio"
					name="dev_radio-payselect"
					data-radio="{ 'syncer': '.mm_syncer-payment-other' }"
				>
				<b class="mm_block">
					<i class="ico_form-radio"></i>
					<span class="text_label">다른 결제수단 선택</span>
				</b>
			</label>
			<div class="mm_syncer-payment-other">
				<!-- (C) 결제수단 선택 -->
				<OrderPayment></OrderPayment>
			</div>
		</li>
		<!--// 다른 결제수단 -->
	</ul>
</template>