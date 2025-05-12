<script lang="ts">
    import { onMount } from 'svelte';
    import {
		CONTRAST_RATIO_AA,
		CONTRAST_RATIO_AAA,
		contrastRatio,
		adjustBgColorAuto,
		adjustTextColorAuto,
		simulateColorBlindness
	} from '$lib/contrast';
	import Button from '$components/Button.svelte';
	import Header from '$components/design/Header.svelte';
	import Plant from '$components/design/Plant.svelte';
	import Filters from '$components/sections/tools/ColorBlind.svelte';
    import { FILTERS_DATA } from "$lib/contrast";
    const FILTERS = Object.keys(FILTERS_DATA) as Array<keyof typeof FILTERS_DATA>;

    let bgColor = "#f8f8f8";
    let textColor = "#111110";
    let visualContrasts: Record<string, number> = { contrast: 0 };

    function adjustTextColor() {
        textColor = adjustTextColorAuto(bgColor, textColor);
        updateContrast();
    }
    function adjustBgColor() {
        bgColor = adjustBgColorAuto(bgColor, textColor);
        updateContrast();
    }

	function updateContrast() {
        // Contraste "normal"
        visualContrasts.contrast = contrastRatio(bgColor, textColor);

        // Contrastes pour tous les handicaps visuels définis dans FILTERS
        for (const filter of FILTERS) {
            visualContrasts[filter] = contrastRatio(
                simulateColorBlindness(bgColor, filter),
                simulateColorBlindness(textColor, filter)
            );
        }
    }

	function handleHexInput(event: Event, colorType: "bg" | "text") {
        const input = event.target as HTMLInputElement;
        const value = input.value.trim();
        if (!/^#[0-9A-Fa-f]{6}$/.test(value)) return;
        if (colorType === "bg") bgColor = value;
        else textColor = value;
        updateContrast();
    }

	function getAccessibilityLevel(ratio: number) {
        if (ratio >= CONTRAST_RATIO_AAA) return "AAA";
        if (ratio >= CONTRAST_RATIO_AA) return "AA";
        return "Fail";
    }

    onMount(updateContrast);
</script>

<svelte:head>
  <title>Assure la conformité de ton site et rends-le accessible à tous grâce à notre testeur de contraste en ligne - forabetter.tech</title>
  <meta name="description" content="Assure la conformité de ton site et rends-le accessible à tous grâce à notre testeur de contraste en ligne." />
</svelte:head>

<Filters />

<Header />
<Plant class="absolute top-[150px] end-[0] w-[90px] sm:w-[150px]" />
<div class="relative w-full max-w-5xl mx-auto px-4 mb-10">
	<article class="w-full px-10 pb-10 bg-[var(--background)] border">
		<h1>Tester le contraste des couleurs</h1>

        <p class="mb-10">
            Le testeur de contraste de forabetter.tech te permet de vérifier en un clic si les couleurs de texte et d’arrière-plan de ton site sont accessibles 
            et conformes aux normes WCAG. Obtiens instantanément le ratio de contraste entre deux couleurs, pour garantir une expérience utilisateur 
            optimale et un site web inclusif pour tous, y compris les personnes malvoyantes ou daltoniennes.
        </p>

        <div class="w-full flex flex-row gap-5 flex-wrap justify-start items-end">
            <div class="grow">
                <label for="hexaBg" class="font-black my-5">Couleur de fond :</label>
                <div class="input-container mb-5">
                    <input
                        id="hexaBg"
                        type="text"
                        bind:value={bgColor}
                        on:input={(e) => handleHexInput(e, "bg")}
                        pattern="#[0-9A-Fa-f]{6}"
                        aria-label="code hexadecimal fond"
                        title="Entre un code hexadécimal valide (ex: #FF5733)"
                    />
                    <input type="color" bind:value={bgColor} on:input={updateContrast} aria-label="Choisir couleur de fond" />
                </div>
                <Button handleClick={adjustBgColor} label="Ajuster le fond">Ajuster le fond</Button>
            </div>
            <div class="grow">
                <label for="hexaText" class="font-black my-5">Couleur du texte :</label>
                <div class="input-container mb-5">
                    <input
                        id="hexaText"
                        type="text"
                        bind:value={textColor}
                        on:input={(e) => handleHexInput(e, "text")}
                        pattern="#[0-9A-Fa-f]{6}"
                        aria-label="code hexadecimal texte"
                        title="Entre un code hexadécimal valide (ex: #FF5733)"
                    />
                    <input type="color" bind:value={textColor} on:input={updateContrast} aria-label="Choisir couleur de texte" />
                </div>
                <Button handleClick={adjustTextColor} label="Ajuster le texte">Ajuster le texte</Button>
            </div>
        </div>

        <hr class="my-10">

        <div class="flex flex-row gap-4 justify-start items-center mb-5">
            <div class={"badge " + getAccessibilityLevel(visualContrasts.contrast).toLowerCase()}>
                {getAccessibilityLevel(visualContrasts.contrast)}
            </div>
            <div class="p-3 border grow" style="background-color: {bgColor}; color: {textColor};">
                Contraste sans handicap visuel
            </div>
        </div>
        {#each FILTERS as filter}
            <div class="flex flex-row gap-4 justify-start items-center mb-5">
                <div class={"badge " + getAccessibilityLevel(visualContrasts[filter]).toLowerCase()}>
                    {getAccessibilityLevel(visualContrasts[filter])}
                </div>
                <div class="p-3 border grow" style="background-color: {bgColor}; color: {textColor}; filter: url(#{[filter]});">
                    Contraste avec daltonisme <b>{FILTERS_DATA[filter].label}</b>
                </div>
            </div>
        {/each}
        
		<Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
	</article>
</div>

<style>
	.input-container {
		background-color: var(--foreground);
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
        padding: 5px 15px;
	}
    .input-container input {
        color: var(--background);
		background-color: var(--foreground);
    }
    .input-container input[type='text'] {
        width: 90px;
        height: 30px;
		padding: 0 3px;
    }
    .input-container input[type='color'] {
        width: 30px;
        height: 30px;
		background: none;
		cursor: pointer;
    }

	.badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		padding: 10px;
		border-radius: 50%;
		font-size: 0.85rem;
		font-weight: bold;
		text-align: center;
		border-width: 3px;
	}
	.aaa {
		border-color: #4caf50;
		color: #4caf50;
		background-color: #000f00;
	}
	.aa {
		border-color: #ffae00;
		color: #ffae00;
		background-color: #000f00;
	}
	.fail {
		border-color: #ff7070;
		color: #ff7070;
		background-color: #000000;
	}
</style>
