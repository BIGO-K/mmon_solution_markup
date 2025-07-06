<script setup lang="ts">
	import LazyloadMUI from '@mui/LazyloadMUI.vue';
</script>

<template>
	<h3 class="mm_title">
		<b>체험단 후기</b>
	</h3>

	<!-- 상세 타이틀 -->
	<div class="mm_event-head">
		<div class="mm_inner">
			<h4><b>엠몬스타 하이커 에어 백팩 WHITE 후기</b></h4>
			<a
				class="btn_home"
				href="#"
			>
				<i class="ico_back"></i><b>메인으로</b>
			</a>
		</div>
	</div>

	<div class="mm_inner">
		<div class="m_experience-detail">
			<!-- 체험단 정보 -->
			<div class="m_experience-detail-info">
				<b class="text_user">박효*</b>
				<b class="text_date">2022.05.14</b>
				<b class="text_view">조회수<strong>40</strong></b>
				<div class="mm_product-item T=single">
					<a href="#">
						<figure>
							<div class="mm_image-scale">
								<LazyloadMUI
									class="mm_bg-cover image_product"
									:_src="'/public/images/dummy/prod_x1_1.png'"
								></LazyloadMUI>
							</div>
							<figcaption>
								<p class="text_brand">M.Mon 엠몬스타</p>
								<p class="text_product">N212UTS510 유니 타이다이 그래픽 반팔 티셔츠 GRAPE</p>
								<p class="text_price"><strong>90,150</strong></p>
							</figcaption>
						</figure>
					</a>
				</div>
			</div>

			<!-- 체험단 리뷰 사진 -->
			<div class="m_experience-detail-photo">
				<ul>
					<li>
						<i class="image_review">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/dummy/product_thumbnail_1.jpg'"
								alt=""
							></LazyloadMUI>
						</i>
					</li>
					<li>
						<i class="image_review">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/dummy/event_detail_2.png'"
							></LazyloadMUI>
						</i>
					</li>
					<li>
						<i class="image_review">
							<LazyloadMUI
								:_tag="'img'"
								:_src="'/public/images/dummy/experience_banner1.png'"
							></LazyloadMUI>
						</i>
					</li>
				</ul>
			</div>

			<!-- 체험단 리뷰 -->
			<div class="m_experience-detail-content">
				<b class="text_star">
					<i
						class="ico_star"
						title="별점"
					></i>
					<span>4.5</span>
				</b>
				<b class="text_size">155cm/45kg/230mm</b>
				<p class="text_review">
					안녕하세요. 이번에 하이커 에어 백팩 체험단에 당첨되어 리뷰를 남기게 되었습니다.
					이번에 하이커 에어 백팩 체험단에 당첨되어 리뷰를 남기게 되었습니다. 이번에 체험단 당첨되어 리뷰를 남기게 되었습니다.
					제가 받은 제품은 WHITE 컬러인데요. 저는 "화이트 백팩은 때가 잘 타서 관리하기 힘들고 코디하기도 어려운 부담스러운 컬러"라고 생각했었는데
					이 제품은 중간에 블랙이 섞여 있어서 부담스럽지 않은 컬러조합이여서 만족했습니다. 가방 중앙에 시그니처 로고가 들어가 심심하지 않았고,
					지퍼 안엔 노트북을 넣고 다닐 수 있는 공간과 큰 수납공간이 있어 들고 다닐 짐이 많은 학생분들, 대학생분들에게도 좋다고 생각했습니다.
					지갑이랑 에어팟케이스를 같이 주는 센스 있는 패키징까지..!! 디자인도 이뻐서 멋스럽게 코디하기도 아주 괜찮았습니다.
					새내기 느낌으로 저는 캐주얼하게 맨투맨과 같이 코디해봤는데 아주 잘 어울리더라고요.
					신학기 백팩으로, 기능성과 멋스러움 둘다 갖춘 이 백팩, 아주 강추드립니다ㅎㅎ
				</p>
				<div class="mm_satisfy">
					<dl><dt>사이즈</dt><dd>정사이즈예요</dd></dl>
					<dl><dt>색상</dt><dd>화면과 같아요</dd></dl>
					<dl><dt>핏</dt><dd>적당해요</dd></dl>
				</div>
				<p class="text_thumb">
					이 리뷰가 도움이 되었다면 <strong>클릭!</strong>
					<button
						type="button"
						class="btn_thumb"
						data-switch
					>
						<i class="ico_thumb"></i><b>1,000</b>
					</button>
				</p>
			</div>

			<div class="mm_foot">
				<div class="mm_btn_box">
					<a
						class="mm_btn T=line T=dark"
						href="#"
					>
						<b>목록으로</b>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style src="./_experience.scss" lang="scss"></style>