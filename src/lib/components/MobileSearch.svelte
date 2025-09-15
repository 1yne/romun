<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { backInOut } from 'svelte/easing';
	import { clickOutside } from 'svelte-outside';
	import { store } from '$lib/stores/store';

	let time = $state(new Date().getTime());
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div>
	<button
		class={`flex ${$store.searchHover ? 'h-48 w-[calc(100vw-4rem)] px-6' : 'h-12 w-12'} items-left flex-col justify-center gap-4 rounded-3xl border border-white/50 bg-black/75 py-4 transition-all hover:border-white`}
		onclick={() => {
			if ((new Date().getTime() - time) / 1000 > 0.05) {
				$store.searchHover = true;
				time = new Date().getTime();
			}
		}}
		use:clickOutside={() => {
			if ((new Date().getTime() - time) / 1000 > 0.05) {
				$store.searchHover = false;
			}
		}}
	>
		{#if $store.searchHover}
			<a
				href="/committees"
				in:fly={{ y: 40, duration: 750, easing: backInOut }}
				onclick={() => {
					time = new Date().getTime();
					$store.searchHover = false;
				}}
				class={`font-montserrat uppercase ${$page.route.id?.includes('committees') ? 'text-white' : 'text-white/50'} text-left transition-all hover:text-white`}
				>Committees</a
			>
			<hr class="text-white/50" />
			<a
				href="/register"
				in:fly={{ y: 40, duration: 750, delay: 100, easing: backInOut }}
				onclick={() => {
					time = new Date().getTime();
					$store.searchHover = false;
				}}
				class="text-left font-montserrat uppercase text-white/50 transition-all hover:text-white"
				>Register</a
			>
			<hr class="text-white/50" />
			<a
				href="https://docs.google.com/spreadsheets/d/1GkEe7XvZHeQqnCivft9qSg0pZhzDClgj2deLxR6LEbk/edit?usp=sharing"
				in:fly={{ y: 40, duration: 750, delay: 100, easing: backInOut }}
				onclick={() => {
					time = new Date().getTime();
					$store.searchHover = false;
				}}
				class="text-left font-montserrat uppercase text-white/50 transition-all hover:text-white"
				>Country Matrix</a
			>
		{:else}
			<div in:fly={{ delay: 150, y: 40, easing: backInOut }} class="flex h-4 w-full justify-center">
				<Menu
					class={`text-white/50 transition-all ${$store.searchHover ? '!text-[#d60202]' : ''}`}
				/>
			</div>
		{/if}
	</button>
</div>
