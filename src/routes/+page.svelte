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

<div class="dark hero w-full flex flex-col justify-around">
  <div class="container mx-auto">
    <p class="text-4xl md:text-6xl mb-10">Boostez votre impact avec un site <span class="highlight">rapide, accessible et optimisé.</span></p>
    <Audit />
    <Arrow />
  </div>
</div>

<div class="mb-20 container mx-auto">
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
        <p>Un site conforme aux <span class="highlight">normes WCAG 2.1</span>, niveaux AA et AAA.</p>
      </div>
    </div>
    <div class="card w-64">
      <div class="card-info">
        <p>Une meilleure <span class="highlight">expérience utilisateur</span> pour tous vos visiteurs.</p>
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

<div class='my-20 container mx-auto rounded-3xl border p-5'>
  <h1>Pourquoi travailler avec moi ?</h1>

  <h2>1. Expertise technique</h2>
  <ul>
    <li>Plus de 10 ans d’expérience en développement web</li>
    <li>Spécialisation en accessibilité web et conformité WCAG</li>
  </ul>
  
  <h2>2. Approche personnalisée</h2>
  <ul>
    <li>Analyse adaptée à vos besoins et à vos utilisateurs</li>
    <li>Solutions sur mesure pour répondre à vos enjeux spécifiques</li>
  </ul>
  
  <h2>3. Implication durable</h2>
  <ul>
    <li>Accompagnement de vos équipes pour intégrer les bonnes pratiques sur le long terme</li>
    <li>Support continu pour garantir une accessibilité optimale</li>
  </ul>
</div>
<Audit classes="mx-10 pt-10" />

<div class='my-20 container mx-auto'>
  <h1>Mon offre en détail</h1>

  <h2>1. Audit d’accessibilité</h2>
  <ul>
    <li><b>Objectif:</b> Identifier les problèmes d’accessibilité et proposer des solutions concrètes.</li>
    <li>
      <b>Ce que j’analyse :</b>
      <ul>
        <li>Structure HTML et sémantique</li>
        <li>Couleurs et contrastes</li>
        <li>Navigation clavier et interactions</li>
        <li>Conformité avec les normes WCAG 2.1 (AA et AAA)</li>
      </ul>
    </li>
    <li><b>Livrable :</b> Un rapport détaillé avec un plan d’action priorisé.</li>
  </ul>

  <h2>2. Corrections et mise en conformité</h2>
  <ul>
    <li><b>Objectif:</b> Appliquer les changements nécessaires pour rendre votre site conforme.</li>
    <li>
      <b>Ce que je fais :</b>
      <ul>
        <li>Corrections HTML/CSS sémantiques</li>
        <li>Optimisation des contrastes</li>
        <li>Ajout d’éléments ARIA pour les lecteurs d’écran</li>
        <li>Tests après modifications pour valider la conformité</li>
      </ul>
    </li>
    <li><b>Livrable :</b> Un site conforme aux normes WCAG 2.1, accessible à tous.</li>
  </ul>

  <h2>3. Formation des équipes techniques</h2>
  <ul>
    <li><b>Objectif:</b> Sensibiliser vos développeurs au développement accessible.</li>
    <li>
      <b>Programme :</b>
      <ul>
        <li>Introduction aux WCAG et principes de base</li>
        <li>Démonstration d’outils et tests pratiques</li>
        <li>Cas concrets appliqués à vos projets</li>
      </ul>
    </li>
    <li><b>Livrable :</b>
      <ul>
        <li>Supports de formation PDF</li>
        <li>Accès à des ressources pratiques pour aller plus loin</li>
      </ul>
    </li>
  </ul>
</div>
<Audit classes="mx-10 mb-20" />
