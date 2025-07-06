<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>폴더 선택하기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-like-folder">
				<button
					type="button"
					class="btn_add-folder"
				>
					<i class="ico_add"></i><b>새 폴더 추가하기</b>
				</button>
				<p class="text_tooltip">
					상품을 <strong>담을 폴더</strong>를 선택하세요
				</p>
				<ul>
					<li>
						<button type="button">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'../image/error'"
							></LazyloadMUI>
							<b class="text_folder">기본폴더<small>10</small></b>
						</button>
					</li>
					<li>
						<button type="button">
							<i class="ico_like"></i>
							<b class="text_folder"><span>구매각</span><small>0</small></b>
						</button>
					</li>
					<li>
						<button type="button">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'/public/images/dummy/prod_x1_2.png'"
							></LazyloadMUI>
							<b class="text_folder">폴더1<small>30</small></b>
						</button>
					</li>
					<li>
						<button type="button">
							<LazyloadMUI
								class="mm_bg-cover image_product"
								:_src="'/public/images/dummy/prod_x1_3.png'"
							></LazyloadMUI>
							<b class="text_folder">운동복<small>90</small></b>
						</button>
					</li>
					<li>
						<button type="button">
							<i class="ico_like"></i>
							<b class="text_folder"><span>원피스</span><small>0</small></b>
						</button>
					</li>
				</ul>
			</div>
		</template>
	</ModalLayout>
</template>