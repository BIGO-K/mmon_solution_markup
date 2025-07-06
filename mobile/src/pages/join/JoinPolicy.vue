<script setup lang="ts">
</script>

<template>
	<h3 class="m_popup-join-title">
		<b>STEP 2</b><strong>약관동의</strong><i class="image_line T=step2"></i>
	</h3>
	<div class="mm_check_box">
		<div class="mm_check-list">
			<ul>
				<li>
					<label class="mm_form-check">
						<input
							type="checkbox"
							data-check="{ '_group': 'agree_check' }"
						>
						<b class="mm_block">
							<i class="ico_form-check"></i>
							<span class="text_label">만 14세 이상 확인</span>
						</b>
					</label>
				</li>
				<li>
					<div class="mm_flex">
						<label class="mm_form-check">
							<input
								type="checkbox"
								data-check="{ '_group': 'agree_check' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">이용약관</span>
							</b>
						</label>
						<router-link
							class="btn_detail"
							:to="{ name: 'Policy', params: { type: 'agreement' } }"
						>
							<b>자세히</b>
						</router-link>
					</div>
				</li>
				<li>
					<div class="mm_flex">
						<label class="mm_form-check">
							<input
								type="checkbox"
								data-check="{ '_group': 'agree_check' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="text_label">개인정보 처리방침</span>
							</b>
						</label>
						<router-link
							class="btn_detail"
							:to="{ name: 'Policy', params: { type: 'privacy' } }"
						>
							<b>자세히</b>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<label class="mm_form-check">
			<input
				type="checkbox"
				data-check="{ '_type': 'check_all', '_group': 'agree_check' }"
			>
			<b class="mm_block">
				<i class="ico_form-check"></i>
				<span class="text_label">전체 동의</span>
			</b>
		</label>
	</div>
	<div class="mm_foot">
		<div class="mm_btn_box">
			<a
				class="mm_btn T=primary"
				href="#"
				@click.prevent="$router.push({ name: 'JoinInfo' })"
			>
				<b>다음으로</b>
			</a>
		</div>
	</div>
</template>