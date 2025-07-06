<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-myreview'">
		<template #header>
			<h2><b>리뷰쓰기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<!-- 상품선택 -->
			<div class="m_modal-myreview-product">
				<div class="m...product-point S=point-on">
					<p><i class="ico_photo"></i>포토 리뷰 등록 시 최대<b><strong>1,210</strong><sub>원</sub></b>적립!</p>
					<div
						class="mm_dropdown"
						data-dropdown
					>
						<button
							type="button"
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<b>텍스트 리뷰<strong>1,000</strong><sub>원</sub></b>
							<b>포토 리뷰<strong>5,000</strong><sub>원</sub></b>
							<i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<div class="mm_table-point">
									<table>
										<thead>
											<tr>
												<th scope="row">
													<b>적립금 지급</b>
												</th>
												<th scope="col">
													<b>텍스트 리뷰</b>
												</th>
												<th scope="col">
													<b>포토 리뷰</b>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">
													<b>4만원 초과</b>
												</th>
												<td><b><strong>100</strong><sub>원</sub></b></td>
												<td><b><strong>100</strong><sub>원</sub></b></td>
											</tr>
											<tr>
												<th scope="row">
													<b>1만원 이상</b>
												</th>
												<td><b><strong>100</strong><sub>원</sub></b></td>
												<td><b><strong>200</strong><sub>원</sub></b></td>
											</tr>
											<tr>
												<th scope="row">
													<b>1만원 미만</b>
												</th>
												<td><b><strong>50</strong><sub>원</sub></b></td>
												<td><b><strong>100</strong><sub>원</sub></b></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mm_product-select">
					<div class="mm_product-item T=single T=sm">
						<a>
							<figure>
								<div class="mm_image-scale">
									<LazyloadMUI
										class="mm_bg-cover image_product"
										:_src="'/public/images/dummy/prod_x1_2.png'"
									></LazyloadMUI>
								</div>
								<figcaption>
									<p class="text_product">SIGNATURE EMBLEM CANVAS 데일리 꾸안꾸 코튼 린넨 박스원피스 빅사이즈 롱원피스 홈 원피스</p>
									<p class="text_option">화이트 FREE / 1개</p>
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
				<!--// 상품정보 : 자동노출 -->
			</div>
			<div class="m_modal-myreview-value">
				<!-- 별점 -->
				<section>
					<h5><b>상품은 만족하셨나요?</b></h5>
					<div class="m...value-starscore">
						<!--
							(D) 선택된 별점의 li 요소에 'S=starscore-on' 클래스를 추가하고, button 요소에 '선택됨' 타이틀을 추가합니다.
							input hidden의 value 값에는 점수가 입력됩니다. (0 선택안됨)
						-->
						<ul>
							<li>
								<button type="button">
									<i
										class="ico_star"
										title="별점"
									></i><b class="mm_ir-blind">5점 만점에 1점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i
										class="ico_star"
										title="별점"
									></i><b class="mm_ir-blind">5점 만점에 2점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i
										class="ico_star"
										title="별점"
									></i><b class="mm_ir-blind">5점 만점에 3점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i
										class="ico_star"
										title="별점"
									></i><b class="mm_ir-blind">5점 만점에 4점</b>
								</button>
							</li>
							<li>
								<button type="button">
									<i
										class="ico_star"
										title="별점"
									></i><b class="mm_ir-blind">5점 만점에 5점</b>
								</button>
							</li>
						</ul>
						<input
							type="hidden"
							value="0"
						>
					</div>
				</section>
			</div>
			<div class="m_modal-myreview-info">
				<!-- 리뷰내용 -->
				<h5 class="mm_text-label">
					<b>리뷰 내용</b>
				</h5>
				<div class="mm_form-textarea">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<textarea
							class="textfield"
							data-text="{ '_byte': 2000 }"
						></textarea>
						<i class="bg_text"></i>
						<span class="text_placeholder">10자 이상 2,000자 이하로 입력하세요</span>
					</label>
				</div>
				<div class="mm_form-multiple">
					<ul>
						<li>
							<div class="mm_form-image">
								<div class="mm_form-image-preview"></div>
								<label>
									<input
										type="file"
										accept="image/*"
										data-file="{ '_imageSize': 'cover' }"
									>
									<b class="mm_form-image-box"><i class="ico_upload"></i><span class="mm_ir-blind">사진 첨부하기</span></b>
								</label>
								<button
									type="button"
									class="btn_remove-file"
								>
									<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
								</button>
							</div>
						</li>
					</ul>
					<label class="btn_select-multiple">
						<input
							type="file"
							accept="image/*"
							data-multiple="{ '_max': 3, '_isMax': true, '_isAuto': false }"
							multiple
						>
						<i class="ico_image-multiple"></i>
						<b>여러장 선택하기</b>
					</label>
				</div>
				<div class="mm_note">
					<ul>
						<li>사진은 jpg, png 파일로 3개까지 업로드 가능합니다.</li>
						<li>첫번째 등록한 사진이 리뷰 대표 이미지로 설정됩니다.</li>
						<li>입력하신 리뷰 위에 등록한 이미지가 노출됩니다.</li>
						<li>동일한 문자 또는 자음/모음은 4회 이상 연속 입력할 수 없습니다.</li>
						<li>소중한 고객님의 개인 정보 보호를 위해 주민번호, 전화번호 등 개인 정보는 절대 입력하지 않도록 주의해주세요.</li>
						<li>저작권 침해/음란/욕설/비방 글, 개인 정보 유출(전화번호, 주민번호, 이름, 아이디 등), 판매/광고/홍보성 글을 등록한 경우 <br>임의로 삭제될 수 있습니다.</li>
					</ul>
				</div>
			</div>

			<!-- 하단버튼 -->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>수정하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>

<!-- 별점 선택 -->
<!-- <script>
	(function () {

		var $starscore = mm.find('.m\\.\\.\\.value-starscore')[0];
		var $stars = mm.find('li', $starscore);

		mm.event.on($stars, 'click', function (__e) {

			var _currentIndex = mm.element.index($stars, __e.currentTarget);

			_.each($stars, function (__element, __index) {

				if (__index > _currentIndex) __element.classList.remove('S=starscore-on');
				else __element.classList.add('S=starscore-on');

				if (__index === _currentIndex) __element.firstElementChild.setAttribute('title', '선택됨');
				else __element.firstElementChild.removeAttribute('title');

			});

			mm.find('input[type=hidden]', $starscore)[0].value = _currentIndex + 1;

		});

	})();
</script> -->