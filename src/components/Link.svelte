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
		generatedClass = "no-underline text-[var(--foreground)]";
	} else if (linkType === "button") {
		generatedClass = "no-underline px-3 py-3 text-[var(--background)] hover:text-[var(--background)] bg-[var(--secondary)] hover:bg-[var(--primary)]";
	} else if (linkType === "outline") {
		generatedClass = "no-underline px-3 py-2 text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--primary)] hover:text-[var(--background)] bg-[var(--background)] hover:bg-[var(--primary)]";
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
