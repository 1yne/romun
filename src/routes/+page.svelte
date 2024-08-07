<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import UNSCLogo from '$lib/components/UNSC.svelte';
	import HRCLogo from '$lib/components/HRC.svelte';
	import UPILogo from '$lib/components/UPI.svelte';
	import AIPPMLogo from '$lib/components/AIPPM.svelte';
	import { io } from '@svelteuidev/composables';

	let visible: boolean;
	const handleChange = () => (visible = true);

	const props = {
		fill: 'D60202',
		width: 150
	};

	const logos = [
		{
			logo: UNSCLogo,
			name: 'UNSC'
		},
		{
			logo: HRCLogo,
			name: 'HRC'
		},
		{
			logo: UPILogo,
			name: 'UPI'
		},
		{
			logo: UNSCLogo,
			name: 'DISEC'
		},
		{
			logo: UNSCLogo,
			name: 'CCC'
		},
		{
			logo: AIPPMLogo,
			name: 'AIPPM'
		},
		{
			logo: UNSCLogo,
			name: 'UNODC'
		}
	];
</script>

<div class="w-full font-montserrat">
	<div class="absolute flex h-28 w-full px-12 py-4">
		<img src="/RCISLogo.png" alt="RCIS Logo" class="w-24" />
	</div>
	<div class="heroSection flex min-h-screen items-center py-24">
		<div
			class="flex w-full flex-col items-center text-center"
			use:io={{ threshold: 1 }}
			on:change={handleChange}
		>
			{#if visible}
				<h1 class="font-montserrat text-9xl font-extrabold text-white" in:fly={{ y: 20 }}>
					RoMUN VIII
				</h1>
				<h1
					class="mt-6 font-montserrat text-4xl font-semibold text-white"
					in:fly={{ y: 20, delay: 100 }}
				>
					October 2024
				</h1>
				<button
					class="button button--bestia relative mt-9 bg-none p-0 font-montserrat text-xl text-white"
					in:fly={{ y: 20, delay: 200 }}
				>
					<div
						class="button__bg absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
					></div>
					<span class="relative block px-12 py-6 text-sm">REGISTER</span>
				</button>
			{/if}
		</div>
	</div>
	<div class="bgBlack px-12">
		<h1 class="mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>COMMITTEES</h1>
		<div class="flex w-full justify-between">
			{#each logos as logo}
				<div class="flex-col justify-center gap-6">
					<div
						class="flex min-h-96 items-center justify-center border border-solid border-white/30 p-4 transition-all hover:border-white"
					>
						<svelte:component this={logo.logo} {...props}></svelte:component>
					</div>
					<h1 class="mt-4 text-xl font-bold text-white">{logo.name}</h1>
				</div>
			{/each}
		</div>
	</div>
	<div class="bgBlack px-12 py-12 pt-24">
		<h1 class="mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>ABOUT</h1>
		<p class="text-lg text-white" in:fade>
			The Model United Nations (MUN) competition at Royale Concorde International School is set to
			be an exhilarating and intellectually stimulating event, drawing students from various schools
			to engage in dynamic diplomatic simulations. The conference will feature a range of
			committees, each focusing on specific topics such as climate change, international security,
			and human rights, offering students a platform to showcase their research, public speaking,
			and problem-solving skills. With a dedicated team of faculty advisors and guest speakers
			providing guidance, the MUN at RCIS promises to be a hallmark of academic excellence and
			international awareness.
		</p>
	</div>
	<div class="flex w-full justify-center bgBlack py-12 pb-24">
		<button
			class="button button--bestia relative mt-9 bg-none p-0 font-montserrat text-xl text-white"
			in:fly={{ y: 20, delay: 200 }}
		>
			<div
				class="button__bg absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
			></div>
			<span class="relative block px-12 py-6 text-sm">REGISTER</span>
		</button>
	</div>
</div>

<style>
	.bgBlack {
		background-color: black;
	}

	.button::before,
	.button::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.button--bestia .button__bg {
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
	}

	.button--bestia:hover .button__bg {
		transform: scale3d(1.2, 1.2, 1);
	}

	.button--bestia .button__bg::before,
	.button--bestia .button__bg::after {
		content: '';
		position: absolute;
		background: var(--red);
	}

	.button--bestia .button__bg::before {
		width: 110%;
		height: 0;
		padding-bottom: 110%;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
	}

	.button--bestia:hover .button__bg::before {
		transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
		transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
	}

	.button--bestia .button__bg::after {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.button--bestia:hover .button__bg::after {
		opacity: 1;
		transition-duration: 0.01s;
		transition-delay: 0.3s;
	}
</style>
