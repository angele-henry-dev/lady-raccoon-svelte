<script lang="ts">
	import Link from "$components/Link.svelte";

	export let title: string;
	export let description: string;
	export let href: string = "";
	export let label: string = "";
	export let target: "_blank" | "_self" = "_self";
</script>

<div class="relative overflow-hidden flex flex-col bg-[var(--background)] border group">
  <div class="flex flex-col justify-start items-start p-5 z-[1]">
    <h2>{ title }</h2>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if label && href}
      <div class="pt-5 my-5 text-center">
        <Link title={label} href={href} target={target} linkType="outline">{label}</Link>
      </div>
    {/if}
  </div>
</div>
