<script>
	import { Carousel, Thumbnails } from 'flowbite-svelte';
	import { photoDataStore } from '$lib/stores/photoDataStore';

	let index = 0;
	let forward = true;
</script>

<svelte:head>
	<title>Gallery | RoMUN 2024</title>
</svelte:head>

<div class="p-12 pt-28 font-montserrat">
	<h1 class="mt-6 text-6xl font-bold text-white" id="contactHeading">Gallery</h1>
	<div class="flex mt-4 mb-6 gap-8">
		<a href="https://drive.google.com/drive/folders/1mb1pV9ocrPKyY5hoEMI4Cxe441pf_YcO?usp=drive_link" class="text-white/50 hover:text-white transition-all">Google Drive Link 1</a>
		<a href="https://drive.google.com/drive/folders/10m7YqLbjfZRxwudB0L3iWWKoi3_NlM2D?usp=sharing" class="text-white/50 hover:text-white transition-all">Google Drive Link 2</a>
	</div>
	<Carousel
		images={$photoDataStore}
		class="min-h-96"
		{forward}
		duration={3000}
		let:Controls
		bind:index
		imgClass="object-cover border border-white/75 rounded-lg"
	>
		<Controls />
	</Carousel>
	<Thumbnails
		bind:index
		images={$photoDataStore}
		{forward}
		class="max-[844px]:grid-cols-7 thumbnails mt-6 !grid grid-rows-3 gap-4 bg-black mobile:grid-cols-3 desktop:grid-cols-10"
	/>
</div>

<style>
	:global(.thumbnails > button > img) {
		width: 8rem;
		height: 6rem;
		object-fit: cover;
	}
</style>
