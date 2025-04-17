<script lang="ts">
	import Faq from '../components/sections/FAQ.svelte';
	import Why from '../components/sections/Why.svelte';
	import What from '../components/sections/What.svelte';
	import Community from '../components/sections/Community.svelte';
	import Hero from '../components/sections/Hero.svelte';
	import SupportMe from '../components/sections/SupportMe.svelte';
</script>

<svelte:head>
	<title>For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble.</title>
	<meta
		name="description"
		content="Un cocon tech pour les développeuses et développeurs, UX UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !"
	/>
</svelte:head>

<Hero />
<Why />
<What />
<Community />
<SupportMe />
<Faq />
