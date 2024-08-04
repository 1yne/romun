<script>
	import { fly } from 'svelte/transition';
	import AnimatedWrapper from '$lib/components/AnimatedWrapper.svelte';
	import { Card } from 'flowbite-svelte';
	import UNSCLogo from '$lib/components/UNSC.svelte';
	import HRCLogo from '$lib/components/HRC.svelte';
	import UPILogo from '$lib/components/UPI.svelte';

	const props = {
		fill: 'D60202',
		width: 150
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
		<AnimatedWrapper divClass="w-full">
			<h1 class="mb-6 text-3xl font-bold text-white" in:fly||global={{ x: -50 }}>COMMITTEES</h1>
			<div class="flex w-full justify-around">
				{#each logos as logo, i}
					<div class="flex flex-col items-center gap-4" in:fly||global={{ x: -50, delay: i * 100 }}>
						<Card
							class="!flex !items-center !bg-black duration-300 hover:scale-[1.02] hover:border-red"
						>
							<svelte:component this={logo.logo} {...props}></svelte:component>
						</Card>
						<h1 class="text-xl font-bold text-white">{logo.name}</h1>
					</div>
				{/each}
			</div>
		</AnimatedWrapper>
	</div>
	<div class="px-12 bgBlack text-white py-12 text-center">
		<p>
			The Model United Nations (MUN) competition at Royale Concorde International School is set to
			be an exhilarating and intellectually stimulating event, drawing students from various schools
			to engage in dynamic diplomatic simulations. The conference will feature a
			range of committees, each focusing on specific topics such as climate change, international
			security, and human rights, offering students a platform to showcase their research, public
			speaking, and problem-solving skills. With a dedicated team of faculty advisors and guest
			speakers providing guidance, the MUN at Royale Concorde promises to be a hallmark of academic
			excellence and international awareness.
		</p>
	</div>
</div>

<style>
	.bgBlack {
		background-color: black;
	}
</style>