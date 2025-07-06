<script setup lang="ts">
	import { ref, watch, computed } from 'vue';

	interface SelectProp {
		/** @prop { string } `default: null` - 이미지 경로 */
		modelValue: string;
		/** @prop `default: null` - _src가 없을 때 추가로 불러올 이미지 경로 */
		_isDisabled?: boolean;
	}

	const prop = withDefaults(defineProps<SelectProp>(),
		{
			modelValue: ``,
			_isDisabled: false,
		}
	);

	const emit = defineEmits<{
		(__e: 'update:modelValue', __value: string): void;
	}>();

	const $ui = ref<HTMLSelectElement>();
	const value = computed<string>({
		get() {
			return prop.modelValue;
		},
		set(__value: string) {
			emit('update:modelValue', __value);
		}
	});
	const _selectedText = ref(``);

	watch([$ui, value], () => {

		if ($ui.value != null) {
			if ($ui.value.selectedIndex < 0) $ui.value.selectedIndex = 0;
			_selectedText.value = $ui.value.selectedOptions[0].text;
		}

	}, {
		flush: `post`
	});
</script>

<template>
	<div class="mm_form-select">
		<label>
			<select
				ref="$ui"
				:value="value"
				data-select
				@change="__e => value = (__e.target as HTMLSelectElement).value"
			>
				<slot></slot>
			</select>
			<b class="text_selected">{{ _selectedText }}</b>
			<i class="ico_form-select"></i>
		</label>
	</div>
</template>