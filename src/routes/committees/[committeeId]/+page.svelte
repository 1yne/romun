<script lang="ts">
	import type { PageData } from './$types';

	let windowWidth = 0;

	$: props = {
		fill: 'D60202',
		width: windowWidth < 500 ? windowWidth - 96 : windowWidth < 800 ? 400 : 500
	};

	export let data: PageData;
</script>

<svelte:window bind:outerWidth={windowWidth} />

<div
	class="flex gap-12 p-12 font-montserrat max-[645px]:flex-col max-[645px]:items-center max-[645px]:p-8"
>
	<div class="committeeLogo" style:--logo="logo-{data.name}">
		<svelte:component this={data.logo} {...props}></svelte:component>
	</div>
	<div class="flex w-full flex-col gap-2">
		<h1 class="text-6xl font-black text-white">{data.name}</h1>
		<h1 class="text-3xl font-light italic text-gray-500">{data.fullName}</h1>
		<div
			class="my-2 rounded-md border border-white/50 bg-black/50 p-4 text-white transition-all hover:border-white hover:bg-black"
		>
			<h2>Agenda: {data.agenda}</h2>
		</div>
		<p class="text-lg text-white">{data.description}</p>
	</div>
</div>

<style>
	.committeeLogo {
		view-transition-name: var(--logo);
	}
</style>
