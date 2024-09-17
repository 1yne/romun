<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="p-12">
	<h1 class="mb-8 text-white">
		This is just a page made for testing navigation. This page will be deleted in the official
		website, and the "Register" button will lead to a link
	</h1>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	<a on:click={() => history.back()} class="rounded-md bg-purple p-4 px-8 text-white transition-all hover:bg-purpleHover cursor-pointer"
		>Back</a
	>
</div>
