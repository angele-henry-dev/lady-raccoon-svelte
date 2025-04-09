<script lang="ts">
	import Link from "./Link.svelte";

	interface Props {
    title: string;
    badges: string[];
    description: string;
    image: string;
    link: string;
	}

	let { title, badges, description, image, link }: Props = $props();
</script>

<div class="relative card p-5 rounded-xl transition grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[850px] z-10">
  <div class="mx-auto flex flex-col justify-start items-start">
    <h2 class="text-xl font-semibold mb-3">{ title }</h2>
    <div class="mb-5">
      {#each badges as badge}
        <span class="text-sm capitalize px-2 py-1 mr-3 bg-[var(--primary)] text-[var(--background)] rounded-full">{ badge }</span>
      {/each}
    </div>
    <div>
        {@html description}
    </div>
    <div>
      <Link href={link} label="Acheter" target="_blank" color="secondary" />
    </div>
  </div>
  <div class="mx-auto max-w-[250px]" aria-hidden="true">
    <img src={ image } alt={ title } width="376" height="250" class="w-full h-auto" />
  </div>
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
