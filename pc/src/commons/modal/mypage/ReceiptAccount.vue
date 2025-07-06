<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-receipt'">
		<template #header>
			<h2><b>가상계좌 영수증</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-receipt-head">
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>전체</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=sm T=line btn_email"
						href="#"
					><i class="ico_email"></i><b>메일발송</b></a>
					<button
						type="button"
						class="mm_btn T=sm T=light btn_print"
						onclick="window.print();"
					>
						<i class="ico_print"></i><b>인쇄</b>
					</button>
				</div>
			</div>

			<!-- 인쇄영역 -->
			<div class="mm_print">
				<!-- 주문 정보 -->
				<section>
					<h3><b>주문 정보</b></h3>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>주문번호</b>
								</th>
								<td>2102040927176588082</td>
							</tr>
							<tr>
								<th scope="row">
									<b>주문자명</b>
								</th>
								<td>홍*동</td>
							</tr>
							<tr>
								<th scope="row">
									<b>상품명</b>
								</th>
								<td>[카파] 반다 스트랩 샌들 블랙 아동 키즈</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 결제 정보 -->
				<section>
					<h3><b>결제 정보</b></h3>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>결제수단</b>
								</th>
								<td>가상계좌</td>
								<th scope="row">
									<b>거래상태</b>
								</th>
								<td>입금</td>
							</tr>
							<tr>
								<th scope="row">
									<b>거래일시</b>
								</th>
								<td>2021/02/07 09:27:45</td>
								<th scope="row">
									<b>취소일시</b>
								</th>
								<td>2021/02/07 09:27:45</td>
							</tr>
							<tr>
								<th scope="row">
									<b>결제은행</b>
								</th>
								<td>국민은행</td>
								<th scope="row">
									<b>가상계좌번호</b>
								</th>
								<td>408966******8936</td>
							</tr>
							<tr>
								<th scope="row">
									<b>승인금액</b>
								</th>
								<td>
									<p class="text_price mm_text-variable">
										<strong>58,500</strong>
									</p>
								</td>
								<th scope="row">
									<b>과세금액</b>
								</th>
								<td>
									<p class="text_price">
										-<strong>25,455</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row"></th>
								<td></td>
								<th scope="row">
									<b>부가세</b>
								</th>
								<td>
									<p class="text_price">
										-<strong>2,545</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row"></th>
								<td></td>
								<th scope="row">
									<b>면세금액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>0</strong>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>잔액</b>
								</th>
								<td>
									<p class="text_price">
										<strong>2,500</strong>
									</p>
								</td>
								<th scope="row"></th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 현금영수증 정보 -->
				<section>
					<h3><b>현금영수증 정보</b></h3>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>결제수단</b>
								</th>
								<td>현금영수증</td>
								<th scope="row">
									<b>거래상태</b>
								</th>
								<td>승인</td>
							</tr>
							<tr>
								<th scope="row">
									<b>공급자사업자번호</b>
								</th>
								<td>123123123</td>
								<th scope="row">
									<b>현금영수증용도</b>
								</th>
								<td>소득공제</td>
							</tr>
							<tr>
								<th scope="row">
									<b>현금영수증발급상태</b>
								</th>
								<td>구매자요청발급</td>
								<th scope="row">
									<b>현금영수증인증값</b>
								</th>
								<td>0101234****</td>
							</tr>
							<tr>
								<th scope="row">
									<b>현금영수증승인번호</b>
								</th>
								<td>123412415435</td>
								<th scope="row"></th>
								<td></td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 공급자 정보 -->
				<section>
					<h3><b>공급자 정보</b></h3>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>상호</b>
								</th>
								<td>(주)엠몬스타</td>
								<th scope="row">
									<b>사업자번호</b>
								</th>
								<td>000-00-00000</td>
							</tr>
							<tr>
								<th scope="row">
									<b>대표자명</b>
								</th>
								<td>장한필</td>
								<th scope="row">
									<b>연락처</b>
								</th>
								<td>031-8023-9667</td>
							</tr>
							<tr>
								<th scope="row">
									<b>주소</b>
								</th>
								<td colspan="3">
									경기도 성남시 분당구 판교로242(삼평동, PDC빌딩 A동 1002호)
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>홈페이지</b>
								</th>
								<td colspan="3">
									www.mmonstar.co.kr
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<!-- 결제대행사 정보 -->
				<section>
					<h3><b>결제대행사 정보</b></h3>
					<table>
						<tbody>
							<tr>
								<th scope="row">
									<b>상호</b>
								</th>
								<td>한국정보통신(주)</td>
								<th scope="row">
									<b>사업자번호</b>
								</th>
								<td>213-86-34194</td>
							</tr>
							<tr>
								<th scope="row">
									<b>대표자명</b>
								</th>
								<td>권순배, 임명수</td>
								<th scope="row">
									<b>연락처</b>
								</th>
								<td>1670-3212</td>
							</tr>
							<tr>
								<th scope="row">
									<b>주소</b>
								</th>
								<td colspan="3">
									경기도 성남시 분당구 판교로242(삼평동, PDC빌딩 A동 1002호)
								</td>
							</tr>
							<tr>
								<th scope="row">
									<b>홈페이지</b>
								</th>
								<td colspan="3">
									www.naturestore.co.kr
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=xl T=primary btn_print"
						onclick="window.print();"
					>
						<b>인쇄하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>