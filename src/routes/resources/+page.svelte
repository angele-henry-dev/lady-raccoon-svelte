<script lang="ts">
  import resources from "$content/resources.json";
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
  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Ressources</h1>
    <p>Formations, ebooks, guides, bonus et contenus premios pour progresser.</p>

    <Filters bind:selectedTag={selectedTag} allTags={allTags} />
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each resources as res}
        {#if res.published && (
            selectedTag === "all" ||
            res.tags.includes(selectedTag)
        )}
          <Item bind:selectedTag={selectedTag} tags={res.tags} title={res.title} description={res.description} href={res.link} label="la ressource" target="_blank" />
        {/if}
      {/each}
    </div>
  </div>
</section>
