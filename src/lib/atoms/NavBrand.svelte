<script lang="ts">
  import { NavBrand } from "flowbite-svelte";
</script>

<NavBrand href="/">
  <span
    class="self-center whitespace-nowrap text-2xl font-thin py-4 text-primary-950"
  >
    <slot />
  </span>
</NavBrand>
