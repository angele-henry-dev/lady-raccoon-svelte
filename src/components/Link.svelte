<script lang="ts">
	export let href: string;
	export let title: string;
	export let label: string;
	export let target: "_blank" | "_self";
	export let colored: boolean = true;
	export let button: boolean = false;

	const labelText = target === '_blank'
		? `Ouvre dans une nouvelle fenêtre ${title}`
		: `Ouvre la page ${title}`;

	const basicClasses = `py-1 px-3 hover:text-[var(--background)] hover:bg-[var(--primary)] ${colored ? 'text-[var(--primary)]' : ''} group-hover:text-[var(--background)] group-hover:border`;
	const buttonClasses = "px-6 py-3 font-semibold text-[var(--background)] hover:text-[var(--background)] bg-[var(--secondary)] hover:bg-[var(--primary)]";
</script>

<a
    href={href}
    title={labelText}
    aria-label={labelText}
    target={target}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	class={ button ? buttonClasses : basicClasses }
>
    { label }
	{#if target === '_blank'}
		→
	{/if}
</a>

<style>
	@media (prefers-reduced-motion: no-preference) {
		a {
			transition: all 0.3s ease;
		}
	}
</style>
