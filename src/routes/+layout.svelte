<script>
	import Navbar from "$lib/components/Navbar.svelte"
	import '../app.css';
</script>

<div class="bg-black h-screen bg-[url('./heroSectionBG.png')]">
	<Navbar />
	<slot></slot>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>