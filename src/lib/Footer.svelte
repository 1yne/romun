<script>
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';
	import Location from 'carbon-icons-svelte/lib/Location.svelte';
	import RegisterPopover from './RegisterPopover.svelte';
</script>

<div class="footer flex flex-col gap-12 bg-background p-12 font-montserrat text-white">
	<div
		class="registerSection flex w-full items-center justify-between rounded-lg bg-white/10 p-6 px-12 mobile:flex-col mobile:gap-4"
	>
		<h1 class="text-3xl font-black">Excited?</h1>
		<button
			class="footerRegisterButton rounded-lg bg-redHover p-6 px-12 text-sm transition-all hover:bg-red"
			>REGISTER</button
		>
		<RegisterPopover triggeredBy=".footerRegisterButton" />
	</div>
	<div class="flex w-full justify-between gap-8 mobile:flex-col">
		<div class="flex gap-8">
			<a href="https://www.instagram.com/romun_24/" target="_blank" id="logoInstagram">
				<LogoInstagram class="transition-all hover:text-red" size={24} />
			</a>
			<a href="https://github.com/1yne/romun" target="_blank" id="logoGithub">
				<LogoGithub class="transition-all hover:text-red" size={24} />
			</a>
			<a href="mailto:romuninfo@gmail.com" target="_blank" id="logoMail">
				<Email class="transition-all hover:text-red" size={24} />
			</a>
			<a href="https://maps.app.goo.gl/dwNqaEW7vqiTdxvKA" target="_blank" id="logoLocation">
				<Location class="transition-all hover:text-red" size={24} />
			</a>
		</div>
		<div id="school">
			<h1>Royale Concorde International School</h1>
		</div>
	</div>
</div>
