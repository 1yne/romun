<script lang="ts">
	import type { PageData } from './$types';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import Navbar from '$lib/Navbar.svelte';

	let windowWidth = 0;

	$: props = {
		fill: 'D60202',
		width: windowWidth < 500 ? windowWidth - 96 : windowWidth < 800 ? 400 : 500
	};

	export let data: PageData;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		transitions();
	});
</script>

<svelte:window bind:outerWidth={windowWidth} />

<video
	autoplay
	muted
	loop
	id="myVideo"
	class="fixed min-h-full max-[645px]:object-cover min-[845px]:object-fill"
>
	<source src={data.video} type="video/mp4" />
	Your browser does not support HTML5 video.
</video>

<div class="fixed min-h-full min-w-full bg-black/70">
	<Navbar />
	<div
		class="flex min-h-full min-w-full gap-12 px-12 py-4 font-montserrat max-[645px]:flex-col max-[645px]:items-center max-[645px]:p-8"
	>
		<div>
			<div id="committeeTitle">
				<h1 class="text-8xl font-black text-white">{data.name}</h1>
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
				<p class="mt-4 text-white w-1/2">{data.description}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.committeeLogo {
		view-transition-name: var(--logo);
	}
</style>
