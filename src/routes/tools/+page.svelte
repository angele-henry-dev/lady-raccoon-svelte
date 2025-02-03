<script lang="ts">
    import { onMount } from 'svelte';
    import { CONTRAST_RATIO_AA_L, CONTRAST_RATIO_AAA, CONTRAST_RATIO_AA, contrastRatio, adjustTextColor } from '$lib/contrast';

    let bgColor = "#ffffff";
    let textColor = "#aaaaaa";
    let contrast = 0;
    let accessibility = "";
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
		accessibility = getAccessibilityLevel(contrast);
	}

    function getAccessibilityLevel(ratio: number) {
        if (ratio >= CONTRAST_RATIO_AAA) return "✅ Niveau AAA (Excellent)";
        if (ratio >= CONTRAST_RATIO_AA) return "✅ Niveau AA (Bon)";
        if (ratio >= CONTRAST_RATIO_AA_L) return "⚠️ Niveau AA (Texte Large uniquement)";
        return "❌ Insuffisant";
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

    <div class="results">
        <p>Ratio de contraste : <strong>{contrast.toFixed(2)}</strong></p>
        <p>{accessibility}</p>
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
    
    /* Style du switch */
    .switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 20px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 20px;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    input:checked + .slider {
        background-color: #4caf50;
    }
    input:checked + .slider:before {
        transform: translateX(14px);
    }
</style>
