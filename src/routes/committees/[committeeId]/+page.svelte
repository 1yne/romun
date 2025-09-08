<script>
	import { allDataStore } from '$lib/components/Carousel/currentPicture.svelte';
	import { page } from '$app/stores';

	let committeeData = $state(
		$allDataStore.filter((val) => val.name.toLocaleLowerCase() == $page.params.committeeId)[0]
	);
	$inspect(committeeData);
</script>

<svelte:head>
	<title>{$page.params.committeeId.toLocaleUpperCase()} | RoMUN 2025</title>
</svelte:head>

<div class="flex h-full w-full mobile:flex-col">
	<div class="w-full hidden mobile:block h-full">
		<img
			src={committeeData.imageLink}
			class="currentPicture h-full w-full object-cover"
			alt=""
			style:--committeeImage={`image-${committeeData.name}`}
		/>
	</div>
	<div class="flex w-1/2 flex-col justify-between px-12 py-12 pt-20 mobile:w-full mobile:p-6 mobile:pb-16 bg-offWhite">
		<div>
			<h1 class="nyghtSerif text-[14vw] leading-[0.75] text-black mobile:text-[18vw]">
				{committeeData.name}
			</h1>
			<p class="mt-8 mobile:my-4 font-montserrat uppercase text-black mobile:text-md">{committeeData.full}</p>
		</div>
		<div class="font-montserrat">
			<div class="rounded-lg border-2 border-[#e1deb7] p-6 py-4 text-black mobile:text-sm mobile:p-4 mobile:py-2">
				<h1>AGENDA: {committeeData.agenda}</h1>
			</div>
			<p class="mt-8 leading-tight text-black mobile:text-sm">{committeeData.description}</p>
		</div>
	</div>
	<div class="w-1/2 mobile:hidden">
		<img
			src={committeeData.imageLink}
			class="currentPicture h-full w-full object-cover"
			alt=""
			style:--committeeImage={`image-${committeeData.name}`}
		/>
	</div>
</div>

<style>
	.currentPicture {
		view-transition-name: var(--committeeImage);
	}
</style>
