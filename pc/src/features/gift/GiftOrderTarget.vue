<script setup lang="ts">
	// import Pagination from '@/components/Pagination.vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>사은품 지급 대상</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-gift-target">
				<div class="mm_gift-item">
					<figure>
						<LazyloadMUI
							class="mm_bg-cover image_gift"
							:_src="'/public/images/dummy/prod_x1_2.png'"
						></LazyloadMUI>
						<figcaption>
							<p class="text_name">
								시그니쳐 소프트 쿨러 50QT BLACK
							</p>
							<p class="text_condition">
								텐트 200,000원 이상 구매 시
							</p>
							<p class="text_date">
								2021.05.01(토) ~ 소진 시까지(선착순증정)
							</p>
						</figcaption>
					</figure>
				</div>
				<table>
					<colgroup>
						<col style="width: 100px;">
						<col style="width: 32%;">
						<col>
					</colgroup>
					<thead>
						<tr>
							<th scope="col">
								<b>상품</b>
							</th>
							<th scope="col">
								<b>브랜드명</b>
							</th>
							<th scope="col">
								<b>상품명</b>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_1.png'"
								></LazyloadMUI>
							</td>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p class="text_product">
									N211AFW150 다이브 플러스 V2 슬리퍼 YELLOW
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_2.png'"
								></LazyloadMUI>
							</td>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p class="text_product">
									N212UTS909 세미 오버핏 ACTIVITY 그래픽 반팔 티셔츠 CARBON BLACK
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_3.png'"
								></LazyloadMUI>
							</td>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p class="text_product">
									N215AET010 시그니쳐 소프트 쿨러 50QT BLACK
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_4.png'"
								></LazyloadMUI>
							</td>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p class="text_product">
									N215ACR210 인포멀 미니 버킷백 IVORY
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_5.png'"
								></LazyloadMUI>
							</td>
							<td><b>M.Mon 엠몬스타</b></td>
							<td>
								<p class="text_product">
									N215AET010 시그니쳐 소프트 쿨러 50QT BLACKN215AET010 시그니쳐 소프트 쿨러 50QT BLACK
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<!-- TODO <Pagination></Pagination> -->
			</div>
		</template>
	</ModalLayout>
</template>

<style src="./_gift.scss" lang="scss"></style>