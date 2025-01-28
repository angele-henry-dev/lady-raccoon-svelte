<script>
	import Audit from "./_components/Audit.svelte";
	import BackgroundRetro from "./_components/design/BackgroundRetro.svelte";
	import BackgroundStars from "./_components/design/BackgroundStars.svelte";
	import Arrow from "./_components/svg/Arrow.svelte";
</script>

<svelte:head>
	<title>Lady Raccoon • Un site rapide, accessible et optimisé</title>
	<meta name="Description" content="Boostez votre impact avec un site rapide, accessible et optimisé" />
</svelte:head>

<BackgroundStars />

<div class="dark hero w-full flex flex-col justify-around">
  <div class="container mx-auto">
    <p class="text-4xl md:text-6xl mb-10">Boostez votre impact avec un site <span class="highlight">rapide, accessible et optimisé.</span></p>
    <Audit />
  </div>
</div>

<BackgroundRetro />

<div class="my-20 container mx-auto">
  <h1>Saviez-vous que...</h1>
  <div class="mt-10 mb-20 flex flex-row flex-wrap gap-10 justify-center">
    <div class="card w-64">
      <div class="card-info">
        <p>70% des utilisateurs <span class="highlight">quittent un site internet rapidement</span> s’il est lent ou inaccessible.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>15% de la population mondiale rencontre des <span class="highlight">difficultés à naviguer</span> sur des sites web non accessibles.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>En France, l’accessibilité est une <span class="highlight">obligation légale</span> pour de nombreuses organisations publiques.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>Le non-respect aux obligations peut entraîner <span class="highlight">une sanction de 20.000€</span> par service.</p>
      </div>
    </div>
  </div>

  <h1>→ La solution</h1>
  <div class="mt-10 flex flex-row flex-wrap gap-10 justify-center">
    <div class="card w-64">
      <div class="card-info">
        <p>Une meilleure <span class="highlight">expérience utilisateur</span> pour tous vos visiteurs.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>Un site conforme aux <span class="highlight">normes WCAG 2.1</span>, niveaux AA et AAA.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>Une <span class="highlight">image de marque</span> renforcée et inclusive.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>Une équipe sensibilisée et <span class="highlight">formée</span> à l’accessibilité.</p>
      </div>
    </div>
  </div>
</div>
<Audit classes="mx-10 pt-10" />

<div class='inverted my-20 py-10'>
  <div class="container mx-auto py-10">
    <h1>Pourquoi travailler avec moi ?</h1>
    <div class="content border-l-4 pl-5 mt-5">
      <h2>Expertise technique</h2>
      <ul>
        <li>Plus de 10 ans d’expérience en développement web</li>
        <li>Spécialisation en accessibilité web et conformité WCAG</li>
      </ul>
      
      <h2>Approche personnalisée</h2>
      <ul>
        <li>Analyse adaptée à vos besoins et à vos utilisateurs</li>
        <li>Solutions sur mesure pour répondre à vos enjeux spécifiques</li>
      </ul>
      
      <h2>Implication durable</h2>
      <ul>
        <li>Accompagnement de vos équipes pour intégrer les bonnes pratiques sur le long terme</li>
        <li>Support continu pour garantir une accessibilité optimale</li>
      </ul>
    </div>
  </div>
</div>
<Audit classes="mx-10 pt-10" />

<div class='my-20 container mx-auto'>
  <h1>Mon offre en détail</h1>

  <div class="mt-10 flex flex-row gap-10 justify-around">
    <div class="card">
      <div class="card-info">
        <div class="title">Audit détaillé d’accessibilité</div>
        <div class="description">
          <p><b>Objectif:</b> Identifier les problèmes d’accessibilité et proposer des solutions concrètes.</p>
          <div class="mt-3"><b>Ce que j’analyse :</b>
            <ul>
              <li>Structure HTML et sémantique</li>
              <li>Couleurs et contrastes</li>
              <li>Navigation clavier et interactions</li>
              <li>Conformité avec les normes WCAG 2.1 (AA et AAA)</li>
            </ul>
          </div>
          <p><b>Livrable :</b> Un rapport détaillé avec un plan d’action priorisé.</p>
        </div>
        <button class="my-3">
          Buy now
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-info">
        <div class="title">Corrections et mise en conformité</div>
        <div class="description">
          <p><b>Objectif:</b> Appliquer les changements nécessaires pour rendre votre site conforme.</p>
          <div class="mt-3"><b>Ce que j’analyse :</b>
            <ul>
              <li>Corrections HTML/CSS sémantiques</li>
              <li>Optimisation des contrastes</li>
              <li>Ajout d’éléments ARIA pour les lecteurs d’écran</li>
              <li>Tests après modifications pour valider la conformité</li>
            </ul>
          </div>
          <p><b>Livrable :</b> Un site conforme aux normes WCAG 2.1, accessible à tous.</p>
        </div>
        <button class="my-3">
          Buy now
        </button>
      </div>
    </div>

    <div class="card">
      <div class="card-info">
        <div class="title">Formation des équipes techniques</div>
        <div class="description">
          <p><b>Objectif:</b> Sensibiliser vos développeurs au développement accessible.</p>
          <div class="mt-3"><b>Ce que j’analyse :</b>
            <ul>
              <li>Introduction aux WCAG et principes de base</li>
              <li>Démonstration d’outils et tests pratiques</li>
              <li>Cas concrets appliqués à vos projets</li>
            </ul>
          </div>
          <p><b>Livrable :</b> Supports de formation PDF et accès à des ressources pratiques pour aller plus loin.</p>
        </div>
        <button class="my-3">
          Buy now
        </button>
      </div>
    </div>
  </div>
</div>
<Audit classes="mx-10 mb-20" />
