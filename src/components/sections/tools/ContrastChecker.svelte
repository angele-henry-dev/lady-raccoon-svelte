<script lang="ts">
    import { onMount } from 'svelte';
    import {
		CONTRAST_RATIO_AA_L,
		CONTRAST_RATIO_AA,
		CONTRAST_RATIO_AAA_L,
		CONTRAST_RATIO_AAA,
		contrastRatio,
		adjustBgColorAuto,
		adjustTextColorAuto,
		simulateColorBlindness
	} from '$lib/contrast';
	import contrasts from "$content/contrasts.json";
	import Button from '$components/Button.svelte';

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
            { label: "AA 18pt", reached: ratio >= CONTRAST_RATIO_AA_L },
            { label: "AA", reached: ratio >= CONTRAST_RATIO_AA },
            { label: "AAA 18pt", reached: ratio >= CONTRAST_RATIO_AAA_L },
            { label: "AAA", reached: ratio >= CONTRAST_RATIO_AAA },
        ];
    }

    onMount(updateContrast);
</script>

<h2 class="text-2xl md:text-4xl mb-20">Tester le contraste des couleurs</h2>
<div class="pickers flex flex-col gap-5 flex-wrap my-10">
    <div class="flex flex-row gap-5 flex-wrap">
        <div class="flex flex-row gap-5 flex-wrap p-5 pt-0">
            <div class="flex flex-col">
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
            <div class="flex flex-col">
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
        <div class="contrast flex flex-col p-5 pt-0">
            <p class="my-3 font-black">Contraste</p>
            <p class="text-center">Ratio : {visualContrasts.contrast.toFixed(2)}</p>
            <div class="accessibility-levels">
                {#each getAccessibilityLevels(visualContrasts.contrast) as level}
                    <div class={level.reached ? "badge success" : "badge error"}>
                        <p>{level.label}</p>
                        <p>- {level.reached ? "OK" : "X"} -</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="preview flex flex-col p-5 pt-0" style="background-color: {bgColor}; color: {textColor};">
        <div>
            <p class="my-3 font-black">Normal text - 12pt</p>
            <p class="" style="font-size: 12pt;">I see dead pixels… but not with this contrast!</p>
        </div>
        <div>
            <p class="my-3 font-black">Large text - 18pt</p>
            <p style="font-size: 18pt;">Mission: Increase contrast. Status: In Progress...</p>
        </div>
    </div>
</div>

<h2>Simulation de vision</h2>
<div class="flex flex-row flex-wrap mt-10">
    {#each contrasts as contrast}
    <div class="pickers flex flex-col gap-5 flex-wrap mb-10">
        <div class="contrast flex flex-col p-5 pt-0">
            <p class="my-3 font-black">Contraste {contrast.title}</p>
            <p class="text-center">Ratio : {visualContrasts[contrast.technical as keyof typeof visualContrasts].toFixed(2)}</p>
            <div class="accessibility-levels">
                {#each getAccessibilityLevels(visualContrasts[contrast.technical as keyof typeof visualContrasts]) as level}
                    <div class={level.reached ? "badge success" : "badge error"}>
                        <p>{level.label}</p>
                        <p>- {level.reached ? "OK" : "X"} -</p>
                    </div>
                {/each}
            </div>
        </div>
        <div class="preview flex flex-col p-5 pt-0" style="background-color: {bgColor}; color: {textColor}; filter: url(#{[contrast.technical]});">
            <div>
                <p class="my-3 font-black">Normal text - 12pt</p>
                <p class="" style="font-size: 12pt;">{contrast.example_1}</p>
            </div>
            <div>
                <p class="my-3 font-black">Large text - 18pt</p>
                <p style="font-size: 18pt;">{contrast.example_2}</p>
            </div>
        </div>
    </div>
    {/each}
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
	.pickers {
		border-width: 1px;
		border-radius: 10px;
		width: fit-content;

		.contrast {
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
		}
		.preview {
			flex-grow: 1;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			border-top-width: 1px;
		}
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
		cursor: pointer;
    }

	.accessibility-levels {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 10px;
		justify-content: center;
	}
	.badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90px;
		height: 90px;
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
