<script>
	import { fly } from 'svelte/transition';
	import AnimatedWrapper from '$lib/components/AnimatedWrapper.svelte';
	import { Card } from 'flowbite-svelte';
	import UNSCLogo from '$lib/components/UNSC.svelte';
	import HRCLogo from '$lib/components/HRC.svelte';
	import UPILogo from '$lib/components/UPI.svelte';

	const props = {
		fill: 'D60202',
		width: 200
	};

	const logos = [
		{
      logo: UNSCLogo,
			name: 'UNSC'
		},
		{
			logo: HRCLogo,
      name: 'HRC'
		},
		{
			logo: UPILogo,
      name: 'UPI'
		},
    {
      logo: UNSCLogo,
			name: 'DISEC'
		}
	];
</script>

<div class="w-full font-montserrat">
	<div class="py-24">
		<AnimatedWrapper divClass="w-full flex text-center flex-col items-center">
			<h1 in:fly={{ y: 50 }} class="font-montserrat text-9xl font-extrabold text-white">
				RoMUN VIII
			</h1>
			<h1
				in:fly={{ y: 50, delay: 100 }}
				class="mt-3 font-montserrat text-4xl font-semibold text-white"
			>
				2024
			</h1>
		</AnimatedWrapper>
	</div>
	<div class="px-12">
    <h1 class="text-white text-3xl font-bold mb-6">COMMITTEES</h1>
		<AnimatedWrapper divClass="w-full flex justify-between">
      {#each logos as logo, i}
        <div class="flex flex-col items-center gap-4" in:fly||global={{ x: -50, delay: i * 100 }}>
          <Card class="!flex !items-center !bg-black hover:scale-[1.02] duration-300 hover:border-red">
                <svelte:component this={logo.logo} {...props}></svelte:component>
          </Card>
          <h1 class="text-xl font-bold text-white">{logo.name}</h1>
        </div>
      {/each}
    </AnimatedWrapper>
	</div>
</div>
