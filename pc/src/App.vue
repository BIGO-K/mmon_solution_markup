<script setup lang="ts">
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Error from '@/pages/error/Index.vue';
	import Index from '@/Index.vue';
</script>

<template>
	<template v-if="$route.meta.layout === 'L=index'">
		<Index></index>
	</template>

	<template v-else-if="$route.meta.layout === 'L=error'">
		<div class="mm_view L=error">
			<div
				id="mm_body"
				class="mm_page"
			>
				<div class="mm_page-content">
					<Error :error="'404'"></Error>
				</div>
			</div>
		</div>
	</template>

	<template v-else>
		<!-- 스킵 -->
		<nav class="mm_skip">
			<ul>
				<li>
					<a
						href="#mm_body"
						data-href="{ '_type': 'anchor' }"
					>
						본문바로가기
					</a>
				</li>
			</ul>
		</nav>

		<!-- 화면 -->
		<div class="mm_view">
			<Header v-if="$route.meta.isShowHeader != false"></Header>

			<!-- 내용 -->
			<div
				id="mm_body"
				class="mm_page"
			>
				<!-- 사이드요소 -->
				<div class="mm_sidebar">
					<div class="mm_sidebar-rside">
						<div class="mm_sidebar-rside-inner">
							<a
								class="btn_anchor-up"
								href="#mm_app"
								data-href="{ '_type': 'anchor' }"
								title="페이지 처음으로"
							>
								<i class="ico_anchor-up"></i>
							</a>
							<a
								class="btn_anchor-down"
								href="#mm_footer"
								data-href="{ '_type': 'anchor' }"
								title="페이지 마지막으로"
							>
								<i class="ico_anchor-down"></i>
							</a>
						</div>
					</div>
				</div>

				<!-- 본문 -->
				<div class="mm_page-content">
					<!-- (D) 실제 내용을 추가하는 부분입니다. -->
					<router-view></router-view>
				</div>
			</div>
			<Footer v-if="$route.meta.isShowFooter != false"></Footer>
		</div>
	</template>
</template>
