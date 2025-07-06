<script setup lang="ts">
	const _rankingType = 'typeA';
</script>

<template>
	<div class="m_ranking">
		<template v-if="_rankingType === 'typeA'">
			<!-- 랭킹 gnb -->
			<div class="m_ranking-gnb">
				<div
					class="m_ranking-gnb-inner"
					data-horizon
				>
					<!-- (D) 선택된 메뉴에 'S=gnb-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
					<ul>
						<li>
							<router-link
								:to="{ name: 'RankingMain' }"
								:class="{ 'S=gnb-on': $route.name === 'RankingMain' }"
								:title="$route.name === 'RankingMain' ? '선택됨': ''"
							>
								<i class="ico_shop"></i><b>랭킹 메인</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'RankingItem' }"
								:class="{ 'S=gnb-on': $route.name === 'RankingItem' }"
								:title="$route.name === 'RankingItem' ? '선택됨': ''"
							>
								<i class="ico_star"></i><b>아이템 랭킹</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'RankingBrand' }"
								:class="{ 'S=gnb-on': $route.name === 'RankingBrand' }"
								:title="$route.name === 'RankingBrand' ? '선택됨': ''"
							>
								<i class="ico_brand"></i><b>브랜드 랭킹</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'RankingView' }"
								:class="{ 'S=gnb-on': $route.name === 'RankingView' }"
								:title="$route.name === 'RankingView' ? '선택됨': ''"
							>
								<i class="ico_view"></i><b>View 랭킹</b>
							</router-link>
						</li>
						<li>
							<router-link
								:to="{ name: 'RankingLike' }"
								:class="{ 'S=gnb-on': $route.name === 'RankingLike' }"
								:title="$route.name === 'RankingLike' ? '선택됨': ''"
							>
								<i class="ico_like-fill"></i><b>찜 랭킹</b>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<!--// 랭킹 gnb -->
		</template>

		<router-view></router-view>
	</div>
</template>

<style src="./_ranking.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->