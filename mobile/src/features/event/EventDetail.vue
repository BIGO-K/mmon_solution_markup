<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import SnsShare from '@/components/SnsShare.vue';

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
	<LayoutSub>
		<template #title>
			<h1><b>이벤트</b></h1>
		</template>

		<template #content>
			<div class="mm_event">
				<!-- 관련정보 -->
				<div class="mm_event-head">
					<h2><b>{{ detailAPI?.special_event.title }}</b></h2>

					<!-- SNS 공유 -->
					<button
						type="button"
						class="btn_sns-share"
					>
						<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
					</button>
					<SnsShare></SnsShare>
				</div>

				<!-- 이벤트 상세 이미지 -->
				<div class="m_event-hero">
					<!-- 이미지 등록 -->
					<i
						v-if="detailAPI?.special_event.contents_type === 'image'"
						class="image_banner"
					>
						<LazyloadMUI
							:_tag="'img'"
							:_src="detailAPI.special_event.contents_image_url"
							:alt="detailAPI.special_event.alt"
						></LazyloadMUI>
					</i>

					<!-- 에디터 등록 -->
					<div
						v-else-if="detailAPI?.special_event.contents_type === 'html'"
						class="mm_editor"
						v-html="detailAPI.special_event.contents_html"
					></div>
				</div>

				<!-- (D) 이벤트 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)' 및 '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
				<!-- 상품 그룹 앵커 -->
				<div class="mm_event-anchor">
					<div
						class="mm_dropdown S=on"
						data-dropdown
					>
						<button
							class="btn_dropdown"
							title="펼쳐보기"
						>
							<b>BEST ITEM</b><i class="ico_dropdown"></i>
						</button>
						<div class="mm_dropdown-item">
							<div class="mm_dropdown-item-inner">
								<ul>
									<li
										v-for="(group, index) in detailAPI?.special_event.goods_groups"
										:key="index"
									>
										<a :href="`#event_prod_section${index}`"><b>{{ group.title }}</b></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- 상품 그룹 목록 -->
				<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
				<div
					v-for="(productGroup, index) in detailAPI?.special_event.goods_groups"
					:id="`event_prod_section${index}`"
					:key="index"
					class="mm_event-list"
				>
					<h3><b>{{ productGroup.title }}</b></h3>
					<div class="mm_product-list T=card">
						<!--
							(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
							data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
						-->
						<ul>
							<li
								v-for="item in productAPI?.group_goods"
								:key="item.id"
							>
								<ProductItem
									:product="item"
									:class="'T=pa'"
								></ProductItem>
							</li>
						</ul>
					</div>
				</div>

				<!-- 이벤트 댓글 -->
				<div
					v-if="detailAPI?.special_event.is_commentable"
					class="mm_event-reply"
				>
					<!-- 댓글 작성 -->
					<!-- (D) 작성자가 로그인 상태일 경우 -->
					<div
						v-if="_isLogin"
						class="mm_event-reply-write"
					>
						<div class="mm_inner">
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
										data-text="{ '_isResize': true, '_resizeMin': 5, '_resizeMax': 9 }"
										maxlength="200"
									></textarea>
									<i class="bg_text"></i>
									<span class="text_placeholder">댓글을 작성하세요</span>
								</label>
							</div>
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
							<div class="mm_btn_box">
								<button
									type="button"
									class="mm_btn T=primary"
								>
									<b>작성완료</b>
								</button>
							</div>
						</div>
					</div>

					<!-- (D) 작성자가 비로그인 상태일 경우 -->
					<div
						v-else
						class="mm_event-reply-write"
					>
						<div class="mm_inner">
							<p class="text_login">
								로그인을 하셔야 댓글을 등록하실 수 있습니다
							</p>
							<div class="mm_btn_box">
								<div class="mm_inline">
									<router-link
										class="mm_btn T=sm T=primary"
										:to="{ name: 'Login' }"
									>
										<b>댓글 작성하기</b>
									</router-link>
								</div>
							</div>
						</div>
					</div>

					<!-- 댓글 목록 -->
					<div
						v-if="commentAPI != null"
						class="mm_event-reply-list"
					>
						<h5><b><strong>{{ commentAPI.paginator.total }}</strong>개의 댓글이 있습니다</b></h5>

						<p
							v-if="commentAPI.paginator.total === 0"
							class="mm_text-none"
						>
							<i class="ico_text-none"></i>등록된 댓글이 없습니다
						</p>

						<ul v-else>
							<li
								v-for="reply in commentAPI.paginator.data"
								:key="reply.id"
								ref="{{ `test${_index}` }}"
								class="mm_event-reply-item"
								:class="reply.is_editable ? `T=item-my T=level${reply.writer_grade_level}` : ''"
							>
								<p class="text_user">
									<LazyloadMUI
										class="mm_bg-contain image_grade"
										:_src="reply.writer_grade_image_url"
										:title="`level${reply.writer_grade_level}`"
									></LazyloadMUI>
									{{ reply.writer_masking_login_id }}
									<template v-if="reply.is_editable">
										<b class="text_tag">내 댓글</b>
										<i
											v-if="reply.is_private"
											class="ico_secret"
										></i>
									</template>
								</p>

								<!-- 내가 쓴 댓글 -->
								<!-- (D) 내가 쓴 댓글일 경우 mm_event-reply-item요소에 T=item-my 클래스와 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
								등급 : level5, level4, level3, level2, level1-->
								<!-- XXX 댓글 내용 줄 수에 따른 분기 처리 필요 -->
								<template v-if="reply.is_editable">
									<template v-if="true">
										<p
											class="text_reply"
											data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
											title="열기"
										>
											<b v-html="reply.contents"></b>
											<i class="ico_dropdown"></i>
										</p>

										<!-- (D) 댓글 내용이 2줄 미만인 경우 아래와 같이 노출합니다. -->
										<!-- <p class="text_reply">
											<b v-html="reply.contents"></b>
										</p> -->

										<p class="text_date">
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
												class="btn_modify"
											>
												<b>수정</b>
											</button>
										</div>
									</template>
									<!-- XXX 내가 쓴 댓글 수정 영역 작업 방향 확인 및 수정 필요 -->
									<template v-else>
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
													data-text="{ '_default': '2번이요!! 다이어트 성공하면 입을라구 슬립드레스 샀는데 한번도 입은적이 없답니다', '_isResize': true, '_resizeMin': 4, '_resizeMax': 6 }"
													maxlength="200"
												></textarea>
												<i class="bg_text"></i>
												<span class="text_placeholder">댓글을 작성하세요</span>
											</label>
										</div>
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
										<div class="mm_btn_box">
											<button
												type="button"
												class="btn_modify"
											>
												<b>수정</b>
											</button>
										</div>
									</template>
								</template>

								<template v-else>
									<p
										v-if="reply.is_private"
										class="text_reply"
									>
										비공개 댓글입니다<i class="ico_secret"></i>
									</p>
									<p
										v-else
										class="text_reply"
										data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
										title="열기"
									>
										<b v-html="reply.contents"></b>
										<i class="ico_dropdown"></i>
									</p>

									<!-- (D) 댓글 내용이 2줄 미만인 경우 아래와 같이 노출합니다. -->
									<!-- <p v-else class="text_reply">
										<b v-html="reply.contents"></b>
									</p> -->

									<p class="text_date">
										{{ reply.created_at }}
									</p>
								</template>
							</li>
						</ul>
					</div>
					<div class="mm_foot">
						<div class="mm_btn_box">
							<a
								class="mm_btn T=line T=dark"
								href="#"
							>
								<b>더보기</b><i class="ico_more"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</template>
	</LayoutSub>
</template>

<style src="./_event.scss" lang="scss"></style>

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->