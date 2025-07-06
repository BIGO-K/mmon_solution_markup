<script setup lang="ts">
	import { ref } from 'vue';
	import Api from '@markup/api';
	import LazyloadMUI from '@mui/LazyloadMUI.vue';

	const cancelOrderDetailAPI = ref<CancelOrderDetailAPI>();

	// api
	Api.getAll([
		{ key: `ORDER_CANCEL_DETAIL`, ref: cancelOrderDetailAPI },
	]);
</script>

<template>
	<h3 class="mm_heading">
		<b>주문 취소</b>
	</h3>
	<div class="m_my-order-fin">
		<p>주문 취소가 완료되었습니다</p>
		<div class="mm_btn_box">
			<a
				class="mm_btn T=line T=dark"
				href="#"
			>
				<b>메인으로 이동</b>
			</a>
			<a
				class="mm_btn T=primary"
				href="#"
			>
				<b>취소내역 확인</b>
			</a>
		</div>
	</div>

	<!-- 주문 취소 내역 -->
	<div class="mm_order-item">
		<label class="mm_form-check">
			<input
				type="checkbox"
				data-check="{ '_type': 'check_all', '_group': 'dev_check-product' }"
			>
			<b class="mm_block">
				<i class="ico_form-check"></i>
				<span class="text_label">전체선택</span>
			</b>
		</label>
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=xs T=line btn_cart"
			>
				<i class="ico_cart"></i><b>장바구니 담기</b>
			</button>
		</div>
		<section
			v-for="pack in cancelOrderDetailAPI?.cancel_detail.packs"
			:key="pack.shipping_rule_id"
			class="mm_order-item-seller"
		>
			<div class="mm_order...seller-head">
				<p class="text_ship">
					<i class="ico_ship"></i>
					<span
						v-if="pack.paid_shipping_price > 0"
						class="text_price"
					><strong>{{ pack.paid_shipping_price }}</strong></span>
					<span v-else>무료배송</span>
				</p>
			</div>
			<ul>
				<li
					v-for="item in pack.order_items"
					:key="item.id"
				>
					<div class="mm_flex">
						<label
							class="mm_form-check"
							:class="{ 'T=disabled': item.goods.is_soldout }"
						>
							<input
								v-if="item.goods.is_soldout"
								type="checkbox"
								data-check="{ '_group': 'dev_check-product' }"
							>
							<b class="mm_block">
								<i class="ico_form-check"></i>
								<span class="mm_ir-blind text_label">상품 선택</span>
							</b>
						</label>
						<div class="mm_product-item T=single">
							<a href="#">
								<figure>
									<div class="mm_image-scale">
										<LazyloadMUI
											class="mm_bg-cover image_product"
											:_src="item.goods.thumbnail_url"
										></LazyloadMUI>
									</div>
									<p
										v-if="item.goods.is_soldout"
										class="text_soldout"
									>SOLD OUT</p>
									<figcaption>
										<p class="text_brand">{{ item.goods.brand_name }}</p>
										<p class="text_product">{{ item.goods.name }}</p>
										<p class="text_option">{{ item.goods.option_name }}</p>
									</figcaption>
								</figure>
							</a>
						</div>
						<p class="text_seller">
							<i class="ico_shop"></i>{{ item.seller_name }}
						</p>
						<div class="mm...order-price">
							<p class="text_price">
								<strong>{{ item.paid_price }}</strong>
							</p>
						</div>
					</div>
				</li>
			</ul>
		</section>

		<label class="mm_form-check">
			<input
				type="checkbox"
				data-check
			>
			<b class="mm_block">
				<i class="ico_form-check"></i>
				<span class="text_label">전체선택</span>
			</b>
		</label>
		<div class="mm_btn_box">
			<button
				type="button"
				class="mm_btn T=xs T=line btn_cart"
			>
				<i class="ico_cart"></i><b>장바구니 담기</b>
			</button>
		</div>
	</div>

	<!-- 유의사항 -->
	<div class="mm_note">
		<ul>
			<li>판매자의 <strong>승인 전까지 주문은 실제로 취소되지 않으며,</strong> 사정에 따라 <strong>취소 거부</strong>가 될 수 있습니다.</li>
			<li>노출되는 가격 및 옵션은 현재와 다를 수 있습니다.</li>
			<li>품절 등 장바구니에 담을 수 없는 상품은 체크하실 수 없습니다.</li>
			<li>취소 수량과 별개로 장바구니에는 1개의 수량만 담깁니다.</li>
		</ul>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
	(function () {

		//< 전체 선택 공통 제어
		mm.event.on('.mm_order-item .mm_form-check input', 'change', function () {

			var $this = this;
			var $productCheck = mm.find('.mm_order-item .mm_form-check input');
			var $bottomCheckAll = $productCheck[$productCheck.length - 1]; // 하단 전체선택 체크박스

			var data = mm.data.get($this, 'data-check');
			var _isCheckAll = (data._type === 'check_all' || $this === $bottomCheckAll) ? true : false;

			if (!$this.checked) _isCheckAll = false;
			else if (mm.is.empty(mm.find(mm.string.template('[${KEY}*=${GROUP}]:not([${KEY}*="check_all"]):not(:checked)', { KEY: 'data-check', GROUP: 'dev_check-product' })))) _isCheckAll = true;

			$bottomCheckAll.checked = _isCheckAll;

			if ($this === $bottomCheckAll) mm.find(mm.string.template('[${KEY}*=${TYPE}]', { KEY: 'data-check', TYPE: 'check_all' }))[0].click();

		});
		//> 전체 선택 공통 제어

	})();
</script> -->