<script setup lang="ts">
	import { ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const tabIndex = ref(0);
</script>

<template>
	<div class="m_cs-info">
		<h3 class="mm_heading">
			<b>주문/반품 배송조회</b>
		</h3>
		<div
			class="mm_tab"
			data-tab
		>
			<!-- 탭메뉴 -->
			<div
				class="mm_tab"
				data-tab
			>
				<div class="mm_tab_menu T=square">
					<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀이 추가됩니다. -->
					<ul>
						<li>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 0 }"
								:title="tabIndex === 0 ? '선택됨' : ''"
								@click="tabIndex = 0"
							>
								<b>주문 배송조회</b>
							</a>
						</li>
						<li>
							<a
								class="btn_tab"
								:class="{ 'S=tab-on': tabIndex === 1 }"
								:title="tabIndex === 1 ? '선택됨' : ''"
								@click="tabIndex = 1"
							>
								<b>반품 배송조회</b>
							</a>
						</li>
					</ul>
				</div>
				<!-- <TabMenu :tab-name="csInfoTabMenu"></TabMenu> -->

				<!-- 주문 배송조회 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 0 }"
				>
					<div class="m_cs-info-delivery">
						<h5 class="m_cs-info-strapline">
							<b>온라인 (PC)</b>
						</h5>
						<i class="image_guide">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'../image/content/cs_info_order_pc.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
						<p><strong>'마이페이지 &#62; 주문 관리 &#62; 주문 리스트'</strong>에서 배송 출발된 주문의 <strong>[배송조회]</strong> 버튼을 클릭하시면 상품의 위치를 확인할 수 있는 팝업창이 생성됩니다.</p>
						<h5 class="m_cs-info-strapline">
							<b>모바일</b>
						</h5>
						<ol>
							<li>
								<i class="image_guide">
									<LazyloadMUI
										:_tag="'img'"
										:_src="'../image/content/cs_info_order_mo_01.jpg'"
										alt=""
									></LazyloadMUI>
								</i>
								<p>모바일 로그인 후 퀵메뉴의 <strong>[배송조회]</strong> 버튼을 터치하세요.</p>
							</li>
							<li>
								<i class="image_guide">
									<LazyloadMUI
										:_tag="'img'"
										:_src="'../image/content/cs_info_order_mo_02.jpg'"
										alt=""
									></LazyloadMUI>
								</i>
								<p>해당 주문의 <strong>[주문상세]</strong> 버튼을 클릭하세요<br><strong>[배송조회]</strong> 버튼을 클릭하시면 상품 위치 확인이 가능합니다.</p>
								<strong class="btn_cs-delivery"><b>배송조회</b></strong>
							</li>
						</ol>
						<div class="mm_btn_box">
							<router-link
								class="mm_btn btn_link"
								:to="{ name: 'MyOrder' }"
							>
								<b>주문 배송조회 바로가기</b>
								<i class="ico_link"></i>
							</router-link>
						</div>
					</div>
				</div>

				<!-- 반품 배송조회 -->
				<div
					class="mm_tab-item"
					:class="{ 'S=tab-on': tabIndex === 1 }"
				>
					<div class="m_cs-info-delivery">
						<h5 class="m_cs-info-strapline">
							<b>온라인 (PC)</b><small>반품 배송 조회는 온라인에서만 가능하며 반품완료된 건은 배송 조회 서비스를 제공하지 않습니다.</small>
						</h5>
						<i class="image_guide">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'../image/content/cs_info_return_pc.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
						<p><strong>마이페이지 &#62; 주문 관리 &#62; 반품 주문 리스트</strong>에서 반품 상태인 주문의 <strong>[반송조회]</strong> 버튼을 클릭하시면 상품의 위치를 확인할 수 있는 팝업창이 생성됩니다.</p>
						<div class="mm_btn_box">
							<router-link
								class="mm_btn btn_link"
								:to="{ name: 'MyOrder', params: { tab: 'return' } }"
							>
								<b>반품 배송조회 바로가기</b>
								<i class="ico_link"></i>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>