<script setup lang="ts">
	withDefaults(defineProps<{
			isTitle: boolean;
			modalClass?: string
		}>(),
		{
			isTitle: true,
			modalClass: '',
		});
</script>

<template>
	<!-- 모달 -->
	<!--
		(D) 모달이 생성될 때 html 태그에 S=noscroll 클래스를 추가합니다.
		현재 모달에 해당하는 mm_modal-item에 S=on 클래스를, 이전 모달은 S=old 클래스를 추가합니다.
		모달 스타일 변경을 위한 페이지 클래스는 mm_modal-item에 추가합니다.
	-->
	<div class="mm_modal">
		<div class="mm_modal-items">
			<!-- (D) 기본 현재 on 모달 -->
			<div
				class="mm_modal-item S=on"
				:class="modalClass"
			>
				<div class="mm_modal-item-dim"></div>
				<div class="mm_modal-item-inner">
					<div
						v-if="isTitle"
						class="mm_modal...head"
					>
						<h2><b><slot name="title"></slot></b></h2>
						<button
							type="button"
							class="btn_modal-close"
						>
							<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
						</button>
					</div>
					<div class="mm_modal...content">
						<!-- 모달 타이틀이 없을 경우 -->
						<button
							v-if="!isTitle"
							type="button"
							class="btn_modal-close"
						>
							<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
						</button>

						<div class="mm_scroller">
							<slot name="content"></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>