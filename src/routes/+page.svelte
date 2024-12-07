<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { committeeDataStore } from '$lib/stores/committeeDataStore';
	import { executiveBoardDataStore } from '$lib/stores/executiveBoardDataStore';
	import RegisterButton from '$lib/RegisterButton.svelte';
	import type { PageData } from './$types';
	import ArrowDown from 'carbon-icons-svelte/lib/ArrowDown.svelte';
	import { Carousel, Banner } from 'flowbite-svelte';
	import Typewriter from 'svelte-typewriter';
	import { quintOut } from 'svelte/easing';

	export let data: PageData;

	onMount(() => {
		if (!data.isDataRequest) transitions();
	});

	const props = {
		fill: 'D60202',
		width: 200
	};

	type CarouselImageType = {
		src: string;
		alt: string;
		title: string;
	};

	let images: CarouselImageType[] = [];

	let image: CarouselImageType;

	$: $executiveBoardDataStore.forEach((i) => {
		images.push({
			src: i.image,
			alt: i.name,
			title: i.name
		});
	});

	const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<svelte:head>
	<title>RoMUN 2024 - Royale Concorde International School, Kalyan Nagar</title>
	<meta
		name="description"
		content="Join us for an enriching experience at the Royale Concorde International School Model United Nations Conference 2024! Set in the heart of our prestigious campus, this year’s MUN promises to be a dynamic and transformative event, bringing together young leaders and aspiring diplomats from around the globe."
	/>
</svelte:head>

<Banner
	id="bottom-banner"
	position="fixed"
	bannerType="bottom"
	classDiv="!bg-black !border-t-white/50 banner"
	transition={slide}
	{params}
>
	<p class="flex items-center text-sm font-normal text-white">
		<span>
			<a
				class="link text-blue"
				href="https://docs.google.com/document/d/1v79TbHW5N5FakP6Ma5W52Nh3eMb6x05AMS4Ds_YhJg4/edit?fbclid=PAZXh0bgNhZW0CMTEAAaZWpwVQJ2mvFetiNr_PPoltlDoNPea1-E8OtlDn8C_L2QHObJSr2mI7Ikw_aem_hHoQ4X_t47AYBn4miYlUKQ&tab=t.gx3a0s2ewczk"
				>Background guides</a
			>
			and <a href="https://docs.google.com/spreadsheets/d/1EEqgJ9hoTjJB892mLoqa-_JNS2Xk1XbWShcgRok9DC0/edit?usp=sharing" class="link text-blue">allotments</a> are out!
		</span>
	</p>
</Banner>

<div class="w-full pt-24 font-playfair">
	<div class="heroSection flex">
		<div class="flex w-full flex-col items-center justify-between text-center">
			<div class="flex h-full w-full flex-col items-center justify-center text-center">
				<div id="title" class="mobile:h-16 desktop:h-36">
					<Typewriter mode="loop" cursor={false} interval={150} unwriteInterval={50}>
						<h1
							class="max-[844px]:text-8xl font-montserrat font-black text-white transition-all mobile:text-5xl desktop:text-9xl"
						>
							RoMUN 2024
						</h1>
						<h1
							class="max-[844px]:text-8xl font-montserrat font-black text-white transition-all mobile:text-5xl desktop:text-9xl"
						>
							Unite.
						</h1>
						<h1
							class="max-[844px]:text-8xl font-montserrat font-black text-white transition-all mobile:text-5xl desktop:text-9xl"
						>
							Debate.
						</h1>
						<h1
							class="max-[844px]:text-8xl font-montserrat font-black text-white transition-all mobile:text-5xl desktop:text-9xl"
						>
							Lead.
						</h1>
					</Typewriter>
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
			<div class="bounce pb-20" id="scrollBtn">
				<a href="#scrollBtn">
					<ArrowDown class="text-white transition-all hover:text-red" size={28} />
				</a>
			</div>
		</div>
	</div>
	<div class="bg-background p-12 mobile:p-6" id="letterFromSecGen">
		<div
			class="divShadow letter secGenWrapper flex min-h-[40rem] rounded-lg text-white/70 mobile:flex-col"
		>
			<div class="p-8 mobile:w-full mobile:px-6">
				<div
					class="float-left mb-8 rounded-lg bg-white/75 transition-all mobile:w-full desktop:mr-8"
				>
					<img src="/SecGenPic.png" alt="" class="h-96 rounded-lg object-cover" />
				</div>
				<h1 class="mb-8 text-left text-5xl mobile:text-center">
					Letter from the Secretary-General
				</h1>
				<p class="text-justify">
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
			class="homeCommitteeGrid grid mobile:hidden mobile:grid-cols-1 mobile:gap-y-4 desktop:grid-cols-5 desktop:grid-rows-2"
		>
			{#each $executiveBoardDataStore as ebData}
				<a
					href={`/committees/${ebData.committee}`}
					class="relative flex flex-col border border-white/25 text-white transition-all hover:border-white"
				>
					<img
						src={ebData.image}
						alt=""
						class="h-96 object-cover opacity-50 transition-all hover:opacity-100"
					/>
					<div class="absolute bottom-4 left-4">
						<h1>{ebData.name}</h1>
					</div>
				</a>
			{/each}
		</div>
		<div class="ebCarousel hidden mobile:block">
			<Carousel {images} duration={6000} let:Controls on:change={({ detail }) => (image = detail)}>
				<Controls class="px-2" />
			</Carousel>
			<div
				class="my-2 mt-4 rounded border border-white/25 p-2 text-center text-white transition-all hover:border-white"
			>
				<h1 class="text-lg">{image?.alt}</h1>
			</div>
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

	@media (min-width: 646px) and (max-width: 844px) {
		.homeCommitteeGrid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		.ebCarousel {
			display: inline-block;
		}
	}

	.secGenWrapper {
		background-color: rgba(13, 13, 13, 0.1);
	}

	@keyframes bounce {
		from {
			transform: translate3d(0, -10px, 0);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}

	.bounce {
		animation: bounce 0.5s;
		animation-direction: alternate;
		animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
		animation-iteration-count: infinite;
	}

	a.link {
		position: relative;
		outline: none !important;
		transition: 0.2s;
	}
	a.link::after {
		content: '';
		background-color: black;
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 0;
		transition: 0.2s;
	}

	span:hover {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	a.link:hover::after,
	a.link:focus::after {
		background-color: var(--blue);
		width: 100%;
	}

	:global(.banner > * > button) {
		color: var(--purple);
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
	:global(.banner > * > button:hover) {
		background-color: rgba(255, 255, 255, 0.5);
		color: var(--purpleHover);
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
</style>
