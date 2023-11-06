<script lang="ts">
  import type { Citations } from "$lib/stores/Citations";
  import Citation from "./Citation.svelte";
  import PostSection from "../atoms/PostSection.svelte";

  export let citations: Citations;
</script>

<PostSection fragment="bibliography">Bibliography</PostSection>
<div class="py-4">
  {#each citations.citationIDs as citationID}
    <Citation
      citation={citations.citation(citationID)}
      reference={citations.reference(citationID)}
    />
  {/each}
</div>
