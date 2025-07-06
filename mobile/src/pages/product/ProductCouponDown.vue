<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const listAPI = ref<ProductCouponDownListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_DOWNLOADABLE_COUPONS`, ref: listAPI },
	]);

	// 다운로드 가능한 디바이스 여부
	function isDownloadableDevice(usable_device_labels: string[]) {
		return usable_device_labels.length === 3 || usable_device_labels.includes('PC');
	}

	// 다운로드 가능한 디바이스 라벨 목록 반환
	function downloadableDeviceLabel(usable_device_labels: string[]) {
		const devicesLabel = usable_device_labels
			.filter((deviceLabel) => {
				return deviceLabel !== 'PC';
			})
			.join(', ');

		return `${devicesLabel}에서만 쿠폰 다운로드 가능`;
	}
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>쿠폰 다운받기</b></h1>
		</template>

		<template #content>
			<div class="m_popup-coupon">
				<div class="m_popup-coupon-head">
					<h3><b>받기 가능한 쿠폰</b><strong>{{ listAPI?.coupon.length }}<sub>장</sub></strong></h3>
					<button
						type="button"
						class="mm_btn T=sm T=primary btn_download"
					>
						<b>전체 쿠폰받기</b>
					</button>
				</div>

				<!-- 쿠폰 리스트 -->
				<ul class="m_popup-coupon-list">
					<li
						v-for="coupon in listAPI?.coupon"
						:key="coupon.id"
					>
						<p class="text_coupon">
							{{ coupon.name }}
						</p>
						<p class="text_period">
							{{ coupon.expiration_date_message }}
						</p>
						<p
							v-if="!isDownloadableDevice(coupon.usable_device_labels)"
							class="text_condition"
						>
							<i class="ico_info"></i>{{ downloadableDeviceLabel(coupon.usable_device_labels) }}
						</p>
						<button
							v-if="coupon.downloadable && isDownloadableDevice(coupon.usable_device_labels)"
							type="button"
							class="mm_btn T=sm T=line T=primary btn_download"
						>
							<b>쿠폰받기</b>
						</button>
						<b
							v-else-if="!coupon.downloadable && isDownloadableDevice(coupon.usable_device_labels)"
							class="mm_btn T=sm T=lighter btn_download"
						>
							발급완료
						</b>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>
</template>