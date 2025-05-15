
<script lang="ts">
	export let children: any;
	export let label: string;
	export let active: boolean = false;
    export let disabled: boolean = false;
	export let handleClick: () => void;
</script>

<button 
    class="flex flex-row px-3 py-1 pointer border bg-[var(--background)] {active ? 'active ' : ''} hover:text-[var(--secondary)] hover:border-[var(--secondary)]"
    aria-label={label} 
    disabled={disabled} 
    onclick={handleClick} 
>
    {@render children?.()}
</button>

<style>
    button.active {
        background-color: var(--secondary);
        border-color: var(--secondary);
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
