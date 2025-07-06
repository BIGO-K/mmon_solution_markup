<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import ModalLayout from '@/components/Modal.vue';

	const couponListAPI = ref<ProductCouponDownListAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_DETAIL_DOWNLOADABLE_COUPONS`, ref: couponListAPI },
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
	<ModalLayout :modal-class="'m_modal-prodetail-coupon'">
		<template #header>
			<h2><b>쿠폰 다운받기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<h4 class="mm_strapline">
				<b>받기 가능한 쿠폰<strong>2</strong><sub>장</sub></b>
			</h4>

			<!-- 쿠폰 목록 -->
			<ul class="m...coupon-list">
				<li
					v-for="coupon in couponListAPI?.coupon"
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
						<i class="ico_note"></i>{{ downloadableDeviceLabel(coupon.usable_device_labels) }}
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
						class="mm_btn T=sm T=light btn_download"
					>
						발급완료
					</b>
				</li>
			</ul>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>전체 쿠폰받기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>