<script setup lang="ts">
</script>

<template>
	<h3
		v-if="'간편로그인 아닐때'"
		class="m_popup-join-title"
	>
		<b>STEP 4</b><strong>가입완료</strong><i class="image_line T=step4"></i>
	</h3>
	<p class="text_complete">
		<strong>회원가입 완료!</strong><span>로그인 후</span>다양한 상품과<br> 혜택을 만나보세요
	</p>
	<div class="mm_btn_box">
		<router-link
			class="mm_btn T=lg T=primary"
			:to="{ name: 'Login' }"
		>
			<b>로그인</b>
		</router-link>
		<router-link
			class="mm_btn T=lg T=line T=primary"
			to="/"
		>
			<b>메인으로 가기</b>
		</router-link>
	</div>
</template>

<!-- 현재 페이지 스크립트 -->
<!-- <script>
(function () {

	// 꽃가루 효과
	var $container = mm.find('.mm_page-content');
	var $canvas = document.createElement('canvas');
	var context = $canvas.getContext('2d');

	$canvas.width = $container[0].offsetWidth;
	$canvas.height = $container[0].offsetHeight;
	mm.element.style($canvas, { 'position': 'absolute', 'top': 0, 'left': 0 });

	mm.element.prepend($container, $canvas);

	// 꽃가루 셋팅
	var _loop = 2; // 꽃가루 반복 횟수
	var _flakeNum;
	var flakeData = (function () {

		var _maxNum = _flakeNum = Math.round(Math.max($canvas.width, $canvas.height) / 15); // 최대갯수
		var colors = ['#61dca7', '#e6e6e6', '#48cc5a', '#ffc400', '#ff9294', '#ff80b3', '#ff7e5d', '#79de4f'];
		var alphas = [1, 0.5]; // 투명도
		var sizes = [12, 6]; // width/height 공통

		var base = {
			flakes: [], // 꽃가루 목록
			// 값 설정
			set: function (__flake) {

				__flake._x = Math.random() * $canvas.width; // x 좌표
				__flake._y = 0; // y 좌표
				__flake._width = sizes[Math.floor(Math.random() * sizes.length)]; // 너비
				__flake._height = sizes[Math.floor(Math.random() * sizes.length)]; // 높이
				__flake._color = colors[Math.floor(Math.random() * colors.length)]; // 색상
				__flake._density = (Math.random() * _maxNum) * 2 / _maxNum; // 밀도
				__flake._degree = (Math.random() * 360) * Math.PI / 180; // 각도
				__flake._alpha = alphas[Math.floor(Math.random() * alphas.length)]; // 투명도

				// x축 잘림 방지 _x값 조정
				if (__flake._x > $canvas.width - Math.max(__flake._width, __flake._height)) __flake._x = __flake._x - Math.max(__flake._width, __flake._height);
				if (__flake._x < Math.max(__flake._width, __flake._height)) __flake._x = __flake._x + Math.max(__flake._width, __flake._height);

			}
		};

		for (var _i = 0; _i < _maxNum; _i++) {
			base.flakes[_i] = {};
			base.set(base.flakes[_i]);
			base.flakes[_i]._y = Math.random() * $canvas.height - $canvas.height - 20; // y 좌표 - 처음 셋팅시에만 랜덤값
		}

		return base;

	})();

	// 꽃가루 생성
	var flakeAnimation;
	function drowFlake () {

		if (flakeData.flakes.length == 0) {
			cancelAnimationFrame(flakeAnimation);

			return;
		}

		context.clearRect(0, 0, $canvas.width, $canvas.height);

		for (var _i = 0; _i < flakeData.flakes.length; _i++) {
			var flake = flakeData.flakes[_i];

			context.fillStyle = flake._color;
			context.globalAlpha = flake._alpha;
			context.globalCompositeOperation = 'destination-over'; // 겹침시 새 꽃가루가 뒤로

			if (flake._degree === 0) {
				context.fillRect(flake._x, flake._y, flake._width, flake._height);
			}
			else {
				var _halfWidth = (flake._width / 2);
				var _halfHeight = (flake._height / 2);

				context.save(); // 캔버스 위치 저장
				context.translate(flake._x + _halfWidth, flake._y + _halfHeight); // 캔버스 중심좌표 꽃가루 중심으로 이동
				context.rotate(flake._degree);
				context.fillRect(-_halfWidth, -_halfHeight, flake._width, flake._height);
				context.restore(); // 캔버스 위치 복원
			}
		}

		updateFlake();
		flakeAnimation = requestAnimationFrame(drowFlake);
	};

	// 업데이트
	var _angle = 0;
	var _flakeCount = _flakeNum;

	function updateFlake () {

		_angle += 0.01;

		for (var _i = 0; _i < flakeData.flakes.length; _i++) {
			var flake = flakeData.flakes[_i];

			// 꽃가루 이동 스타일
			if (_i % 5 == 0) {
				// 좌우
				flake._x += Math.sin(_angle + flake._density) * 1;
				flake._y += Math.cos(_angle + flake._density) + 1 + flake._width / 7;
			}
			else {
				// 직선
				flake._y += flake._density + 1; // 밀도 + 이동속도
			}

			// 꽃가루 순환
			if (flake._y > $canvas.height || flake._x > $canvas.width || flake._x < -Math.max(flake._width, flake._height)) {
				if (_flakeCount >= 0) {
					_flakeCount--;

					if (_flakeCount === 0) {
						_loop--;

						if (_loop >= 1) _flakeCount = _flakeNum;
					}

					if (_loop === 1) flakeData.flakes.find(function (__$flake, __index) { if (__$flake === flake) flakeData.flakes.splice(__index, 1); });
				}
				flakeData.set(flake);
			}

			var spin = (flake._width != flake._height) ? 0.4 : 0.1; // 직사각형이 더 빠른회전 확률
			flake._degree += Math.random().toFixed(2) * spin;
		}

	};

	drowFlake();

})();
</script> -->