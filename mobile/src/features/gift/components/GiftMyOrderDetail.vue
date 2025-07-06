<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	// TODO mm_gift-list 컴포넌트로 분리해서 사용

	defineProps<{
		templates: OrderDetailGift[];
	}>();
</script>

<template>
	<!-- 사은품 정보 -->
	<div class="mm_inner m_myorder-detail-gift">
		<h4 class="mm_strapline">
			<b>사은품 정보</b>
		</h4>
		<ul class="mm_gift-list">
			<li
				v-for="gift in templates"
				:key="gift.id"
			>
				<div class="mm_gift-item">
					<figure>
						<LazyloadMUI
							class="mm_bg-cover image_gift"
							:_src="gift.image_url"
						></LazyloadMUI>
						<figcaption>
							<p class="text_name">
								{{ gift.name }}
							</p>
							<p class="text_condition">
								{{ gift.condition_label }}
							</p>
						</figcaption>
					</figure>
					<div class="mm_btn_box">
						<div class="mm_rside">
							<router-link
								class="btn_gift-info"
								:to="{ name: 'ProductGiftTarget' }"
							>
								<b>지급대상확인</b><i class="ico_link T=xs"></i>
							</router-link>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style src="../_gift.scss" lang="scss"></style>