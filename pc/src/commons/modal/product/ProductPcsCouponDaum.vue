<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>다음 전용 쿠폰</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-prodetail-pcs T=pcs-daum">
				<h3>
					<i class="image_logo">
						<LazyloadMUI
							:_tag="'img'"
							:_src="'../image/content/logo_daum.png'"
							alt="다음"
						></LazyloadMUI>
					</i><b>전용 쿠폰</b>
				</h3>
				<div class="m...pcs-coupon">
					<p class="text_price">
						<strong>2,500</strong>
					</p>
					<!-- <p class="text_percent">
						<strong>20</strong><sub>%</sub>
					</p> -->
					<p class="text_coupon">
						중복할인쿠폰
					</p>
				</div>
				<p>발급 후 당일사용/일부 상품 브랜드 제외</p>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=dark"
					>
						<b>지금 다운받기</b><i class="ico_download"></i>
					</button>
				</div>
				<div class="m...pcs-today">
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">오늘은 그만 볼래요</span>
						</b>
					</label>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>

<!-- 모달 스크립트 -->
<!-- 오늘 하루 그만보기 샘플 -->
<!-- <script>
	function closeCouponCookie() {

		if (mm.find('.m_modal-prodetail-pcs [data-check]')[0].checked) {
			var prodId = 'PROD_123456';// 전용쿠폰을 상품마다 노출할 경우 고유 id 지정
			mm.cookie.set('IS_DAUM_COUPON_HIDE_' + prodId, true, 1, true); // 1일 자정 리셋
		}

	}
</script> -->
<!--// 모달 스크립트 -->