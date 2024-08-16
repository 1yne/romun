<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import UNSCLogo from '$lib/components/UNSC.svelte';
	import HRCLogo from '$lib/components/HRC.svelte';
	import UPILogo from '$lib/components/UPI.svelte';
	import AIPPMLogo from '$lib/components/AIPPM.svelte';
	import { io } from '@svelteuidev/composables';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { onMount } from 'svelte';

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

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.rcisLogo', {
			scrollTrigger: '.rcisLogo',
			x: -400,
			duration: 0.5,
			opacity: 0,
			ease: "power2"
		});
		gsap.from('.committees', {
			scrollTrigger: '.committees',
			x: -400,
			duration: 0.75,
			opacity: 0,
			ease: "power2"
		});
		gsap.from('.committeesHeading', {
			scrollTrigger: '.committeesHeading',
			duration: 1,
			opacity: 0,
			ease: "power2"
		});
		gsap.from('.about', {
			scrollTrigger: '.about',
			x: -400,
			duration: 0.75,
			opacity: 0,
			ease: "power2"
		});
		gsap.from('.aboutHeading', {
			scrollTrigger: '.aboutHeading',
			duration: 1,
			opacity: 0,
			ease: "power2"
		});
		gsap.from('.register', {
			scrollTrigger: '.register',
			y: 40,
			duration: 1,
			opacity: 0,
			ease: "power2"
		});
	});

</script>

<svelte:head>
	<title>RoMUN 2024 - Royale Concorde International School, Kalyan Nagar</title>
	<meta
		name="description"
		content="Join us for an enriching experience at the Royale Concorde International School Model United Nations Conference 2024! Set in the heart of our prestigious campus, this year’s MUN promises to be a dynamic and transformative event, bringing together young leaders and aspiring diplomats from around the globe."
	/>
</svelte:head>

<div class="w-full font-montserrat">
	<div class="absolute flex h-28 w-full px-12 py-4 transition-all max-[645px]:px-6">
		<img src="/RCISLogo.png" alt="RCIS Logo" class="w-24 rcisLogo" />
	</div>
	<div class="heroSection flex min-h-screen items-center py-24">
		<div
			class="flex w-full flex-col items-center text-center"
			use:io={{ threshold: 1 }}
			on:change={handleChange}
		>
			{#if visible}
				<h1
					class="font-montserrat font-extrabold text-white transition-all max-[844px]:text-8xl max-[645px]:text-7xl min-[845px]:text-9xl"
					in:fly={{ y: 20 }}
				>
					RoMUN VIII
				</h1>
				<h1
					class="font-montserrat font-semibold text-white transition-all max-[844px]:mt-3 max-[844px]:text-2xl max-[645px]:text-xl min-[845px]:mt-5 min-[845px]:text-3xl"
					in:fly={{ y: 20, delay: 100 }}
				>
					October 2024
				</h1>
				<button
					class="button button--bestia max relative bg-none p-0 font-montserrat text-xl text-white transition-all max-[844px]:mt-6 max-[645px]:mt-5 min-[845px]:mt-8"
					in:fly={{ y: 20, delay: 200 }}
				>
					<div
						class="button__bg absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
					></div>
					<span
						class="relative block px-12 py-6 text-sm transition-all max-[645px]:px-8 max-[645px]:py-4"
						>REGISTER</span
					>
				</button>
			{/if}
		</div>
	</div>
	<div class="bg-black px-12">
		<h1 class="committeesHeading mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>
			COMMITTEES
		</h1>
		<div class="noScrollbar committees flex w-full justify-between gap-2 overflow-x-scroll">
			{#each logos as logo}
				<div class="committees flex-col justify-center gap-6">
					<div
						class="flex min-h-96 items-center justify-center border border-solid border-white/15 p-4 transition-all hover:border-white"
					>
						<svelte:component this={logo.logo} {...props}></svelte:component>
					</div>
					<h1 class="mt-4 text-xl font-bold text-white">{logo.name}</h1>
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-black px-12 py-8 pt-24">
		<h1 class="aboutHeading mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>
			ABOUT
		</h1>
		<p class="about text-lg text-white" in:fade>
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
	<div class="flex w-full justify-center bg-black py-12 pb-24">
		<button
			class="button button--bestia register relative mt-9 bg-none p-0 font-montserrat text-xl text-white"
			in:fly={{ y: 20, delay: 200 }}
		>
			<div
				class="button__bg absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
			></div>
			<span class="relative block px-12 py-6 text-sm">REGISTER</span>
		</button>
	</div>
	<div class="flex justify-end bg-black px-12 pb-12">
		<a href="https://github.com/1yne" target="_blank">
			<LogoGithub class="text-white transition-all hover:text-red" size={24} />
		</a>
	</div>
</div>

<style>
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

	.noScrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
