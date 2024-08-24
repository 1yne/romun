<script lang="ts">
	import type { PageData } from './$types';

  const props = {
		fill: 'D60202',
		width: 500
	};
  
  export let data: PageData
</script>

<div class="font-montserrat px-12 flex gap-12 pt-12">
  <div class="p-8 committeeLogo" style:--logo="logo-{data.committeeData.name}">
    <svelte:component this={data.committeeData.logo} {...props}></svelte:component>
  </div>
  <div class="w-full">
    <h1 class="text-white text-6xl font-black mb-2">{data.committeeData.name}</h1>
    <h1 class="font-light text-3xl text-gray-500 italic">{data.committeeData.fullName}</h1>
  </div>
</div>

<style>
  .committeeLogo {
    view-transition-name: var(--logo);
  }
</style>