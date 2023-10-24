<script lang="ts">
	import { LinkOutline } from 'flowbite-svelte-icons';

	let hovers = false;

	export let useLinkIcon: boolean = false;
	export let fragment: string;
</script>

<a
	on:focus={() => (hovers = true)}
	on:mouseover={() => (hovers = true)}
	on:mouseleave={() => (hovers = false)}
	id={fragment}
	href={'#' + fragment}
>
	<div class="inline hover:underline">
		<slot />
	</div>
	{#if hovers && useLinkIcon}
		<LinkOutline class="inline ml-2 mb-1" />
	{/if}
</a>
