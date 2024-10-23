<script>
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
	import LogoInstagram from "carbon-icons-svelte/lib/LogoInstagram.svelte";
	import Email from "carbon-icons-svelte/lib/Email.svelte";
	import Location from "carbon-icons-svelte/lib/Location.svelte";
</script>

<div
	class="footer flex flex-col gap-12 bg-background bg-cover bg-no-repeat p-12 font-montserrat"
>
	<div class="w-full flex justify-between text-white items-center bg-white/10 rounded-lg p-6 px-12 registerSection">
		<h1 class="font-black text-3xl">Excited?</h1>
		<button class="text-sm bg-redHover p-6 rounded-lg px-12 hover:bg-red transition-all">REGISTER</button>
	</div>
	<div class="w-full flex gap-8 justify-between">
		<div class="flex gap-8">
			<a href="https://www.instagram.com/romun_24/" target="_blank" id="logoInstagram">
				<LogoInstagram class="text-white transition-all hover:text-red" size={24}/>
			</a>
			<a href="https://github.com/1yne/romun" target="_blank" id="logoGithub">
				<LogoGithub class="text-white transition-all hover:text-red" size={24}  />
			</a>
			<a href="mailto:romuninfo@gmail.com" target="_blank" id="logoMail">
				<Email class="text-white transition-all hover:text-red" size={24}  />
			</a>
			<a href="https://maps.app.goo.gl/dwNqaEW7vqiTdxvKA" target="_blank" id="logoLocation">
				<Location class="text-white transition-all hover:text-red" size={24}  />
			</a>
		</div>
		<div id="school">
			<h1 class="text-white">Royale Concorde International School</h1>
		</div>
	</div>
</div>
