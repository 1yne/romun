<script>
  import { fly } from 'svelte/transition';
  import AnimatedWrapper from "$lib/components/AnimatedWrapper.svelte";
</script>

<div class="w-full">
	<div class="py-24">
		<AnimatedWrapper divClass="w-full flex text-center flex-col items-center">
      <h1 in:fly={{ y: 50 }} class="font-montserrat text-9xl font-extrabold text-white">RoMUN VIII</h1>
      <h1 in:fly={{ y: 50, delay: 100 }} class="font-montserrat text-4xl font-semibold text-white mt-3">2024</h1>
    </AnimatedWrapper>
	</div>
</div>