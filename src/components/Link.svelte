<script lang="ts">
	export let children: any;
	export let href: string = '';
	export let title: string = '';
	export let target: "_blank" | "_self" = "_self";
	export let linkType: "text" | "simple" | "button" | "outline" = "simple";

	const labelText = target === '_blank'
		? `Ouvre ${title || href} dans une nouvelle fenêtre`
		: `Ouvre ${title || href}`;

	let generatedClass = "";
	if (linkType === "text") {
		generatedClass = "pointer text-[var(--foreground)] no-underline hover:underline";
	} else if (linkType === "button") {
		generatedClass = "pointer px-3 py-3 text-[var(--background)] bg-[var(--primary)] border border-[var(--primary)] no-underline hover:text-[var(--primary)] hover:bg-[var(--color-black-light)] hover:border-[var(--primary)]";
	} else if (linkType === "outline") {
		generatedClass = "pointer px-3 py-2 text-[var(--primary)] border border-[var(--primary)] bg-[var(--background)] no-underline hover:border-[var(--primary)] hover:text-[var(--background)] hover:bg-[var(--primary)]";
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
	{@render children?.()}
	{#if target === '_blank'}
		<span aria-hidden="true">→</span>
	{/if}
</a>

<style>
	@media (prefers-reduced-motion: no-preference) {
		a {
			transition: all 0.3s ease;
		}
	}
</style>
