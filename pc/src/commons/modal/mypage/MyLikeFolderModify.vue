<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
	import ModalLayout from '@/components/Modal.vue';
</script>

<template>
	<ModalLayout>
		<template #header>
			<h2><b>폴더 수정하기</b></h2>
			<button
				type="button"
				class="btn_modal-close"
			>
				<b class="mm_ir-blind">모달 닫기</b><i class="ico_modal-close"></i>
			</button>
		</template>

		<template #content>
			<div class="m_modal-my-folder">
				<div class="m...folder-head">
					<div class="mm_lside">
						<button
							type="button"
							class="btn_add-folder"
						>
							<i class="ico_add"></i><b>새 폴더 추가하기</b>
						</button>
						<p class="text_sort">
							<i class="ico_sort"></i>를 드래그하여 원하는 위치로 옮기세요
						</p>
					</div>
					<div class="mm_rside">
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line btn_sort-edit"
							>
								<i class="ico_modify"></i><b>순서편집</b>
							</button>
							<button
								type="button"
								class="mm_btn T=xs T=line btn_sort-cancel"
							>
								<i class="ico_modify"></i><b>편집취소</b>
							</button>
							<button
								type="button"
								class="mm_btn T=xs T=primary btn_sort-complete"
							>
								<b>저장</b>
							</button>
						</div>
					</div>
				</div>
				<ul>
					<!-- (D) 기본폴더는 수정, 삭제, 순서이동이 불가능합니다 -->
					<li>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sort"></i><b class="mm_ir-blind">순서이동</b>
						</button>
						<LazyloadMUI
							class="mm_bg-cover image_product"
							:_src="'/public/images/dummy/prod_x1_1.png'"
						></LazyloadMUI>
						<p class="text_folder">
							기본폴더<small>10</small>
						</p>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sort"></i><b class="mm_ir-blind">순서이동</b>
						</button>
						<i class="ico_like"></i>
						<p class="text_folder">
							내맘대로<small>20</small>
						</p>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line T=light"
							>
								<b>수정</b>
							</button>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
							</button>
						</div>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sort"></i><b class="mm_ir-blind">순서이동</b>
						</button>
						<i class="ico_like"></i>
						<p class="text_folder">
							구매각<small>10</small>
						</p>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line T=light"
							>
								<b>수정</b>
							</button>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
							</button>
						</div>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sort"></i><b class="mm_ir-blind">순서이동</b>
						</button>
						<LazyloadMUI
							class="mm_bg-cover image_product"
							:_src="'/public/images/dummy/prod_x1_2.png'"
						></LazyloadMUI>
						<p class="text_folder">
							살까말까고민중<small>110</small>
						</p>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line T=light"
							>
								<b>수정</b>
							</button>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
							</button>
						</div>
					</li>
					<li>
						<button
							type="button"
							class="btn_sort-handler"
						>
							<i class="ico_sort"></i><b class="mm_ir-blind">순서이동</b>
						</button>
						<LazyloadMUI
							class="mm_bg-cover image_product"
							:_src="'/public/images/dummy/prod_x1_3.png'"
						></LazyloadMUI>
						<p class="text_folder">
							월급들어오면<small>55</small>
						</p>
						<div class="mm_btn_box">
							<button
								type="button"
								class="mm_btn T=xs T=line T=light"
							>
								<b>수정</b>
							</button>
							<button
								type="button"
								class="btn_remove"
							>
								<i class="ico_remove"></i><b class="mm_ir-blind">폴더 삭제</b>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</template>
	</ModalLayout>
</template>

<!-- <script>
	(function () {

		//< 순서편집
		mm.event.on('[class*="btn_sort-"]', 'click', function (__e) {

			__e.preventDefault();

			var $el = this.closest('.m_modal-my-folder');
			if (this.classList.contains('btn_sort-handler') || !$el) return;

			var $sortableList = mm.find('ul', $el)[0];
			var _classSort = 'S=folder-sortable';
			var _classChanged = 'S=sortable-changed';// 순서 변경된 요소에 추가되는 클래스

			// 초기화
			function sortableReset() {

				$el.classList.remove(_classSort);

				var data = mm.data.get($el);
				data.sortable.destroy();
				delete data.sortable;

			}

			// 순서편집
			if (this.classList.contains('btn_sort-edit')) {
				$el.classList.add(_classSort);
				mm.data.get($el).sortable = Sortable.create($sortableList, {
					forceFallback: true,
					handle: '.btn_sort-handler',
					onEnd: function (__e) { __e.item.classList.add(_classChanged); },
				});

				_.forEach(mm.find('li', $sortableList), function (__$li, __index) {

					__$li.dataset.sortIndex = __index;

				});

				var $changedItems = mm.find(mm.selector(_classChanged, '.'));
				if ($changedItems.length !== 0) mm.class.remove($changedItems, _classChanged);
			}
			else {
				// 순서편집 취소
				if (this.classList.contains('btn_sort-cancel')) {
					var $sortableItems = $sortableList.children;
					$sortableItems = _.sortBy($sortableItems, [function (__$el) { return __$el.dataset.sortIndex; }]);
					mm.element.append($sortableList, $sortableItems);
				}

				sortableReset();
			}

		});
		//> 순서편집

	})();
</script> -->