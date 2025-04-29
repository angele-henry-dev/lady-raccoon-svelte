<script lang="ts">
  import excuses from "$content/excuses.json";
	import Button from "$components/Button.svelte";
  import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";

  type ExcuseType = "neutre" | "cash" | "wtf";
  const excusesTypes: ExcuseType[] = ["neutre", "cash", "wtf"];

  let excuse = $state("");
  let displayed = $state("");
  let typing = $state(false);

  function generateExcuse(excuseLevel: ExcuseType) {
    if (typing) return;
    const filteredExcuses = excuses[excuseLevel];
    const index = Math.floor(Math.random() * filteredExcuses.length);
    excuse = filteredExcuses[index];
    displayed = '';
    typeExcuse();
  }
  async function typeExcuse() {
    typing = true;
    for (let i = 0; i <= excuse.length; i++) {
      displayed = excuse.slice(0, i);
      await new Promise(r => setTimeout(r, 30));
    }
    typing = false;
  }
  function shareOnLinkedIn() {
    if (!excuse) return;
    const text = `Aujourd’hui j’ai tiré cette excuse pour éviter un test technique :\n"${excuse}"\n\nEt vous ?`;
    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
  function shareOnTwitter() {
    if (!excuse) return;
    const text = `Excuse pour éviter un test technique : \"${excuse}\" #dev #humourdev #teststechniques #forabettertech`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
  function copyToClipboard() {
    if (excuse) {
      navigator.clipboard.writeText(excuse);
      alert("Excuse copiée !");
    }
  }
</script>

<svelte:head>
  <title>Besoin d'une excuse pour esquiver un test technique ? - forabetter.tech</title>
  <meta name="description" content="Besoin d'une excuse pour éviter un test technique ? Utilise notre générateur et économise ton temps et ton énergie." />
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
      Avec ce générateur d'excuses, trouve en un clic une bonne (ou très mauvaise) raison d'esquiver ces épreuves qui ressemblent plus à un marathon qu'à une réelle évaluation de tes compétences.
    </p>
    <p class="text-[var(--secondary)]">Parce qu’un test technique ne devrait jamais être&nbsp;:</p>
    <ul class="mb-5 list-disc list-inside">
      <li>un projet de trois jours non rémunéré,</li>
      <li>un test pour voir si tu gères le stress et la mauvaise ambiance,</li>
      <li>ou pire… un simple filtre automatique sans regard humain.</li>
    </ul>
    <p>
      Notre générateur est là pour te rappeler qu’il est légitime de poser tes limites. Un clic, une excuse, et on passe à autre chose.
    </p>

    <div class="container mt-10">
      <div class="flex flex-row flex-wrap gap-2">
        {#each excusesTypes as excusesType}
          <Button handleClick={() => generateExcuse(excusesType)} label={`Générer une excuse ${excusesType}`}>
            Excuse {excusesType}
          </Button>
        {/each}
      </div>

      <div class="flex flex-row flex-wrap gap-2">
        <Button handleClick={copyToClipboard} label="Copier l'excuse" disabled={!displayed}>
          Copie l'excuse
        </Button>
        <Button handleClick={shareOnLinkedIn} label="Partager sur LinkedIn" disabled={!displayed}>
          <img src="/icons/linkedin.svg" alt="LinkedIn" class="rounded-none" /> Partage sur LinkedIn
        </Button>
        <Button handleClick={shareOnTwitter} label="Partager sur Twitter" disabled={!displayed}>
          <img src="/icons/x.svg" alt="Twitter" class="rounded-none" /> Partage sur Twitter
        </Button>
      </div>

      <div class="min-h-[100px] italic mt-6 p-4 border rounded-xl bg-[var(--foreground)] text-[var(--background)] shadow-md">
        {#if displayed}
          {displayed}
        {/if}
      </div>
    </div>

    <Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
  </article>
</div>
     