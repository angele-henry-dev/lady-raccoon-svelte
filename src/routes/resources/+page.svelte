<script lang="ts">
    import resources from "$data/resources.json";
	import Card from "../../components/Card.svelte";
</script>

<svelte:head>
    <title>Ressources pour les développeurs et passionnés de tech • forabetter.tech</title>
    <meta name="description" content="Découvre mes ebooks, formations, outils et contenus premium pour les développeurs, UX/UI, DevOps et passionnés de technologie." />
    <meta property="og:title" content="Ressources pour les développeurs et passionnés de tech • forabetter.tech" />
    <meta property="og:description" content="Une sélection de contenus pour progresser : ebooks, formations, outils, Discord premium et bien plus." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://forabetter.tech/ressources" />
    <meta property="og:image" content="https://forabetter.tech/images/preview-ressources.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ressources pour les développeurs et passionnés de tech • forabetter.tech" />
    <meta name="twitter:description" content="Une sélection de contenus pour progresser : ebooks, formations, outils, Discord premium et bien plus." />
    <meta name="twitter:image" content="https://forabetter.tech/images/preview-ressources.jpg" />
</svelte:head>
  
<section class="w-5/6 mx-auto my-10">
    <h1 class="text-4xl sm:text-5xl font-bold mb-6">Ressources</h1>
    <p class="mb-8 text-lg">Formations, ebooks, guides, bonus et contenus premios pour progresser.</p>
  
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {#each resources as res}
        <Card title="{res.title}" badges="{[res.type, res.badge]}" description="{res.description}" image="{res.image}" />
      {/each}
    </div>
</section>
  
<style scoped>
    :global(button) {
      font-weight: bold;
      transition: background-color 0.2s ease;
    }
</style>
  