<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "$lib/atoms";
  import { breadcrumbs } from "$lib/stores/Breadcrumbs";
</script>

<div class="py-4 h-14 flex items-center">
  <Breadcrumb>
    {#each $breadcrumbs as breadcrumb, index}
      <BreadcrumbItem href={breadcrumb.href} home={index === 0}
        >{breadcrumb.label}</BreadcrumbItem
      >
    {/each}
  </Breadcrumb>
</div>
