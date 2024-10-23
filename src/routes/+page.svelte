<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { committeeDataStore } from '$lib/stores/committeeDataStore';
	import RegisterButton from '$lib/RegisterButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		if (!data.isDataRequest) transitions();
	});

	const props = {
		fill: 'D60202',
		width: 200
	};
</script>

<svelte:head>
	<title>RoMUN 2024 - Royale Concorde International School, Kalyan Nagar</title>
	<meta
		name="description"
		content="Join us for an enriching experience at the Royale Concorde International School Model United Nations Conference 2024! Set in the heart of our prestigious campus, this year’s MUN promises to be a dynamic and transformative event, bringing together young leaders and aspiring diplomats from around the globe."
	/>
</svelte:head>

<div class="w-full pt-24 font-playfair">
	<div class="heroSection flex">
		<div class="flex w-full flex-col items-center text-center">
			<div id="title">
				<h1
					class="max-[844px]:text-8xl font-montserrat font-black text-white transition-all mobile:text-7xl desktop:text-9xl"
				>
					RoMUN 2024
				</h1>
			</div>
			<div id="date">
				<h1
					class="max-[844px]:mt-3 max-[844px]:text-2xl font-semibold text-white transition-all mobile:text-xl desktop:mt-5 desktop:text-3xl"
				>
					November 15th-16th
				</h1>
			</div>
			<RegisterButton />
		</div>
	</div>
	<div class="bg-background p-12 mobile:p-6">
		<div class="divShadow letter flex min-h-[40rem] rounded-lg bg-white mobile:flex-col">
			<div
				class="secGenPic flex min-h-96 w-1/2 items-end rounded-lg bg-cover bg-center bg-no-repeat p-8 text-white mobile:w-full mobile:rounded-b-none"
			>
				<h1>Anurag Girish</h1>
			</div>
			<div class="w-1/2 p-8 mobile:w-full mobile:px-6">
				<h1 class="mb-8 text-5xl">Letter from the Secretary-General</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rerum inventore, deleniti
					facilis, perspiciatis voluptas magnam eligendi commodi corporis id reprehenderit
					consectetur doloremque eius laborum officiis aut asperiores, esse voluptates. Aliquam eum
					totam fugiat adipisci modi, fuga maiores magnam commodi, accusamus optio expedita dolorum!
					Reprehenderit, vel. Iure excepturi, nobis harum, sunt architecto numquam quas alias
					consectetur doloremque ullam, non omnis! Dolorem natus rem explicabo esse. Hic
					consequuntur possimus deserunt velit molestias maiores quia fugiat cupiditate? Quibusdam,
					mollitia velit corporis dolor itaque impedit excepturi totam nemo architecto atque et cum
					molestias. Porro ex provident suscipit nostrum autem sed dolorum, eveniet deserunt. At
					labore sunt facere. Corporis, suscipit. Culpa incidunt optio, dicta quos sit dolorem,
					voluptates explicabo labore omnis adipisci, odio laborum! Tempora laboriosam blanditiis
					ipsam quidem accusantium dolores ex natus fugiat perferendis voluptates quo obcaecati
					nihil, provident id quam vitae sequi porro hic aliquam totam. Facilis porro facere cum
					sunt assumenda.
				</p>
			</div>
		</div>
	</div>
	<div class="committeeWrapper p-12 mobile:p-6">
		<h1 class="committeesHeading mb-6 text-3xl font-bold text-white">
			COMMITTEES
		</h1>
		<div
			class="noScrollbar committees flex min-h-[28rem] w-full justify-between gap-2 overflow-x-scroll"
		>
			{#each $committeeDataStore as logo}
				<a href={logo.link} class="w-full">
					<div class="flex-col justify-center gap-6">
						<div
							class="flex min-h-96 items-center justify-center rounded-lg border border-solid border-white/25 bg-black/25 p-4 transition-all hover:border-white"
						>
							<div class="committeeLogo" style:--logo="logo-{logo.name}">
								{#if logo.name === 'CCC'}
									<img src="/CCCLogoEdited.png" alt="" class="w-[300px]" />
								{:else}
									<svelte:component this={logo.logo} {...props}></svelte:component>
								{/if}
							</div>
						</div>
						<h1 class="mt-4 font-montserrat text-xl font-bold text-white">{logo.name}</h1>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="bg-background mobile:p-6 py-12">
		<h1 class="ebHeading mb-12 text-3xl font-bold text-white mx-12">
			Meet the Executive Board
		</h1>
		<div class="flex w-full">
			{#each [0, 1, 2, 3, 4] as num}
				<div class="w-full min-h-96 ebImage flex items-end p-6 bg-[url('/LetterFromSG.jpg')] bg-blend-overlay bg-black/35 bg-cover bg-center bg-no-repeat">
					<h1 class="text-white">Antonio Guiterres</h1>
				</div>
			{/each}
		</div>
		<div class="flex w-full">
			{#each [5, 6, 7, 8, 9] as num}
				<div class="w-full min-h-96 flex items-end p-6 bg-[url('/LetterFromSG.jpg')] bg-blend-overlay bg-black/35 bg-cover bg-center bg-no-repeat">
					<h1 class="text-white">Antonio Guiterres</h1>
				</div>
			{/each}
		</div>
	</div>
	<div class="committeeWrapper p-12 mobile:p-6">
		<h1 class="aboutHeading mb-6 text-3xl font-bold text-white">
			ABOUT
		</h1>
		<p class="about text-lg text-white" in:fade>
			The Model United Nations (MUN) competition at Royale Concorde International School is set to
			be an exhilarating and intellectually stimulating event, drawing students from various schools
			to engage in dynamic diplomatic simulations. The conference will feature a range of
			committees, each focusing on specific topics such as climate change, international security,
			and human rights, offering students a platform to showcase their research, public speaking,
			and problem-solving skills. With a dedicated team of faculty advisors and guest speakers
			providing guidance, the MUN at RCIS promises to be a hallmark of academic excellence and
			international awareness.
		</p>
	</div>
</div>

<style>
	.noScrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.committees {
		scroll-snap-type: x mandatory;
	}

	.committees div {
		scroll-snap-align: center;
	}

	.heroSection {
		min-height: calc(100vh - 6rem);
		padding-top: calc(50vh - 17rem);
	}

	.divShadow {
		box-shadow: 0 20px 80px 0 rgba(255, 255, 255, 0.3);
	}

	.committeeWrapper {
		background-color: rgba(41, 35, 92, 0.5);
	}

	.secGenPic {
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url('/SecGenPic.jpeg');
	}
</style>
