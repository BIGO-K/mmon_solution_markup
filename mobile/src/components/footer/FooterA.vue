<script setup lang="ts">
	import { useConfigStore } from '@/store/config';

	const { configShop } = useConfigStore();
</script>

<template>
	<!-- 푸터 -->
	<footer
		id="mm_footer"
		class="mm_footer T=fa"
	>
		<!-- 푸터-메뉴 -->
		<div class="mm_footer-menu">
			<ul class="mm_flex T=equal">
				<li><a :href="configShop.homepage_url"><b>회사소개</b></a></li>
				<li>
					<router-link :to="{ name: 'Cs' }">
						<b>고객센터</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'CsInquiry' }">
						<b>문의하기</b>
					</router-link>
				</li>
				<li>
					<a
						href="#"
						target="_blank"
						title="새 창 열림"
					>
						<b>PC버전</b>
					</a>
				</li>
			</ul>
		</div>

		<!-- 푸터 - 정보 -->
		<div class="mm_footer-info">
			<div
				class="mm_dropdown"
				data-dropdown
			>
				<b>{{ configShop.name }}</b>
				<button
					type="button"
					class="btn_dropdown"
					title="펼쳐보기"
				>
					<b>사업자 정보</b><i class="ico_dropdown T=sm"></i>
				</button>
				<div
					class="mm_dropdown-item"
				>
					<div class="mm_dropdown-item-inner">
						<address>
							<p>대표: {{ configShop.ceo_name }}</p>
							<p>{{ `${configShop.base_address} ${configShop.detail_address}` }}</p>
							<p>
								사업자등록번호: {{ configShop.business_number }}
								<a
									:href="configShop.business_service_info_url"
									target="_blank"
									title="새 창 열림"
								>
									<b>사업자정보 확인</b>
								</a>
							</p>
							<p>통신판매업 신고번호: {{ configShop.sell_account }}</p>
							<p>개인정보관리자: {{ configShop.privacy_manager }}</p>
							<p class="text_cs">
								대표전화:
								<a
									:href="`tel:${configShop.cs_tel}`"
									title="전화연결"
								>
									<b>{{ configShop.cs_tel }}</b>
								</a> / {{ configShop.cs_time }}
							</p>
							<p>점심시간: {{ configShop.cs_lunch_time }}</p>
							<p>팩스번호: {{ configShop.cs_fax_number }}</p>
							<p class="text_email">
								이메일:
								<a
									:href="`mailto:${configShop.cs_email}`"
									title="새 창 열림"
								>
									<b>{{ configShop.cs_email }}</b>
								</a>
							</p>
						</address>
					</div>
				</div>
			</div>
			<ul class="mm_footer-info-policy">
				<li>
					<router-link :to="{ name: 'Policy', params: { type: 'agreement' } }">
						<b>서비스이용약관</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Policy', params: { type: 'privacy' } }">
						<strong>개인정보처리방침</strong>
					</router-link>
				</li>
				<li><a href="#"><b>이용안내</b></a></li>
				<li>
					<a
						href="#"
						target="_blank"
						title="새 창 열림"
					>
						<b>구매안전서비스 가입사실확인</b>
					</a>
				</li>
			</ul>
			<p class="text_copyright">
				&#169;{{ configShop.copyright_text }}
			</p>
		</div>
	</footer>
</template>