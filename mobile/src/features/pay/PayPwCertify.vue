<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>본인인증</b></h1>
		</template>

		<template #content>
			<div class="mm_inner m_popup-pay-certify">
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
							type="tel"
							class="textfield"
							data-text
						>
						<i class="bg_text"></i>
						<span class="text_placeholder">휴대폰 번호(숫자만 입력하세요)</span>
					</label>
				</div>
				<button
					type="button"
					class="mm_btn T=line T=dark"
				>
					<b>인증번호 발송</b>
				</button>
				<h6 class="mm_text-label">
					<b>인증번호</b>
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
							type="number"
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
				<!-- (D) 결제 비밀번호 최초 등록시 노출합니다. -->
				<!-- 약관동의 -->
				<div class="mm_check_box">
					<div class="mm_check-list">
						<ul>
							<li>
								<label class="mm_form-check">
									<input
										type="checkbox"
										data-check="{ '_group': 'agree_check-certify' }"
									>
									<b class="mm_block">
										<i class="ico_form-check"></i>
										<span class="text_label"><strong>(필수)</strong> 엠몬스타 간편결제 서비스 이용동의</span>
									</b>
								</label>
							</li>
							<li>
								<div class="mm_flex">
									<label class="mm_form-check">
										<input
											type="checkbox"
											data-check="{ '_group': 'agree_check-certify' }"
										>
										<b class="mm_block">
											<i class="ico_form-check"></i>
											<span class="text_label"><strong>(필수)</strong>개인정보 수집 및 이용동의</span>
										</b>
									</label>
									<button
										type="button"
										class="btn_detail"
										data-switch="{ '_isParent': true }"
										title="선택됨"
									>
										<b>자세히</b>
									</button>
								</div>
								<table>
									<tbody>
										<tr>
											<th scope="row">
												<b>목적</b>
											</th>
											<td>엠몬스타 간편결제 이용 시</td>
										</tr>
										<tr>
											<th scope="row">
												<b>항목</b>
											</th>
											<td>휴대전화번호, 결제비밀번호</td>
										</tr>
										<tr>
											<th scope="row">
												<b>보유 및<br> 이용기간</b>
											</th>
											<td>
												<b>수집목적 달성시까지 이용</b>
												<p>단, 관계 법령의 규정에 의하여 일정 기간 보유하여야 할 필요가 있는 경우 해당 기간동안 보관</p>
												<p>자세한 내용은 사이트 하단 ‘개인 정보 처리방침’ 참고 바랍니다</p>
											</td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check="{ '_type': 'check_all', '_group': 'agree_check-certify' }"
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">전체 동의</span>
						</b>
					</label>
				</div>

				<!-- 하단버튼-->
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=primary"
						>
							<b>인증 완료</b>
						</button>
					</div>
				</div>

				<!-- (D) 결제 비밀번호 등록 후 재인증시 노출합니다. -->
				<!-- 유의사항 -->
				<div class="mm_note">
					<ul>
						<li>인증받은 휴대전화번호로 회원정보가 자동 변경됩니다.</li>
					</ul>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>

<style lang="scss">
	@use '../../assets/scss/common/helper/function' as *;
	@use '../../assets/scss/common/helper/mixin';
	@use '../../assets/scss/common/setting/const';
	@use '../../assets/scss/style/setting/var';

	.m_popup-pay-certify {
		padding-top: 20px;

		.mm_check_box {
			position: relative;
			margin-top: 20px;
			padding-top: 26px;

			&::before {
				position: absolute;
				top: 0;
				right: -14px;
				left: -14px;
				border-top: 1px solid #e6e6e6;
				border-bottom: 5px solid #eee;
				content: '';
			}
		}

		// 약관자세히보기
		table {
			display: none;
			margin-top: 12px;
			border: 1px solid #e6e6e6;

			th,
			td {
				border-top: 1px solid #e6e6e6;
				@include mixin.font(#5c5c5c '1.3rem/1.9rem' left);
			}

			th {
				padding: 12px 10px 11px 8px;
				width: 89px;
				border-right: 1px solid #e6e6e6;
				background-color: #f5f5f5;
			}

			td {
				padding: 10px 10px 9px 12px;
				background-color: #fff;

				p {
					position: relative;
					padding-left: 8px;

					&::before {
						position: absolute;
						left: 0;
						content: '-';
					}
				}
			}
		}

		#{escape('.mm_flex.S=switch-on')} {
			+ table {
				display: table;
			}
		}
	}
</style>