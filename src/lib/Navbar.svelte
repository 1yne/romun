<script lang="ts">
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

<div
	class="navbar fixed top-0 z-[1000] flex h-24 w-full p-6 px-12 text-white transition-all max-[645px]:px-6"
>
	<a href="/">
		{#if $page.route.id === '/'}
			<img
				src="/RCISLogo.png"
				alt="RCIS Logo"
				class="w-20"
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
</div>