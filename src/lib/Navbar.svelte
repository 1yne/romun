<script lang="ts">
	import { io } from '@svelteuidev/composables';
	import { fade } from "svelte/transition"

	let visible: boolean;
	const handleChange = () => (visible = true);
</script>

<div
	class="flex h-28 w-full px-12 py-4 transition-all max-[645px]:px-6"
	use:io={{ threshold: 1 }}
	on:change={handleChange}
>
	{#if visible}
		<a href="/" in:fade><img src="/RCISLogo.png" alt="RCIS Logo" class="w-24" /></a>
	{/if}
</div>
