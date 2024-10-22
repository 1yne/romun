<script lang="ts">
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';

	let menuVisible = false;
</script>

<div
	class="fixed top-0 z-[1000] flex h-28 w-full p-4 px-12 text-white transition-all mobile:px-6 font-montserrat"
>
	<div
		class={`navbar flex w-full items-center justify-between rounded-lg px-6 border border-transparent py-1 ${$page.route.id === '/' ? '' : 'bg-background transition-all border-white'}`}
	>
		{#if $page.route.id === '/'}
			<a href="/" class="flex items-center gap-4">
				<img
					src="/RCISLogo.png"
					alt="RCIS Logo"
					class="w-16"
					in:fly|global={{ y: -10, duration: 500, delay: 700 }}
					out:fly|global={{ y: -10, duration: 500 }}
				/>
				<h1
					class="heading text-2xl font-black text-white mobile:text-lg"
					in:fly|global={{ y: -10, duration: 500, delay: 700 }}
					out:fly|global={{ y: -10, duration: 500 }}
				>
					RoMUN 2024
				</h1>
			</a>
		{:else}
			<button on:click={() => window.history.back()}>
				<div
					in:fly|global={{ y: 10, duration: 500, delay: 700 }}
					out:fly|global={{ y: 10, duration: 500 }}
					class="cursor-pointer"
				>
					<ArrowLeft size={32} />
				</div>
			</button>
		{/if}
		<div class="h-full flex items-center">
			<button on:click={() => (menuVisible = true)}>
				<Menu size={32} class="transition-all hover:text-red" />
			</button>
		</div>
	</div>
</div>

{#if menuVisible}
	<div
		class="menu fixed top-0 z-[100000000] h-full w-full p-12 px-[4.5rem] font-montserrat mobile:px-8"
		transition:fly={{ y: -20, duration: 150 }}
	>
		<div class="flex w-full justify-end items-center">
			<button on:click={() => (menuVisible = false)}>
				<Close size={32} class="text-white transition-all hover:text-red" />
			</button>
		</div>
		<div class="links mt-12 inline-block">
			<a
				href="/"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				on:click={() => menuVisible = false}
				>Country Matrix</a
			>
			<a
				href="https://maps.app.goo.gl/dwNqaEW7vqiTdxvKA"
				target="_blank"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				>Location</a
			>
			<a
				href="/"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				on:click={() => menuVisible = false}
				>About</a
			>
			<a
				href="/gallery"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				on:click={() => menuVisible = false}
				>Gallery</a
			>
			<a
				href="/contact"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				on:click={() => menuVisible = false}
				>Contact Us</a
			>
			<a
				href="/"
				class="link link--metis relative flex mb-6 pb-2 text-6xl mobile:text-4xl font-semibold text-white before:content-[''] w-max"
				on:click={() => menuVisible = false}
				>Register</a
			>
		</div>
	</div>
{/if}

<style>
	@keyframes shadow-in {
		to {
			box-shadow: 0 20px 8px 8px #0003;
			background-color: var(--background);
			border: 1px white solid;
		}
	}
	@keyframes fade-text-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.navbar {
		animation: shadow-in linear both;
		animation-timeline: scroll();
		animation-range: 0% 25%;
	}

	.heading {
		animation: fade-text-in linear both;
		animation-timeline: scroll();
		animation-range: 0% 25%;
	}

	.menu {
		backdrop-filter: blur(60px);
	}

	.link::before,
	.link::after {
		position: absolute;
		width: 100%;
		height: 3px;
		background: currentColor;
		top: 100%;
		left: 0;
		pointer-events: none;
	}

	.link--metis::before {
		transform-origin: 100% 50%;
		transform: scale3d(0, 1, 1);
		transition: transform 0.15s;
	}

	.link--metis:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}
</style>
