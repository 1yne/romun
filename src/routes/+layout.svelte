<script>
	import '../app.css';
</script>

<div class="bg h-screen">
	<slot></slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	/* TODO: choose one */

	/* .bg {
		--s: 100px; 
		--c1: #d60202;
		--c2: #29235c;

		--c: var(--c2) 20% 30%;
		background: linear-gradient(135deg, #0000 20%, var(--c), #0000 0),
			repeating-linear-gradient(45deg, var(--c), var(--c1) 0 70%);
		background-size: var(--s) var(--s);
	} */

	/* .bg {
		--b: 1px;
		--s: 80px;

		--c: #0000 75%, #fff 0;
		--p1: from -90deg at calc(50% + var(--b)) calc(100% - var(--b));
		--p2: from -90deg at var(--b) calc(50% - var(--b));
		--e: calc(var(--s) / 2);
		--e-: calc(var(--s) / -2);

		background: conic-gradient(var(--p1), var(--c)), conic-gradient(var(--p1), var(--c)),
			conic-gradient(var(--p2), var(--c)), conic-gradient(var(--p2), var(--c)), #111;
		background-size: var(--s) var(--s);
		animation: g8 10s infinite;
		background-blend-mode: soft-light;
	}

	@keyframes g8 {
		0%,
		2% {
			background-position:
				0 0,
				var(--e) var(--e),
				0 0,
				var(--e) var(--e);
		}
		10%,
		15% {
			background-position:
				0 0,
				var(--e) var(--e),
				0 var(--e),
				var(--e) 0;
		}
		22.5%,
		27.5% {
			background-position:
				var(--e) 0,
				0 var(--e),
				0 var(--e),
				var(--e) 0;
		}
		35%,
		40% {
			background-position:
				var(--e) 0,
				0 var(--e),
				0 0,
				var(--e) var(--e-);
		}
		47.5%,
		52.5% {
			background-position:
				0 0,
				var(--e-) var(--e),
				0 0,
				var(--e) var(--e-);
		}
		60%,
		65% {
			background-position:
				0 0,
				var(--e-) var(--e),
				0 var(--e-),
				var(--e) 0;
		}
		72.5%,
		77.5% {
			background-position:
				var(--e-) 0,
				0 var(--e),
				0 var(--e-),
				var(--e) 0;
		}
		85%,
		90% {
			background-position:
				var(--e-) 0,
				0 var(--e),
				0 0,
				var(--e) var(--e);
		}
		98%,
		100% {
			background-position:
				0 0,
				var(--e) var(--e),
				0 0,
				var(--e) var(--e);
		}
	} */

	.bg:before,
	.bg:after {
		content: '';
		position: fixed;
		z-index: -1;
		inset: 0;
		animation: 4s infinite;
		animation-name: g7-1, g7-2;
	}
	.bg:after {
		animation-name: g7-1, g7-3, g7-4;
	}
	.bg {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))
	}

	@keyframes g7-2 {
		0%,
		50% {
			background-image: radial-gradient(20px at 20px 20px, #000 98%, #0000),
				radial-gradient(20px at 20px 20px, #000 98%, #0000);
			background-color: var(--red);
		}
		50.1%,
		100% {
			background-image: radial-gradient(20px at 20px 20px, var(--red) 98%, #0000),
				radial-gradient(20px at 20px 20px, var(--red) 98%, #0000);
			background-color: #000;
		}
	}
	@keyframes g7-3 {
		0%,
		50% {
			background-image: conic-gradient(at 40px 40px, #0000 270deg, #000 0),
				conic-gradient(at 40px 40px, #0000 270deg, #000 0);
		}
		50.1%,
		100% {
			background-image: conic-gradient(at 40px 40px, #0000 270deg, var(--red) 0),
				conic-gradient(at 40px 40px, #0000 270deg, var(--red) 0);
		}
	}

	@keyframes g7-1 {
		0%,
		10% {
			background-position:
				50% 50%,
				calc(50% - 40px) calc(50% - 40px);
			background-size: 80px 80px;
		}
		16.67% {
			background-position:
				50% 50%,
				calc(50% - 60px) calc(50% - 60px);
			background-size: 120px 120px;
		}
		33.33% {
			background-position:
				50% calc(50% - 120px),
				calc(50% - 60px) calc(50% + 60px);
			background-size: 120px 120px;
		}
		33.34% {
			background-position:
				50% 50%,
				calc(50% - 60px) calc(50% - 60px);
			background-size: 120px 120px;
		}
		45%,
		50% {
			background-position:
				50% 50%,
				calc(50% - 40px) calc(50% - 40px);
			background-size: 80px 80px;
		}
		50.01%,
		55% {
			background-position:
				calc(50% + 40px) 50%,
				50% calc(50% - 40px);
			background-size: 80px 80px;
		}
		66.66% {
			background-position:
				calc(50% + 60px) 50%,
				50% calc(50% - 60px);
			background-size: 120px 120px;
		}
		83.33% {
			background-position:
				calc(50% - 60px) 50%,
				calc(50% + 120px) calc(50% - 60px);
			background-size: 120px 120px;
		}
		83.34% {
			background-position:
				calc(50% + 60px) 50%,
				50% calc(50% - 60px);
			background-size: 120px 120px;
		}
		90%,
		100% {
			background-position:
				calc(50% + 40px) 50%,
				50% calc(50% - 40px);
			background-size: 80px 80px;
		}
	}
	@keyframes g7-4 {
		10%,
		45%,
		55%,
		90% {
			opacity: 1;
		}
		16.67%,
		33.34%,
		66.66%,
		83.34% {
			opacity: 0;
		}
	}
</style>
