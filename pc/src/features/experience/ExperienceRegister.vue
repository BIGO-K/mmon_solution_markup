<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-experience'">
		<template #header>
			<h2><b>체험단 후기 작성</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<!--  *상품선택 -->
			<div class="mm_product-select">
				<div
					class="mm_dropdown"
					data-dropdown
				>
					<button
						type="button"
						class="btn_dropdown"
						title="펼쳐보기"
					>
						<b>상품을 선택해주세요</b><i class="ico_dropdown T=bold"></i>
					</button>
					<div class="mm_dropdown-item">
						<div class="mm_dropdown-item-inner">
							<div class="mm_scroller">
								<ul>
									<li>
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
									</li>
									<li>
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
									</li>
									<li>
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
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- (D) 선택된 상품이 노출됩니다. -->
				<div class="mm_product-select-complete"></div>
			</div>

			<div class="m_modal-experience-value">
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

				<!-- 사이즈 -->
				<section>
					<h5><b>사이즈는 어떤가요?</b></h5>
					<div class="mm_radio-list">
						<ul class="mm_flex T=equal">
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-size"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">작아요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-size"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">정사이즈예요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-size"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">생각보다 커요</span>
									</b>
								</label>
							</li>
						</ul>
					</div>
				</section>

				<!-- 색상 -->
				<section>
					<h5><b>색상은 어떤가요?</b></h5>
					<div class="mm_radio-list">
						<ul class="mm_flex T=equal">
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-color"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">화면보다 밝아요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-color"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">화면과 같아요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-color"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">화면보다 어두워요</span>
									</b>
								</label>
							</li>
						</ul>
					</div>
				</section>

				<!-- 핏 -->
				<section>
					<h5><b>핏은 어떤가요?</b></h5>
					<div class="mm_radio-list">
						<ul class="mm_flex T=equal">
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-fit"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">슬림해요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-fit"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">적당해요</span>
									</b>
								</label>
							</li>
							<li>
								<label class="mm_form-radio">
									<input
										type="radio"
										name="dev_radio-fit"
										data-radio
									>
									<b class="mm_block">
										<i class="ico_form-radio"></i>
										<span class="text_label">오버핏이에요</span>
									</b>
								</label>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div class="m_modal-experience-info">
				<!-- 신체 정보 입력 -->
				<h5 class="mm_text-label">
					<b>신체 정보 입력<strong class="mm_text-variable">(선택)</strong></b>
				</h5>
				<div class="mm_form_mix-linked">
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="text"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">키</span>
						</label>
					</div>
					<span class="text_linked">cm</span>
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="text"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">몸무게</span>
						</label>
					</div>
					<span class="text_linked">kg</span>
					<div class="mm_form-select">
						<label>
							<select data-select>
								<option>발 사이즈</option>
							</select>
							<b class="text_selected"></b>
							<i class="ico_form-select"></i>
						</label>
					</div>
					<span class="text_linked">mm</span>
				</div>
				<div class="mm_note">
					<ul>
						<li>해당 정보는 다른 분들의 사이즈 참고용으로만 사용되고 개인식별정보는 공개되지 않습니다.</li>
					</ul>
				</div>

				<!-- 체험단 후기 내용 -->
				<h5 class="mm_text-label">
					<b>체험단 후기 제목</b>
				</h5>
				<div class="mm_form-text">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<input
							type="text"
							class="textfield"
							data-text
							maxlength="40"
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">띄어쓰기 포함 최대 40자까지 입력 가능합니다</span>
					</label>
				</div>
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
							data-multiple="{ '_max': 10, '_isMax': true, '_isAuto': false }"
							multiple
						>
						<i class="ico_image-multiple"></i>
						<b>여러장 선택하기</b>
					</label>
				</div>
				<div class="mm_note">
					<ul>
						<li>사진은 jpg, png 파일로 10개까지 업로드 가능합니다.</li>
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
						<b>등록하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>

<!-- 모달 스크립트 -->
<!-- <script>
	(function () {

		//< 별점 선택
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
		//> 별점 선택

	})();
</script> -->
<!--// 모달 스크립트 -->