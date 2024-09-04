<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/Navbar.svelte';
	import { page } from '$app/stores';

	onNavigate((navigation) => {
		// @ts-expect-error
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-expect-error
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	$: classname = $page.route.id?.includes('committees') ? 'committeeBG' : 'heroBG';
</script>

<div class={`${classname} h-screen`}>
	{#if !$page.route.id?.includes("/committees")}
		<Navbar />
	{/if}
	<slot></slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	.committeeBG {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url('/committeeBG.png');
		background-size: cover;
	}

	.heroBG {
		background-color: black;
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
			repeating-radial-gradient(circle at 0 0, transparent 0, black 150px),
			repeating-linear-gradient(var(--purple), var(--red));
	}
</style>
