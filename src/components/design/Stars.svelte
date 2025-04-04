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

<style scoped>
  @media (prefers-reduced-motion: no-preference) {
    .starslayer1 .star {
      animation: animStar 100s linear infinite;
    }
    .starslayer2 .star {
      animation: animStar 200s linear infinite;
    }
    .starslayer3 .star {
      animation: animStar 300s linear infinite;
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
    @keyframes animStar {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-200vh);
      }
    }
  }

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
