
<script lang="ts">
	interface Props {
		children: any;
		label: string;
		color?: string;
        handleClick: () => void;
	}

	let { handleClick, children, label, color="primary" }: Props = $props();
</script>

<button 
    class="inline-block mt-6 px-6 py-3 
        rounded-xl font-semibold 
        text-[var(--background)] hover:text-[var(--background)] 
        {color === "primary" ? 'bg-[var(--primary)]' : 'bg-[var(--secondary-light)]'} 
        {color === "primary" ? 'hover:bg-[var(--secondary-light)]' : 'hover:bg-[var(--primary)]'} 
        transition z-20"
    aria-label={label} 
    onclick={handleClick} 
>
    {@render children()}
</button>
