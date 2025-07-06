<script setup lang="ts">
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>아이디/비밀번호 찾기</b></h1>
		</template>

		<template #content>
			<div class="m_popup-sign-find">
				<!-- 탭메뉴 -->
				<div class="mm_tab_menu">
					<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<ul class="mm_flex T=equal">
						<li>
							<router-link
								:class="{'S=tab-on': $route.name === 'LoginFindId' }"
								:to="{ name: 'LoginFindId' }"
								title="선택됨"
								replace
							>
								<b>아이디 찾기</b>
							</router-link>
						</li>
						<li>
							<router-link
								:class="{'S=tab-on': $route.name === 'LoginFindPw' }"
								:to="{ name: 'LoginFindPw' }"
								replace
							>
								<b>비밀번호 찾기</b>
							</router-link>
						</li>
					</ul>
				</div>

				<router-view></router-view>
			</div>
		</template>
	</LayoutPopup>
</template>