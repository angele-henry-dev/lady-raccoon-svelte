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
    <p>Un blog pour partager des articles sur le développement informatique et des réflexions sur le métier de dev et l'accessibilité.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      <div class="col-span-2">
        {#each data.posts as post}
          {#if post.published && (
              selectedTag === "all" ||
              post.tags.includes(selectedTag)
          )}
            <Item bind:selectedTag={selectedTag} tags={post.tags} title={post.title} description={post.description} href={`/blog/${post.slug}`} label="Lire l'article" />
          {/if}
        {/each}
      </div>
      <div>
        <Filters bind:selectedTag={selectedTag} allTags={allTags} />
      </div>
    </div>
  </div>
</section>
