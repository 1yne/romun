<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';

	onMount(() => transitions());

	let windowWidth = 0;

	export let data: PageData;
</script>

<svelte:window bind:outerWidth={windowWidth} />

<video autoplay muted loop id="myVideo" class="fixed min-h-full object-cover">
	<source src={data.video} type="video/mp4" />
	Your browser does not support HTML5 video.
</video>

<div class="fixed min-h-full min-w-full bg-black/75 pt-28">
	<div
		class="flex min-h-full min-w-full gap-12 px-12 py-4 font-montserrat mobile:flex-col mobile:items-center mobile:p-8 mobile:pb-12"
	>
		<div>
			<div id="committeeTitle">
				<h1 class="text-9xl font-black text-white mobile:text-6xl">{data.name}</h1>
			</div>
			<div id="committeeName">
				<h1 class="mt-2 text-2xl font-light italic text-gray-500">{data.fullName}</h1>
			</div>
			<div id="committeeAgenda">
				<div>
					<h1 class="mt-3 text-2xl font-bold text-white">Agenda: {data.agenda}</h1>
				</div>
			</div>
			<div id="committeeDescription">
				<p class="mt-4 w-1/2 text-white mobile:w-auto">{data.description}</p>
			</div>
			<div id="committeeRegister" class="mt-12">
				<a
					href="/register"
					class="mt-24 text-white max-[844px]:mt-6 mobile:mt-5 desktop:mt-12"
				>
					<span class="btn registerBtn border-0 border-solid px-12 py-4">Register</span>
				</a>
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
</style>
