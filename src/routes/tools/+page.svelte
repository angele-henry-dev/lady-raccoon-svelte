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

<section class="w-5/6 flex flex-col my-5 mx-auto">
	<h1>Testeur de Contraste (WCAG 2.1)</h1>

    <h2>Contraste</h2>
    <div class="controls">
        <label>
            🎨 Couleur de fond :
            <input type="color" bind:value={bgColor} on:input={updateContrast} />
			<input
				type="text"
				bind:value={bgColor}
				on:input={(e) => handleHexInput(e, "bg")}
				pattern="#[0-9A-Fa-f]{6}"
				aria-label="code hexadecimal"
				title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
			/>
			<button class="adjust-button" on:click={adjustBgColor}>🎨 Ajuster Fond</button>
        </label>
        <label>
            🖋 Couleur du texte :
            <input type="color" bind:value={textColor} on:input={updateContrast} />
			<input
				type="text"
				bind:value={textColor}
				on:input={(e) => handleHexInput(e, "text")}
				pattern="#[0-9A-Fa-f]{6}"
				aria-label="code hexadecimal"
				title="Veuillez entrer un code hexadécimal valide (ex: #FF5733)"
			/>
			<button class="adjust-button" on:click={adjustTextColor}>🖋 Ajuster Texte</button>
        </label>
    </div>

    <div class="results">
        <p>Ratio de contraste : <strong>{visualContrasts.contrast.toFixed(2)} {getAccessibilityLevel(visualContrasts.contrast)}</strong></p>
    </div>

    <div class="preview" style="background-color: {bgColor}; color: {textColor};">
        <p>Exemple de texte ajusté automatiquement.</p>
    </div>

    <h2>Simulation de handicap visuel</h2>
    <div class="simulation">
        <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#protanopia);">
            <p>Protanopie (Manque de rouge)</p>
        </div>
		<p>Ratio de contraste simulé : <strong>{visualContrasts.protanopia.toFixed(2)} {getAccessibilityLevel(visualContrasts.protanopia)}</strong></p>

        <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#deuteranopia);">
            <p>Deutéranopie (Manque de vert)</p>
        </div>
		<p>Ratio de contraste simulé : <strong>{visualContrasts.deuteranopia.toFixed(2)} {getAccessibilityLevel(visualContrasts.deuteranopia)}</strong></p>

        <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#tritanopia);">
            <p>Tritanopie (Manque de bleu)</p>
        </div>
		<p>Ratio de contraste simulé : <strong>{visualContrasts.tritanopia.toFixed(2)} {getAccessibilityLevel(visualContrasts.tritanopia)}</strong></p>

        <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#achromatopsia);">
            <p>Achromatopsie (Noir & Blanc)</p>
        </div>
		<p>Ratio de contraste simulé : <strong>{visualContrasts.achromatopsia.toFixed(2)} {getAccessibilityLevel(visualContrasts.achromatopsia)}</strong></p>
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
</section>

<style>
    .controls {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }
    .controls label {
        display: flex;
        align-items: center;
        gap: 10px;
    }
	.controls input[type="text"] {
        width: 90px;
        text-transform: uppercase;
        text-align: center;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .adjust-button {
        background-color: #4caf50;
        color: white;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
    }
    .adjust-button:hover {
        background-color: #45a049;
    }
    .preview {
        padding: 1rem;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        text-align: center;
    }
    .results {
        font-size: 1.2rem;
    }
	.simulation {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 10px;
        margin-top: 20px;
    }

	input {
		color: var(--background);
		border: none;
	}
</style>
