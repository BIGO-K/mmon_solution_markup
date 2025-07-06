<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>간편결제 비밀번호</b></h1>
		</template>

		<template #content>
			<div class="m_popup-pay-password S=on">
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
			</div>
		</template>
	</LayoutPopup>
</template>

<!-- <script>
	(function() {

		// 키패드 숫자 랜덤생성
		var $keypad = mm.find('.m\\.\\.\\.password-key');
		var $keys = mm.find('ul > li', $keypad);
		var numbers = [];

		_.forEach($keys, function(__$el, __index) {

			// 숫자 중복방지
			function makeNumber() {

				var _num = Math.floor(Math.random() * $keys.length);

				if (!numbers.includes(_num)) {
					numbers[__index] = _num;
					mm.find('b', __$el)[0].innerText = (_num > 9) ? null : _num;

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

		mm.event.on(mm.find('button', $keypad), 'click', function(__e) {

			__e.preventDefault();

			// 지우기
			if (this.classList.contains('btn_remove')) {
				$pwChecks[pwNumbers.length - 1].classList.remove(_classOn);
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
				$pwChecks[pwNumbers.length - 1].classList.add(_classOn);
				if (pwNumbers.length === 6) mm.find('input', $pwBox)[0].value = pwNumbers.join('');
			}

		});

	})();
</script> -->

<style lang="scss">
	@use '../../assets/scss/common/helper/function' as *;
	@use '../../assets/scss/common/helper/mixin';
	@use '../../assets/scss/common/setting/const';
	@use '../../assets/scss/style/setting/var';

	.m_popup-pay-password {
		section {
			position: absolute;
			top: 50%;
			right: 0;
			left: 0;
			margin-top: -29px;
			padding-bottom: 235px;
			transform: translateY(-50%);

			h3 {
				@include mixin.font('2rem' center);
			}
		}

		#{escape('.m...password-number')} {
			margin-top: 27px;

			ul {
				@include mixin.font('0' center);

				li {
					display: inline-block;
					margin-left: 16px;
					width: 17px;
					height: 17px;
					border-radius: 100%;
					background-color: #e6e6e6;

					&#{escape('.S=on')} {
						background-color: var.$color_sub;
					}
				}
			}
		}

		// 비밀번호 재설정
		#{escape('.m...password-find')} {
			position: absolute;
			right: 0;
			left: 0;
			margin-top: 75px;
			text-align: center;

			p {
				@include mixin.font(#4a4a4a '1.5rem');
			}

			.btn_password-set {
				padding: 13px 10px;
				@include mixin.font(#767676 '1.4rem');

				.ico_link {
					margin: 2px 0 0 7px;

					&::before {
						background-color: #767676;
					}
				}
			}
		}

		// 키패드
		#{escape('.m...password-key')} {
			overflow: hidden;
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: #2b2b2b;

			ul {
				li {
					float: left;
					width: 25%;
					border: 1px solid #3d3d3d;
					border-width: 0 1px 1px 0;

					&:nth-child(4n) {
						border-right: 0;
					}

					button {
						font-size: 2rem;
					}
				}
			}

			button {
				width: 100%;
				height: 58px;
				@include mixin.font(#fff '1.4rem/5.9rem' center);

				&.btn_remove {
					position: relative;

					&::before {
						position: absolute;
						top: 0;
						bottom: 0;
						left: -1px;
						border-left: 1px solid #3d3d3d;
						content: '';
					}

					.ico_remove {
						position: relative;
						margin: 19px 0 0 7px;
						padding: 0 6px;
						height: 20px;
						border-radius: 0 2px 2px 0;
						background-color: #5c5c5c;

						&::before {
							margin-top: 6px;
							width: 9px;
							height: 9px;
						}

						&::after {
							position: absolute;
							top: 0;
							left: -9px;
							@include mixin.triangle(#5c5c5c, left, 10px, 9px);

							content: '';
						}
					}
				}
			}
		}
	}
</style>