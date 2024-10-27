<script lang="ts">
	import { Popover } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';

	export let triggeredBy: string;
</script>

<Popover
	class="w-64 font-montserrat text-sm"
	{triggeredBy}
	offset={24}
	transition={slide}
	trigger="click"
>
	<div class="flex flex-col gap-4">
		<a
			href="https://forms.gle/xf4Hdi1ZAzaE5cCZ9"
			target="_blank"
			class="rounded-lg bg-white/25 p-2 px-3 text-left transition-all hover:bg-white/50 hover:text-white"
			>Individual Delegate</a
		>
		<a
			href="https://forms.gle/wQcNV9gU1JsXfq8dA"
			target="_blank"
			class="rounded-lg bg-white/25 p-2 px-3 text-left transition-all hover:bg-white/50 hover:text-white"
			>School Delegation</a
		>
	</div>
</Popover>
