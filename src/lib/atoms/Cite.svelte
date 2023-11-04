<script lang="ts">
  import type { Reference } from "$lib/stores/References";
  import Refer from "./Refer.svelte";

  let label: string = "??";
  $: label = `[${$index}]`;

  export let to: Reference;
  export let id: string | undefined = undefined;
  let index = to.index;
</script>

<Refer {to} {id} {label} />
