<script lang="ts">
	import Ribbon from "$components/design/Ribbon.svelte";
	import Link from "$components/Link.svelte";
  import { fly, fade } from 'svelte/transition';

	export let tags: string[];
	export let title: string;
	export let description: string;
	export let href: string = "";
	export let label: string = "";
	export let target: "_blank" | "_self" = "_self";
	export let isNew: boolean = false;
</script>

<div
  class="relative flex flex-col bg-[var(--background)] border mb-4"
  in:fly={{ y: 20, duration: 400 }}
  out:fade={{ duration: 200 }}
>
  <div class="w-full flex flex-row">
    {#if isNew}
      <Ribbon text="Nouveauté" color="var(--color-yellow)" />
    {/if}
    {#each tags as tag}
      <Ribbon text={tag} />
    {/each}
  </div>
  <div class="flex flex-col justify-start items-start px-5 pb-5 z-[1]">
    <h2>{ title }</h2>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if label && href}
      <div class="w-full border-t rounded-none pt-5 mt-5">
        <Link title={title} label={label} href={href} target={target} />
      </div>
    {/if}
  </div>
</div>
