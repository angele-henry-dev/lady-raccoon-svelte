<script>
	import Cloud from "./Cloud.svelte";
	import Star from "./Star.svelte";
</script>

<div class="board">
    <Star class="absolute top-[3%] start-[3%] scale-100" />
    <Star class="absolute top-[20%] start-[23%] scale-100" />
    <Star class="absolute top-[3%] end-[7%] scale-100" />
    <Star class="absolute top-[9%] start-[59%] scale-100" />
    <Star class="absolute top-[19%] start-[69%] scale-100" />
    <Star class="absolute top-[49%] start-[0%] scale-100" />

    <Cloud class="absolute top-[50%] start-[5%] scale-100" />
    <Cloud class="absolute top-[25%] end-[10%] scale-100" />
    <Cloud class="absolute top-[10%] end-[60%] scale-60" />

    <div class="shadow"></div>
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

    /* 
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
     */

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
