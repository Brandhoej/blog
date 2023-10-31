<script lang="ts">
  import { BreadcrumbItem } from "flowbite-svelte";

  export let href: string;
  export let home: boolean = false;
</script>

<BreadcrumbItem
  {href}
  {home}
  linkClass="text-sm font-light text-primary-500 hover:text-primary-900 md:ml-2 hover:underline"
  homeClass="inline-flex items-center text-sm font-light text-primary-500 hover:text-primary-900 hover:underline"
>
  <slot />
</BreadcrumbItem>
