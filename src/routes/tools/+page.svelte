<script lang="ts">
  import tools from "$content/tools.json";
	import Plant from '$components/design/Plant.svelte';
	import Header from '$components/design/Header.svelte';
	import Item from "$components/Item.svelte";
	import Filters from "$components/Filters.svelte";

	let selectedTag = $state("all");

  const allTags = Array.from(
    new Set(
      tools.flatMap(tool => tool.tags)
    )
  ).sort();
</script>

<svelte:head>
  <title>Outils pour développeurs - Accessibilité, contraste & performance - forabetter.tech</title>
  <meta name="description" content="Des outils pratiques pour les développeurs, UX, UI, DevOps et techs : testeur de contraste, vérification d’accessibilité, performance web et plus encore." />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
	<Header />

	<div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
		<h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Outils pour l’accessibilité et la performance</h1>

    <Filters bind:selectedTag={selectedTag} allTags={allTags} newFilter={true} />
	
    {#each tools as tool (tool.slug)}
      {#if tool.published && (
          selectedTag === "all" ||
          (selectedTag === "new" && tool.isNew) ||
          tool.tags.includes(selectedTag)
      )}
        <Item 
          tags={tool.tags}
          title={tool.title}
          description={tool.description}
          isNew={tool.isNew}
          href={tool.slug.startsWith('http') ? tool.slug : `/tools/${tool.slug}`}
          target={tool.slug.startsWith('http') ? "_blank" : "_self"}
          label={tool.slug.startsWith('http') ? "Ouvrir l'outil" : "Accéder à l'outil"}
        />
      {/if}
    {/each}
	</div>

	<Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px] z-[-1]" />
</section>
