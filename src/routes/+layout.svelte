<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/Navbar.svelte';

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
</script>

<div class="bg h-screen">
	<Navbar />
	<slot></slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	.bg {
		background-color: black;
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
			repeating-radial-gradient(circle at 0 0, transparent 0, black 150px),
			repeating-linear-gradient(var(--purple), var(--red));
	}
</style>
