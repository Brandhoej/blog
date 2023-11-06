<script lang="ts">
  import type { Citation } from "$lib/stores/Citations";
  import type { Reference } from "$lib/stores/References";
  import type { Writable } from "svelte/store";
  import Cite from "../atoms/Cite.svelte";

  export let citation: Citation;
  export let reference: Reference;

  let index: Writable<number | undefined> = reference.index;
</script>

<div class="text-primary-800 text-lg">
  <Cite to={reference} id={`citation-${$index}`} />
  <a
    class="hover:underline text-link-active hover:text-link-hovered"
    href={citation.source}>{citation.source}</a
  >{#if citation.note}<div class="inline">{", " + citation.note}</div>{/if}
</div>
