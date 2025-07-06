<script setup lang="ts">
	import { ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import FinGiftInfo from '@/features/gift/components/GiftOrderCompleteGiftInfo.vue';

	const _isPay = ref(true);
</script>

<template>
	<div class="mm_inner m_order">
		<section class="m_order-fin">
			<h2><b>주문이 완료되었습니다</b></h2>
			<p>주문번호: 2005141142151234562</p>
			<!-- (D) 결제방법을 '무통장 입금'으로 선택한 경우 .m_order-fin-deposit 요소를 노출합니다. -->
			<div class="m_order-fin-deposit">
				<div class="m...deposit-inner">
					<dl>
						<dt>입금계좌</dt>
						<dd>국민은행 123456789123456</dd>
					</dl>
					<dl>
						<dt>입금기한</dt>
						<dd><strong class="mm_text-secondary">2020.06.05 23:59:59까지</strong></dd>
					</dl>
				</div>
			</div>
			<div class="mm_foot">
				<div class="mm_btn_box T=equal">
					<a
						class="mm_btn T=line T=dark"
						href="#"
					><b>구매내역 보기</b></a>
					<a
						class="mm_btn T=primary"
						href="#"
					><b>쇼핑 홈 가기</b></a>
				</div>
			</div>
		</section>

		<!-- 상품 정보 -->
		<div class="mm_order-item">
			<section class="mm_order-item-seller">
				<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
				<p class="text_ship">
					<i class="ico_ship"></i><span>무료배송</span>
				</p>
				<ul>
					<li>
						<div class="mm_flex">
							<div class="mm_product-item T=single">
								<a href="#">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="'/public/images/dummy/prod_x1_1.png'"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">M.Mon 엠몬스타</p>
											<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
											<p class="text_option">화이트 FREE / 10개</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="mm...order-price">
								<p class="text_price">
									<strong>290,000</strong>
								</p>
								<p class="text_point">
									사용 적립금<b><strong>12,000</strong><sub>원</sub></b>
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="mm_flex">
							<div class="mm_product-item T=single">
								<a href="#">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="'/public/images/dummy/prod_x1_2.png'"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">M.Mon 엠몬스타</p>
											<p class="text_product">N212WTS840 여성 드라이실 중힙기장 반팔 티셔츠</p>
											<p class="text_option">화이트 FREE / 10개</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="mm...order-price">
								<p class="text_price">
									<strong>99,000</strong>
								</p>
								<p class="text_point">
									사용 적립금<b><strong>30,000</strong><sub>원</sub></b>
								</p>
							</div>
						</div>
					</li>
				</ul>
			</section>
			<section class="mm_order-item-seller">
				<h5><i class="ico_shop"></i><b>M.Mon 엠몬스타</b></h5>
				<p class="text_ship">
					<i class="ico_ship"></i><span class="text_price"><strong>2,500</strong></span>
				</p>
				<ul>
					<li>
						<div class="mm_flex">
							<div class="mm_product-item T=single">
								<a href="#">
									<figure>
										<div class="mm_image-scale">
											<LazyloadMUI
												class="mm_bg-cover image_product"
												:_src="'/public/images/dummy/prod_x1_3.png'"
											></LazyloadMUI>
										</div>
										<figcaption>
											<p class="text_brand">M.Mon 엠몬스타</p>
											<p class="text_product">MF 2491 버몬트 천연소가죽 로우 스니커즈</p>
											<p class="text_option">화이트 FREE / 10개</p>
										</figcaption>
									</figure>
								</a>
							</div>
							<div class="mm...order-price">
								<p class="text_price">
									<strong>39,000</strong>
								</p>
								<p class="text_point">
									사용 적립금<b><strong>30,000</strong><sub>원</sub></b>
								</p>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</div>

		<FinGiftInfo v-if="_isPay"></FinGiftInfo>

		<!-- 배송지 정보 -->
		<section class="mm_order-info">
			<h4 class="mm_strapline T=line">
				<b>배송지 정보</b>
			</h4>
			<table>
				<tbody>
					<tr>
						<th scope="row">
							<b>배송지명</b>
						</th>
						<td>나의자취방</td>
					</tr>
					<tr>
						<th scope="row">
							<b>받는 사람</b>
						</th>
						<td>홍길동</td>
					</tr>
					<tr>
						<th scope="row">
							<b>휴대폰 번호</b>
						</th>
						<td>010-0000-0000</td>
					</tr>
					<tr>
						<th scope="row">
							<b>주소</b>
						</th>
						<td><span class="text_postcode">06616</span><b>경기도 남양주시 진접읍 해밀마을 5단지 반도유보라메이플타운 102동 1121호</b></td>
					</tr>
					<tr>
						<th scope="row">
							<b>배송메모</b>
						</th>
						<td>부재 시 핸드폰으로 연락 바랍니다</td>
					</tr>
				</tbody>
			</table>
		</section>

		<div class="m_order-payment">
			<!-- 결제 정보 -->
			<section class="mm_order-info">
				<h4 class="mm_strapline T=line">
					<b>결제 정보</b>
				</h4>
				<table>
					<tbody>
						<tr>
							<th scope="row">
								<b>결제수단</b>
							</th>
							<td>신용/체크카드</td>
						</tr>
						<tr>
							<th scope="row">
								<b>카드사</b>
							</th>
							<td>하나카드</td>
						</tr>
						<tr>
							<th scope="row">
								<b>카드번호</b>
							</th>
							<td>123*-****-****-****</td>
						</tr>
						<tr>
							<th scope="row">
								<b>카드승인일</b>
							</th>
							<td>2021.06.01 12:30:12</td>
						</tr>
						<tr>
							<th scope="row">
								<b>구매 적립</b>
							</th>
							<td>
								<p class="text_save">
									+100원
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<!-- 최종 결제금액 -->
			<section>
				<h4 class="mm_strapline T=line">
					<b>최종 결제금액</b>
				</h4>
				<div class="mm_cost">
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>총 상품금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>210,000</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>배송비</b>
								</th>
								<td>
									<p class="text_price">
										+ <strong>2,500</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>회원할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>6,200</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>쿠폰할인</b>
								</th>
								<td>
									<p class="text_price">
										- <strong>8,540</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>적립금 사용</b>
								</th>
								<td>
									<p class="text_point">
										- <strong>2,450</strong><sub>원</sub>
									</p>
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th scope="row">
									<b>최종 결제금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>201,510</strong>
									</p>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
		</div>
	</div>

	<!-- 현재 페이지 스크립트 -->
	<!-- <script src="../js/.js"></script> -->
</template>