<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';
	import Pagination from '@/components/Pagination.vue';

	const commentAPI = ref<CommentAPI>();

	// api
	Api.getAll([
		{ key: `EXH_PLANNING_COMMENTS`, ref: commentAPI },
	]);
</script>

<template>
	<!-- 기획전 댓글 -->
	<!-- (D) 댓글 기능 사용시에만 .mm_evet-reply 영역을 노출합니다 -->
	<div
		class="mm_event-reply"
	>
		<!-- 댓글 작성 -->
		<!-- (D) 회원 로그인 상태 -->
		<div class="mm_event-reply-write">
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
							:_src="'../image/common/level5.png'"
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
</template>