<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class="p-12 pt-28 font-montserrat">
	<h1 class="my-6 text-6xl font-bold text-white" id="contactHeading">Gallery</h1>
	<div
		class="max-[844px]:grid-cols-2 grid grid-rows-3 gap-4 mobile:grid-cols-1 desktop:grid-cols-4"
	>
		{#if animate}
			{#each Array(17).keys() as num}
				<img
					src={`/gallery/IMG${num}.jpeg`}
					alt=""
					id={`IMG${num}`}
					transition:fly|global={{ x: -200, duration: 250, delay: 250 * num, easing: sineInOut }}
					class={`h-full w-full object-cover ${num == 4 ? 'col-span-2' : ''} border border-white/25 transition-all hover:border-white`}
				/>
			{/each}
		{/if}
	</div>
</div>
