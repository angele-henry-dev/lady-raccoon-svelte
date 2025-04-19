<script lang="ts">
	import Link from "./Link.svelte";

	export let type: string;
	export let title: string;
	export let description: string;
	export let href: string = "";
	export let label: string = "";
	export let target: "_blank" | "_self" = "_self";
	export let isNew: boolean;
</script>

<div class="relative overflow-hidden flex flex-col bg-[var(--background)] border">
  <div class="flex flex-col justify-start items-start p-5 blend z-[1]">
    <h2>{ title }</h2>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if label && href}
      <div class="w-full border-t rounded-none pt-5 mt-5 text-center">
        <Link title={title} label={label} href={href} target={target} button={true} />
      </div>
    {/if}
  </div>
</div>
