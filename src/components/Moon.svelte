<div aria-hidden="true" {...$$restProps}>
  <div class="moon relative size-full bg-[var(--moon-color)] rounded-full">
    <div class="absolute top-[20%] start-[15%] bg-[var(--moon-color-dark)] size-[30%] rounded-full"></div>
    <div class="absolute top-[60%] start-[40%] bg-[var(--moon-color-dark)] size-[15%] rounded-full"></div>
    <div class="absolute top-[40%] start-[50%] bg-[var(--moon-color-dark)] size-[10%] rounded-full"></div>
  </div>
</div>

<style scoped>
  :root {
    --moon-color-dark: var(--color-white);
    --moon-color: #ffffff;
    --shadow-color: 107, 121, 194;
  }

  .moon {
          box-shadow: 0 0 100px rgba(var(--shadow-color), 0.8),
                      0 0 180px rgba(var(--shadow-color), 0.5),
                      0 0 300px rgba(var(--shadow-color), 0.3);
  }

  @media (prefers-reduced-motion: no-preference) {
    .moon {
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
