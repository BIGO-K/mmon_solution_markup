<script setup lang="ts">
	import { ref } from 'vue';
	// import { useRouter } from 'vue-router';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import LayoutPopup from '@/components/layout/LayoutPopup.vue';
	import Bom from '@/components/layout/LayoutBom.vue';

	const listAPI = ref<LikeProductFolderAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_WISH_GOODS_FOLDERS`, ref: listAPI },
	]);

	// const router = useRouter();
	const _isBomNewFolder = ref(false);

	const newFolderBomHandler = (__is: boolean) => {

		_isBomNewFolder.value = false;
		if (__is) console.log(_isBomNewFolder.value); // TODO 입력한 글자수 체크 후 동작해야함

	};
</script>

<template>
	<LayoutPopup>
		<template #title>
			<h1><b>폴더 선택</b></h1>
		</template>

		<template #content>
			<div class="m_popup-like-folder">
				<h3><b>상품을 담을 폴더를 선택하세요</b></h3>
				<button
					type="button"
					class="btn_add-folder"
				>
					<i class="ico_add"></i><b>새 폴더 추가하기</b>
				</button>
				<ul>
					<li
						v-for="folder in listAPI?.wish_goods_folders"
						:key="folder.id"
					>
						<button type="button">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="folder.recent_goods_thumbnail_url"
							></LazyloadMUI>
							<b>{{ folder.name }}<small>{{ folder.records_count }}</small></b>
						</button>
					</li>
				</ul>
			</div>
		</template>
	</LayoutPopup>

	<Bom
		v-if="_isBomNewFolder"
		@close:bom="newFolderBomHandler"
	>
		<template #title>
			새 폴더 추가하기
		</template>
		<template #content>
			<!-- TODO 작업 필요 -->
		</template>
	</Bom>
</template>