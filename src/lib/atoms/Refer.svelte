<script lang="ts">
  import { fragmentFor, type Reference } from "$lib/stores/References";
  import type { Writable } from "svelte/store";
  import Anchor from "./Anchor.svelte";

  let fragment: string | undefined = undefined;
  let text: string | undefined = undefined;

  $: {
    if ($index) {
      fragment = fragmentFor(to.groupName, $index);

      if (label) {
        text = label;
      } else {
        text = `${to.groupName} ${$index}`;
      }
    }
  }

  export let to: Reference;
  export let id: string | undefined = undefined;
  export let label: string | undefined = undefined;

  let index: Writable<number | undefined> = to.index;
</script>

{#if $index === undefined}
  <div class="text-red-500 border-2 p-0.5 border-red-500">??</div>
{:else}
  <Anchor href={"#" + fragment} {id} divClass="hover:underline">
    {text}
  </Anchor>
{/if}
