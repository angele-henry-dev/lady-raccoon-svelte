<script lang="ts">
	interface Props {
		classes?: string;
		size?: string;
		full?: boolean;
	}

	let { classes, full = true, size = "200px" }: Props = $props();
</script>

<div aria-hidden="true" class="{classes} size-[{size}]">
  <div class="moon relative size-full rounded-full { full ? 'full bg-[var(--moon-color)]' : 'bg-transparent absolute -top-[60px]' } -z-1">
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
    --shadow-color: 107, 121, 194;
    /* --shadow-size: calc({size} * (40/100)); */
  }

  .moon {
    box-shadow: 40px 10px 0px 0px #EFD19F;
  }
  .moon.full {
    box-shadow: 0 0 100px rgba(var(--shadow-color), 0.8),
                0 0 180px rgba(var(--shadow-color), 0.5),
                0 0 300px rgba(var(--shadow-color), 0.3);
  }

  @media (prefers-reduced-motion: no-preference) {
    .moon.full {
      animation: pulseGlow 5s infinite ease-in-out;
    }
    @keyframes pulseGlow {
      0% {
          box-shadow: 0 0 80px rgba(var(--shadow-color), 0.6),
                      0 0 150px rgba(var(--shadow-color), 0.4),
                      0 0 250px rgba(var(--shadow-color), 0.2);
      }
      50% {
          box-shadow: 0 0 100px rgba(var(--shadow-color), 0.8),
                      0 0 180px rgba(var(--shadow-color), 0.5),
                      0 0 300px rgba(var(--shadow-color), 0.3);
      }
      100% {
          box-shadow: 0 0 80px rgba(var(--shadow-color), 0.6),
                      0 0 150px rgba(var(--shadow-color), 0.4),
                      0 0 250px rgba(var(--shadow-color), 0.2);
      }
    }
  }
</style>
