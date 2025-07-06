<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<EventListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_SPECIAL_EVENTS`, ref: listAPI },
	]);

	const _selsectedCategory = ref(0);
</script>

<template>
	<div class="mm_inner m_event">
		<h3 class="mm_title">
			<b>이벤트</b>
		</h3>

		<!-- 탭메뉴 -->
		<div class="mm_tab_menu">
			<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
			<ul class="mm_flex T=equal">
				<li>
					<a
						:class="{ 'S=tab-on': _selsectedCategory === 0 }"
						href="#"
						:title="_selsectedCategory === 0 ? '선택됨' : ''"
						@click="_selsectedCategory = 0"
					>
						<b>전체</b>
					</a>
				</li>
				<li>
					<a
						:class="{ 'S=tab-on': _selsectedCategory === 1 }"
						href="#"
						:title="_selsectedCategory === 1 ? '선택됨' : ''"
						@click="_selsectedCategory = 1"
					>
						<b>진행중인 이벤트</b>
					</a>
				</li>
				<li>
					<a
						:class="{ 'S=tab-on': _selsectedCategory === 2 }"
						href="#"
						:title="_selsectedCategory === 2 ? '선택됨' : ''"
						@click="_selsectedCategory = 2"
					>
						<b>종료된 이벤트</b>
					</a>
				</li>
				<li>
					<router-link :to="{ name: 'Experience' }">
						<b>체험단 후기</b>
					</router-link>
				</li>
			</ul>
		</div>

		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="listAPI != null && listAPI.paginator.data.length < 1">
			등록된 이벤트가 없습니다
		</None>

		<template v-else-if="$route.query.type === 'skeleton'">
			<ul class="m_event-list T=skeleton">
				<li
					v-for="i in 6"
					:key="i"
				>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
			</ul>
		</template>

		<template v-else>
			<!-- 이벤트 리스트 -->
			<ul class="m_event-list">
				<li
					v-for="item in listAPI?.paginator.data"
					:key="item.id"
				>
					<router-link :to="{ name:'EventDetail', params: { id: item.id } }">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_banner"
								:_src="'/public/images/dummy/event_banner1.png'"
							></LazyloadMUI>
							<figcaption>
								<p class="text_main">
									{{ item.title }}
								</p>
								<p class="text_sub">
									{{ item.description }}
								</p>
								<p class="text_period">
									{{ `${item.start_at} ~ ${item.end_at}` }}
								</p>
								<!-- TODO <p class="text_period">2022.07.01 ~ 2022.08.02</p> -->
							</figcaption>
						</figure>
					</router-link>
				</li>
			</ul>
		</template>

		<Pagination
			v-if="$route.query.type != 'none' && listAPI?.paginator != null"
			:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>

<style src="./_event.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->