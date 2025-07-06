<script setup lang="ts">

</script>

<template>
	<!-- 개인화 상품 리뷰 - 상품 평가 -->
	<div class="mm_flex T=equal m...review-value">
		<!-- (D) 가장 비율이 높은 평가 항목의 'li'요소에 S=value-high 클래스를 추가합니다 -->
		<!-- (D) 'm...review-value-progress > i'의 width, title 값에 상품 평가의 비율값을 추가합니다. -->
		<section>
			<h6><b>사이즈</b><strong>정사이즈예요</strong><span>0%<small>(00,000명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">예상보다 커요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 12%;"
							title="12%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">정사이즈예요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 75%;"
							title="75%"
						></i>
					</b>
					<span>119명</span>
				</li>
				<li>
					<span class="text_label">예상보다 작아요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 50%;"
							title="50%"
						></i>
					</b>
					<span>80명</span>
				</li>
			</ul>
		</section>
		<section>
			<h6><b>색상</b><strong>화면과 같아요</strong><span>0%<small>(113명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">화면보다 어두워요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 12%;"
							title="12%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">화면과 같아요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 75%;"
							title="75%"
						></i>
					</b>
					<span>119명</span>
				</li>
				<li>
					<span class="text_label">화면보다 밝아요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 50%;"
							title="50%"
						></i>
					</b>
					<span>80명</span>
				</li>
			</ul>
		</section>
		<section>
			<h6><b>두께감</b><strong>보통이에요</strong><span>75%<small>(113명)</small></span></h6>
			<ul>
				<li>
					<span class="text_label">두꺼워요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 12%;"
							title="12%"
						></i>
					</b>
					<span>19명</span>
				</li>
				<li class="S=value-high">
					<span class="text_label">보통이에요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 75%;"
							title="75%"
						></i>
					</b>
					<span>119명</span>
				</li>
				<li>
					<span class="text_label">얇아요</span>
					<b class="m...review-value-progress">
						<i
							style="width: 50%;"
							title="50%"
						></i>
					</b>
					<span>80명</span>
				</li>
			</ul>
		</section>
		<!-- (D) 슈즈 상품인 두께감 항목 대신 발볼, 착화감 항목이 노출됩니다. -->
		<!-- <section>
                    <h6><b>발볼</b><strong>보통이에요</strong><span>75%<small>(113명)</small></span></h6>
                    <ul>
                        <li>
                            <span class="text_label">넓어요</span>
                            <b class="m...review-value-progress"><i style="width:12%;" title="12%"></i></b>
                            <span>19명</span>
                        </li>
                        <li class="S=value-high">
                            <span class="text_label">보통이에요</span>
                            <b class="m...review-value-progress"><i style="width:75%;" title="75%"></i></b>
                            <span>119명</span>
                        </li>
                        <li>
                            <span class="text_label">좁아요</span>
                            <b class="m...review-value-progress"><i style="width:50%;" title="50%"></i></b>
                            <span>80명</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <h6><b>착화감</b><strong>적당해요</strong><span>75%<small>(113명)</small></span></h6>
                    <ul>
                        <li>
                            <span class="text_label">편안해요</span>
                            <b class="m...review-value-progress"><i style="width:12%;" title="12%"></i></b>
                            <span>19명</span>
                        </li>
                        <li class="S=value-high">
                            <span class="text_label">적당해요</span>
                            <b class="m...review-value-progress"><i style="width:75%;" title="75%"></i></b>
                            <span>119명</span>
                        </li>
                        <li>
                            <span class="text_label">딱딱해요</span>
                            <b class="m...review-value-progress"><i style="width:50%;" title="50%"></i></b>
                            <span>80명</span>
                        </li>
                    </ul>
                </section> -->
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/function';
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/common/setting/const';
	@use '../../../assets/scss/style/setting/var';

	/** 상품상세 */
	.m_prodetail-tab-review {
		// 상품 평가
		#{function.escape('.m...review-value')} {
			margin-top: 47px;
			padding: 0 40px 7px;

			&#{function.escape('.T=value-shoes')} {
				section {
					&:nth-child(n+2) {
						margin-left: 53px;
					}

					h6 {
						strong {
							padding-right: 10px;
						}

						> span {
							padding-left: 12px;
						}
					}

					ul {
						li {
							padding-right: 60px;
						}
					}
				}
			}

			section {
				width: 329px;

				&:nth-child(n+2) {
					margin-left: 71px;
				}

				h6 {
					overflow: hidden;
					position: relative;
					@include mixin.font('1.4rem/2.2rem');

					> * {
						background-color: #fff;
					}

					&::before {
						position: absolute;
						z-index: -1;
						top: 50%;
						right: 0;
						left: 0;
						margin-top: -1px;
						height: 1px;
						background-color: #e6e6e6;
						background-image: linear-gradient(90deg, #e6e6e6 4px, #fff 2px);
						@include mixin.background('/6px 1px' repeat-x);

						content: '';
					}

					b {
						width: 62px;
						height: 22px;
						border: 1px solid #101010;
						border-radius: 22px;
						@include mixin.font(const.$color_text_base '1.3rem' center);
					}

					strong {
						display: inline-block;
						padding: 0 20px 0 8px;
						font-variation-settings: 'wght' 600;
					}

					span {
						float: right;
						padding: 0 0 0 18px;
						vertical-align: 0;
						@include mixin.font('1.5rem/2.2rem');

						small {
							margin-left: 4px;
							vertical-align: 1px;
							@include mixin.font(#767676 '1.3rem');
						}
					}
				}

				ul {
					padding-top: 13px;

					li {
						position: relative;
						padding: 0 70px 0 120px;
						@include mixin.font(#4a4a4a '1.3rem/2.5rem');

						> span {
							position: absolute;
							top: 0;

							&:not(.text_label) {
								right: 2px;
								color: #767676;
							}
						}

						.text_label {
							position: absolute;
							top: 0;
							left: 2px;
						}

						#{function.escape('.m...review-value-progress')} {
							overflow: hidden;
							position: relative;
							margin-top: 9px;
							width: 100%;
							height: 7px;
							border-radius: 6px;
							background-color: #e6e6e6;

							&::before {
								position: absolute;
								inset: 0;
								border: 1px solid #dcdcdc;
								content: '';
							}

							> i {
								position: absolute;
								top: 0;
								bottom: 0;
								left: 0;
								border-radius: 6px;
								background-color: #aeaeae;
								content: '';
							}
						}

						&#{function.escape('.S=value-high')} {
							> span {
								color: const.$color_text_base;

								&.text_label {
									font-variation-settings: 'wght' 600;
								}
							}

							#{function.escape('.m...review-value-progress')} {
								i {
									background-color: #101010;
								}
							}
						}
					}
				}
			}
		}

		// 리뷰 항목
		#{function.escape('.m...review-item')} {
			.mm_satisfy {
				margin-top: 15px;

				dl {
					dt {
						border-color: #d5d5d5;
						background-color: #fafafa;
						color: #3d3d3d;
					}
				}

				+ .text_review {
					margin-top: 13px;
				}
			}

			.text_info {
				span {
					position: relative;
					margin-left: 18px;
					padding-left: 18px;

					&::before {
						position: absolute;
						top: 50%;
						left: 0;
						width: 1px;
						height: 8px;
						border-left: 1px solid #dcdcdc;
						transform: translateY(-50%);
						content: '';
					}
				}
			}
		}
	}
</style>