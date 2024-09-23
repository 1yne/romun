<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import { page } from '$app/stores';

	$: classname = $page.route.id?.includes('committees') ? 'committeeBG' : 'heroBG';
</script>

<div class={`${classname} h-screen`}>
	<Navbar />
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
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(13, 13, 13, 1)), url('/BG7.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
