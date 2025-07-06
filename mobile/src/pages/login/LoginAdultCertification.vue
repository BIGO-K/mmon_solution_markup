<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>성인인증</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign">
				<div class="m_popup-sign-adult">
					<strong><i class="ico_adult T=lg"></i>성인 본인인증이 필요합니다</strong>
					<p>본 상품은 청소년 유해매체물로서 [정보통신망 이용촉진 및 정보보호 등에 관한 법률] 및 [청소년보호법]에 따라 만 19 세 미만의 청소년이 이용할 수 없습니다.</p>
					<p>개정된 청소년 관련 법령 및 여성가족부 정책에 따라 <strong>1년에 한 번 성인인증</strong> 하도록 변경되었습니다. 오늘 성인인증 하시면 1 년간 별도의 인증 없이 서비스를 이용하실 수 있습니다.</p>
				</div>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=lg T=primary"
						href="#"
						target="_blank"
						title="새 창 열림"
					>
						<b>휴대폰 본인인증</b>
					</a>
					<a
						class="mm_btn T=lg T=line T=primary"
						href="#"
					>
						<b>다음에 인증하기</b>
					</a>
				</div>
			</div>
		</template>
	</LayoutPopup>
</template>