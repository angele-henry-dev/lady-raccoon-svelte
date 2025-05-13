<script>
	import Cloud from "./Cloud.svelte";
</script>

<div class="board">
  <div class="stars">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
  </div>
  <div class="shadow"></div>
  <Cloud class="absolute top-[50%] start-[5%] scale-100" />
  <Cloud class="absolute top-[25%] end-[10%] scale-100" />
  <Cloud class="absolute top-[10%] end-[60%] scale-60" />
</div>

<style>
    .board {
        --star-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0.6;
        z-index: 0;
    }

    .stars .star {
        position: absolute;
        width: 10px;
        height: 10px;
    }
    .stars .star::before, .stars .star::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 3px;
        background: #fff;
        border-radius: 50%;
        animation: shine 1s ease-in-out infinite alternate;
        transform-origin: middle;
        box-shadow: 0 0 6px 3px rgba(255, 255, 255, 0.15);
    }
    .stars .star::before {
        transform: translate(-50%, -50%);
    }
    .stars .star::after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .stars .star:nth-child(1) {
        top: 3%;
        left: 3%;
    }
    .stars .star:nth-child(1)::before, .stars .star:nth-child(1)::after {
        animation-delay: 1s;
    }
    .stars .star:nth-child(2) {
        top: 20%;
        left: 23%;
        transform: scale(1.4);
    }
    .stars .star:nth-child(3) {
        top: 3%;
        right: 7%;
        transform: scale(0.7);
    }
    .stars .star:nth-child(4) {
        top: 9%;
        left: 59%;
        transform: scale(1.5);
    }
    .stars .star:nth-child(4)::before, .stars .star:nth-child(4)::after {
        animation-delay: 1.5s;
    }
    .stars .star:nth-child(5) {
        top: 19%;
        left: 69%;
    }
    .stars .star:nth-child(5)::before, .stars .star:nth-child(5)::after {
        animation-delay: 1s;
    }
    .stars .star:nth-child(6) {
        top: 49%;
        left: 0;
        transform: scale(0.7);
    }
    .stars .star:nth-child(6)::before, .stars .star:nth-child(6)::after {
        animation-delay: 1s;
    }
    @keyframes shine {
        from {
            height: 3px;
        }
        to {
            height: 100%;
        }
    }

    .shadow {
        position: absolute;
        top: 26%;
        left: 50%;
        transform: translateX(-50%) scale(1);
        width: 650px;
        height: 600px;
        background-image: radial-gradient(circle, hsla(219, 35%, 10%, 0.7), transparent 70%);
        border-radius: 50%;
        animation: aurora 6s ease infinite alternate;
    }
    @keyframes aurora {
        from {
            transform: translateX(-50%) scale(1);
        }
        to {
            transform: translateX(-50%) scale(1.05);
        }
    }
</style>
