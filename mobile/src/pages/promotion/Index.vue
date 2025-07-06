<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LayoutSub from '@/components/layout/LayoutSub.vue';
	import ProductItem from '@/components/ProductItem.vue';
	import SnsShare from '@/components/SnsShare.vue';

	const promotionAPI = ref<PromotionAPI>();
	const productAPI = ref<PromotionProductAPI>();

	// api
	Api.getAll([
		{ key: `EXH_PLANNING_DETAIL`, ref: promotionAPI },
		{ key: `EXH_PLANNING_GROUP_GOODS`, ref: productAPI },
	]);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>기획전</b></h1>
		</template>

		<template #content>
			<div class="mm_event">
				<!-- 관련정보 -->
				<div class="mm_event-head">
					<h2><b>{{ promotionAPI?.planning.title }}</b></h2>

					<!-- SNS 공유 -->
					<button
						type="button"
						class="btn_sns-share"
					>
						<i class="ico_share"></i><b class="mm_ir-blind">공유하기</b>
					</button>
					<SnsShare></SnsShare>
				</div>

				<!-- 상세 컨텐츠 -->
				<div
					v-for="content in promotionAPI?.planning.sections"
					:key="content.id"
					class="mm_event-content"
				>
					<!-- 에디터 등록 -->
					<div
						class="mm_editor"
						v-html="content.mobile_html"
					></div>

					<!-- 상품리스트 -->
					<div class="mm_scroller T=x">
						<div class="mm_product-list T=card">
							<ul>
								<li
									v-for="item in content.goods_list"
									:key="item.id"
									class="mm_slider-item"
								>
									<ProductItem
										:product="item"
										:class="'T=pa'"
									></ProductItem>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- (D) 기획전 등록시 상품 그룹을 등록한 경우에만 '상품 그룹 앵커(mm_event-anchor)' 및 '상품 그룹 목록(mm_event-list)'을 노출합니다. -->
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
										v-for="section in promotionAPI?.planning.groups"
										:key="section.id"
									>
										<a :href="`#event_prod_section${section.id}`"><b>{{ section.title }}</b></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- 상품 그룹 목록 -->
				<!-- (D) 앵커 이동을 위해 id 값을 순서대로 넣어주세요. -->
				<div
					v-for="section in promotionAPI?.planning.groups"
					:id="`event_prod_section${section.id}`"
					:key="section.id"
					class="mm_event-list"
				>
					<h3><b>{{ section.title }}</b></h3>
					<div class="mm_product-list T=card">
						<!--
							(D) 찜한 아이템의 .btn_like 버튼에 'S=switch-on' 클래스와 '선택됨' 타이틀이 추가됩니다.
							data-switch 속성에 onChange(1번째 파라미터로 true/false 전달) 값으로 콜백을 설정할 수 있습니다.
						-->
						<ul>
							<li
								v-for="item in productAPI?.planning_group_goods"
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
				<!-- TODO 이벤트 상세 댓글과 같이 사용할 수 있는지 확인 필요 -->
				<div class="mm_event-reply">
					<!-- 댓글 작성 -->
					<!-- (D) 작성자가 로그인 상태일 경우 -->
					<div class="mm_event-reply-write">
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

					<!-- 댓글 목록 내용없음 -->
					<div class="mm_event-reply-list">
						<h5><b><strong>0</strong>개의 댓글이 있습니다</b></h5>
						<p class="mm_text-none">
							<i class="ico_text-none"></i>등록된 댓글이 없습니다
						</p>
					</div>

					<!-- 댓글 목록 -->
					<div class="mm_event-reply-list">
						<h5><b><strong>3,145</strong>개의 댓글이 있습니다</b></h5>
						<ul>
							<li class="mm_event-reply-item">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level5.png' }"
									></i>a****
								</p>
								<p
									class="text_reply"
									data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
									title="열기"
								>
									<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
									<i class="ico_dropdown"></i>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
								</p>
							</li>
							<!-- (D) 댓글 내용이 2줄 미만인 경우 아래와 같이 노출합니다. -->
							<li class="mm_event-reply-item">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level2.png' }"
									></i>i******
								</p>
								<p class="text_reply">
									<b>만족합니다!</b>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
								</p>
							</li>

							<!--
								(D) 내가 쓴 댓글일 경우 mm_event-reply-item 요소에 T=item-my 클래스와 회원 등급에 맞는 'T=등급' 클래스를 추가합니다.
								등급: level1 ~ level5
							-->
							<!-- 내가 쓴 댓글 수정 -->
							<li class="mm_event-reply-item T=item-my">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level4.png' }"
									></i>a****
								</p>
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
							</li>

							<!-- 내가 쓴 댓글 -->
							<li class="mm_event-reply-item T=item-my T=level4">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level4.png' }"
									></i>a****<b class="text_tag">내 댓글</b>
								</p>
								<p
									class="text_reply"
									data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
									title="열기"
								>
									<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
									<i class="ico_dropdown"></i>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
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
							</li>
							<li class="mm_event-reply-item T=item-my T=level4">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level4.png' }"
									></i>a****<b class="text_tag">내 댓글</b><i class="ico_secret"></i>
								</p>
								<p
									class="text_reply"
									data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
									title="열기"
								>
									<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
									<i class="ico_dropdown"></i>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
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
							</li>

							<!-- 내가 쓴 비공개 댓글 -->
							<li class="mm_event-reply-item">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level1.png' }"
									></i>k****
								</p>
								<p
									class="text_reply"
									data-switch="{ '_isParent': true, '_defaultTitle': '열기', '_title': '닫기' }"
									title="열기"
								>
									<b>1번! 거금주고 스타일바꿔보려고 산옷<br>왜때문에 편한항상 입던스타일에만 손이가고..<br>비싸다고 처분도 못하고 자리만 차지하고ㅠ 언젠가 입을날이 올것같고 안입던스타일이라 매칭할 아이템도 부족해서 더 손안가고.ㅠㅠ 새로운스타일 도전은 저렴이로 해야한다는 교훈을 얻었지만;;새로운 도전은 계속되어야겠죠잉?ㅋㅋㅋ</b>
									<i class="ico_dropdown"></i>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
								</p>
							</li>

							<!-- 비공개 댓글 -->
							<li class="mm_event-reply-item">
								<p class="text_user">
									<i
										class="mm_bg-contain image_grade"
										data-lazyload="{ '_src': '../image/common/level2.png' }"
									></i>h********
								</p>
								<p class="text_reply">
									비공개 댓글입니다<i class="ico_secret"></i>
								</p>
								<p class="text_date">
									2020.05.26 11:12:00
								</p>
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

<!-- 현재 페이지 스크립트 -->
<!-- <script src="../js/app_page-event.js"></script> -->