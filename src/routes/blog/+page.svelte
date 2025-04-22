<script>
	import Moon from "../../components/design/Moon.svelte";
	import Plant from "../../components/design/Plant.svelte";
	import Stars from "../../components/design/Stars.svelte";

</script>
<svelte:head>
  <title>Blog Tech • Ressources et Réflexions | forabetter.tech</title>
  <meta name="description" content="Découvre nos articles sur l'accessibilité, la performance web, le développement, la vie de freelance et bien plus. Un blog pensé pour les techs." />
  <meta property="og:title" content="Blog Tech • Ressources et Réflexions | forabetter.tech" />
  <meta property="og:description" content="Des ressources utiles et des réflexions pour les développeurs, designers et passionnés de tech qui veulent progresser et partager." />
  <meta property="og:image" content="https://forabetter.tech/og/blog-preview.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech/blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blog Tech • Ressources et Réflexions | forabetter.tech" />
  <meta name="twitter:description" content="Des ressources utiles et des réflexions pour les développeurs, designers et passionnés de tech qui veulent progresser et partager." />
  <meta name="twitter:image" content="https://forabetter.tech/og/blog-preview.png" />
</svelte:head>

<section class="relative w-full flex flex-col items-center justify-center mb-10">
  <div aria-hidden="true" class="hero relative h-[250px] w-full overflow-x-clip">
    <Stars />
    <Moon classes="absolute top-[10%] end-[10%] size-[100px]" full={false} />
    <div class="absolute -bottom-[0] -start-[5%] sm:-start-[20vmin] w-[70%] h-[50%] bg-[var(--color-black-light)] rounded-t-[50%] rounded-b-none"></div>
    <div class="absolute bottom-[0] -end-[20vmin] w-[120%] h-[30%] bg-[var(--background)] rounded-t-[50%] rounded-b-none"></div>
    <Plant class="absolute bottom-[10px] start-[10px] w-[30px] sm:w-[50px]" />
  </div>

  <div class="w-full max-w-5xl mx-auto px-4 sm:pb-10 z-[10]">
    <h1 class="text-2xl lg:text-4xl font-bold uppercase mb-5">Blog</h1>
    <p>Articles pour progresser et mieux comprendre.</p>

  </div>

  <Plant class="absolute bottom-[-15px] end-[0] w-[90px] sm:w-[150px]" />
</section>
