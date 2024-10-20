<script lang="ts">
	import { Input, Textarea, Label, Radio, Button } from 'flowbite-svelte';
	import type { ActionData } from './$types';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';
	import { transitions } from '$lib/transitions';
	import { fly } from 'svelte/transition';

	onMount(() => transitions());

	let whatsapp = false,
		email = false;

	export let form: ActionData;

	onMount(() => {
		if (form?.success) {
			toast.push(`Sent`, {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': '#029987',
					'--toastBarBackground': '#218074',
					'--toastBorderRadius': '6px',
					'--toastPadding': '1rem 0.5rem',
					'--toastMargin': '-0.5rem 1rem'
				}
			});
		}
	});

	const options = {
		duration: 3000,
		initial: 1,
		next: 0,
		intro: { x: 256 }
	};
</script>

<SvelteToast {options} />

<svelte:head>
	<title>Contact Us | RoMUN 2024</title>
</svelte:head>

<div class="p-12 pt-28 font-playfair">
	<h1 class="my-6 text-6xl font-bold text-white font-montserrat" id="contactHeading">Contact Us</h1>
	<form class="flex w-full gap-8 mobile:flex-col mobile:gap-2" method="POST">
		<div class="flex w-1/2 flex-col mobile:w-full">
			<div id="contactName">
				<Label for="name" class="text-md mb-2">Name:</Label>
				<Input
					id="name"
					name="name"
					required
					class="mb-4 flex max-w-xl !border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
				/>
			</div>
			<div id="contactSchool">
				<Label for="school" class="text-md mb-2">School:</Label>
				<Input
					id="school"
					name="school"
					required
					class="mb-4 flex max-w-xl !border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
				/>
			</div>
			<div id="contactMessage">
				<Label for="message" class="text-md mb-2">Message:</Label>
				<Textarea
					size="lg"
					id="message"
					name="message"
					required
					rows={12}
					class="mb-4 flex max-w-xl !border-white/25 !bg-background transition-all hover:!border-white desktop:mb-12 dark:focus:!border-white dark:focus:ring-0"
				/>
			</div>
			<Button
				class="w-max min-w-72 mobile:hidden font-montserrat"
				type="submit"
				size="lg"
				id="contactButton"
				disabled={!whatsapp && !email}>Send</Button
			>
		</div>
		<div class="flex w-1/2 flex-col mobile:w-full" id="contactMethod">
			<Label for="contactBack" class="text-md mb-2">How do you want us to contact you?</Label>
			<div class="mb-4 flex gap-8">
				<Radio
					name="contactMethod"
					id="contactBack"
					on:change={() => {
						whatsapp = !whatsapp;
						email = false;
					}}
					class="!border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
					>WhatsApp</Radio
				>
				<Radio
					name="contactMethod"
					id="contactBack"
					on:change={() => {
						email = !email;
						whatsapp = false;
					}}
					class="!border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
					>Email</Radio
				>
			</div>
			{#if whatsapp}
				<div
					in:fly|global={{ y: -20, duration: 500, delay: 700 }}
					out:fly|global={{ y: -20, duration: 500 }}
				>
					<Label for="contactNum" class="text-md mb-2">Contact No:</Label>
					<Input
						id="contactNum"
						name="contactNum"
						type="tel"
						required
						class="mb-4 flex max-w-xl !border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
					/>
				</div>
			{/if}
			{#if email}
				<div
					in:fly|global={{ y: -20, duration: 500, delay: 700 }}
					out:fly|global={{ y: -20, duration: 500 }}
				>
					<Label for="email" class="text-md mb-2">Email:</Label>
					<Input
						id="email"
						name="email"
						type="email"
						required
						class="mb-4 flex max-w-xl !border-white/25 !bg-background transition-all hover:!border-white dark:focus:!border-white dark:focus:ring-0"
					/>
				</div>
			{/if}
			<Button class="desktop:hidden font-montserrat" type="submit" disabled={!whatsapp && !email}>Send</Button>
		</div>
	</form>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	:global(input::-webkit-outer-spin-button),
	:global(input::-webkit-inner-spin-button) {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	:global(input[type='number']) {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>
