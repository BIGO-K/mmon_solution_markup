<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>당첨 결과 확인</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div
				v-if="$route.query.type === 'none'"
				class="m_modal-myraffle-result"
			>
				<!-- (D) 당첨 결과에 따라 상단 내용을 변경합니다. -->
				<!-- 미당첨 -->
				<h3><b>아쉽습니다<br> 다음에 다시 도전해주세요!</b></h3>

				<!-- 추첨중 -->
				<!-- <h3><b>당첨자 추첨중입니다..</b></h3>
				<p>조금만 기다려주세요!</p> -->

				<!-- 미응모 -->
				<!-- <h3><b>래플 응모내역이 없습니다</b></h3>
				<p>래플 응모해보세요!</p> -->

				<div class="mm_product-item T=single">
					<figure>
						<div class="mm_image-scale">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'/public/images/dummy/prod_x1_1.png'"
							></LazyloadMUI>
						</div>
						<figcaption>
							<p class="text_brand">
								M.Mon 엠몬스타
							</p>
							<p class="text_product">
								N212UTS510 유니 타이다이 그래픽 반팔 티셔츠 GRAPE
							</p>
						</figcaption>
					</figure>
				</div>
			</div>
			<div
				v-else
				class="m_modal-myraffle-result"
			>
				<h3><b><strong class="mm_text-primary">홍길동</strong>님<br> 래플 당첨을 축하드립니다!</b></h3>
				<dl>
					<dt>구매 가능 기간</dt>
					<dd>04.21(수) 12:00 ~ 04.28(수) 00:00</dd>
				</dl>
				<div class="mm_product-item T=single">
					<figure>
						<div class="mm_image-scale">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'/public/images/dummy/prod_x1_1.png'"
							></LazyloadMUI>
						</div>
						<figcaption>
							<p class="text_brand">
								M.Mon 엠몬스타
							</p>
							<p class="text_product">
								N212UTS510 유니 타이다이 그래픽 반팔 티셔츠 GRAPE
							</p>
						</figcaption>
					</figure>
				</div>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=primary"
						href="#"
					><b>구매하러 가기</b></a>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>

<style src="./_raffle.scss" lang="scss"></style>