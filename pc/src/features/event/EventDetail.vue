<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';
	import ProductItem from '@/components/ProductItem.vue';

	const detailAPI = ref<EventDetailAPI>();
	const productAPI = ref<EventProductAPI>();
	const commentAPI = ref<CommentAPI>();

	// api
	Api.getAll([
		{ key: `SPECIAL_EVENT_DETAIL`, ref: detailAPI },
		{ key: `SPECIAL_EVENT_GROUP_GOODS`, ref: productAPI },
		{ key: `SPECIAL_EVENT_COMMENTS`, ref: commentAPI },
	]);

	const _isLogin = true;
</script>

<template>
	<h3 class="mm_title">
		<b>이벤트</b>
	</h3>

	<!-- 상세 타이틀 -->
	<div class="mm_event-head">
		<div class="mm_inner">
			<h4><b>{{ detailAPI?.special_event.title }}</b></h4>
			<a
				class="btn_home"
				href="#"
				@click.prevent="$router.go(-1)"
			>
				<i class="ico_back"></i><b>메인으로</b>
			</a>
			<button
				type="button"
				class="btn_sns-share"
			>
				<i class="ico_share"></i><b class="mm_ir-blind">클립보드 복사하기</b>
			</button>
		</div>
	</div>

	<div class="mm_event-content">
		<!-- 에디터 등록 -->
		<div
			v-if="detailAPI?.special_event.contents_type === 'image'"
			class="mm_editor"
		>
			<img
				:src="detailAPI.special_event.contents_image_url"
				:alt="detailAPI.special_event.contents_image_url"
			>
		</div>
		<div
			v-else-if="detailAPI?.special_event.contents_type === 'html'"
			class="mm_editor"
			v-html="detailAPI.special_event.contents_html"
		></div>
	</div>

	<!-- 상품 그룹/기획전 댓글 -->
	<div class="mm_inner">
		<!-- 상품 그룹 앵커 -->
		<!-- (D) 기획전 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)', '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
		<div class="mm_event-anchor">
			<div class="mm_event-anchor-inner">
				<ul data-horizon>
					<li
						v-for="(group, index) in detailAPI?.special_event.goods_groups"
						:key="index"
					>
						<a :href="`#group${index}`"><b>{{ group.title }}</b></a>
					</li>
				</ul>
			</div>
		</div>

		<!-- 상품 그룹 목록 -->
		<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
		<section
			v-for="(productGroup, index) in detailAPI?.special_event.goods_groups"
			:id="`group${index}`"
			:key="index"
			class="mm_event-list"
		>
			<!-- 이미지형 그룹명 -->
			<h5><b>{{ productGroup.title }}</b></h5>
			<div class="mm_product-list">
				<ul>
					<li
						v-for="item in productAPI?.group_goods"
						:key="item.id"
					>
						<ProductItem :product="item"></ProductItem>
					</li>
				</ul>
			</div>
		</section>

		<!-- 기획전 댓글 -->
		<!-- (D) 댓글 기능 사용시에만 .mm_evet-reply 영역을 노출합니다 -->
		<div
			v-if="detailAPI?.special_event.is_commentable"
			class="mm_event-reply"
		>
			<!-- 댓글 작성 -->
			<!-- (D) 회원 로그인 상태 -->
			<div
				v-if="_isLogin"
				class="mm_event-reply-write"
			>
				<label class="mm_form-check">
					<input
						type="checkbox"
						data-check
					>
					<b class="mm_block">
						<i class="ico_form-check"></i>
						<span class="text_label">비공개</span>
					</b>
				</label>
				<div class="mm_form-textarea">
					<button
						type="button"
						class="btn_text-clear"
					>
						<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
					</button>
					<label>
						<textarea
							class="textfield"
							data-text="{ '_isResize': true, '_resizeMin': 4, '_resizeMax': 9 }"
							maxlength="200"
						></textarea>
						<i class="bg_text"></i>
						<span class="text_placeholder">댓글을 작성하세요</span>
					</label>
				</div>
				<div class="mm_btn_box">
					<div class="mm_lside">
						<button
							type="button"
							class="mm_btn T=sm T=primary btn_write"
						>
							<b>작성완료</b>
						</button>
					</div>
				</div>
			</div>
			<!-- (D) 비회원 상태 -->
			<div
				v-else
				class="mm_event-reply-write"
			>
				<p>로그인을 하셔야 댓글을 등록하실 수 있습니다</p>
				<div class="mm_btn_box">
					<a
						class="mm_btn T=sm T=primary"
						href="#"
					>
						<b>댓글 작성하기</b>
					</a>
				</div>
			</div>

			<!-- 댓글 리스트 -->
			<div class="mm_event-reply-list">
				<p class="text_state">
					{{ commentAPI?.paginator.total }}개의 댓글이 있습니다
				</p>
				<None v-if="commentAPI?.paginator.total === 0">
					등록된 댓글이 없습니다
				</None>
				<ul v-else>
					<li
						v-for="reply in commentAPI?.paginator.data"
						:key="reply.id"
						class="mm_event-reply-item"
						:class="reply.is_editable ? `T=item-my T=level${reply.writer_grade_level}` : ''"
					>
						<p class="text_user">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="reply.writer_grade_image_url"
								:title="`level${reply.writer_grade_level}`"
							></LazyloadMUI>{{ reply.writer_masking_login_id }}
						</p>

						<template v-if="reply.is_editable">
							<!-- 내가 쓴 댓글 -->
							<!-- (D) 내가 쓴 댓글일 경우 mm_event-reply-item요소에 T=item-my 클래스와 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
								등급 : level5, level4, level3, level2, level1
							-->
							<b class="text_tag">내 댓글</b>
							<b
								v-if="reply.is_private"
								class="text_secret"
							>
								비공개<i class="ico_lock"></i>
							</b>
							<p
								class="text_reply"
								v-html="reply.contents"
							></p>
							<p class="text_date">
								<!-- TODO 2020.05.26<span>11:20:11</span> -->
								{{ reply.created_at }}
							</p>
							<div class="mm_btn_box">
								<button
									type="button"
									class="btn_remove"
								>
									<b>삭제</b>
								</button>
								<button
									type="button"
									class="mm_btn T=xs T=line T=light btn_modify"
								>
									<i class="ico_reply-write"></i><b>수정</b>
								</button>
							</div>
						</template>

						<template v-else>
							<template v-if="reply.is_private">
								<p class="text_reply">
									비공개 댓글입니다<i class="ico_lock"></i>
								</p>
							</template>
							<template v-else>
								<p
									class="text_reply"
									v-html="reply.contents"
								></p>
								<p class="text_date">
									<!-- TODO 2020.05.26<span>11:20:11</span> -->
									{{ reply.created_at }}
								</p>
							</template>
						</template>
					</li>

					<!-- 내가 쓴 댓글 수정 -->
					<!-- XXX 내가 쓴 댓글 수정 영역 작업 방향 확인 및 수정 필요 -->
					<li class="mm_event-reply-item T=item-my">
						<p class="text_user">
							<LazyloadMUI
								class="mm_bg-contain image_grade"
								:_src="'../image/common/level1.png'"
								title="level1"
							></LazyloadMUI>r***
						</p>
						<label class="mm_form-check">
							<input
								type="checkbox"
								data-check
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">비공개</span>
							</b>
						</label>
						<div class="mm_form-textarea">
							<button
								type="button"
								class="btn_text-clear"
							>
								<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
							</button>
							<label>
								<textarea
									class="textfield"
									data-text="{ '_isResize': true, '_resizeMin': 3, '_resizeMax': 9 }"
									maxlength="200"
								></textarea>
								<i class="bg_text"></i>
								<span class="text_placeholder">댓글을 작성하세요</span>
							</label>
						</div>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line T=lighter"
							>
								<b>취소</b>
							</button>
							<button
								type="button"
								class="mm_btn T=xs T=line T=primary btn_complete"
							>
								<i class="ico_reply-complete"></i><b>완료</b>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<Pagination
			v-if="commentAPI?.paginator"
			:total-page="Math.ceil(commentAPI.paginator.total / commentAPI.paginator.per_page)"
			:current-page="Number($route.query.page)"
		></Pagination>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->