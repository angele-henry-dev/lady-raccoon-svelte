<div class="moon" aria-hidden="true"></div>

<style scoped>
    .moon {
      position: absolute;
      top: 50px;
      left: 50%;
      width: 300px;
      height: 300px;
      background-color: var(--foreground);
      border-radius: 50%;
      transform: translateX(-50%);
      animation: pulseGlow 5s infinite ease-in-out, floating 6s infinite ease-in-out;
      z-index: -1;
    }
    @keyframes floating {
      0% { transform: translate(-50%, 0); }
      50% { transform: translate(-50%, -10px); }
      100% { transform: translate(-50%, 0); }
    }
    @keyframes pulseGlow {
      0% {
          box-shadow: 0 0 80px rgba(0, 213, 255, 0.6),
                      0 0 150px rgba(0, 213, 255, 0.4),
                      0 0 250px rgba(0, 213, 255, 0.2);
      }
      50% {
          box-shadow: 0 0 100px rgba(0, 213, 255, 0.8),
                      0 0 180px rgba(0, 213, 255, 0.5),
                      0 0 300px rgba(0, 213, 255, 0.3);
      }
      100% {
          box-shadow: 0 0 80px rgba(0, 213, 255, 0.6),
                      0 0 150px rgba(0, 213, 255, 0.4),
                      0 0 250px rgba(0, 213, 255, 0.2);
      }
    }
</style>
