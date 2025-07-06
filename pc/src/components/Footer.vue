<script setup lang="ts">
	import { useConfigStore } from '@/store/config';

	const { configShop } = useConfigStore();
</script>

<template>
	<!-- 푸터 -->
	<div
		id="mm_footer"
		class="mm_footer T=fa"
	>
		<!-- 푸터 - 메뉴 -->
		<div class="mm_footer-menu">
			<div class="mm_inner">
				<div class="mm_lside">
					<ul class="mm_flex">
						<li>
							<router-link :to="{ name: 'PolicyPrivacy' }">
								<strong>개인정보처리방침</strong>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'PolicyService' }">
								<b>이용약관</b>
							</router-link>
						</li>
						<li><a href="#"><b>사업자정보확인</b></a></li>
						<li><a href="#"><b>구매안전서비스 가입사실확인</b></a></li>
					</ul>
				</div>
				<div class="mm_rside">
					<ul class="mm_flex">
						<li><a href="#"><b>회사소개</b></a></li>
						<li>
							<router-link :to="{ name: 'CsMain' }">
								<b>고객센터</b>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'CsNotice' }">
								<b>공지사항</b>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 푸터 - 정보 -->
		<div class="mm_footer-info">
			<div class="mm_inner">
				<h6><b class="mm_ir-blind">M.Mon solution basic</b></h6>
				<address>
					<strong class="text_company">{{ configShop.name }}</strong>
					대표: {{ configShop.ceo_name }}<br>
					{{ configShop.base_address }}<br>{{ configShop.detail_address }}<br>
					통신판매업 신고번호: {{ configShop.sell_account }}<br>
					사업자등록번호: {{ configShop.business_number }}
					<a
						class="btn_footer-info"
						:href="configShop.business_service_info_url"
						target="_blank"
						title="새 창 열림"
					>
						<b>사업자 정보확인</b><i class="ico_link"></i>
					</a><br>
					개인정보관리자: {{ configShop.privacy_manager }}
				</address>
				<dl>
					<dt>고객센터</dt>
					<dd>
						대표전화: {{ configShop.cs_tel }}<br>
						운영시간: {{ configShop.cs_time }} {{ configShop.cs_weekday }}<br>
						팩스번호: {{ configShop.cs_fax_number }}<br>
						이메일: <a :href="`mailto:${configShop.cs_email}`"><b>{{ configShop.cs_email }}</b></a>
					</dd>
				</dl>
				<dl>
					<dt>구매안전 서비스</dt>
					<dd>
						고객님은 안전거래를 위해 현금등으로 결제 시 저희<br>쇼핑몰에 가입한 <strong>NHN KCP 구매안전서비스</strong>를 이용<br>하실 수 있습니다
						<a
							class="btn_footer-info"
							:href="configShop.payment_service_info_url"
							target="_blank"
							title="새 창 열림"
						>
							<b>서비스가입 사실 확인</b><i class="ico_link"></i>
						</a><br>
						{{ configShop.name }}에서 판매되는 모든 상품은 {{ configShop.name }}에서 책임을 지고 있습니다
					</dd>
				</dl>
			</div>
			<p class="text_copyright">
				&#169; {{ configShop.copyright_text }}
			</p>
		</div>
	</div>
</template>

<style lang="scss">
	:root {
		--footer_height_base: 289px;
	}
</style>