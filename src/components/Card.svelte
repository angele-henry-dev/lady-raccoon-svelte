<script lang="ts">
	import Link from "./Link.svelte";

	export let title: string;
	export let description: string;
	export let href: string = "";
	export let link: string = "";
	export let target: "_blank" | "_self" = "_self";
	export let image: string = "";
	export let badges: string[] = [];
</script>

<div class="relative card bg-[var(--background-light)] p-5 transition grid grid-cols-1 {image ? 'md:grid-cols-2' : ''} gap-4 max-w-[850px] z-10">
  <div class="flex flex-col justify-start items-start">
    <h2>{ title }</h2>
    <div class="mb-5">
      {#each badges as badge}
        <span class="text-sm capitalize px-2 py-1 mr-3 bg-[var(--primary)] text-[var(--background)]">{ badge }</span>
      {/each}
    </div>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if link && href}
      <div>
        <Link href={href} title={title} label={link} target={target} />
      </div>
    {/if}
  </div>
  {#if image}
    <div class="mx-auto max-w-[250px]" aria-hidden="true">
      <img src={ image } alt={ title } width="376" height="250" class="w-full h-auto" />
    </div>
  {/if}
</div>

<style>
.card {
  border: 1px solid rgb(68, 68, 68);
}
</style>
