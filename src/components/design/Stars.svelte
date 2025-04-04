<script lang="ts">
  import { onMount } from "svelte";

  interface Star {
    size: number;
    top: string;
    left: string;
    opacity: number;
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
      }));
    };

    starsLayer1 = generateStars(isMobile ? 50 : 200, 1);
    starsLayer2 = generateStars(isMobile ? 25 : 100, 2);
    starsLayer3 = generateStars(isMobile ? 12 : 50, 3);
  });
</script>

<div class="starfield" aria-hidden="true">
  <div class="shooting_star"></div>
  {#each [
    { class: 'starslayer1', stars: starsLayer1 },
    { class: 'starslayer2', stars: starsLayer2 },
    { class: 'starslayer3', stars: starsLayer3 }
  ] as layer}
    <div class={layer.class}>
      {#each Array(2) as _}
        {#each layer.stars as star}
          <div
            class="star"
            style="
              width: {star.size}px;
              height: {star.size}px;
              top: {star.top};
              left: {star.left};
              opacity: {star.opacity};"
          ></div>
        {/each}
      {/each}
    </div>
  {/each}
</div>

<style scoped>
  @media (prefers-reduced-motion: no-preference) {
    .starslayer1,
    .starslayer2,
    .starslayer3 {
      animation: scrollStars 100s linear infinite;
    }
    .starslayer2 {
      animation-duration: 200s;
    }
    .starslayer3 {
      animation-duration: 300s;
    }
    @keyframes scrollStars {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-50%);
      }
    }

    .shooting_star {
      --rotation: 160deg;
      --star-tail-length: 6em;
      --star-tail-height: 2px;
      position: absolute;
      left: -20px;
      top: 60%;
      width: var(--star-tail-length);
      height: var(--star-tail-height);
      color: #fff;
      background: linear-gradient(45deg, #fff, transparent);
      border-radius: 50%;
      filter: drop-shadow(0 0 6px #fff);
      animation: shooting 60s ease-in-out infinite;
    }
    @keyframes shooting {
      0% {
        transform: translateX(-70px) translateY(-200px) rotate(var(--rotation));
      }
      7% {
        transform: translateX(1000px) translateY(-600px) rotate(var(--rotation));
      }
      100% {
        transform: translateX(1000px) translateY(-600px) rotate(var(--rotation));
      }
    }
  }

  .starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.5;
    z-index: 0;
  }

  .starslayer1,
  .starslayer2,
  .starslayer3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
  }
  .starslayer1:last-of-type, 
  .starslayer2:last-of-type, 
  .starslayer3:last-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
  }

  .star {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 2px #fff;
    pointer-events: none;
  }
</style>
