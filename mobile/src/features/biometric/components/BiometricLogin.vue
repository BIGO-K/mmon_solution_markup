<script setup lang="ts">
	import { ref } from 'vue';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const _classOn = ref(true);
</script>

<template>
	<!-- 생체인증 안내 -->
	<div
		class="m_login-popover"
		:class="{ 'S=popover-on': _classOn }"
	>
		<div class="m_login-popover-dim"></div>
		<div class="m_login-popover-item">
			<LazyloadMUI
				class="mm_bg-contain image_biometric"
				:_src="'/public/images/content/login_biometric.svg'"
			></LazyloadMUI>
			<p><strong class="mm_text-variable">[필수] 생체정보(얼굴, 지문) 수집 및<br> 이용에 동의</strong>하시면 간편하게 로그인이<br> 가능합니다</p>
			<div class="mm_btn_box">
				<button
					type="button"
					class="mm_btn T=lg T=primary"
				>
					<b>동의하고 사용하기</b>
				</button>
			</div>
			<div class="mm_note">
				<ul>
					<li>최초 1회 생체정보 동의로 생체 로그인이 가능합니다</li>
					<li>[마이페이지 &#62; 설정]에서 연동 및 해제 가능합니다</li>
				</ul>
			</div>
			<button
				type="button"
				class="btn_cancel"
				@click="_classOn = !_classOn"
			>
				<b>다음에 할래요</b>
			</button>
			<button
				type="button"
				class="btn_close"
				@click="_classOn = !_classOn"
			>
				<i class="ico_popover-close"></i><b class="mm_ir-blind">닫기</b>
			</button>
		</div>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
// 생체인증 로그인 사용 팝업
	function loginFaceIdUse() {

		var $loginPopover = mm.find('.m_login-popover')[0];
		if (!$loginPopover || !mm.is.mobile('app')) return;

		var _classOn = 'S=popover-on';
		$loginPopover.classList.add(_classOn);

		// 닫기
		mm.event.on(mm.find('.btn_close, .m_login-popover-dim, .btn_cancel', $loginPopover), 'click', function() {

			$loginPopover.classList.remove(_classOn);

		});

	}
</script> -->

<style lang="scss">
	@use '../../../assets/scss/common/helper/function' as *;
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	/** 생체인증 사용 */
	.m_login-popover {
		display: none;
		position: fixed;
		z-index: -1;
		inset: 0;
		opacity: 0;
		transition: opacity const.$time_fast;

		#{escape('.S=app')} & {
			display: block;
		}

		// 팝업열기
		&#{escape('.S=popover-on')} {
			display: block;
			z-index: const.$zindex_popup;
			opacity: 1;

			.m_login-popover-item {
				transform: translateY(0);
			}
		}

		&-dim {
			width: 100%;
			height: 100%;
			background-color: rgba(#000, 0.6);
		}

		&-item {
			position: absolute;
			bottom: 0;
			left: 0;
			padding: 52px 34px 18px;
			width: 100%;
			border-radius: 17px 17px 0 0;
			background-color: #fff;
			box-shadow: 0 -2px 6px 0 rgba(#000, 0.14);
			text-align: center;
			transform: translateY(100%);
			transition: transform const.$time_fast;

			.image_biometric {
				display: block;
				margin: 0 auto;
				width: 128px;
				height: 67px;
			}

			p {
				display: inline-block;
				margin: 20px 0 0 -6.49350%;
				@include mixin.font('1.7rem/2.4rem' left);
			}

			.mm_btn_box {
				margin-top: 16px;
			}

			.mm_note {
				margin-top: 32px;
				padding: 7px 20px 7px 13px;
				border: 1px solid #dcdcdc;
				border-radius: 3px;
				background-color: #fafafa;
				@include mixin.font(#4a4a4a '1.2rem/1.8rem' left);
			}

			.btn_close {
				position: absolute;
				top: 9px;
				right: 5px;
				padding: 15px;

				.ico_popover-close::before {
					width: 17px;
					height: 17px;
					background-color: #4a4a4a;
				}
			}

			.btn_cancel {
				margin-top: 27px;
				padding: 10px;
				@include mixin.font(#888 '1.3rem');

				b {
					position: relative;

					&::after {
						position: absolute;
						right: 0;
						bottom: -1px;
						left: 0;
						border-bottom: 1px solid #888;
						content: '';
					}
				}
			}
		}
	}
</style>