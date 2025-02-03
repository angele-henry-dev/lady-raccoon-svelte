<script lang="ts">
    import { onMount } from 'svelte';
    import { CONTRAST_RATIO_AA_L, CONTRAST_RATIO_AAA, CONTRAST_RATIO_AA, contrastRatio, adjustTextColor } from '$lib/contrast';

    let bgColor = "#ffffff";
    let textColor = "#aaaaaa";
    let contrast = 0;
	let autoAdjust = false;

	function setContrast() {
		if (autoAdjust) adjustContrast();
		else updateContrast();
	}

    function adjustContrast() {
		textColor = adjustTextColor(bgColor, textColor);
		updateContrast();
    }

	function updateContrast() {
		contrast = contrastRatio(bgColor, textColor);
	}

    // Calculates the marker position on the scale (0% = Insufficient, 100% = AAA)
    function getMarkerPosition() {
        if (contrast < CONTRAST_RATIO_AA_L) return "0%";    // Insufficient
        if (contrast < CONTRAST_RATIO_AA) return "25%";     // AA (Large text)
        if (contrast < CONTRAST_RATIO_AAA) return "75%";    // AA
        return "100%";                        				// AAA
    }

    onMount(setContrast);
</script>

<svelte:head>
	<title>Lady Raccoon • Outils d'accessibilité</title>
	<meta name="Description" content="Outils d'accessibilité" />
</svelte:head>

<section class="w-5/6 flex flex-col my-5 mx-auto">
	<h1>Testeur de Contraste (WCAG 2.1)</h1>

    <div class="controls">
        <label>
            🎨 Couleur de fond :
            <input type="color" bind:value={bgColor} on:input={setContrast} />
            <span>{bgColor}</span>
        </label>
        <label>
            🖋 Couleur du texte :
            <input type="color" bind:value={textColor} on:input={setContrast} />
            <span>{textColor}</span>
        </label>
    </div>

    <div class="switch-container">
        <label class="switch">
            <input type="checkbox" bind:checked={autoAdjust} on:change={setContrast} />
            <span class="slider"></span>
        </label>
        <span>⚡ Ajustement automatique du contraste</span>
    </div>

    <div class="preview" style="background-color: {bgColor}; color: {textColor};">
        <p>Exemple de texte ajusté automatiquement.</p>
    </div>

	<div>
		<button on:click={adjustContrast}>🔧 Ajuster le contraste</button>
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
    .switch-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }
    .preview {
        padding: 1rem;
        border: 1px solid #ccc;
        margin-bottom: 20px;
    }
    .results {
        font-size: 1.2rem;
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
</style>
