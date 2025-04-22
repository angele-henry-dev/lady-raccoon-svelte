<script lang="ts">
	import Plant from '$components/design/Plant.svelte';
	import ContrastChecker from '$components/sections/tools/ContrastChecker.svelte';
	import Header from '$components/design/Header.svelte';
</script>

<svelte:head>
  <title>Outils pour développeurs • Accessibilité, contraste & performance | forabetter.tech</title>
  <meta name="description" content="Des outils pratiques pour les développeurs, UX, UI, DevOps et techs : testeur de contraste, vérification d’accessibilité, performance web et plus encore." />
  <meta property="og:title" content="Outils pour développeurs • Accessibilité, contraste & performance" />
  <meta property="og:description" content="Une collection d’outils pensés pour les devs et passionnés de tech : testeur de contraste, vérif d’accessibilité, et d’autres à venir." />
  <meta property="og:image" content="https://forabetter.tech/og-tools.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech/tools" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Outils pratiques pour la tech | forabetter.tech" />
  <meta name="twitter:description" content="Boostez vos projets web avec nos outils gratuits pour l’accessibilité, la performance et l’inclusivité." />
  <meta name="twitter:image" content="https://forabetter.tech/og-tools.png" />
  <link rel="canonical" href="https://forabetter.tech/tools" />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
	<Header />

	<div class="w-full max-w-5xl mx-auto px-4 sm:pb-10 z-[10]">
		<h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Outils</h1>
		<p>Des outils gratuits pour l’accessibilité, la performance et l’inclusivité.</p>
	
		<ContrastChecker />

	</div>

	<Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px]" />
</section>
