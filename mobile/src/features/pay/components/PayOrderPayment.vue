<script setup lang="ts">
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
									<i class="image_logo">
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-lazyload="{ '_src': '../image/_sample/pay_card_logo_1.png' }"
											alt="현대카드"
										>
									</i>
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
									<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo">
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-lazyload="{ '_src': '../image/_sample/pay_card_logo_2.png' }"
											alt="삼성카드"
										>
									</i>
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
									<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<a
									class="btn_register"
									href="#"
									target="_blank"
									title="새 창 열림"
								>
									<i class="ico_add"></i><b>카드 추가 등록</b>
								</a>
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
									<i class="image_logo">
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-lazyload="{ '_src': '../image/_sample/pay_bank_logo_1.png' }"
											alt="국민은행"
										>
									</i>
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
									<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
								</button>
							</li>
							<li class="mm_slider-item">
								<figure>
									<i class="image_logo">
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-lazyload="{ '_src': '../image/_sample/pay_bank_logo_2.png' }"
											alt="하나은행"
										>
									</i>
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
									<i class="ico_remove"></i><b class="mm_ir-blind">삭제</b>
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

		<!-- 다른 결제수단 -->
		<li>
			<label class="mm_form-radio">
				<input
					type="radio"
					name="dev_radio-payselect"
					data-radio="{ 'syncer': '.mm_syncer-payment-method' }"
				>
				<b class="mm_block">
					<i class="ico_form-radio"></i>
					<span class="text_label">다른 결제수단 선택</span>
				</b>
			</label>
			<OrderPayment></OrderPayment>
		</li>
	</ul>
</template>

<style lang="scss">
	@use '../../assets/scss/common/helper/function' as *;
	@use '../../assets/scss/common/helper/mixin';
	@use '../../assets/scss/common/setting/const';
	@use '../../assets/scss/style/setting/var';

	.m_popup-order-payment {
		.mm_dropdown-item {
			.mm_dropdown-item-inner {
				> ul {
					margin: -20px 0;

					> li {
						position: relative;

						&:nth-child(n+2) {
							border-top: 1px solid #e6e6e6;
						}

						> .mm_form-radio {
							padding: 20px 14px 20px 38px;

							.ico_form-radio {
								top: 20px;
								left: 14px;
							}
						}
					}
				}
			}
		}

		// 간편결제
		.mm_tab {
			position: relative;
			text-align: center;

			#{escape('.m...payment-menu')} {
				padding: 0 14px;

				> ul {
					> li:nth-child(n+2) {
						margin-left: -1px;
					}
				}

				.btn_tab {
					padding-top: 15px;
					height: 64px;
					border: 1px solid transparent;
					border-bottom-color: #3d3d3d;
					background-color: #f5f5f5;
					@include mixin.font(#aeaeae v_600 '1.4rem/1.7rem' center);

					> .ico_payment-easy {
						display: block;
						margin-bottom: 3px;
						padding-top: 1px;
					}

					&#{escape('.S=tab-on')} {
						border-color: #3d3d3d;
						border-bottom-color: transparent;
						border-radius: 3px 3px 0 0;
						background-color: #fff;
						color: #3d3d3d;

						.ico_payment-easy::before {
							background-position-y: 100%;
						}
					}
				}
			}

			&-item {
				padding: 26px 0 58px;
			}
		}

		// 자체페이(카드/계좌) 슬라이더
		.mm_slider {
			margin: 3px auto 0;

			&-inner {
				padding: 0 18.08510vw;
			}

			&-item {
				position: relative;
				padding: 7px;
				width: 63.82978vw;
				opacity: 0.3;

				&#{escape('.S=on')} {
					opacity: 1;

					> figure {
						box-shadow: 0 3px 6px 0 rgba(#000, 0.1);
					}

					> figure,
					> a {
						border-color: #101010;
						background-color: #fff;

						+ .btn_remove {
							display: block;
						}
					}
				}

				figure {
					position: relative;
					padding: 0 19px;
					height: 100%;
					border: 1px solid #888;
					border-radius: 8px;
					background-color: #f5f5f5;

					.image_logo {
						margin-top: 19px;
						height: 18px;

						> img {
							width: auto;
							height: 100%;
						}
					}

					.mm_image-none {
						&::before {
							@include mixin.font(#101010 v_700 '1.5rem');

							content: attr(data-ir);
						}

						.ico_none {
							display: none;
						}
					}

					figcaption {
						position: absolute;
						bottom: 14px;

						.text_num {
							@include mixin.font('1.5rem/1.8rem');

							span {
								margin-right: 7px;
							}
						}
					}
				}

				.btn_remove {
					display: none;
					position: absolute;
					top: 7px;
					right: 7px;
					padding: 12px;

					.ico_remove::before {
						width: 12px;
						height: 12px;
						background-color: #888;
					}
				}
			}

			&-pagination {
				position: relative;
				bottom: 0;
				text-align: center;

				li:nth-child(n+2) {
					margin-left: 6px;
				}

				.btn_slider-page {
					margin: 14px 0 7px;
					width: 7px;
					height: 7px;
					transition: opacity const.$time_fast;

					&#{escape('.S=on')} {
						margin-top: 13px;
						width: 9px;
						height: 9px;
					}
				}
			}
		}

		// 간편 카드결제
		.mm_syncer-pay-card {
			padding-bottom: 29px;

			.mm_slider {
				&-item {
					height: 154px;

					figcaption {
						.text_title {
							padding-bottom: 5px;
							@include mixin.font(#5c5c5c v_600 '1.3rem');
						}
					}

					// 카드등록
					.btn_register {
						padding-top: 41px;
						height: 100%;
						border: 1px dashed #cdcdcd;
						border-radius: 8px;
						background-color: #fff;
						text-align: center;

						.ico_add {
							width: 34px;
							height: 34px;
							border-radius: 100%;
							background-color: #f5f5f5;

							&::before {
								margin-top: 10px;
								width: 14px;
								height: 14px;
								background-color: #b8b8b9;
							}
						}

						b {
							display: block;
							margin-top: 9px;
							padding: 0 10px;
							@include mixin.font('1.3rem/1.8rem');
						}
					}
				}

				.mm_form-select {
					margin: 11px auto 7px;
					width: 226px;
				}
			}
		}

		// 간편 계좌결제
		.mm_syncer-pay-account {
			padding-bottom: 29px;

			.mm_slider {
				&-item {
					height: 97px;

					figure {
						.image_logo {
							height: 17px;
						}

						figcaption {
							bottom: 20px;
						}
					}

					// 카드등록
					.btn_register {
						padding: 24px 15px 0;
						height: 100%;
						border: 1px dashed #cdcdcd;
						border-radius: 8px;
						background-color: #fff;

						.ico_add {
							margin-right: 12px;
							width: 34px;
							height: 34px;
							border-radius: 100%;
							background-color: #f5f5f5;
							text-align: center;

							&::before {
								margin-top: 10px;
								width: 14px;
								height: 14px;
								background-color: #b8b8b9;
							}
						}

						b {
							@include mixin.font('1.3rem/3.4rem' left);
						}
					}

					&:only-child {
						.btn_register {
							> b {
								line-height: 1.8rem;
							}
						}
					}
				}
			}
		}

		// 다른 결제수단
		.mm_syncer-payment-method {
			[class*='mm_syncer-method'] {
				margin-bottom: 0;
			}
		}
	}
</style>