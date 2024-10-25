<script lang="ts">
  import { Popover } from "flowbite-svelte";
	import { slide } from "svelte/transition";

  export let triggeredBy: string
</script>

<Popover
	class="w-64 text-sm font-montserrat"
	{triggeredBy}
	placement={`bottom${triggeredBy == ".committeeRegisterButton" ? "-end" : ""}`}
	offset={24}
	transition={slide}
>
	<div class="flex flex-col gap-4">
		<a href="https://forms.gle/xf4Hdi1ZAzaE5cCZ9" target="_blank" class="bg-white/25 p-2 text-left rounded-lg px-3 hover:bg-white/50 transition-all hover:text-white">Individual Delegate</a>
		<a href="https://forms.gle/wQcNV9gU1JsXfq8dA" target="_blank" class="bg-white/25 p-2 text-left rounded-lg px-3 hover:bg-white/50 transition-all hover:text-white">School Delegation</a>
	</div>
</Popover>