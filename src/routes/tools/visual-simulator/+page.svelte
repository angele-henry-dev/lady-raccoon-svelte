<script lang="ts">
	import Header from "$components/design/Header.svelte";
	import Plant from "$components/design/Plant.svelte";
	import Filters from "$components/sections/tools/Filters.svelte";
  import { FILTERS } from "$lib/contrast";

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
  <title>Simuler le daltonisme et les handicaps visuels — Accessibilité web</title>
  <meta name="description" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
  <meta property="og:title" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
  <meta property="og:description" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
  <meta property="og:image" content="https://forabetter.tech/og-tools.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech/tools/visual-simulator-checker" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
  <meta name="twitter:description" content="Simuler le daltonisme et les handicaps visuels — Accessibilité web" />
  <meta name="twitter:image" content="https://forabetter.tech/og-tools.png" />
  <link rel="canonical" href="https://forabetter.tech/tools/visual-simulator" />
</svelte:head>

<Filters />

<Header />
<Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />
<div class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<h1>Simulateur de handicaps visuels</h1>

    <form
      class="flex gap-2 mb-4"
      on:submit|preventDefault={() => { /* On empêche le submit */ }}
      autocomplete="off"
    >
      <input
        type="url"
        bind:value={url}
        class="flex-1 p-2 border"
        placeholder="Entrez l’URL à prévisualiser (ex : https://…)"
        required
      />
      <select bind:value={selectedFilter} class="p-2 border">
        <option value="none">Aucun filtre</option>
        <optgroup label="Daltonismes">
          {#each FILTERS as f}
            <option value={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</option>
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
