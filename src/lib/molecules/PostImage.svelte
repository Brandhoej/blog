<script context="module">
</script>

<script lang="ts">
  import { PostCaption } from "$lib/atoms";
  import Anchor from "$lib/atoms/Anchor.svelte";
  import { store, remove } from "$lib/stores/ReferenceStores";
    import { onDestroy } from "svelte";
  import type { Writable } from "svelte/store";

  $: {
    if (reference) {
      index = store("Figure", reference);
      name = `Figure ${$index}`;
    }
  }

  onDestroy(() => {
    if (reference) {
      remove(reference)
    }
  })

  let index: Writable<number> | undefined;
  let name: string = "Figure ??";

  export let source: string;
  export let alternative: string;
  export let reference: string | undefined = undefined;
  export let caption: string | undefined = undefined;
</script>

<figure>
  <Anchor href={"#" + reference} id={reference}>
    <img class="my-4" src={source} alt={alternative} />
  </Anchor>
  {#if name && caption}
    <figcaption>
      <PostCaption>
        <Anchor href={"#" + reference} divClass="hover:underline">{name}</Anchor
        >: {caption}
      </PostCaption>
    </figcaption>
  {/if}
</figure>
