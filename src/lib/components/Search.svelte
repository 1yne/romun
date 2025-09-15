<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { backInOut } from 'svelte/easing';
	import { store } from '$lib/stores/store';
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div>
	<button
		class="flex h-12 w-4 hover:w-[30rem] items-center justify-center gap-4 rounded-3xl border border-white bg-black/75 px-6 py-4 transition-all hover:border-white"
		onmouseenter={() => ($store.searchHover = true)}
		onmouseleave={() => ($store.searchHover = false)}
	>
		{#if $store.searchHover}
			<a
				href="/committees"
				in:fly={{ y: 40, duration: 750, easing: backInOut }}
				class={`font-montserrat uppercase ${$page.route.id?.includes('committees') ? 'text-white' : 'text-white/50'} transition-all hover:text-white`}
				>Committees</a
			>
			<hr class="border border-white" />
			<a
				href="/register"
				in:fly={{ y: 40, duration: 750, delay: 100, easing: backInOut }}
				class="font-montserrat uppercase text-white/50 transition-all hover:text-white">Register</a
			>
			<hr class="border border-white" />
			<a
				href="https://docs.google.com/spreadsheets/d/1GkEe7XvZHeQqnCivft9qSg0pZhzDClgj2deLxR6LEbk/edit?usp=sharing"
				in:fly={{ y: 40, duration: 750, delay: 100, easing: backInOut }}
				class="font-montserrat uppercase text-white/50 transition-all hover:text-white">Country Matrix</a
			>
		{:else}
			<div in:fly={{ delay: 150, y: 40, easing: backInOut }}>
				<Menu class="text-white transition-all" />
			</div>
		{/if}
	</button>
</div>