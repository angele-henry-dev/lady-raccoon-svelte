<script lang="ts">
	interface Props {
		href: string;
		label: string;
		target: "_blank" | "_self";
		color?: string;
	}

	let { href, label, target, color="primary" }: Props = $props();
</script>

<a
    href="{href}"
    title={target === '_blank' ? 'Ouvre dans une nouvelle fenêtre ' + label : label}
    aria-label={target === '_blank' ? 'Ouvre dans une nouvelle fenêtre ' + label : label}
    target="{target}"
    class="inline-block mt-6 px-6 py-2 
        rounded-full font-semibold text-sm 
        text-[var(--background)] hover:text-[var(--background)] 
        {color === "primary" ? 'bg-[var(--primary)]' : 'bg-[var(--secondary-light)]'} 
        {color === "primary" ? 'hover:bg-[var(--secondary-light)]' : 'hover:bg-[var(--primary)]'} 
        transition z-20"
>
    { label }
</a>
