<script lang="ts">
    import { onMount } from 'svelte';
    import {
		/* CONTRAST_RATIO_AA_L,
		CONTRAST_RATIO_AA,
		CONTRAST_RATIO_AAA_L, */
		CONTRAST_RATIO_AAA,
		contrastRatio,
		adjustBgColorAuto,
		adjustTextColorAuto,
		simulateColorBlindness
	} from '$lib/contrast';
	import Button from '$components/Button.svelte';
	import Header from '$components/design/Header.svelte';
	import Plant from '$components/design/Plant.svelte';

    const contrasts = [
        {
            "title": "protanopie",
            "technical": "protanopia"
        },
        {
            "title": "deutéranopie",
            "technical": "deuteranopia"
        },
        {
            "title": "tritanopie",
            "technical": "tritanopia"
        },
        {
            "title": "achromatopsie",
            "technical": "achromatopsia"
        }
    ];

    let bgColor = "#f8f8f8";
    let textColor = "#111110";
    let visualContrasts = {
        contrast: 0,
        protanopia: 0,
        deuteranopia: 0,
        tritanopia: 0,
        achromatopsia: 0
    };

    function adjustTextColor() {
		textColor = adjustTextColorAuto(bgColor, textColor);
		updateContrast();
    }
    function adjustBgColor() {
		bgColor = adjustBgColorAuto(bgColor, textColor);
		updateContrast();
    }

	function updateContrast() {
        visualContrasts.contrast = contrastRatio(bgColor, textColor);
        
        (["protanopia", "deuteranopia", "tritanopia", "achromatopsia"] as const).forEach(type => {
            visualContrasts[type as keyof typeof visualContrasts] = contrastRatio(
                simulateColorBlindness(bgColor, type),
                simulateColorBlindness(textColor, type)
            );
        });
    }

	function handleHexInput(event: Event, colorType: "bg" | "text") {
        const input = event.target as HTMLInputElement;
        const value = input.value.trim();
        if (!/^#[0-9A-Fa-f]{6}$/.test(value)) return;

        if (colorType === "bg") bgColor = value;
        else textColor = value;
        updateContrast();
    }

	function getAccessibilityLevels(ratio: number) {
        return [
            /* { label: "AA 18pt", reached: ratio >= CONTRAST_RATIO_AA_L },
            { label: "AA", reached: ratio >= CONTRAST_RATIO_AA },
            { label: "AAA 18pt", reached: ratio >= CONTRAST_RATIO_AAA_L }, */
            { label: "AAA", reached: ratio >= CONTRAST_RATIO_AAA },
        ];
    }

    onMount(updateContrast);
</script>

<svelte:head>
  <title>Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne.</title>
  <meta name="description" content="Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne." />
  <meta property="og:title" content="Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne." />
  <meta property="og:description" content="Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne." />
  <meta property="og:image" content="https://forabetter.tech/og-tools.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://forabetter.tech/tools/contrast-checker" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne." />
  <meta name="twitter:description" content="Assurez la conformité de votre site et rendez-le accessible à tous grâce à notre testeur de contraste en ligne." />
  <meta name="twitter:image" content="https://forabetter.tech/og-tools.png" />
  <link rel="canonical" href="https://forabetter.tech/tools/contrast-checker" />
</svelte:head>

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
                <div class="input-container">
                    <input
                        type="text"
                        bind:value={bgColor}
                        on:input={(e) => handleHexInput(e, "bg")}
                        pattern="#[0-9A-Fa-f]{6}"
                        aria-label="code hexadecimal fond"
                        title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
                    />
                    <input type="color" bind:value={bgColor} on:input={updateContrast} id="hexaBg" />
                </div>
                <Button handleClick={adjustBgColor} label="Ajuster le fond">Ajuster le fond</Button>
            </div>
            <div class="grow">
                <label for="hexaText" class="font-black my-5">Couleur du texte :</label>
                <div class="input-container">
                    <input
                        type="text"
                        bind:value={textColor}
                        on:input={(e) => handleHexInput(e, "text")}
                        pattern="#[0-9A-Fa-f]{6}"
                        aria-label="code hexadecimal texte"
                        title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
                    />
                    <input type="color" bind:value={textColor} on:input={updateContrast} id="hexaText" />
                </div>
                <Button handleClick={adjustTextColor} label="Ajuster le texte">Ajuster le texte</Button>
            </div>
        </div>

        <hr class="my-10">

        <div class="flex flex-row gap-4 justify-start items-center mb-5">
            <div class={getAccessibilityLevels(visualContrasts.contrast)[0].reached ? "badge success" : "badge error"}>
                {getAccessibilityLevels(visualContrasts.contrast)[0].reached ? "Pass" : "Fail"}
            </div>
            <div class="p-3 border grow" style="background-color: {bgColor}; color: {textColor};">
                Contraste sans handicap visuel
            </div>
        </div>
        {#each contrasts as contrast}
            <div class="flex flex-row gap-4 justify-start items-center mb-5">
                <div class={getAccessibilityLevels(visualContrasts[contrast.technical as keyof typeof visualContrasts])[0].reached ? "badge success" : "badge error"}>
                    {getAccessibilityLevels(visualContrasts[contrast.technical as keyof typeof visualContrasts])[0].reached ? "Pass" : "Fail"}
                </div>
                <div class="p-3 border grow" style="background-color: {bgColor}; color: {textColor}; filter: url(#{[contrast.technical]});">
                    Contraste avec daltonisme <b>{contrast.title}</b>
                </div>
            </div>
        {/each}
        
		<Plant class="absolute bottom-0 start-0 md:start-[-15%] w-[90px] sm:w-[150px] z-[-1]" />
	</article>
</div>

<svg height="0" width="0">
	<defs>
		<filter id="protanopia">
			<feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0
													0.558, 0.442, 0, 0, 0
													0, 0.242, 0.758, 0, 0
													0, 0, 0, 1, 0"/>
		</filter>
		<filter id="deuteranopia">
			<feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0
													0.7, 0.3, 0, 0, 0
													0, 0.3, 0.7, 0, 0
													0, 0, 0, 1, 0"/>
		</filter>
		<filter id="tritanopia">
			<feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0
													0, 0.433, 0.567, 0, 0
													0, 0.475, 0.525, 0, 0
													0, 0, 0, 1, 0"/>
		</filter>
		<filter id="achromatopsia">
			<feColorMatrix type="matrix" values="0.299, 0.587, 0.114, 0, 0
													0.299, 0.587, 0.114, 0, 0
													0.299, 0.587, 0.114, 0, 0
													0, 0, 0, 1, 0"/>
		</filter>
	</defs>
</svg>

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
	.success {
		border-color: #4caf50;
		color: #4caf50;
		background-color: #000f00;
	}
	.error {
		border-color: #ff7070;
		color: #ff7070;
		background-color: #000000;
	}
</style>
