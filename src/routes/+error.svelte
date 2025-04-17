<script lang="ts">
	import { page } from '$app/state';
	import Link from '../components/Link.svelte';
	const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<div class="container mx-auto p-5 md:p-10">
	{#if online}
		{#if page.status === 404}
			<h1>Page égarée...</h1>
			<p>
				Si vous pensiez trouver quelque chose ici, faites-le nous savoir sur notre 
				<Link href="https://github.com/angele-henry-dev/lady-raccoon-svelte" target="_blank" label="GitHub" />. Merci !
			</p>
		{:else}
			<h1>Oopsie !</h1>
			<p>Il y a eu un problème lors de l'affichage de cette page.</p>
			{#if page.error?.message}
				<p class="error">{page.status}: {page.error.message}</p>
			{/if}
			<p>Essayez de recharger la page.</p>
			<p>
				Si l'erreur persiste, faites-le nous savoir sur notre 
				<Link href="https://github.com/angele-henry-dev/lady-raccoon-svelte" target="_blank" label="GitHub" />. Merci !
			</p>
		{/if}
	{:else}
		<h1>Il semble que vous êtes hors ligne.</h1>
		<p>Rechargez la page quand vous aurez retrouver internet.</p>
	{/if}
</div>
