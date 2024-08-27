<script>
	import { page } from '$app/stores';
	import ErrorLogo from '$lib/ErrorLogo.svelte';
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex w-full flex-col items-center">
	<ErrorLogo width={1000} />
	<h1
		class="mb-12 font-montserrat text-6xl font-bold uppercase text-white max-[645px]:mb-6 max-[645px]:text-4xl"
	>
		{$page.error?.message}
	</h1>
	<Button
		class="!bg-purple px-12 py-4 text-white transition-all hover:!bg-purpleHover max-[645px]:px-6 max-[645px]:py-3"
		href="/">Return to home page</Button
	>
</div>
