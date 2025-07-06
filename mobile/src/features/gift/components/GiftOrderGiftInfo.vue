<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	// TODO mm_gift-list 컴포넌트로 분리해서 사용

	defineProps<{
		templates: OrderGift[];
	}>();
</script>

<template>
	<!-- 사은품 정보 -->
	<div
		class="mm_dropdown T=order S=on m_popup-order-gift"
		data-dropdown
	>
		<button
			type="button"
			class="btn_dropdown"
			title="펼쳐보기"
		>
			<b>사은품 정보</b>
			<i class="ico_dropdown"></i>
		</button>
		<div class="mm_dropdown-item">
			<div class="mm_dropdown-item-inner">
				<div class="mm_inner">
					<section
						v-for="groups, index in templates"
						:key="groups.goods_id"
					>
						<h4 class="mm_strapline">
							<b>사은품 선택<span v-if="index > 0">(선택{{ index + 1 }})</span></b>
						</h4>
						<ul class="mm_gift-list">
							<li
								v-for="gift in groups.giveaways"
								:key="gift.id"
							>
								<input
									type="radio"
									name="dev_radio-gift"
									data-radio
								>
								<div class="mm_gift-item">
									<i class="ico_form-radio T=circle"></i>
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
							<!-- <li>
								<div class="mm_gift-item">
									<i class="ico_form-radio T=circle"></i>
									<figure>
										<LazyloadMUI
											class="mm_bg-cover image_gift"
											:_src="gift.image_url"
										></LazyloadMUI>
										<figcaption>
											<p class="text_note">
												이미 지급받으신 사은품입니다
											</p>
										</figcaption>
									</figure>
									<div class="mm_btn_box">
										<div class="mm_rside">
											<b class="btn_gift-info">지급대상확인<i class="ico_link T=xs"></i></b>
										</div>
									</div>
								</div>
							</li> -->
							<li>
								<input
									type="radio"
									name="dev_radio-gift"
									data-radio
								>
								<div class="mm_gift-item">
									<i class="ico_form-radio T=circle"></i>
									<p><strong>선택안함</strong>구매상품만 받을게요</p>
								</div>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</div>
	<hr class="mm_line">
</template>

<style src="../_gift.scss" lang="scss"></style>