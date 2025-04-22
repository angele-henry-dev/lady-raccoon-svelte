<script lang="ts">
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";
	import Item from "$components/Item.svelte";

  let { data } = $props();
  const tags = ["Vie de dev"];
</script>

<svelte:head>
  <title>Blog Tech • Ressources et Réflexions | forabetter.tech</title>
  <meta name="description" content="Découvre nos articles sur l'accessibilité, la performance web, le développement, la vie de freelance et bien plus. Un blog pensé pour les techs." />
  <meta property="og:title" content="Blog Tech • Articles et Réflexions | forabetter.tech" />
  <meta property="og:description" content="Des articles utiles et des réflexions pour les développeurs, designers et passionnés de tech qui veulent progresser et partager." />
  <meta property="og:image" content="https://forabetter.tech/og/blog-preview.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech/blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blog Tech • Ressources et Réflexions | forabetter.tech" />
  <meta name="twitter:description" content="Des articles utiles et des réflexions pour les développeurs, designers et passionnés de tech qui veulent progresser et partager." />
  <meta name="twitter:image" content="https://forabetter.tech/og/blog-preview.png" />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <Header />
  <Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />
  <Plant class="absolute bottom-0 start-[0] w-[90px] sm:w-[150px]" />

  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Blog</h1>
    <p>Des articles et des réflexions pour progresser et mieux comprendre.</p>

    {#each data.posts as post}
      {#if post.published}
        <Item types={post.tags} title={post.title} description={post.description} href={`/blog/${post.slug}`} label="Lire la suite de l'article" />
      {/if}
    {/each}
  </div>
</section>
