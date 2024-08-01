<script lang="ts">
  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  export let divClass: string

  let isInView: boolean
</script>

<div
  class={divClass}
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={(event) => {
    const { inView } = event.detail
    isInView = inView;
  }}
>
  {#if isInView}
    <div in:fly={{ y: 50 }} class="box">
      <slot />
    </div>
  {/if}
</div>