<script lang="ts">
    import { onMount } from 'svelte';
    import { CONTRAST_RATIO_AA_L, CONTRAST_RATIO_AAA, CONTRAST_RATIO_AA, contrastRatio, adjustBgColorAuto, adjustTextColorAuto } from '$lib/contrast';

    let bgColor = "#ffffff";
    let textColor = "#000000";
    let contrast = 0;

    function adjustTextColor() {
		textColor = adjustTextColorAuto(bgColor, textColor);
		updateContrast();
    }
    function adjustBgColor() {
		bgColor = adjustBgColorAuto(bgColor, textColor);
		updateContrast();
    }

	function updateContrast() {
		contrast = contrastRatio(bgColor, textColor);
	}

    // Calculates the marker position on the scale (0% = Insufficient, 100% = AAA)
    function getMarkerPosition(): string {
        if (contrast < CONTRAST_RATIO_AA_L) return "0%";    // Insufficient
        if (contrast < CONTRAST_RATIO_AA) return "25%";     // AA (Large text)
        if (contrast < CONTRAST_RATIO_AAA) return "75%";    // AA
        return "100%";                        				// AAA
    }

	function handleHexInput(event: Event, colorType: "bg" | "text") {
        const input = event.target as HTMLInputElement;
        let value = input.value.trim();

		if (colorType === "bg") bgColor = value;
		else textColor = value;
		updateContrast();
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

	<div class="contrast-scale">
        <div class="scale-bar">
            <div class="marker" style="left: {getMarkerPosition()};"></div>
        </div>
        <div class="scale-labels">
            <span>❌ Insuffisant</span>
            <span>⚠️ AA (Texte Large)</span>
            <span>✅ AA</span>
            <span>🏆 AAA</span>
        </div>
    </div>

    <div class="results">
        <p>Ratio de contraste : <strong>{contrast.toFixed(2)}</strong></p>
    </div>

    <div class="preview" style="background-color: {bgColor}; color: {textColor};">
        <p>Exemple de texte ajusté automatiquement.</p>
    </div>

    <h2>Simulation de handicap visuel</h2>
    <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#protanopia);">
        <p>Ce texte simule un handicap visuel : Protanopie (Manque de rouge).</p>
    </div>
    <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#deuteranopia);">
        <p>Ce texte simule un handicap visuel : Deutéranopie (Manque de vert).</p>
    </div>
    <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#tritanopia);">
        <p>Ce texte simule un handicap visuel : Tritanopie (Manque de bleu).</p>
    </div>
    <div class="preview simulation" style="background-color: {bgColor}; color: {textColor}; filter: url(#achromatopsia);">
        <p>Ce texte simule un handicap visuel : Achromatopsie (Noir & Blanc).</p>
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
    .preview {
        padding: 1rem;
        border: 1px solid #ccc;
        margin-bottom: 20px;
    }
    .results {
        font-size: 1.2rem;
    }
	.simulation {
        margin-top: 20px;
        border: 2px dashed #888;
    }

    /* Style de l'échelle de contraste */
    .contrast-scale {
        margin: 20px 0;
        text-align: center;
    }
    .scale-bar {
        width: 100%;
        height: 10px;
        background: linear-gradient(to right, #ff4d4d, #ffcc00, #4caf50, #0088ff);
        border-radius: 5px;
        position: relative;
    }
    .marker {
        position: absolute;
        top: -5px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 50%;
        transition: left 0.3s ease-in-out;
    }
    .scale-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        margin-top: 5px;
    }

	input {
		color: var(--background);
		border: none;
	}
	input:invalid {
		border: red solid 3px;
	}
</style>
