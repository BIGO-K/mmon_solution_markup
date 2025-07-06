<script setup lang="ts">
	import { ref } from 'vue';
	import { useConfigStore } from '@/store/config';

	const { configShop } = useConfigStore();

	const findPw = ref();
	const _classOn = ref(false);
</script>

<template>
	<!-- 아이디/비밀번호 찾기 방식 -->
	<div class="mm_radio-list">
		<ul>
			<li>
				<label class="mm_form-radio">
					<input
						v-model="findPw"
						type="radio"
						name="dev_radio-find"
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
						v-model="findPw"
						type="radio"
						name="dev_radio-find"
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
		:class="{ 'S=radio-use': findPw === 'email' }"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">아이디를 입력하세요</span>
			</label>
		</div>
		<h5 class="mm_text-label">
			<b>이름</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">이름을 입력하세요</span>
			</label>
		</div>
		<h5 class="mm_text-label">
			<b>이메일</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">이메일을 입력하세요</span>
			</label>
		</div>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">10분 이내로 입력하세요</span>
			</label>
		</div>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 휴대폰 번호로 찾기 -->
	<div
		class="mm_syncer-sign-phone"
		:class="{ 'S=radio-use': findPw === 'phone' }"
	>
		<h5 class="mm_text-label">
			<b>아이디</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">아이디를 입력하세요</span>
			</label>
		</div>
		<h5 class="mm_text-label">
			<b>이름</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">이름을 입력하세요</span>
			</label>
		</div>
		<h5 class="mm_text-label">
			<b>휴대폰 번호</b>
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
					type="tel"
					class="textfield"
					data-text
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">휴대폰 번호를 입력하세요</span>
			</label>
		</div>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 발송</b>
		</button>
		<h5 class="mm_text-label">
			<b>인증번호</b>
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
				>
				<i class="bg_text"></i>
				<span class="text_placeholder">10분 이내로 입력하세요</span>
			</label>
		</div>
		<button
			type="button"
			class="mm_btn T=line T=dark"
		>
			<b>인증번호 확인</b>
		</button>
	</div>

	<!-- 하단버튼 -->
	<div class="mm_foot">
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=primary"
				@click="$router.push({ name: 'LoginFindPwResult' })"
			>
				<b>비밀번호 찾기</b>
			</button>
		</div>
	</div>

	<!-- 유의사항 -->
	<div class="m...find-popover">
		<h6><b>아이디/비밀번호를 찾지 못하셨나요?</b></h6>
		<button
			type="button"
			class="btn_help"
			:class="{ 'S=switch-on': _classOn }"
			data-switch
			:title="_classOn? '선택됨' : ''"
			@click="_classOn = !_classOn"
		>
			<i class="ico_login-help"></i>
		</button>
		<div class="m...find-popover-item">
			<p>이메일과 휴대폰 번호로도 찾지 못하셨다면,<br> 아래 항목을 이메일로 보내주세요</p>
			<div>
				<p><strong>이름/연락처/생년월일 앞자리</strong></p>
				<p>예) 홍길동/01012345678/96(년생)</p>
			</div>
			<a
				class="btn_email"
				:href="`mailto:${configShop.cs_email}`"
				title="새 창 열림"
			>
				<b>{{ configShop.cs_email }}</b>
			</a>
			<p>고객센터 {{ configShop.cs_tel }}</p>
			<button
				type="button"
				class="btn_close"
				onclick="mm.switch.off('.btn_help');"
			>
				<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
			</button>
		</div>
	</div>
</template>