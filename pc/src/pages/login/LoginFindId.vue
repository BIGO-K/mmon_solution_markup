<script setup lang="ts">
	import { ref } from 'vue';
	import { useConfigStore } from '@/store/config';

	const { configShop } = useConfigStore();

	const findId = ref();

	// const findType = computed(() => {
	// 	return findId;
	// });
</script>

<template>
	<div class="m_sign-find">
		<!-- 탭메뉴 -->
		<div class="mm_tab_menu">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul class="mm_flex T=equal">
				<li>
					<router-link
						class="S=tab-on"
						:to="{ name: 'LoginFindId' }"
						title="선택됨"
					>
						<b>아이디 찾기</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'LoginFindPw' }">
						<b>비밀번호 찾기</b>
					</router-link>
				</li>
			</ul>
		</div>

		<div class="m_sign-find-inner">
			<!-- 찾기 방법 선택 -->
			<div class="mm_radio-list">
				<ul>
					<li>
						<label class="mm_form-radio">
							<input
								v-model="findId"
								type="radio"
								name="dev_radio-sign"
								value="email"
								data-radio="{ 'syncer': '.mm_syncer-sign-email' }"
							>
							<b class="mm_block">
								<i class="ico_email"></i>
								<span class="text_label">이메일로 찾기</span>
							</b>
						</label>
					</li>
					<li>
						<label class="mm_form-radio">
							<input
								v-model="findId"
								type="radio"
								name="dev_radio-sign"
								value="phone"
								data-radio="{ 'syncer': '.mm_syncer-sign-phone' }"
							>
							<b class="mm_block">
								<i class="ico_phone"></i>
								<span class="text_label">휴대폰 번호로 찾기</span>
							</b>
						</label>
					</li>
				</ul>
			</div>

			<!-- 이메일로 찾기 -->
			<div
				class="mm_syncer-sign-email"
				:class="{ 'S=radio-use': findId === 'email' }"
			>
				<h6 class="mm_text-label">
					<b>이름</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">이름을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>이메일</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">이메일을 입력하세요</span>
					</label>
				</div>
			</div>

			<!-- 휴대폰 번호로 찾기 -->
			<div
				class="mm_syncer-sign-phone"
				:class="{ 'S=radio-use': findId === 'phone' }"
			>
				<h6 class="mm_text-label">
					<b>이름</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">이름을 입력하세요</span>
					</label>
				</div>
				<h6 class="mm_text-label">
					<b>휴대폰 번호</b>
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
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호를 입력하세요</span>
					</label>
				</div>
			</div>

			<!-- 하단버튼-->
			<div class="mm_foot">
				<div class="mm_btn_box">
					<button
						type="button"
						class="mm_btn T=primary"
						@click="$router.push({
							name: 'LoginFindIdFin',
							query: { findType: findId }
						})"
					>
						<b>아이디 찾기</b>
					</button>
				</div>
			</div>

			<!-- 유의사항 -->
			<div class="m_sign-find-popover">
				<h6><b>아이디/비밀번호를 찾지 못하셨다면?</b><i class="ico_login-help"></i></h6>
				<div class="m...popover-item">
					<p>이메일과 휴대폰 번호로도 찾지 못하셨다면, 아래 항목을 이메일로 보내주세요</p>
					<div class="m...popover-item-box">
						<p><strong>이름/연락처/생년월일 앞자리</strong></p>
						<p>예) 홍길동/01012345678/96(년생)</p>
					</div>
					<p>
						<a
							class="btn_email"
							:href="`mailto:${configShop.cs_email}`"
							title="새 창 열림"
						>
							<b>{{ configShop.cs_email }}</b>
						</a>
						<span>고객센터 {{ configShop.cs_tel }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>