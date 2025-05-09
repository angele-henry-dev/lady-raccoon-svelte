<script lang="ts">
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";
	import Filters from "$components/sections/tools/ColorBlind.svelte";
  import { FILTERS_DATA } from "$lib/contrast";
  const FILTERS = Object.keys(FILTERS_DATA) as Array<keyof typeof FILTERS_DATA>;

  let url = "https://forabetter.tech";
  let selectedFilter = "none";
  let iframeError = false;

  const filters: Record<string, string> = {
    none: "",
    ...Object.fromEntries(FILTERS.map(f => [f, `url(#${f})`]))
  };

  function handleIframeError() {
    iframeError = true;
  }

  function handleLoad() {
    iframeError = false;
  }
</script>

<svelte:head>
  <title>Simuler le daltonisme et les handicaps visuels — Accessibilité web - forabetter.tech</title>
  <meta name="description" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
</svelte:head>

<Filters />

<Header />
<Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />
<div class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<h1>Simulateur de handicaps visuels</h1>

    <p>
      Le simulateur de handicaps visuels te permet de visualiser en temps réel 
      comment un site internet apparaît pour des personnes atteintes de différents 
      types de daltonisme ou de troubles de la vision. Cet outil est idéal pour sensibiliser, 
      tester et améliorer l’accessibilité de tes interfaces, en rendant tes choix de couleurs 
      inclusifs pour tous.
    </p>

    <p><strong>Comment l'utiliser ?</strong></p>

    <ol>
      <li>Saisis l’URL du site web que tu souhaites tester dans le champ prévu à cet effet.</li>
      <li>Choisis le filtre (protanopie, tritanopie, achromatopsie, etc.) dans le menu déroulant.</li>
      <li>Visualise immédiatement le rendu du site tel qu’il serait perçu par une personne concernée.</li>
      <li>Teste plusieurs filtres pour comparer et ajuster tes designs en conséquence.</li>
    </ol>

    <aside class="border-l rounded-none pl-5 my-10">Astuce&nbsp;:&nbsp;Certains sites peuvent refuser l’affichage dans l’aperçu (restriction de sécurité), mais tu peux toujours tester tes propres projets, maquettes ou sites compatibles.</aside>

    <form
      class="flex gap-2 mb-4 text-[var(--background)]"
      on:submit|preventDefault={() => { /* On empêche le submit */ }}
      autocomplete="off"
    >
      <input
        type="url"
        bind:value={url}
        class="flex-1 p-2 border"
        placeholder="Entre l’URL à prévisualiser (ex : https://…)"
        required
      />
      <select bind:value={selectedFilter} class="p-2 border" aria-label="Choix du filtre de daltonisme">
        <option value="none">Aucun filtre</option>
        <optgroup label="Daltonismes">
          {#each FILTERS as filter}
            <option value={filter}>{FILTERS_DATA[filter].label}</option>
          {/each}
        </optgroup>
      </select>
    </form>

    <div class="relative border rounded-none overflow-hidden min-h-[350px]">
      {#if iframeError}
        <div class="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
          <p class="text-center text-gray-600 px-4">
            Impossible d’afficher ce site en aperçu.<br />
            (Le site bloque l’affichage en iframe pour des raisons de sécurité.)
          </p>
        </div>
      {/if}
      <iframe
        title="Affichage du site internet selon le filtre sélectionné"
        src={url}
        width="100%"
        height="650"
        class="block w-full h-[650px] rounded-none"
        style="filter: {filters[selectedFilter]};"
        on:error={handleIframeError}
        on:load={handleLoad}
      ></iframe>
    </div>
    <p class="text-xs mt-2">
      Certains sites peuvent ne pas s’afficher (restriction sécurité navigateur).
    </p>

		<Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
  </article>
</div>
