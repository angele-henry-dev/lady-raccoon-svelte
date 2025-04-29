<script lang="ts">
  import tools from "$content/tools.json";
	import Plant from '$components/design/Plant.svelte';
	import Header from '$components/design/Header.svelte';
	import Item from "$components/Item.svelte";

  const FILTER_NEW = "new";
  let selectedTag: string = "all";

  const allTags = Array.from(
    new Set(
      tools.flatMap(tool => tool.tags)
    )
  ).sort();
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

	<div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
		<h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Outils pour l’accessibilité et la performance</h1>

    <div class="flex flex-wrap items-center justify-start gap-2 mb-20">
      Filtres&nbsp;:&nbsp;
      <button
        class="tag-button"
        on:click={() => selectedTag = "all"}
        class:selected={selectedTag === "all"}
      >
        Tous
      </button>

      <button
        class="tag-button-new"
        on:click={() => selectedTag = FILTER_NEW}
        class:selected={selectedTag === FILTER_NEW}
      >
        Nouveautés
      </button>

      {#each allTags as tag}
        <button
          class="tag-button"
          on:click={() => selectedTag = tag}
          class:selected={selectedTag === tag}
        >
          {tag}
        </button>
      {/each}
    </div>    
	
    {#each tools as tool}
      {#if tool.published && (
            selectedTag === "all" ||
            (selectedTag === FILTER_NEW && tool.isNew) ||
            tool.tags.includes(selectedTag)
          )}
        <Item 
          tags={tool.tags}
          title={tool.title}
          description={tool.description}
          href={`/tools/${tool.slug}`}
          label="Accéder à l'outil"
          isNew={tool.isNew} 
        />
      {/if}
    {/each}


	</div>

	<Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px] z-[-1]" />
</section>

<style>
.tag-button {
  padding: 5px 12px;
  border: 2px solid var(--primary);
  border-radius: 9999px;
  background: none;
  color: var(--primary);
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
}
.tag-button:hover,
.tag-button.selected {
  background: var(--primary);
  color: var(--background);
}

.tag-button-new {
  padding: 5px 12px;
  border: 2px solid var(--color-yellow);
  border-radius: 9999px;
  background: none;
  color: var(--color-yellow);
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
}
.tag-button-new:hover,
.tag-button-new.selected {
  background: var(--color-yellow);
  color: var(--background);
}
</style>
