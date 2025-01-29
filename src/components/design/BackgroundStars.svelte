<script lang="ts">
    import { onMount } from "svelte";
  
    interface Star {
      size: number;
      top: string;
      left: string;
      opacity: number;
      animationDelay: string;
    }
  
    export let smallCount: number = 100;
    export let mediumCount: number = 50;
    export let largeCount: number = 25;
  
    let stars: Star[] = [];
  
    onMount(() => {
      const generateStars = (count: number, size: number): Star[] => {
        return Array.from({ length: count }).map(() => ({
          size,
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          opacity: 0.5 + Math.random() * 0.5,
          animationDelay: `${Math.random() * 2}s`,
        }));
      };
  
      stars = [
        ...generateStars(smallCount, 1),  // Little stars
        ...generateStars(mediumCount, 2), // Medium stars
        ...generateStars(largeCount, 3),  // Big stars
      ];
    });
</script>

<div class="retrobgStars" aria-hidden="true">
    {#each stars as star, i}
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
    <div class="shootingStar"></div>
</div>

<style>
.retrobgStars {
  --star-color: #fff;
  --tail-length: 6em;
  --tail-height: 2px;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: 0.5;
  z-index: -1;
}

.star {
  position: absolute;
  background: var(--star-color);
  border-radius: 50%;
  box-shadow: 0 0 2px var(--star-color);
  pointer-events: none;
  animation: twinkle 2s infinite;
}
@keyframes twinkle {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.shootingStar {
  --rotation: 160deg;
  position: absolute;
  top: 60%;
  left: -20px;
  width: var(--tail-length);
  height: var(--tail-height);
  background: linear-gradient(45deg, #fff, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px #fff);
  animation:
    tail 30s ease-in-out infinite,
    shooting 30s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .shootingStar {
    display: none;
    animation: none;
  }
}
@keyframes shooting {
  0% {
    transform: translateX(-20px) translateY(-200px) rotate(var(--rotation));
  }
  7% {
    transform: translateX(1000px) translateY(-600px) rotate(var(--rotation));
  }
  100% {
    transform: translateX(1000px) translateY(-600px) rotate(var(--rotation));
  }
}
@keyframes tail {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .retrobgStars {
    opacity: 0.7;
  }
  .star {
    width: 1px !important;
    height: 1px !important;
  }
}
</style>
