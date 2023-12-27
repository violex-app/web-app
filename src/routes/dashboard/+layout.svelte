<script>
	import '../../app.postcss';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { authUser } from '$lib/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Footer from '../components/Footer.svelte';

	const handleLogout = () => {
		signOut(firebaseAuth)
			.then(() => {
				$authUser = {};
				goto('/auth');
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1 class="great-vibes mt-4" style="font-size: 60px;">Violex</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="hover:underline" on:click={handleLogout}>Logout</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
	
	<svelte:fragment slot="pageFooter">
		<Footer/>
	</svelte:fragment>
</AppShell>
