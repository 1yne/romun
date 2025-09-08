<svelte:head>
	<title>Register | RoMUN 2025</title>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<a href="https://forms.gle/nfTdeBBqZZnaid2WA" class="link link--ersa nyghtSerif style"><span>Individual Delegate</span></a>
	<a href="https://forms.gle/C3nNpiaHVo2Tys5A8" class="link link--ersa nyghtSerif style"><span>Delegation</span></a>
</div>

<style>
	.style {
		font-size: 2rem;
	}

	.link {
		position: relative;
	}

	.link::before,
	.link::after {
		position: absolute;
		width: 100%;
		height: 1px;
		background: currentColor;
		top: 100%;
		left: 0;
	}

	.link::before {
		content: '';
	}

	.link--ersa::before {
		top: 55%;
		height: 2px;
		transform-origin: 100% 50%;
		transform: scale3d(0, 1, 1);
		transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
	}

	.link--ersa:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}

	.link--ersa span {
		display: inline-block;
		transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
	}

	.link--ersa:hover span {
		transform: scale3d(1.1, 1.1, 1.1);
	}
</style>
