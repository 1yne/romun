<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { committeeDataStore } from '$lib/stores/committeeDataStore';
	import { executiveBoardDataStore } from '$lib/stores/executiveBoardDataStore';
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
					class="max-[844px]:mt-3 max-[844px]:text-2xl font-semibold text-white transition-all mobile:mt-3 mobile:text-xl desktop:mt-5 desktop:text-3xl"
				>
					November 15th-16th
				</h1>
			</div>
			<RegisterButton />
		</div>
	</div>
	<div class="bg-background p-12 mobile:p-6">
		<div class="divShadow letter flex min-h-[40rem] rounded-lg bg-white mobile:flex-col">
			<div class="p-8 mobile:w-full mobile:px-6">
				<h1 class="mb-8 text-5xl">Letter from the Secretary-General</h1>
				<p>
					Dear Distinguished Delegates, Advisors, and Respected Guests, <br /><br />It is with great
					pride and enthusiasm that I extend a warm welcome to RoMUN 2024, hosted by Royale Concorde
					International School. As we gather for this prestigious conference, we are not just
					simulating the work of the United Nations but creating a space where your voices—those of
					the next generation—will echo the call for change, progress, and global understanding.<br
					/><br /> In a world fraught with complexity, where borders blur, and challenges transcend
					nations, the words of Kofi Annan resonate: “You are never too young to lead, and never too
					old to learn.” RoMUN 2024 embodies this belief, providing each of you with the opportunity
					to lead, to learn, and to make an impact. This is more than an exercise in debate; it is a
					platform where your ideas can shape tomorrow.<br /><br /> Over the course of this
					conference, you will engage in deliberations that mirror the real world, where the stakes
					are high, and the solutions are difficult. Through five thoughtfully designed committees,
					you will address issues that require not just knowledge, but empathy, vision, and
					diplomacy. Whether tackling international crises, advancing human rights, or forging paths
					toward sustainability, your contributions will reflect the very essence of global
					leadership.<br /><br /> As your Secretary General, I urge you to approach this experience
					with an open mind and an unwavering commitment to understanding perspectives beyond your
					own. In this room, diversity is our greatest strength. It is in the exchange of ideas, in
					the clashes and collaborations, that we will find the seeds of real solutions to the
					world's most pressing issues.<br /><br /> RoMUN 2024 is not just a conference—it is a
					community. The friendships you will form, the insights you will gain, and the memories you
					will create here will stay with you long after the final session. This is your moment to
					challenge yourself, to grow, and to contribute meaningfully to our shared goal of a more
					peaceful, just, and equitable world.<br /><br />
					I eagerly anticipate the brilliance and innovation that each of you will bring to this conference.
					Let us commit to making RoMUN 2024 a defining chapter in our shared journey toward global cooperation
					and understanding.<br /><br /> Welcome to RoMUN 2024, where the future of diplomacy begins
					with you.<br /><br /> Warmest regards,<br /> Anurag G<br /> Secretary General<br /> RoMUN 2024
				</p>
			</div>
		</div>
	</div>
	<div class="committeeWrapper p-12 mobile:p-6">
		<h1 class="committeesHeading mb-6 text-3xl font-bold text-white">COMMITTEES</h1>
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
									<img src="/CCCLogo.png" alt="" class="min-w-[200px]" />
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
	<div class="bg-background p-12 mobile:p-6">
		<h1 class="ebHeading mb-4 text-3xl font-bold text-white desktop:mb-12">
			Meet the Executive Board
		</h1>
		<div
			class="homeCommitteeGrid grid mobile:grid-cols-1 mobile:gap-y-4 desktop:grid-cols-5 desktop:grid-rows-2"
		>
			{#each $executiveBoardDataStore as ebData}
				<a href={`/committees/${ebData.committee}`} class="text-white relative flex flex-col border border-white/25 hover:border-white transition-all">
					<img src={ebData.image} alt="" class="object-cover h-96 opacity-50 hover:opacity-100 transition-all" />
					<div class="absolute bottom-6 left-4">
						<h1>{ebData.name}</h1>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="committeeWrapper p-12 mobile:p-6">
		<h1 class="aboutHeading mb-6 text-3xl font-bold text-white">ABOUT</h1>
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

	@media (min-width: 646px) and (max-width: 844px) {
		.homeCommitteeGrid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
