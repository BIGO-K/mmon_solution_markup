<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import None from '@/components/None.vue';

	const ListAPI = ref<LikeBrandAPI>();

	// api
	Api.getAll([
		{ key: `MEMBER_WISH_ALL_BRANDS`, ref: ListAPI },
	]);
</script>

<template>
	<div class="m_my-like-brand">
		<!-- (D) src/compontents/None.vue slot에서 노출되는 내용입니다. -->
		<None
			v-if="ListAPI != null && ListAPI.wish_brands.length < 1"
		>
			찜한 브랜드가 없습니다
		</None>
		<ul
			v-else
		>
			<li
				v-for="brand in ListAPI?.wish_brands"
				:key="brand.id"
			>
				<router-link :to="{ name: 'Brandshop', params: { id: brand.id } }">
					<figure>
						<LazyloadMUI
							class="mm_bg-contain image_logo"
							:_src="brand.logo_image_url"
							:_is-error-image="false"
							:_is-ratio="true"
							:title="brand.name"
						></LazyloadMUI>
						<figcaption>{{ brand.name }}</figcaption>
					</figure>
				</router-link>
				<button
					type="button"
					class="btn_remove"
				>
					<b class="mm_ir-blind">선택삭제</b><i class="ico_remove"></i>
				</button>
			</li>
		</ul>
	</div>
</template>