<script lang="ts">
    import { onMount } from 'svelte';
    import { CONTRAST_RATIO_AA_L, CONTRAST_RATIO_AAA, CONTRAST_RATIO_AA, contrastRatio, adjustBgColorAuto, adjustTextColorAuto, simulateColorBlindness } from '$lib/contrast';

    let bgColor = "#ffffff";
    let textColor = "#000000";
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

		visualContrasts.protanopia = contrastRatio(
			simulateColorBlindness(bgColor, "protanopia"),
			simulateColorBlindness(textColor, "protanopia")
		);
		visualContrasts.deuteranopia = contrastRatio(
			simulateColorBlindness(bgColor, "deuteranopia"),
			simulateColorBlindness(textColor, "deuteranopia")
		);
		visualContrasts.tritanopia = contrastRatio(
			simulateColorBlindness(bgColor, "tritanopia"),
			simulateColorBlindness(textColor, "tritanopia")
		);
		visualContrasts.achromatopsia = contrastRatio(
			simulateColorBlindness(bgColor, "achromatopsia"),
			simulateColorBlindness(textColor, "achromatopsia")
		);
	}

	function handleHexInput(event: Event, colorType: "bg" | "text") {
        const input = event.target as HTMLInputElement;
        let value = input.value.trim();

		if (colorType === "bg") bgColor = value;
		else textColor = value;
		updateContrast();
    }

	function getAccessibilityLevel(ratio: number) {
        if (ratio >= CONTRAST_RATIO_AAA) return "✅ Niveau AAA (Excellent)";
        if (ratio >= CONTRAST_RATIO_AA) return "✅ Niveau AA (Bon)";
        if (ratio >= CONTRAST_RATIO_AA_L) return "⚠️ Niveau AA (Texte Large uniquement)";
        return "❌ Insuffisant";
    }

    onMount(updateContrast);
</script>

<svelte:head>
	<title>Lady Raccoon • Outils d'accessibilité</title>
	<meta name="Description" content="Outils d'accessibilité" />
</svelte:head>

<section class="container flex flex-col mt-5 mx-auto">
	<h1>Testeur de Contraste (WCAG 2.1)</h1>

	<div class="pickers mt-10 flex flex-row gap-5 flex-wrap">
		<div class="flex flex-col p-10 pt-5">
			<div class="flex flex-row gap-5 flex-wrap">
				<div class="flex flex-col">
					<h2>Couleur de fond :</h2>
					<div class="input-container">
						<input
							type="text"
							bind:value={bgColor}
							on:input={(e) => handleHexInput(e, "bg")}
							pattern="#[0-9A-Fa-f]{6}"
							aria-label="code hexadecimal"
							title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
						/>
						<input type="color" bind:value={bgColor} on:input={updateContrast} />
					</div>
					<button on:click={adjustBgColor} class="px-2 py-1 mt-4" title="Ajuster le fond">Ajuster le fond</button>
				</div>
				<div class="flex flex-col">
					<h2>Couleur du texte :</h2>
					<div class="input-container">
						<input
							type="text"
							bind:value={textColor}
							on:input={(e) => handleHexInput(e, "text")}
							pattern="#[0-9A-Fa-f]{6}"
							aria-label="code hexadecimal"
							title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
						/>
						<input type="color" bind:value={textColor} on:input={updateContrast} />
					</div>
					<button on:click={adjustTextColor} class="px-2 py-1 mt-4" title="Ajuster le texte">Ajuster le texte</button>
				</div>
			</div>
			<div>
				<h2>Contraste</h2>
				<p>Ratio : {visualContrasts.contrast.toFixed(2)}</p>
				<p>{getAccessibilityLevel(visualContrasts.contrast)}</p>
			</div>
		</div>
		<div class="preview flex flex-col p-10 pt-5" style="background-color: {bgColor}; color: {textColor};">
			<div>
				<h2>Normal text - 12px</h2>
				<p class="" style="font-size: 12px;">I see dead pixels… but not with this contrast!</p>
			</div>
			<div>
				<h2>Large text - 18px</h2>
				<p style="font-size: 18px;">Mission: Increase contrast. Status: In Progress...</p>
			</div>
		</div>
	</div>
</section>

<section class="container flex flex-col mb-5 mx-auto">
	<div class="flex flex-row gap-4 flex-wrap">
		<div class="pickers mt-10 flex flex-row gap-5 flex-wrap">
			<div class="flex flex-col p-10 pt-5">
				<h2>Contraste protanopie</h2>
				<p>Ratio : {visualContrasts.protanopia.toFixed(2)}</p>
				<p>{getAccessibilityLevel(visualContrasts.protanopia)}</p>
			</div>
			<div class="preview flex flex-col p-10 pt-5" style="background-color: {bgColor}; color: {textColor}; filter: url(#protanopia);">
				<div>
					<h2>Normal text - 12px</h2>
					<p class="" style="font-size: 12px;">It's dangerous to go alone! Take this contrast boost!</p>
				</div>
				<div>
					<h2>Large text - 18px</h2>
					<p style="font-size: 18px;">Ce texte est super efficace !</p>
				</div>
			</div>
		</div>
	
		<div class="pickers mt-10 flex flex-row gap-5 flex-wrap">
			<div class="flex flex-col p-10 pt-5">
				<h2>Contraste deutéranopie</h2>
				<p>Ratio : {visualContrasts.deuteranopia.toFixed(2)}</p>
				<p>{getAccessibilityLevel(visualContrasts.deuteranopia)}</p>
			</div>
			<div class="preview flex flex-col p-10 pt-5" style="background-color: {bgColor}; color: {textColor}; filter: url(#deuteranopia);">
				<div>
					<h2>Normal text - 12px</h2>
					<p class="" style="font-size: 12px;">May the contrast be with you...</p>
				</div>
				<div>
					<h2>Large text - 18px</h2>
					<p style="font-size: 18px;">Le futur est accessible. Enfin… presque.</p>
				</div>
			</div>
		</div>
	
		<div class="pickers mt-10 flex flex-row gap-5 flex-wrap">
			<div class="flex flex-col p-10 pt-5">
				<h2>Contraste tritanopie</h2>
				<p>Ratio : {visualContrasts.tritanopia.toFixed(2)}</p>
				<p>{getAccessibilityLevel(visualContrasts.tritanopia)}</p>
			</div>
			<div class="preview flex flex-col p-10 pt-5" style="background-color: {bgColor}; color: {textColor}; filter: url(#tritanopia);">
				<div>
					<h2>Normal text - 12px</h2>
					<p class="" style="font-size: 12px;">Neo, vois-tu enfin les contrastes de la Matrice ?</p>
				</div>
				<div>
					<h2>Large text - 18px</h2>
					<p style="font-size: 18px;">Error 404: Low contrast not found.</p>
				</div>
			</div>
		</div>
	
		<div class="pickers mt-10 flex flex-row gap-5 flex-wrap">
			<div class="flex flex-col p-10 pt-5">
				<h2>Contraste achromatopsie</h2>
				<p>Ratio : {visualContrasts.achromatopsia.toFixed(2)}</p>
				<p>{getAccessibilityLevel(visualContrasts.achromatopsia)}</p>
			</div>
			<div class="preview flex flex-col p-10 pt-5" style="background-color: {bgColor}; color: {textColor}; filter: url(#achromatopsia);">
				<div>
					<h2>Normal text - 12px</h2>
					<p class="" style="font-size: 12px;">Debugging contrast levels like a pro.</p>
				</div>
				<div>
					<h2>Large text - 18px</h2>
					<p style="font-size: 18px;">Accès autorisé : contraste optimal détecté.</p>
				</div>
			</div>
		</div>
	</div>
</section>

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
	.pickers {
		border-width: 1px;
		border-radius: 10px;
		width: fit-content;
	}
	.pickers button {
		width: 180px;
	}
	.preview {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		border-left-width: 1px;
	}
	.input-container {
		background-color: var(--foreground);
		border-radius: 5px;
		width: 180px;
        height: 30px;
		display: flex;
		justify-content: space-evenly;
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
    }
</style>
