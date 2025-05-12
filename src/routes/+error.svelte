<script lang="ts">
	import { page } from '$app/state';
	import Link from '$components/Link.svelte';
	const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{page.status} - forabetter.tech</title>
</svelte:head>

<div class="container mx-auto p-5 md:p-10">
	{#if online}
		{#if page.status === 404}
			<h1>Page égarée...</h1>
			<p>
				Si tu penses trouver quelque chose ici, fais-le nous savoir sur notre 
				<Link href="https://github.com/angele-henry-dev/lady-raccoon-svelte" target="_blank">GitHub</Link>
				. Merci !
			</p>
		{:else}
			<h1>Oopsie !</h1>
			<p>Il y a eu un problème lors de l'affichage de cette page.</p>
			{#if page.error?.message}
				<p class="error">{page.status}: {page.error.message}</p>
			{/if}
			<p>Essaye de recharger la page.</p>
			<p>
				Si l'erreur persiste, fais-le nous savoir sur notre 
				<Link href="https://github.com/angele-henry-dev/lady-raccoon-svelte" target="_blank">GitHub</Link>
				. Merci !
			</p>
		{/if}
	{:else}
		<h1>Il semble que tu sois hors ligne.</h1>
		<p>Recharge la page quand tu auras retrouvé internet.</p>
	{/if}
</div>
