<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import RegisterPopover from '$lib/RegisterPopover.svelte';
	import Typewriter from 'svelte-typewriter';
	import { fly } from 'svelte/transition';

	let animate = false

	onMount(() => {
		transitions()
		animate = true
	});

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
				class="mt-3 flex gap-2 rounded-lg border border-white/25 bg-black/25 p-2 px-4 text-xl text-white transition-all hover:border-white mobile:text-lg"
			>
				<span>Agenda: </span>
				<Typewriter mode="scramble" scrambleDuration={1400} delay={1200}
					><span>{data.agenda}</span></Typewriter
				>
			</div>
		</div>
		<div id="committeeDescription">
			<p class="mt-4 w-1/2 text-white mobile:w-auto mobile:text-sm">{data.description}</p>
		</div>
		<div id="committeeRegister" class="mt-12 flex gap-4 font-montserrat mobile:flex-col">
			<a
				href={data.backgroundGuide}
				target="_blank"
				class="mobile:w-full"
			>
				<button
					class="rounded-lg bg-purpleHover p-6 px-12 text-sm text-white transition-all hover:bg-purple mobile:w-full"
					>Background Guide</button
				>
			</a>
			<a
				href="https://docs.google.com/spreadsheets/d/1EEqgJ9hoTjJB892mLoqa-_JNS2Xk1XbWShcgRok9DC0/edit?usp=sharing"
				target="_blank"
				class="mobile:w-full"
			>
				<button
					class="rounded-lg bg-redHover p-6 px-12 text-sm text-white transition-all hover:bg-red mobile:w-full"
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
					{#if animate}
						<div
							class="flex flex-col self-stretch rounded-lg border border-white/50 bg-black/75 transition-all hover:border-white"
							in:fly={{ y: 40, delay: i * 150 }}
						>
							<img src={member.image} alt="" class="h-96 rounded-t-lg object-cover" />
							<div class="p-4">
								<h1 class="mb-4 text-2xl">{member.name}</h1>
								<p>{member.bio}</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
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
