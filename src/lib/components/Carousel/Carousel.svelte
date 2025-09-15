<script lang="ts">
	import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
	import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';
	import { fly } from 'svelte/transition';
	import { currentPictureState, topArrayState, bottomArrayState } from './currentPicture.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function moveDown() {
		if ($bottomArrayState.length != 0) {
			$topArrayState.push($currentPictureState);
			$currentPictureState = $bottomArrayState[0];
			$bottomArrayState.shift();
			$bottomArrayState = $bottomArrayState;
			$topArrayState = $topArrayState;
		}
	}
	function moveUp() {
		if ($topArrayState.length != 0) {
			$bottomArrayState.unshift($currentPictureState);
			$currentPictureState = $topArrayState[$topArrayState.length - 1];
			$topArrayState.pop();
			$bottomArrayState = $bottomArrayState;
			$topArrayState = $topArrayState;
		}
	}

	let interval: any,
		direction = 'down';

	onMount(() => {
		setTimeout(() => {
			interval = setInterval(() => {
				console.log(direction, $bottomArrayState.length, $topArrayState.length);
				if (direction == 'down') {
					if ($bottomArrayState.length == 0) {
						direction = 'up';
					} else {
						moveDown();
					}
				} else {
					if ($topArrayState.length == 0) {
						direction = 'down';
					} else {
						moveUp();
					}
				}
			}, 5000);
		}, 5000);
		return () => clearInterval(interval)
	});
</script>

<div class="flex h-full w-full items-center justify-center">
	{#each $topArrayState as topPic, i}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src={topPic.imageLink}
			alt={topPic.name}
			transition:fly
			onclick={() => goto(topPic.link)}
			class="topImage absolute h-2/5 w-2/5 rounded-lg border-2 border-gray-500"
			style="--margin:{($topArrayState.length - i) * 3}rem; --scale:{0.9 -
				($topArrayState.length - i - 1) * 0.15}"
		/>
	{/each}
	{#each $bottomArrayState as bottomPic, i}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src={bottomPic.imageLink}
			alt={bottomPic.name}
			transition:fly
			onclick={() => goto(bottomPic.link)}
			class="bottomImage absolute h-2/5 w-2/5 rounded-lg border-2 border-gray-500"
			style="--margin:{(i + 1) * 3}rem; --scale:{0.9 - i * 0.15}; --z:{5 - i}"
		/>
	{/each}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		src={$currentPictureState.imageLink}
		alt={$currentPictureState.name}
		transition:fly
		onclick={() => goto($currentPictureState.link)}
		style:--committeeImage={`image-${$currentPictureState.name}`}
		class="currentPicture absolute z-10 h-2/5 w-2/5 rounded-lg border-2 border-black transition-all hover:border-white"
	/>
</div>
<div class="flex flex-col gap-8 text-black/50">
	<ChevronUp
		size={24}
		class={`${$topArrayState.length == 0 ? 'text-gray-500' : 'transition-all hover:text-black'}`}
		onclick={moveUp}
	/>
	<ChevronDown
		size={24}
		class={` ${$bottomArrayState.length == 0 ? 'text-gray-500' : 'transition-all hover:text-black'}`}
		onclick={moveDown}
	/>
</div>

<style>
	.topImage {
		margin-bottom: var(--margin);
		transform: scale(var(--scale), 1);
	}
	.bottomImage {
		margin-top: var(--margin);
		transform: scale(var(--scale), 1);
		z-index: var(--z);
	}
	.currentPicture {
		view-transition-name: var(--committeeImage);
	}
</style>
