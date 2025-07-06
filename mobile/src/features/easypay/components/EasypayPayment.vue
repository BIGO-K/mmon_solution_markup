<script setup lang="ts">
	defineProps<{
		easypayMethods: PayMethod[]
		latelyMethodCode?: number | null
	}>();
</script>

<template>
	<li
		v-for="method in easypayMethods"
		:key="method.label"
	>
		<label
			class="mm_form-radio"
			:class="[
				{ 'T=payment-toss': method.eng_label === 'toss' },
				{ 'T=payment-naverpay': method.eng_label === 'naverpay' },
				{ 'T=payment-kakaopay': method.eng_label === 'kakaopay' },
				{ 'T=payment-payco': method.eng_label === 'payco' }
			]"
		>
			<input
				type="radio"
				name="dev_radio-payment"
				data-radio="{ 'syncer': '.mm_syncer-method-naverpay' }"
				:checked="method.code === latelyMethodCode"
			>
			<b class="mm_block">
				<i
					:class="[
						{ 'ico_toss': method.eng_label === 'toss' },
						{ 'ico_naverpay': method.eng_label === 'naverpay' },
						{ 'ico_kakaopay': method.eng_label === 'kakaopay' },
						{ 'ico_payco': method.eng_label === 'payco' }
					]"
				>
				</i>
				<span class="text_label">{{ method.label }}</span>
			</b>
		</label>
	</li>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	.m_popup-order-payment {
		// 결제 수단
		#{escape('.m...payment-method')} {
			.mm_form-radio {
				// 결제수단 아이콘 클래스명은 개발팀 요청으로 지정된 클래스이며, 주문결제 페이지에서만 사용합니다.
				$payments: (naverpay, 55px, 22px, #00c73c, 31px, 'ico_naverpay.svg'), (kakaopay, 54px, 18px, #47292b, 34px, 'ico_kakaopay.svg'),
					(payco, 56px, 14px, #fa1414, 35px, 'ico_payco.svg'), (toss, 83px, 16px, #0064ff, 34px, 'ico_toss.png');
				@each $payment, $width, $height, $color, $top, $url in $payments {
					.ico_#{$payment} {
						top: $top;

						&::before {
							width: $width;
							height: $height;
							@if $payment == toss {
								@include mixin.svg(none);
								@include mixin.background(transparent url('/public/images/common/#{$url}') no-repeat '0 0/cover');
							}
							@else {
								@include mixin.svg(#888 url('/public/images/common/#{$url}'));
							}
						}
					}

					&#{escape('.T=payment-#{$payment}')} {
						input[type='radio'] {
							&:checked + .mm_block {
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
									@else if $payment == toss {
										@include mixin.background(transparent '0 100%');
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
	}
</style>