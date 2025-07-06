<script setup lang="ts">
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout :modal-class="'m_modal-pay-password'">
		<template #header>
			<h2><b>간편결제 비밀번호</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<section>
				<h3><b>비밀번호 입력</b></h3>
				<div class="m...password-number">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<input hidden>
				</div>

				<!-- 비밀번호 재설정 -->
				<div class="m...password-find">
					<p>비밀번호를 잊으셨나요?</p>
					<a
						class="btn_password-set"
						href="#"
					>
						<b>비밀번호 재설정</b><i class="ico_link"></i>
					</a>
				</div>
				<!--// 비밀번호 재설정 -->
			</section>

			<!-- 비밀번호 키패드 -->
			<div class="m...password-key">
				<ul>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
					<li>
						<button type="button">
							<b></b>
						</button>
					</li>
				</ul>
				<div class="mm_flex T=equal">
					<button
						type="button"
						class="btn_remove-all"
					>
						<b>전체삭제</b>
					</button>
					<button
						type="button"
						class="btn_remove"
					>
						<i class="ico_remove"></i><b class="mm_ir-blind">지우기</b>
					</button>
				</div>
			</div>
			<!--// 비밀번호 키패드 -->
		</template>
	</ModalLayout>
</template>

<!-- <script>
	(function () {

		// 키패드 숫자 랜덤생성
		var $keypad = mm.find('.m\\.\\.\\.password-key');
		var $keys = mm.find('ul > li', $keypad);
		var numbers = [];

		_.forEach($keys, function (__$el, __index) {

			// 숫자 중복방지
			function makeNumber () {

				var _num = Math.floor(Math.random() * $keys.length);

				if (!numbers.includes(_num)) {
					numbers[__index] = _num;
					mm.find('b', __$el)[0].innerText = (_num > 9) ? null :  _num;
					return;
				}
				makeNumber();

			}
			makeNumber();

		});

		// 키패드 비밀번호 입력 체크
		var $pwBox = mm.find('.m\\.\\.\\.password-number');
		var $pwChecks = mm.find('li', $pwBox);
		var pwNumbers = [];
		var _classOn = 'S=on';

		mm.event.on(mm.find('button', $keypad), 'click', function (__e) {

			__e.preventDefault();

			// 지우기
			if (this.classList.contains('btn_remove')) {
				$pwChecks[pwNumbers.length-1].classList.remove(_classOn);
				pwNumbers.pop();

				return;
			}

			// 전체삭제
			if (this.classList.contains('btn_remove-all')) {
				mm.class.remove($pwChecks, _classOn);
				pwNumbers = [];

				return;
			}

			// 숫자키
			if (this.innerText !== '' && pwNumbers.length < 6) {
				pwNumbers.push(this.innerText);
				$pwChecks[pwNumbers.length-1].classList.add(_classOn);
				if (pwNumbers.length === 6) mm.find('input', $pwBox)[0].value = pwNumbers.join('');
			}

		});

	})();
</script> -->