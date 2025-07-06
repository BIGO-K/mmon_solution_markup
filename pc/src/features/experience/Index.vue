<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const listAPI = ref<ExperienceListAPI>();

	// api
	Api.getAll([
		{ key: `EXPERIENCEGROUP_REVIEW_LIST`, ref: listAPI },
	]);

	const _isSwitchOn = true;
</script>

<template>
	<div class="mm_inner">
		<!-- 체험단 후기 상단 -->
		<div class="m_experience-head">
			<h3 class="mm_title">
				<b>체험단 후기</b>
			</h3>
			<router-link
				class="btn_back"
				:to="{ name: 'Event' }"
			>
				<i class="ico_back-arrow"></i><b>Event Main</b>
			</router-link>
			<!-- (D) 회원일 경우만 노출합니다. -->
			<a

				class="mm_btn T=xs T=line T=dark btn_register"
				href="#"
			>
				<i class="ico_experience-write"></i><b>체험단 후기 작성</b>
			</a>
		</div>

		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None v-if="$route.query.type === 'none'">
			등록된 체험단 후기가 없습니다
		</None>

		<template v-else-if="$route.query.type === 'skeleton'">
			<ul class="m_experience-list T=skeleton">
				<li
					v-for="i in 8"
					:key="i"
				>
					<i class="image_banner"></i>
					<p class="text_user"></p>
					<p class="text_title"></p>
					<p class="text_date"></p>
				</li>
			</ul>
		</template>

		<template v-else>
			<!-- 체험단 후기 목록 -->
			<ul class="m_experience-list">
				<li
					v-for="item in listAPI?.paginator.data"
					:key="item.id"
				>
					<a href="#">
						<figure>
							<LazyloadMUI
								class="mm_bg-cover image_banner"
								:_src="'/public/images/dummy/experience_banner1.png'"
							></LazyloadMUI>
							<figcaption>
								<b class="text_star">
									<i
										class="ico_star"
										title="별점"
									></i><span>{{ item.grade }}</span>
								</b>
								<b class="text_user">{{ item.writer }}</b>
								<p class="text_title">{{ item.title }}</p>
							</figcaption>
						</figure>
					</a>
					<div>
						<button
							type="button"
							class="btn_thumb"
							:class="{ 'S=switch-on': _isSwitchOn }"
							:title="_isSwitchOn ? '선택됨' : ''"
							data-switch
						>
							<i class="ico_thumb"></i><b>{{ item.recommendation_count }}</b>
						</button>
						<span class="text_view">조회<strong>{{ item.view_count }}</strong></span>
						<span class="text_date">{{ item.created_at }}</span>
					</div>
				</li>
			</ul>
		</template>

		<Pagination
			v-if="$route.query.type != 'none' && listAPI?.paginator"
			:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>

<style src="./_experience.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/.js"></script> -->