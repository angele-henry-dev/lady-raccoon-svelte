<script lang="ts">
  import resources from "$content/resources.json";
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";
	import Item from "$components/Item.svelte";
	import Filters from "$components/Filters.svelte";

  let selectedTag = $state("all");

  const allTags = Array.from(
    new Set(
      resources.flatMap(resource => resource.tags)
    )
  ).sort();
</script>

<svelte:head>
    <title>Ressources pour les développeurs et passionnés de tech - forabetter.tech</title>
    <meta name="description" content="Découvre mes ebooks, formations, guides, contenus premium pour les développeurs, UX/UI, DevOps et passionnés de technologie." />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <Header />

  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Ressources</h1>
    <p>Formations, ebooks, guides, bonus et contenus premios pour progresser.</p>

    <Filters bind:selectedTag={selectedTag} allTags={allTags} newFilter={true} />
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each resources as res}
        <Item tags={res.tags} title={res.title} description={res.description} href={res.link} label="Accéder à la ressource" isNew={res.isNew} target="_blank" />
      {/each}
    </div>

  </div>

  <Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px] z-[-1]" />
</section>
