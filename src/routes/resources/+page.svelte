<script lang="ts">
  import resources from "$data/resources.json";
	import Moon from "../../components/design/Moon.svelte";
	import Plant from "../../components/design/Plant.svelte";
	import Stars from "../../components/design/Stars.svelte";
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

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <div aria-hidden="true" class="hero relative h-[250px] w-full overflow-x-clip">
    <Stars />
    <Moon classes="absolute top-[10%] end-[10%] size-[100px]" full={false} />
    <div class="absolute -bottom-[0] -start-[5%] sm:-start-[20vmin] w-[70%] h-[50%] bg-[var(--color-black-light)] rounded-t-[50%] rounded-b-none"></div>
    <div class="absolute bottom-[0] -end-[20vmin] w-[120%] h-[30%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
    <Plant class="absolute bottom-[10px] start-[10px] w-[30px] sm:w-[50px] scale-100" />
  </div>

  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10 z-[10]">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Ressources</h1>
    <p>Formations, ebooks, guides, bonus et contenus premios pour progresser.</p>
  
    <div class="grid grid-cols-1 gap-2">
      {#each resources as res}
        <!-- <Card title={res.title} badges={[res.type, res.badge]} description={res.description} image={res.image} href={res.link} link="Acheter" /> -->
      {/each}
    </div>

  </div>

  <Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px] scale-100" />
</section>
