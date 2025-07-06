<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<EventListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_SPECIAL_EVENTS`, ref: listAPI },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<!-- 이벤트 -->
		<section class="mm_inner">
			<h2 class="m_event-title">
				<b>EVENT</b>
			</h2>

			<!-- 이벤트 메뉴 -->
			<div class="m_event-menu">
				<!-- (D) 선택된 탭메뉴에 'S=menu-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul>
					<li>
						<a
							class="S=menu-on"
							href="#"
							title="선택됨"
						>
							<b>전체</b>
						</a>
					</li>
					<li><a href="#"><b>진행중</b></a></li>
					<li><a href="#"><b>종료</b></a></li>
				</ul>
				<router-link
					class="btn_experience"
					:to="{ name: 'Experience' }"
				>
					<b>체험단 후기</b><i class="ico_link T=sm"></i>
				</router-link>
			</div>

			<!-- 내용없음 -->
			<p
				v-if="(listAPI?.paginator.data.length ?? NaN) < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>등록된 이벤트가 없습니다
			</p>

			<!-- 이벤트 리스트 - 스켈레톤 -->
			<ul
				v-if="_isLoading"
				class="m_event-list T=skeleton"
			>
				<li
					v-for="item in 6"
					:key="item"
				>
					<i class="image_banner"></i>
					<p class="text_main"></p>
					<p class="text_sub"></p>
					<p class="text_period"></p>
				</li>
			</ul>

			<!-- 이벤트 리스트 -->
			<ul
				v-else
				class="m_event-list"
			>
				<li
					v-for="item in listAPI?.paginator.data"
					:key="item.id"
				>
					<router-link :to="{ name:'EventDetail', params: { id: item.id } }">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_banner"
								:_src="item.image_url"
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
							</figcaption>
						</figure>
					</router-link>
				</li>
			</ul>
			<Pagination
				v-if="listAPI?.paginator != null"
				:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
				:current-page="Number($route.query.page)"
			></Pagination>
		</section>
	</LayoutMain>
</template>

<style src="./_event.scss" lang="scss"></style>