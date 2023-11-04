<script lang="ts">
  import type { Citation } from "$lib/stores/Citations";
  import type { Reference } from "$lib/stores/References";
  import type { Writable } from "svelte/store";
  import Cite from "./Cite.svelte";

  export let citation: Citation;
  export let reference: Reference;

  let index: Writable<number | undefined> = reference.index;
</script>

<div>
  <Cite to={reference} id={`citation-${$index}`} />
  {citation.source}
</div>
