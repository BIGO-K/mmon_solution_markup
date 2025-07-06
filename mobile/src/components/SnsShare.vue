<script setup lang="ts">
</script>

<template>
	<div class="mm_sns">
		<div class="mm_sns-dim"></div>
		<div class="mm_sns-list">
			<ul>
				<li>
					<button
						type="button"
						class="btn_sns-url"
					>
						<b>URL</b>
					</button>
				</li>
				<li>
					<a
						class="btn_sns-kakaotalk"
						href="#"
						target="_blank"
						title="새 창 열림"
					>
						<i class="ico_sns-kakao"></i><b class="mm_ir-blind">카카오톡 공유</b>
					</a>
				</li>
			</ul>
			<button
				type="button"
				class="btn_sns-close"
			>
				<i class="ico_sns-close"></i><b class="mm_ir-blind">공유 모달 닫기</b>
			</button>
		</div>
	</div>
</template>