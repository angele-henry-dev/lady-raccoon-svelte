<script lang="ts">
	import Background from '$components/design/Background.svelte';
	import Link from '$components/Link.svelte';
</script>

<section class="h-screen w-full text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center justify-center">
	<Background />
	<div></div>
	<div>
		<h1 class="text-2xl lg:text-4xl font-bold uppercase">forabetter.tech</h1>
		<p class="lg:text-2xl pt-5 max-w-2xl">
			Bienvenue dans l’open space virtuel de la tech.
		</p>
		<p class="lg:text-xl pb-5 max-w-2xl mb-5">
			Coworking, entraide, formations et ressources pour progresser en toute bienveillance.
		</p>
		<Link 
			href="https://discord.gg/BAZdtgcuNX"
			target="_blank"
			title="Discord"
			linkType="button"
		>
		Découvre le Discord
		</Link>
	</div>
</section>
