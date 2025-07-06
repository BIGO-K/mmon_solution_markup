<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<h3 class="mm_heading">
		<b>회원등급 및 혜택</b>
	</h3>

	<!-- 회원등급 및 혜택 -->
	<div class="mm_grade">
		<table>
			<colgroup>
				<col style="width: 240px;">
				<col style="width: 246px;">
				<col style="width: 128px;">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th scope="col">
						<b>등급</b>
					</th>
					<th scope="col">
						<b>등급조건</b>
					</th>
					<th scope="col">
						<b>등급 적립율</b>
					</th>
					<th scope="col">
						<b>등급별 쿠폰</b>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="T=level5">
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level5.png'"
							></LazyloadMUI>
							<strong>VIP</strong>
						</p>
					</th>
					<td><b>200만원 이상, 10건 이상 구매</b></td>
					<td><b>5%</b></td>
					<td>
						<ul>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>7</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 무제한 발급</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>7</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>7</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>7</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
						</ul>
					</td>
				</tr>
				<tr class="T=level4">
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level4.png'"
							></LazyloadMUI>
							<strong>GOLD</strong>
						</p>
					</th>
					<td><b>150만원 이상, 5건 이상 구매</b></td>
					<td><b>4%</b></td>
					<td>
						<ul>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>5</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>5</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>5</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
						</ul>
					</td>
				</tr>
				<tr class="T=level3">
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level3.png'"
							></LazyloadMUI>
							<strong>SILVER</strong>
						</p>
					</th>
					<td><b>100만원 이상, 2건 이상 구매</b></td>
					<td><b>3%</b></td>
					<td>
						<ul>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>3</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_percent">
											<strong>3</strong><sub>%</sub>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
						</ul>
					</td>
				</tr>
				<tr class="T=level2">
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level2.png'"
							></LazyloadMUI>
							<strong>BRONZE</strong>
						</p>
					</th>
					<td><b>50만원 이상, 1건 이상 구매</b></td>
					<td><b>2%</b></td>
					<td>
						<ul>
							<li>
								<div class="mm_coupon T=sm">
									<div class="mm_coupon-inner">
										<p class="text_price">
											<strong>15,000</strong>
										</p>
										<p class="text_coupon">
											등급할인 쿠폰
										</p>
									</div>
								</div>
								<strong class="text_amount"><span>x</span> 1장</strong>
							</li>
						</ul>
					</td>
				</tr>
				<tr class="T=level1">
					<th scope="row">
						<p class="text_grade">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level1.png'"
							></LazyloadMUI>
							<strong>FAMILY</strong>
						</p>
					</th>
					<td><b>신규 회원 및 미구매</b>></td>
					<td><b>1%</b></td>
					<td><b>-</b></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="mm_note">
		<ul>
			<li>회원 등급은 산정 기준에 따라 매월 1일에 확정됩니다.</li>
			<li>등급별 쿠폰은 매월 1일 다운로드 가능하며, 해당 월에 한하여 사용 가능합니다.</li>
			<li>받으신 쿠폰은 <strong>마이페이지 &#62; 혜택관리 &#62; 보유 쿠폰</strong> 페이지에서 확인 가능합니다.</li>
			<li>기간 내 사용하지 않은 쿠폰은 이월되지 않으며, 타 쿠폰과 중복 사용 불가합니다.</li>
		</ul>
	</div>
</template>