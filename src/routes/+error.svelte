<script>
	import { page } from '$app/stores';
	import ErrorLogo from '$lib/ErrorLogo.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { Button } from 'flowbite-svelte';
</script>

<Navbar />
<div class="flex w-full flex-col items-center">
	<ErrorLogo width={1000} />
	<h1 class="mb-12 font-montserrat text-6xl font-bold uppercase text-white">
		{$page.error?.message}
	</h1>
	<Button class="hover:!bg-purpleHover !bg-purple p-6 px-12 py-4 text-white transition-all" href="/"
		>Return to home page</Button
	>
</div>
