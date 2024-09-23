<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { committeeDataStore } from '$lib/stores/committeeDataStore';
	import type { PageData } from './$types';

	export let data: PageData;

	const props = {
		fill: 'D60202',
		width: 150
	};

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (!data.isDataRequest) transitions();
	});
</script>

<svelte:head>
	<title>RoMUN 2024 - Royale Concorde International School, Kalyan Nagar</title>
	<meta
		name="description"
		content="Join us for an enriching experience at the Royale Concorde International School Model United Nations Conference 2024! Set in the heart of our prestigious campus, this year’s MUN promises to be a dynamic and transformative event, bringing together young leaders and aspiring diplomats from around the globe."
	/>
</svelte:head>

<div class="w-full font-playfair pt-24">
	<div class="heroSection flex">
		<div class="flex w-full flex-col items-center text-center">
			<div id="title">
				<h1
					class="font-montserrat font-black text-white transition-all max-[844px]:text-8xl max-[645px]:text-7xl min-[845px]:text-9xl"
				>
					RoMUN VIII
				</h1>
			</div>
			<div id="date">
				<h1
					class="font-montserrat font-semibold text-white transition-all max-[844px]:mt-3 max-[844px]:text-2xl max-[645px]:text-xl min-[845px]:mt-5 min-[845px]:text-3xl"
				>
					October 2024
				</h1>
			</div>
			<a href="/register" id="register">
				<button
					class="button primaryBtnStyle max relative bg-none p-0 font-montserrat text-xl text-white transition-all max-[844px]:mt-6 max-[645px]:mt-5 min-[845px]:mt-8"
				>
					<div
						class="buttonBG absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
					></div>
					<span
						class="relative block px-12 py-6 text-sm transition-all max-[645px]:px-8 max-[645px]:py-4"
						>REGISTER</span
					>
				</button>
			</a>
		</div>
	</div>
	<div class="letter p-12 bg-background max-[645px]:p-6">
		<div class="bg-white flex min-h-[40rem] divShadow max-[645px]:flex-col">
			<img src="/LetterFromSG.jpg" alt="" class="w-1/2 h-fit object-cover">
			<div class="p-8 max-[645px]:px-6">
				<h1 class="text-5xl mb-8">Letter from the Secretary-General</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rerum inventore, deleniti facilis, perspiciatis voluptas magnam eligendi commodi corporis id reprehenderit consectetur doloremque eius laborum officiis aut asperiores, esse voluptates.
				Aliquam eum totam fugiat adipisci modi, fuga maiores magnam commodi, accusamus optio expedita dolorum! Reprehenderit, vel. Iure excepturi, nobis harum, sunt architecto numquam quas alias consectetur doloremque ullam, non omnis!
				Dolorem natus rem explicabo esse. Hic consequuntur possimus deserunt velit molestias maiores quia fugiat cupiditate? Quibusdam, mollitia velit corporis dolor itaque impedit excepturi totam nemo architecto atque et cum molestias.
				Porro ex provident suscipit nostrum autem sed dolorum, eveniet deserunt. At labore sunt facere. Corporis, suscipit. Culpa incidunt optio, dicta quos sit dolorem, voluptates explicabo labore omnis adipisci, odio laborum!
				Tempora laboriosam blanditiis ipsam quidem accusantium dolores ex natus fugiat perferendis voluptates quo obcaecati nihil, provident id quam vitae sequi porro hic aliquam totam. Facilis porro facere cum sunt assumenda.</p>
			</div>
		</div>
	</div>
	<div class="p-12 committeeWrapper max-[645px]:p-6">
		<h1 class="committeesHeading mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>
			COMMITTEES
		</h1>
		<div
			class="noScrollbar committees flex min-h-[28rem] w-full justify-between gap-2 overflow-x-scroll"
		>
			{#each $committeeDataStore as logo}
				<a href={logo.link}>
					<div class="flex-col justify-center gap-6">
						<div
							class="flex min-h-96 items-center justify-center border border-solid border-white/25 rounded-md p-4 transition-all hover:border-white  bg-black/25"
						>
							<div class="committeeLogo" style:--logo="logo-{logo.name}">
								<svelte:component this={logo.logo} {...props}></svelte:component>
							</div>
						</div>
						<h1 class="mt-4 text-xl font-bold text-white">{logo.name}</h1>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="bg-blue p-12 max-[645px]:p-6">
		<h1 class="aboutHeading mb-6 text-3xl font-bold text-black" in:fly||global={{ x: -50 }}>
			ABOUT
		</h1>
		<p class="about text-lg text-black" in:fade>
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
	<div class="flex flex-col w-full items-center bg-blue py-12 gap-24 footer bg-no-repeat bg-cover bg-[url('/BG8.png')]">
		<a href="/register">
			<button
				class="button primaryBtnStyle register relative mt-9 bg-none p-0 font-montserrat text-white  transition-all"
				in:fly={{ y: 20, delay: 200 }}
			>
				<div
					class="buttonBG absolute left-0 top-0 h-full w-full overflow-hidden rounded-xl bg-purple"
				></div>
				<span class="relative block px-12 py-6 text-sm">REGISTER</span>
			</button>
		</a>
		<div class="flex justify-between w-full px-12">
			<h1 class="text-white">Made by Tanmay Nambiar</h1>
			<a href="https://github.com/1yne/romun" target="_blank">
				<LogoGithub class="text-white transition-all hover:text-red" size={24} />
			</a>
		</div>
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

	.noScrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.committees {
		scroll-snap-type: x mandatory;
	}

	.committees div {
		scroll-snap-align: center;
	}

	.heroSection {
		min-height: calc(100vh - 6rem);
		padding-top: calc(50vh - 17rem);
	}

	.committeeLogo {
		view-transition-name: var(--logo);
	}

	.divShadow {
		box-shadow: 0 20px 80px 0 rgba(255, 255, 255, 0.3);
	}

	.committeeWrapper {
		background-color: rgba(41, 35, 92, 0.5);
	}
</style>
