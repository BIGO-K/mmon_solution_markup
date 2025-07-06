<script setup lang="ts">
	import { ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';

	const tabIndex = ref(0);
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>주문/반품 배송조회</b></h1>
		</template>

		<template #content>
			<div
				class="mm_tab m_popup-cs"
				data-tab
			>
				<div class="mm_tab_menu">
					<ul class="mm_flex T=equal">
						<li>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 0 }"
								:title="tabIndex === 0 ? '선택됨' : ''"
								@click.prevent="tabIndex = 0"
							>
								<b>주문 배송조회</b>
							</a>
						</li>
						<li>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 1 }"
								:title="tabIndex === 1 ? '선택됨' : ''"
								@click.prevent="tabIndex = 1"
							>
								<b>반품 배송조회</b>
							</a>
						</li>
					</ul>
				</div>

				<!-- 주문 배송조회 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 0 }"
				>
					<div class="mm_accordion">
						<ul>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-order' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>모바일</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<div class="m_popup-cs-step">
												<ol>
													<li>
														<span class="text_step">STEP 1</span>
														<figure>
															<figcaption>모바일 로그인 후 퀵메뉴의 <strong class="text_highlight">[<span>배송조회</span>]</strong> 버튼을 터치하세요.</figcaption>
															<i class="image_guide">
																<LazyloadMUI
																	:_tag="'img'"
																	:_src="'/public/images/content/cs_info_order_mobile_1.jpg'"
																></LazyloadMUI>
															</i>
														</figure>
													</li>
													<li>
														<span class="text_step">STEP 2</span>
														<figure>
															<figcaption>해당 주문의 <strong class="text_highlight">[<span>주문상세</span>]</strong> 버튼을 클릭하세요<br><strong class="text_highlight">[<span>배송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인이 가능합니다.</figcaption>
															<i class="image_guide">
																<LazyloadMUI
																	:_tag="'img'"
																	:_src="'/public/images/content/cs_info_order_mobile_2.jpg'"
																></LazyloadMUI>
															</i>
															<strong class="btn_cs-delivery"><b>배송조회</b><i class="ico_click"></i></strong>
														</figure>
													</li>
												</ol>
											</div>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-order' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>PC</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<div class="m_popup-cs-step">
												<figure>
													<figcaption><strong class="text_highlight"><span>'마이페이지 &#62; 주문 관리 &#62; 주문 리스트'</span></strong>에서 배송 출발된 주문의 <strong class="text_highlight">[<span>배송조회</span>]</strong> 버튼을 클릭하시면 상품의 위치를 확인할 수 있는 팝업창이 생성됩니다.</figcaption>
													<i class="image_guide">
														<LazyloadMUI
															:_tag="'img'"
															:_src="'/public/images/content/cs_info_order_pc.jpg'"
														></LazyloadMUI>
													</i>
												</figure>
											</div>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<div class="mm_inner">
						<div class="mm_foot">
							<div class="mm_btn_box">
								<a
									class="mm_btn T=primary"
									href="#"
								>
									<b>주문 배송조회 보기</b>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- 반품 배송조회 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 1 }"
				>
					<div class="mm_accordion">
						<ul>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-return' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>모바일</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<div class="m_popup-cs-step">
												<figure>
													<figcaption><strong class="text_highlight"><span>‘마이페이지 &#62; 주문관리 &#62; 반품 주문 리스트’</span></strong>에서 반품 상태인 주문의 <strong class="text_highlight">[<span>반송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인 팝업창이 노출됩니다.</figcaption>
													<i class="image_guide">
														<LazyloadMUI
															:_tag="'img'"
															:_src="'/public/images/content/cs_info_return_mobile.jpg'"
														></LazyloadMUI>
													</i>
													<strong class="btn_cs-delivery"><b>반송조회</b><i class="ico_click"></i></strong>
												</figure>
											</div>
										</div>
									</dd>
								</dl>
							</li>
							<li>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-return' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p><b>PC</b></p><i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<div class="m_popup-cs-step">
												<figure>
													<figcaption><strong class="text_highlight"><span>‘마이페이지 &#62; 주문관리 &#62; 반품 주문 리스트’</span></strong>에서 반품 상태인 주문의 <strong class="text_highlight">[<span>반송조회</span>]</strong> 버튼을 클릭하시면 상품 위치 확인 팝업창이 노출됩니다.</figcaption>
													<i class="image_guide">
														<LazyloadMUI
															:_tag="'img'"
															:_src="'/public/images/content/cs_info_return_pc.jpg'"
														></LazyloadMUI>
													</i>
												</figure>
											</div>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<div class="mm_inner">
						<div class="mm_foot">
							<div class="mm_btn_box">
								<a
									class="mm_btn T=primary"
									href="#"
								>
									<b>반품 배송조회 보기</b>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>