<script lang="ts">
	import Link from "$components/Link.svelte";
  import { fly, fade } from 'svelte/transition';
	import Button from "./Button.svelte";

  let { 
    selectedTag = $bindable(), 
    tags = [],
    title,
    description,
    href = "",
    label = "",
    target = "_self",
  } = $props();

</script>

<div
  class="relative flex flex-col bg-[var(--background)] border mb-4"
  in:fly={{ y: 20, duration: 400 }}
  out:fade={{ duration: 200 }}
>
  <div class="flex flex-col justify-start items-start px-5 pb-5 z-[1]">
    <h2 class="mb-2">{ title }</h2>
    <div class="flex flex-row gap-2 mb-10">
      {#each tags as tag}
        <Button
            handleClick={() => selectedTag = tag}
            label="Uniquement les éléments de type {tag}"
        >
          {tag}
        </Button>
      {/each}
    </div>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if label && href}
      <div class="w-full pt-5 my-5">
        <Link title={`${label} ${title}`} href={href} target={target as "_blank" | "_self"} linkType="outline">{label}</Link>
      </div>
    {/if}
  </div>
</div>
