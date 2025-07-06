<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';

	const optionAPI = ref<ProductDetailOptionAPI>();

	// api
	Api.getAll([
		{ key: `GOODS_OPTIONS`, ref: optionAPI },
	]);

	const selectOptionIndex = ref<number>();
	const selectSubOptionIndex = ref<number>();
</script>

<template>
	<!-- 옵션 목록 -->
	<!--
		(D) 옵션1 또는 옵션2의 갯수가 6개 이하인 경우 버튼형 옵션을 사용하고, 7개 이상인 경우 셀렉트형 옵션을 사용합니다.
		버튼형 옵션인 경우 '.m_product-option-select' 요소에 'T=select-button' 클래스를 추가합니다.
		모든 옵션은 옵션의 순서와 무관하게 우선 선택이 가능합니다(예: 옵션2부터 선택가능)
	-->
	<div
		v-if="optionAPI != null"
		class="m_product-option-select"
	>
		<!--
			TODO 정책 확인 후 삭제 필요
			* 1부터 선택, 2는 비활성
			* 1 + n = 1 선택 고정, 2 선택
			* n + 1/n = 1 선택, 2 선택
			* 1 + 1 = 비노출, 선택됨(수량) 노출
			* - + 1 / 1 + - = 비노출, 선택됨(수량) 노출
			* - + n = 2 옵션 하나로 노출
			* n + - = 1 옵션 하나로 노출
			* 하나라도 6개 초과이면 셀렉트
			* 버튼 + 셀렉트 조합 없음
		-->
		<!-- (D) 셀렉트형 옵션 + 선택옵션 없는 기본 상태의 옵션 샘플입니다. -->
		<!--
			(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
			이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
		-->
		<template v-if="optionAPI.options.length > 6 || optionAPI.options.map(__option => __option.sub).some(__sub => __sub.length > 6)">
			<div
				class="mm_dropdown"
				data-dropdown="{ '_group': 'dev_option-select' }"
			>
				<h6><b>옵션1</b></h6>
				<!-- (D) 옵션을 선택하면 'btn_dropdown > b' 요소의 텍스트를 "옵션명" 에서 선택한 옵션명으로 변경합니다 -->
				<button
					type="button"
					class="btn_dropdown"
					title="펼쳐보기"
				>
					<b>{{ selectOptionIndex != null ? optionAPI.options[selectOptionIndex].name : '옵션명1' }}</b><i class="ico_dropdown T=bold"></i>
				</button>
				<div class="mm_dropdown-item">
					<div class="mm_dropdown-item-inner">
						<div class="mm_scroller">
							<ul>
								<!-- <li>
									<button
										type="button"
										class="btn_option S=option-select"
									>
										<b>-</b>
									</button>
								</li> -->
								<li
									v-for="option, index in optionAPI.options"
									:key="option.name"
								>
									<button
										type="button"
										class="btn_option"
										@click="selectOptionIndex = index"
									>
										<b>{{ option.name }}</b>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				v-if="selectOptionIndex != null"
				class="mm_dropdown"
				data-dropdown="{ '_group': 'dev_option-select' }"
			>
				<h6><b>옵션2</b></h6>
				<button
					type="button"
					class="btn_dropdown"
					title="펼쳐보기"
				>
					<b>옵션명2</b><i class="ico_dropdown T=bold"></i>
				</button>
				<div class="mm_dropdown-item">
					<div class="mm_dropdown-item-inner">
						<div class="mm_scroller">
							<ul>
								<li
									v-for="subOption in optionAPI.options[selectOptionIndex].sub"
									:key="subOption.code"
								>
									<button
										v-if="subOption.qty !== 0"
										type="button"
										class="btn_option"
									>
										<b>{{ subOption.name }}</b><b v-if="subOption.qty < 6">({{ subOption.qty }}개)</b>
									</button>
									<span
										v-else
										class="mm_flex btn_option"
										title="품절"
									>
										<b>{{ subOption.name }}</b><b>(품절)</b>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</template>

		<template v-else>
			<!-- (D) 버튼형 옵션 + 옵션1을 선택 + 옵션 2 선택옵션 없는 상태의 옵션 샘플입니다. -->
			<!--
				(D) 옵션 등록시 옵션1 또는 옵션2만 입력한 경우 입력하지 않은 옵션은 '-'로 사용하게되며, 해당 옵션은 선택된 옵션으로 간주하고 section 요소에 display:none 스타일을 추가하여 숨김처리 합니다.
				이 경우 숨겨진 옵션('-')이 아닌 다른 옵션 항목 'h6' 요소는 옵션1 또는 옵션2의 명칭이 아닌 '옵션' 명칭을 사용합니다.
			-->
			<!-- (D) 옵션이 선택된 경우 btn_option 요소에 S=option-select 클래스를 추가합니다. -->
			<section>
				<h6><b>옵션1</b></h6>
				<ul>
					<li
						v-for="option, index in optionAPI.options"
						:key="option.name"
					>
						<button
							v-if="'품절 아님'"
							type="button"
							class="btn_option"
							:class="{'S=option-select': selectOptionIndex === index}"
							@click="() => {selectOptionIndex = index; selectSubOptionIndex = undefined}"
						>
							<b>{{ option.name }}</b>
						</button>
						<span
							v-else
							class="btn_option"
							title="품절"
						>
							<b>네이비</b>
							<svg>
								<line
									x1="0"
									y1="100%"
									x2="100%"
									y2="0"
									stroke="#cdcdcd"
									stroke-width="1"
								/>
							</svg>
						</span>
					</li>
				</ul>
			</section>
			<section v-if="selectOptionIndex != null">
				<h6><b>옵션2</b></h6>
				<ul>
					<!-- <li>
						<button
							type="button"
							class="btn_option S=option-select"
						>
							<b>-</b>
						</button>
					</li> -->
					<li
						v-for="subOption, index in optionAPI.options[selectOptionIndex].sub"
						:key="subOption.code"
					>
						<button
							v-if="subOption.qty !== 0"
							type="button"
							class="btn_option"
							:class="{'S=option-select': selectSubOptionIndex === index}"
							@click="selectSubOptionIndex = index"
						>
							<b>{{ subOption.name }}</b>
						</button>
						<span
							v-else
							class="btn_option"
							title="품절"
						>
							<b>{{ subOption.name }}</b>
							<svg>
								<line
									x1="0"
									y1="100%"
									x2="100%"
									y2="0"
									stroke="#cdcdcd"
									stroke-width="1"
								/>
							</svg>
						</span>
					</li>
				</ul>
			</section>
		</template>
	</div>
</template>