<script>
	import Button from "../components/Button.svelte";
	import Moon from "../components/Moon.svelte";
	import Stars from "../components/Stars.svelte";
	import Tree from "../components/Tree.svelte";

/* 	import Audit from "../components/Audit.svelte";
	import Card from "../components/Card.svelte";
  import issues from "$data/issues.json";
  import offers from "$data/offers.json";
  import aboutme from "$data/aboutme.json";
  import faq from "$data/faq.json"; */
</script>

<svelte:head>
	<title>Lady Raccoon • Spécialiste en Accessibilité Web & Performance • L’accessibilité numérique n’est pas une option</title>
	<meta name="description" content="J'accompagne les entreprises à améliorer l’accessibilité numérique et la performance de leurs sites web. Conformité WCAG, optimisation SEO et sites rapides. L’accessibilité est un standard." />
</svelte:head>

<Stars />

<div class="hero relative text-center flex flex-col items-center justify-center">
  <div class="top relative w-full flex flex-col items-center justify-center flex-grow">
    <div class="moon-container">
      <Moon />
      <h1 class="text-6xl font-bold uppercase z-10">For a<br>better<br>design</h1>
    </div>
  </div>
  <Button label="Découvrez" />
  <div class="bottom relative w-full flex flex-col items-center justify-center">
    <div class="tree-container absolute">
      <Tree />
    </div>
    <p class="text-xl p-5 max-w-2xl z-10">Un espace conçu pour les développeurs qui veulent progresser dans une ambiance calme, moderne et technique.</p>
  </div>
</div>

<style>
  .tree-container {
      bottom: 0;
      left: -20%;
      width: 60vw;
      height: 150vh;
  }

  .hero {
    width: 100%;
    height: calc(100vh - 50px);
  }
  .hero .top {
    width: 300px;
  }
  .hero .bottom {
    height: 35%;
    background-color: var(--background);
  }
  .hero .bottom::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(2px);
    background: linear-gradient(to bottom, 
        rgba(0, 213, 255, 0.1) 0%, 
        rgba(30, 42, 56, 0.1) 20%, 
        rgba(30, 42, 56, 0) 70%);
  }

  h1 {
    width: 300px;
    text-shadow:
      0 0 10px var(--primary),
      0 0 100px var(--primary);
    color: var(--background);
  }
</style>

<!-- <div class="dark hero text-center w-full flex flex-row gap-4">
  <div class="container m-auto">
    <h1 class="text-4xl md:text-6xl mb-20">L’accessibilité web n’est pas une option.<br><span class="annotation highlight">C’est un standard.</span></h1>
    <Audit />
  </div>
</div>

<div class="my-20 w-full container mx-auto p-5 md:p-10">
  <h2 class="text-center">{issues.title}</h2>
  <p class="mx-auto text-center w-full md:max-w-[50%] mb-20">
    {issues.subtitle}
  </p>

  <div class="text-center grid grid-cols-1 lg:grid-cols-3">
    {#each issues.items as item}
      <div class="lg:border-r p-5">
        <h3 class="text-center"><span class="annotation highlight">{item.title}</span></h3>
          {#each item.items as line}
            <p class="border-b p-5">{line}</p>
          {/each}
      </div>
    {/each}
  </div>

</div>

<div class='letter container mx-auto p-5 md:p-10'>
  <div class="mx-auto my-10">
    <h2>{aboutme.title}</h2>
    <div class="content pl-10 my-10">
      {#each aboutme.items as item}
        <h3>{item.title}</h3>
        <ul>
          {#each item.why as why}
            <li>{why}</li>
          {/each}
        </ul>
      {/each}
    </div>
  </div>
</div>

<div class='my-20 container mx-auto p-5 md:p-10'>
  <h2>{offers.title}</h2>

  <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-around">
    {#each offers.items as offer}
      {#snippet description()}
        <p><b>{offer.goal_title} :</b> {offer.goal}</p>
        <div class="mt-3"><b>{offer.what} :</b>
          <ul>
            {#each offer.how as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
        <p><b>{offer.deliverable_title} :</b> {offer.deliverable}</p>
      {/snippet}
      {#snippet cta()}{/snippet}
      <Card title="{offer.title}" {description} {cta} />
    {/each}
  </div>
  <div class="mt-10 text-center">
    <Audit />
  </div>
</div>

<section class='letter container mx-auto mb-10 p-5 md:p-10'>
  <div class="accordion mx-auto my-10">
    <h2 class="mb-10">{faq.title}</h2>
    {#each faq.items as item, index}
      <div class="tab">
        <input type="checkbox" name="accordion-1" id="{'cb' + index}">
        <label for="{'cb' + index}" class="tab__label">{item.question}</label>
        <div class="tab__content">
          <p>{item.answer}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
.tab {
  position: relative;
  border: 2px solid var(--secondary);
  border-bottom-width: 0;
  border-radius: var(--hand-drawn-border);
}
.tab:last-child {
  border-bottom-width: 2px;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab__content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s;
}
.tab input:checked ~ .tab__content {
  max-height: 10rem;
}

.accordion {
  overflow: hidden;
}
.tab__label {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 1rem;
}
.tab__label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  transition: all 0.35s;
}
.tab input:checked + .tab__label {
  font-weight: 700;
  transition: all 0.35s;
}
.tab input:checked + .tab__label::after {
  transform: rotate(270deg);
  transform-origin: 9px 18px;
}
.tab__content p {
  margin: 0;
  padding: 1rem;
}
</style> -->
