<script lang="ts">
  import type { Citations } from "$lib/stores/Citations";
  import Citation from "./Citation.svelte";

  export let citations: Citations;
</script>

{#each citations.citationIDs as citationID}
  <Citation
    citation={citations.citation(citationID)}
    reference={citations.reference(citationID)}
  />
{/each}
