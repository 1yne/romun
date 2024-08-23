<script lang="ts">
	import type { PageData } from './$types';

  const props = {
		fill: 'D60202',
		width: 500
	};
  
  export let data: PageData
</script>

<div class="font-montserrat px-12 flex gap-12 pt-12">
  <div class="border-red border border-dotted p-8 committeeLogo" style:--logo="logo-UNSC">
    <svelte:component this={data.committeeData.logo} {...props}></svelte:component>
  </div>
  <h1 class="text-white text-6xl font-black">{data.committeeData.name}</h1>
</div>

<style>
  .committeeLogo {
    view-transition-name: var(--logo);
  }
</style>