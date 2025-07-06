<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute } from 'vue-router';
	import Api from '@markup/api';
	import { useConfigStore } from '@/store/config';

	const { configPoint } = useConfigStore();

	const csFaqTypesAPI = ref<CsFaqTypesAPI>();
	Api.getAll([
		{ key: `CS_FAQ_TYPES`, ref: csFaqTypesAPI },
	]);

	const route = useRoute();
	const _faqId = computed<number>(() => Number(route.query.faq));
</script>

<template>
	<div class="G:lnb">
		<!-- 서브상단 -->
		<div class="mm_page-content-head">
			<h3 class="mm_title">
				<b>고객센터</b>
			</h3>
		</div>

		<!-- lnb -->
		<nav class="mm_lnb">
			<h2 class="mm_lnb-title">
				<b>고객센터</b>
			</h2>
			<!-- (D) 현재페이지의 a요소에 S=lnb-on 클래스와 '선택됨' 타이틀을 넣어줍니다 -->
			<ul>
				<li>
					<router-link :to="{ name: 'CsInquiry' }">
						<h6><b>1:1 문의</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:to="{ name: 'CsInquiry' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInquiry' }"
								:title="$route.name === 'CsInquiry' ? '선택됨' : ''"
							>
								<b>1:1 고객상담</b>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'MyInquiry' }">
								<b>문의 관리</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<a href="#"><h6><b>자주하는 질문</b></h6></a>
					<ul>
						<li
							v-for="faq in csFaqTypesAPI?.faq_types"
							:key="faq.id"
						>
							<router-link
								:class="{ 'S=lnb-on': _faqId === faq.id }"
								:title="_faqId === faq.id ? '선택됨' : ''"
								:to="{ name: 'CsMain', query: { faq: faq.id } }"
							>
								<b>{{ faq.name }}</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link :to="{ name:'CsInfoDelivery' }">
						<h6><b>이용안내</b></h6>
					</router-link>
					<ul>
						<li>
							<router-link
								:to="{ name: 'CsInfoReward' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoReward' }"
								:title="$route.name === 'CsInfoReward' ? '선택됨' : ''"
							>
								<b>고객 보상제도</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoDelivery' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoDelivery' }"
								:title="$route.name === 'CsInfoDelivery' ? '선택됨' : ''"
							>
								<b>주문/반품 배송조회</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoReturn' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoReturn' }"
								:title="$route.name === 'CsInfoReturn' ? '선택됨' : ''"
							>
								<b>반품/환불 안내</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoBenefit' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoBenefit' }"
								:title="$route.name === 'CsInfoBenefit' ? '선택됨' : ''"
							>
								<b>회원등급 및 혜택</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoCoupon' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoCoupon' }"
								:title="$route.name === 'CsInfoCoupon' ? '선택됨' : ''"
							>
								<b>쿠폰/{{ configPoint.label_name }}</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoPayKakao' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoPayKakao' }"
								:title="$route.name === 'CsInfoPayKakao' ? '선택됨' : ''"
							>
								<b>간편결제(카카오페이)</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoPayNaver' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoPayNaver' }"
								:title="$route.name === 'CsInfoPayNaver' ? '선택됨' : ''"
							>
								<b>간편결제(네이버페이)</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoPayPayco' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoPayPayco' }"
								:title="$route.name === 'CsInfoPayPayco' ? '선택됨' : ''"
							>
								<b>간편결제(페이코)</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'CsInfoPayToss' }"
								:class="{ 'S=lnb-on': $route.name === 'CsInfoPayToss' }"
								:title="$route.name === 'CsInfoPayToss' ? '선택됨' : ''"
							>
								<b>간편결제(토스페이)</b>
							</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link
						:to="{ name: 'CsNotice' }"
						:class="{ 'S=lnb-on': $route.name === 'CsNotice' }"
						:title="$route.name === 'CsNotice' ? '선택됨' : ''"
					>
						<h6><b>공지사항</b></h6>
					</router-link>
				</li>
			</ul>
		</nav>

		<!-- 본문 내용 -->
		<div class="mm_page-content-body">
			<router-view></router-view>
		</div>
	</div>
</template>