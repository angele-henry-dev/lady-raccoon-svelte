<script>
	import BackgroundRetro from "../components/design/BackgroundRetro.svelte";
	import BackgroundStars from "../components/design/BackgroundStars.svelte";
	import Arrow from "../components/svg/Arrow.svelte";
	import Audit from "../components/Audit.svelte";
	import Card from "../components/Card.svelte";
  import offers from "$data/offers.json";
  import aboutme from "$data/aboutme.json";
</script>

<svelte:head>
	<title>Lady Raccoon • Un site rapide, accessible et optimisé</title>
	<meta name="Description" content="Boostez votre impact avec un site rapide, accessible et optimisé" />
  <script src="https://widget.senja.io/widget/25c22f7b-9820-49bf-bd48-304df439fb3b/platform.js" type="text/javascript" async></script>
</svelte:head>

<BackgroundStars />

<div class="dark hero text-center w-full flex flex-col justify-around">
  <div class="container mx-auto">
    <p class="text-4xl md:text-6xl mb-20">Boostez votre impact avec un site <br><span class="highlight">rapide, accessible et optimisé.</span></p>
    <Audit />
  </div>
</div>

<BackgroundRetro />

<div class="my-20 w-full container mx-auto p-5 md:p-10">
  <h1 class="text-center">Ne laissez plus votre site freiner votre succès.</h1>
  <p class="mx-auto text-center w-full md:max-w-[50%] mb-20">
    Proposez une meilleure expérience utilisateur à tous vos visiteurs, 
      une image de marque renforcée, inclusive, responsable et un site conforme aux normes WCAG 2.1.
  </p>

  <div class="text-center grid grid-cols-1 lg:grid-cols-3">
    <div class="lg:border-r p-5">
      <h2 class="text-center"><span class="highlight">Évitez les sanctions, restez en conformité</span></h2>
        <p class="border-b p-5">Jusqu’à 20 000 € d’amende pour non-conformité ? Ne prenez pas de risques !</p>
        <p class="border-b p-5">Un site 100% conforme aux normes pour une accessibilité sans faille.</p>
        <p class="p-5">Une équipe formée et sensibilisée à l’accessibilité.</p>
    </div>
    <div class="lg:border-r p-5">
      <h2 class="text-center"><span class="highlight">Dites adieu aux lenteurs</span></h2>
        <p class="border-b p-5">Un site rapide et performant, c'est plus d'engagement et moins d'abandons !</p>
        <p class="border-b p-5">Optimisation technique et bonnes pratiques pour accélérer le chargement.</p>
        <p class="p-5">Adieu l’attente, bonjour l’expérience utilisateur !</p>
    </div>
    <div class="p-5">
      <h2 class="text-center"><span class="highlight">Boostez votre visibilité</span></h2>
        <p class="border-b p-5">Un site qualitatif, mieux classé sur les moteurs de recherche.</p>
        <p class="border-b p-5">Un positionnement optimisé grâce à une stratégie sur-mesure, définie avec vous.</p>
        <p class="p-5">Plus de trafic, plus d’impact et plus de clients !</p>
    </div>
  </div>

</div>
<div class="text-center">
  <Audit />
</div>

<div class='inverted my-20 p-5 md:p-10'>
  <div class="container mx-auto mt-20">
    <h1>Pourquoi travailler avec moi ?</h1>
    <div class="content border-l-4 pl-5 my-20">
      {#each aboutme as item}
        <h2>{item.title}</h2>
        <ul>
          {#each item.why as why}
            <li>{why}</li>
          {/each}
        </ul>
      {/each}
    </div>
    <div class="senja-embed" data-id="25c22f7b-9820-49bf-bd48-304df439fb3b" data-mode="shadow" data-lazyload="false"></div>
  </div>
</div>

<div class='my-20 container mx-auto p-5 md:p-10'>
  <h1>Mon offre en détail</h1>

  <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-around">
    {#each offers as offer}
      {#snippet description()}
        <p><b>Objectif:</b> {offer.goal}</p>
        <div class="mt-3"><b>{offer.what} :</b>
          <ul>
            {#each offer.how as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
        <p><b>Livrable :</b> {offer.deliverable}</p>
      {/snippet}
      {#snippet cta()}
        <a class="button align-middle" target="_blank" href="{offer.link}">Prendre RDV</a>
      {/snippet}
      <Card title="{offer.title}" {description} {cta} />
    {/each}
  </div>
</div>
