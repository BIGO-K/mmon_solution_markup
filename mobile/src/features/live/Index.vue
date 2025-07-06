<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutMain from '@/components/layout/LayoutMain.vue';

	const activeListAPI = ref<LiveActiveListAPI>();
	const scheduleListAPI = ref<LiveScheduleListAPI>();

	// api
	Api.getAll([
		{ key: `GET_ACTIVE_BROAD_CAST`, ref: activeListAPI },
		{ key: `GET_SCHEDULE_BROAD_CAST`, ref: scheduleListAPI },
	]);

	const _isLoading = ref(true);

	setTimeout(() => {

		_isLoading.value = false;

	}, 300);
</script>

<template>
	<LayoutMain>
		<div class="m_live">
			<h2><b>쇼핑 LIVE</b></h2>

			<!-- 방송중 -->
			<!-- (D) 라이브 중인 영상을 video 태그로 추가해주시고, 영상이 로드 됐을 때 'S=loaded' 클래스를 추가해줍니다. -->

			<!-- 내용없음 -->
			<p
				v-if="activeListAPI && activeListAPI.total_count < 1"
				class="mm_text-none"
			>
				<i class="ico_text-none"></i>진행중인 라이브가 없습니다
			</p>

			<div
				v-else
				class="mm_scroller T=x"
			>
				<ul>
					<li
						v-for="live in scheduleListAPI?.items"
						:key="live.broadcast.id"
					>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="live.broadcast_thumbnails[0].url"
									></LazyloadMUI>
									<video
										src="../image/_sample/live_video1.mp4"
										class="S=loaded"
										autoplay
										muted
									></video>
									<b class="text_tag">ON AIR</b>
								</div>
								<figcaption>
									<p class="text_state">현재 방송중</p>
									<p class="text_title">{{ live.broadcast.name }}</p>
								</figcaption>
							</figure>
						</a>
					</li>
				</ul>
			</div>

			<!-- 방송예정 -->
			<section>
				<h4 class="mm_title">
					<b>방송 예정 LIVE</b>
				</h4>

				<!-- 내용없음 -->
				<p
					v-if="scheduleListAPI && scheduleListAPI.total_count < 1"
					class="mm_text-none"
				>
					<i class="ico_text-none"></i>방송 예정인 라이브가 없습니다
				</p>

				<div
					v-else
					class="mm_scroller T=x"
				>
					<ul>
						<li
							v-for="live in activeListAPI?.items"
							:key="live.broadcast.id"
						>
							<a href="#">
								<figure>
									<div class="m_live-visual">
										<LazyloadMUI
											class="mm_bg-cover image_banner"
											:_src="'/public/images/_sample/prod_x2_1.png'"
										></LazyloadMUI>
										<p class="text_open"><strong>2월 5일<span>13:00</span></strong></p>
									</div>
									<figcaption>
										<b class="text_tag">방송예정</b>
										<p class="text_state">2월 5일 오후 1시</p>
										<p class="text_title">{{ live.broadcast.name }}</p>
									</figcaption>
								</figure>
							</a>
						</li>
					</ul>
				</div>
			</section>

			<!-- 방송종료 -->
			<!-- TODO 방송종료된 라이브 json 어디서 가져옴 ? -->
			<section>
				<h4 class="mm_title">
					<b>LIVE 모아보기</b>
				</h4>

				<!-- 내용없음 -->
				<p class="mm_text-none">
					<i class="ico_text-none"></i>종료된 라이브가 없습니다
				</p>

				<!-- 스켈레톤 -->
				<ul
					v-if="_isLoading"
					class="T=skeleton"
				>
					<li
						v-for="item in 3"
						:key="item"
					>
						<i class="image_banner"></i>
						<p class="text_title"></p>
					</li>
				</ul>

				<ul>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_8.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">[제이에스티나] 아이유 PICK WAVE PERLINA 14K 목걸이+귀걸이 세트</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_7.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">보이는 편안함 그대로의 디자인, 크로세 니트부터 버킷햇까지</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_6.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">[빈치스벤치] 플루토네 드로스트링 라지 버킷백(L) VE0FFBGPU003VII</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_5.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">[LUNNE] 룬느 14K 골드필드 후프 링 귀걸이 4Size</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_4.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">[드롭드롭드롭] 구디 와인백 GLOW EVERY MOMENT GREEN</p>
								</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a href="#">
							<figure>
								<div class="m_live-visual">
									<LazyloadMUI
										class="mm_bg-cover image_banner"
										:_src="'/public/images/_sample/prod_x2_3.png'"
									></LazyloadMUI>
									<b class="text_tag"><i class="ico_like"></i>1.3천</b>
									<p class="text_play">01:03:22</p>
								</div>
								<figcaption>
									<p class="text_title">[제이에스티나] 아이유 PICK WAVE PERLINA 14K 목걸이+귀걸이 세트</p>
								</figcaption>
							</figure>
						</a>
					</li>
				</ul>
			</section>
		</div>
	</LayoutMain>
</template>

<style src="./_live.scss" lang="scss"></style>