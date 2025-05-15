<script lang="ts">
	import Link from '$components/Link.svelte';
</script>

<section class="h-screen w-full text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-start md:items-center justify-center">
	<div></div>
	<div>
		<h1 class="mt-20 md:mt-0 text-2xl lg:text-4xl font-bold uppercase">forabetter.tech</h1>
		<h2>
			Bienvenue dans l’open space virtuel de la tech.
		</h2>
		<p class="pb-5 max-w-2xl mb-5">
			Coworking, entraide, formations et ressources pour progresser en toute bienveillance.
		</p>
		<Link 
			href="https://discord.gg/BAZdtgcuNX"
			target="_blank"
			title="Accéder au Discord"
			linkType="button"
		>
			Accéder au Discord
		</Link>
	</div>
</section>
