<script>
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import RegisterButton from "./RegisterButton.svelte";
</script>

<div
	class="footer flex w-full flex-col items-center gap-24 bg-blue bg-[url('/BG8.png')] bg-cover bg-no-repeat py-12"
>
	<RegisterButton />
	<div class="flex w-full justify-end px-12">
		<a href="https://github.com/1yne/romun" target="_blank">
			<LogoGithub class="text-white transition-all hover:text-red" size={24} />
		</a>
	</div>
</div>
