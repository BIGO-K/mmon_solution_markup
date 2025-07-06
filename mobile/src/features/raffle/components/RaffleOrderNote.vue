<script setup lang="ts">

</script>

<template>
	<!-- 래플 유의사항 -->
	<div class="mm_note T=line">
		<ul>
			<li>래플 상품은 취소/반품/교환이 불가능합니다.</li>
		</ul>
	</div>
</template>

<style lang="scss">
	@use '../../../assets/scss/common/helper/mixin';
	@use '../../../assets/scss/style/setting/var';

	.m_popup-order-agree {
		> .mm_note {
			margin-top: 25px;
			padding: 15px 14px;
			background-color: #fafafa;
			@include mixin.font(var.$color_text_base '1.4rem');
		}
	}
</style>