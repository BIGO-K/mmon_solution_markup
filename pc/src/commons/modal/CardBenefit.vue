<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>카드사별 혜택</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-card">
				<!-- 무이자할부안내 -->
				<section>
					<h3><b>무이자 할부 안내</b></h3>
					<ul>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_1.png'"
							></LazyloadMUI>
							<p>BC카드 5만원이상 결제 시 2~6개월 무이자 할부<br> <span>대상: BC카드 전 회원(하나 BC카드 포함)</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_2.png'"
							></LazyloadMUI>
							<p>NH농협카드 5만원이상 결제 시 2~6개월 무이자 할부<br> <span>대상: NH농협카드 전 회원</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_3.png'"
							></LazyloadMUI>
							<p>삼성카드 5만원이상 결제 시 2~6개월 무이자 할부<br> <span>대상: 삼성카드 전 회원</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
					</ul>
				</section>

				<!-- 부분무이자할부안내 -->
				<section>
					<h3><b>부분 무이자 할부 안내</b></h3>
					<ul>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_4.png'"
							></LazyloadMUI>
							<p>신한카드 10개월 부분 무이자<br> <span>대상: 신한카드 전 회원</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_5.png'"
							></LazyloadMUI>
							<p>하나카드 10개월 부분 무이자<br> <span>대상: 하나카드 전 회원</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
						<li>
							<LazyloadMUI
								class="mm_bg-contain image_card"
								:_src="'/public/images/dummy/card_logo_3.png'"
							></LazyloadMUI>
							<p>삼성카드 10개월 부분 무이자<br> <span>대상: 삼성카드 전 회원</span></p>
							<span>2020.05.01~2020.05.05</span>
						</li>
					</ul>
				</section>
			</div>
		</template>
	</ModalLayout>
</template>