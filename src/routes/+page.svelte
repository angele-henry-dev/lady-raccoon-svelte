<script lang="ts">
	import Faq from '../components/FAQ.svelte';
	import Why from '../components/Why.svelte';
	import What from '../components/What.svelte';
	import Community from '../components/Community.svelte';
	import Hero from '../components/Hero.svelte';
	import SupportMe from '../components/SupportMe.svelte';
</script>

<svelte:head>
	<title>For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble. • Lady Raccoon</title>
	<meta
		name="description"
		content="Un cocon tech pour les développeuses et développeurs, UX/UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !"
	/>
</svelte:head>

<Hero />
<Why />
<What />
<Community />
<SupportMe />
<Faq />
