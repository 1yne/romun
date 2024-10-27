<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';

	$: classname = $page.route.id == '/' ? 'heroBG' : 'committeeBG';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class={`${classname} h-screen`}>
	<Navbar />
	<slot></slot>
	{#if $page.route.id === '/'}
		<Footer />
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	.heroBG {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(13, 13, 13, 1)), url('/BG7.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
