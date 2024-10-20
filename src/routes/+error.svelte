<script>
	import { page } from '$app/stores';
	import ErrorLogo from '$lib/ErrorLogo.svelte';
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex w-full flex-col items-center pt-28 font-montserrat">
	<ErrorLogo width={1000} />
	<h1
		class="mb-12 font-playfair text-6xl font-bold uppercase text-white mobile:mb-6 mobile:text-4xl"
	>
		{$page.error?.message}
	</h1>
	<Button
		class="!bg-purple px-12 py-4 text-white transition-all hover:!bg-purpleHover mobile:px-6 mobile:py-3"
		href="/">Return to home page</Button
	>
</div>
