<script setup lang="ts">
	defineProps<{
		easypayMethods: PayMethod[]
	}>();
</script>

<template>
	<!-- 네이버 페이 -->
	<div
		v-if="easypayMethods.find(__method => __method.eng_label === 'naverpay')"
		class="mm_syncer-method-naverpay"
		:class="{ 'S=radio-use': easypayMethods.find(__method => __method.eng_label === 'naverpay')?.eng_label === 'naverpay' }"
	>
		<div class="mm_note">
			<ul>
				<li>주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.</li>
				<li>네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는 은행계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수 있는 간편결제 서비스입니다.</li>
				<li>결제 가능한 은행: NH농협, 국민, 신한, 우리, 기업, SC제일, 부산, 경남, 수협, 우체국, 미래에셋대우, 광주, 대구, 전북, 새마을금고, 제주은행, 신협, 하나은행, 케이뱅크, 카카오뱅크, 삼성증권, KDB산업은행,씨티은행, SBI은행, 유안타증권, 유진투자증권</li>
				<li>네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사 별 무이자, 청구할인 혜택을 받을 수 있습니다.</li>
			</ul>
		</div>
	</div>

	<!-- 페이코 -->
	<div
		v-if="easypayMethods.find(__method => __method.eng_label === 'payco')"
		class="mm_syncer-method-payco"
		:class="{ 'S=radio-use': easypayMethods.find(__method => __method.eng_label === 'payco')?.eng_label === 'payco' }"
	>
		<div class="mm_note">
			<ul>
				<li>페이코는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.</li>
				<li>휴대폰과 카드 명의자가 동일해야 결제 가능하며 결제금액 제한은 없습니다.(지원카드 : 모든 국내 신용/체크 카드)</li>
			</ul>
		</div>
	</div>
</template>