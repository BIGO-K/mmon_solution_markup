<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const typesAPI = ref<CsFaqTypesAPI>();
	const noticeAPI = ref<CsMainNoticeAPI>();

	// api
	Api.getAll([
		{ key: `CS_FAQ_TYPES`, ref: typesAPI },
		{ key: `CS_TOP_NOTICES`, ref: noticeAPI },
	]);

	// 유료기능 사용 검증 및 세팅
	const feature = {
		reward: {
			_is: true,
			// value
		},
		easypay: {
			_is: true,
			// value
		}
	};
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>고객센터</b></h1>
		</template>

		<template #content>
			<div class="m_cs-main">
				<div class="mm_inner">
					<!-- 고객센터 퀵메뉴 -->
					<div class="m_cs-main-menu">
						<ul>
							<li>
								<router-link :to="{ name: 'CsInquiry' }">
									<i class="ico_cs-inquiry"></i><b>1:1 고객 상담</b>
								</router-link>
							</li>
							<li><a href="#"><i class="ico_cs-answer"></i><b>상담/답변확인</b></a></li>
							<li><a href="#"><i class="ico_cs-order"></i><b>주문 배송조회</b></a></li>
							<li><a href="#"><i class="ico_cs-coupon"></i><b>쿠폰/적립금</b></a></li>
						</ul>
					</div>

					<!-- 자주하는 질문 -->
					<div class="m_cs-faq-menu">
						<h3 class="mm_heading">
							<b>FAQ 바로가기</b>
						</h3>
						<ul>
							<li
								v-for="faq in typesAPI?.faq_types"
								:key="faq.id"
							>
								<router-link
									:to="{ name: 'CsFaq', query: { faq: faq.id } }"
								>
									<b>{{ faq.name }}</b>
								</router-link>
							</li>
						</ul>
					</div>
				</div>

				<!-- 공지사항 -->
				<section class="m_cs-main-notice">
					<h3 class="mm_strapline">
						<b>공지사항</b>
					</h3>

					<!-- 내용없음 -->
					<p
						v-if="(noticeAPI?.notices.length ?? NaN) < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>공지사항 내역이 없습니다
					</p>

					<div
						v-else
						class="mm_accordion"
					>
						<ul>
							<li
								v-for="notice in noticeAPI?.notices"
								:key="notice.id"
							>
								<dl
									class="mm_dropdown"
									data-dropdown="{ '_group': 'dev_accrodion-notice' }"
								>
									<dt
										class="btn_dropdown"
										tabindex="0"
										title="펼쳐보기"
									>
										<p>
											<b
												v-if="notice.is_important"
												class="text_important"
											>
												중요
											</b>
											<b>{{ notice.title }}</b>
										</p>
										<i class="ico_dropdown"></i>
									</dt>
									<dd class="mm_dropdown-item">
										<div class="mm_dropdown-item-inner">
											<p>{{ notice.contents }}</p>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<router-link
						v-if="(noticeAPI?.notices.length ?? NaN) > 5"
						class="btn_more"
						:to="{ name: 'CsNotice' }"
					>
						<b>더보기</b><i class="ico_link"></i>
					</router-link>
				</section>

				<!-- 이용안내 -->
				<section class="m_cs-main-info">
					<h3 class="mm_strapline">
						<b>이용안내</b>
					</h3>
					<ul>
						<li v-if="feature.reward._is">
							<router-link
								:to="{ name: 'CsInfoReward' }"
							>
								<b>고객 보상제도<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoOrder' }"
							>
								<b>주문/반품 배송조회<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoReturn' }"
							>
								<b>반품/환불 안내<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoGrade' }"
							>
								<b>회원등급 및 혜택<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoBenefit' }"
							>
								<b>쿠폰/적립금<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li v-if="feature.easypay._is">
							<router-link
								:to="{ name: 'CsInfoPayKakao' }"
							>
								<b>간편결제(카카오페이)<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li v-if="feature.easypay._is">
							<router-link
								:to="{ name: 'CsInfoPayPayco' }"
							>
								<b>간편결제(페이코)<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li v-if="feature.easypay._is">
							<router-link
								:to="{ name: 'CsInfoPayToss' }"
							>
								<b>간편결제(토스페이)<i class="ico_link"></i></b>
							</router-link>
						</li>
						<li v-if="feature.easypay._is">
							<router-link
								:to="{ name: 'CsInfoPayNaver' }"
							>
								<b>간편결제(네이버페이)<i class="ico_link"></i></b>
							</router-link>
						</li>
					</ul>
				</section>
			</div>
		</template>
	</LayoutSub>
</template>