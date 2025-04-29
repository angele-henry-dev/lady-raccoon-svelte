<script lang="ts">
  import excuses from "$content/excuses.json";
	import Button from "$components/Button.svelte";
  import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";

  type ExcuseType = "neutre" | "cash" | "wtf";
  const excusesTypes: ExcuseType[] = ["neutre", "cash", "wtf"];

  let excuse = $state("");

  function generateExcuse(excuseLevel: ExcuseType) {
    const filteredExcuses = excuses[excuseLevel];
    const index = Math.floor(Math.random() * filteredExcuses.length);
    excuse = filteredExcuses[index];
  }
</script>

<svelte:head>
  <title>Besoin d'une excuse pour esquiver un test technique ? - forabetter.tech</title>
  <meta name="description" content="Besoin d'une excuse (plus ou moins crédible) pour éviter un test technique ? Utilisez notre générateur et économisez votre temps et votre énergie." />
</svelte:head>

<Header />
<Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />

<div class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<h1>Besoin d’une excuse pour dire « non merci » ?</h1>

    <p>
      Marre des tests techniques chronophages, parfois absurdes, souvent inutiles ? Nous aussi.
    </p>
    <p>
      Avec ce générateur d'excuses, trouvez en un clic une bonne (ou très mauvaise) raison d'esquiver ces épreuves qui ressemblent plus à un marathon qu'à une réelle évaluation de vos compétences.
    </p>
    <p><strong>Parce qu’un test technique ne devrait jamais être&nbsp;:</strong></p>
    <ul class="mb-5 list-disc list-inside">
      <li>un projet de trois jours non rémunéré,</li>
      <li>un test pour voir si tu gères le stress et la mauvaise ambiance,</li>
      <li>ou pire… un simple filtre automatique sans regard humain.</li>
    </ul>
    <p>
      Notre générateur est là pour vous rappeler qu’il est légitime de poser vos limites. Un clic, une excuse, et on passe à autre chose.
    </p>

    <div class="container mt-10">
      {#each excusesTypes as excusesType}
        <Button handleClick={() => generateExcuse(excusesType)} label={`Générer une excuse ${excusesType}`}>
          Excuse {excusesType}
        </Button>
      {/each}

      <div class="min-h-[100px] italic mt-6 p-4 border rounded-xl bg-[var(--foreground)] text-[var(--background)] shadow-md">
        {excuse}
      </div>
    </div>

    <Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
  </article>
</div>
