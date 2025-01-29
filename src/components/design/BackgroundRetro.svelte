<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    export let play: boolean = false;
  
    const isVisible = writable(false);
  
    let mouseX: number = 0;
    let scrollY: number = 0;
    let width: number = 0;
  
    let retroLinesRef: HTMLDivElement | null = null;
  
    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => isVisible.set(entry.isIntersecting),
            { threshold: 0.1 }
        );
  
        if (retroLinesRef) {
            observer.observe(retroLinesRef);
        }
  
        const handleScroll = () => (scrollY = window.scrollY);
        const handleMouseMove = (event: MouseEvent) => {
            const rect = retroLinesRef?.getBoundingClientRect();
            mouseX = rect ? event.clientX - rect.left : 0;
        };
        const handleResize = () => (width = window.innerWidth);
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
    
        handleScroll();
        handleResize();
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            if (retroLinesRef) observer.unobserve(retroLinesRef);
        };
    });
</script>
  
<div class="retro" aria-hidden="true">
    <div class="retroSky">
      <div class="retroSunWrap">
        <div class="retroSunShadow"></div>
        <div class="retroSun"></div>
      </div>
      <div class="retroMountains">
        <div class="retroMountain retroMountainsLeft"></div>
        <div class="retroMountain retroMountainsRight"></div>
      </div>
    </div>
  
    <div class="retroGround">
      <div class="retroLinesWrap">
        <div
          class="retroLines {play ? 'retroLinesAnim' : ''}"
          style={!play ? `transform: rotateX(84deg) translateY(${$isVisible ? scrollY % 100 : 0}px);` : ""}
        >
          <div class="retroVlines">
            {#each Array.from({ length: 53 }) as _}
              <div class="retroVline"></div>
            {/each}
          </div>
          <div class="retroHlines">
            {#each Array.from({ length: 8 }) as _}
              <div class="retroHline"></div>
            {/each}
          </div>
        </div>
      </div>
      <div bind:this={retroLinesRef} class="retroGroundShadow"></div>
    </div>
  
    <svg height="0" width="0">
      <defs>
        <clipPath id="stripes" clipPathUnits="objectBoundingBox">
          <rect x="0" y="0" width="1" height="0.175" />
          <rect x="0" y="0.178" width="1" height="0.075" />
          <rect x="0" y="0.259" width="1" height="0.075" />
          <rect x="0" y="0.343" width="1" height="0.075" />
          <rect x="0" y="0.430" width="1" height="0.075" />
          <rect x="0" y="0.520" width="1" height="0.1" />
        </clipPath>
      </defs>
    </svg>
</div>  

<style>
.retro {
  position: relative;
  height: calc(80vh - 70px);
  width: 100%;
  color: var(--vt-c-pink);
}

.retroSky {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00000000 8%, var(--vt-c-pink));
}

.retroSunWrap {
  position: relative;
  width: calc(80vh - 70px);
  height: 100%;
}
.retroSun,
.retroSunShadow {
  --glow-color: var(--vt-c-orange);
  border-radius: 50%;
}
.retroSun {
  position: relative;
  background-image: linear-gradient(var(--vt-c-yellow), var(--glow-color), var(--vt-c-pink) 65%);
  clip-path: url(#stripes);
  height: 100%;
  width: 100%;
}
.retroSunShadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--glow-color);
  opacity: 0.5;
  clip-path: inset(-50% -50% 50% -50%);
  box-shadow: 0 0 160px 40px var(--glow-color);
}

.retroMountains {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
}
.retroMountain {
  position: absolute;
  width: 40%;
  height: 100%;
  background-color: var(--background);
  background-image: linear-gradient(var(--background) 80%, var(--background-soft));
}
.retroMountainsLeft {
  left: 0;
  clip-path: polygon(
    0% 100%,
    0% 55%,
    5% 60%,
    10% 55%,
    20% 50%,
    25% 42%,
    30% 38%,
    33% 35%,
    40% 45%,
    50% 50%,
    60% 70%,
    70% 85%,
    75% 82%,
    80% 91%,
    85% 90%,
    90% 95%,
    95% 98%,
    100% 100%
  );
}
.retroMountainsRight {
  right: 0;
  clip-path: polygon(
    0% 100%,
    5% 95%,
    10% 85%,
    15% 87%,
    20% 80%,
    25% 78%,
    30% 65%,
    40% 70%,
    50% 57%,
    60% 53%,
    67% 68%,
    70% 70%,
    75% 66%,
    80% 55%,
    90% 50%,
    95% 60%,
    100% 57%,
    100% 100%
  );
}

.retroGround {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 50%;
  bottom: 0;
  border-top: 2px solid var(--vt-c-pink);
  border-bottom: 2px solid var(--vt-c-pink);
  background-color: var(--background);
}
.retroGroundShadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--background) 0%, transparent);
}

.retroLinesWrap {
  height: 100%;
  perspective: 1000px;
  perspective-origin: center top;
}
.retroLines {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top center;
}
/* :not(.auto) .retroLines {
  transform: rotateX(84deg) translateY(39px));
} */
.retroLinesAnim {
  animation: 0.35s linear infinite retro-lines-anim;
}
@keyframes retro-lines-anim {
  from {
    transform: rotateX(84deg) translateY(0);
  }
  to {
    transform: rotateX(84deg) translateY(100px);
  }
}
.retroHlines,
.retroVlines {
  position: absolute;
  left: calc((900% - 100%) / -2);
  width: 900%;
  height: 500%;
}
.retroVlines {
  display: flex;
  justify-content: center;
}
.retroHline,
.retroVline {
  width: 100%;
  height: 100%;
  background-color: currentColor;
}
.retroHline {
  height: 3px;
}
.retroVline {
  width: 3px;
}
.retroHline + .retroHline {
  margin-top: 98px;
}
.retroVline + .retroVline {
  margin-left: 48px;
}
</style>
