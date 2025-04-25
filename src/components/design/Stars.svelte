<script lang="ts">
  import { onMount } from "svelte";

  interface Star {
    size: number;
    top: string;
    left: string;
    opacity: number;
    animationDelay: string;
  }

  let starsLayer1: Star[] = [];
  let starsLayer2: Star[] = [];
  let starsLayer3: Star[] = [];

  onMount(() => {
    const isMobile = window.innerWidth < 768;
    const generateStars = (count: number, size: number): Star[] => {
      return Array.from({ length: count }).map(() => ({
        size,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        opacity: 0.5 + Math.random() * 0.5,
        animationDelay: `${Math.random() * 2}s`,
      }));
    };

    starsLayer1 = generateStars(isMobile ? 50 : 200, 1);
    starsLayer2 = generateStars(isMobile ? 25 : 100, 2);
    starsLayer3 = generateStars(isMobile ? 12 : 50, 3);
  });
</script>

<div class="starfield" aria-hidden="true">
  <div class="shooting_star"></div>

  <div class="starslayer1">
    {#each starsLayer1 as star}
    <div
    class="star"
    style="
      width: {star.size}px;
      height: {star.size}px;
      top: {star.top};
      left: {star.left};
      opacity: {star.opacity};
      animation-delay: {star.animationDelay};
    "
  ></div>
    {/each}
    {#each starsLayer1 as star}
    <div
    class="star"
    style="
      width: {star.size}px;
      height: {star.size}px;
      top: {star.top};
      left: {star.left};
      opacity: {star.opacity};
      animation-delay: {star.animationDelay};
    "
  ></div>
    {/each}
  </div>
  

  {#each [
    { stars: starsLayer1, class: "starslayer1" },
    { stars: starsLayer2, class: "starslayer2" },
    { stars: starsLayer3, class: "starslayer3" }
  ] as layer}
    <div class={layer.class}>
      {#each layer.stars as star}
        <div
          class="star"
          style="
            width: {star.size}px;
            height: {star.size}px;
            top: {star.top};
            left: {star.left};
            opacity: {star.opacity};
            animation-delay: {star.animationDelay};
          "
        ></div>
      {/each}
    </div>
  {/each}  
</div>

<style>
  .starfield {
    --star-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.5;
    z-index: 0;
  }

  .star {
    position: absolute;
    background: var(--star-color);
    border-radius: 50%;
    box-shadow: 0 0 2px var(--star-color);
    pointer-events: none;
  }
</style>
