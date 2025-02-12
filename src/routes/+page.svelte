<script>
	import Audit from "../components/Audit.svelte";
	import Card from "../components/Card.svelte";
  import issues from "$data/issues.json";
  import offers from "$data/offers.json";
  import aboutme from "$data/aboutme.json";
  import faq from "$data/faq.json";
</script>

<svelte:head>
	<title>Lady Raccoon • Spécialiste en Accessibilité Web & Performance • L’accessibilité numérique n’est pas une option</title>
	<meta name="description" content="J'accompagne les entreprises à améliorer l’accessibilité numérique et la performance de leurs sites web. Conformité WCAG, optimisation SEO et sites rapides. L’accessibilité est un standard." />
</svelte:head>

<div class="dark hero text-center w-full flex flex-row gap-4">
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

<div class='inverted p-5 md:p-10'>
  <div class="container mx-auto my-10">
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
      {#snippet cta()}
        <a class="button bg-primary align-middle" target="_blank" href="{offer.link}">Prendre RDV</a>
      {/snippet}
      <Card title="{offer.title}" {description} {cta} />
    {/each}
  </div>
</div>

<section class='inverted mb-10 p-5 md:p-10'>
  <div class="accordion container mx-auto my-10">
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
</style>
