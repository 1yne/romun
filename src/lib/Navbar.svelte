<script lang="ts">
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import Close from "carbon-icons-svelte/lib/Close.svelte";

	let menuVisible = false;
</script>

<div
	class="fixed top-0 z-[1000] flex h-28 w-full p-4 px-12 text-white transition-all max-[645px]:px-6"
>
	<div
		class={`navbar flex w-full items-center justify-between rounded-lg px-6 py-1 ${$page.route.id === '/' ? '' : 'bg-background transition-all'}`}
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
					class="heading text-2xl font-black text-white"
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
		<div>
			<button on:click={() => (menuVisible = true)}>
				<Menu size={32} class="transition-all hover:text-red" />
			</button>
		</div>
	</div>
</div>

{#if menuVisible}
	<div class="menu z-[100000000] h-full w-full font-montserrat fixed top-0 p-12" transition:fly={{ y: -20, duration: 150 }}>
		<div class="w-full flex justify-between px-6">
			<h1 class="text-3xl font-bold text-white">MENU</h1>
			<button on:click={() => menuVisible = false}>
				<Close size={32} class="text-white" />
			</button>
		</div>
	</div>
{/if}

<style>
	@keyframes shadow-in {
		to {
			box-shadow: 0 20px 8px 8px #0003;
			background-color: var(--background);
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
</style>
