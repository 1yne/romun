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
		<div id="committeeRegister" class="mt-12 flex gap-4 font-montserrat mobile:flex-col">
			<a href="https://docs.google.com/spreadsheets/d/1EEqgJ9hoTjJB892mLoqa-_JNS2Xk1XbWShcgRok9DC0/edit?usp=sharing" target="_blank" class="mobile:w-full">
				<button
					class="rounded-lg bg-redHover p-6 px-12 text-sm transition-all hover:bg-red text-white mobile:w-full"
					>Committee Matrix</button
				>
			</a>
			<div class="mobile:w-full">
				<button
					class="committeeRegisterButton rounded-lg border border-white p-6 px-12 text-sm text-white transition-all mobile:w-full"
				>
					Register
				</button>
				<RegisterPopover triggeredBy=".committeeRegisterButton" />
			</div>
		</div>
		<div class="mt-12 font-playfair text-white">
			<h1 class="mb-4 text-4xl mobile:text-2xl" id="executiveBoardTitle">The Executive Board</h1>
			<div
				class="max-[844px]:grid-cols-2 committeeGrid grid w-full items-stretch gap-4 mobile:grid-cols-1 desktop:grid-cols-3"
			>
				{#each data.executiveBoardData as member, i}
					<div class="flex flex-col self-stretch" id={`IMG${i}`}>
						<img src={member.image} alt="" class="mb-2 h-96 rounded-lg object-cover" />
						<h1 class="text-2xl mobile:text-2xl">{member.name}</h1>
						<h2 class="mobile:text-md text-lg">{member.position}</h2>
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

	.committeeRegisterButton {
		box-shadow: 1px 5px 20px 1px white inset;
	}

	.committeeRegisterButton:hover {
		box-shadow: 1px 5px 20px 5px white inset;
	}
</style>
