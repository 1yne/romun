<script lang="ts">
	import '../app.css';
	import '$lib/styles/main.css';
	let { children } = $props();
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import Search from '$lib/components/Search.svelte';
	import MobileSearch from '$lib/components/MobileSearch.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import { store } from '$lib/stores/store';

	let loading: boolean = $state(true);

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 3500);
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Cursor />
<div class="h-screen w-full bg-offWhite">
	{#if loading}
		<div
			class={`flex h-full w-full items-end p-12 mobile:p-6 mobile:pl-8`}
			out:fly={{ y: 40, duration: 150 }}
		>
			<Loading />
		</div>
	{:else}
		<div class="content h-full" transition:fly={{ y: 40, duration: 500, delay: 300 }}>
			<Navbar />
			<div class={`h-full transition-all ${$store.searchHover ? "blur" : ""}`}>{@render children()}</div>
			<div class="flex p-6 fixed z-10 bottom-0 justify-center w-full search mobile:hidden">
				<Search />
			</div>
			<div class="p-6 fixed z-10 bottom-0 justify-center w-full search hidden mobile:flex">
				<MobileSearch />
			</div>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	.search {
		background-image: linear-gradient(transparent, black);
	}
	.blur {
		filter: blur(40px);
	}
</style>
