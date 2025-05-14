<script lang="ts">
	import Filters from "$components/Filters.svelte";
	import Item from "$components/Item.svelte";

  let selectedTag = $state("all");
  let { data } = $props();

  const allTags = Array.from(
    new Set(
      data.posts.flatMap(post => post.tags)
    )
  ).sort();
</script>

<svelte:head>
  <title>Blog Tech - Ressources et Réflexions - forabetter.tech</title>
  <meta name="description" content="Découvre nos articles sur l'accessibilité, la performance web, le développement, la vie de freelance et bien plus. Un blog pensé pour les techs." />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Blog</h1>
    <p>Des articles et des réflexions pour progresser et mieux comprendre.</p>

    <Filters bind:selectedTag={selectedTag} allTags={allTags} />

    {#each data.posts as post}
      {#if post.published && (
          selectedTag === "all" ||
          post.tags.includes(selectedTag)
      )}
        <Item tags={post.tags} title={post.title} description={post.description} href={`/blog/${post.slug}`} label="Lire la suite de l'article" />
      {/if}
    {/each}
  </div>
</section>
