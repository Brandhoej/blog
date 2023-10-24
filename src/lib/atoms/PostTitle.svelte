<script lang="ts">
	import Fragment from './Fragment.svelte';

	export let fragment: string;
</script>

<h1 class="text-center text-5xl font-normal pb-4 text-primary-900">
	<Fragment {fragment}>
		<slot />
	</Fragment>
</h1>
