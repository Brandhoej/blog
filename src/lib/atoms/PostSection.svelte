<script lang="ts">
	import Fragment from './Fragment.svelte';

	export let fragment: string;
</script>

<h2 class="text-3xl text-primary-900 font-normal pt-6">
	<Fragment useLinkIcon={true} {fragment}>
		<slot />
	</Fragment>
</h2>
