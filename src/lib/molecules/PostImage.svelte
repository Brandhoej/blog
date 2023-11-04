<script context="module">
</script>

<script lang="ts">
  import { PostCaption } from "$lib/atoms";
  import Anchor from "$lib/atoms/Anchor.svelte";
  import {
    fragmentFor,
    labelFor,
    type Reference,
  } from "$lib/stores/References";
  import type { Writable } from "svelte/store";

  let fragment: string | undefined = undefined;

  $: {
    if (reference) {
      label = labelFor(reference.groupName, $index);
      fragment = fragmentFor(reference.groupName, $index);
    }
  }

  export let source: string;
  export let alternative: string;
  export let reference: Reference | undefined = undefined;
  export let caption: string | undefined = undefined;

  let index: Writable<number | undefined> | undefined = reference?.index;
  let label: string = labelFor(reference?.groupName ?? "Figure", undefined);
</script>

<figure>
  <Anchor href={"#" + fragment} id={fragment}>
    <img class="my-4" src={source} alt={alternative} />
  </Anchor>
  {#if label && caption}
    <figcaption>
      <PostCaption>
        <Anchor href={"#" + fragment} divClass="hover:underline">{label}</Anchor
        >: {caption}
      </PostCaption>
    </figcaption>
  {/if}
</figure>
