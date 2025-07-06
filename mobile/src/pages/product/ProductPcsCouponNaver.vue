<script setup lang="ts">
	import LayoutModal from '@/components/layout/LayoutModal.vue';
</script>

<template>
	<LayoutModal :class="'m_modal-prod-coupon T=coupon-naver'">
		<template #title>
			네이버 전용 쿠폰
		</template>

		<template #content>
			<h3>
				<i class="image_logo">
					<img
						src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
						data-lazyload="{ '_src': '../image/content/logo_naver.png' }"
						alt="네이버"
					>
				</i><b>전용</b>
			</h3>
			<div class="m...coupon-sale">
				<p class="text_percent">
					<strong>20</strong><sub>%</sub>
				</p>
				<p>중복할인쿠폰</p>
			</div>
			<p>발급 후 당일사용/일부 상품 브랜드 제외</p>
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=dark"
				>
					<b>지금 다운받기</b><i class="ico_coupon-download"></i>
				</button>
				<button
					type="button"
					class="btn_today"
					onclick="closeCouponCookie();"
				>
					<b>오늘하루 그만보기</b><i class="ico_modal-close"></i>
				</button>
			</div>
		</template>
	</LayoutModal>
</template>

<!-- <script>
// 오늘하루 그만보기 샘플
function closeCouponCookie() {

	var prodId = 'PROD_123456';// 전용쿠폰을 상품마다 노출할 경우 고유 id 지정
	mm.cookie.set('IS_NAVER_COUPON_HIDE_' + prodId, true, 1, true); // 1일 자정 리셋

}
</script> -->