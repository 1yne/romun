<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import RegisterPopover from '$lib/RegisterPopover.svelte';
	import { Modal } from 'flowbite-svelte';
	import type { EBDataType } from '$lib/stores/executiveBoardDataStore';
	import Typewriter from 'svelte-typewriter';

	onMount(() => transitions());

	export let data: PageData;

	let currentEBData: EBDataType | null,
		ebModalOpen = false;
</script>

<svelte:head>
	<title>{data.name} | RoMUN 2024</title>
</svelte:head>

<Modal
	color="#0d0d0d"
	bodyClass="border-white/25 p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain text-white"
	bind:open={ebModalOpen}
	title={currentEBData?.name}
	class="mt-24 !bg-background font-montserrat"
	headerClass="text-white flex justify-between items-center p-4 md:p-5 rounded-t-lg"
	outsideclose
	autoclose
>
	<div class="flex gap-4 font-playfair mobile:flex-col">
		<img
			src={currentEBData?.image}
			alt=""
			class="h-96 w-48 rounded-lg object-cover mobile:h-48 mobile:w-full"
		/>
		<div>
			<h1 class="mb-4 text-lg">{currentEBData?.position} ({currentEBData?.committee})</h1>
			<p class="text-md">{currentEBData?.bio}</p>
		</div>
	</div>
</Modal>

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
				<Typewriter mode="scramble" scrambleDuration={1400} delay={1200}><span>{data.agenda}</span></Typewriter>
			</div>
		</div>
		<div id="committeeDescription">
			<p class="mt-4 w-1/2 text-white mobile:w-auto mobile:text-sm">{data.description}</p>
		</div>
		<div id="committeeRegister" class="mt-12 flex gap-4 font-montserrat mobile:flex-col">
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
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="flex cursor-pointer flex-col self-stretch"
						id={`IMG${i}`}
						on:click={() => {
							ebModalOpen = true;
							currentEBData = member;
						}}
					>
						<img
							src={member.image}
							alt=""
							class="mb-2 h-96 rounded-lg border border-white/25 object-cover transition-all hover:border-white"
						/>
						<h1 class="text-2xl mobile:text-2xl">{member.name}</h1>
						<h2 class="mobile:text-md text-lg">{member.position}</h2>
					</div>
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
