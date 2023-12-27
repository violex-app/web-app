<script>
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '../components/Footer.svelte';
</script>


<AppShell>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer/>
	</svelte:fragment>
</AppShell>
