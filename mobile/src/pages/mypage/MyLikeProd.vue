<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutSub from '@/components/layout/LayoutSub.vue';

	const folderListAPI = ref<LikeProductFolderAPI>();

	// Api를 클래스로 변경하고 load, change 등 별도 함수로 분리??
	Api.get<LikeProductFolderAPI>(`MEMBER_WISH_GOODS_FOLDERS`, folderListAPI);
</script>

<template>
	<LayoutSub>
		<template #title>
			<h1><b>MY찜</b></h1>
		</template>

		<template #content>
			<!-- 탭메뉴 -->
			<div class="mm_tab_menu m_my-tab">
				<!-- (D) 선택된 탭메뉴에 'S=tab-on' 클래스와 '선택됨' 타이틀을 추가합니다. -->
				<ul class="mm_flex T=equal">
					<li>
						<router-link
							class="S=tab-on"
							:to="{ name: 'MyLikeProd' }"
							title="선택됨"
						>
							<b>찜한 아이템</b>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'MyLikeBrand' }">
							<b>찜한 브랜드</b>
						</router-link>
					</li>
				</ul>
			</div>

			<div
				class="m_mylike-folder"
				data-sortable
			>
				<!-- 상단영역 -->
				<div class="m_mylike-folder-head">
					<div class="mm_lside">
						<button
							type="button"
							class="btn_add-folder"
						>
							<i class="ico_add"></i><b>새 폴더 추가하기</b>
						</button>
						<p class="text_sortable-note">
							<i class="ico_sortable-handle"><span class="mm_ir-blind">순서이동 버튼</span></i>을 눌러 순서를 편집하세요
						</p>
					</div>
					<div class="mm_rside">
						<button
							type="button"
							class="mm_btn T=sm T=line T=light btn_sort-edit"
						>
							<i class="ico_sortable"></i><b>순서편집</b>
						</button>
						<button
							type="button"
							class="mm_btn T=sm T=line T=light btn_sort-cancel"
						>
							<b>취소</b>
						</button>
						<button
							type="button"
							class="mm_btn T=sm T=primary btn_sort-complete"
						>
							<b>저장</b>
						</button>
					</div>
				</div>

				<!-- 폴더목록 -->
				<ul>
					<!-- (D) 기본폴더는 수정, 삭제, 순서이동이 불가능합니다 -->
					<li
						v-for="folder in folderListAPI?.wish_goods_folders"
						:key="folder.id"
					>
						<router-link :to="{ name: 'MyLikeProdDetail', query: { name: folder.name } }">
							<LazyloadMUI
								class="mm_bg-contain image_product"
								:_src="folder?.recent_goods_thumbnail_url"
							></LazyloadMUI>
							<b>{{ folder.name }}<small>{{ folder.records_count }}</small></b>
						</router-link>
						<div class="mm_btn_box">
							<div class="mm_inline">
								<template v-if="folder.name != '기본폴더'">
									<button
										type="button"
										class="mm_btn T=2xs T=line T=lighter btn_modify"
									>
										<b>수정</b>
									</button>
									<button
										type="button"
										class="btn_remove"
									>
										<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
									</button>
									<button
										type="button"
										class="btn_sort-handler"
									>
										<i class="ico_sortable-handle"></i><b class="mm_ir-blind">순서이동</b>
									</button>
								</template>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</template>
	</LayoutSub>
</template>