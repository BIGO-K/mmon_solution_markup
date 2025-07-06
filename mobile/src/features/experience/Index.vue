<script setup lang="ts">
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import Pagination from '@/components/Pagination.vue';
	import Bom from '@/components/layout/LayoutBom.vue';

	const listAPI = ref<ExperienceListAPI>();

	// api
	Api.getAll([
		{ key: `EXPERIENCEGROUP_REVIEW_LIST`, ref: listAPI },
	]);

	const router = useRouter();
	const _isLogin = false;
	const selectedItems = ref<number[]>([]);
	const _isBomLogin = ref<boolean>(false);

	interface Item {
		id: number;
		recommendation_count: number;
	}

	const clickThumb = (item: Item) => {

		if (!_isLogin) _isBomLogin.value = true;
		else {
			const index = selectedItems.value.indexOf(item.id);

			if (index > -1) {
				item.recommendation_count -= 1;
				selectedItems.value.splice(index, 1);
			}
			else {
				item.recommendation_count += 1;
				selectedItems.value.push(item.id);
			}
		}
	};

	const loginBomHandler = (__is: boolean) => {

		_isBomLogin.value = false;
		if (__is) router.push({ name: 'Login' });

	};

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>체험단 후기</b></h1>
		</template>

		<template #content>
			<div class="mm_inner">
				<!-- 체험단 후기 목록 -->
				<div class="m_experience-list">
					<!-- (D) 회원일 경우에만 체험단 후기 작성 버튼을 노출합니다. -->
					<router-link
						v-if="_isLogin"
						class="mm_btn T=xs T=line T=dark btn_register"
						:to="{ name: 'ExperienceRegister' }"
					>
						<i class="ico_review-write"></i><b>체험단 후기 작성</b>
					</router-link>

					<!-- 내용없음 -->
					<p
						v-if="(listAPI?.paginator.data.length ?? NaN) < 1"
						class="mm_text-none"
					>
						<i class="ico_text-none"></i>등록된 상품이 없습니다
					</p>

					<!-- 스켈레톤 -->
					<ul v-if="_isLoading">
						<li
							v-for="item in 8"
							:key="item"
						>
							<i class="image_banner"></i>
							<p class="text_user"></p>
							<p class="text_title"></p>
							<p class="text_date"></p>
							<p class="text_view"></p>
						</li>
					</ul>

					<ul v-else>
						<li
							v-for="item in listAPI?.paginator.data"
							:key="item.id"
						>
							<router-link :to="{ name: 'ExperienceDetail', params: { id: item.id } }">
								<figure>
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="item.thumbnail_url"
									></LazyloadMUI>
									<figcaption>
										<b class="text_star">
											<i
												class="ico_star-fill"
												title="별점"
											></i><span>{{ item.grade }}</span>
										</b>
										<p class="text_title">
											{{ item.title }}
										</p>
										<b class="text_user">{{ item.writer }}</b>
										<b class="text_date">{{ item.created_at }}</b>
									</figcaption>
								</figure>
							</router-link>
							<button
								type="button"
								class="btn_thumb"
								:class="{ 'S=switch-on': _isLogin && selectedItems.includes(item.id) }"
								title="선택됨"
								data-switch
								@click="clickThumb(item);"
							>
								<i class="ico_thumb"></i><b>{{ item.recommendation_count }}</b>
							</button>
							<b class="text_view">조회 {{ item.view_count }}</b>
						</li>
					</ul>
				</div>

				<Pagination
					v-if="listAPI != null"
					:total-page="Math.ceil(listAPI.paginator.total / listAPI.paginator.per_page)"
					:current-page="Number($route.query.page)"
				></Pagination>
			</div>
		</template>
	</LayoutSub>

	<Bom
		v-if="_isBomLogin"
		@close:bom="loginBomHandler"
	>
		<template #title>
			확인
		</template>
		<template #content>
			로그인이 필요합니다<br>로그인 페이지로 이동하시겠습니까?
		</template>
	</Bom>
</template>

<style src="./_experience.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->