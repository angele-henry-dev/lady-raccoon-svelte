<script lang="ts">
	import Link from "./Link.svelte";

	export let title: string;
	export let description: string;
	export let href: string = "";
	export let link: string = "";
	export let target: "_blank" | "_self" = "_self";
	export let image: string = "";
</script>

<div class="relative overflow-hidden grid grid-cols-1 {image ? 'md:grid-cols-2' : ''} gap-4 bg-[var(--background)] border group">
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[var(--color-lavanda-light)] group-hover:scale-[1000%] duration-500 z-[0]"
  ></div>
  <div class="flex flex-col justify-start items-start p-5 group-hover:text-[var(--background)] z-[1]">
    <h2>{ title }</h2>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if link && href}
      <div class="border-t rounded-none pt-5 mt-5">
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
