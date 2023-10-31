<script lang="ts">
  import { lookup } from "$lib/stores/ReferenceStores";
  import type { Writable } from "svelte/store";

  $: {
    const ref = lookup(reference);
    index = ref.index;
    
    if (ref.group && $index) {
        text = `${ref.group} ${$index}`;
    }
  }

  let index: Writable<number> | undefined;
  let text: string = "??";

  export let reference: string;
</script>

<a href={"#" + reference} class={text === "??" ? "text-red-500 border-2 p-0.5 border-red-500" : "hover:underline"}>{text}</a>
