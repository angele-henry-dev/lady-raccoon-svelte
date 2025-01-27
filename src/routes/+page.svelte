<script>
	import BackgroundRetro from "./_components/design/BackgroundRetro.svelte";
	import BackgroundStars from "./_components/design/BackgroundStars.svelte";
	import Arrow from "./_components/svg/Arrow.svelte";
</script>

<svelte:head>
	<title>Lady Raccoon • Un site rapide, accessible et optimisé</title>
	<meta name="Description" content="Boostez votre impact avec un site rapide, accessible et optimisé" />
</svelte:head>

<BackgroundStars />

<div class="my-20 container mx-auto">
    <div class="main-title mb-10">
      Boostez votre impact avec un site <span class="highlight">rapide, accessible et optimisé.</span>
    </div>
    <div>
      <span>Demandez un audit gratuit !</span>
      <button class="icon" type="button">→</button>
    </div>
    <Arrow />
</div>

<BackgroundRetro />

<div class='my-20 container mx-auto'>
    <h1>Saviez-vous que...</h1>
    <ul>
      <li>70 % des utilisateurs quittent un site s’il est lent ou inaccessible</li>
      <li>15 % de la population mondiale rencontre des difficultés à naviguer sur des sites web non accessibles</li>
      <li>En France, l’accessibilité est une obligation légale pour de nombreuses organisations publiques</li>
      <li>Le manquement aux obligations peut entraîner une sanction financière d’un montant de 20 000 euros par service en ligne</li>
    </ul>
</div>

<div class='my-20 container mx-auto'>
  <h1>La solution</h1>
  <ul>
    <li>Un site conforme aux normes WCAG 2.1, niveaux AA et AAA</li>
    <li>Une meilleure expérience utilisateur pour tous vos visiteurs</li>
    <li>Une image de marque renforcée et inclusive</li>
    <li>Une équipe sensibilisée et formée à l’accessibilité</li>
  </ul>
</div>

<div class='my-20 container mx-auto rounded-3xl border-4 p-5'>
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

<style>
.main-title {
    font-size: 3em;
}
</style>
