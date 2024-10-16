<script>
	import { Input, Textarea, Label, Radio, Button } from 'flowbite-svelte';

	let whatsapp = false,
		email = false;
</script>

<div class="p-12 pt-28 font-montserrat">
	<h1 class="mb-8 text-6xl font-bold text-white">Contact Us</h1>
	<form class="flex w-full gap-8 mobile:flex-col mobile:gap-2">
		<div class="flex w-1/2 flex-col mobile:w-full">
			<Label for="name" class="text-md mb-2">Name:</Label>
			<Input
				id="name"
        required
				class="mb-4 flex max-w-xl !border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
			/>
			<Label for="school" class="text-md mb-2">School:</Label>
			<Input
				id="school"
        required
				class="mb-4 flex max-w-xl !border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
			/>
			<Label for="message" class="text-md mb-2">Message:</Label>
			<Textarea
				size="lg"
				id="message"
        required
				rows={12}
				class="mb-4 desktop:mb-12 flex max-w-xl !border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
			/>
      <Button class="mobile:hidden w-max min-w-72" size="lg" disabled={!whatsapp && !email}>Send</Button>
		</div>
		<div class="flex w-1/2 flex-col mobile:w-full">
			<Label for="contactBack" class="text-md mb-2">How do you want us to contact you?</Label>
			<div class="mb-4 flex gap-8">
				<Radio
					name="example"
					id="contactBack"
          on:change={() => {
            whatsapp = !whatsapp
            email = false
          }}
					class="!border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
					>WhatsApp</Radio
				>
				<Radio
					name="example"
					id="contactBack"
          on:change={() => {
            email = !email
            whatsapp = false
          }}
					class="!border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
					>Email</Radio
				>
			</div>
			{#if whatsapp}
				<Label for="contactnum" class="text-md mb-2">Contact No:</Label>
				<Input
					id="contactnum"
					type="tel"
          required
					class="mb-4 flex max-w-xl !border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
				/>
			{/if}
			{#if email}
				<Label for="email" class="text-md mb-2">Email:</Label>
				<Input
					id="email"
					type="email"
          required
					class="mb-4 flex max-w-xl !border-white/50 !bg-background transition-all hover:!border-white/70 dark:focus:!border-white/70 dark:focus:ring-0"
				/>
			{/if}
      <Button class="desktop:hidden" disabled={!whatsapp && !email}>Send</Button>
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
