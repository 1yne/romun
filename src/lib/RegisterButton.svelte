<script>
	import { fly } from 'svelte/transition';
</script>

<button
	class={`button primaryBtnStyle register relative mt-9 bg-none p-0 font-montserrat text-white transition-all`}
	in:fly={{ y: 20, delay: 200 }}
>
	<div
		class="buttonBG absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg bg-purple"
	></div>
	<span class="relative block px-12 py-6 text-sm">REGISTER</span>
</button>

<style>
	.button::before,
	.button::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.primaryBtnStyle .buttonBG {
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
	}

	.primaryBtnStyle:hover .buttonBG {
		transform: scale3d(1.2, 1.2, 1);
	}

	.primaryBtnStyle .buttonBG::before,
	.primaryBtnStyle .buttonBG::after {
		content: '';
		position: absolute;
		background: var(--red);
	}

	.primaryBtnStyle .buttonBG::before {
		width: 110%;
		height: 0;
		padding-bottom: 110%;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
	}

	.primaryBtnStyle:hover .buttonBG::before {
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
		transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
	}

	.primaryBtnStyle .buttonBG::after {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.primaryBtnStyle:hover .buttonBG::after {
		opacity: 1;
		transition-duration: 0.01s;
		transition-delay: 0.3s;
	}
</style>
