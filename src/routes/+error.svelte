<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button } from "flowbite-svelte";
  import { HomeOutline, HomeSolid } from "flowbite-svelte-icons";

  let errorMessage: string | undefined = undefined;
  let goBackHovered: boolean = false;

  $: errorMessage = $page.error ? $page.error.message : undefined;
</script>

<div class="w-screen h-screen">
  <div class="flex flex-col justify-center items-center h-4/5">
    <div class="flex justify-center items-center">
      {#if errorMessage}
        <div
          class="text-5xl font-thin text-primary-950 leading-none pr-4 mr-4 py-2 border-r-2"
        >
          {$page.status}
        </div>
        <div class="text-xl text-primary-800">
          {errorMessage}
        </div>
      {:else}
        <div class="text-5xl font-thin text-primary-950 leading-none mr-6">
          Http
        </div>
        <div class="text-5xl font-thin text-primary-950 leading-none">
          {$page.status}
        </div>
      {/if}
    </div>
    <div class="my-8 text text-primary-800 w-96 text-center">
      It looks like an error has occured. But don't worry, you can find plenty
      on the <a
        class="hover:underline text-link-active hover:text-link-hovered"
        href="/">homepage</a
      >.
    </div>
    <Button
      color="primary"
      class="text-xl text-primary-800 border-primary-500 border-2 bg-transparent hover:bg-transparent h-12"
      on:click={() => goto("/")}
      on:mouseenter={() => (goBackHovered = true)}
      on:mouseleave={() => (goBackHovered = false)}
    >
      Home
      {#if goBackHovered}
        <HomeSolid class="ml-4 w-6 h-6" />
      {:else}
        <HomeOutline class="ml-4 w-6 h-6" />
      {/if}
    </Button>
  </div>
</div>
