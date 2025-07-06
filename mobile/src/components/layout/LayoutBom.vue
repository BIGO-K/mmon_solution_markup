<script setup lang="ts">
	withDefaults(defineProps<{
			type?: '' | 'alert' | 'prompt'
		}>(),
		{
			type: '',
		});

	const emit = defineEmits<{
		(__e: 'close:bom', __is: boolean, __prompt?: Record<string, unknown>): void;
	}>();

	// TODO prompt일 때 전달할 값 세팅 필요
</script>

<template>
	<!-- bom -->
	<!--
		(D) BOM이 생성될 때 html 태그에 S=noscroll 클래스를 추가합니다.
		현재 bom에 해당하는 mm_bom-item에 S=on 클래스를 추가합니다.
	-->
	<div class="mm_bom">
		<div class="mm_bom-items">
			<div
				class="mm_bom-item S=on"
			>
				<div class="mm_bom-item-dim"></div>
				<div class="mm_bom-item-inner">
					<i class="ico_bom-alert"></i>
					<div class="mm_bom...content">
						<h2><b><slot name="title"></slot></b></h2>
						<p><slot name="content"></slot></p>
						<ul
							v-if="type === 'prompt'"
							class="mm_bom...content-form"
						>
							<li>
								<div class="mm_form-text">
									<button
										type="button"
										class="btn_text-clear"
									>
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<input
											type="text"
											class="textfield"
											data-text
										>
										<i class="bg_text"></i>
										<span class="text_placeholder">플레이스홀더</span>
									</label>
								</div>
							</li>
							<li>
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
											data-text
										></textarea>
										<i class="bg_text"></i>
										<span class="text_placeholder">플레이스홀더 2줄<br>플레이스홀더 2번째 줄</span>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-select">
									<label>
										<select data-select>
											<option value="0">셀렉트 기본</option>
											<option value="1">셀렉트 세컨</option>
											<option value="2">셀렉트 서드</option>
										</select>
										<b class="text_selected"></b>
										<i class="ico_form-select"></i>
									</label>
								</div>
							</li>
							<li>
								<div class="mm_form-text T=lg">
									<button
										type="button"
										class="btn_text-pw"
									>
										<i class="ico_pw-hide"></i><b class="mm_ir-blind">비밀번호 보기</b>
									</button>
									<button
										type="button"
										class="btn_text-clear"
									>
										<i class="ico_form-clear"></i><b class="mm_ir-blind">지우기</b>
									</button>
									<label>
										<input
											type="password"
											class="textfield"
											data-text
										>
										<i class="bg_text"></i>
										<span class="text_placeholder">비밀번호 영문/특수문자/숫자 8~16자</span>
									</label>
								</div>
							</li>
						</ul>
					</div>
					<div class="mm_bom...btn">
						<div class="mm_flex T=equal">
							<button
								v-if="type !== 'alert' "
								type="button"
								class="btn_no"
								@click="emit('close:bom', false);"
							>
								<b>취소</b>
							</button>
							<!-- XXX 원하는 액션 어떻게 취함 ? -->
							<button
								type="button"
								class="btn_ok"
								@click="emit('close:bom', true, {});"
							>
								<b>확인</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>