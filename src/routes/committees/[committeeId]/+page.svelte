<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { videoURLStore } from '$lib/stores/videoURLStore';
	import RegisterPopover from '$lib/RegisterPopover.svelte';

	onMount(() => transitions());

	$: videoURL = $videoURLStore.filter(
		(val) => val.pathname.substring(0, val.pathname.length - 9) == data.name
	)[0]?.url;

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name} | RoMUN 2024</title>
</svelte:head>

<img src={data.image} alt="" class="fixed -z-[100] h-full w-full" />
<div class="bg-black/50 px-12 pb-12 pt-28 mobile:px-6">
	<div class="inline-block font-playfair">
		<div id="committeeTitle">
			<h1 class="font-montserrat text-[12rem] font-black leading-tight text-white mobile:text-7xl">
				{data.name}
			</h1>
		</div>
		<div id="committeeName">
			<h1 class="mt-2 font-montserrat text-2xl font-light italic text-white mobile:text-xl">
				{data.fullName}
			</h1>
		</div>
		<div id="committeeAgenda">
			<div
				class="mt-3 rounded-lg border border-white/25 bg-black/25 p-2 px-4 transition-all hover:border-white"
			>
				<h1 class="text-xl text-white mobile:text-lg">Agenda: {data.agenda}</h1>
			</div>
		</div>
		<div id="committeeDescription">
			<p class="mt-4 w-1/2 text-white mobile:w-auto mobile:text-sm">{data.description}</p>
		</div>
		<div id="committeeRegister" class="mt-12">
			<a
				href="/register"
				class="max-[844px]:mt-6 committeeRegisterButton mt-24 font-montserrat text-white mobile:mt-5 desktop:mt-12"
			>
				<span class="btn registerBtn border-0 border-solid px-12 py-4">Register</span>
			</a>
			<RegisterPopover triggeredBy=".committeeRegisterButton" />
		</div>
		<div class="mt-12 font-playfair text-white">
			<h1 class="mb-4 text-4xl mobile:text-2xl" id="executiveBoardTitle">The Executive Board</h1>
			<div class="grid w-full desktop:grid-cols-3 mobile:grid-cols-1 max-[844px]:grid-cols-2 items-stretch gap-4 committeeGrid">
				{#each data.executiveBoardData as member, i}
					<div class="flex flex-col self-stretch" id={`IMG${i}`}>
						<img src={member.image} alt="" class="rounded-lg object-cover h-96 mb-2" />
						<h1 class="text-2xl mobile:text-2xl">{member.name}</h1>
						<h2 class="text-lg mobile:text-md">{member.position}</h2>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.registerBtn {
		box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
		outline: 1px solid;
		outline-color: rgba(255, 255, 255, 0.5);
		outline-offset: 0px;
		text-shadow: none;
		transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
	}

	.registerBtn:hover {
		border: 1px solid;
		box-shadow:
			inset 0 0 20px rgba(191, 6, 6, 0.5),
			0 0 20px rgba(255, 255, 255, 0.2);
		outline-color: rgba(255, 255, 255, 0);
		outline-offset: 15px;
		text-shadow: 1px 1px 2px #07a4e7;
	}

	@media (min-width: 646px) and (max-width: 844px) {
		.committeeGrid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
