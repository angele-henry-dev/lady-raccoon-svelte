<script lang="ts">
	import Faq from '$components/sections/homepage/FAQ.svelte';
	import Why from '$components/sections/homepage/Why.svelte';
	import What from '$components/sections/homepage/What.svelte';
	import Community from '$components/sections/homepage/Community.svelte';
	import Hero from '$components/sections/homepage/Hero.svelte';
	import SupportMe from '$components/sections/homepage/SupportMe.svelte';
</script>

<svelte:head>
  <title>For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble.</title>
  <meta
	  name="description"
	  content="Un cocon tech pour les développeuses et développeurs, UX UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !"
  />
  <meta property="og:title" content="For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble." />
  <meta property="og:description" content="Un cocon tech pour les développeuses et développeurs, UX UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !" />
  <meta property="og:image" content="https://forabetter.tech/logo.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="For a better tech • Le cocon tech pour se motiver, s’entraider, progresser. Ensemble." />
  <meta name="twitter:description" content="Un cocon tech pour les développeuses et développeurs, UX UI, DevOps, architectes & passionné·e·s. Ici, on s'entraide, on échange et on progresse ensemble, sans prise de tête. Rejoins-nous pour apprendre, partager et passer de bons moments dans un espace convivial et inclusif !" />
  <meta name="twitter:image" content="https://forabetter.tech/logo.png" />
  <link rel="canonical" href="https://forabetter.tech" />
</svelte:head>

<Hero />
<Why />
<What />
<Community />
<SupportMe />
<Faq />
