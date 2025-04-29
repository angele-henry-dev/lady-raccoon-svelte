
<script lang="ts">
	export let children: any;
	export let label: string;
	export let colored: boolean = false;
    export let disabled: boolean = false;
    export let active: boolean = false;
	export let handleClick: () => void;
</script>

<button 
    class="flex flex-row gap-3 inline-block my-2 px-3 py-1 
        text-base hover:text-[var(--background)] 
        bg-[var(--background)] border 
        pointer transition z-20
        {active ? 'active ' : ''}
        {colored ? 'colored ' : ''}
        "
    aria-label={label} 
    disabled={disabled} 
    onclick={handleClick} 
>
    {@render children()}
</button>

<style>
    button {
        background-color: var(--background);
        border-color: var(--primary);
        color: var(--primary);
    }
    button:hover {
        background-color: var(--primary);
        border-color: var(--primary);
        color: var(--background);
    }
    button.active {
        background-color: var(--primary);
        color: var(--background);
    }

    button.colored {
        background-color: var(--background);
        border-color: var(--color-yellow);
        color: var(--color-yellow);
    }
    button.colored:hover {
        background-color: var(--color-yellow);
        color: var(--background);
    }
    button.colored.active {
        background-color: var(--color-yellow);
        color: var(--background);
    }

    button:disabled:hover,
    button:disabled {
        background-color: var(--background);
        border-color: #a2a2a2;
        color: #a2a2a2;
        cursor: not-allowed;
        opacity: 0.6;
    }
</style>
