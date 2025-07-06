<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';

	const latelyListAPI = ref<LatelyCodyshotListAPI>();
	const listAPI = ref<CodyshotListAPI>();

	// api
	Api.getAll([
		{ key: `MAIN_RECENT_CODY_SHOTS`, ref: latelyListAPI },
		{ key: `MAIN_CODY_SHOTS`, ref: listAPI },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<div class="m_codyshot">
			<!-- (D) 신규 코디샷이 없을 경우 '.m_codyshot-new' 영역과 hr을 노출하지 않습니다 -->
			<template v-if="latelyListAPI && latelyListAPI.recent_cody_shots.length > 0">
				<div class="m_codyshot-new">
					<h2><b>신규 코디샷</b></h2>
					<div class="mm_scroller T=x">
						<ul>
							<li
								v-for="item in latelyListAPI.recent_cody_shots"
								:key="item.id"
							>
								<div class="m_codyshot-item">
									<router-link :to="{ name: 'CodyshotDetail', params: { id: item.id } }">
										<figure>
											<LazyloadMUI
												class="mm_bg-cover image_banner"
												:_src="item.thumbnail_url"
												:alt="item.alt"
											></LazyloadMUI>
											<figcaption>
												<p class="text_brand">
													{{ item.brand_name }}
												</p>
												<p class="text_main">
													{{ item.title }}
												</p>
											</figcaption>
										</figure>
									</router-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<hr class="mm_line">
			</template>
			<div class="mm_inner">
				<div class="mm_form-select">
					<label>
						<select data-select>
							<option>전체 코디샷</option>
						</select>
						<b class="text_selected"></b>
						<i class="ico_form-select"></i>
					</label>
				</div>

				<!-- 내용없음 -->
				<p
					v-if="listAPI && listAPI.paginator.data.length < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>등록된 상품이 없습니다
				</p>

				<!-- 스켈레톤 -->
				<ul
					v-if="_isLoading"
					class="m_codyshot-list T=skeleton"
				>
					<li
						v-for="item in 6"
						:key="item"
					>
						<i class="image_banner"></i>
						<p class="text_brand"></p>
						<p class="text_main"></p>
					</li>
				</ul>

				<ul class="m_codyshot-list">
					<li
						v-for="item in listAPI?.paginator.data"
						:key="item.id"
					>
						<div class="m_codyshot-item">
							<router-link :to="{ name: 'CodyshotDetail', params: { id: item.id } }">
								<figure>
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="item.thumbnail_url"
										:alt="item.alt"
									></LazyloadMUI>
									<figcaption>
										<p class="text_brand">
											{{ item.brand_name }}
										</p>
										<p class="text_main">
											{{ item.title }}
										</p>
									</figcaption>
								</figure>
							</router-link>
						</div>
					</li>
				</ul>
				<div class="mm_foot">
					<div class="mm_btn_box">
						<button
							type="button"
							class="mm_btn T=line T=dark btn_more"
						>
							<b>더보기</b><i class="ico_more"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</LayoutMain>
</template>

<style src="./_codyshot.scss" lang="scss"></style>