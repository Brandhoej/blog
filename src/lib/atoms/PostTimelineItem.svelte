<script lang="ts">
	import { TimelineItem } from 'flowbite-svelte';

	let date: string = '';

	$: date = releaseDate.toDateString();

	export let href: string;
	export let title: string;
	export let description: string;
	export let releaseDate: Date;
</script>

<TimelineItem classTime="" classDiv="w-3 h-3 -left-1.5 mt-2.5" classLi="">
	<div slot="icon" />
	<a {href}>
		<div class="hover:underline flex items-center mb-2 font-normal text-3xl text-primary-900">
			{title}
		</div>
	</a>
	<div class="block mb-2 text-md font-normal leading-none text-gray-400">
		{date}
	</div>
	<a {href}>
		<p
			class="hover:underline tracking-wide leading-relaxed mb-4 text-lg font-normal text-primary-800"
		>
			{description}
		</p>
	</a>
</TimelineItem>
