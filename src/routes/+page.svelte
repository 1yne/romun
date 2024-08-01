<script lang="ts">
  import { Card } from "flowbite-svelte"
  import { HRCLogo, UNSCLogo } from "$lib";
</script>

<div class="w-full">
  <div class="w-full flex items-center flex-col gap-4">
    <h1 class="font-montserrat font-extrabold text-9xl text-white mt-24">RoMUN VIII</h1>
    <h1 class="font-montserrat font-semibold text-4xl text-white">2024</h1>
  </div>

  <div>
    {#each [HRCLogo, UNSCLogo] as item}
      <Card>
        <HRCLogo width={200} fill="D60202" />
      </Card>
    {/each}
  </div>
</div>