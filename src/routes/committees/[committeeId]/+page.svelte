<script lang="ts">
	import type { PageData } from './$types';

  const props = {
		fill: 'D60202',
		width: 500
	};
  
  export let data: PageData
</script>

<div class="font-montserrat px-12 flex gap-12 pt-12">
  <div class="p-8 committeeLogo" style:--logo="logo-{data.name}">
    <svelte:component this={data.logo} {...props}></svelte:component>
  </div>
  <div class="flex flex-col gap-2 w-full">
    <h1 class="text-white text-6xl font-black">{data.name}</h1>
    <h1 class="font-light text-3xl text-gray-500 italic">{data.fullName}</h1>
    <div class="border-white/50 hover:border-white transition-all border bg-black/50 hover:bg-black p-4 text-white rounded-md my-2">
      <h2>Agenda: {data.agenda}</h2>
    </div>
    <p class="text-white text-lg">{data.description}</p>
  </div>
</div>

<style>
  .committeeLogo {
    view-transition-name: var(--logo);
  }
</style>