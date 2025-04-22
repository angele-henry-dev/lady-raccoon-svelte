<script lang="ts">
  import resources from "$data/resources.json";
	import Header from "../../components/design/Header.svelte";
	import Plant from "../../components/design/Plant.svelte";
	import Item from "../../components/Item.svelte";

  const types = ["ebook", "formation", "abonnement"];
</script>

<svelte:head>
    <title>Ressources pour les développeurs et passionnés de tech • forabetter.tech</title>
    <meta name="description" content="Découvre mes ebooks, formations, guides, contenus premium pour les développeurs, UX/UI, DevOps et passionnés de technologie." />
    <meta property="og:title" content="Ressources pour les développeurs et passionnés de tech • forabetter.tech" />
    <meta property="og:description" content="Une sélection de contenus pour progresser : ebooks, formations, guides, contenus premium et bien plus." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://forabetter.tech/ressources" />
    <meta property="og:image" content="https://forabetter.tech/images/preview-ressources.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ressources pour les développeurs et passionnés de tech • forabetter.tech" />
    <meta name="twitter:description" content="Une sélection de contenus pour progresser : ebooks, formations, guides, contenus premium et bien plus." />
    <meta name="twitter:image" content="https://forabetter.tech/images/preview-ressources.jpg" />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <Header />

  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10 z-[10]">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Ressources</h1>
    <p>Formations, ebooks, guides, bonus et contenus premios pour progresser.</p>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each resources as res}
        <Item type={res.type} title={res.title} description={res.description} href={res.link} label="Accéder à la ressource" isNew={res.isNew} target="_blank" />
      {/each}
    </div>

  </div>

  <Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px]" />
</section>
