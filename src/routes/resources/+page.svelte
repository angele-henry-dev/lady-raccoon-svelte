<script lang="ts">
    let filter: 'all' | 'free' | 'paid' = 'all';
  
    const resources = [
      {
        title: "Atelier A11Y",
        description: "Rendre son site accessible sans prise de tête.",
        type: "formation",
        isFree: false,
        badge: "Nouveau"
      },
      {
        title: "L’accessibilité web sans prise de tête",
        description: "Un guide clair pour tout comprendre.",
        type: "ebook",
        isFree: true
      },
      {
        title: "SvelteKit pour les devs curieux",
        description: "Apprends SvelteKit avec des cas concrets.",
        type: "formation",
        isFree: false,
        badge: "Nouveau"
      },
      {
        title: "Discord Premium",
        description: "Canal privé, replays exclusifs, coaching.",
        type: "premium",
        isFree: false
      },
      {
        title: "Checklist d’accessibilité WCAG 2.1",
        description: "Une checklist simple et utile.",
        type: "bonus",
        isFree: true
      }
    ];
  
    $: filtered = resources.filter(r => {
      if (filter === 'all') return true;
      return filter === 'free' ? r.isFree : !r.isFree;
    });
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
    <p class="mb-8 text-lg">Formations, ebooks, guides, bonus et contenus premium pour progresser.</p>
  
    <div class="flex gap-4 mb-8">
      <button class="px-4 py-2 rounded text-black bg-blue-200" onclick={() => filter = 'all'}>Toutes</button>
      <button class="px-4 py-2 rounded text-black bg-green-200" onclick={() => filter = 'free'}>Gratuites</button>
      <button class="px-4 py-2 rounded text-black bg-yellow-200" onclick={() => filter = 'paid'}>Premium</button>
    </div>
  
    <div class="grid md:grid-cols-2 gap-6">
      {#each filtered as res}
        <div class="border border-gray-300 p-5 rounded-xl shadow-sm hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <h2 class="text-xl font-semibold">{res.title}</h2>
            {#if res.badge}
              <span class="text-sm px-2 py-1 bg-purple-200 text-black rounded-full">{res.badge}</span>
            {/if}
          </div>
          <p class="mt-2">{res.description}</p>
          <p class="mt-3 text-sm italic">{res.isFree ? 'Gratuit' : 'Premium'}</p>
        </div>
      {/each}
    </div>
</section>
  
<style>
    :global(button) {
      font-weight: bold;
      transition: background-color 0.2s ease;
    }
</style>
  