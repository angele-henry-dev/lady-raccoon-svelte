<script lang="ts">
	export let classes: string = "";
	export let full: boolean = true;
</script>

<div aria-hidden="true" class="{classes}">
  <div class="moon relative size-full rounded-full { full ? 'full bg-[var(--moon-color)]' : 'bg-transparent' } -z-1">
    {#if full}
      <div class="absolute top-[20%] start-[15%] bg-[var(--moon-color-dark)] size-[30%] rounded-full"></div>
      <div class="absolute top-[60%] start-[40%] bg-[var(--moon-color-dark)] size-[15%] rounded-full"></div>
      <div class="absolute top-[40%] start-[50%] bg-[var(--moon-color-dark)] size-[10%] rounded-full"></div>
    {/if}
  </div>
</div>

<style>
  :root {
    --moon-color-dark: var(--color-white);
    --moon-color: #ffffff;
    --shadow-color: 250, 250, 250;
  }

  .moon {
    box-shadow: 25px 10px 0px 0px #EFD19F;
  }
  .moon.full {
    box-shadow: 0 0 100px rgba(var(--shadow-color), 0.8),
                0 0 180px rgba(var(--shadow-color), 0.5);
  }

  @media (prefers-reduced-motion: no-preference) {
    .moon.full {
      animation: pulseGlow 5s infinite ease-in-out;
    }
    @keyframes pulseGlow {
      0% {
          box-shadow: 0 0 80px rgba(var(--shadow-color), 0.6),
                      0 0 150px rgba(var(--shadow-color), 0.4);
      }
      50% {
          box-shadow: 0 0 100px rgba(var(--shadow-color), 0.8),
                      0 0 180px rgba(var(--shadow-color), 0.5);
      }
      100% {
          box-shadow: 0 0 80px rgba(var(--shadow-color), 0.6),
                      0 0 150px rgba(var(--shadow-color), 0.4);
      }
    }
  }
</style>
