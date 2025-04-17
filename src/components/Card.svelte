<script lang="ts">
	import Link from "./Link.svelte";

	interface Props {
    title: string;
    description: string;
    href?: string;
    link?: string;
    target?: "_blank" | "_self";
    image?: string;
    badges?: string[];
	}

	let { title, badges = [], description, href, image, link, target = "_self" }: Props = $props();
</script>

<div class="relative card p-5 rounded-xl transition grid grid-cols-1 {image ? 'md:grid-cols-2' : ''} gap-4 max-w-[850px] z-10">
  <div class="mx-auto flex flex-col justify-start items-start">
    <h2 class="text-xl font-semibold mb-3">{ title }</h2>
    <div class="mb-5">
      {#each badges as badge}
        <span class="text-sm capitalize px-2 py-1 mr-3 bg-[var(--primary)] text-[var(--background)] rounded-full">{ badge }</span>
      {/each}
    </div>
    <div class="flex-grow">
        {@html description}
    </div>
    {#if link && href}
      <div>
        <Link href={href} label={link} target={target} />
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
  --blur: 5px;
  border: 1px solid rgba(255, 255, 255, 0.222);
}
.card::before {
  content: '';
  position: absolute;
  top: calc(var(--blur) / 2 * -1);
  left: calc(var(--blur) / 2 * -1);
  width: calc(100% + var(--blur));
  height: calc(100% + var(--blur));
  background-color: rgba(22, 30, 51, 0.9);
  filter: blur(var(--blur));
  z-index: -1;
}
.card:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
}
</style>
