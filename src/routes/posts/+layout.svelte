<script>
	import { Footer, Breadcrumbs, MainNavbar } from '$lib/molecules';
	import { CenterView } from '$lib/atoms';
</script>

<div class="flex flex-col h-screen">
	<MainNavbar />
	<CenterView>
		<Breadcrumbs />
		<slot />
	</CenterView>
	<Footer />
</div>
