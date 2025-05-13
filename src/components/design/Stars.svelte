<script lang="ts">
  import { onMount } from "svelte";

  interface Star {
    size: number;
    top: string;
    left: string;
  }

  let starsLayer: Star[] = [];
  let starsLayerBig: Star[] = [];

  const centeredRandom = (spread: number = 20) => {
    return 40 + (Math.random() - 0.5) * 60;
  };

  onMount(() => {
    const isMobile = window.innerWidth < 768;
    const generateStars = (count: number, size: number): Star[] => {
      return Array.from({ length: count }).map(() => ({
        size: size,
        top: `${centeredRandom(20)}vh`,
        left: `${Math.random() * 100}vw`
      }));
    };

    starsLayer = generateStars(isMobile ? 10 : 20, 0.2);
    starsLayerBig = generateStars(isMobile ? 5 : 10, 0.3);
  });
</script>

<div class="starfield" aria-hidden="true">
  {#each starsLayer as star}
    <div
      class="star relative"
      style="
        top: {star.top};
        left: {star.left};
        font-size: {star.size}em;
      "
    ></div>
  {/each}
  {#each starsLayerBig as star}
    <div
      class="star relative"
      style="
        top: {star.top};
        left: {star.left};
        font-size: {star.size}em;
      "
    ></div>
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

  .star:before,
  .star:after {
    content: "";
    position: absolute;
    background: var(--star-color);
    width: 1em;
    height: 1.15em;
    box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
  }

  .star:before {
    transform: rotate(-45deg) skewX(22.5deg) skewY(22.5deg);
  }

  .star:after {
    transform: rotate(45deg) skewX(22.5deg) skewY(22.5deg);
  }
</style>
