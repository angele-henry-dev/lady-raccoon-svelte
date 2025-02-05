<script>
	import BackgroundRetro from "../components/design/BackgroundRetro.svelte";
	import BackgroundStars from "../components/design/BackgroundStars.svelte";
	import Audit from "../components/Audit.svelte";
	import Card from "../components/Card.svelte";
  import issues from "$data/issues.json";
  import offers from "$data/offers.json";
  import aboutme from "$data/aboutme.json";
  import faq from "$data/faq.json";
</script>

<svelte:head>
	<title>Lady Raccoon • Un site rapide, accessible et optimisé</title>
	<meta name="Description" content="Boostez votre impact avec un site rapide, accessible et optimisé" />
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
  <h1 class="text-center">{issues.title}</h1>
  <p class="mx-auto text-center w-full md:max-w-[50%] mb-20">
    {issues.subtitle}
  </p>

  <div class="text-center grid grid-cols-1 lg:grid-cols-3">
    {#each issues.items as item}
      <div class="lg:border-r p-5">
        <h2 class="text-center"><span class="highlight">{item.title}</span></h2>
          {#each item.items as line}
            <p class="border-b p-5">{line}</p>
          {/each}
      </div>
    {/each}
  </div>

</div>

<div class='inverted p-5 md:p-10'>
  <div class="container mx-auto">
    <h1>{aboutme.title}</h1>
    <div class="content border-l-4 pl-5 my-10">
      {#each aboutme.items as item}
        <h2>{item.title}</h2>
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
  <h1>{offers.title}</h1>

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
    <h1 class="mb-10">{faq.title}</h1>
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

/* Arrow animation */
.tab input:not(:checked) + .tab__label:hover::after {
  animation: bounce .5s infinite;
}
@keyframes bounce {
  25% {
    transform: rotate(90deg) translate(.25rem);
  }
  75% {
    transform: rotate(90deg) translate(-.25rem);
  }
}
</style>
