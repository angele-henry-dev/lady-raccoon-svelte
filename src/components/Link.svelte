<script lang="ts">
	export let href: string;
	export let children: any;
	export let title: string = children;
	export let target: "_blank" | "_self" = "_self";
	export let linkType: "text" | "simple" | "button" | "outline" = "simple";

	const labelText = target === '_blank'
		? `Ouvre dans une nouvelle fenêtre ${title}`
		: `Ouvre la page ${title}`;

	let generatedClass = "";
	if (linkType === "simple") {
		generatedClass = "py-1 hover:px-3 text-[var(--secondary)] hover:text-[var(--background)] hover:bg-[var(--secondary)]";
	} else if (linkType === "button") {
		generatedClass = "px-6 py-3 text-[var(--background)] border border-[var(--secondary)] hover:text-[var(--secondary)] bg-[var(--secondary)] hover:bg-[var(--background)]";
	} else if (linkType === "outline") {
		generatedClass = "px-6 py-3 text-[var(--secondary)] border border-[var(--secondary)] hover:text-[var(--background)] bg-[var(--background)] hover:bg-[var(--secondary)]";
	} else {
		generatedClass = "py-1 hover:px-3 hover:text-[var(--background)] hover:bg-[var(--secondary)]";
	}
</script>

<a
    href={href}
    title={labelText}
    aria-label={labelText}
    target={target}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	class={generatedClass}
>
	{@render children()}
	{#if target === '_blank'}
		<span aria-hidden="true" class="ml-1">→</span>
	{/if}
</a>

<style>
	@media (prefers-reduced-motion: no-preference) {
		a {
			transition: all 0.3s ease;
		}
	}
</style>
