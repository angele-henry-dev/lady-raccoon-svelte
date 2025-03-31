<div aria-hidden="true" {...$$restProps}>
  <div class="moon relative size-full"></div>
</div>

<style scoped>
  :root {
    --moon-color-dark: var(--color-white);
    --shadow-color: 107, 121, 194;
  }

  .moon {
    background-color: #ffffff;
    border-radius: 50%;
  }
  .moon:before {
    content: "";
    position: absolute;
    background-color: var(--moon-color-dark);
    height: 30%;
    width: 30%;
    border-radius: 50%;
    top: 20%;
    left: 15%;
  }
  .moon:after {
    content: "";
    position: absolute;
    background-color: var(--moon-color-dark);
    height: 15%;
    width: 15%;
    border-radius: 50%;
    top: 60%;
    left: 40%;
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

<!-- <div aria-hidden="true" {...$$restProps}>
  <div class="moon size-full"></div>
</div>

<style scoped>
  :root {
    --moon-color: var(--color-white);
    --shadow-color: 107, 121, 194;
  }
  .moon {
    background-color: var(--moon-color);
    border-radius: 50%;
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
</style> -->
