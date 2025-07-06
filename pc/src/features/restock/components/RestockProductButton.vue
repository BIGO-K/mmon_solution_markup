<script setup lang="ts">
	import { ref } from 'vue';

	const productItem = ref(['a']);
</script>

<template>
	<!-- (D) 상품이 부분 품절인 경우에만 '.btn_restock' 버튼을 노출합니다-->
	<a
		v-if="productItem.length > 0"
		class="mm_btn T=2xs T=line btn_restock"
		href="#"
	>
		<i class="ico_alarm"></i><b>재입고 알림받기</b>
	</a>

	<!-- (D) 재입고 알림받기에서의 상품이 품절(옵션 전체 품절)인 경우 아래와 같이 버튼을 노출합니다. -->
	<a
		v-if="productItem.length === 0"
		class="mm_btn T=lg T=line T=primary btn_restock"
		href="#"
	>
		<i class="ico_alarm"></i><b>재입고 알림받기</b>
	</a>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/style/setting/var';

	.m_prodetail {
		// 재입고 알림 아이콘
		.ico_alarm::before {
			width: 16px;
			height: 16px;
			@include mixin.svg(var.$color_main url('/public/images/common/ico_alarm.svg'));
		}

		.m_product-option {
			.btn_restock {
				color: #4457a7;

				.ico_alarm {
					margin: 3px 4px 0 0;

					&::before {
						width: 12px;
						height: 12px;
						background-color: #4457a7;
					}
				}

				&::after {
					border-color: #4457a7;
					border-radius: 3px;
				}
			}
		}

		&-head {
			&-option {
				> .btn_restock {
					position: absolute;
					z-index: 1;
					top: 17px;
					right: 127px;
				}
			}

			.mm_btn_box {
				.btn_restock {
					.ico_alarm {
						margin: 19px 9px 0 0;
					}
				}
			}
		}

		// 하단 옵션 선택
		&-buy-option {
			.btn_restock {
				float: right;
				margin-top: 8px;
			}
		}
	}
</style>