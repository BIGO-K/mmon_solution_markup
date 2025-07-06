<script setup lang="ts">

</script>

<template>
	<a
		class="btn_size"
		href="_modal_mySize.html"
	>
		<i class="ico_size"></i><b>My 사이즈</b>
	</a>
</template>

<style lang="scss">
	.m_my-member-info {
		~ a {
			.ico_size::before {
				width: 22px;
				height: 18px;
				background-color: #5c5c5c;
			}
		}

		+ .btn_size {
			margin-left: 6px;
		}
	}
</style>