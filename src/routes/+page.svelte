<script>
	import BackgroundRetro from "./_components/design/BackgroundRetro.svelte";
	import BackgroundStars from "./_components/design/BackgroundStars.svelte";
	import Arrow from "./_components/svg/Arrow.svelte";
	import Audit from "./_components/Audit.svelte";
	import Card from "./_components/Card.svelte";
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
    <p class="text-4xl md:text-6xl mb-10">Boostez votre impact avec un site <span class="highlight">rapide, accessible et optimisé.</span></p>
    <Audit />
  </div>
</div>

<BackgroundRetro />

<div class="my-20 container mx-auto">
  <h1>Savez-vous que...</h1>
  <div class="mb-10">
    <ul>
      <li>70% des utilisateurs <span class="highlight">quittent un site internet rapidement</span> s’il est lent ou inaccessible.</li>
      <li>15% de la population mondiale rencontre des <span class="highlight">difficultés à naviguer</span> sur des sites web non accessibles.</li>
      <li>En France, l’accessibilité est une <span class="highlight">obligation légale</span> pour de nombreuses organisations publiques.</li>
      <li>Le non-respect aux obligations peut entraîner <span class="highlight">une sanction de 20.000€</span> par service.</li>
    </ul>
  </div>

  <h1>→ Ce que je propose pour y remédier</h1>
  <div>
    <ul>
      <li>Une meilleure <span class="highlight">expérience utilisateur</span> pour tous vos visiteurs.</li>
      <li>Un site conforme aux <span class="highlight">normes WCAG 2.1</span>, niveaux AA et AAA.</li>
      <li>Une <span class="highlight">image de marque</span> renforcée et inclusive.</li>
      <li>Une équipe sensibilisée et <span class="highlight">formée</span> à l’accessibilité.</li>
    </ul>
  </div>
</div>
<Audit classes="mx-10 pt-10" />

<div class='inverted my-20 py-10'>
  <div class="container mx-auto py-10">
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

<div class='my-20 container mx-auto'>
  <h1>Mon offre en détail</h1>

  <div class="mt-10 flex flex-row gap-10 justify-around">
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
