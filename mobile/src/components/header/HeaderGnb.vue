<script setup lang="ts">

</script>

<template>
	<!-- GNB -->
	<div class="mm_gnb">
		<!-- (D) 메뉴가 모바일 가로 사이즈보다 적으면 mm_gnb에 'S=flex' 클래스가 추가됩니다. -->
		<div class="mm_gnb-inner">
			<div class="mm_scroller T=x">
				<!-- (D) 현재페이지의 a 요소에 "S=gnb-on" 클래스와 "선택됨" 타이틀을 추가합니다. -->
				<ul>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'LayoutMain' }"
							:title="$route.name === 'LayoutMain'? '선택됨': ''"
							:to="{ name: 'LayoutMain' }"
						>
							<b>홈</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Best' }"
							:title="$route.name === 'Best'? '선택됨': ''"
							:to="{ name: 'Best' }"
						>
							<b>베스트</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Event' }"
							:title="$route.name === 'Event'? '선택됨': ''"
							:to="{ name: 'Event' }"
						>
							<b>이벤트</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'ShoppingLive' }"
							:title="$route.name === 'ShoppingLive'? '선택됨': ''"
							:to="{ name: 'ShoppingLive' }"
						>
							<b>LIVE</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Showcase' }"
							:title="$route.name === 'Showcase'? '선택됨': ''"
							:to="{ name: 'Showcase' }"
						>
							<b>매거진</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Raffle' }"
							:title="$route.name === 'Raffle'? '선택됨': ''"
							:to="{ name: 'Raffle' }"
						>
							<b>래플</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Coop' }"
							:title="$route.name === 'Coop'? '선택됨': ''"
							:to="{ name: 'Coop' }"
						>
							<b>공동구매</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Codyshot' }"
							:title="$route.name === 'Codyshot'? '선택됨': ''"
							:to="{ name: 'Codyshot' }"
						>
							<b>코디샷</b>
						</router-link>
					</li>
					<li>
						<router-link
							:class="{'S=gnb-on' : $route.name === 'Category' && $route.params.id === '123' }"
							:title="$route.name === 'Category'? '선택됨': ''"
							:to="{ name: 'CategorySub', params: { id: '123'} }"
						>
							<b>카테고리1</b>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>