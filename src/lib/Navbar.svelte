<script lang="ts">
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed top-0 z-[1000] flex h-28 w-full p-4 px-12 text-white transition-all max-[645px]:px-6"
>
	<div class="navbar w-full rounded-lg flex items-center px-6 gap-4 py-1">
		<a href="/">
			{#if $page.route.id === '/'}
				<img
					src="/RCISLogo.png"
					alt="RCIS Logo"
					class="w-16"
					in:fly|global={{ y: -10, duration: 500, delay: 700 }}
					out:fly|global={{ y: -10, duration: 500 }}
				/>
			{:else}
				<div
					in:fly|global={{ y: 10, duration: 500, delay: 700 }}
					out:fly|global={{ y: 10, duration: 500 }}
					class="cursor-pointer"
				>
					<ArrowLeft size={32} />
				</div>
			{/if}
		</a>
		<h1 class="text-white text-3xl font-black heading opacity-0">RoMUN 2024</h1>
	</div>
</div>

<style>
	@supports (animation-timeline: view()) {
		@keyframes shadow-in {
			to {
				/* box-shadow: 0 10px 10px #0003; */
				box-shadow: 0 20px 8px 0 #0003;
				background-color: var(--background);
			}
		}
		@keyframes fade-text-in {
			from {
				opacity: 0
			}
			to {
				opacity: 1
			}
		}

		.navbar {
			animation: shadow-in auto linear both;
			animation-timeline: scroll();
			animation-range: 0% 25%;
		}

		.heading {
			animation: fade-text-in auto linear both;
			animation-timeline: scroll();
			animation-range: 0% 25%;
		}
	}
</style>
