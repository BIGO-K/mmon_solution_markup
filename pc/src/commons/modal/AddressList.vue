<script setup lang="ts">
	import None from '@/components/None.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>배송지 관리</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="mm_address-list">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=sm T=dark btn_address-add"
						href="#"
					>
						<b>신규 배송지 등록</b><i class="ico_add"></i>
					</a>
				</div>
				<!-- src/components/None.vue slot에서 노출되는 내용입니다. -->
				<None
					v-if="$route.query.type === 'none'"
					:none-class="'T=sm'"
				>
					등록된 배송지가 없습니다<br> 신규 배송지를 등록하세요
				</None>

				<!-- 배송지 목록 -->
				<div
					v-else
					class="mm_scroller"
				>
					<ul>
						<li>
							<input
								type="radio"
								name="dev_radio-address"
								title="나의자취방"
								data-radio
								checked
							>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><span>나의자취방</span><b class="text_tag">최근배송지</b></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616 부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동) 302동 101호</dd>
								</dl>
							</div>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-address"
								title="직장"
								data-radio
							>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><span>직장</span></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616 부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동) 302동 101호</dd>
								</dl>
							</div>
							<button
								type="button"
								class="btn_remove"
							>
								<b>삭제</b>
							</button>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-address"
								title="본가"
								data-radio
							>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><span>본가</span></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616 부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동) 302동 101호</dd>
								</dl>
							</div>
							<button
								type="button"
								class="btn_remove"
							>
								<b>삭제</b>
							</button>
						</li>
						<li>
							<input
								type="radio"
								name="dev_radio-address"
								title="자취방"
								data-radio
							>
							<div class="mm_address-item">
								<i class="ico_form-radio T=circle"></i>
								<dl>
									<dt><span>자취방</span></dt>
									<dd>홍길동 / 010-1234-1234</dd>
									<dd>06616 부산광역시 강서구 녹산산단382로 14번가길 10~29번지(송정동) 302동 101호</dd>
								</dl>
							</div>
							<button
								type="button"
								class="btn_remove"
							>
								<b>삭제</b>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<!-- 하단 버튼 -->
			<div
				v-if="$route.query.type != 'none'"
				class="mm_foot"
			>
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
					>
						<b>선택하기</b>
					</button>
				</div>
			</div>
		</template>
	</ModalLayout>
</template>