<script setup lang="ts">
	import None from '@/components/None.vue';
	// import Pagination from '@/components/Pagination.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>우편번호 찾기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-postcode">
				<!-- 우편번호 검색 -->
				<div class="m_modal-postcode-search">
					<div class="mm_form-text">
						<button
							type="button"
							class="btn_text-clear"
						>
							<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
						</button>
						<label>
							<input
								type="search"
								class="textfield"
								data-text
							>
							<i class="bg_text"></i>
							<span class="text_placeholder">도로명 또는 지번을 입력하세요</span>
						</label>
					</div>
					<button
						type="button"
						class="btn_search"
					>
						<i class="ico_search T=sm"></i><b class="mm_ir-blind">검색하기</b>
					</button>
				</div>

				<!-- 우편번호 검색 결과 -->
				<h4 class="m_modal-postcode-title">
					<b>주소 검색결과 총 <strong class="mm_text-variable">10</strong>건</b>
				</h4>
				<!-- src/components/None.vue slot에서 노출되는 내용입니다. -->
				<None
					v-if="$route.query.type === 'none'"
					:none-class="'T=sm'"
				>
					검색결과가 없습니다
				</None>
				<ul
					v-else
					class="m_modal-postcode-list"
				>
					<li>
						<a href="#">
							<div class="m_modal-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 삼성로 115길 37-4(삼성동,힐 스테이트5차)</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 삼성동 47-6</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="m_modal-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 역삼1동 737</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="m_modal-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 삼성로 115길 37-4(삼성동, 힐스테이트5차)</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 삼성동 16 삼성동 힐스테이트</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="m_modal-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 삼성동 16-2 삼성동힐스테이트1단지아파트</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="m_modal-postcode-item">
								<dl>
									<dt>도로명</dt>
									<dd>서울특별시 강남구 테헤란로 152 강남파이낸스센터</dd>
								</dl>
								<dl>
									<dt>지번</dt>
									<dd>서울특별시 강남구 역삼1동 737</dd>
								</dl>
								<strong class="text_postcode">06236</strong>
							</div>
						</a>
					</li>
				</ul>
				<!-- <Pagination></Pagination> -->
			</div>
		</template>
	</ModalLayout>
</template>
