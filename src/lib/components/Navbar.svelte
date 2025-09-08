<script>
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';

	let menuVisible = $state(false);
</script>

<div
	transition:fade={{ duration: 5 }}
	class={`fixed flex h-20 w-full items-center mobile:h-16 ${$page.route.id == '/' ? 'justify-end border-b border-black' : 'justify-between'} z-10 px-12 py-6 font-montserrat tracking-[0.18em] mobile:justify-between mobile:px-6`}
>
	{#if $page.route.id != '/'}
		<button
			class="text-black/50 transition-all hover:text-black"
			in:fly|global={{ y: 40, duration: 750, delay: 250 }}
			out:fly|global={{ y: 40, duration: 750 }}
			onclick={() => window.history.back()}
		>
			<ChevronLeft size={24} />
		</button>
	{/if}
</div>

{#if menuVisible}
	<div
		class="menu fixed top-0 z-[100000000] h-full w-full p-6 px-[4.5rem] font-montserrat text-black mobile:px-8"
		transition:fly={{ y: -20, duration: 150 }}
	>
		<div class="mb-6 flex w-full items-center justify-end">
			<button onclick={() => (menuVisible = false)}>
				<Close size={32} />
			</button>
		</div>
		<div class="flex flex-col gap-6">
			<a
				href="/committees"
				onclick={() => menuVisible = false}
				class="committees flex min-h-48 w-full items-end rounded-lg border-2 border-black bg-cover bg-center p-6 text-white"
			>
				<h1 class="nyghtSerif text-2xl uppercase">Committees</h1>
			</a>
			<a
				href="/register"
				onclick={() => menuVisible = false}
				class="register flex min-h-48 w-full items-end rounded-lg border-2 border-black bg-cover bg-center p-6 text-white"
			>
				<h1 class="nyghtSerif text-2xl uppercase">Register</h1>
			</a>
		</div>
	</div>
{/if}

<style>
	.menu {
		backdrop-filter: blur(60px);
	}

	.committees {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/Committees.jpg');
	}

	.register {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Register.jpg');
	}
</style>
