<script setup lang="ts">

</script>

<template>
	<li>
		<label class="mm_form-radio T=payment-naverpay">
			<input
				type="radio"
				name="dev_radio-payment"
				data-radio="{ 'syncer': '.mm_syncer-method-naverpay' }"
			>
			<b class="mm_block">
				<i class="ico_naverpay"></i>
				<span class="text_label">네이버페이</span>
			</b>
		</label>
	</li>
	<li>
		<label class="mm_form-radio T=payment-kakaopay">
			<input
				type="radio"
				name="dev_radio-payment"
				data-radio
			>
			<b class="mm_block">
				<i class="ico_kakaopay"></i>
				<span class="text_label">카카오페이</span>
			</b>
		</label>
	</li>
	<li>
		<label class="mm_form-radio T=payment-payco">
			<input
				type="radio"
				name="dev_radio-payment"
				data-radio="{ 'syncer': '.mm_syncer-method-payco' }"
			>
			<b class="mm_block">
				<i class="ico_payco"></i>
				<span class="text_label">페이코</span>
			</b>
		</label>
	</li>
	<li>
		<label class="mm_form-radio T=payment-toss">
			<input
				type="radio"
				name="dev_radio-payment"
				data-radio
			>
			<b class="mm_block">
				<i class="ico_toss"></i>
				<span class="text_label">토스</span>
			</b>
		</label>
	</li>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function';
	@use '../../../assets/scss/common/helper/mixin';

	/** 주문결제 */
	.m_order-payment-method {
		// 결제 수단
		#{function.escape('.m...method-type')} {
			.mm_form-radio {
				// 결제수단 아이콘 클래스명은 개발팀 요청으로 지정된 클래스이며, 주문결제 페이지에서만 사용합니다.
				$payments: (naverpay, 53px, 21px, #00c73c, 4px, 'ico_naverpay.svg'), (kakaopay, 54px, 18px, #47292b, 6px, 'ico_kakaopay.svg'), (payco, 62px, 15px, #fa1414, 7px, 'ico_payco.svg'), (toss, 62px, 18px, #0064ff, 4px, 'ico_toss.svg');
				@each $payment, $width, $height, $color, $paddingTop, $url in $payments {
					.ico_#{$payment} {
						padding-top: $paddingTop;

						&::before {
							width: $width;
							height: $height;
							@include mixin.svg(#888 url('/public/images/common/#{$url}'));
						}
					}

					&#{function.escape('.T=payment-#{$payment}')} {
						input[type='radio']:checked + .mm_block {
							&::before {
								border-color: $color;
								@if $payment == kakaopay {
									border-color: #ffcd00;
								}
							}

							i::before {
								@if $payment == naverpay {
									@include mixin.svg(none);
									@include mixin.background(transparent url('/public/images/common/#{$url}') '100% 0/contain' no-repeat);
								}
								@else {
									background-color: $color;
								}
							}

							.text_label {
								color: $color;
							}
						}
					}
				}
			}
		}
	}
</style>