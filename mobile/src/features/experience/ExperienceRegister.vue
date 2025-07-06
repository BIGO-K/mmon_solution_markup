<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const listAPI = ref<ExperienceReviewableProductListAPI>();

	// api
	Api.getAll([
		{ key: `EXPERIENCEGROUP_REVIEWABLE_GOODS`, ref: listAPI },
	]);

	const starScore = ref(0);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>체험단 후기 쓰기</b></h1>
		</template>

		<template #content>
			<div class="m_popup-experience">
				<!-- 상품정보 : 선택형 -->
				<div class="m_popup-experience-product">
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
										<div class="mm_product-list T=xs">
											<ul>
												<template
													v-for="item in listAPI?.goods_list"
													:key="item.id"
												>
													<li
														v-for="option in item.option_list"
														:key="option.id"
													>
														<div class="mm_product-item T=single-xs">
															<a>
																<figure>
																	<LazyloadMUI
																		class="mm_bg-cover image_product"
																		:_src="item.thumbnail_url"
																	></LazyloadMUI>
																	<figcaption>
																		<p class="text_product">{{ item.name }}</p>
																		<p class="text_option">{{ option.name }}</p>
																	</figcaption>
																</figure>
															</a>
														</div>
													</li>
												</template>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- (D) 선택된 상품이 노출됩니다. -->
						<div class="mm_product-select-complete"></div>
					</div>
				</div>

				<hr class="mm_line">

				<!-- 별점 -->
				<section>
					<h6><b>상품은 만족하셨나요?</b></h6>
					<!--
						(D) 별점이 선택된 상태일 때는 m_popup-experience-starscore 태그에 'S=starscore-choice' 클래스가 추가됩니다.
						선택된 별점의 li에 'S=starscore-on' 클래스와 button에 '선택됨' 타이틀이 추가되며, input hidden의 value값에 점수가 입력됩니다. (0 선택안됨)
					-->
					<div class="m_popup-experience-starscore S=starscore-choice">
						<ul>
							<li
								v-for="(score, index) in 5"
								:key="score"
								:class="{ 'S=starscore-on': starScore >= index + 1 }"
							>
								<button
									type="button"
									:title="starScore >= index + 1 ? '선택됨' : ''"
									@click="starScore = index + 1"
								>
									<i class="ico_star-fill"></i><b class="mm_ir-blind">5점 만점에 {{ index + 1 }}점</b>
								</button>
							</li>
						</ul>
						<input
							type="hidden"
							:value="`${starScore}`"
						>
					</div>
				</section>

				<!-- 사이즈 -->
				<section>
					<h6><b>사이즈는 어떤가요?</b></h6>
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
					<h6><b>색상은 어떤가요?</b></h6>
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
					<h6><b>핏은 어떤가요?</b></h6>
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

				<div class="mm_inner">
					<h6 class="mm_text-label">
						<b>신체 정보 입력</b><strong class="mm_text-variable">(선택)</strong>
					</h6>
					<div class="mm_flex T=equal">
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
										type="number"
										class="textfield"
										data-text
									>
									<i class="bg_text"></i>
									<span class="text_placeholder">키</span>
								</label>
							</div>
							<span class="text_linked">cm</span>
						</div>
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
										type="number"
										class="textfield"
										data-text
									>
									<i class="bg_text"></i>
									<span class="text_placeholder">몸무게</span>
								</label>
							</div>
							<span class="text_linked">kg</span>
						</div>
						<div class="mm_form_mix-linked">
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
					</div>
					<div class="mm_note">
						<ul>
							<li>해당 정보는 다른 분들의 사이즈 참고용으로만 사용되고 개인식별정보는 공개되지 않습니다</li>
						</ul>
					</div>
					<h6 class="mm_text-label">
						<b>체험단 후기 제목</b>
					</h6>
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
							<span class="text_placeholder">최대 40자 입력</span>
						</label>
					</div>
					<h6 class="mm_text-label">
						<b>리뷰 내용</b>
					</h6>
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
							>
								우선 이번 세일을 통해 싸게사서 넘기뻐요! 엠몬스타티를 작년 여름에 잘입어서 요번에도 구입했는데 흰색이라 그런지 옷에 힘이 없어요 그것 말고는 심플하니괜찮습니다
							</textarea>
							<i class="bg_text"></i>
							<span class="text_placeholder">최소 10자 이상 입력하세요</span>
						</label>
					</div>
					<div class="mm_form-multiple">
						<ul class="mm_flex">
							<li>
								<div class="mm_form-image">
									<button
										type="button"
										class="btn_remove-file"
									>
										<i class="ico_image-remove"></i><b class="mm_ir-blind">파일삭제</b>
									</button>
									<div class="mm_form-image-preview"></div>
									<label>
										<input
											type="file"
											accept="image/*"
											data-file="{ '_imageSize': 'cover' }"
										>
										<b class="mm_form-image-box"><i class="ico_upload"></i><span class="mm_ir-blind">사진 첨부하기</span></b>
									</label>
								</div>
							</li>
						</ul>
						<label class="mm_btn T=line T=variable btn_select-multiple">
							<input
								type="file"
								accept="image/*"
								data-multiple="{ '_max': 10, '_isMax': true, '_isAuto': false }"
								multiple
							>
							<b>한번에 여러장 선택하기</b>
						</label>
					</div>
					<div class="mm_note">
						<ul>
							<li>사진은 jpg, png 파일로 10개까지 업로드 가능합니다.</li>
							<li>첫번째 등록한 사진이 리뷰 대표 이미지로 설정됩니다.</li>
							<li>입력하신 리뷰 위에 등록한 이미지가 노출됩니다.</li>
							<li>동일한 문자 또는 자음/모음은 4회 이상 연속 입력할 수 없습니다.</li>
							<li>소중한 고객님의 개인 정보 보호를 위해 주민번호, 전화번호 등 개 인 정보는 절대 입력하지 않도록 주의해주세요.</li>
							<li>저작권 침해/음란/욕설/비방 글, 개인 정보 유출(전화번호, 주민 번호, 이름, 아이디 등), 판매/광고/홍보성 글을 등록한 경우 임의 로 삭제될 수 있습니다.</li>
						</ul>
					</div>
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
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<style src="./_experience.scss" lang="scss"></style>