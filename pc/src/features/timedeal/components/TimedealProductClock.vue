<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const timedealAPI = ref<TimedealAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_TIME_ATTACK_DETAIL`, ref: timedealAPI },
	]);

	defineProps<{
		totalStock: number;
	}>();
</script>

<template>
	<!-- 타임특가 -->
	<div class="m_prodetail-head-timesale">
		<i class="ico_clock"></i>
		<p class="text_time">
			<strong class="text_time">41<span>:</span>50<span>:</span>03</strong>남음
		</p>
		<p class="text_stock">
			남은수량<strong>{{ totalStock }}</strong>
		</p>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';

	/** 상품상세 */
	.m_prodetail {
		&-head {
			&-timesale {
				overflow: hidden;
				margin-bottom: 13px;
				padding: 0 24px;
				height: 48px;
				border-radius: 2px;
				background-color: #f86363;
				@include mixin.font(#fff '0');

				.ico_clock {
					margin: 15px 11px 0 0;

					&::before {
						width: 20px;
						height: 19px;
						background-color: #fff;
					}
				}

				.text_time {
					display: inline-block;
					vertical-align: 0;
					@include mixin.font('1.7rem/4.8rem');

					strong {
						display: inline-block;
						margin: -1px 5px 0 0;
						vertical-align: -2px;
						font-size: 2.2rem;

						span {
							padding: 0 3px;
							font-size: 1.8rem;
						}
					}
				}

				.text_stock {
					display: inline-block;
					position: relative;
					margin-left: 28px;
					padding-left: 31px;
					vertical-align: 0;
					@include mixin.font('1.5rem/4.8rem');

					strong {
						margin-left: 12px;
						color: #fcff66;
					}

					&::before {
						position: absolute;
						top: 50%;
						left: 0;
						height: 11px;
						border-left: 1px solid rgba(#fff, 0.4);
						transform: translateY(-50%);
						content: '';
					}
				}
			}
		}
	}
</style>