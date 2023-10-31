<script lang="ts">
  export let href: string;
  export let id: string | undefined = undefined;
  export let divClass: string = "";
</script>

<a {href} {id} class={divClass}>
  <slot />
</a>
