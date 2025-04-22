<script lang="ts">
	import Link from "$components/Link.svelte";

	export let title: string;
	export let description: string;
	export let href: string = "";
	export let label: string = "";
	export let target: "_blank" | "_self" = "_self";
</script>

<div class="relative overflow-hidden flex flex-col bg-[var(--background)] border group">
  <div 
    aria-hidden="true"
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[var(--secondary)] group-hover:scale-[1000%] duration-500 z-[0]"
  ></div>
  <div class="flex flex-col justify-start items-start p-5 group-hover:text-[var(--background)] z-[1]">
    <h2>{ title }</h2>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if label && href}
      <div class="w-full border-t rounded-none pt-5 mt-5 text-center">
        <Link title={title} label={label} href={href} target={target} />
      </div>
    {/if}
  </div>
</div>
