<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutModal from '@/components/layout/LayoutModal.vue';
</script>

<template>
	<LayoutModal>
		<template #title>
			당첨 결과 확인
		</template>

		<template #content>
			<h3><strong class="mm_text-primary">홍길동님</strong><br> <b>당첨을 축하드립니다!</b></h3>
			<dl><dt>구매 가능 기간</dt><dd>04.21(수) 12:00 ~ 04.28(수) 00:00</dd></dl>
			<div class="mm_product-item T=single-sm">
				<figure>
					<LazyloadMUI
						:_src="'/public/images/_sample/prod_x1_1.png'"
					></LazyloadMUI>
					<figcaption>
						<p class="text_brand">
							엠몬스타
						</p>
						<p class="text_product">
							[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
						</p>
					</figcaption>
				</figure>
			</div>
			<div class="mm_btn_box">
				<router-link
					class="mm_btn T=primary"
					:to="{ name: 'Raffle' }"
				>
					<b>구매하러 가기</b>
				</router-link>
			</div>


			<!-- (D) 당첨 결과에 따라 상단 내용을 변경합니다. -->
			<!-- 미당첨 -->
			<h3><b>아쉬워요<br> 다음에 다시 도전해주세요</b></h3>

			<!-- 추첨중 -->
			<!-- <h3><b>당첨자 추첨중입니다..</b></h3>
			<p>조금만 기다려주세요!</p> -->

			<!-- 미응모 -->
			<!-- <h3><b>래플 응모내역이 없습니다</b></h3>
			<p>래플 응모해보세요!</p> -->
			<div class="mm_product-item T=single-sm">
				<figure>
					<LazyloadMUI
						:_src="'/public/images/_sample/prod_x1_1.png'"
					></LazyloadMUI>
					<figcaption>
						<p class="text_brand">
							엠몬스타
						</p>
						<p class="text_product">
							[매긴나잇브릿지]플리츠 디테일 드레스_MJM1OP3140
						</p>
					</figcaption>
				</figure>
			</div>
		</template>
	</LayoutModal>
</template>