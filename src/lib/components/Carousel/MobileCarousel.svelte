<script lang="ts">
	import ChevronLeft from 'carbon-icons-svelte/lib/ChevronLeft.svelte';
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte';
	import { fly } from 'svelte/transition';
	import { currentPictureState, topArrayState, bottomArrayState } from './currentPicture.svelte';
	import { goto } from '$app/navigation';

	function moveUp() {
		if ($bottomArrayState.length != 0) {
			$topArrayState.push($currentPictureState);
			$currentPictureState = $bottomArrayState[0];
			$bottomArrayState.shift();
			$bottomArrayState = $bottomArrayState;
			$topArrayState = $topArrayState;
		}
	}
	function moveDown() {
		if ($topArrayState.length != 0) {
			$bottomArrayState.unshift($currentPictureState);
			$currentPictureState = $topArrayState[$topArrayState.length - 1];
			$topArrayState.pop();
			$bottomArrayState = $bottomArrayState;
			$topArrayState = $topArrayState;
		}
	}
</script>

<div class="flex w-full h-full flex-col">
  <div class="flex h-5/6 w-full items-center justify-center">
    {#each $topArrayState as topPic, i}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src={topPic.imageLink}
        alt={topPic.name}
        transition:fly
        onclick={() => goto(topPic.link)}
        class="topImage absolute h-1/2 w-3/4 rounded-lg border-2 border-gray-500 object-cover"
        style="--margin:{($topArrayState.length - i) * 3}rem; --scale:{0.9 -
          ($topArrayState.length - i - 1) * 0.5}"
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
        class="bottomImage absolute h-1/2 w-3/4 rounded-lg border-2 border-gray-500 object-cover"
        style="--margin:{(i + 1) * 3}rem; --scale:{0.9 - i * 0.5}; --z:{5 - i}"
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
      class="currentPicture absolute z-10 h-1/2 w-3/4 rounded-lg border-2 border-black transition-all hover:border-white object-cover"
    />
  </div>
  <div class="flex justify-center gap-8 text-black/50 transition-all">
    <ChevronLeft size={24} class="hover:text-black" onclick={moveUp} />
    <ChevronRight size={24} class="hover:text-black" onclick={moveDown} />
  </div>
</div>

<style>
	.topImage {
		margin-left: var(--margin);
		transform: scale(1, var(--scale));
	}
	.bottomImage {
		margin-right: var(--margin);
		transform: scale(1, var(--scale));
		z-index: var(--z);
	}
	.currentPicture {
		view-transition-name: var(--committeeImage);
	}
</style>
